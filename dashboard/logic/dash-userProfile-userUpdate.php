<?php
require 'asset/dash-session.php';
include 'asset/conn.php'; // Assuming this file has the Database class definition

// Check if userID is set in the session
if (!isset($_SESSION['userID'])) {
    // Handle the case where userID is not set, e.g., redirect to login page or show an error message
    exit('User ID not set in the session.');
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userID = $_SESSION['userID'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $userName = $_POST['userName'];
    $accessType = $_POST['accessType'];

    // Validate and sanitize input data as needed

    // Prepare and execute the UPDATE query
    
    $stmt = Database::prepare("UPDATE `user` SET `userName`=?, `userEmail`=?, `userAccessType`=? WHERE `userID`=?");


    if ($stmt) {
        $stmt->bind_param("ssssi", $username, $email, $userName, $accessType, $userID);
        $stmt->execute();
        $stmt->close();
        
        // Optionally, redirect after successful update
        header('Location: dashboard/dashboard.php');
        exit();
    } else {
        echo "<script>alert('Error preparing statement.');</script>";
    }
}
?>

<!-- The rest of your HTML code remains unchanged -->

<!-- Add this JavaScript function to the <script> block -->
<script>
    function uploadData() {
        // Add logic for uploading data to the database using AJAX or form submission
        // Example: document.getElementById("updateForm").submit();
        // You might want to add client-side validation before submitting the form
        alert('Data uploaded successfully!');
    }
</script>
