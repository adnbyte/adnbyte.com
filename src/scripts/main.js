var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".header").addClass("header--small");
    } else {
        $(".header").removeClass("header--small");
    }
$(window).scroll(function() {
var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".header").addClass("header--small");
    } else {
        $(".header").removeClass("header--small");
    }
});

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('.map').click(function () {
    $(this).addClass('map--hidden')
})

var menu = $('#menu')

menu.click(function() {
    $('.nav__list').toggleClass('nav__list--show')
})

$('.nav__list *').click(function() {
    $('.nav__list').toggleClass('nav__list--show')
})