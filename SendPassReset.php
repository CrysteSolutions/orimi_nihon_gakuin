<?php
include 'header.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usernameOrEmail = $_POST['usernameOrEmail'];

    // Validate and sanitize user input
    $usernameOrEmail = filter_var($usernameOrEmail, FILTER_SANITIZE_STRING);

    // Check if the email exists in the database
    $stmt = $pdo->prepare("SELECT * FROM `user` WHERE `userEmail` = :email");
    $stmt->bindParam(':email', $usernameOrEmail, PDO::PARAM_STR);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Email exists in the database, create a session key
        session_start();
        $_SESSION['resetEmail'] = $usernameOrEmail;
        header("Location: passwordReset.php");
        exit();
    } else {
        echo '<script>alert("Email not found in the database. Please check your input.");</script>';
    }
}  exit();
?>

  <style>
        .strength-status {
            font-weight: bold;
            margin-top: 10px;
        }

        .weak {
            color: red;
        }

        .normal {
            color: orange;
        }

        .strong {
            color: green;
        }
    </style>


<body class="home">
    <form action="SendPassReset.php" method="post">
        <label> Enter your user name or Email</label>
        <input type="text" name="usernameOrEmail" id="usernameusernameOrEmail" required><br> 
        <input type="submit" value="Send an Email">  <br> <br> <br> 
        <a href="Login.php">Back To Login</a>
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