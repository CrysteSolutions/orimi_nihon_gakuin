<?php 
include 'header.php';


?>
        <!-- main part -->
        <main id="content" class="site-main">
            <!-- Inner Banner html start-->
            <section class="inner-banner-wrap">
                <div class="inner-baner-container" style="background-image: url(assets/orimi/contact-us-1908763_1280.png);">
                    <div class="container">
                        <div class="inner-banner-content">
                            <h1 class="inner-title">contact</h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Inner Banner html end-->

          
            <!-- contact form html start -->
            <div class="contact-page-section">
                <div class="container">
                    <div class="map-section">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317838.95217734354!2d-0.27362819527326965!3d51.51107287614788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2snp!4v1632135241093!5m2!1sen!2snp" height="400" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="contact-form-inner">
                        <div class="pattern-overlay zigzag-patten"></div>
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="contact-detail-container">
                                    <div class="section-head">
                                        <div class="title-divider"></div>
                                        <h2 class="section-title">Feel Free To Contact And Reach Us !</h2>
                                        <div class="section-disc">
                                            <p>If you have any questions or concerns, please feel free to contact us.</p>
                                        </div>
                                    </div>
                                    <div class="contact-details-list">
                                        <ul>
                                            <li>
                                                <span class="icon">
                                                    <i aria-hidden="true" class="icon icon-phone1"></i>
                                                </span>
                                                <div class="details-content">
                                                    <h5>Phone Number :</h5>
                                                    <span>Head-Office : <?php echo $phone_number  ?></span>
                                                    <!-- <span>Branch-Office : (+011) 948-56487</span> -->
                                                </div>
                                            </li>
                                            <li>
                                                <span class="icon">
                                                    <i aria-hidden="true" class="icon icon-map-marker1"></i>
                                                </span>
                                                <div class="details-content">
                                                    <h5>Location Address :</h5>
                                                    <span><?php echo $location1  ?></span>
                                                    <!-- <span>3th New Street Road, London</span> -->
                                                </div>
                                            </li>
                                            <li>
                                                <span class="icon">
                                                    <i aria-hidden="true" class="icon icon-envelope3"></i>
                                                </span>
                                                <div class="details-content">
                                                    <h5>Email address :</h5>
                                                    <span><a href="<?php echo $email; ?>" class="__cf_email__" data-cfemail="<?php echo $email; ?>"><?php echo $email  ?></a></span>
                                                    <!-- <span><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e48d8a828bbb9c9d9ea4808b89858d8aca878b89">[email&#160;protected]</a></span> -->
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-from-wrap">
                                    <div class="pattern-overlay circle-patten"></div>
                                    <form class="contact-from">
                                        <p>
                                            <input type="text" name="name" placeholder="Enter Name*">
                                        </p>
                                        <p>
                                            <input type="email" name="email" placeholder="Enter Email*">
                                        </p>
                                        <p>
                                            <input type="text" name="subject" placeholder="Enter Subject*">
                                        </p>
                                        <p>
                                            <input type="number" name="name" placeholder="Enter Number*">
                                        </p>
                                        <p class="width-full">
                                            <textarea rows="8" placeholder="Enter Message*"></textarea>
                                        </p>
                                        <p class="width-full">
                                            <input type="submit" name="submit" value="Submit Now">
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- contact form html end -->
        </main>
        <!-- footer part -->
        
        <?php include "footer.php" ?>