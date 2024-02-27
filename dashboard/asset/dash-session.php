<?php
session_start();
if (!isset($_SESSION["username"]) || !isset($_SESSION["accessType"])) {
    // If user is not signed in, redirect to login page
    header('Location: ../login.php');
    exit();
}
?>
