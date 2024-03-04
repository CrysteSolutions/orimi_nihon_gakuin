<?php
require 'conn.php';

if (isset($_FILES['gallery_images']) && isset($_POST['submit'])) {
    echo "<pre>";
    print_r($_FILES['gallery_images']);
    echo "</pre>";

    $img_name = $_FILES['gallery_images']['name'][0];
    $img_size = $_FILES['gallery_images']['size'][0];
    $tmp_name = $_FILES['gallery_images']['tmp_name'][0];
    $error = $_FILES['gallery_images']['error'][0];

    if ($error == 0) {
        if ($img_size > 125000) {
            $em = "Sorry, your file is too large";
            header("Location: index.php?error=$em");
        } else {
            $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
            $img_ex_lc = strtolower($img_ex);
            $allowed_exs = array("jpg", "jpeg", "png");

            if (in_array($img_ex_lc, $allowed_exs)) {
                $new_img_name = uniqid("IMG", true) . "." . $img_ex_lc;
                $img_upload_path = 'orimi_nihon_gakuin/assets/gallery/' . $new_img_name;

                if (move_uploaded_file($tmp_name, $img_upload_path)) {
                    echo "File uploaded successfully!";
                    header("Location: ../dash-gallery.php");
                } else {
                    $em = "Failed to move file to destination.";
                    header("Location: ../dash-gallery.php?error=$em");
                }
            } else {
                $em = "Unsupported file type. Allowed types: jpg, jpeg, png";
                header("Location: ../dash-gallery.php?error=$em");
            }
        }
    } else {
        $em = "File upload error. Error code: $error";
        header("Location: ../dash-gallery.php?error=$em");
    }
}
?>
