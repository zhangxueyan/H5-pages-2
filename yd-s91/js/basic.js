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
        $month.text(myDate.getMonth()+1);
        $date.text(myDate.getDate());
        console.log(window.location.hostname)
      },
      popActive:function(){
        var $s2Item = $(".s2-item");
        var $popup = $(".popup");
        var $mask = $(".mask");
        $s2Item.click(function(){
          var idx = $(this).index();
          $popup.fadeOut()
          $popup.eq(idx).fadeIn()
          $mask.fadeIn()
        })
        var $popClose = $(".pop-close");
        $popClose.click(function(){
          $(this).parent(".popup").fadeOut()
          $mask.fadeOut()
        })
      }
  }
  obj.updateTime()
  obj.hideKeyboard()
  obj.popActive()
})