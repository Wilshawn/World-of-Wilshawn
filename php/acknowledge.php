<?php
if(isset($_POST['submit'])) {
    $to = 'wilshawn.alexander@gmail.com'; // Email Address receipent
    $subject = 'World of Wilshawn New Contact Submission';
    $message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
    $message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
    $message .= 'How can I help?: ' . $_POST['comments'];
    echo $message;
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>WORLD OF WILSHAWN</title>
    </head>
    <body>
        <h1>Thank You</h1>
        <p>Your message has been sent.</p>
        <h1>Oops!</h1>
        <p>Sorry, there was a problem sending your message.</p>
    </body>
</html>