<?php
include 'header.php';

?>

<?php
session_start();

// Check if the resetEmail session key is set
if (isset($_SESSION['resetEmail'])) {
    $resetEmail = $_SESSION['resetEmail'];
    // Continue with the password reset process
    // ...
} else {
    // Redirect to the login page or handle the case where the session key is not set
    header("Location: login.php");
    exit();
}
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
    <form action="resetPass.php" method="post">
        <label> Enter Password Reset Key We Send to (<?php echo $resetEmail ?>)</label> 
        <input type="text" name="resetKey" id="resetKey" required><br> 
        <input type="submit" value="Enter">  <br> <br> 
       
<P> REMEMBER :- 
        <small> * Password Reset Key is valied until 15 minuted.<br> * if time exceeded you must request another key.<br> * you can request 3 keys maximmum per day.<br> * if you fails 6 attempts in a row to enter correct Password key your Ceeount will Be deactivated</small>
        </P> 
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