// You probaly don't care what magic is here,but anyway...

// variables for validation
var nameField = document.querySelector("#name");
var emailField = document.querySelector("#email");
var phoneField = document.querySelector("#phone");
var messageField = document.querySelector("#message");
var passedValidation = false;

// validation based on fields length, i don't make anal-validator here, it's just for make sure user will not spam you with empty forms.
function validate(event) {
    event.stopPropagation();
    event.preventDefault();

    if (nameField.hasAttribute("required") && nameField.value.length < 3) {
        nameField.focus();
        passedValidation = false;
        $(nameField).prev().children().addClass("invalid");
        $(nameField).addClass("invalid");
        $(nameField).next().addClass("invalid");
        return false;
    } else {
        $(nameField).prev().children().removeClass("invalid");
        $(nameField).removeClass("invalid");
        $(nameField).next().removeClass("invalid");
        passedValidation = true;
    }

    if (emailField.hasAttribute("required") && emailField.value.length < 5) {
        emailField.focus();
        passedValidation = false;
        $(emailField).prev().children().addClass("invalid");
        $(emailField).addClass("invalid");
        $(emailField).next().addClass("invalid");
        return false;
    } else {
        $(emailField).prev().children().removeClass("invalid");
        $(emailField).removeClass("invalid");
        $(emailField).next().removeClass("invalid");
        passedValidation = true;
    }

    if (phoneField.hasAttribute("required") && phoneField.value.length < 9) {
        phoneField.focus();
        passedValidation = false;
        $(phoneField).prev().children().addClass("invalid");
        $(phoneField).addClass("invalid");
        $(phoneField).next().addClass("invalid");
        return false;
    } else {
        $(phoneField).prev().children().removeClass("invalid");
        $(phoneField).removeClass("invalid");
        $(phoneField).next().removeClass("invalid");
        passedValidation = true;
    }

    if (messageField.hasAttribute("required") && messageField.value.length < 12) {
        messageField.focus();
        $(messageField).prev().children().addClass("invalid");
        $(messageField).addClass("invalid");
        $(messageField).next().addClass("invalid");
        return false;
    } else {
        $(messageField).prev().children().removeClass("invalid");
        $(messageField).removeClass("invalid");
        $(messageField).next().removeClass("invalid");
    }
}
// This paint fields and icons in friendly green color, for make user thought that he was doing everything right

$(document).ready(function () {
    $("input, textarea").focus(function () {
        $(this).prev().children().addClass("active");
        $(this).next().addClass("active");
        $(this).parent().find(".lenghtCounter").show();
    }).blur(function () {
        $("svg").removeClass("active invalid");
        $(this).removeClass("invalid");
        $("label").removeClass("active invalid");
        $(".lenghtCounter").hide();
    })
    $(".input-field i").click(function(){
        $(this).next().focus();
    })
    $("input, textarea").blur(function () {
        if ($(this).val().length != 0) {
            $(this).next().addClass("filled");
        } else {
            $(this).next().removeClass("filled");
        }
    });
    // This prevents the user to input characters in a field for numbers
    $(phoneField).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
            $phone = $(this);

		if (key !== 8 && key !== 9) {
            if ($phone.val().length === 0) {
				$phone.val($phone.val() + '+');
			}
            if ($phone.val().length === 2) {
				$phone.val($phone.val() + ' ' + '(');
			}
			if ($phone.val().length === 7) {
				$phone.val($phone.val() + ')'+ ' ');
			}		
			if ($phone.val().length === 12) {
				$phone.val($phone.val() + '-');
			}
			if ($phone.val().length === 15) {
				$phone.val($phone.val() + '-');
			}
		}
        return (key == 8 || 
				key == 9 ||
				key == 46 ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105));	
    })
});

