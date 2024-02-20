<?php
session_start();
if (!isset($_SESSSION["username"]) && !isset($_SESSSION["accessType"])) {
 
} else {
  header('Location: ../login.php');
  exit();
}

  

?>