$(function(){
   // 1銆佸畨鍗撴墜鏈烘暟瀛楅敭鍥哄畾瀹氫綅澶辨晥瑙ｅ喅
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $("footer").hide();
          }
          if($(window).height()>=h){
            $("footer").show();
          }
        });
   // 2倒计时效果
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
      var newMonth = myDate.getMonth()+1;
      var newDate = myDate.getDate();
      $month.text(newMonth<10?'0'+newMonth:newMonth)
      $date.text(newDate<10?'0'+newDate:newDate)
      $year.text(myDate.getFullYear())
      // 3 loop-pop js
      var $popup1 = $('.popup1');
      var $popup2 = $('.popup2');
      var $pop_mask = $('.pop-mask');
      $('#element').showPopup($popup1,$pop_mask,10000);
      $(".popup-close1").click(function(){
        $('#element').hidePopup($popup1,$pop_mask);
        $('#element').showPopup($popup2,$pop_mask,15000);
      })
      $(".popup-close2").click(function(){
        $('#element').hidePopup($popup2,$pop_mask);
      })
      $(".popup1-txt").click(function(){
        var $item = $(this);
        $item.parent(".popup").hide()
        $pop_mask.hide();
      })
      //4 s-search
      var $sea_btn = $(".sea-btn");
      var $input = $(".s-inp").find("input");
      $sea_btn.click(function(){
        $input.val("")
      })

});