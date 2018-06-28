  $(function(){
    var obj= {
      //navActive
      navActive:function(){
        var $li = $(".navli");
        $li.mouseenter(function(){
          var $item = $(this);
          var $slideDown = $item.find(".slideDown")
          $slideDown.slideDown();
        }).mouseleave(function(){
          var $item = $(this);
          var $slideDown = $item.find(".slideDown")
          $slideDown.slideUp();
        })
      },
      //updateTime
      updateTime:function(){
         var $month = $(".month");
         var $date = $(".day");
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
            crossFade: false,
          },
          pagination : '.swiper-pagination',
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next'
        })
        $(".swiper-container1").mouseenter(function(){
          mySwiper1.stopAutoplay()
        }).mouseleave(function(){
          mySwiper1.startAutoplay()
        })
      },
      //loopPop
      loopPop:function(){
        var $popup = $('.popup');
        function showPopup(sel,time){
         setTimeout(function(){sel.show();},time)
         }
        function hidePopup(sel){sel.hide();}
        showPopup($popup,2000);
        $(".pop-close").click(function(){
           hidePopup($popup);
           showPopup($popup,8000);
        })
        $(".pop-txt").click(function(){
          $popup.hide()
        })
      },
      //botfixed
      botfixed:function(){
        var $botMonth = $(".bot-month");
        var $botYear = $(".bot-year")
        var botDate = new Date();//   12/31
        var getDate = botDate.getDate();
        if(getDate>27){
          botDate.setDate(botDate.getDate()+5)
          $botMonth.text(botDate.getMonth()+1);
          $botYear.text(botDate.getFullYear())
        }
        else{
          $botMonth.text(botDate.getMonth()+1);
          $botYear.text(botDate.getFullYear())
        } 
      }
    };
    obj.navActive()
    obj.updateTime()
    obj.banCarousel()
    obj.loopPop()
    obj.botfixed()
  })