<?php
session_start();
if (!isset($_SESSSION["username"]) && !isset($_SESSSION["accessType"])) {
  header('Location: ../login.php');
  exit();
}
  

?>