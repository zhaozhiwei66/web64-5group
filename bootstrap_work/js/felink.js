function xys(){
	var x=window.innerWidth;
	var y=x*100/1989;
	 document.getElementsByTagName("html")[0].style.fontSize=y+"px";
}
window.onresize=xys;
xys();