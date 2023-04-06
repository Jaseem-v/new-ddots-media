jQuery(document).ready(function ($) {
    $(window).on("scroll", function () {
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= 100) {
            $('nav.navbar.sticky-nav').addClass('fixed')
        } else {
            $('nav.navbar.sticky-nav').removeClass('fixed')
        }
    });
    $('a[href^="#"]').click(function (e) {
        var targetHref = $(this).attr('href');
        var stickyNavHeight = $('.sticky-nav').outerHeight() + 30;
        if (!stickyNavHeight) {
            stickyNavHeight = 0
        }
        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - stickyNavHeight
        }, 1000);
        e.preventDefault()
    });
    $('.navbar-toggler').click(function () {
        $(".navbar-collapse").addClass("show")
        if ($('.navbar-collapse').hasClass('show')) {
            $('body').css('overflow', 'hidden')
        } else {
            $('body').css('overflow', 'auto')
        }
    });
    $('.navbar-toggler-close').click(function () {
        $(".navbar-collapse").removeClass("show")
        
        if ($('.navbar-collapse').hasClass('show')) {
            $('body').css('overflow', 'hidden')
        } else {
            $('body').css('overflow', 'auto')
        }
    });
    $('.testimonial-slider').slick({
        centerMode: !0,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 8000,
        arrows: !0,
        dots: !1,
        speed: 600,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !0
            }
        }]
    });
    $('.results-slider').slick({
        autoplay: !1,
        autoplaySpeed: 8000,
        dots: !0,
        fade: !0,
        speed: 600,
        adaptiveHeight: !0,
        arrows: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>'
    });
    $('.slider').slick({
        autoplay: !0,
        autoplaySpeed: 4000,
        dots: !0,
        fade: !0,
        speed: 600,
        adaptiveHeight: !0,
        arrows: !1
    });
    $(document).on('gform_confirmation_loaded', function (event, formId) {
        if (formId == 2) {
            fbq('track', 'Lead', {
                content_category: "landing-page"
            });
            window.lintrk('track', {
                conversion_id: 10504369
            })
        }
        if (formId == 4) {
            fbq('track', 'Lead', {
                content_category: "audit"
            })
        }
        if (formId == 5) {
            fbq('track', 'Lead', {
                content_category: "cta-form"
            })
        }
    });
    $('.qa').click(function () {
        $(this).children('.answer').slideToggle();
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened')
        } else {
            $(this).addClass('opened')
        }
    })
})