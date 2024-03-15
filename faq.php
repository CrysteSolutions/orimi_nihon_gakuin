<?php 
include 'header.php';
?>
        <!-- main part -->
        <main id="content" class="site-main">
            <!-- Inner Banner html start-->
            <section class="inner-banner-wrap ">
                <div class="inner-baner-container" style="background-image: url(assets/orimi/0_FdLLSjLPudGd-Pt5.png);">
                    <div class="container">
                        <div class="inner-banner-content">
                            <h1 class="inner-title">Faq</h1>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Inner Banner html end-->
            <!--  faQ detail section html start -->
            <div class="faq-page-section">
                <div class="container">
                    <div class="faq-page-container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="section-head">
                                    <div class="title-divider"></div>
                                    <h2 class="section-title">
                                        Frequently Asked Questions
                                    </h2>
                                    <div class="section-disc">
                                        <p>
                                            Magna voluptatum dolorem! Dolores! Sociosqu commodo nobis imperdiet lacinia? Magni! Felis, elementum nobis imperdiet lacinia nobis imperdiet lacinia imperdiet lacinia nobis imperdiet lacinia nobis.
                                        </p>
                                    </div>
                                </div>
                                <div id="accordion-tab-one" class="accordion-content" role="tablist">

                                <?php  
                                $faq_rs = Database::search("SELECT * FROM `qna` ");
                                $faq_num = $faq_rs->num_rows;

                                for($x = 0; $x < $faq_num; $x++){
                                    $faq_data = $faq_rs->fetch_assoc();
                                
                                
                                ?>
                                    <div id="accordion-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="accordion-A">
                                        <div class="card-header" role="tab" id="qus-A">
                                            <h5 class="mb-0">
                                                <a data-bs-toggle="collapse" href="#collapse-one" aria-expanded="true" aria-controls="collapse-one">
                                                    <?php echo $faq_data['question'] ?>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapse-one" class="collapse show" data-bs-parent="#accordion-tab-one" role="tabpanel" aria-labelledby="qus-A">
                                            <div class="card-body">
                                                <?php echo $faq_data['answer'] ?>
                                            </div>
                                        </div>
                                    </div>
                                    <?php
                                }
                                    ?>
                                
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="qsn-form-container">
                                    <h4>Any Questions? Ask Us!!</h4>
                                    <div class="pattern-overlay zigzag-patten"></div>
                                    <form>
                                        <p>
                                            <input type="text" name="name" placeholder="Your Name*">
                                        </p>
                                        <p>
                                            <input type="email" name="email" placeholder="Your Email*">
                                        </p>
                                        <p>
                                            <input type="number" name="number" placeholder="Mobile Number*">
                                        </p>
                                        <p>
                                            <textarea rows="8" placeholder="Enter your message*"></textarea>
                                        </p>
                                        <p>
                                            <input type="submit" name="submit" value="SUBMIT QUESTIONS">
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faq-page-container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="faq-testimonial">
                                    <figure class="faq-image">
                                        <div class="pattern-overlay c-patten"></div>
                                        <div class="pattern-overlay circle-patten"></div>
                                        <img src="assets/img/educator-img33.png" alt="">
                                    </figure>
                                    <div class="testimonial-content">
                                        <span class="quote-icon">
                                            <i class="fas fa-quote-left"></i>
                                        </span>
                                        <h4 class="quot-title">Give Us A Chance To Prove It!</h4>
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="faq-content-wrap">
                                    <div class="section-head">
                                        <div class="title-divider"></div>
                                        <h2 class="section-title">
                                            Benefits & What we do?
                                        </h2>
                                        <div class="section-disc">
                                            <p>
                                                Magna voluptatum dolorem! Dolores! Sociosqu commodo nobis imperdiet lacinia? Magni! Felis, elementum nobis imperdiet.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="accordion-tab-two" class="accordion-content" role="tablist">
                                        <div id="accordion-F" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="accordion-F">
                                            <div class="card-header" role="tab" id="qus-F">
                                                <h5 class="mb-0">
                                                    <a data-bs-toggle="collapse" href="#collapse-six" aria-expanded="true" aria-controls="collapse-six">
                                                        We teach everything you can think of !
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-six" class="collapse show" data-bs-parent="#accordion-tab-two" role="tabpanel" aria-labelledby="qus-F">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                </div>
                                            </div>
                                        </div>
                                        <div id="accordion-G" class="card tab-pane" role="tabpanel" aria-labelledby="accordion-G">
                                            <div class="card-header" role="tab" id="qus-G">
                                                <h5 class="mb-0">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-seven" aria-expanded="false" aria-controls="collapse-seven">
                                                        We makes your career special.
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-seven" class="collapse" data-bs-parent="#accordion-tab-two" role="tabpanel" aria-labelledby="qus-G">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                </div>
                                            </div>
                                        </div>
                                        <div id="accordion-H" class="card tab-pane" role="tabpanel" aria-labelledby="accordion-H">
                                            <div class="card-header" role="tab" id="qus-H">
                                                <h5 class="mb-0">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-eight" aria-expanded="true" aria-controls="collapse-eight">
                                                        We guarantee success with our career.
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-eight" class="collapse" data-bs-parent="#accordion-tab-two" role="tabpanel" aria-labelledby="qus-H">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                </div>
                                            </div>
                                        </div>
                                        <div id="accordion-I" class="card tab-pane" role="tabpanel" aria-labelledby="accordion-I">
                                            <div class="card-header" role="tab" id="qus-I">
                                                <h5 class="mb-0">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-nine" aria-expanded="true" aria-controls="collapse-nine">
                                                       We help you to uplift your knowledge.
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-nine" class="collapse" data-bs-parent="#accordion-tab-two" role="tabpanel" aria-labelledby="qus-I">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                </div>
                                            </div>
                                        </div>
                                        <div id="accordion-J" class="card tab-pane" role="tabpanel" aria-labelledby="accordion-J">
                                            <div class="card-header" role="tab" id="qus-J">
                                                <h5 class="mb-0">
                                                    <a class="collapsed" data-bs-toggle="collapse" href="#collapse-ten" aria-expanded="true" aria-controls="collapse-ten">
                                                        We make possible to teach in a tight timeframe.
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapse-ten" class="collapse" data-bs-parent="#accordion-tab-two" role="tabpanel" aria-labelledby="qus-J">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- faQ section html end -->
        </main>
        <!-- footer part -->
<?php include "footer.php";  ?>