// feedbacks slider settings
$('.feedback-slider').slick({
    slidesToShow: 3,
    loop: true,
    infonite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    easing: 'ease-in-out',
    pauseOnHover: true,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
});

// Mobile bars script
$('.bars-box').click(function() {
    $('.bar-1').toggleClass('bar-1-clicked');
    $('.bar-2').toggleClass('bar-2-clicked');
    $('.bar-3').toggleClass('bar-1-clicked');
    $('.navigation').toggleClass('nav-shown');

});

//smoth scroll script
$("body").on('click', '[href*="#"]', function(e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});