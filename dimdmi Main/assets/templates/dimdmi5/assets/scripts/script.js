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

// What do we do slider setup
$(document).ready(function() {
    $('.wdwd-slider').slick({
        loop: true,
        adaptiveHeight: true,
        accessibility: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7500,
        prevArrow: $('.prev-arrow.prev'),
        nextArrow: $('.next-arrow.next'),
    });
});

// advantages count script
$(window).scroll(advantageScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function advantageScroll() {
    if (isScrolledIntoView($(".advantages")) && !viewed) {
        viewed = true;
        $('.advantage-count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2500,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
}

// Contact form script
$(document).ready(function() {
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "../../assets/php/mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.success-alert').addClass('success-alert-visible');
            $("#form").trigger("reset");
        });
        return false;
    });
    $('.fa-times').click(function() {
        $('.success-alert').removeClass('success-alert-visible');
    });
});