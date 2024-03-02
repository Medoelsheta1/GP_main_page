/*--------------------------
    Project Name: DataSoft
    Version: 1.0
    Author: 7oorof
    Relase Date: February 2021
---------------------------*/
/*---------------------------
    Table of Contents
    --------------------
    01- Pre Loading
    02- Mobile Menu
    03- Sticky Navbar
    04- Scroll Top Button
    05- Close Topbar
    06- Set Background-img to section 
    07- Add active class to accordions
    08- Contact Form validation
    09- Slick Carousel
    10- Popup Video
    11- CounterUp
    12- NiceSelect Plugin
    13- portfolio Filtering and Sorting
    ----------------------------*/

    const navBarToggler = document.querySelector('.navbar-toggler')
    const navBarCollapse = document.querySelector('.navbar-collapse')
    const clostMobileButton = document.querySelector('.close-mobile-menu')
    const stickyNavbar = document.querySelector('.sticky-navbar')
    const secondaryNav = document.querySelector('.secondary-nav')
    navBarToggler.addEventListener('click' , () => {
        navBarCollapse.classList.add('menu-opened')
    })
    clostMobileButton.addEventListener('click' , () => {
        navBarCollapse.classList.remove('menu-opened')
    })


$(function () {

    "use strict";
    
    // Global variables
    var $win = $(window);


    /*==========   Sticky Navbar   ==========*/
    $win.on('scroll', function () {
        if ($win.width() >= 992) {
            var $stickyNavbar = $('.sticky-navbar'),
                $secondaryNavbar = $('.secondary-nav');
            var $navbaCollapse = $('.navbar-collapse');
            if ($win.scrollTop() > 150) {
                $stickyNavbar.addClass('is-sticky');
                $navbaCollapse.addClass('stickyNav');
            } else {
                $stickyNavbar.removeClass('is-sticky');
                $navbaCollapse.removeClass('stickyNav');

            }
            if ($secondaryNavbar.length) {
                if ($win.scrollTop() > $secondaryNavbar.offset().top - 100) {
                    $secondaryNavbar.addClass('secondary-nav-sticky');
                } else {
                    $secondaryNavbar.removeClass('secondary-nav-sticky');
                }
            }
        }
    });
    // Scroll To Section when Clicking on The Link
    $('.secondary-nav-internal-navigation .nav__link').on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 140
        }, 1000);
    });

    // Add  active class when The Scroll Reaching the Section
    $(window).on("scroll", function () {
        $('section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 141) {
                var sectionID = $(this).attr('id');
                $('.secondary-nav-internal-navigation .nav__link').removeClass('active');
                $('.secondary-nav-internal-navigation .nav__link[data-scroll="' + sectionID + '"]').addClass('active');
            }
        });
    });

    /*==========   Scroll Top Button   ==========*/
    var $scrollTopBtn = $('#scrollTopBtn');
    // Show Scroll Top Button
    $win.on('scroll', function () {
        if ($(this).scrollTop() > 700) {
            $scrollTopBtn.addClass('actived');
        } else {
            $scrollTopBtn.removeClass('actived');
        }
    });
    // Animate Body after Clicking on Scroll Top Button
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*==========   Close Topbar   ==========*/
    $('.topbar__close').on("click", function (e) {
        e.preventDefault();
        $(this).closest('.topbar').fadeOut()
    });

    /*==========   Set Background-img to section   ==========*/
    $('.bg-img').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).parent().css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-position': 'center',
        });
        $(this).parent().addClass('bg-img');
        if ($(this).hasClass('background-size-auto')) {
            $(this).parent().addClass('background-size-auto');
        }
        $(this).remove();
    });

    /*==========   Add active class to accordions   ==========*/
    $('.accordion__header').on('click', function () {
        $(this).parent('.accordion-item').toggleClass('opened');
        $(this).parent('.accordion-item').siblings().removeClass('opened');
    })
    $('.accordion__title').on('click', function (e) {
        e.preventDefault()
    });





    /*==========   Slick Carousel ==========*/
    $('.slick-carousel').slick();

    $('.slider-with-navs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: false,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-with-navs',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px'
    });
})