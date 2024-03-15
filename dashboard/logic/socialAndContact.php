<?php
require "conn.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["socialSubmit"])) {
        // Form data for aboutsite table
        $facebookUrl = $_POST["facebookUrl"];
        $twitterUrl = $_POST["twitterUrl"];
        $youtubeUrl = $_POST["youtubeUrl"];
        $instagramUrl = $_POST["instagramUrl"];
        $linkedinUrl = $_POST["linkedinUrl"];
        $phoneNumber = $_POST["phoneNumber"];
        $email = $_POST["email"];
        $address = $_POST["address"];

        // Update aboutsite table
        $sql = "UPDATE aboutsite SET 
                facebook = ?,
                tweeter = ?,
                youtube = ?,
                instagram = ?,
                linkedin = ?,
                tpNo = ?,
                email = ?,
                location = ?
                WHERE aboutID = 1"; // Assuming aboutID is 1, change it accordingly

        $stmt = Database::prepare($sql);

        if ($stmt) {
            $stmt->bind_param("ssssssss", $facebookUrl, $twitterUrl, $youtubeUrl, $instagramUrl, $linkedinUrl, $phoneNumber, $email, $address);
            $stmt->execute();
            $stmt->close();

            echo "<script>alert('Record updated successfully'); window.location.href='../dash-about.php';</script>";
            exit; // Ensure that no further code is executed after the redirect
        } else {
            echo "<script>alert('Error preparing statement.');</script>" . Database::$connection->error;
        }
    }
}
?>
