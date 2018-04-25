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
      //Random numbers
      getCount:function(){
       function count(init){
         var $number = $(".s6-num");
         function changeVal(){
          var $value = parseInt($number.text())
          if($value<99998){
           var random = Math.floor(Math.random()*(10-1+1)+1);
           $value+=random
           $number.text($value)
           }else{
             $number.text(parseInt(init))
           }
          }
          setInterval(changeVal,1000)
       }
        count(35987)
      }
  }
  obj.hideKeyboard()
  obj.updateTime()
  obj.getCount()
})