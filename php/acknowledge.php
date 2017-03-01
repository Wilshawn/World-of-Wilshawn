<?php
if(isset($_POST['submit'])) {
    $to = 'wilshawn.alexander@gmail.com'; // Email Address receipent
    $subject = 'World of Wilshawn New Contact Submission';
    $message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if ($email) {
        $headers .= "\r\nReply-To: $email";
    }
    $message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
    $message .= 'How can I help?: ' . $_POST['comments'];
    $headers = "From: webmaster@wilshawn.com\r\n";
    $headers .= 'Content-Type: text/plain; charset=utf-8';
    $success = mail($to, $subject, $message, $headers);
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>WORLD OF WILSHAWN</title>
    </head>
    <body>
        <?php if (isset($success) && $success) { ?>
        <h1>Thank You</h1>
        Your message has been sent.
        <?php } else { ?>
        <h1>Oops!</h1>
        Sorry, there was a problem sending your message.
        <?php  ?>
    </body>
</html>