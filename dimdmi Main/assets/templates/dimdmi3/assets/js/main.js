// smooth scroll script
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

$(document).ready(function () {
    $('.feedback-slider').slick({
        infinite: true,
        accessibility: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: $('.feedback-controls .prev'),
        nextArrow: $('.feedback-controls .next'),
        // variableWidth: true,

    });

    var $status = $('.pagingInfo');
    var $slickElement = $('.feedback-slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });
});


//mobile menu script
$('.bars-box').click(function () {
    $('.bar1').toggleClass('bar1-clicked');
    $('.bar2').toggleClass('bar2-clicked');
    $('.bar3').toggleClass('bar1-clicked');
    $('.nav-list-item').toggleClass('nav-list-item-shown');
});