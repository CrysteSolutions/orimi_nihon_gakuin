<?php
require 'asset/dash-session.php';
include 'asset/dash-header.php';
?>

<body class="home">

<?php
include 'asset/dash-sidenav.php';
?>  
<!-- content goes here-->


<div class="header">Welcome Onboard <?php echo $_SESSION['username'] ?></div> <button onclick ="asset/logout.php">Logout</button> 
    <h1> Website Statistics </h1>

        
    <h3><u>set home page count down</u></h3> <br> 
        <div class="dataget square"> 
         <form > 
        <label> job availability : </label> 
        <input type="text" name="job" placeholder="job availability" required> <br>
        <label>Student Visa approval from our agency : </label>
        <input type="text" name="job" placeholder="job seekers" required> <br>
        <label>Student friendly background : </label>
        <input type="text" name="job" placeholder="job seekers" required> <br>

        <input type="submit" value="submit">
         </form>
         </div>
         <br> 
        <h3> manage Course Categories </h3><br> 
        
          <div class="dataget square"> 
            <form>
              <label> job availability : </label> 
              <input type="text" name="job" placeholder="job availability" required> <br> <br> 
              <label>Student Visa approval from our agency : </label>
              <input type="text" name="job" placeholder="job seekers" required> <br>
              <label>Student friendly background : </label>
              <input type="text" name="job" placeholder="job seekers" required> <br>

              <input type="submit" value="submit">
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