<?php
if(!isset($_POST['email']))
{
    // This page should not be accessed directly. Need to submit the form.
    echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$comments = $_POST['comments'];

// Validate
if(empty($name)||empty($visitor_email)||empty($comments))
{
    echo "Name, Email, and Additional Comments is required!";
    exit;
}

// Email Notification
$email_from = "wilshawn.alexander@gmail.com";
$email_subject = "New Form Submission";
$email_body = "You have received a new message from $name. \n\n".
    "Email address: $visitor_email\n\n".
    "Here is the message: \n\n$comments ";
    
$to = "wilshawn.alexander@gmail.com";
$headers = "From: $email_from \r\n";

// Form Verfication
$user = "$visitor_email";
$user_subject = "Thank You from Wilshawn";
$user_headers = "From: $email_from \r\n";

$user_message = "Thank you for contacting Me!  I will get back to you shortly.";


// Send the email
mail($to,$email_subject,$email_body,$headers);

// Thank email
mail($user,$user_subject,$user_message,$user_headers);

// Redirect to Thank you Page
header("Location: https://worldofwilshawn.000webhostapp.com/thank-you.html");

?>