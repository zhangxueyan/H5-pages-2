$(function(){
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
      // 3、弹窗
      // $(".bot-btn").click(function(){
      //    $('.popup').fadeIn()
      // })
      // $(".pop-close").click(function(){
      //   $('.popup').fadeOut()
      // })
});