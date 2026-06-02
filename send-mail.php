<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name     = htmlspecialchars(trim($_POST['name']));
    $email    = htmlspecialchars(trim($_POST['email']));
    $company  = htmlspecialchars(trim($_POST['company']));
    $revenue  = htmlspecialchars(trim($_POST['revenue']));
    $message  = htmlspecialchars(trim($_POST['message']));

    // Your email
    $to = "pradeepku041@gmail.com";

    // Subject
    $subject = "New Contact Form Inquiry";

    // Email Body
    $body = "
    <html>
    <body style='font-family:Arial;'>

        <h2>New Inquiry Received</h2>

        <table cellpadding='10' border='1' style='border-collapse:collapse;width:100%;'>

            <tr>
                <td><strong>Name</strong></td>
                <td>{$name}</td>
            </tr>

            <tr>
                <td><strong>Email</strong></td>
                <td>{$email}</td>
            </tr>

            <tr>
                <td><strong>Company</strong></td>
                <td>{$company}</td>
            </tr>

            <tr>
                <td><strong>Revenue</strong></td>
                <td>{$revenue}</td>
            </tr>

            <tr>
                <td><strong>Message</strong></td>
                <td>{$message}</td>
            </tr>

        </table>

    </body>
    </html>
    ";
$from="admin@elession.com";
    // Headers
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: {$name} <{$from}>" . "\r\n";

    // Send mail
    if(mail($to, $subject, $body, $headers)){

        echo "<span style='color:lightgreen;'>Message sent successfully!</span>";

    } else {

        echo "<span style='color:red;'>Failed to send message!</span>";

    }

} else {

    echo "Invalid Request";

}
?>