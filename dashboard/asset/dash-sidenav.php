<?php

function isPageActive($pageName)
{
    $currentPage = basename($_SERVER['PHP_SELF']);
    return ($currentPage === $pageName) ? 'class="active"' : '';
 } 
?>

<script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
<style>@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}

body{
   background-color: #f3f5f9;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 200px;
  height: 100%;
  background: #4b4276;
  padding: 30px 0px;
  position: fixed;
}

.wrapper .sidebar h2{
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 15px;
  border-bottom: 1px solid #bdb8d7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}    

.wrapper .sidebar ul li a{
  color: white;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  background-color: #594f8d;
}
    
.wrapper .sidebar ul li:hover a{
  color: #fff;
}
 
.wrapper .sidebar .social_media{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.wrapper .sidebar .social_media a{
  display: block;
  width: 40px;
  background: #594f8d;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #bdb8d7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.wrapper .main_content{
  width: 100%;
  margin-left: 200px;
}

.wrapper .main_content .header{
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info{
  margin: 20px;
  color: #717171;
  line-height: 25px;
}

.wrapper .main_content .info div{
  margin-bottom: 20px;
}

@media (max-height: 500px){
  .social_media{
    display: none !important;
  }
}


.btn:hover {

  background-color: #666;
  color: white;
  width: 25px;
  
}
a {
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
}
a.active {
  background-color: #79b2f7; /* Change this to the desired active color */
}


</style>

<div class="wrapper">
    <div class="sidebar">
        <h2>Welcome <?php echo $_SESSION['username'] ?> </h2>
        <ul>
            <li><a href="dashboard.php" <?php echo isPageActive('dashboard.php'); ?> ><i class="fas fa-home btn active"></i>Home</a></li>
            <li><a href="dash-userProfile.php" <?php echo isPageActive('dash-userProfile.php'); ?> ><i class="fas fa-user btn"></i>My Profile</a></li>
            <li><a href="dash-about.php" <?php echo isPageActive('dash-about.php'); ?> ><i class="fas fa-address-card btn"></i>About</a></li>
            <li><a href="dash-visaCategory(student).php" <?php echo isPageActive('dash-visaCategory(student).php'); ?> ><i class="fas fa fa-plane btn"></i>Visa (Students)</a></li>
            <li><a href="dash-visaCategory(work).php" <?php echo isPageActive('dash-visaCategory(work).php'); ?> ><i class="fas fa fa-plane btn"></i>Visa (Job)</a></li>
            <li><a href="dash-blog.php" <?php echo isPageActive('dash-blog.php'); ?> ><i class="fas fa-blog btn"></i>Blogs</a></li>
            <li><a href="dash-contactInfo.php" <?php echo isPageActive('dash-contactInfo.php'); ?> ><i class="fas fa-address-book btn"></i>Contact</a></li>
            <li><a href="#" <?php echo isPageActive('map.php'); ?> ><i class="fas fa-map-pin btn"></i>Map</a></li>
        </ul> 
    </div>
    <div class="main_content">




<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Get the current pathname
    var path = window.location.pathname;

    // Find the corresponding link and add the "active" class
    var links = document.querySelectorAll('nav a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('href') === path) {
        links[i].classList.add('active');
      }
    }
  });
</script>
