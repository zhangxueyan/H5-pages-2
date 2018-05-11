
//滚动
//jQuery(".io1 .gundong").slide({mainCell:".bd ul",autoPlay:true,effect:"topLoop",vis:1,interTime:3000,trigger:"click"});

// //显示隐藏
// var span=$('.con1>a>ul>li>.li_r>p>span');
// var timer=null;
// clearInterval(timer);
// 	timer=setInterval(function(){
// 	span.toggle();
// },500);


//滚动
var tj = $(".gundong .bd ul");
var sdd = 0;
setInterval(function(){
	sdd++;
	if(sdd == 3){
		sdd = 1;
		tj.css("top",'0px')
		
	}
	tj.animate({"top":-sdd*.3 + 'rem'},300);},3000);



//滚动
jQuery(".gund").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:30,trigger:"click"});
//jQuery(".banner").slide({mainCell:".bd ul",autoPlay:true,effect:"left",vis:1,interTime:2000,trigger:"click"});


//

$('.main').click(function(){
	$('.tanks_index').css({
		background:'#000000',
		opacity:.8,
		position:'fixed',
		display:'block',
		zIndex:9,
		left:0,
		top:0,
		right:0,
		bottom:0
	});
	$('.tank').animate({
		top:'50%',
		marginTop:'-1.75rem'
	});
});
$('.close').click(function(){
	$('.tanks_index').css({
		background:'none',
		display:'none',
	});
	$('.tank').animate({
		top:'-50%',
	});
});

$('.close').click(function(){
	$('.tanks_index').css('background','none');
	$('.tank').animate({
		top:'-50%',
	});
});