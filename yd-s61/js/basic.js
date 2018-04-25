$(function(){
  var obj = {
      //Android Soft keyboard positioning
      hideKeyboard:function(){
       var wh=$(window).height();
       var $fh = $("footer");
       $(window).resize(function() {
        if($(window).height()<wh){
          $fh.hide();
        }else{
          $fh.show();
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
        $year.text(myDate.getFullYear());
        $month.text(myDate.getMonth()+1);
        $date.text(myDate.getDate());
      },
      // banner swiper
      banCarousel:function(){
       var mySwiper1 = new Swiper ('.swiper-container1', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction : false,
        autoplay:2000
       }) 
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
        showPopup($popup,$mask,$popMmsg1,10000,$popMmsg2,$popMmsg3);
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
      }
  }
  // obj.hideKeyboard()
  obj.updateTime()
  obj.banCarousel()
  obj.loopPop()
})