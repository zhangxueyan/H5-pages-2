function getDir(obj,ev){
	var x=obj.getBoundingClientRect().left+obj.offsetWidth/2-ev.clientX;  // 元素左边距离页面左边的距离
	var y=obj.getBoundingClientRect().top+obj.offsetHeight/2-ev.clientY;  // 元素上边距离页面上边的距离
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4; //获取一个扇形的弧度
};

function through(obj){
	obj.onmouseenter=function(ev){
		var oLi=obj.children[1];
		var oEvent = ev || event;
		var dir=getDir(obj,oEvent); //获取角度
		switch(dir){
			case 0:
				oLi.style.left = '271px';
				oLi.style.top =0;
				break;
			case 1:
				oLi.style.left = 0;
				oLi.style.top ='271px';
				break;
			case 2:
				oLi.style.left = '-271px';
				oLi.style.top =0;
				break;
			case 3:
				oLi.style.left = 0;
				oLi.style.top ='-271px';
				break;	
		}
		move(oLi,{left:0,top:0})
	};

	obj.onmouseleave=function(ev){
		var oLi=obj.children[1];
		var oEvent=ev||event;
		var dir=getDir(obj,oEvent);
		switch(dir){
			case 0:
				move(oLi,{top:0,left:271});
				break;
			case 1:
				move(oLi,{top:280,left:0});
				break;
			case 2:
				move(oLi,{top:0,left:-271});
				break;
			case 3:
				move(oLi,{top:-280,left:0});
				break;
		}
	};	
};

window.onload=function (){
	var Ocon1=document.getElementById('con1');
	var Aarticle = Ocon1.children;	
	var oDiv=document.getElementById('yin');
	 for(var i=0; i<Aarticle.length; i++){
		 through(Aarticle[i]);
	 };
	 
	 
	 // var oDiv3 = document.getElementById('menu');
 	// var oDiv2 = document.getElementById('menu2');
 	// 现获取当前条距离上面的绝对位置
 	// var iDivT = getPos(oDiv3).top;
	
 	// window.onscroll = function() {
 	// 	// 获取滚动高度
 	// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

 	// 	if (scrollTop >= iDivT) {
 	// 		if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
 	// 			oDiv3.style.position = 'absolute';
 	// 			oDiv3.style.top = scrollTop + 'px';
 	// 		} else {
 	// 			 oDiv3.style.position = 'fixed';
 	// 			oDiv3.style.top = 0;
 	// 		}
 	// 		oDiv3.style.left = 0;
 	// 		oDiv2.style.display = 'block';
 	// 	} else {
 	// 		oDiv3.style.position = '';
 	// 		oDiv2.style.display = 'none';
 	// 	}
 	// };
	
};

// menu吸顶条
 // function getPos(obj) {
 // 	var l = 0;
 // 	var t = 0;
 // 	while (obj) {
 // 		l += obj.offsetLeft;
 // 		t += obj.offsetTop;

 // 		obj = obj.offsetParent;
 // 	}
 // 	return {left:l, top:t};
 // }



// jQuery(".rotation").slide({
// 	titCell: ".hd li",
// 	mainCell: ".bd ul",
// 	effect: "fold",
// 	autoPlay: true,
// 	interTime:4000,
// 	prevCell:".prev",
// 	nextCell:".next",
// 	trigger: "click",
// 	startFun: function(i) {
// 		var curLi = jQuery(".rotation .bd li").eq(i);
// 		if ( !! curLi.attr("_src")) {
// 			curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
// 			curLi.css("background-color", curLi.attr("_src1")).removeAttr("_src1")
// 		}
// 	}
// });





         
