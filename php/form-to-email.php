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

$email_from = "wilshawn.alexander@gmail.com";
$email_subject = "New Form Submission";
$email_body = "You have received a new message from $name. \n".
    "email address: $visitor_email\n".
    "Here is the message: \n $comments".
    
$to = "wilshawn.alexander@gmail.com";
$headers = "From: $email_from \r\n";

// Send the email
mail($to,$email_subject,$email_body,$headers);

?>