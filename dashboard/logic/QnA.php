<?php
require 'conn.php'; // Include your Database class file

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["faqSubmit"])) {
        // Handle FAQ form submission
        $question = $_POST["faq"];
        $answer = $_POST["answer"];

        // Insert into qna table
        $insertQuery = "INSERT INTO qna (question, answer) VALUES (?, ?)";
        $stmt = Database::prepare($insertQuery);

        if ($stmt) {
            $stmt->bind_param("ss", $question, $answer);
            $stmt->execute();
            $stmt->close();

            echo "<script>alert('Data inserted successfully'); window.location.href='../dash-about.php';</script>";
            exit; // Ensure that no further code is executed after the redirect
        } else {
            echo "Error preparing statement: " . Database::$connection->error;
        }
    } elseif (isset($_POST["deleteSubmit"])) {
        // Handle delete button click
        $qnaID = $_POST["deleteQnaID"];

        // Delete from qna table
        $deleteQuery = "DELETE FROM qna WHERE qnaID = ?";
        $stmt = Database::prepare($deleteQuery);

        if ($stmt) {
            $stmt->bind_param("i", $qnaID);
            $stmt->execute();
            $stmt->close();

            echo "<script>alert('Question deleted successfully'); window.location.href='../dash-about.php';</script>";
            exit; // Ensure that no further code is executed after the redirect
        } else {
            echo "Error preparing statement: " . Database::$connection->error;
        }
    }
}
?>
