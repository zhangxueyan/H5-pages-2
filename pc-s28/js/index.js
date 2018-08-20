/* $(document).ready(function () {

    //精选自考推荐
    var box_width = $('.selected_box').width() + 10;//每次滚动的宽度
    var num = 0;//累加器
    function autoPlay(){    //自动轮播
        num++;
        if(num >= 0 && num < 5){
            $(".selected_box ul").stop().animate({left:-num*box_width+"px"},500);
        }else{
            $(".selected_box ul").stop().animate({left:'0px'},500);
            num=0;
        }
    };
    function LeftPlay(){
        if(num > 0 && num < 5){
            $(".selected_box ul").stop().animate({left: -(num - 1) * box_width + 'px'},500);
        }else{
            $(".selected_box ul").stop().animate({left: -4 * box_width + 'px'},500);
            num = 5;

        }
        num = num - 1;
    };
    $(".selected_c .prev").click(function(){
        LeftPlay();
    });
    //点击右按钮图片轮播
    $(".selected_c .next").click(function(){
        autoPlay();
    });


}); */

$(function (){
    /* //左侧悬浮窗关闭
    $('.left_fixed span').click(function(){
        $(this).parent('.left_fixed').hide();
    })
    
    //右侧悬浮窗关闭
    $('.right_fixed p').click(function(event) {
        $('.right_fixed').hide();
    }); */
    $('.left_fixed .fanhui').click(function(){
        $('html,body').animate({scrollTop:0}, 500);
    })

    //左右两侧显示
    /*$(window).scroll(function(){
        var h=$(this).scrollTop();//获得滚动条距top的高度
        //alert(h); 
        if(h>683){
            $(".left_fixed").fadeIn();
            $(".right_fixed").fadeIn();
        }else{
            $(".left_fixed").fadeOut();
            $(".right_fixed").fadeOut();
        }
    });*/
});

$(function(){//左下角离线宝
    /* var timer = null;
    clearInterval( timer );
    timer = setTimeout( fn, 10000 );
    function fn(){
        $('#fixed_center').show();
    } */
    $('.lxb_close').click(function(){
        $(this).parents('#fixed_center').hide();
        $('.left_lxb_btn').show();
    });
    $('.left_lxb_btn').click(function(){
        $(this).hide();
        $('#fixed_center').show();
    });
});

$(function(){
    //banner下面四个按钮悬浮
    $('.index_btn ul li').hover(function(){
        $('.zuida').hide();
        $(this).find('a img').hide();
    },function(){
        $('.zuida').show();
        $(this).find('a img').show();        
    })
})



function CheckForm3() { //左下角注册
    var tel = document.getElementById("Orders_Tel2");
    var RegEmpty = /^\s*$/; //匹配所有空字符
    var RegMobile = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    if (RegEmpty.test(tel.value))
    {
        alert("请填写手机号码！");
        tel.focus();
        return false;
    }else if (RegMobile.test(tel.value.replace(/(^\s*)|(\s*$)/g, "")) == false)
    { //去掉手机号两侧空格，并验证是否为11为手机号码
        alert("请填写11位手机号码！");
        tel.focus();
        return false;
    }
    return true;
}

function CheckForm5(){ //考名校本科，你需要注意的注册
    var name=document.getElementById("Orders_Name5");
    var tel=document.getElementById("Orders_Tel5");
    var RegEmpty=/^\s*$/;  //匹配所有空字符
    var RegMobile=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/; //匹配当前国内手机号
    var RegUsername=/[a-zA-Z\u4E00-\u9FA5]+/; //匹配所有汉字和英文字母

    if(RegEmpty.test(name.value)){
        alert('请填写姓名');
        name.focus();
        return false;
    }else if(RegUsername.test(name.value.replace(/(^\s*)|(\s*$)/g,""))==false){ //去掉字符串两侧空字符，并验证是否是汉字或者字母
        alert('用户名必须为汉字或者英文字母！')
        name.focus();
        return false;
    }
    if(RegEmpty.test(tel.value)){
        alert('请填写手机号');
        tel.focus();
        return false;
    }else if(RegMobile.test(tel.value.replace(/(^\s*)|(\s*$)/g,""))==false){ //去掉字符串两侧空字符，并验证是否是11为手机号
        alert('请输入11为手机号码！');
        tel.focus();
        return false;
    }
    return true;
}

function CheckForm6(){ //底部注册
    var name=document.getElementById("Orders_Name6");
    var tel=document.getElementById("Orders_Tel6");
    var RegEmpty=/^\s*$/;  //匹配所有空字符
    var RegMobile=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/; //匹配当前国内手机号
    var RegUsername=/[a-zA-Z\u4E00-\u9FA5]+/; //匹配所有汉字和英文字母

    if(RegEmpty.test(name.value)){
        alert('请填写姓名');
        name.focus();
        return false;
    }else if(RegUsername.test(name.value.replace(/(^\s*)|(\s*$)/g,""))==false){ //去掉字符串两侧空字符，并验证是否是汉字或者字母
        alert('用户名必须为汉字或者英文字母！')
        name.focus();
        return false;
    }
    if(RegEmpty.test(tel.value)){
        alert('请填写手机号');
        tel.focus();
        return false;
    }else if(RegMobile.test(tel.value.replace(/(^\s*)|(\s*$)/g,""))==false){ //去掉字符串两侧空字符，并验证是否是11为手机号
        alert('请输入11为手机号码！');
        tel.focus();
        return false;
    }
    return true;
}

/*  //弹窗1的方法
function tb() {
    timerB = setInterval(function () {
        $(".Tc").show(); clearInterval(timerB);
    }, 8000);
}
$(".mail_wrap em").on("click", function () {
    $(".Tc").hide();
    tb2();
});
$(".mail_wrap p").on("click", function () {
    $(".Tc").hide();
    tb2();
});
timer = setTimeout(function () {
    $(".Tc").show();
}, 10000);


//弹窗2的方法
function tb2() {
    timerC = setInterval(function () {
        $(".Tc2").show(); clearInterval(timerC);
    }, 15000);
}
$(".mail_wrap2 em").on("click", function () {
    $(".Tc2").hide();
    //tb3(); 
});
$(".mail_wrap2 p").on("click", function () {
    $(".Tc2").hide();
    //tb3(); 
}); */
/* //弹窗3的方法
 function tb3() {
    timerD = setInterval(function () {
        $(".Tc3").show(); clearInterval(timerD);
    }, 9000);
}
$(".mail_wrap3 em").on("click", function () {
    $(".Tc3").hide();
    //   tb();
});
$(".mail_wrap3 p").on("click", function () {
    $(".Tc3").hide();
    //   tb();
});  */