// Guide count script
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
    if (isScrolledIntoView($(".guide-item")) && !viewed) {
        viewed = true;
        $('.count-num').each(function() {
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

//smoth scroll script
$("body").on('click', '[href*="#"]', function(e) {
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
    e.preventDefault();
});

// Mobile navigation script

$('.bars-box').click(function() {
    $('.bar-1').toggleClass('bar-1-clicked');
    $('.bar-2').toggleClass('bar-2-clicked');
    $('.bar-3').toggleClass('bar-1-clicked');
    $('.navigation').toggleClass('nav-shown');

});