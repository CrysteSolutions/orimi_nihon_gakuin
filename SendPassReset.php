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
    <form action="" method="post">
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
        $currentTime = date("Y-m-d H:i:s");
        $_SESSION['resetEmail'] = $user['userEmail'];
        $_SESSION['resetTime'] =  $currentTime;


        // Check if a recent reset token has been generated within the last 15 minutes
       
       
        // $recentResetStmt =1;
        $recentResetStmt = Database::prepare("SELECT * FROM `user` WHERE (`userEmail` = ? OR `userName` = ?) AND `Token_Generated_Time` >= DATE_SUB(?, INTERVAL 15 MINUTE)");
        $recentResetStmt->bind_param('sss', $usernameOrEmail, $usernameOrEmail, $currentTime);
        $recentResetStmt->execute();
        // $recentResetResult =1;
        $recentResetResult = $recentResetStmt->get_result();

        if ($recentResetResult->num_rows > 0) {
            // Display a popup informing the user about the recent request
            echo '<script>alert("You have already requested a password reset code within the last 15 minutes. Please check your email. Requested time: ' . $user['Token_Generated_Time'] . '");</script>';
        } else {
            // Generate a random 8-digit code
            $resetToken = generateRandomCode();

            // Update the user record with the reset token and time
            $updateStmt = Database::prepare("UPDATE `user` SET `resetToken` = ?, `Token_Generated_Time` = ? WHERE `userEmail` = ? OR `userName` = ?");
            $updateStmt->bind_param('ssss', $resetToken, $currentTime, $usernameOrEmail, $usernameOrEmail);
            $updateStmt->execute();
            header("Location: passwordReset.php?userEmail=" . $user['userEmail']);

            // Send email with reset code using PHPMailer
            $mail = new PHPMailer(true);

            try {
                // Server settings
                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com';
                $mail->SMTPAuth   = true;
                $mail->Username   = 'crystesoftware@gmail.com';
                $mail->Password   = 'lusl hikk iuac pynx';
                $mail->SMTPSecure = 'tls';
                $mail->Port       = 587;


            $mail->Timeout = 60; // 60 seconds
          



            // Recipients
            $mail->setFrom('crystesoftware@gmail.com', 'Cryste Software Solutions');
            $mail->addAddress($user['userEmail'], $user['userName']); // User's email and name

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Password Reset Code for OrimiSasaki.com';
            $mail->Body    = '

            
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
    <!--<![endif]-->
</head>

<body>
    <div dir="ltr" class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#07023c"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-content-body" style="background-color: #ffffff; background-image: url(https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-91954.jpg?t=st=1710129571~exp=1710133171~hmac=46ea31de8a664643389cd0a821064cf35c305dce3eca32a79583586bedead50e&w=740">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://cryste.online"><img src="https://cryste.online/assets/img/logo/logo.png" alt="Logo" style="display: block;" title="Logo" height="55"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text">
                                                                                        <h1>&nbsp;Hello ' . $usernameOrEmail . ' We got a request to reset your&nbsp;password in Orimisasaki.com. </h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image es-p15t es-p10b" style="font-size: 0px;"><a target="_blank" href="https://orimisasaki.com"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_dee64413d6f071746857ca8c0f13d696/images/852converted_1x3.png" alt style="display: block;" height="300"></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p10t es-p10b">
                                                                                        <p>&nbsp;Here is the Reset code ' . $resetToken . '. This code will valid only for 15 minutes (Requested time :-' . $currentTime . ' ). Forgot your password? No problem - it happens to everyone!</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-button es-p15t es-p15b"><span class="es-button-border"><a href="https://orimisasaki.com" class="es-button" target="_blank" style="font-weight: normal;"> Reset Your Password</a></span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p10t es-p10b">
                                                                                        <p>If you ignore this message, your password wont be changed.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table bgcolor="#10054D" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #10054d;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p35t es-p35b es-p20r es-p20l" align="left" background="https://tlr.stripocdn.email/content/guids/CABINET_0e8fbb6adcc56c06fbd3358455fdeb41/images/vector_sSY.png" style="background-image: url(https://tlr.stripocdn.email/content/guids/CABINET_0e8fbb6adcc56c06fbd3358455fdeb41/images/vector_sSY.png); background-repeat: no-repeat; background-position: left center;">
                                                        <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="69" valign="top"><![endif]-->
                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="69" class="es-m-p20b esd-container-frame" align="left">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image es-m-txt-l" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/guids/CABINET_dee64413d6f071746857ca8c0f13d696/images/group_118_lFL.png" alt style="display: block;" width="69"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="20"></td><td width="471" valign="top"><![endif]-->
                                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="471" align="left" class="esd-container-frame">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text">
                                                                                        <h3 style="color: #ffffff;"><b>Real people. Here to help.</b></h3>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p10t es-p5b">
                                                                                        <p style="color: #ffffff;">Have a question? Give us a call at&nbsp;<strong>+94 74 009 0484, +94 78 860 1460</strong>&nbsp;to chat with a Customer Success representative.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-footer" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left" esd-custom-block-id="541043">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="left">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-block-menu" esd-tmp-menu-padding="10|10" esd-tmp-menu-color="#ffffff" esd-tmp-divider="0|solid|#ffffff">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                                                            <tbody>
                                                                                                <tr class="links">
                                                                                                    <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff;">About us</a></td>
                                                                                                    <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff;">News</a></td>
                                                                                                    <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff;">Career</a></td>
                                                                                                    <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 10px;"><a target="_blank" href="https://viewstripo.email" style="color: #ffffff;">The shops</a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-social es-p10t es-p10b" style="font-size:0">
                                                                                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" valign="top" class="es-p20r" esd-tmp-icon-type="facebook"><a target="_blank" href="https://web.facebook.com/profile.php?id=100090172122969&_rdc=1&_rdr"><img title="Facebook" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/facebook-square-colored.png" alt="Fb" width="32" height="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p20r" esd-tmp-icon-type="twitter"><a target="_blank" href="https://cryste.online"><img title="Twitter" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/twitter-square-colored.png" alt="Tw" width="32" height="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p20r" esd-tmp-icon-type="instagram"><a target="_blank" href="https://cryste.online"><img title="Instagram" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/instagram-square-colored.png" alt="Inst" width="32" height="32"></a></td>
                                                                                                    <td align="center" valign="top" esd-tmp-icon-type="youtube"><a target="_blank" href="https://cryste.online"><img title="Youtube" src="https://tlr.stripocdn.email/content/assets/img/social-icons/square-colored/youtube-square-colored.png" alt="Yt" width="32" height="32"></a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                               
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
            
            
           
            
            ';
            // Your password reset code For orimiSasaki.com is: ' . $resetToken . '. This code is valid for 15 minutes.

            $mail->send();
            echo '<script>alert("Password reset code sent successfully.");</script>';
          
            exit();
        } catch (Exception $e) {
            echo "Mailer Error: {$mail->ErrorInfo}";
            exit();
        }

        $updateStmt->close(); // Close the statement here
    }

    } else {
        echo '<script>alert("Email not found in the database. Please check your input.");</script>';
    }

    $stmt->close();
    exit();
    }

?>