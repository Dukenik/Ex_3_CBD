$(document).ready(function () {
    $(".js-home-nav").on("click", ".home-nav__block:not(.home-nav__block--active)", function () {
        $(this).addClass("home-nav__block--active").siblings().removeClass("home-nav__block--active");
        $(".home__tab").removeClass("home__tab--show").eq($(this).index()).addClass("home__tab--show");
    })
})