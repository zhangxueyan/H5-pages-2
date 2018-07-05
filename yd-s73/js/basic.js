$(function(){
  var obj = {
      //Android Soft keyboard positioning
      hideKeyboard:function(){
       var wh=$(window).height();
       var $fh = $(".fot-scroll");
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
        var newMonth = myDate.getMonth()+1;
        var newDate = myDate.getDate();
        $month.text(newMonth<10?'0'+newMonth:newMonth)
        $date.text(newDate<10?'0'+newDate:newDate)
      },
     //loopPop
      loopPop:function(){
        var $popup = $('.popup');
        var $popMask = $(".pop-mask");
        function showPopup(sel1,sel2,time){
         setTimeout(function(){sel1.show();sel2.show()},time)
         }
        function hidePopup(sel1,sel2){sel1.hide();sel2.hide()}

        showPopup($popup,$popMask,5000);

        $(".pop-close").click(function(){
           hidePopup($popup,$popMask);
           showPopup($popup,$popMask,10000);
        })
      }
  }
  obj.updateTime()
  obj.loopPop()
})