$(function(){
    $(".menu_level").mouseover(function () {
        // $('.navbar-nav > li > .menu_level').css({'color':'#fff'});
        //$(this).css('color','#327DF1');
        // $(this).css({'color':'#327DF1'});
        // console.log(this)
        var nodeParent = this.parentNode;
        // console.log(nodeParent);
        var nodeChild = nodeParent.children;
        // console.log(nodeChild);
        var createNode = document.getElementById("menu_show");
        createNode.style.display = 'block';

        for(var i=0;i<nodeChild.length;i++){
            if(nodeChild[i]!=this){
                var nodes = nodeChild[i].outerHTML;
                createNode.innerHTML = nodes;
            }
        }
    })


    $(".head_top .navbar-nav").mouseout(function(){
        $("#menu_show").hide();
        // $('.navbar-nav > li > .menu_level').css({'color':'#fff'});
    });
    $(".menu_show").hover(function () {
        $("#menu_show").show();
    },function () {
        $("#menu_show").hide();
    });
})
function mouseMenu() {
    $('.navbar-nav > li > a').css('color','#fff');

    $(".menu_level").mouseover(function () {
        $('.navbar-nav > li > .menu_level').css({'color':'#fff'});
        //$(this).css('color','#327DF1');
        $(this).css({'color':'#327DF1'});
        var nodeParent = this.parentNode;
        var nodeChild = nodeParent.children;
        var createNode = document.getElementById("menu_show");
        createNode.style.display = 'block';

        for(var i=0;i<nodeChild.length;i++){
            if(nodeChild[i]!=this){
                var nodes = nodeChild[i].outerHTML;
                createNode.innerHTML = nodes;
            }
        }
    });

    $(".head_top .navbar-nav").mouseout(function(){
        $("#menu_show").hide();
        $('.navbar-nav > li > .menu_level').css({'color':'#fff'});
    });

    $(".menu_show").hover(function () {
        $("#menu_show").show();
    },function () {
        $("#menu_show").hide();
    });
}


function menuNavs(){
    var li = $(".navbar-nav  li");
    $(".navbar-nav  li").addClass("menu_1"); // 一级菜单

    li.has("ul").removeClass("menu_1").addClass("menu_2");  // 二级菜单

    var lis = $(".navbar-nav >  li");
    lis.has("ul>li>ul").removeClass("menu_2").addClass("menu_3");  // 三级菜单


    var menu_1 = $(".menu_1 > a");
    var menu_2 = $(".menu_2 > a");
    var menu_3 = $(".menu_3 > a");

    menu_1.click(function(){
        if($(this).parents().is(".menu_2")){

        }else{
            if($(this).parents("li").is(".menu_2")){
                shut();
            }else if($(this).parents("li").is(".menu_3")){
                $(this).parent("li").siblings().removeClass("opens");
            }
        }
    });
    menu_2.click(function(){
        if($(this).parent().is(".opens")){
            if($(this).parents("li").is(".menu_2")){
                $(this).parent("li").removeClass("opens");
                if($(this).parents(".menu_3")){
                    //$(this).siblings("ul").slideUp(100);
                    $(this).siblings("ul").hide();
                }
                else{
                    //$(".navbar-nav  ul").slideUp(100);
                    $(".navbar-nav  ul").hide();
                }

            }else if($(this).parents("li").is(".menu_3")){

            }
        }else{
            if($(this).parents("li").is(".menu_3")){

                $(this).parent().addClass("opens");
                $(this).siblings("ul").slideDown();

                // $(this).parent(".menu_2").siblings("li").find("ul").slideUp(500);
                $(this).parent(".menu_2").siblings("li").find("ul").hide();
                $(this).parent(".menu_2").siblings("li").removeClass("opens")

            }else if($(this).parents("li").is(".menu_2")){
                shut();
                $(this).parent().addClass("opens");
                $(this).siblings("ul").slideDown();
            }
        }
    });
    menu_3.click(function(){
        if($(this).parent().is(".opens")){
            shut();

        }else{
            shut();
            $(this).parent().addClass("opens");
            $(this).siblings("ul").slideDown();
        }
    });


    //关闭子集
    function shut(){
        $(".opens").removeClass("opens");
       // $(".navbar-nav ul").slideUp(500);
        $(".navbar-nav ul").hide();
    }
}


window.onresize = function () {
    var screen_w = $(document).width();
    if(screen_w >=768){
        //手机切回pc时 点击一级菜单时候需设置
        $(".menu_level").click(function () {
            $(this).siblings(".nav-child").removeAttr("style");
        });
        //默认把pc下菜单的二级菜单的外侧的div设为显示状态（手机下面是隐藏的）
        $(".head_top .nav .nav-child").removeAttr("style");
        //把手机时加上的一二三级标签的class去掉
        var li = $(".navbar-nav  li");
        $(".navbar-nav  li").removeClass("menu_1"); // 一级菜单
        li.has("ul").removeClass("menu_1").removeClass("menu_2");  // 二级菜单
        var lis = $(".navbar-nav >  li");
        lis.has("ul>li>ul").removeClass("menu_2").removeClass("menu_3");  // 三级菜单
        //加载进来pc的js
        mouseMenu();    

    }else{
//           改变字体的颜色
   
        //加载进来phone的js
        menuNavs();
    }



    /*返回顶部 */
    $("#bake").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $("#bake").show(200);
        } else {
            $("#bake").hide(100);
        }
    })
    $("#bake").click(function () {
        $('body,html').animate({
                "scrollTop": "0"
            },
            500);
        return false; //阻止默认行为，并阻止dom冒泡，原网站这个标记是a， 阻止了a的跳转
    });
    $("#bake").on("mouseenter",function(){
        $(this).css("background","url('img/go_up_h.png')");
    });
    $("#bake").on("mouseleave",function(){
        $(this).css("background","url('img/go_up.png')");
    })

}