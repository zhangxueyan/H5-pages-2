﻿$(function(){
    var obj = {
      //Android Soft keyboard positioning
      hideKeyboard:function(){
       var wh=$(window).height();
       $(window).resize(function() {
        if($(window).height()<wh){
          $('.fot-scroll').hide();
        }else{
          $('.fot-scroll').hide();
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
      //info scroll
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
      //pop-tc
      togglePopup:function(){
        var $slideBtn = $(".slide-btn");
        var $popup = $(".popup");
        var $popClose =$popup.find(".pop-close");
        $slideBtn.click(function(){
           $popup.show();
           $(this).hide();
        })
        $popClose.click(function(){
          $(this).parent(".popup").hide();
          $slideBtn.show()
        })
      }
    }
  obj.hideKeyboard()
  obj.updateTime()
  var fotInfo = document.getElementById('fot-info');
  obj.infoScroll(fotInfo,60)
  obj.togglePopup()

  //倒计时效果
  function GetRTime(){
    var EndTime= new Date('2018/01/16 18:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0,h=0,m=0,s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
    document.getElementById("t_d").innerHTML = d + " 天";
    document.getElementById("t_h").innerHTML = h + " 时";
    document.getElementById("t_m").innerHTML = m + " 分";
    document.getElementById("t_s").innerHTML = s + " 秒";
  }
  setInterval(GetRTime,0);
})