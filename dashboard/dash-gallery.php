<?php
require 'asset/dash-session.php';
include 'asset/dash-header.php';
?> 



<body class="home">

<?php
include 'asset/dash-sidenav.php';
?>  



<style>
    .delete-icon {
        cursor: pointer;
        color: red;
        font-weight: bold;
        margin-left: 5px;
    }

    .image-container {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 10px;
    }
</style>

<!-- Content goes here -->

<div class="header">
    <h2>Update Gallery</h2>
    <div class="dataget square">
        <form method="post" enctype="multipart/form-data" action="dash-gallery.php">
            <label for="event_name">Event Name:</label>
            <input type="text" id="event_name" name="event_name" required>
            <br>
            <label for="gallery_images">Select Images:</label>
            <input type="file" id="gallery_images" name="gallery_images[]" multiple accept="image/*" required>
            <br>
            <input type="submit" value="Update Gallery">
        </form>
    </div>

    <!-- Display selected images -->
    <div id="selectedImagesContainer">
        <h3>Selected Images:</h3>
        <div id="selectedImages"></div>
    </div>
</div>


<!-- gallery showup -->
<br> <br> 
<div class="header">
    <h2>Gallery:</h2>
    <div class="dataget square">
        <form>
            <table border="1">
                <tr>
                    <th>Collection</th>
                    <th>Images</th>
                    <th>Action</th>
                </tr>
                <?php
                // Query to retrieve collection name and image paths from the gallery table
                $query = "SELECT event_name, image_path FROM gallery";
                $result = Database::search($query);

                // Check if there are any results
                if ($result && $result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        $collectionName = $row['event_name'];
                        $imagePaths = explode(',', $row['image_path']);

                        echo "<tr>";
                        echo "<td><strong>$collectionName</strong></td>";
                        echo "<td>";
                        
                        foreach ($imagePaths as $img) {
                            echo "<img src='$img' width='100' height='100' alt='Image'>";
                        }

                        echo "</td>";
                        echo "<td><button type='button' onclick='deleteImage(\"" . implode(',', $imagePaths) . "\")'>Delete</button></td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='3'>No images found in the gallery.</td></tr>";
                }
                ?>
            </table>
        </form>
    </div>
</div>







<!-- End of the content -->
<?php
include 'asset/dash-2sidenav.php';
?>  



  
</div> </div> 
    
<?php
include 'asset/dash-footer.php';
?>  

<!-- Script to display and manage selected images -->
<script>
    document.getElementById('gallery_images').addEventListener('change', function (event) {
        const selectedImagesContainer = document.getElementById('selectedImages');
        selectedImagesContainer.innerHTML = ''; // Clear previous selections

        const files = event.target.files;
        const selectedFiles = [];

        for (let i = 0; i < files.length; i++) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = URL.createObjectURL(files[i]);
            img.width = 100;
            img.height = 100;
            imgContainer.appendChild(img);

            // Create delete icon
            const deleteIcon = document.createElement('span');
            deleteIcon.classList.add('delete-icon');
            deleteIcon.innerHTML = '&#10006;';
            deleteIcon.addEventListener('click', function () {
                // Remove the image container from display
                imgContainer.remove();

                // Remove the corresponding file from the list of selected files
                const index = selectedFiles.indexOf(files[i]);
                if (index !== -1) {
                    selectedFiles.splice(index, 1);
                }
            });

            imgContainer.appendChild(deleteIcon);

            selectedImagesContainer.appendChild(imgContainer);
            selectedFiles.push(files[i]);
        }

        // Store the list of selected files in a hidden input field
        const selectedFilesInput = document.getElementById('selected_files');
        selectedFilesInput.value = JSON.stringify(selectedFiles);
    });
</script>





