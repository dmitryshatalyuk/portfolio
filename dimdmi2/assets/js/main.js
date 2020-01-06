// header script
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 5) {
        $('.page-header').addClass('header-scrolled');
    } else {
        $('.page-header').removeClass('header-scrolled');
    }
});


// smooth scroll script
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

// contact form script
$(document).ready(function () {
    $("#form").submit(function () {
        $.ajax({
            type: "POST",
            url: "../../assets/php/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.notification-alert').addClass('notification-alert-visible');
            $("#form").trigger("reset");
        });
        return false;
    });
    $('.fa-close').click(function () {
        $('.notification-alert').removeClass('notification-alert-visible');
    });
});

// Slider setup script
$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: true,
        accessibility: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        swipeToSlide: true,
        dots: true,
        variableWidth: true,
    });
});

$(document).ready(function () {
    $('.rates-slider').slick({
        infinite: true,
        accessibility: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: true,
        variableWidth: true,
        centerMode: true,
    });
});

// Mobile menu 
$('.bars-box').click(function () {
    $('.bar1').toggleClass('bar1-clicked');
    $('.bar3').toggleClass('bar1-clicked');
    $('.bar2').toggleClass('bar2-clicked');
    $('.navigation').toggleClass('nav-shown');
});

// Animate on scroll script

AOS.init();
