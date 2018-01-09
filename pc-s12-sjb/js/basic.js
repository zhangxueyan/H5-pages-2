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
         var newMonth = myDate.getMonth()+1;
         var newDate = myDate.getDate();
         $year.text(myDate.getFullYear());
         $month.text(newMonth<10?'0'+newMonth:newMonth);
         $date.text(newDate<10?'0'+newDate:newDate);
      },
      //bottomTime
      bottomTime:function(){
       var botYear = document.querySelector(".bot-year");
       var botMonth = document.querySelector(".bot-month");
       var myDate = new Date();
       var getDate = myDate.getDate();
       if(getDate>27){
        myDate.setDate(getDate+5)
       }
       botMonth.innerHTML = myDate.getMonth()+1
       botYear.innerHTML = myDate.getFullYear()
      },
      //banner
      banActive:function(){
        var mySwiper1 = new Swiper ('.swiper-container1', {
         loop: true,
         initialSlide :1,
         pagination: '.swiper-pagination',
         paginationClickable :true,
         // autoplay:3000,
         // speed:1800,
         effect : 'cube',
         cube: {
          shadowScale: 0.6
        }
       })
        $(".swiper-container1").mouseenter(function(){
          mySwiper1.stopAutoplay()
        }).mouseleave(function(){
          mySwiper1.startAutoplay()
        })
      },
      //navActive
      navActive:function(){
        var $navItem = $(".nav-item");
        $navItem.mouseenter(function(){
          var $slideDown = $(this).find(".slideDown")
          $slideDown.slideDown();
        }).mouseleave(function(){
          var $slideDown = $(this).find(".slideDown")
          $slideDown.fadeOut();
        })
      },
      //popup
      popActive:function(){
        var $popup1 = $('.popup1');
        var $popup2 = $('.popup2');
        var $popup3 = $('.popup3');
        function showPop(sel,time){setTimeout(function(){sel.show()},time)}
        function hidePop(sel){sel.hide()};
        showPop($popup1,500);
        $(".popup-close1").click(function(){
          hidePop($popup1)
          showPop($popup2,1000)
        })
        $(".popup-close2").click(function(){
          hidePop($popup2)
          showPop($popup3,1000)
        })
        $(".popup-close3").click(function(){
          hidePop($popup3)
        })
      },
      //
      susActive:function(){
        var $close= $(".suspend-close");
        $close.click(function(){
          var $item = $(this);
          $item.parent(".suspend").addClass("active")
          $item.siblings(".suspend-open").show()
        })
        var $open = $(".suspend-open");
        $open.click(function(){
          var $item = $(this);
          $item.fadeOut()
          $item.parent(".suspend").removeClass("active")
        })
      },
      //s2
      s2Active:function(){
        var $s2_item = $(".s2-item");
        $s2_item.mouseenter(function(){
          $(this).find("a").slideDown(300)
        }).mouseleave(function(){
          $(this).find("a").slideUp(50)
        })
      },
      //s6
      s6Active:function(){
        var $s6_tab = $(".s6-tab");
        $s6_tab.click(function(){
          var $item = $(this);
          var idx = $item.index();
          var $s6_div = $(".s6-div");
          $s6_tab.removeClass("active");
          $item.addClass("active");
          $s6_div.removeClass("active");
          $s6_div.hide();
          $s6_div.eq(idx).addClass("active");
          $s6_div.eq(idx).show()
        })
        var searchInput = document.querySelector(".inputBox");
        var searchBtn = document.querySelector(".s6-btn");
        searchBtn.onclick = function(){
          searchInput.value = ""
        }
      }
    };
    obj.updateTime()
    obj.bottomTime()
    obj.banActive()
    obj.navActive()
    obj.popActive()
    obj.susActive()
    obj.s2Active()
    obj.s6Active()
  })