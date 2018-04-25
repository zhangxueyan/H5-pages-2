  $(function(){
    var obj= {
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
         $year.text(myDate.getFullYear());
         $month.text(myDate.getMonth()+1);
         $date.text(myDate.getDate());
      },
      //banner setCarousel
      banCarousel:function(){
        var mySwiper1 = new Swiper ('.swiper-container1', {
          autoplay : 3000,
          loop: true,
          autoplayDisableOnInteraction : false,
          effect : 'fade',
          fade: {
            crossFade: true,
          },
         onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
          swiperAnimateCache(swiper); //隐藏动画元素 
          swiperAnimate(swiper); //初始化完成开始动画
         }, 
         onSlideChangeEnd: function(swiper){ 
          swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
         }
        })
        $(".swiper-container1").mouseenter(function(){
          mySwiper1.stopAutoplay()
        }).mouseleave(function(){
          mySwiper1.startAutoplay()
        })
      },
      //s5 University setCarousel
      uniCarousel:function(){
        var $s5But = $(".s5-but");
        var mySwiper2 = new Swiper ('.swiper-container2', {
          autoplay : 3000,
          // loop: true,
          autoplayDisableOnInteraction : false,
          effect : 'fade',
          fade: {
            crossFade: false,
          },
          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          onSlideChangeEnd: function(swiper){
             // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
             var idx = swiper.activeIndex
             $s5But.removeClass("active")
             $s5But.eq(idx).addClass("active")
           }
        });
        $s5But.mouseenter(function(){
          var $curBut = $(this);
          var idx = $curBut.index();
          console.log(idx)
          $s5But.removeClass("active")
          $curBut.addClass("active")
          mySwiper2.slideTo(idx, 1000, false);//切换到第一个slide，速度为1秒
        })
      },
      //s6 majors Active
      majorsActive:function(){
        var $s6Item=$(".s6-item");
        $s6Item.mouseenter(function(){
          var $curItem = $(this);
          $s6Item.addClass("show-mask")
          $curItem.addClass("show-cons")
        }).mouseleave(function(){
           $s6Item.removeClass("show-mask show-cons")
        })
      },
      //s8 diplomas
      diplomasCarousel:function(){
        var mySwiper3 = new Swiper ('.swiper-container3', {
          loop: true,
          autoplay : 2000,
          slidesPerView : 3,
          spaceBetween : 15,
          autoplayDisableOnInteraction : false,
          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
        })
      },
      iframeActive:function(){
        var $close= $(".if-close");
        $close.click(function(){
          var $item = $(this);
          $item.parent(".iframe-fixed").addClass("active")
        })
      },
      //loopPop
      loopPop:function(){
       var $popup = $('.popup');
       var $popMsg1 = $(".pop-msg1");
       var $popMsg2 = $(".pop-msg2");
       var $popMsg3 = $(".pop-msg3");
       function showPopup(sel1,sel2,time,sel3,sel4){
         setTimeout(function(){sel1.show();sel2.show();},time)
         setTimeout(function(){sel3.show()},time+600)
         setTimeout(function(){sel4.show()},time+1200)
       }
       function hidePopup(sel1,sel2,sel3,sel4){
        sel1.hide();sel2.hide();sel3.hide();sel4.hide();
       }

       showPopup($popup,$popMsg1,3000,$popMsg2,$popMsg3);

       $(".pop-close").click(function(){
        hidePopup($popup,$popMsg1,$popMsg2,$popMsg3);
        showPopup($popup,$popMsg1,20000,$popMsg2,$popMsg3);
       })
       
       $(".pop-btn").click(function(){
        var $item = $(this);
        $item.parent(".popup").hide()

       })
      },
    };
    obj.updateTime()
    obj.banCarousel()
    obj.uniCarousel()
    obj.majorsActive()
    obj.diplomasCarousel()
    obj.iframeActive()
    obj.loopPop()
  })