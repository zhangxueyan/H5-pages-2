
$(function(){
      // loop-pop js
      var $popup = $('.popup');
      var $pop_mask = $('.pop-mask');

      function showPopup(sel1,sel2,time){
       setTimeout(function(){sel1.show();sel2.show()},time)
       }
      function hidePopup(sel1,sel2){sel1.hide();sel2.hide()}


      showPopup($popup,$pop_mask,2000);

      $(".popup-close").click(function(){
         hidePopup($popup,$pop_mask);
         showPopup($popup,$pop_mask,10000);
      })
})
    