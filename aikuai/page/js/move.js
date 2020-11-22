//右下角资讯按住拖动
window.onload=function(){//鼠标跟随效果，也就鼠标在body移动的时候，让div的left、top的定位，跟鼠标位置相同
    document.getElementsByClassName("ly_header")[0].onmousedown=function(){
        document.body.onmousemove=function(e){
            document.getElementById("ly").style.left=e.clientX+"px";
            document.getElementById("ly").style.top=e.clientY+"px";
            //拖动事件发生后 给节点添加了行内样式left、top属性，使bottom、right失效;虽然移动了节点，但是bottom仍然是0px，不会变；为了触发onoff()方法来实现隐藏功能，更改bottom的值
            document.getElementById("ly").style.bottom="20px";
            document.getElementById("ly").style.right="20px";
        }
        document.body.onmouseup=function(){
            document.body.onmousemove=null;
            document.body.onmouseup=null;
        }
    }
}