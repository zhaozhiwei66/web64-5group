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

    $(".tck>.ss>#gb").click(function() {
        // alert("kkk")
        $(".tck").css("display", "none")
    })
    setTimeout(function() {
        $(".tck").show();
    }, 6000);
    $("#zz").click(function() {
        // alert("jkk")
        $(".zxk").css({ "postiton": "fixed", "top": "220px", "left": "600px" })
    })
    $("#cdh").click(function() {
        // alert("jkk")
        $(".zxk").css({ "postiton": "fixed", "top": "220px", "left": "600px" })
    })
    $(".zxk>.b>img").click(function() {
        $(".zxk").css("display", "none")
        $("#zgb").css("display", "block")

    })
    $("#zgb>.b>img").click(function() {
        $(".zxk").css("display", "block")
        $("#zgb").css("display", "none")

    })

})