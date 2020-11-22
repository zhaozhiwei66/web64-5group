$(function(){
    $(".contact_us").click(function(){
        $.fn.onoff();
    })
    $(".contact_us1").click(function(){
        $.fn.onoff();
    })
    $(".ly_open").click(function(){
        $.fn.onoff();
    })
    $("#ly_close").click(function(){
        $.fn.onoff();
    })

})
// 开关方法
$.fn.onoff=function(){  
    var ly=$("#ly");
    var ly_close=$("#ly_close");   
    if (ly.css("bottom") == "0px") {
        ly.css("bottom","-425px");
        ly_close.css("background","url(img/ly_open.png)center center no-repeat");

    } 
    //拖动事件发生后再点击隐藏按钮执行的操作；
    //此处加else if是因为（前面移动了dom节点后 bottom还是为0；会执行上面的if语句不会缩小，所以前面更改了bottom的值为20px；才增加了此次判断进行隐藏操作）
    else if(ly.css("bottom") == "20px"){
        
        ly.removeAttr("style");//拖动事件发生后 给节点添加了行内样式left、top属性，使bottom、right失效;所以用style，flase属性清空style，让下面重新设置
        ly.css("bottom","-425px");
        ly.css("right","0px");
        ly_close.css("background","url(img/ly_open.png)center center no-repeat");
    }
    else{
        ly.css("bottom","0px");
        ly.css("right","0px");
        ly_close.css("background","url(img/ly_close.png)center center no-repeat");
    }
}