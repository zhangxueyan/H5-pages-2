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
          var $submenu = $(this).find(".nav-submenu")
          $submenu.slideDown();
        }).mouseleave(function(){
          var $submenu = $(this).find(".nav-submenu")
          $submenu.fadeOut()
        })
      },
      //discount list + majors list
      scrollInfo:function(area){
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
        var timer = setInterval(scrollUp,30);
        area.onmouseover = function(){clearInterval(timer)}
        area.onmouseout = function(){timer=setInterval(scrollUp,30)}
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
      //setCarousel
      setCarousel:function(){
        var mySwiper = new Swiper ('.swiper-container', {
         loop: true,
         spaceBetween : 20,
         slidesPerView : 6,
         paginationClickable :true,
         autoplay:1800,
         speed:1000
        })
        $('.swiper-container').mouseenter(function(){
          mySwiper.stopAutoplay();
        }).mouseleave(function(){
          mySwiper.startAutoplay();
        })
      }
    };
    obj.updateTime()
    obj.navActive()
    obj.loopPop()
    var listScroll =  document.getElementById('s1-roll');
    obj.scrollInfo(listScroll)
    var s4Majors = document.getElementById('s4-majors');
    obj.scrollInfo(s4Majors)
    obj.setCarousel()
  })