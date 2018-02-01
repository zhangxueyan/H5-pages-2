﻿
$(function() {
  var obj = {
    showCountDown: function() {
      function countDown() {
        var nowDate = new Date(),
          getDay = nowDate.getDay(),
          getDate = nowDate.getDate(),//19
          EndDate = new Date();//设置 初始日期今天
         switch(getDay){
            case 0:EndDate.setDate(getDate+3);
            break;
            case 1:EndDate.setDate(getDate+2)
            break;
            case 2:EndDate.setDate(getDate+1)
            break; 
            case 3:EndDate.setDate(getDate+2)
            break;
            case 4:EndDate.setDate(getDate+1)
            break;
            case 5:EndDate.setDate(getDate+2)
            break;
            case 6:EndDate.setDate(getDate+1)
            break;
          }
          var EndDate = new Date(EndDate)
          EndDate.setHours(23)
          EndDate.setMinutes(59)
          EndDate.setSeconds(00)
          EndDate.setMilliseconds(00)
        var t = EndDate.getTime() - nowDate.getTime();
        var d = 0,
          h = 0,
          m = 0,
          s = 0;
        d = Math.floor(t / 1000 / 60 / 60 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
        ms = Math.floor(t % 60);

        function checkTime(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        }
        d = checkTime(d);
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        ms = checkTime(ms)
        document.getElementById("t_d").innerText = d;
        document.getElementById("t_h").innerHTML = h;
        document.getElementById("t_m").innerHTML = m;
        document.getElementById("t_s").innerHTML = s;
        $(".new-d").text(d)
      }
      setInterval(countDown, 100)
    },
    nowDate:function(){
      var nowDate = new Date();
      var getYear= nowDate.getFullYear();
      var getMonth = nowDate.getMonth()+1;
      var getDate = nowDate.getDate();
      $(".new-year").text(getYear)
      $(".new-month").text(getMonth)
      $(".new-date").text(getDate)
    }
  }
  obj.showCountDown()
  obj.nowDate()
})