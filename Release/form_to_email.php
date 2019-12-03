<?php
if(!isset($_POST['submit'])){
    echo"error: you need to submit the form!";
}
$name = $_POST['name'];
$vistor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name)||empty($vistor_email)){
    echo "Name and email are mandatory";
    exit;
}
$email_from = '90sgirlalex@gmail.com';
$email_subject = "New Release Message";
$email_body = "You have received a message from $name.\n".
    "Sender email: $visitor_email".
    "Here is your message:\n $message".
$to = "alswhitlow@gmail.com";
$headers = "From $email_from";

mail($to,$email_subject,$email_body,$headers);
