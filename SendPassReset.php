<?php include 'header.php'; ?>

<body class="home">
    <form action="SendPassReset.php" method="post">
        <label> Enter your user name or Email</label>
        <input type="text" name="usernameOrEmail" id="usernameOrEmail" required><br> 
        <input type="submit" value="Send an Email">  <br> <br> <br> 
        <a href="Login.php">Back To Login</a>
        </form>


</body>
        <script>
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          document.getElementById("light--to-dark-button")?.classList.add("dark--mode");
        } 
        if (localStorage.getItem("theme-color") === "light") {
          document.getElementById("light--to-dark-button")?.classList.remove("dark--mode");
        } 
       

      </script>
</html>
<?php 
include 'footer.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usernameOrEmail = $_POST['usernameOrEmail'];

    // Validate and sanitize user input
    $usernameOrEmail = filter_var($usernameOrEmail, FILTER_SANITIZE_STRING);

    // Check if the email exists in the database
    $stmt = Database::prepare("SELECT * FROM `user` WHERE `userEmail` = ?");
    $stmt->bind_param('s', $usernameOrEmail);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Email exists in the database, create a session key
       
        $_SESSION['resetEmail'] = $usernameOrEmail;
        header("Location: passwordReset.php");
        exit();
    } else {
        echo '<script>alert("Email not found in the database. Please check your input.");</script>';
    }

    $stmt->close();
} 
exit();


 ?>