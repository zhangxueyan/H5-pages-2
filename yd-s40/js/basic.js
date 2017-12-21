$(function(){
   // 1、android+fixed-form
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('.fot-scroll').hide();
          }
          if($(window).height()>=h){
            $('.fot-scroll').show();
          }
        });
      // 2、倒计时效果
      var $year = $(".year");
      var $month = $(".month");
      var $date = $(".date");
      var myDate = new Date();//鏈堟棩骞�
      var date = myDate.getDate();//鍑犲彿
      var day = myDate.getDay();//鍛ㄥ嚑 濡傛灉鏄懆7  date+7
      switch(day){
       case 0:
       myDate.setDate(date+3)
       break;
       case 1:
       myDate.setDate(date+2)
       break;
       case 2:
       myDate.setDate(date+1)
       break;
       case 3:
       myDate.setDate(date+2)
       break;
       case 4:
       myDate.setDate(date+1)
       break;
       case 5:
       myDate.setDate(date+2)
       break;
       case 6:
       myDate.setDate(date+1)
       break;
      }
      $year.text(myDate.getFullYear())
      $month.text(myDate.getMonth()+1)
      $date.text(myDate.getDate())
      // 3、loop-pop js
      var $popup1 = $('.popup1');
      var $popup2 = $('.popup2');
      var $pop_mask = $('.pop-mask');
      $('#element').showPopup($popup1,$pop_mask,5000);
      $(".popup-close1").click(function(){
        $('#element').hidePopup($popup1,$pop_mask);
        $('#element').showPopup($popup2,$pop_mask,10000);
      })
      $(".popup-close2").click(function(){
        $('#element').hidePopup($popup2,$pop_mask);
      })
      ///4、fot-scroll-info
      var area = document.getElementById('div1');
      area.innerHTML += area.innerHTML;
      area.scrollTop = 0;
      var timer;
      function startMove(){
        timer = setInterval(scrollUp,50);
        area.scrollTop++;        
      }
      function scrollUp(){
        if(area.scrollTop%50 === 0){
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
      setTimeout(startMove,1000);
});