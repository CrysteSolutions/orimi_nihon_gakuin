<?php
require 'asset/dash-session.php';
include 'asset/dash-header.php';
?>

<body class="home">

<?php
include 'asset/dash-sidenav.php';
?>  
<!-- content goes here-->
<style>

h3 {
    text-decoration: underline;
    text-align: center;
  }
  .info {
    margin: 20px;
    color: #717171;
    line-height: 25px;
  }

/* test*/


.dataget {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
  }

  .dataget form {
    margin: 0;
  }

  .dataget .square {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px; /* Adjust the width of your square */
    height: 200px; /* Adjust the height of your square */
    background-color: transparent;
    border-radius: 10px;
    border: 2px solid #000;
  }

  .dataget label,
  .dataget input {
    margin-bottom: 10px;
  }

  .dataget input {
    width: 150px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>

<div class="header">Welcome Onboard <?php echo $_SESSION['username'] ?></div>  
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
              <label> job availability : </label> 
              <input type="text" name="job" placeholder="job availability" required> <br> <br> 
              <label>Student Visa approval from our agency : </label>
              <input type="text" name="job" placeholder="job seekers" required> <br>
              <label>Student friendly background : </label>
              <input type="text" name="job" placeholder="job seekers" required> <br>

              <input type="submit" value="submit">
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