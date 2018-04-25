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
      setCarousel:function(){
        var mySwiper1 = new Swiper ('.swiper-container1', {
          autoplay : 3000,
          // loop: true,
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
           var idx = swiper.activeIndex
          $banTab.removeClass("active")
          $banTab.eq(idx).addClass("active")
          swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
         }
        })
        var $banTab = $(".ban-tab");
        $banTab.mouseenter(function(){
          var $curItem = $(this);
          var idx= $curItem.index()
          $banTab.removeClass("active")
          $curItem.addClass("active")
          mySwiper1.slideTo(idx, 1000);//切换到第一个slide，速度为1秒
        })
      },
      //popActive
      popActive:function(){
        var $popup1 = $('.popup1');
        var $popup2 = $('.popup2');

        function showPop(sel,time){setTimeout(function(){sel.show()},time)}
        function hidePop(sel){sel.hide()}
        showPop($popup1,5000)

        $(".pop-close1").click(function(){
          hidePop($popup1)
          showPop($popup2,10000)
        })
        $(".pop-close2").click(function(){
          hidePop($popup2)
        })
        $(".pop-div").click(function(){
          $(".popup").fadeOut()
        })
      },
      susActive:function(){
        var $close= $(".sus-close");
        $close.click(function(){
          var $item = $(this);
          $item.parent(".suspend").addClass("active")
        })
      },
      // navActive
      navActive:function(){
        var $nav_li = $(".nav-li");
        $nav_li.hover(function(){
          var $curLi = $(this);
          $curLi.find(".nav-item").toggleClass("active")
          $curLi.find(".nav-childs").toggle()
        })
      },
      //s3 University setCarousel
      uniCarousel:function(){
        var $s3Item = $(".s3-item");
        var mySwiper2 = new Swiper ('.swiper-container2', {
          autoplay : 3000,
          // loop: true,
          autoplayDisableOnInteraction : false,
          effect : 'fade',
          fade: {
            crossFade: false,
          },
          onSlideChangeEnd: function(swiper){
             // alert(swiper.activeIndex) //鍒囨崲缁撴潫鏃讹紝鍛婅瘔鎴戠幇鍦ㄦ槸绗嚑涓猻lide
             var idx = swiper.activeIndex
             $s3Item.removeClass("active")
             $s3Item.eq(idx).addClass("active")
           }
        });
        $s3Item.mouseenter(function(){
          var $curItem = $(this);
          var idx = $curItem.index();
          $s3Item.removeClass("active")
          $curItem.addClass("active")
          mySwiper2.slideTo(idx, 1000);//鍒囨崲鍒扮涓€涓猻lide锛岄€熷害涓�1绉�
        })
      },
    };
    obj.updateTime()
    obj.setCarousel()
    obj.popActive()
    obj.susActive()
    obj.navActive()
    obj.uniCarousel()
  })