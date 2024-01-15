(function ($) {
  "use strict";
  /*=================================
      JS Index Here
    ==================================*/
  /*
    On Load Function
    Preloader
    Mobile Menu Active
    Sticky fix
    Scroll To Top
    Set Background Image
    Global Slider
    Custom Animaiton For Slider
    Ajax Contact Form
    Search Box Popup
    Popup Sidemenu
    Magnific Popup
    Section Position
    Filter
    Default Tab
    Shape Mockup
    Progress Bar Animation
    Price Slider
    One Page Nav
    Indicator
  */
  /*=================================
      JS Index End
  ==================================*/
  /*

  /*---------- 01. On Load Function ----------*/
  $(window).on("load", function () {
    $(".preloader").fadeOut();
    /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
    new WOW().init();
  });

  $(window).on("resize", function () {
    $(".slick-slider").slick("refresh");
  });

  /*---------- 02. Preloader ----------*/
  if ($(".preloader").length > 0) {
    $(".preloaderCls").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".preloader").css("display", "none");
      });
    });
  }

  /*---------- 03. Mobile Menu Active ----------*/
  $.fn.mobilemenu = function (options) {
    var opt = $.extend(
      {
        menuToggleBtn: ".menu-toggle",
        bodyToggleClass: "body-visible",
        subMenuClass: "submenu-class",
        subMenuParent: "submenu-item-has-children",
        subMenuParentToggle: "active-class",
        meanExpandClass: "mean-expand-class",
        appendElement: '<span class="mean-expand-class"></span>',
        subMenuToggleClass: "menu-open",
        toggleSpeed: 400,
      },
      options
    );

    return this.each(function () {
      var menu = $(this);

      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        var subMenu = "." + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css("display", "none");
            $(this).parent().removeClass(opt.subMenuParentToggle);
          }
        });
      }

      menu.find("li").each(function () {
        var submenu = $(this).find("ul");
        submenu.addClass(opt.subMenuClass);
        submenu.css("display", "none");
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev("a").append(opt.appendElement);
        submenu.next("a").append(opt.appendElement);
      });

      function toggleDropDown($element) {
        var $parent = $($element).parent();
        var $siblings = $parent.siblings();

        $siblings.removeClass(opt.subMenuParentToggle);
        $siblings
          .find("ul")
          .slideUp(opt.toggleSpeed)
          .removeClass(opt.subMenuToggleClass);

        $parent.toggleClass(opt.subMenuParentToggle);
        $($element)
          .next("ul")
          .slideToggle(opt.toggleSpeed)
          .toggleClass(opt.subMenuToggleClass);
      }

      var expandToggler = "." + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      $(opt.menuToggleBtn).each(function () {
        $(this).on("click", function () {
          menuToggle();
        });
      });

      menu.on("click", function (e) {
        e.stopPropagation();
        menuToggle();
      });

      menu.find("div").on("click", function (e) {
        e.stopPropagation();
      });
    });
  };

  $(".mobile-menu-wrapper").mobilemenu();

  /*---------- 03. Desk Menu Active ----------*/
  $.fn.deskmenu = function (options) {
    var opt = $.extend(
      {
        menuToggleBtn: ".menu-toggle2",
        bodyToggleClass: "body-visible",
        subMenuClass: "submenu-class2",
        subMenuParent: "submenu-item-has-children2",
        subMenuParentToggle: "active-class2",
        meanExpandClass: "mean-expand-class2",
        appendElement: '<span class="mean-expand-class2"></span>',
        subMenuToggleClass: "menu-open2",
        toggleSpeed: 400,
      },
      options
    );

    return this.each(function () {
      var menu = $(this);

      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        var subMenu = "." + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css("display", "none");
            $(this).parent().removeClass(opt.subMenuParentToggle);
          }
        });
      }

      menu.find("li").each(function () {
        var submenu = $(this).find("ul");
        submenu.addClass(opt.subMenuClass);
        submenu.css("display", "none");
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev("a").append(opt.appendElement);
        submenu.next("a").append(opt.appendElement);
      });

      function toggleDropDown($element) {
        var $parent = $($element).parent();
        var $siblings = $parent.siblings();

        $siblings.removeClass(opt.subMenuParentToggle);
        $siblings
          .find("ul")
          .slideUp(opt.toggleSpeed)
          .removeClass(opt.subMenuToggleClass);

        $parent.toggleClass(opt.subMenuParentToggle);
        $($element)
          .next("ul")
          .slideToggle(opt.toggleSpeed)
          .toggleClass(opt.subMenuToggleClass);
      }

      var expandToggler = "." + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      $(opt.menuToggleBtn).each(function () {
        $(this).on("click", function () {
          menuToggle();
        });
      });

      menu.on("click", function (e) {
        e.stopPropagation();
        menuToggle();
      });

      menu.find("div").on("click", function (e) {
        e.stopPropagation();
      });
    });
  };

  $(".desk-menu-wrapper").deskmenu();

  /*---------- 03. Sidebar Menu Active ----------*/
  $.fn.sidebarmenu = function (options) {
    var opt = $.extend(
      {
        menuToggleBtn: ".sidemenu-toggle",
        bodyToggleClass: "body-visible",
        subMenuClass: "submenu-class",
        subMenuParent: "submenu-item-has-children",
        subMenuParentToggle: "active-class",
        meanExpandClass: "mean-expand-class",
        appendElement: '<span class="mean-expand-class"></span>',
        subMenuToggleClass: "menu-open",
        toggleSpeed: 400,
      },
      options
    );

    return this.each(function () {
      var menu = $(this); // Select menu

      // Menu Show & Hide
      function menuToggle() {
        menu.toggleClass(opt.bodyToggleClass);

        // collapse submenu on menu hide or show
        var subMenu = "." + opt.subMenuClass;
        $(subMenu).each(function () {
          if ($(this).hasClass(opt.subMenuToggleClass)) {
            $(this).removeClass(opt.subMenuToggleClass);
            $(this).css("display", "none");
            $(this).parent().removeClass(opt.subMenuParentToggle);
          }
        });
      }

      // Class Set Up for every submenu
      menu.find("li").each(function () {
        var submenu = $(this).find("ul");
        submenu.addClass(opt.subMenuClass);
        submenu.css("display", "none");
        submenu.parent().addClass(opt.subMenuParent);
        submenu.prev("a").append(opt.appendElement);
        submenu.next("a").append(opt.appendElement);
      });

      // Toggle Submenu
      function toggleDropDown($element) {
        if ($($element).next("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).next("ul").slideToggle(opt.toggleSpeed);
          $($element).next("ul").toggleClass(opt.subMenuToggleClass);
        } else if ($($element).prev("ul").length > 0) {
          $($element).parent().toggleClass(opt.subMenuParentToggle);
          $($element).prev("ul").slideToggle(opt.toggleSpeed);
          $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
        }
      }

      // Submenu toggle Button
      var expandToggler = "." + opt.meanExpandClass;
      $(expandToggler).each(function () {
        $(this).on("click", function (e) {
          e.preventDefault();
          toggleDropDown($(this).parent());
        });
      });

      // Menu Show & Hide On Toggle Btn click
      $(opt.menuToggleBtn).each(function () {
        $(this).on("click", function () {
          menuToggle();
        });
      });

      // Hide Menu On out side click
      menu.on("click", function (e) {
        e.stopPropagation();
        menuToggle();
      });

      // Stop Hide full menu on menu click
      menu.find("div").on("click", function (e) {
        e.stopPropagation();
      });
    });
  };

  $(".sidebar-menu-wrapper").sidebarmenu();

  /*---------- 04. Sticky fix ----------*/
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 500) {
      $(".sticky-wrapper").addClass("header-sticky");
    } else {
      $(".sticky-wrapper").removeClass("header-sticky");
    }
  });

  /*---------- 05. Scroll To Top ----------*/
  // progressAvtivation
  if ($(".scroll-top")) {
    var scrollTopbtn = document.querySelector(".scroll-top");
    var progressPath = document.querySelector(".scroll-top path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 750;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(scrollTopbtn).addClass("show");
      } else {
        jQuery(scrollTopbtn).removeClass("show");
      }
    });
    jQuery(scrollTopbtn).on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, 1);
      return false;
    });
  }

  /*---------- 06. Set Background Image ----------*/
  if ($("[data-bg-src]").length > 0) {
    $("[data-bg-src]").each(function () {
      var src = $(this).attr("data-bg-src");
      $(this).css("background-image", "url(" + src + ")");
      $(this).removeAttr("data-bg-src").addClass("background-image");
    });
  }

  /*----------- 07. Global Slider ----------*/
  $(".global-carousel").each(function () {
    var carouselSlide = $(this);

    // Collect Data
    function d(data) {
      return carouselSlide.data(data);
    }

    // Custom Arrow Button
    var prevButton =
        '<button type="button" class="slick-prev"><i class="' +
        d("prev-arrow") +
        '"></i></button>',
      nextButton =
        '<button type="button" class="slick-next"><i class="' +
        d("next-arrow") +
        '"></i></button>';

    // Function For Custom Arrow Btn
    $("[data-slick-next]").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $($(this).data("slick-next")).slick("slickNext");
      });
    });

    $("[data-slick-prev]").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        $($(this).data("slick-prev")).slick("slickPrev");
      });
    });

    // Check for arrow wrapper
    if (d("arrows") == true) {
      if (!carouselSlide.closest(".arrow-wrap").length) {
        carouselSlide.closest(".container").parent().addClass("arrow-wrap");
      }
    }

    carouselSlide.slick({
      dots: d("dots") ? true : false,
      fade: d("fade") ? true : false,
      arrows: d("arrows") ? true : false,
      speed: d("speed") ? d("speed") : 1000,
      sliderNavfor: d("slidernavfor") ? d("slidernavfor") : false,
      autoplay: d("autoplay") == false ? false : true,
      infinite: d("infinite") == false ? false : true,
      slidesToShow: d("slide-show") ? d("slide-show") : 1,
      adaptiveHeight: d("adaptive-height") ? true : false,
      centerMode: d("center-mode") ? true : false,
      autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
      centerPadding: d("center-padding") ? d("center-padding") : "0",
      focusOnSelect: d("focuson-select") == false ? false : true,
      pauseOnFocus: d("pauseon-focus") ? true : false,
      pauseOnHover: d("pauseon-hover") ? true : false,
      variableWidth: d("variable-width") ? true : false,
      vertical: d("vertical") ? true : false,
      verticalSwiping: d("vertical") ? true : false,
      prevArrow: d("prev-arrow")
        ? prevButton
        : '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
      nextArrow: d("next-arrow")
        ? nextButton
        : '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
      rtl: $("html").attr("dir") == "rtl" ? true : false,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            arrows: d("xl-arrows") ? true : false,
            dots: d("xl-dots") ? true : false,
            slidesToShow: d("xl-slide-show")
              ? d("xl-slide-show")
              : d("slide-show"),
            centerMode: d("xl-center-mode") ? true : false,
            centerPadding: d("xl-center-padding")
              ? d("xl-center-padding")
              : "0",
          },
        },
        {
          breakpoint: 1400,
          settings: {
            arrows: d("ml-arrows") ? true : false,
            dots: d("ml-dots") ? true : false,
            slidesToShow: d("ml-slide-show")
              ? d("ml-slide-show")
              : d("slide-show"),
            centerMode: d("ml-center-mode") ? true : false,
            centerPadding: d("ml-center-padding")
              ? d("ml-center-padding")
              : "0",
          },
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: d("lg-arrows") ? true : false,
            dots: d("lg-dots") ? true : false,
            slidesToShow: d("lg-slide-show")
              ? d("lg-slide-show")
              : d("slide-show"),
            centerMode: d("lg-center-mode") ? d("lg-center-mode") : false,
            centerPadding: d("lg-center-padding")
              ? d("lg-center-padding")
              : "0",
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: d("md-arrows") ? true : false,
            dots: d("md-dots") ? true : false,
            slidesToShow: d("md-slide-show") ? d("md-slide-show") : 1,
            centerMode: d("md-center-mode") ? d("md-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: d("sm-arrows") ? true : false,
            dots: d("sm-dots") ? true : false,
            slidesToShow: d("sm-slide-show") ? d("sm-slide-show") : 1,
            centerMode: d("sm-center-mode") ? d("sm-center-mode") : false,
            centerPadding: 0,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: d("xs-arrows") ? true : false,
            dots: d("xs-dots") ? true : false,
            slidesToShow: d("xs-slide-show") ? d("xs-slide-show") : 1,
            centerMode: d("xs-center-mode") ? d("xs-center-mode") : false,
            centerPadding: 0,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });
  /*----------- 08. Custom Animaiton For Slider ----------*/
  $("[data-ani-duration]").each(function () {
    var durationTime = $(this).data("ani-duration");
    $(this).css("animation-duration", durationTime);
  });

  $("[data-ani-delay]").each(function () {
    var delayTime = $(this).data("ani-delay");
    $(this).css("animation-delay", delayTime);
  });

  $("[data-ani]").each(function () {
    var animaionName = $(this).data("ani");
    $(this).addClass(animaionName);
    $(".slick-current [data-ani]").addClass("slider-animated");
  });

  $(".global-carousel").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(slick.$slides).find("[data-ani]").removeClass("slider-animated");
      $(slick.$slides[currentSlide])
        .find("[data-ani]")
        .addClass("slider-animated");
    }
  );

  /*----------- 10. Ajax Contact Form ----------*/
  var form = ".ajax-contact";
  var invalidCls = "is-invalid";
  var $email = '[name="email"]';
  var $validation =
    '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
  var formMessages = $(".form-messages");

  function sendContact() {
    var formData = $(form).serialize();
    var valid;
    valid = validateContact();
    if (valid) {
      jQuery
        .ajax({
          url: $(form).attr("action"),
          data: formData,
          type: "POST",
        })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          formMessages.removeClass("error");
          formMessages.addClass("success");
          // Set the message text.
          formMessages.text(response);
          // Clear the form.
          $(form + ' input:not([type="submit"]),' + form + " textarea").val("");
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass("success");
          formMessages.addClass("error");
          // Set the message text.
          if (data.responseText !== "") {
            formMessages.html(data.responseText);
          } else {
            formMessages.html(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    }
  }

  function validateContact() {
    var valid = true;
    var formInput;

    function unvalid($validation) {
      $validation = $validation.split(",");
      for (var i = 0; i < $validation.length; i++) {
        formInput = form + " " + $validation[i];
        if (!$(formInput).val()) {
          $(formInput).addClass(invalidCls);
          valid = false;
        } else {
          $(formInput).removeClass(invalidCls);
          valid = true;
        }
      }
    }
    unvalid($validation);

    if (
      !$($email).val() ||
      !$($email)
        .val()
        .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
    ) {
      $($email).addClass(invalidCls);
      valid = false;
    } else {
      $($email).removeClass(invalidCls);
      valid = true;
    }
    return valid;
  }

  $(form).on("submit", function (element) {
    element.preventDefault();
    sendContact();
  });

  /*---------- 11. Search Box Popup ----------*/
  function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
    $($searchOpen).on("click", function (e) {
      e.preventDefault();
      $($searchBox).addClass($toggleCls);
    });
    $($searchBox).on("click", function (e) {
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
    $($searchBox)
      .find("form")
      .on("click", function (e) {
        e.stopPropagation();
        $($searchBox).addClass($toggleCls);
      });
    $($searchCls).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($searchBox).removeClass($toggleCls);
    });
  }
  popupSarchBox(
    ".popup-search-box",
    ".searchBoxToggler",
    ".searchClose",
    "show"
  );

  /*---------- 12. Popup Sidemenu ----------*/
  function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
    // Sidebar Popup
    $($sideMunuOpen).on("click", function (e) {
      e.preventDefault();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenu).on("click", function (e) {
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
    var sideMenuChild = $sideMenu + " > div";
    $(sideMenuChild).on("click", function (e) {
      e.stopPropagation();
      $($sideMenu).addClass($toggleCls);
    });
    $($sideMenuCls).on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($sideMenu).removeClass($toggleCls);
    });
  }
  popupSideMenu(
    ".sidemenu-wrapper",
    ".sideMenuToggler",
    ".sideMenuCls",
    "show"
  );

  /*----------- 13. Magnific Popup ----------*/
  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    mainClass: "mfp-zoom-in",
    removalDelay: 260,
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
    mainClass: "mfp-zoom-in",
    removalDelay: 260,
  });

  /* magnificPopup video view */
  $(".popup-content").magnificPopup({
    type: "inline",
    midClick: true,
  });

  $(".popup-content").on("click", function () {
    $(".slick-slider").slick("refresh");
  });

  /*----------- 15. Filter ----------*/
  $(".filter-active").imagesLoaded(function () {
    var $filter = ".filter-active",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: "*",
      });

      // filter items on button click
      $($filterMenu).on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // Menu Active Class
      $($filterMenu).on("click", "button", function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).siblings(".active").removeClass("active");
      });
    }
  });

  $(".masonary-active").imagesLoaded(function () {
    var $filter = ".masonary-active",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: "*",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        },
      });

      // filter items on button click
      $($filterMenu).on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // Menu Active Class
      $($filterMenu).on("click", "button", function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).siblings(".active").removeClass("active");
      });
    }
  });

  // Active specifix
  $(".filter-active-cat1").imagesLoaded(function () {
    var $filter = ".filter-active-cat1",
      $filterItem = ".filter-item",
      $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
      var $grid = $($filter).isotope({
        itemSelector: $filterItem,
        filter: ".cat1",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1,
        },
      });

      // filter items on button click
      $($filterMenu).on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
          filter: filterValue,
        });
      });

      // Menu Active Class
      $($filterMenu).on("click", "button", function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).siblings(".active").removeClass("active");
      });
    }
  });

  /*----------- 18. Shape Mockup ----------*/
  $.fn.shapeMockup = function () {
    var $shape = $(this);
    $shape.each(function () {
      var $currentShape = $(this),
        shapeTop = $currentShape.data("top"),
        shapeRight = $currentShape.data("right"),
        shapeBottom = $currentShape.data("bottom"),
        shapeLeft = $currentShape.data("left");
      $currentShape
        .css({
          top: shapeTop,
          right: shapeRight,
          bottom: shapeBottom,
          left: shapeLeft,
        })
        .removeAttr("data-top")
        .removeAttr("data-right")
        .removeAttr("data-bottom")
        .removeAttr("data-left")
        .parent()
        .addClass("shape-mockup-wrap");
    });
  };

  if ($(".shape-mockup")) {
    $(".shape-mockup").shapeMockup();
  }

  /*----------- 20. Progress Bar Animation ----------*/
  $(".progress-bar").waypoint(
    function () {
      $(".progress-bar").css({
        animation: "animate-positive 1.8s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  /*----------- 15. Counter Up ----------*/
  $(".counter-number").counterUp({
    delay: 10,
    time: 1000,
  });

  /*===========================================
	=         Marquee Active         =
    =============================================*/
  if ($(".marquee_mode").length) {
    $(".marquee_mode").marquee({
      speed: 50,
      gap: 0,
      delayBeforeStart: 0,
      direction: "left",
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
    });
  }

  /*--------------------------------------------------
        gsap animation
    ---------------------------------------------------*/
  const fadeElements = document.querySelectorAll(".fade_left");

  fadeElements.forEach((element, index) => {
    gsap.set(element, { x: -100, opacity: 0 });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top center+=300",
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
        from: index * 0.2, // stagger delay based on element index
      },
    });
  });

  const fadeRightElements = document.querySelectorAll(".fade_right");

  fadeRightElements.forEach((element, index) => {
    gsap.set(element, { x: 100, opacity: 0 });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top center+=300",
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
        from: index * 0.2, // stagger delay based on element index
      },
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  let revealContainers = document.querySelectorAll(".img-anim");

  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });

  ///////////////////////////////////////////////////////
  // GSAP Register

  window.gsap.registerPlugin(
    window.ScrollTrigger,
    window.ScrollSmoother,
    window.TweenMax
  );

  /////////////////////////////////////////////////////
  // Magnate Animation
  var magnets = document.querySelectorAll(".gsap-magnetic");
  var strength = 50;

  magnets.forEach((magnet) => {
    magnet.addEventListener("mousemove", moveMagnet);
    magnet.addEventListener("mouseout", function (event) {
      TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
    });
  });

  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();

    //console.log(magnetButton, bounding)

    TweenMax.to(magnetButton, 1, {
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        strength,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        strength,
      ease: Power4.easeOut,
    });
  }

  // // Magnate Animation End

  $(".jarallax").jarallax({
    videoVolume: 0,
    onInit: function () {
      var self = this;
      var video = self.video;
      if (video) {
        var $muteBtn = $('<div class="jarallax-video-pause">PAUSE VIDEO</div>');
        video.on("ready", function () {
          $(self.$item).append($muteBtn);
        });

        let muted = true;
        $muteBtn.on("click", function () {
          if (muted) {
            muted = false;
            video.unmute();
            video.pause();
            $muteBtn.text("PLAY VIDEO");
          } else {
            muted = true;
            video.mute();
            video.play();
            $muteBtn.text("PAUSE VIDEO");
          }
        });
      }
    },
  });
})(jQuery);
