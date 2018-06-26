/*
-----------------------------------------------------------------------
* Template Name    : Himton | Responsive Bootstrap 4 Landing Template * 
* Author           : ThemesBoss                                        *
* Version          : 1.0.0                                            *
* Created          : March 2018                                       *
* File Description : Main JS file of the template                    *
*----------------------------------------------------------------------
*/

//scroll
$(window).on('scroll', function() {
    var secondFeature = $('#services').offset().top;
    var scroll = $(window).scrollTop();
    if (scroll >= 600) {
        $('.sticky').css({
            "top": '0px'
        });
    } else {
        $('.sticky').css({
            "top": '-400px'
        });
    }
    if (scroll >= secondFeature - 200) {
        $(".mobileScreen").css({
            'background-position': 'center top'
        });
    }
    return false;
});

//Smooth
$('.navbar-nav a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

//ScrollSpy
$("#navbarCollapse").scrollspy({
    offset: 20
});

//Client Slider
$("#owl-demo").owlCarousel({
    autoPlay: 7000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
});

//Mfpvideo
$('.watch-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

//Mfpimg
$('.img-zoom').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});