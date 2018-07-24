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
      }
  }
  obj.hideKeyboard()
  var fotInfo = document.getElementById('fot-info');//fot
  obj.infoScroll(fotInfo,50)
})