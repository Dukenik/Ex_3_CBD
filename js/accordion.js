$(document).ready(function () {
    $(".js-questions-accordion .questions__ask").click(function () {
        $(".questions__answer").not($(this).next()).slideUp();
        $(this).next().slideToggle();
        $(this).find(".questions__svg").toggleClass("questions__svg--active");
    });
});