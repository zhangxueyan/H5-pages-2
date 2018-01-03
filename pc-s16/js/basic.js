  $(function(){
    //banner
    var mySwiper1 = new Swiper ('.swiper-container1', {
       loop: true,
       pagination: '.swiper-pagination',
       paginationClickable :true,
       autoplay:3000,
       speed:1800
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
    $('#element').showPopup($popup1,500);
    $(".popup-close1").click(function(){
      $('#element').hidePopup($popup1);
      $('#element').showPopup($popup2,2000);
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
      var box = document.getElementById('s0-info'),can=true;
      box.innerHTML+=box.innerHTML;
      box.onmouseover=function(){can=false};
      box.onmouseout=function(){can=true};
      new function (){
       var stop=box.scrollTop%50==0&&!can;
       if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++;
       setTimeout(arguments.callee,box.scrollTop%50?20:1500);
     };
     // s5-round
     var $s5_ring = $(".s5-ring");
     $s5_ring.mouseenter(function(){
       $(this).addClass("s5-stop")
     }).mouseleave(function(){
      $(this).removeClass("s5-stop")
     })

  })


