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
         loop: true,
         autoplay:1800,
         effect : 'fade',
         fade: {
          crossFade: false
         },
         speed:800
        })
        $('.swiper-container1').mouseenter(function(){
          mySwiper1.stopAutoplay();
        }).mouseleave(function(){
          mySwiper1.startAutoplay();
        })
      },
      //popActive
      popActive:function(){
        var $popup1 = $('.popup1');
        var $popup2 = $('.popup2');
        var $popup3 = $('.popup3');

        function showPop(sel,time){setTimeout(function(){sel.show()},time)}
        function hidePop(sel){sel.hide()}
        showPop($popup1,5000)

        $(".pop-close1").click(function(){
          hidePop($popup1)
          showPop($popup2,10000)
        })
        $(".pop-close2").click(function(){
          hidePop($popup2)
          showPop($popup3,10000)
        })
        $(".pop-close3").click(function(){
          hidePop($popup3)
        })
        $(".pop-txt").click(function(){
          $(".popup").fadeOut()
        })
      },
      susActive:function(){
        var $close= $(".sus-close");
        $close.click(function(){
          var $item = $(this);
          $item.parent(".suspend").addClass("active")
          $item.siblings(".sus-open").show()
        })
        var $open = $(".sus-open");
        $open.click(function(){
          var $item = $(this);
          $item.fadeOut()
          $item.parent(".suspend").removeClass("active")
        })
      }
    };
    obj.updateTime()
    obj.setCarousel()
    obj.popActive()
    obj.susActive()
  })