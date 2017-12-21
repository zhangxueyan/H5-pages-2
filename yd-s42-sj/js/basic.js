$(function(){
    // 1、android+fixed-form
        var h=$(window).height();
        $(window).resize(function() {
          if($(window).height()<h){
            $('.fot-scroll').hide();
          }
          if($(window).height()>=h){
            $('.fot-scroll').show();
          }
        });
      //2、ban-fot-scroll-info
      var banInfo = document.getElementById('ban-info');//fot
      var fotInfo = document.getElementById('fot-info');//ban
      function infoScroll(area,height){
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
      infoScroll(banInfo,35)
      infoScroll(fotInfo,50)
      // 3、search online
     var $zx_btn = $(".s-zx-btn");
     $zx_btn.click(function(){
      $(this).siblings(".s-zx-ip").find("input").val("")
     })
     //4、swiper-scroll swiper-container1
      var mySwiper1 = new Swiper ('.swiper-container1', {
        autoplay : 3000,
        loop: true,
        autoplayDisableOnInteraction : false,
        slidesPerView: 2,
        centeredSlides: true,
        effect : 'coverflow'
      })
});