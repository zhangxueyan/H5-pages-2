  $(function(){
    var obj= {
      //currentTime
      currentTime:function(){
        var $curYear = $(".cur-year");
        var $curMonth = $(".cur-month");
        var $curDate = $(".cur-date");

        var nowDate = new Date();

        $curYear.text(nowDate.getFullYear())
        var newMonth = nowDate.getMonth()+1;
        var newDate = nowDate.getDate();
        $curMonth.text(newMonth<10?'0'+newMonth:newMonth)
        $curDate.text(newDate<10?'0'+newDate:newDate)
      },
      // s2 subject Swiper
      subSwiper:function(){
       var mySwiper1 = new Swiper ('.swiper-container1', {
        loop: true,
        slidesPerView :3,
        spaceBetween :15,
        autoplayDisableOnInteraction : false,
        autoplay:3000
       }) 
      },
      //s6 major setCarousel
      majSwiper:function(){
        var $swBtn = $(".s6-btn");
        var mySwiper2 = new Swiper ('.swiper-container2', {
          // autoplay : 3000,
          autoplayDisableOnInteraction : false,
          effect : 'fade',
          fade: {
            crossFade:true,
          },
          onSlideChangeEnd: function(swiper){
             // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
             var idx = swiper.activeIndex
             $swBtn.removeClass("active")
             $swBtn.eq(idx).addClass("active")
           }
        });
        $swBtn.mouseenter(function(){
          var $curBut = $(this);
          var idx = $curBut.index();
          $swBtn.removeClass("active")
          $curBut.addClass("active")
          mySwiper2.slideTo(idx, 1000, false);//切换到第一个slide，速度为1秒
        })
      },
      // s9 video Swiper
      vidSwiper:function(){
       var mySwiper3 = new Swiper ('.swiper-container3', {
        loop: true,
        slidesPerView :3,
        spaceBetween :40,
        autoplayDisableOnInteraction : false,
        // autoplay:3000
       }) 
      }
    };
    obj.currentTime()
    obj.subSwiper()
    obj.majSwiper()
    obj.vidSwiper()
  })