$(function(){
    var obj = {
      //Android Soft keyboard positioning
      hideKeyboard:function(){
       var wh=$(window).height();
       $(window).resize(function() {
        if($(window).height()<wh){
          $('.fot-scroll').hide();
        }else{
          $('.fot-scroll').show();
        }
       });
      },
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
        $month.text(myDate.getMonth()+1)
        $date.text(myDate.getDate())
        $year.text(myDate.getFullYear())
      },
      // loopPop
      loopPop:function(){
       var $popup = $('.popup');
       var $mask= $(".pop-mask");
       var $popMmsg1 = $(".pop-msg1");
       var $popMmsg2 = $(".pop-msg2");
       var $popMmsg3 = $(".pop-msg3");
       function showPopup(sel1,sel2,sel3,time,sel4,sel5){
         setTimeout(function(){sel1.show();sel2.show(),sel3.show()},time)
         setTimeout(function(){sel4.show()},time+600)
         setTimeout(function(){sel5.show()},time+1200)
       }
       function hidePopup(sel1,sel2,sel3,sel4,sel5){
        sel1.hide();sel2.hide();sel3.hide();sel4.hide();sel5.hide();
       }

       showPopup($popup,$mask,$popMmsg1,1000,$popMmsg2,$popMmsg3);

       $(".popup-close").click(function(){
        hidePopup($popup,$mask,$popMmsg1,$popMmsg2,$popMmsg3);
        showPopup($popup,$mask,$popMmsg1,7000,$popMmsg2,$popMmsg3);
       })
       
       $(".pop-edit").click(function(){
        var $item = $(this);
        $item.parent(".popup").hide()
        $mask.hide();
      })
       function showTime(){
         var nowDate =new Date();
         var hh = nowDate.getHours();
         var mm = nowDate.getMinutes();
         $(".hours").text(hh<10?'0'+hh:hh)
         $(".minutes").text(mm<10?'0'+mm:mm)
       }
       setInterval(showTime,1000)
     },
      //setCarousel
      setCarousel:function(){
        var mySwiper1 = new Swiper ('.swiper-container1', {
          autoplay : 3000,
          loop: true,
          autoplayDisableOnInteraction : false,
          slidesPerView: 2,
          centeredSlides: true,
          effect : 'coverflow'
        })
      },
      // info scroll
       infoScroll:function(area,height){
        area.innerHTML += area.innerHTML;
        area.scrollTop = 0;
        var timer;
        function startMove(){
          timer = setInterval(scrollUp,20);
          area.scrollTop++;        
        }
        function scrollUp(){
          if(area.scrollTop%height === 0){
            clearInterval(timer);
            setTimeout(startMove,1000);
          }
          else{
            area.scrollTop++;
            if(area.scrollTop >= area.scrollHeight/2){
              area.scrollTop = 0;
            }
          }
        }
        setTimeout(startMove,500);
      },
      // consult online
      consultOline:function(){
       var $zx_btn = $(".s-zx-btn");
       $zx_btn.click(function(){
        $(this).siblings(".s-zx-ip").find("input").val("")
        })
      }
  }
  obj.hideKeyboard()
  obj.updateTime()
  obj.loopPop()
  obj.setCarousel()
  var banInfo = document.getElementById('ban-info');//fot
  var fotInfo = document.getElementById('fot-info');//ban
  obj.infoScroll(banInfo,35)
  obj.infoScroll(fotInfo,50)
  obj.consultOline()
})