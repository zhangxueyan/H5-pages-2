  $(function(){
     //nav
       var $nav = $(".nav-list");
       var $li = $nav.find("li");
       $li.mouseenter(function(){
        var $item = $(this);
        var $slideDown = $item.find(".slideDown")
        $slideDown.slideDown(300);
      }).mouseleave(function(){
        var $item = $(this);
        var $slideDown = $item.find(".slideDown")
        $slideDown.fadeOut(50);
      })   
  })


