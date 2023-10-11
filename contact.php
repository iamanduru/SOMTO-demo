<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = $_POST['FirstName'];
    $last_name = $_POST['LastName'];
    $email = $_POST['Email'];
    $phone_number = $_POST['PhoneNumber'];
    $message = $_POST['Message'];

    //Additional validation

//Sending an email with the form date

$to = 'anyangomitchelle7@yahoo.com';
$subject = 'Contact form Submission';
$message_body = "First Name: $first_name\n";
$message_body .= "Last Name: $last_name\n";
$message_body .= "Email: $email\n";
$message_body .= "Phone Number: $phone_number\n";
$message_body .= "Message: $message\n";

mail($to, $subject, $message_body);

//Redirect  back to the contact page with a success message.
header('Location: index.html?success=1')
exit;
}
?>