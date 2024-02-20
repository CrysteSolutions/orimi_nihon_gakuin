<!DOCTYPE html>
<html lang="en">
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

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- favicon -->
    <link rel="icon" type="image/png" href="assets/img/educator-fabicon-300x300.png">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.min.css" media="all">
    <!-- Fonts Awesome CSS -->
    <link rel="stylesheet" type="text/css" href="assets/vendors/fontawesome/css/all.min.css">
    <!-- Elmentkit Icon CSS -->
    <link rel="stylesheet" type="text/css" href="assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css">
    <!-- progress bar CSS -->
    <link rel="stylesheet" type="text/css" href="assets/vendors/progressbar-fill-visible/css/progressBar.css">
    <!-- jquery-ui css -->
    <link rel="stylesheet" type="text/css" href="assets/vendors/jquery-ui/jquery-ui.min.css">
    <!-- modal video css -->
    <link rel="stylesheet" type="text/css" href="assets/vendors/modal-video/modal-video.min.css">
    <!-- light box css -->
    <link rel="stylesheet" type="text/css" href="assets/vendors/fancybox/dist/jquery.fancybox.min.css">
    <!-- slick slider css -->
    <link rel="stylesheet" type="text/css" href="assets/vendors/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="assets/vendors/slick/slick-theme.css">
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- css -->
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Contact – Educator - University & School Education HTML5 Template</title>
</head>

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