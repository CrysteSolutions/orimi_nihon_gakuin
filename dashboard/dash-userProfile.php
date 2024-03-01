<?php

require 'asset/dash-session.php';
include 'asset/dash-header.php';

// Check if userID is set in the session
if (!isset($_SESSION['userID'])) {
    // Handle the case where userID is not set, e.g., redirect to login page or show an error message
    exit('User ID not set in the session.');
}

$userID = $_SESSION['userID'];

// Prepare the statement
$stmt = Database::prepare("SELECT * FROM `user` WHERE `userID` = ?");

if ($stmt) {
    $stmt->bind_param("i", $userID);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        $userDetails = $result->fetch_assoc();
    } else {
        echo "<script>alert('Error fetching user details.');</script>";
    }

    $stmt->close(); // Close the statement
} else {
    echo "<script>alert('Error preparing statement.');</script>";
}
?>

<body class="home">

<?php
include 'asset/dash-sidenav.php';
?>  

<!-- content goes here -->

<div class="header"> User Profile</div>  

<div class="dataget square">
    <form id="updateForm" action="dash-userProfile-userUpdate.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Username" value="<?php echo $userDetails['userName']; ?>" required> <br>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="Email" value="<?php echo $userDetails['userEmail']; ?>">
        <br> 
        <label for="userName">User Name </label>
        <input type="text" id="userName" name="userName" placeholder="User Name" value="<?php echo $userDetails['userName']; ?>" required> <br>
        <label for="accessType">Access Type:</label>
        <input type="text" id="accessType" name="accessType" placeholder="Access Type" value="<?php echo $userDetails['userAccessType']; ?>" required> <br>
        <button type="button" onclick="clearFields()">Cancel</button>
        <button type="button" onclick="uploadData()">Upload</button>
    </form>
</div>

<script>
    function clearFields() {
        document.getElementById("updateForm").reset();
    }

    function uploadData() {
        // Add logic for uploading data to the database using AJAX or form submission
        // Example: document.getElementById("updateForm").submit();
        alert('Data uploaded successfully!');
    }
</script>

<!-- End of the content -->

<?php
include 'asset/dash-2sidenav.php';
?>  

</div>

<?php
include 'asset/dash-footer.php';
?>
