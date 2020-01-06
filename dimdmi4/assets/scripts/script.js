// slider setup script
$('.intro-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: '.arrows-positioning .fas.fa-chevron-right',
    prevArrow: '.arrows-positioning .fas.fa-chevron-left',
});

//header scroll script
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $('.header').addClass('header-scrolled');
    } else {
        $('.header').removeClass('header-scrolled');
    }
});

// navigation bars script
$('.bars-box').click(function() {
    $('.navigation').toggleClass('nav-visible');
    $('.bar1').toggleClass('bar1-clicked');
    $('.bar2').toggleClass('bar2-clicked');
    $('.bar3').toggleClass('bar1-clicked');
});

//smoth scroll script
$("body").on('click', '[href*="#"]', function(e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});