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
        var newMonth = myDate.getMonth()+1;
        var newDate = myDate.getDate();
        $month.text(newMonth<10?'0'+newMonth:newMonth)
        $date.text(newDate<10?'0'+newDate:newDate)
        $year.text(myDate.getFullYear())
      },
      //infoScroll 
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
      }
  }
  obj.updateTime()
  var fotInfo = document.getElementById('fot-info');//fot
  obj.infoScroll(fotInfo,50)
})