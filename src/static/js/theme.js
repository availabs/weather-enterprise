$(function () {
    "use strict"

    $(document).ready(function () {
        stickHeader()
        int_nav_menu_height()
        //int_sliderHero()
        //int_isotopGridPortfolio()
        //int_Elements()
        //int_SliderPluguns()
        // int_lightbox()
        init_wow()
    })

    $(window).load(function () {
        // int_isotopGridPortfolio()

        // Site Preloader
        $('#preloader').fadeOut('slow', function () {
            $(this).remove()
        })

    })

    $(window).resize(function () {
        //int_introHeight()
        stickHeader()
        int_nav_menu_height()
        // int_SliderPluguns()
        // int_lightbox()
    })

    $(window).scroll(function () {
        stickHeader()
    })

    // ---------------------------------------------------------------------------------------------------------------------------->
    // SCROLL FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->

    function init_scroll() {

        $('.scroll-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 2000)
            return false
        })

        // Scroll Down Elements
        $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on('click', function (e) {
            e.preventDefault()

            var target = this.hash
            var $target = $(target)

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target
            })
        })



    }

    // ----------------------------------------------------------------
    // Backgrounds Image (Slider, Section, etc..)
    // ----------------------------------------------------------------
    var pageSection = $('.slide-img, .bg-image')
    pageSection.each(function (indx) {

        if ($(this).attr("data-background-img")) {
            $(this).css("background-image", "url(" + $(this).data("background-img") + ")")
        }
    })


    // ----------------------------------------------------------------
    // Intro Height
    // ----------------------------------------------------------------
    function int_introHeight() {

        var targetHeight = '.full-height, #hero-carousel .slide'
        var windiwHeight = $(window).height()
        var borderHeightMinus = -60
        var borderHeightMinusMobile = -30

        // Intro Height
        if ($(window).width() < 480) {
            $('.intro-fullscreen, .intro-full-height').css('height', windiwHeight)
        }
        else {
            $('.intro-fullscreen, .intro-full-height').css({
                'height': windiwHeight,
                'min-height': '500px'
            })
        }
    }

    // ----------------------------------------------------------------
    // Intro Height
    // ----------------------------------------------------------------

    function stickHeader() {
        var scrolled = $(window).scrollTop()
        var windHeight = $(window).height()
        if (scrolled > 100) {
            $('.header').addClass('header-prepare')
        } else {
            $('.header').removeClass('header-prepare')
        }

        if (scrolled > 1) {
            $('.header').addClass('header-fixed')
        } else {
            $('.header').removeClass('header-fixed')
        }
    }

    // ----------------------------------------------------------------
    // Navigation Menu panel
    // ----------------------------------------------------------------

    var mobile_menu_icon = $(".nav-menu-icon")
    var mobile_menu = $(".nav-menu")

    // Mobile menu max height
    function int_nav_menu_height() {
        mobile_menu.css("max-height", $(window).height() - 65 + "px")
    }

    // Mobile menu style toggle
    $(".nav-menu-icon").click(function () {
        mobile_menu_icon.toggleClass('active')
        mobile_menu.toggleClass('active')
        return false
    })


   
    // ----------------------------------------------------------------
    // JS Plugins
    // ----------------------------------------------------------------

    // Parallax Function element
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false

    })

    //Parallax Function element
    $('.parallax').each(function () {
        var $el = $(this)
        $(window).scroll(function () {
            parallax($el)
        })
        parallax($el)
    })
    function parallax($el) {
        var diff_s = $(window).scrollTop()
        var parallax_height = $('.parallax').height()
        var yPos_p = (diff_s * 0.5)
        var yPos_m = -(diff_s * 0.5)
        var diff_h = diff_s / parallax_height

        if ($('.parallax').hasClass('parallax-section1')) {
            $el.css('top', yPos_p)
        }
        if ($('.parallax').hasClass('parallax-section2')) {
            $el.css('top', yPos_m)
        }
        if ($('.parallax').hasClass('parallax-static')) {
            $el.css('top', (diff_s * 1))
        }
        if ($('.parallax').hasClass('parallax-opacity')) {
            $el.css('opacity', (1 - diff_h * 1))
        }

        if ($('.parallax').hasClass('parallax-background1')) {
            $el.css("background-position", 'left' + " " + yPos_p + "px")
        }
        if ($('.parallax').hasClass('parallax-background2')) {
            $el.css("background-position", 'left' + " " + -yPos_p + "px")

        }
    }

    // ----------------------------------------------------------------
    // Onepage Nav Elements
    // ----------------------------------------------------------------
    $('.singlepage-nav').singlePageNav({
        offset: 0,
        filter: ':not(.nav-external)',
        updateHash: true,
        currentClass: 'current',
        easing: 'swing',
        speed: 750,
        beforeStart: function () {
            if ($(window).width() < 1024) {
                $('.nav-menu-icon').removeClass('active')
                $('.nav-menu').removeClass('active')
            }
        }
    })


    // ----------------------------------------------------------------
    // WOW animations
    // ----------------------------------------------------------------
    function init_wow() {
        $(function () {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 90,
                mobile: false,
                live: true
            })
            wow.init()
        })
    }

})


// ---------------------------------
// Extra Jquery
// ---------------------------------
$(window).load(function () {
    $(".all-demos-link").attr("href", "../demo.html")
})


