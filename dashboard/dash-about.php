<?php
require 'asset/dash-session.php';
include 'asset/dash-header.php';
?>

<body class="home">

<?php
include 'asset/dash-sidenav.php';
?>  
<!-- content goes here-->

<div class="header">Dashboard/about</div>  
<h3> manage Website Info </h3><br> 
        
<div class="dataget square"> 
    <form>
        <label for="facebookUrl">Facebook URL:</label> 
        <input type="text" id="facebookUrl" name="facebookUrl" placeholder="www.facebook.com/orimi" required> <br> 

        <label for="twitterUrl">Twitter URL:</label>
        <input type="text" id="twitterUrl" name="twitterUrl" placeholder="twitter.com/username" required> <br>

        <label for="youtubeUrl">Youtube URL:</label>
        <input type="text" id="youtubeUrl" name="youtubeUrl" placeholder="www.youtube.com/user/channel" required> <br>

        <label for="instagramUrl">Instagram URL:</label>
        <input type="text" id="instagramUrl" name="instagramUrl" placeholder="www.instagram.com/username" required> <br>

        <label for="linkedinUrl">LinkedIn URL:</label>
        <input type="text" id="linkedinUrl" name="linkedinUrl" placeholder="www.linkedin.com/in/username" required> <br>

        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="123-456-7890" required> <br>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="example@example.com" required> <br>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" placeholder="123 Street, City, Country" required> <br>

        <input type="submit" value="Submit">
    </form>
</div>

        <br>
        <br> 
        <h3> Create Faq </h3><br> 
        <div class="dataget square"> 
    <form>
        <label for="faq">FAQ:</label> 
        <input type="text" id="faq" name="faq" placeholder="" required> <br> <br> 

        <label for="answer">Answer:</label>
        <input type="text" id="answer" name="answer" placeholder="" required> <br>

        <input type="submit" value="Submit">
    </form>
</div>
    </div>
<!--end of the content -->
<?php
include 'asset/dash-2sidenav.php';
?>  



  
</div> 
    
<?php
include 'asset/dash-footer.php';
?>  