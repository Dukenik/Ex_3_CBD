$(function () {
    //ie detection
    if (!!window.MSInputMethodContext && !!document.documentMode) {
        $("html").addClass("ie11");
    }
    if (navigator.userAgent.toLowerCase().indexOf('msie 10') != -1) {
        $("html").addClass("ie10");
    }
    if (navigator.userAgent.toLowerCase().indexOf('msie 9') != -1) {
        $("html").addClass("ie9");
    }
    if (navigator.userAgent.toLowerCase().indexOf('msie 8') != -1) {
        $("html").addClass("ie8");
    }
});