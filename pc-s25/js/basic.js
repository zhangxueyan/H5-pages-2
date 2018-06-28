$(function(){
  var obj={
  	//popup 弹窗
    popActive:function(){
      var $popup = $('.popup');
      function showPopup(sel,time){
       setTimeout(function(){sel.show();},time)
       }
      function hidePopup(sel){sel.hide();}
      showPopup($popup,5000);
      $(".pop-close").click(function(){
         hidePopup($popup);
         showPopup($popup,8000);
      })
      $(".pop-txt").click(function(){
        $popup.hide()
      })
    },
    botfixed:function(){
        var $botMonth = $(".bot-month");
        var $botYear = $(".bot-year")
        var botDate = new Date();//   12/31
        var getDate = botDate.getDate();
        if(getDate>27){
          botDate.setDate(botDate.getDate()+5)
          $botMonth.text(botDate.getMonth()+1);
          $botYear.text(botDate.getFullYear())
        }
        else{
          $botMonth.text(botDate.getMonth()+1);
          $botYear.text(botDate.getFullYear())
        } 
    }
  }
  // obj.popActive()
  obj.botfixed()

})