 $(function(){
    var $nav = $(".nav-list");
    var $li = $nav.find("li");
    $li.mouseenter(function(){
      var $item = $(this);
      var $slideDown = $item.find(".slideDown")
      $slideDown.slideDown();
    }).mouseleave(function(){
      var $item = $(this);
      var $slideDown = $item.find(".slideDown")
      $slideDown.slideUp();
    })
    // 倒计时效果
        var $month = $(".s1-end-month");
        var $date = $(".s1-end-date");
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
        $month.text(myDate.getMonth()+1);
        $date.text(myDate.getDate());
     // s4区域
     var $s4_cates = $(".s4-cates");
     var $cate = $s4_cates.find("a:not('.s4-cate-more')");
     $cate.mouseenter(function(){
      var $item = $(this);
      var $siblings = $item.siblings();
      $item.addClass("active");
      $siblings.removeClass("active");
     })

    // s5滚动毕业证
    var $diplomas = $(".s5-diplomas");
    var mySwiper1 = new Swiper ('.swiper-container1', {
      autoplay:true,
      loop: true,
      speed:20000,
      loop : true
    })
    $diplomas.mouseenter(function(){
      mySwiper1.stopAutoplay();
    }).mouseleave(function(){
      mySwiper1.startAutoplay();
    })

      //底部bot-fixed month
      var $botYear = $(".bot-year")
      var $botMonth = $(".bot-month");
      var nowDate = new Date();//   12/31
      var botDate = nowDate.getDate();
      if(botDate>27){
        botDate.setDate(nowDate.getDate()+5)
        $botMonth.text(nowDate.getMonth()+1);
        $botYear.text(nowDate.getFullYear())
      }
      else{
        $botMonth.text(nowDate.getMonth()+1);
        $botYear.text(nowDate.getFullYear())
      } 

  })