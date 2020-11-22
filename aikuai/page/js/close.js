$(function(){
   var close_mid=$("#msg_close");
   var mid_msg=$(".mid_msg");
   close_mid.click(function(){
       mid_msg.css("display","none");
       //关闭10秒后自动弹出
       setTimeout(open,10000);
   })
   function open(){  
            mid_msg.css("display","block");
            console.log("弹出");  
   }
   
})