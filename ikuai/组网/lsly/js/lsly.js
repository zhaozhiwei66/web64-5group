$(function() {
    $("#top>.header>div.col-md-6>ul>li").mouseenter(function() {
        $(this).children("span.bottom").css("width", "100%");
        $(this).children("span.top").stop().animate({
            width: "100%"
        }, 300);
    });
    $("#top>.header>div.col-md-6>ul>li").mouseleave(function() {
        $(this).children("span").stop().animate({
            width: "0%"
        }, 300);
    });
    var wid = window.outerWidth;
    $(".er").css("width", wid);
    $('.header>div.col-md-6>ul>li').mouseenter(function() {
        $(this).children("div.er").stop().slideDown(200);
    })
    $('.header>div.col-md-6>ul>li').mouseleave(function() {
        $(this).children("div.er").stop().slideUp(200);
    })
})