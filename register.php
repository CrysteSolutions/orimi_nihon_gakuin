<?php 
include 'header.php';
require 'dashboard/asset/conn.php';
?>

<body class="home">
    <form action="register.php" method="post">
        <label> user name </label>
        <input type="text" name="username" id="username" required><br> <br>
        <label> user Email</label>
        <input type="text" name="useremail" id="useremail" required><br> <br>
        <label> Password</label>
        <input type="password" name="password" id="password" required><br> <br>
        <label> Access Type</label>
        <select name="accessType" id="accessType" required><br><br>
            <option value="admin">Admin</option>
            <option value="moderator">moderator</option> 
            <br><br> <input type="submit" value="Register">
        <br><br> 
        <a href="login.php">click here to login</a> 
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

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

$username = $_POST['username'];
$useremail = $_POST['useremail'];
$password = $_POST['password'];
$accessType = $_POST['accessType'];

if (empty($username)) {
    echo "<script>alert('Please Enter Your Name !!!');</script>";
} else if (strlen($password) < 5 || strlen($password) > 20) {
    echo "<script>alert('Password must be between 5 - 20 characters');</script>";
} else if (empty($useremail)) {
    echo "<script>alert('Please enter your Email !!!');</script>";
} else if (!filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
    echo "<script>alert('Invalid Email please enter another !!!');</script>";
} else if (empty($accessType)) {
    echo "<script>alert('Please enter your access type !!!');</script>";
} else {
    $regi_user = Database::search("SELECT * FROM `user` WHERE `userEmail` = '" . $useremail . "' OR `userName` = '" . $username . "'");
    $n = $regi_user->num_rows;

    if ($n > 0) {
        echo "<script>alert('Same Email Or Username Exists !!!');</script>";
    } else {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert user data into the user table
        Database::iud("INSERT INTO `user` (userName, userEmail, userPassword, userAccesstype) VALUES ('" . $username . "', '" . $useremail . "', '" . $hashedPassword . "', '" . $accessType . "')");

        echo "<script>alert('Success');</script>";
    }
}
}
?>
