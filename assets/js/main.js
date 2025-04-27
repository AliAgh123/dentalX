(function($){
    "use strict";


     // back-to-top
         // page-progress
    var progressPath = document.querySelector(".progress-wrap path");
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
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
     

    // stiky js
    var windowOn = $(window);
    windowOn.on('scroll', function () {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
        $("#vl-header-sticky").removeClass("header-sticky");
      } else {
        $("#vl-header-sticky").addClass("header-sticky");
      }
    });
    




        // mobile menu 
        var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
        var vlSideMenu = $('.vl-offcanvas-menu nav');
        vlSideMenu.append(vlMenuWrap);
        if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length != 0) {
          $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
        }
    
        var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
        $(sideMenuList).on('click', function (e) {
          console.log(e);
          e.preventDefault();
          if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
          } else {
            $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
            $(this).parent().removeClass('active');
          }
        });


    $(".vl-offcanvas-toggle").on('click',function(){
        $(".vl-offcanvas").addClass("vl-offcanvas-open");
        $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
    });

    $(".vl-offcanvas-close-toggle,.vl-offcanvas-overlay").on('click', function(){
        $(".vl-offcanvas").removeClass("vl-offcanvas-open");
        $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
    });

    

    // $(window).load(function() {
      $("#container1").twentytwenty();
      $("#container2").twentytwenty();
    // });

    // select
    $('select').niceSelect();

    // popup
    $('.popup-image').magnificPopup({
        type: 'image'
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    // preloader
    $(window).on("load", function (event) {
      setTimeout(function () {
        $(".preloader").fadeToggle();
      }, 200);
    });

        $(window).on("load", function(){
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
});

    // counter
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // barfiller
    $('#bar1').barfiller();
	  $('#bar2').barfiller();
	  $('#bar3').barfiller();
	  $('#bar4').barfiller();


    // Banner Slider Home 1
    $('#banner-slid1e').owlCarousel({
      loop:true,
      margin:50,
      items:1,
      dots:true,
      autoplay:true,
      autoplayTimeout:4500,
      responsive:{
          0:{
              items:1,
          },
          768:{
              margin:30,
              items:1,
          },
      }
    })

    // Service Slider Home 1
    $('#service-slide-1').owlCarousel({
      loop:true,
      margin:50,
      items:4,
      nav: true,
      dots:false,
      autoplay:true,
      autoplayTimeout:2500,
      navText : ['<i class="fa-regular fa-arrow-left"></i>','<i class="fa-regular fa-arrow-right"></i>'],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
              margin:30,
              items:1,
              nav:true,
          },
          1000:{
              items:2,
              nav:true,
              loop:true,
          }
      }
    })

      // Testimonial Home 1
      $('#testimonal-active').owlCarousel({
        loop:true,
        margin:50,
        items:1,
        nav: true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2500,
        navText : ['<i class="fa-regular fa-angle-left"></i>','<i class="fa-regular fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                margin:30,
                items:1,
                nav:true,
            },
            1000:{
                items:1,
                nav:true,
                loop:true,
            }
        }
    })

    // Testimonial Home 2
    $('#testimonal-active2').owlCarousel({
      loop:true,
      margin:50,
      items:1,
      nav: true,
      dots:false,
      autoplay:true,
      autoplayTimeout:2500,
      navText : ['<i class="fa-regular fa-arrow-left"></i>','<i class="fa-regular fa-arrow-right"></i>'],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
              margin:30,
              items:1,
              nav:true,
          },
          1000:{
              items:1,
              nav:true,
              loop:true,
          }
      }
    })

     // Team Active Home 2
     $('#tea2m-active').owlCarousel({
      loop:true,
      margin:30,
      items:4,
      nav: true,
      dots:false,
      autoplay:true,
      autoplayTimeout:2500,
      navText : ['<i class="fa-regular fa-arrow-left"></i>','<i class="fa-regular fa-arrow-right"></i>'],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
              margin:30,
              items:2,
              nav:true,
          },
          1000:{
              items:4,
              nav:true,
              loop:true,
          }
      }
    })
     // Team Active Home 3
     $('#team3-active').owlCarousel({
      loop:true,
      margin:30,
      items:4,
      nav: true,
      dots:false,
      autoplay:true,
      autoplayTimeout:2500,
      navText : ['<i class="fa-regular fa-arrow-left"></i>','<i class="fa-regular fa-arrow-right"></i>'],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
              margin:30,
              items:2,
              nav:true,
          },
          1000:{
              items:4,
              nav:true,
              loop:true,
          }
      }
    })

    // Service Active Home 4
    $('#servic4e-active').owlCarousel({
      loop:true,
      margin:30,
      items:3,
      nav: true,
      dots:false,
      autoplay:true,
      autoplayTimeout:2500,
      navText : ['<i class="fa-regular fa-angle-left"></i>','<i class="fa-regular fa-angle-right"></i>'],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
              margin:30,
              items:2,
              nav:true,
          },
          1000:{
              items:3,
              nav:true,
              loop:true,
          }
      }
    })

    // Testimonial Active Home 4
    $('#testimonia4l-active').owlCarousel({
      loop:true,
      margin:30,
      items:3,
      nav: true,
      dots:false,
      autoplay:true,
      autoplayTimeout:2500,
      navText : ['<i class="fa-regular fa-angle-left"></i>','<i class="fa-regular fa-angle-right"></i>'],
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
              margin:30,
              items:2,
              nav:true,
          },
          1000:{
              items:3,
              nav:true,
              loop:true,
          }
      }
    })

    // Brand Logo Carousel About page
    $('#brand-active').owlCarousel({
      loop:true,
      margin:30,
      items:3,
      autoplay:true,
      autoplayTimeout:2500,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:3,
          },
          1000:{
              items:3,
          }
      }
    })


    // Testimonial Slider (Home-3)
     $('.slider-galeria').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      infinite:true,
      asNavFor: '.slider-galeria-thumbs',
      prevArrow: $('.testimonial-next-arrow'),
      nextArrow: $('.testimonial-prev-arrow'),
      dots: false,
    });
    $('.slider-galeria-thumbs').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      items:15,
      arrows: true,
      asNavFor: '.slider-galeria',
      vertical: true,
      infinite:true,
      verticalSwiping: true,
      focusOnSelect: true,
      infinite: false,
      prevArrow: $('.testimonial-next-arrow'),
      nextArrow: $('.testimonial-prev-arrow'),
    });

    // aos animation
    AOS.init();
    AOS.init({disable: 'mobile'});


    $(".box[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5})
    

})(jQuery);