<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
// Function to save image path to the database
function saveToDatabase($eventName, $filePath)
{
   
    // Insert the event name and image path into the gallery table
    $stmt = Database::prepare("INSERT INTO gallery (event_name, image_path) VALUES (?, ?)");
    $stmt->bind_param("ss", $eventName, $filePath);

    // Execute the statement
    $stmt->execute();
    echo "<script>alert('Gallery recoard updated successfully!');</script>";
    // Close the statement (conn.php will handle closing the connection)
    $stmt->close();
}

// Handle form submission for updating galleryif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the event name from the form
    $eventName = $_POST['event_name'];

    // Assuming you have a form field for selecting images/files
    $uploadedFiles = $_FILES['gallery_images'];

    // Array to store selected image paths
    $selectedImagePaths = [];

    // Loop through each uploaded file
    foreach ($uploadedFiles['tmp_name'] as $key => $tmpName) {
        // Generate a unique name for the file
        $fileName = uniqid() . '_' . $uploadedFiles['name'][$key];

        // Specify the upload directory (adjust this based on your folder structure)
        $uploadPath = 'uploads/' . $eventName . '/' . $fileName;

        // Create the event folder if it doesn't exist
        if (!is_dir('uploads/' . $eventName)) {
            mkdir('uploads/' . $eventName, 0777, true);
        }

        // Move the file to the specified directory
        move_uploaded_file($tmpName, $uploadPath);

        // Add the image path to the array for storing in the database
        $selectedImagePaths[] = $uploadPath;
    }

    // Combine the image paths into a comma-separated string
    $combinedImagePaths = implode(',', $selectedImagePaths);

    // Save the event name and combined image paths to the database
    saveToDatabase($eventName, $combinedImagePaths);

    echo "<script>alert('Gallery updated successfully!');</script>";
}

?>




<?php
// Function to save image path to the database
if (!function_exists('saveToDatabase')) {
    function saveToDatabase($eventName, $filePath)
    {
        // Insert the event name and image path into the gallery table
        $stmt = Database::prepare("INSERT INTO gallery (event_name, image_path) VALUES (?, ?)");
        $stmt->bind_param("ss", $eventName, $filePath);

        // Execute the statement
        $stmt->execute();

        // Close the statement (conn.php will handle closing the connection)
        $stmt->close();
    }
}

// Handle form submission for updating gallery
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if 'event_name' and 'gallery_images' are set
    $eventName = isset($_POST['event_name']) ? $_POST['event_name'] : null;
    $uploadedFiles = isset($_FILES['gallery_images']) ? $_FILES['gallery_images'] : null;

    // Perform further checks and processing only if necessary data is set
    if ($eventName !== null && $uploadedFiles !== null && is_array($uploadedFiles['tmp_name'])) {
        // Array to store selected image paths
        $selectedImagePaths = [];

        // Loop through each uploaded file
        foreach ($uploadedFiles['tmp_name'] as $key => $tmpName) {
            // Check if the necessary keys are set and the file is uploaded successfully
            if (isset($uploadedFiles['name'][$key], $uploadedFiles['tmp_name'][$key]) && is_uploaded_file($tmpName)) {
                // Generate a unique name for the file
                $fileName = uniqid() . '_' . $uploadedFiles['name'][$key];

                // Specify the upload directory (adjust this based on your folder structure)
                $uploadPath = 'uploads/' . $eventName . '/' . $fileName;

                // Create the event folder if it doesn't exist
                if (!is_dir('uploads/' . $eventName)) {
                    mkdir('uploads/' . $eventName, 0777, true);
                }

                // Move the file to the specified directory
                move_uploaded_file($tmpName, $uploadPath);

                // Add the image path to the array for storing in the database
                $selectedImagePaths[] = $uploadPath;
            }
        }

        // Combine the image paths into a comma-separated string
        $combinedImagePaths = implode(',', $selectedImagePaths);

        // Save the event name and combined image paths to the database
        saveToDatabase($eventName, $combinedImagePaths);

        echo "<script>alert('Gallery updated successfully!');</script>";
    } else {
        echo "<script>alert('Failed to update gallery. Please check your input.');</script>";
    }
}
?>