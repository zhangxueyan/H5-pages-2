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
      scrollTo:function(btn,ele){
        btn.click(function(){
          $("html,body").animate({scrollTop:$(ele).offset().top},300);
        })
      }
  }
  obj.scrollTo($(".s4-btn"),$("#s1-iframe"))



  // function scrollTo(ele, speed){
  //   if(!speed) speed = 300;
  //   if(!ele){
  //     $("html,body").animate({scrollTop:0},speed);
  //   }else{
  //     if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
  //   }
  //   return false;
  // }
  
  // $(".s4-btn").click(function(){
  //   scrollTo("#s1-iframe",300)
  // })
})