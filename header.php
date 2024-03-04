



<?php
// Get the current page filename without extension
$current_page = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
?>
<!DOCTYPE html>
<html lang="en">

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
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8 d-none d-lg-block">
                            <div class="header-contact-info">
                                <ul>
                                    <li>
                                        <a href="tel:+01-977-2599-12"><i class="fas fa-phone-alt"></i> +01 (977) 2599 12</a>
                                    </li>
                                    <li>
                                        <a href="/cdn-cgi/l/email-protection#5c3f33312c3d32251c3833313d3532723f3331"><i class="fas fa-envelope"></i> <span class="__cf_email__" data-cfemail="3b5854564b5a55427b5f54565a525515585456">[email&#160;protected]</span></a>
                                    </li>
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> 3146 Koontz Lane, California
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                            <div class="header-social social-links">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com" target="_blank">
                                            <i class="fab fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com" target="_blank">
                                            <i class="fab fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com" target="_blank">
                                            <i class="fab fa-youtube" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com" target="_blank">
                                            <i class="fab fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com" target="_blank">
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
                <div class="container">
                    <div class="hb-group d-flex align-items-center justify-content-between">
                        <div class="site-identity col-lg-3">
                            <p class="site-title">
                                <a href="index.php">
                                    <img src="assets/img/orimi sasaki6.jpg.png" alt="logo">
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
                                            <a href="categories.php">Visa Details</a>
                                            </li>
                                            <li>
                                            <a href="career.php">career details</a>
                                            </li>
                                            
                                        </ul>
                                    </li> 

                                    <li class="menu-item-has-children <?php echo ($current_page == 'facility' || $current_page == 'feature-course') ? 'current-menu-item' : ''; ?>">
                                    <a href="#">Education Details</a>
                                        <ul>
                                            <li>
                                            <a href="facility.php">facility details</a>
                                            </li>
                                            <li>
                                            <a href="feature-course.php">feature-course</a>
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
                                <a href="contact.htmphpl" class="button-round-secondary">JOIN US NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu-container"></div>
        </header>