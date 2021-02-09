$(".js-login-btn").click(function () {
    $(".login-form").slideToggle();
    $(".login-form").toggleClass("login-form--show");
})

$(".js-nav-burger").click(function () {
    $(this).toggleClass("header__coll--clicked");
    // $(".header__coll--menu").slideToggle();
    // $(".header__coll--menu").removeClass("header__coll--show");
    $(".header__coll--nav").slideToggle();
    $(".header__coll--nav").toggleClass("header__coll--show");
})

$(".js-menu-burger").click(function () {
    $(this).toggleClass("header__coll--clicked");
    // $(".header__coll--nav").slideToggle();
    // $(".header__coll--nav").removeClass("header__coll--show");
    $(".header__coll--menu").slideToggle();
    $(".header__coll--menu").toggleClass("header__coll--show");
})