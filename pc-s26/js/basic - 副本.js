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
      //navActive
      navActive:function(){
        var $navItem = $(".nav-item");
        $navItem.mouseenter(function(){
          var $curItem = $(this);
          var $navSlideDown = $curItem.find(".nav-slideDown")
          $navSlideDown.slideDown();
        }).mouseleave(function(){
          var $curItem = $(this);
          var $navSlideDown = $curItem.find(".nav-slideDown")
          $navSlideDown.slideUp();
        })
      },
      // infoScroll
      infoScroll:function(area){
       area.innerHTML+=area.innerHTML
       area.scrollTop=0;
       function scrollUp(){
        if(area.scrollTop>=area.scrollHeight/2){
          area.scrollTop=0;
        }
        else{
          area.scrollTop++
        }
        }
        var timer = setInterval(scrollUp,20);
        area.onmouseover = function(){clearInterval(timer)}
        area.onmouseout = function(){timer=setInterval(scrollUp,20)}
      },
      // rollLeft
      rollLeft:function(area){
        area.innerHTML+=area.innerHTML
        function scrollLeft(){
          if(area.scrollLeft-area.offsetWidth/2>=0){
           area.scrollLeft-=area.offsetWidth/2;
         }
         else{
           area.scrollLeft++;
         }
       }
       var timer=setInterval(scrollLeft,30);
       area.onmouseout=function (){timer=setInterval(scrollLeft,30);}
       area.onmouseover=function(){clearInterval(timer);}
      },
      updateMonth:function(){
        var $botMonth = $(".bot-month");
        var $botYear = $(".bot-year")
        var botDate = new Date();//   12/31
        var date = botDate.getDate();
        if(date>27){
          botDate.setDate(botDate.getDate()+5)
          $botMonth.text(botDate.getMonth()+1);
          $botYear.text(botDate.getFullYear())
        }
        else{
          $botMonth.text(botDate.getMonth()+1);
          $botYear.text(botDate.getFullYear())
        } 
      },
      // banner swiper
      s2Swiper:function(){
       var mySwiper1 = new Swiper ('.swiper-container1', {
        loop: true,
        slidesPerView :4,
        spaceBetween :15,
        autoplayDisableOnInteraction : false,
        autoplay:3000
       }) 
      },
      // right bottom
      rbPop:function(){
        var $rbPop = $(".rb-pop");
        $rbPop.animate({"right":0},1000);
        var $close = $(".rb-close");
        $close.click(function(){
          $(this).parent().animate({"right":"-320px"},1000);
        })
      },
    };
    obj.updateTime()
    obj.updateMonth()

    var s2Aq = document.getElementById('s2-aq');
    obj.infoScroll(s2Aq)

    var s0Roll = document.getElementById('s0-roll');
    obj.rollLeft(s0Roll)

    obj.s2Swiper()
    obj.navActive()
    obj.rbPop()
  })