// header script

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $('.header').addClass('scrolled');
    } else {
        $('.header').removeClass('scrolled');
    }
});

// smooth scroll script

$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});


// Portfolio slider plugin setup

$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: true,
        accessibility: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $('.controls-positioning .prev'),
        nextArrow: $('.controls-positioning .next'),
        variableWidth: true,
    });

    var $status = $('.pagingInfo');
    var $slickElement = $('.portfolio-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

});


// Ratings slider plugin setup

$(document).ready(function () {
    $('.rates-slider').slick({
        infinite: true,
        accessibility: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $('.rates-controls-positioning .prev'),
        nextArrow: $('.rates-controls-positioning .next'),
        variableWidth: true,
    });

    var $ratesStatus = $('.rates-pagingInfo');
    var $ratesSlickElement = $('.rates-slider');

    $ratesSlickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $ratesStatus.text(i + '/' + slick.slideCount);
    });

});



// Contact form send script 

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
    $('.fa-close').click(function(){
        $('.notification-alert').removeClass('notification-alert-visible');
    });
});

// Mobile menu script

$('.bars-box').click(function () {
    $('.bar1').toggleClass('bar1-clicked');
    $('.bar2').toggleClass('bar2-clicked');
    $('.bar3').toggleClass('bar1-clicked');
    $('.navigation').toggleClass('nav-shown');
});

// More... button
$(document).ready(function(){
    $('.more-button').click(function(){
    $('.hidden-text').addClass('visible-text');
    $('.about-text').addClass('margin-added');
    $('.more-button').addClass('more-button-hidden');
});
$('.hide-button').click(function(){
    $('.hidden-text').removeClass('visible-text');
    $('.about-text').removeClass('margin-added');
    $('.more-button').removeClass('more-button-hidden');
});
});