//========== GSAP AREA ============= //

if ($('.text-anime-style-1').length) {
  let staggerAmount 	= 0.05,
  translateXValue = 0,
  delayValue 		= 0.5,
   animatedTextElements = document.querySelectorAll('.text-anime-style-1');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.words, {
    duration: 1,
    delay: delayValue,
    x: 20,
    autoAlpha: 0,
    stagger: staggerAmount,
    scrollTrigger: { trigger: element, start: "top 85%" },
    });
  });
  }

  if ($('.text-anime-style-2').length) {
  let	 staggerAmount 		= 0.05,
   translateXValue	= 20,
   delayValue 		= 0.5,
   easeType 			= "power2.out",
   animatedTextElements = document.querySelectorAll('.text-anime-style-2');

  animatedTextElements.forEach((element) => {
  let animationSplitText = new SplitText(element, { type: "chars, words" });
    gsap.from(animationSplitText.chars, {
      duration: 1,
      delay: delayValue,
      x: translateXValue,
      autoAlpha: 0,
      stagger: staggerAmount,
      ease: easeType,
      scrollTrigger: { trigger: element, start: "top 85%"},
    });
  });
  }

  if ($('.text-anime-style-3').length) {
  let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');

  animatedTextElements.forEach((element) => {
  //Reset if needed
  if (element.animation) {
    element.animation.progress(1).kill();
    element.split.revert();
  }

  element.split = new SplitText(element, {
    type: "lines,words,chars",
    linesClass: "split-line",
  });
  gsap.set(element, { perspective: 400 });

  gsap.set(element.split.chars, {
    opacity: 0,
    x: "50",
  });

  element.animation = gsap.to(element.split.chars, {
    scrollTrigger: { trigger: element,	start: "top 90%" },
    x: "0",
    y: "0",
    rotateX: "0",
    opacity: 1,
    duration: 1,
    ease: Back.easeOut,
    stagger: 0.02,
  });
  });
  }

  if($('.reveal').length){gsap.registerPlugin(ScrollTrigger);let revealContainers=document.querySelectorAll(".reveal");revealContainers.forEach((container)=>{let image=container.querySelector("img");let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});});}