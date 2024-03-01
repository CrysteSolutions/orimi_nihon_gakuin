<?php
function escape($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

require 'asset/dash-session.php';
include 'asset/dash-header.php';

?>
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }
</style>
<body class="home">

<?php
include 'asset/dash-sidenav.php';
?>  
<!-- content goes here-->

<div class="header">Dashboard/about</div>  
<h3> manage Website Info </h3><br> 
        
<div class="dataget square"> 
<form action="logic/socialAndContact.php" method="post">

<?php
// Fetch data from the database and populate default values
$fetchQuery = "SELECT * FROM aboutsite WHERE aboutID = 1"; // Assuming aboutID is 1, change it accordingly
$resultset = Database::search($fetchQuery);

if ($resultset) {
    $data = $resultset->fetch_assoc();

    // Display the input fields with default values
    ?>
    <label for="facebookUrl">Facebook URL:</label>
    <input type="text" id="facebookUrl" name="facebookUrl" placeholder="www.facebook.com/orimi" value="<?php echo $data['facebook']; ?>" required><br>

    <label for="twitterUrl">Twitter URL:</label>
    <input type="text" id="twitterUrl" name="twitterUrl" placeholder="twitter.com/username" value="<?php echo $data['tweeter']; ?>" required><br>

    <label for="youtubeUrl">Youtube URL:</label>
    <input type="text" id="youtubeUrl" name="youtubeUrl" placeholder="www.youtube.com/user/channel" value="<?php echo $data['youtube']; ?>" required><br>

    <label for="instagramUrl">Instagram URL:</label>
    <input type="text" id="instagramUrl" name="instagramUrl" placeholder="www.instagram.com/username" value="<?php echo $data['instagram']; ?>" required><br>

    <label for="linkedinUrl">LinkedIn URL:</label>
    <input type="text" id="linkedinUrl" name="linkedinUrl" placeholder="www.linkedin.com/in/username" value="<?php echo $data['linkedin']; ?>" required><br>

    <label for="phoneNumber">Phone Number:</label>
    <input type="text" id="phoneNumber" name="phoneNumber" placeholder="123-456-7890" value="<?php echo $data['tpNo']; ?>" required><br>

    <label for="email">Email:</label>
    <input type="text" id="email" name="email" placeholder="example@example.com" value="<?php echo $data['email']; ?>" required><br>

    <label for="address">Address:</label>
    <input type="text" id="address" name="address" placeholder="123 Street, City, Country" value="<?php echo $data['location']; ?>" required><br>

    <input type="submit" name="socialSubmit" value="Submit">
    <?php
} else {
    echo "Error fetching data: " . Database::$connection->error;
}
?>
</form>
</div>

        <br>
        <br> 
        <h3> Create Faq </h3><br> 
        <div class="dataget square"> 
    <form action="logic/QnA.php" method="post">
        <label for="faq">FAQ:</label> 
        <input type="text" id="faq" name="faq" placeholder="" > <br> <br> 

        <label for="answer">Answer:</label>
        <input type="text" id="answer" name="answer" placeholder="" > <br>

        <input type="submit" name="faqSubmit" value="Submit">
        
        <div>
        <h3>Existing FAQ Questions</h3>
        <br>
        <table border="1">
        <tr>
            <th>Question ID</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Action</th>
        </tr>

        <?php
        // Fetch and display existing FAQ questions
        $fetchQuery = "SELECT qnaID, question, answer FROM qna";
        $resultset = Database::search($fetchQuery);

        if ($resultset) {
            while ($row = $resultset->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . escape($row['qnaID']) . "</td>";
                echo "<td>" . escape($row['question']) . "</td>";
                echo "<td>" . escape($row['answer']) . "</td>";
                echo "<td class='action-buttons'>";
                echo "<button onclick='deleteQuestion(" . $row['qnaID'] . ")'>Delete</button>";
                echo "<button onclick='updateQuestion(" . $row['qnaID'] . ", \"" . escape($row['question']) . "\", \"" . escape($row['answer']) . "\")'>Update</button>";
                echo "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='4'>Error fetching data: " . Database::$connection->error . "</td></tr>";
        }
        ?>
    </table>
        
    </div>
</div>
    </div>

    <script>
    function deleteQuestion(qnaID) {
        var confirmation = confirm("Are you sure you want to delete this question?");
        if (confirmation) {
            // Perform delete action using AJAX or redirect to delete endpoint
            // For simplicity, we'll just show an alert here
            alert("Question deleted with ID: " + qnaID);

            // Add an AJAX call or other logic to delete the question from the database

            // Cancel the form submission
            return false;
        }
    }

    function updateQuestion(qnaID, question, answer) {
        // Implement your update logic here, e.g., populate form fields
        // For simplicity, we'll just show an alert here
        alert("Update question with ID: " + qnaID + "\nQuestion: " + question + "\nAnswer: " + answer);
    }
</script>
<!--end of the content -->
<?php
include 'asset/dash-2sidenav.php';
?>  



  
</div> 
    
<?php
include 'asset/dash-footer.php';
?>  