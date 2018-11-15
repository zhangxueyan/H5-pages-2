$(function(){
  var obj = {
     //Android Soft keyboard positioning
      hideKeyboard:function(){
       var wh=$(window).height();
       var $fh = $(".fot-scroll");
       $(window).resize(function() {
        if($(window).height()<wh){
          $fh.hide();
        }else{
          $fh.show();
        }
       });
      },
       //updateTime
      updateTime:function(){
        var $year = $(".year");
        var $month = $(".month");
        var $date = $(".date");
        var myDate = new Date();
        var getDate = myDate.getDate();
        var getDay = myDate.getDay();
        switch(getDay){
          case 0:myDate.setDate(getDate+3);
          break;
          case 1:myDate.setDate(getDate+2)
          break;
          case 2:myDate.setDate(getDate+1)
          break;
          case 3:myDate.setDate(getDate+2)
          break;
          case 4:myDate.setDate(getDate+1)
          break;
          case 5:myDate.setDate(getDate+2)
          break;
          case 6:myDate.setDate(getDate+1)
          break;
        }
        var newMonth = myDate.getMonth()+1;
        var newDate = myDate.getDate();
        $month.text(newMonth<10?'0'+newMonth:newMonth)
        $date.text(newDate<10?'0'+newDate:newDate)
        $year.text(myDate.getFullYear())
      },
     //University setCarousel
      uniCarousel:function(){
        var $s5But = $(".s3-but");
        var mySwiper1 = new Swiper ('.swiper-container1', {
          // autoplay : 3000,
          // loop: true,
          autoplayDisableOnInteraction : false,
          effect : 'fade',
          fade: {
            crossFade: true,
          },
          onSlideChangeEnd: function(swiper){
             // alert(swiper.activeIndex) //鍒囨崲缁撴潫鏃讹紝鍛婅瘔鎴戠幇鍦ㄦ槸绗嚑涓猻lide
             var idx = swiper.activeIndex
             $s5But.removeClass("active")
             $s5But.eq(idx).addClass("active")
           }
        });
        $s5But.click(function(){
          var $curBut = $(this);
          var idx = $curBut.index();
          $s5But.removeClass("active")
          $curBut.addClass("active")
          mySwiper1.slideTo(idx, 1000, false);//鍒囨崲鍒扮涓€涓猻lide锛岄€熷害涓�1绉�
        })
      },
  }
  obj.updateTime()
  obj.uniCarousel()
})