<?php

session_start(); 
require ("dashboard/connection.php");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    

    // Get username or email and password from the form
    $usernameOrEmail = $_POST['usernameOrEmail'];
    $password = $_POST['password'];

    // Query the database to check for a matching user
   $data = Database::search("SELECT * FROM admin WHERE adminUsername = '".$usernameOrEmail."' OR adminEmail = '".$usernameOrEmail."'");
    $data_num = $data->num_rows;
    $row_data = $data->fetch_assoc();
    $access_data = Database::search("SELECT * FROM `access_type` WHERE `id` = '".$row_data['accessType']."'");
    $Ac_data_num = $access_data->num_rows;
    $ac_row_data = $access_data->fetch_assoc();
        // Verify the password
        if (password_verify($password, $row_data['adminPassword'])) {
            // Set session variables
            $_SESSION['username'] = $row_data['adminUsername'];
            $_SESSION['accessType'] = $ac_row_data['accessType'];

            // Redirect to the appropriate page based on access type
            redirectToCorrectPage($_SESSION['accessType']);
        } else {
            // Incorrect password
            echo '<script> alert("password incorrect");</script>';
        }
    } 

 

function redirectToCorrectPage($accessType) {
    switch ($accessType) {
        case 'admin':
            header('Location: dashboard/admin-dashboard.php');
            exit();
            break;
        case 'teacher':
            header('Location: dashboard/instructor-dashboard.php');
            exit();
            break;
        default:
            // Redirect to a default page or display an error message
            header('Location: index.php');
            exit();
    }
}
?>