// Here we count symbols in input fields
$('input').keyup(function () {
    var field = $(this),
        counter = $(this).parent().find(".lenghtCounter span");

    field.bind('keydown', function () {
        setTimeout(function () {
            if ($(phoneField).is(":focus")) {
                counter.text(field.val().replace(/[^\d]/g,'').length + "/11")
            } else {
                counter.text(field.val().replace(/[^\d]/g,'').length + "/" + field.attr("maxlength"))
            }
        }, 4);
        if ($(this).val().length == $(this).attr("maxlength")) {
            counter.css("color", "#3498db");
        } else {
            counter.css("color", "inherit");
        }
    });
});

// Changing textarea height depending on the amount of text
$.each($("#message"), function () {
    var offset = this.offsetHeight - this.clientHeight;

    var resizeTextarea = function (el) {
        $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    $(this).on('keyup input', function () { resizeTextarea(this); })
});

// All ajax magic here 
$("#formy").submit(function (event) {
    var ajaxRequest;

    if (passedValidation) {

        $("#result").html('');
        $("#result").hide();

        var values = $(this).serialize();

        ajaxRequest = $.ajax({
            url: "/php/formy.php", //make sure, you have php-script in this direction
            type: "post",
            data: values
        });

        //Here we say to the user that he did everythig right, and the form is submitted...
        ajaxRequest.done(function (response, textStatus, jqXHR) {
            $("#result").removeClass("invalidRequest")
            $("#result").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2"><path class="a" d="M10,0.4A9.6,9.6,0,1,0,19.6,10,9.6,9.6,0,0,0,10,.4Zm0,17.2A7.6,7.6,0,1,1,17.6,10,7.6,7.6,0,0,1,10,17.6ZM7.5,9.75A1.64,1.64,0,0,0,9,8,1.64,1.64,0,0,0,7.5,6.25,1.64,1.64,0,0,0,6,8,1.64,1.64,0,0,0,7.5,9.75Zm5,0A1.64,1.64,0,0,0,14,8a1.64,1.64,0,0,0-1.5-1.75A1.64,1.64,0,0,0,11,8,1.64,1.64,0,0,0,12.5,9.75Zm1.84,1.59a0.76,0.76,0,0,0-1,.32A3.61,3.61,0,0,1,10,13.25a3.62,3.62,0,0,1-3.33-1.59,0.75,0.75,0,0,0-1.34.68A5.06,5.06,0,0,0,10,14.75a5.05,5.05,0,0,0,4.67-2.41A0.75,0.75,0,0,0,14.34,11.34Z" transform="translate(-0.4 -0.4)"/></svg>Submitted successfully!');
            $("#result").show().delay(5000).fadeOut('slow');
            $("#formy")[0].reset();
        });

        //...or that he (or you) is fucked up somewhere 
        ajaxRequest.fail(function () {
            $("#result").addClass("invalidRequest")
            $("#result").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2"><path class="a" d="M10,0.4A9.6,9.6,0,1,0,19.6,10,9.6,9.6,0,0,0,10,.4Zm0,17.2A7.6,7.6,0,1,1,17.6,10,7.6,7.6,0,0,1,10,17.6Zm2.5-7.85A1.64,1.64,0,0,0,14,8a1.64,1.64,0,0,0-1.5-1.75A1.64,1.64,0,0,0,11,8,1.64,1.64,0,0,0,12.5,9.75Zm-5,0A1.64,1.64,0,0,0,9,8,1.64,1.64,0,0,0,7.5,6.25,1.64,1.64,0,0,0,6,8,1.64,1.64,0,0,0,7.5,9.75Zm2.5,1.5a5.06,5.06,0,0,0-4.67,2.41,0.75,0.75,0,0,0,.34,1,0.76,0.76,0,0,0,.34.08,0.75,0.75,0,0,0,.67-0.41A3.59,3.59,0,0,1,10,12.75a3.62,3.62,0,0,1,3.33,1.59,0.75,0.75,0,0,0,1.34-.67A5.06,5.06,0,0,0,10,11.25Z" transform="translate(-0.4 -0.4)"/></svg>There is error while submit');
            $("#result").show().delay(5000).fadeOut('slow');
        })
    }
});