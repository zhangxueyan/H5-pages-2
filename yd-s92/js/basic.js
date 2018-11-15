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
        var year = window.document.getElementById('year');
        var month = window.document.getElementById('month');
        var date = window.document.getElementById('date');
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
        year.innerHTML = myDate.getFullYear();
        month.innerHTML=myDate.getMonth()+1;
        date.innerHTML=myDate.getDate();
      }
  }
  // obj.updateTime()
  // obj.hideKeyboard()
})



//沙箱模式  防止污染外部变量
; (function (window) {
    //定义一个对象 假如这个对象已存在与window下,那么我们就可以直接使用
    var Cloud = window.Cloud || {};
    //在这个对象上定义属性,而这个属性是一个对象
    Cloud = {
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
      updateTime:function(y,m,d){
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
        y.innerHTML = myDate.getFullYear();
        m.innerHTML=myDate.getMonth()+1;
        d.innerHTML=myDate.getDate();
      }
    };

 var year = window.document.getElementById('year');
 console.log(year)
    //使外部只有Cloud可以被访问
    window.Cloud = Cloud;

})(window);

