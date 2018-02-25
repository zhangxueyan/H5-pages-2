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
      // suspend susActive
      susActive:function(){
        var $close= $(".sus-close"); 
        $close.click(function(){
          var $item = $(this);
          $item.parent(".suspend").hide()
        })
      },
      // right bottom
      rbPop:function(){
        var $rbPop = $(".rb-pop");
        $rbPop.animate({"right":"5px"},1000);
        var $close = $(".rb-close");
        $close.click(function(){
          $(this).parent().hide()
        })
      },
      // left bottom
      lbPop:function(){
        var $lbOpen = $(".lb-open");
        var $close = $(".lb-close");
        var $lbFold = $(".lb-fold");
        setTimeout(function(){
          $lbOpen.show()
        },500)
        $close.click(function(){
          $lbOpen.hide()
          $lbFold.show()
        })
        $lbFold.click(function(){
          $lbFold.hide()
          $lbOpen.show()
        })
      },
      //banner-bottom scroll info
      scrollInfo:function(area,lineheight){
        area.innerHTML+=area.innerHTML
        area.scrollTop=0;
        var timer=null,timeout=null;
        function startMove(){
         timer= setInterval(scrollUp,20)
         area.scrollTop++;
        }
        function scrollUp(){
          if(area.scrollTop%lineheight===0){
            clearInterval(timer)
            timeout = setTimeout(startMove,1000)
          }else{
            area.scrollTop++
            if(area.scrollTop>=area.scrollHeight/2){
              area.scrollTop=0;
            }
          }
        }
        timeout = setTimeout(startMove,1000)
        area.onmouseover = function(){clearInterval(timer),clearTimeout(timeout)}
        area.onmouseout = function(){timer=setInterval(scrollUp,20)}
      },
      //loopPop
      loopPop:function(){
       var $popup = $('.popup');
       var $popup1 = $('.popup1');
       var $popup2 = $('.popup2');
       setTimeout(function(){$popup1.show()},1000)
       function showPopup(sel1,sel2){
        sel1.hide()
        setTimeout(function(){sel2.show()},5000)
       }
       function hidePopup(sel1){
        sel1.hide()
       }
       $(".pop-close1").click(function(){
        showPopup($popup1,$popup2)
       })
       $(".pop-close2").click(function(){
        hidePopup($popup2)
       })
      },
      //s5 setCarousel
      setCarousel:function(){
        var mySwiper = new Swiper ('.swiper-container', {
         loop: true,
         spaceBetween : 20,
         slidesPerView : 3,
         // 如果需要前进后退按钮
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
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
    obj.susActive()
    obj.rbPop()
    obj.lbPop()
    obj.loopPop()
    var banScroll =  document.getElementById('ban-roll');
    obj.scrollInfo(banScroll,30)
    obj.setCarousel()
  })