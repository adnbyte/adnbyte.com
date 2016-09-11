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