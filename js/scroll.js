function animateScroll(e) {
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   
        easing: "linear" 
    });
    return false;
}

$(".nav__link").on("click", animateScroll);
$(".page__scroll").on("click", animateScroll);
$(".logo").on("click", animateScroll);
$(".footer-logo").on("click", animateScroll);

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $(".header").addClass("header--scroll").fadeIn("fast");
        $(".login-form").addClass("login-form--scroll");
    } else {
        $(".header").removeClass("header--scroll").fadeIn("fast");
        $(".login-form").removeClass("login-form--scroll");
    }
})

$(window).scroll(function () {
    let wt = $(window).scrollTop();
    let wh = $(window).height();
    let et = $("#contact").offset().top;
    let eh = $("#contact").outerHeight();
    let dh = $(document).height();
    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        $(".page__aside-reverse").addClass("page__aside-reverse--animate");
    } else {
        $(".page__aside-reverse").removeClass("page__aside-reverse--animate");
    }
});