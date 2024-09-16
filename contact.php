<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address (where the form will send emails)
    $to = "your-email@example.com";  // Change this to your email address

    // Subject of the email
    $subject = "New Contact Form Submission from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success message
        echo "Thank you! Your message has been sent.";
    } else {
        // Error message
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
}
?>
