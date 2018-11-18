"use strict";


jQuery(document).ready(function ($) {


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
//    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
//        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//            if (target.length) {
//                $('html,body').animate({
//                    scrollTop: (target.offset().top - 40)
//                }, 1000);
//                if ($('.navbar-toggle').css('display') != 'none') {
//                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
//                }
//                return false;
//            }
//        }
//    });




    
    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    $('.cd-menu-trigger').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').addClass('move-out');
        $('#main-nav').addClass('is-visible');
        $('.cd-shadow-layer').addClass('is-visible');
    });
    //close menu
    $('.cd-close-menu').on('click', function (event) {
        event.preventDefault();
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
    });

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
                $window_height = $(window).height(),
                $header_top = $window_height - $header_height,
                $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset().top},
        900
                );
    });






	

//fancybox
    $(".youtube-media").on("click", function (e) {
        var jWindow = $(window).width();
        if (jWindow <= 410) {
            return;
        }
        $.fancybox({
            href: this.href,
            padding: 4,
            type: "iframe",
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        });
        return false;
    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $.localScroll();



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


   

    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

//    $('.main_home_slider').owlCarousel({
//        responsiveClass: true,
//        autoplay: false,
//        items: 1,
//        loop: true,
//        dots: true,
//        nav: false,
//        navText: [
//            "<i class='lnr lnr-chevron-left'></i>",
//            "<i class='lnr lnr-chevron-right'></i>"
//        ],
//        autoplayHoverPause: true

//    });



    $('.main_choose_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });




// main-menu-scroll
//
//    jQuery(window).scroll(function () {
//        var top = jQuery(document).scrollTop();
//        var height = 300;
//        //alert(batas);
//
//        if (top > height) {
//            jQuery('.navbar-fixed-top').addClass('menu-scroll');
//        } else {
//            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
//        }
//    });

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//    $('#menu').slicknav();

    $('#mixcontent').mixItUp({
        animation: {
            animateResizeContainer: false,
            effects: 'fade rotateX(-45deg) translateY(-10%)'
        }
    });


//    $('.dropdown-menu').click(function (e) {
//        e.stopPropagation();
//    });


    //End
});




$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

