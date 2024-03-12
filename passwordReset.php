<?php
include 'header.php';

// Check if the resetEmail session key is set
if (isset($_SESSION['resetEmail'])) {
    $resetEmail = $_SESSION['resetEmail'];

    if (isset($_SESSION['resetTime'])) {
        $resetTime = strtotime($_SESSION['resetTime']); // Convert session time to Unix timestamp

        // Check if the reset key is valid within the 15-minute timeframe
        $currentTime = time(); // Current time in seconds
        $validTime = 15 * 60; // 15 minutes in seconds

        if (($currentTime - $resetTime) <= $validTime) {
            // Continue with the password reset process

            // Calculate time left
            $timeLeft = $validTime - ($currentTime - $resetTime);

            // Display the countdown timer
            echo '
            <!DOCTYPE html>
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
                <form action="passwordReset.php" method="post">
                    <label> Enter Password Reset Key We Sent to (' . $resetEmail . ')</label> 
                    <input type="text" name="resetKey" id="resetKey" required> 
                    (Time left to key expiration: <span id="timer"></span>)
                    <br> 
                    <label> New Password</label>
                    <input type="password" name="newPass" id="newPass" required>
                    <div class="strength-status" id="strength-status"></div>
                    <label> Confirm New Password</label>
                    <input type="password" name="confirmPass" id="confirmPass" required>
                    <br>

                    <input type="submit" value="Enter">  
                    <br> <br> 
                    <p> REMEMBER :- 
                        <small> * Password Reset Key is valid until 15 minutes.<br> * If time exceeds, you must request another key.<br> * You can request a maximum of 3 keys per day.<br> * If you fail 6 attempts in a row to enter the correct Password key, your account will be deactivated.</small>
                    </p> 
                </form>

                <!-- JavaScript -->
                <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                <script src="assets/vendors/jquery/jquery.js"></script>
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

                    // Countdown timer script
                    var timeLeft = ' . $timeLeft . ';
                    function updateTimer() {
                        var minutes = Math.floor(timeLeft / 60);
                        var seconds = timeLeft % 60;
                        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s";
                        if (timeLeft > 0) {
                            timeLeft--;
                            setTimeout(updateTimer, 1000);
                        } else {
                            alert("The password reset key has expired. Please request a new key.");
                            window.location.href = "login.php";
                        }
                    }
                    updateTimer();
                </script>
            ';

        
        } else {
            // The reset key has expired, inform the user and redirect
            echo '<script>alert("The password reset key has expired. Please request a new key.");</script>';
            header("Location: login.php");
            exit();
        }
    } else {
        // The required session keys are not set, inform the user and redirect
        echo '<script>alert("Invalid request. Please request a password reset key first.");</script>';
        header("Location: login.php");
        exit();
    }
} else {
    // Redirect to the login page or handle the case where the session key is not set
    header("Location: login.php");
    exit();
}
?>

<!-- JavaScript -->
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
<script src="assets/vendors/jquery/jquery.js"></script>
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

    // Countdown timer script
    var timeLeft = <?php echo $timeLeft; ?>;
    function updateTimer() {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s";
        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        } else {
            alert("The password reset key has expired. Please request a new key.");
            window.location.href = "login.php";
        }
    }
    updateTimer();

    // Password strength and match check
    document.getElementById("newPass").addEventListener("input", function () {
        var password = this.value;
        var strength = 0;

        // Add your own password strength rules here
        if (password.length >= 8) {
            strength++;
        }
        if (/[a-z]/.test(password)) {
            strength++;
        }
        if (/[A-Z]/.test(password)) {
            strength++;
        }
        if (/\d/.test(password)) {
            strength++;
        }
        if (/\W/.test(password)) {
            strength++;
        }

        // Display password strength
        var strengthStatus = document.getElementById("strength-status");
        if (strength <= 2) {
            strengthStatus.textContent = "Weak";
            strengthStatus.className = "weak";
        } else if (strength <= 4) {
            strengthStatus.textContent = "Moderate";
            strengthStatus.className = "normal";
        } else {
            strengthStatus.textContent = "Strong";
            strengthStatus.className = "strong";
        }
    });

    // Password match check
    document.getElementById("confirmPass").addEventListener("input", function () {
        var newPassword = document.getElementById("newPass").value;
        var confirmPassword = this.value;

        // Display match status
        var matchStatus = document.getElementById("match-status");
        if (newPassword === confirmPassword) {
            matchStatus.textContent = "Passwords match";
            matchStatus.className = "match";
        } else {
            matchStatus.textContent = "Passwords do not match";
            matchStatus.className = "no-match";
        }
    });
</script>
</body>
</html>

</body>
            </html>

            <?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the resetEmail and resetKey are set
    if (isset($_SESSION['resetEmail'], $_POST['resetKey'])) {
        $resetEmail = $_SESSION['resetEmail'];
        $resetKey = $_POST['resetKey'];

        // Validate the reset key (You may need to adjust this based on your implementation)
        // Example: Assume your reset key is stored in the database
        $validResetKey = validateResetKey($pdo, $resetEmail, $resetKey);


        if ($validResetKey) {
            // Check if newPass and confirmPass are set
            if (isset($_POST['newPass'], $_POST['confirmPass'])) {
                $newPass = $_POST['newPass'];
                $confirmPass = $_POST['confirmPass'];

                // Check if passwords match
                if ($newPass === $confirmPass) {
                    // Hash the new password (you should use password_hash)
                    $hashedPassword = password_hash($newPass, PASSWORD_DEFAULT);

                    // Update the user's password in the database
                    $updatePassword = updatePassword($resetEmail, $hashedPassword);

                    if ($updatePassword) {
                        echo '<script>alert("Password updated successfully.");</script>';
                        // Redirect to login or any other page
                        echo '<script>
                        setTimeout(function() {
                            window.location.href = "login.php";
                        }, 10000);
                    </script>';
                        exit();
                    } else {
                        echo '<script>alert("Failed to update password. Please try again.");</script>';
                    }
                } else {
                    echo '<script>alert("Passwords do not match.");</script>';
                }
            } else {
                echo '<script>alert("New password and confirm password are required.");</script>';
            }
        } else {
            echo '<script>alert("Invalid reset key.");</script>';
        }
    } else {
        echo '<script>alert("Invalid request.");</script>';
    }
} else {
    echo '<script>alert("Invalid request method.");</script>';
}

// Function to validate reset key
function validateResetKey($pdo, $email, $resetKey) {
    // Use prepared statements to prevent SQL injection
    $stmt = $pdo->prepare("SELECT * FROM reset_keys WHERE email = ? AND reset_key = ? AND expiry_time > NOW()");
    $stmt->execute([$email, $resetKey]);

    // Check if a row is returned
    return $stmt->fetch() !== false;
}



// Function to update the user's password
function updatePassword($email, $hashedPassword) {
    // Implement your logic to update the user's password
    // Use prepared statements to prevent SQL injection
    $stmt = $pdo->prepare("UPDATE users SET password = ? WHERE email = ?");
    $success = $stmt->execute([$hashedPassword, $email]);

    return $success;
}

?>
