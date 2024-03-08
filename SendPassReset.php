<?php
include 'header.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

// Function to generate a random 8-digit code
function generateRandomCode() {
    return str_pad(mt_rand(1, 99999999), 8, '0', STR_PAD_LEFT);
}


?>

<body class="home">
    <form action="SendPassReset.php" method="post">
        <label> Enter your user name or Email</label>
        <input type="text" name="usernameOrEmail" id="usernameOrEmail" required><br> 
        <input type="submit" value="Send an Email">  <br> <br> <br> 
        <a href="Login.php">Back To Login</a>
        </form>


</body>
        <script>
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          document.getElementById("light--to-dark-button")?.classList.add("dark--mode");
        } 
        if (localStorage.getItem("theme-color") === "light") {
          document.getElementById("light--to-dark-button")?.classList.remove("dark--mode");
        } 
       

      </script>
</html>


<?php 

include "footer.php";



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usernameOrEmail = $_POST['usernameOrEmail'];

    // Validate and sanitize user input
    $usernameOrEmail = filter_var($usernameOrEmail, FILTER_SANITIZE_STRING);

    // Trim any leading or trailing whitespaces
    $usernameOrEmail = trim($usernameOrEmail);

    // Check if the email exists in the database (case-insensitive)
    $stmt = Database::prepare("SELECT * FROM `user` WHERE LOWER(`userEmail`) = LOWER(?) OR LOWER(`userName`) = LOWER(?)");
    $stmt->bind_param('ss', $usernameOrEmail, $usernameOrEmail);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {



        // Email exists in the database, create a session key
        $user = $result->fetch_assoc();

        // Generate a random 8-digit code
        $resetToken = generateRandomCode();

        // Update the user record with the reset token and time
        $updateStmt = Database::prepare("UPDATE `user` SET `resetToken` = ?, `Reet_Generated_Time` = ? WHERE `userEmail` = ?");
        $currentTime = date("Y-m-d H:i:s");

        $updateStmt->bind_param('sss', $resetToken, $currentTime, $usernameOrEmail);
        $updateStmt->execute();

        // Send email with reset code using PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'crystesoftware@gmail.com';
            $mail->Password   = 'Hashcat@19180000';
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('user@mail.com', 'Your Name');
            $mail->addAddress($user['userEmail'], $user['userName']); // User's email and name

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Password Reset Code';
            $mail->Body    = 'Your password reset code For orimiSasaki.com is: ' . $resetToken . '. This code is valid for 15 minutes.';

            $mail->send();
            echo '<script>alert("Password reset code sent successfully.");</script>';
            header('Location: passwordReset.php');
            exit();
        } catch (Exception $e) {
            echo "Mailer Error: {$mail->ErrorInfo}";
            
        }

        $updateStmt->close(); // Close the statement here
    } else {
        echo '<script>alert("Email not found in the database. Please check your input.");</script>';
    }

    $stmt->close();
    exit();
} 

?>