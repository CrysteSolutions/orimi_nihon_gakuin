
<?php
session_start(); 
require ("dashboard/conn.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get username or email and password from the form
    $usernameOrEmail = $_POST['username'];
    $password = $_POST['password'];

    // Use a prepared statement to prevent SQL injection
    $stmt = Database::prepare("SELECT * FROM `user` WHERE `userName` = ? OR `userEmail` = ?");
    $stmt->bind_param("ss", $usernameOrEmail, $usernameOrEmail);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row_data = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $row_data['userPassword'])) {
            // Set session variables
            $_SESSION['username'] = $row_data['userName'];
            $_SESSION['accessType'] = $row_data['userAccessType'];

            // Redirect to the appropriate page based on access type
            header('Location: dashboard/dashboard.php');
        } else {
            // Incorrect password
            echo '<script>alert("Password incorrect");</script>';
        }
    } else {
        // User not found
        echo '<script>alert("User not found");</script>';
    }

    $stmt->close();
}

?>
<?php 
include 'header.php';
?>


<body class="home">
    <form action="login.php" method="post">
        <label> user name or Email</label>
        <input type="text" name="username" id="username" required><br> <br>
        <label> Password</label>
        <input type="password" name="password" id="password" required><br> <br>
        <input type="submit" value="Login">
        <br><br> 
        <a href="register.php">click here to Register</a>
        </form>
                        
    <!-- JavaScript -->
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="assets/vendors/jquery/jquery.js"></script>
    <script src="assets/vendors/waypoint/jquery.waypoints.min.js"></script>
    <script src="assets/vendors/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/vendors/jquery-ui/jquery-ui.min.js"></script>
    <script src="assets/vendors/progressbar-fill-visible/js/progressBar.min.js"></script>
    <script src="assets/vendors/countdown-date-loop-counter/loopcounter.js"></script>
    <script src="assets/vendors/counterup/jquery.counterup.js"></script>
    <script src="assets/vendors/modal-video/jquery-modal-video.min.js"></script>
    <script src="assets/vendors/masonry/masonry.pkgd.min.js"></script>
    <script src="assets/vendors/fancybox/dist/jquery.fancybox.min.js"></script>
    <script src="assets/vendors/slick/slick.min.js"></script>
    <script src="assets/vendors/slick-nav/jquery.slicknav.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/guard.js"></script>
    <script>
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          document.getElementById("light--to-dark-button")?.classList.add("dark--mode");
        } 
        if (localStorage.getItem("theme-color") === "light") {
          document.getElementById("light--to-dark-button")?.classList.remove("dark--mode");
        } 
      </script>
</body>

</html>