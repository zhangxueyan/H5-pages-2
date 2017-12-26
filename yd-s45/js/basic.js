$(function(){
 // fixed-nav + iframe + Android
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('footer').hide();
          }
          if($(window).height()>=h){
            $('footer').show();
          }
        });
});