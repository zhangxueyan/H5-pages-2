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
      },
      // infoScroll
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
      //currentTime
      currentTime:function(){
        var $curYear = $(".cur-year");
        var $curMonth = $(".cur-month");
        var $curDate = $(".cur-date");
        var $curDay= $(".cur-day");
        var nowDate = new Date();
        $curYear.text(nowDate.getFullYear())
        $curMonth.text(nowDate.getMonth()+1)
        $curDate.text(nowDate.getDate())
        var getDay = nowDate.getDay();
        switch(getDay){
          case 0:$curDay.text("日");
          break;
          case 1:$curDay.text("一");
          break;
          case 2:$curDay.text("二");
          break;
          case 3:$curDay.text("三");
          break;
          case 4:$curDay.text("四");
          break;
          case 5:$curDay.text("五");
          break;
          case 6:$curDay.text("六");
          break;
        }
        
      }
  }
  obj.hideKeyboard()
  obj.updateTime()
  var fotInfo = document.getElementById('fot-info');//fot
  obj.infoScroll(fotInfo,60)
  obj.currentTime()
})