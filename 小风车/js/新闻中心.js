window.onresize=function add(){
    var iw=window.innerWidth;
    var fs=iw*100/1898;
    document.getElementsByTagName("html")[0].style.fontSize=fs+"px";
    var daoh=document.getElementById("daoh");
    if(window.innerWidth<=1024){
        daoh.removeAttribute("class","container");
        daoh.setAttribute("class","container-fulid")
    }else{
        daoh.removeAttribute("class","container-fulid");
        daoh.setAttribute("class","container")
    }
}
window.onresize();
// alert(window.innerWidth)
$(function(){
    $(".li1").mouseenter(function(){
        $(this).children(".ul2").show()
    })
    $(".li1").mouseleave(function(){
        $(this).children(".ul2").hide()
    })
    $(".li2").mouseenter(function(){
        $(this).children(".ul3").show()
    })
    $(".li2").mouseleave(function(){
        $(this).children(".ul3").hide()
    })
    $("#mobile-nav-taggle").click(function () {
        var mobileMenu = $("#mobile-menu");
        console.log(mobileMenu.hasClass("show-nav"))
        if (mobileMenu.hasClass("show-nav")) {
            setTimeout(function () {
                mobileMenu.addClass("hide-nav").removeClass("show-nav");
            }, 100)
        }
        else {
            setTimeout(function (){
                mobileMenu.addClass("show-nav").removeClass("hide-nav");
            }, 100)
        }
    })
    $()
})
