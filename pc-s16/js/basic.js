  $(function(){
    //banner
    var mySwiper1 = new Swiper ('.swiper-container1', {
       loop: true,
       pagination: '.swiper-pagination',
       paginationClickable :true,
       autoplay:3000
    })
    $(".swiper-container1").mouseenter(function(){
      mySwiper1.stopAutoplay()
    }).mouseleave(function(){
      mySwiper1.startAutoplay()
    })
     // left right-slide 
    var $close= $(".suspend-close") 
    $close.click(function(){
      var $item = $(this);
      $item.parent(".suspend").hide()
    })
  //head-pop-tc
    var $popup1 = $('.popup1');
    var $popup2 = $('.popup2');
    $('#element').showPopup($popup1,1000);
    $(".popup-close1").click(function(){
      $('#element').hidePopup($popup1);
      $('#element').showPopup($popup2,3000);
    })
    $(".popup-close2").click(function(){
      $('#element').hidePopup($popup2);
    })
    var $pop_btn = $(".pop-btn");
    $pop_btn.click(function(){
      $(this).parent(".popup").fadeOut()
    })
    //bot-pop-tc
    var $bot_pop = $(".bot-popup");
    $(window).scroll(function(){
      var scrolH= $(document).scrollTop();
      if(scrolH>6000&&scrolH<6100){
        $(".popup").hide()
        $bot_pop.fadeIn()
      }
    })
    $(".bot-close").click(function(){
      $(this).parent().fadeOut()
    })
   // Deadline for registration
    var $month = $(".month");
    var $date = $(".date");
    var $year = $(".year");
    var myDate = new Date();
    var date = myDate.getDate();
    var day = myDate.getDay();
      if(day == 0){
        myDate.setDate(date+3);   
      }else if(day == 1){
        myDate.setDate(date+2);
      }else if(day == 2){
        myDate.setDate(date+1);
      }else if(day == 3){
        myDate.setDate(date+2);
      }else if(day == 4){
        myDate.setDate(date+1);
      }else if(day == 5){
        myDate.setDate(date+2);
      }else if(day == 6){
        myDate.setDate(date+1);
      }
      $year.text(myDate.getFullYear());
      $month.text(myDate.getMonth()+1);
      $date.text(myDate.getDate());
      // scroll info
      var s0Info = document.getElementById('s0-info');
      function infoScroll(area,lineheight){
        area.innerHTML+= area.innerHTML;
        area.scrollTop=0;
        var timer=null,timeout=null;
        function startMove(){
         timer = setInterval(scrollUp,20)
         area.scrollTop++
        }
        function scrollUp(){
         if(area.scrollTop%lineheight===0){
          clearInterval(timer);
          timeout = setTimeout(startMove,1000);
          }else{
          area.scrollTop++
          if(area.scrollTop>=area.scrollHeight/2){
            area.scrollTop = 0;
          }
         }
        }
        timeout = setTimeout(startMove,1000);
        area.onmouseover = function(){clearInterval(timer);clearTimeout(timeout);}
        area.onmouseout = function(){timer=setInterval(scrollUp,20)}
      }
      infoScroll(s0Info,50)
     // s5-round
     var $s5_ring = $(".s5-ring");
     var $s5_item = $(".s5-item");
     $s5_item.mouseenter(function(){
       $s5_ring.addClass("s5-stop")
     }).mouseleave(function(){
       $s5_ring.removeClass("s5-stop")
     })

  })


