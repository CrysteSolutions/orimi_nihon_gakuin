<?php 
// include '../header.php';
require 'asset/conn.php';
?>
<?php
// Get the current page filename without extension
$current_page = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
?>


<?php

// Include your conn.php file


// Get the current page filename without extension
$current_page = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);

// Fetch data from the database
$query = "SELECT * FROM `aboutsite` LIMIT 1";
$result = Database::search($query);

if ($result) {
    $row = $result->fetch_assoc();
    $phone_number = $row['tpNo'];
    $email = $row['email'];
    $location = $row['location'];
    $whatsapp = $row['whatsapp'];
    $facebook = $row['facebook'];
    $tweeter = $row['tweeter'];
    $youtube = $row['youtube'];
    $instagram = $row['instagram'];
    $linkedin = $row['linkedin'];
    $activeStudents = $row['activeStudents'];
    $facultyCourses = $row['facultyCourses'];
    $aboutParagraph = $row['aboutParagraph'];
    $aboutVideo = $row['aboutVideo'];
  
} else {
    // Handle the error as needed
    $phone_number = ''; // Set default values or handle errors accordingly
    $email = '';
    $location = '';
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="Embark on your Japanese journey with Orimi Sasaki Nihon Gakuin! We specialize in student visas for Sri Lankan students and job visas for those aspiring to work in Japan. Let us simplify your path to education and career success in Japan. Start your adventure with us today" />
    <meta name="keywords" content="orimi nihon gakuin, orimi sasaki, japanese visa, visa agency, eduction visa, orimi agency, japanese visa agency, srilanka visa agency" />
    <!-- favicon -->
    <link rel="icon" type="image/png" href="../assets/img/educator-fabicon-300x300.png">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.min.css" media="all">
    <!-- Fonts Awesome CSS -->
    <link rel="stylesheet" type="text/css" href="../assets/vendors/fontawesome/css/all.min.css">
    <!-- Elmentkit Icon CSS -->
    <link rel="stylesheet" type="text/css" href="../assets/vendors/elementskit-icon-pack/assets/css/ekiticons.css">
    <!-- progress bar CSS -->
    <link rel="stylesheet" type="text/css" href="../assets/vendors/progressbar-fill-visible/css/progressBar.css">
    <!-- jquery-ui css -->
    <link rel="stylesheet" type="text/css" href="../assets/vendors/jquery-ui/jquery-ui.min.css">
    <!-- modal video css -->
    <link rel="stylesheet" type="text/css" href="../assets/vendors/modal-video/modal-video.min.css">
    <!-- light box css -->
    <link rel="stylesheet" type="text/css" href="../assets/vendors/fancybox/dist/jquery.fancybox.min.css">
    <!-- slick slider css -->
    <link rel="stylesheet" type="text/css" href="../assets/vendors/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="../assets/vendors/slick/slick-theme.css">
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <!-- css -->
    <link rel="stylesheet" type="text/css" href="../style.css">
    <title>Orimi Sasaki Nihon Gakuin</title>
</head>

<body class="home">
    <!-- pre loader-->
    <div id="siteLoader" class="site-loader ">
        <div class="preloader-content">
            <img src="assets/img/loader1.gif" alt="">
        </div>
        <!-- /pre loader-->
    </div>
    <div id="page" class="full-page">
        <header class="site-header site-header-transparent">
            <!-- header html start -->
            <div class="top-header">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-8 d-none d-lg-block">
                            <div class="header-contact-info">
                                <ul>
                                    <li>
                                        <a href="tel:+01-977-2599-12"><i class="fas fa-phone-alt"></i> +<?php echo $phone_number; ?></a>
                                    </li>
                                    <li>
                                        <a href="<?php echo $email  ?>"><i class="fas fa-envelope"></i> <span class="__cf_email__" data-cfemail="<?php echo $email; ?>"><?php echo $email; ?></span></a>
                                    </li>
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> <?php echo $location; ?>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                            <div class="header-social social-links">
                                <ul>
                                    <li>
                                        <a href="<?php echo $facebook; ?>" target="_blank">
                                            <i class="fab fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo $tweeter; ?>" target="_blank">
                                            <i class="fab fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo $youtube; ?>" target="_blank">
                                            <i class="fab fa-youtube" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo $instagram; ?>" target="_blank">
                                            <i class="fab fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="<?php echo $linkedin; ?>" target="_blank">
                                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>

                                    <li <?php echo ($current_page == 'contact') ? 'class="current-menu-item"' : ''; ?>> >
                                        <a href="login.php">login</a>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div class="header-search-icon">
                                <button class="search-icon">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-header" id="masthead">
                <div class="container-fluid">
                    <div class="hb-group d-flex align-items-center justify-content-between">
                        <div class="site-identity col-lg-3">
                            <p class="">
                                <a href="index.php">
                                    <img src="assets/img/orimi sasaki6.jpg.png" alt="logo" width="150px" height="150px">
                                </a>
                            </p>
                        </div>
                        <div class="main-navigation col-lg-9 justify-content-between d-flex align-items-center">
                            <nav id="navigation" class="navigation d-none d-lg-inline-block">
                                <ul>
                                    <li <?php echo ($current_page == 'index') ? 'class="current-menu-item"' : ''; ?>> 
                                        <a href="index.php">Home</a>
                                    </li>

                                    <li class="menu-item-has-children <?php echo ($current_page == 'about' || $current_page == 'Faq' || $current_page == 'contact') ? 'current-menu-item' : ''; ?>">
                                    <a href="#">About Us</a>
                                        <ul>
                                            <li>
                                                <a href="about.php">About Us</a>
                                            </li>
                                            <li>
                                                <a href="Faq.php">Frequently asked Questions</a>
                                            </li>
                                            <li>
                                            <a href="contact.php">Contact</a>
                                            </li>
                                        </ul>
                                    </li> 

                                    <li class="menu-item-has-children <?php echo ($current_page == 'categories' || $current_page == 'career') ? 'current-menu-item' : ''; ?>">
                                    <a href="#">Visa</a>
                                        <ul>
                                            <li>
                                            <a href="contact.php">Visa Details</a>
                                            </li>
                                            <li>
                                            <a href="contact.php">career details</a>
                                            </li>
                                            
                                        </ul>
                                    </li> 

                                    <li class="menu-item-has-children <?php echo ($current_page == 'facility' || $current_page == 'feature-course') ? 'current-menu-item' : ''; ?>">
                                    <a href="#">Education Details</a>
                                        <ul>
                                            <li>
                                            <a href="contact.php">facility details</a>
                                            </li>
                                            <li>
                                            <a href="contact.php">feature-course</a>
                                            </li>
                                            
                                        </ul>
                                    </li> 

                                    <li <?php echo ($current_page == 'blog-archive') ? 'class="current-menu-item"' : ''; ?>>
                                        <a href="blog-archive.php">Blog</a>
                                    </li>
                                   
                                    

                                    <li <?php echo ($current_page == 'gallery') ? 'class="current-menu-item"' : ''; ?>> 
                                        <a href="gallery.php">Gallery</a>
                                    </li>
                    

                                    <!-- end of the additional header files-->
                                    <!-- <li class="menu-item-has-children ">
                                    <a href="#">Visa Details</a>
                                        <ul>
                                            <li>
                                                <a href="about.php">About Us</a>
                                            </li>
                                            <li>
                                                <a href="Faq.php">Frequently asked Questions</a>
                                            </li>
                                        </ul>
                                    </li>  -->


                                    
                                    <!--

                                        <li class="menu-item-has-children">
                                        <a href="#">pages</a>
                                        <ul>
                                            <li>
                                                <a href="categories.html">categories</a>
                                            </li>
                                            <li>
                                                <a href="feature-course.html">feature course</a>
                                            </li>
                                        </ul>
                                    </li> 

                                    -->
                                   
                                </ul>
                            </nav>
                            <div class="header-btn d-inline-block">
                                <a href="contact.php" class="button-round-secondary">JOIN US NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu-container"></div>
        </header>


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
        <a href="../login.php">click here to login</a>
        </form>
        
        
    <!-- JavaScript -->
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="../assets/vendors/jquery/jquery.js"></script>
    <script src="../assets/vendors/waypoint/jquery.waypoints.min.js"></script>
    <script src="../assets/vendors/bootstrap/js/bootstrap.min.js"></script>
    <script src="../assets/vendors/jquery-ui/jquery-ui.min.js"></script>
    <script src="../assets/vendors/progressbar-fill-visible/js/progressBar.min.js"></script>
    <script src="../assets/vendors/countdown-date-loop-counter/loopcounter.js"></script>
    <script src="../assets/vendors/counterup/jquery.counterup.js"></script>
    <script src="../assets/vendors/modal-video/jquery-modal-video.min.js"></script>
    <script src="../assets/vendors/masonry/masonry.pkgd.min.js"></script>
    <script src="../assets/vendors/fancybox/dist/jquery.fancybox.min.js"></script>
    <script src="../assets/vendors/slick/slick.min.js"></script>
    <script src="../assets/vendors/slick-nav/jquery.slicknav.js"></script>
    <script src="../assets/js/custom.js"></script>
    <script src="../assets/js/guard.js"></script>
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
