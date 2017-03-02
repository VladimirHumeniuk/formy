<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

$to = "your@email.com";
$subject = "New email from your site!";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$phone_field = $_POST['phone'];
$message = $_POST['message'];

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$title = '<h3>Hello, sir! You have received a new mail via <span style="color: #3498db;">For</span><span style="color: #f1c40f;">my</span> on your awesome website!</h3>';

$body = "$title
        <br/>
        <b>From:</b> $name_field
        <br/>
        <b>E-Mail:</b> $email_field
        <br/>
        <b>Phone:</b> $phone_field
        <br/>
        <br/>
        <b>Message:</b>\n$message
        <br/>
        <br/>";

mail($to, $subject, $body, $headers);
}
?>