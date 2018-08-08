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
      scrollTo:function(btn,ele){
        btn.click(function(){
          $("html,body").animate({scrollTop:ele.offset().top-40},500);
        })
      }
  }
  var curBtn1 = $(".s0-item2");
  var curTar1 = $(".s2");
  obj.scrollTo(curBtn1,curTar1)

  var curBtn2 = $(".s0-item3");
  var curTar2 = $(".s3");
  obj.scrollTo(curBtn2,curTar2)

  var curBtn3 = $(".s0-item4");
  var curTar3 = $(".s6");
  obj.scrollTo(curBtn3,curTar3)

  var curBtn4 = $(".s0-item5");
  var curTar4 = $(".s8");
  obj.scrollTo(curBtn4,curTar4)
})