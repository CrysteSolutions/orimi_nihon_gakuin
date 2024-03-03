<?php
require 'asset/dash-session.php';
include 'asset/dash-header.php';

// Handle form submission for updating gallery
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming you have a form field for selecting images/files
    $uploadedFiles = $_FILES['gallery_images'];

    echo "<script>alert('Gallery updated successfully!');</script>";
}
?>

<body class="home">

<?php
include 'asset/dash-sidenav.php';
?>  

<!-- Content goes here -->

<div class="header">
    <h2>Update Gallery</h2>
    <div class="dataget square"> 
    <form method="post" enctype="multipart/form-data" action="dash-gallery.php">
        <label for="gallery_images">Select Images:</label>
        <input type="file" id="gallery_images" name="gallery_images[]" multiple accept="image/*" required>
        <br>
        <input type="submit" value="Update Gallery">
    </form>
</dev>
</div>

<!-- End of the content -->

<?php
include 'asset/dash-2sidenav.php';
?>  

</div>

<?php
include 'asset/dash-footer.php';
?>
