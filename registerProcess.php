<?php
require "dashboard/conn.php";

$username = $_POST['username'];
$useremail = $_POST['useremail'];
$password = $_POST['password'];
$accessType = $_POST['accessType'];

if (empty($username)) {
    echo "<script>alert('Please Enter Your Name !!!');</script>";
} else if (strlen($password) < 5 || strlen($password) > 20) {
    echo "<script>alert('Password must be between 5 - 20 characters');</script>";
} else if (empty($useremail)) {
    echo "<script>alert('Please enter your Email !!!');</script>";
} else if (!filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
    echo "<script>alert('Invalid Email please enter another !!!');</script>";
} else if (empty($accessType)) {
    echo "<script>alert('Please enter your access type !!!');</script>";
} else {
    $regi_user = Database::search("SELECT * FROM `user` WHERE `userEmail` = '" . $useremail . "' OR `userName` = '" . $username . "'");
    $n = $regi_user->num_rows;

    if ($n > 0) {
        echo "<script>alert('Same Email Or Username Exists !!!');</script>";
    } else {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert user data into the user table
        Database::iud("INSERT INTO `user` (userName, userEmail, userPassword, userAccesstype) VALUES ('" . $username . "', '" . $useremail . "', '" . $hashedPassword . "', '" . $accessType . "')");

        echo "<script>alert('Success');</script>";
    }
}
?>
