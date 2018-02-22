# Formy
<p align="center">
  <img src ="https://pp.userapi.com/c837734/v837734384/2bcd3/q7Fnn_Qaxts.jpg" />
</p>
Formy - its responsive and friendly contact form on html/sass/jquery/php and svg icons.

You can write me some emails with this form:  <a href="https://formy.vhumeniuk.com/">![Demo](https://img.shields.io/badge/watch-demo-green.svg)</a>

## How to use
Firsf of all, download and embed to your project styles and scripts:

```<link rel="stylesheet" href="css/formy.min.css">``` - between ``<head>``` and ```</head>``` tags. 

```<script src="js/formy.min.js"></script>```- after jquery, before the ```</body>``` tag

Then download into your project folder **php** with file **formy.php**.

When you download and embed all styles and scripts, you need markup for your form, so just copy code between comments ```<!-- Formy code -->  <!-- /Formy code -->``` from file **formy.html**, and paste into your layout. 

### HTML markup
Maybe it looks so massive, but this is due to the fact that SVG-icons take up much space, but trust me - it will be better than insert them as regular images.

```
<form id="formy" name="formy" onSubmit="return validate(event);">
		<div id="result"></div>
		<!--Name field-->
		<div class="input-field">
			<i>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19.79"><title>Name</title><path class="a" d="M7.72,2.15A3.13,3.13,0,0,0,6.49,4.74c0.06,0.78.22,1.79,0.22,1.79a0.92,0.92,0,0,0-.31.85c0.11,1.72.68,1,.8,1.73,0.28,1.81.93,1.49,0.93,2.48,0,1.65-.68,2.42-2.8,3.33S1,17,1,19v1H19V19c0-2-2.2-3.15-4.33-4.07s-2.8-1.68-2.8-3.33c0-1,.65-0.67.93-2.48,0.12-.75.69,0,0.8-1.73a0.92,0.92,0,0,0-.31-0.85s0.16-1,.22-1.79a3.09,3.09,0,0,0-2.3-3.1c-0.33-.34-0.56-0.88.47-1.42C9.44,0.11,8.92,1.28,7.72,2.15Z" transform="translate(-1 -0.21)"/></svg>
			</i>
			<input type="text" name="name" id="name" maxlength="60" data-validate required/>
			<label for="name">Name</label>
			<div class="lenghtCounter"><span></span></div>
		</div>
		<!--Email field-->
		<div class="input-field">
			<i>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12"><title>Email</title><path class="a" d="M1.57,5.29l7.5,4a2.16,2.16,0,0,0,1.81,0l7.5-4C18.88,5,19.34,4,18.44,4H1.52C0.62,4,1.09,5,1.57,5.29Zm17,2.2-7.73,4a1.7,1.7,0,0,1-.91.2,1.7,1.7,0,0,1-.91-0.2l-7.69-4C1,7.28,1,7.52,1,7.71V15a1.22,1.22,0,0,0,1,1H18a1.22,1.22,0,0,0,1-1V7.71C19,7.52,19,7.28,18.61,7.49Z" transform="translate(-1 -4)"/></svg>
			</i>
			<input type="email" name="email" id="email" maxlength="60" required/>
			<label for="email">Email</label>
			<div class="lenghtCounter"><span></span></div>
		</div>
		<!--Phone field-->
		<div class="input-field">
			<i>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.99 16"><title>Phone</title><path class="a" d="M11.23,11.23c-1.58,1.58-3.42,3.1-4.14,2.37-1-1-1.68-1.94-4-.1s-0.53,3.06.47,4.07c1.16,1.16,5.48.06,9.76-4.21s5.37-8.6,4.21-9.76c-1-1-2.23-2.76-4.06-.47s-0.94,2.93.1,4C14.32,7.81,12.81,9.65,11.23,11.23Z" transform="translate(-2 -2)"/></svg>
			</i>
			<input type="tel" name="phone" id="phone" maxlength="18" required/>
			<label for="phone">Phone</label>
			<div class="lenghtCounter"><span></span></div>
		</div>
		<!--Message field-->
		<div class="input-field">
			<i>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18"><title>Message</title><path class="a" d="M5.8,12.2V6H2A2,2,0,0,0,0,8v6a2,2,0,0,0,2,2H3v3l3-3h5a2,2,0,0,0,2-2V12.18l-0.2,0h-7ZM18,1H9A2,2,0,0,0,7,3v8h7l3,3V11h1a2,2,0,0,0,2-2V3A2,2,0,0,0,18,1Z" transform="translate(0 -1)"/></svg>
			</i>
			<textarea name="message" id="message"></textarea>
			<label for="message">Your message</label>
		</div>
		<!--Submit button-->
		<button type="submit" class="submit">
			Submit
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.2 17.6"><title>Submit</title><path class="a" d="M11.93,13.07S19,8,18.21,2.15a0.46,0.46,0,0,0-.11-0.27,0.44,0.44,0,0,0-.26-0.12C12.14,1,7.16,8.18,7.16,8.18c-4.32-.52-4,0.34-6,5.08-0.38.9,0.23,1.21,0.9,1l2.15-.81,2.59,2.65L6,18.25c-0.25.69,0.05,1.31,0.94,0.93C11.6,17.17,12.44,17.49,11.93,13.07Zm1-5.92a1.59,1.59,0,0,1,0-2.22,1.51,1.51,0,0,1,2.17,0,1.59,1.59,0,0,1,0,2.22A1.51,1.51,0,0,1,12.94,7.15Z" transform="translate(-1.07 -1.7)"/></svg>
		</button>
	</form>
  ```
### PHP
Before start using Formy on your website, you have to set your email adress in file formy.php in this field:
```
$to = "your@email.com";
```
 
### SASS
 Yeah, sass everywhere! But actually i use sass in this project just for easy color mixins. 
 ```
 $color-palette-green: #1abc9c
 $color-palette-red: #e74c3c
 $color-palette-grey: #3a3a3a
 
 $good: $color-palette-green //when everything is fine
 $bad: $color-palette-red //when something is invalid
 $default: $color-palette-grey // default state
 ```
### Inputs
Deafault Formy include 4 inputs: Name, Email, Phone and Textarea.
All of them except text are is required, but you can turn it off (or on for text) just by adding ```required``` attribute. (js validation begins work only if this attribute is turned on).

### Validation
I did not do too complex validation in this form. The first - is the standard HTML5 validation, then verification works on the minimum number of characters. In the field with the phone number is available only input numbers.
I do not limit the input characters in the text field, but instead I made to automatically height change depending on the amount of text.

### How is email from Formy looks like
<p align="left">
  <img src ="http://image.prntscr.com/image/23e356e1219e4cc5ba3eb38ed4e53f0d.png" />
</p>

### How much does it weigh
Less than 10 kb (838b php, 2,79kb css, 4,69kb js + around 1.5kb markup).

### Versions
Its just a first version, so think of it as an open beta testing. If it will be interesting to the community,
in the next version i will add some checkboxes, select lists and radio buttons.

### SVG Icons
In Formy i use svg icons Entypo by awesome Daniel Bruce. You can download whole pack from site [Entypo Icons](http://www.entypo.com/).
