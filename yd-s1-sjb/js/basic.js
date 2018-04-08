$(function(){
    var obj = {
      //Android Soft keyboard positioning
      hideKeyboard:function(){
       var wh=$(window).height();
       $(window).resize(function() {
        if($(window).height()<wh){
          $('.fot-scroll').hide();
        }else{
          $('.fot-scroll').show();
        }
       });
      },
      //updateTime
      updateTime:function(){
       function countDown(){
          var $year = $(".year");
          var $month = $(".month");
          var $date = $(".date");
          var nowDate = new Date();
          var getDate = nowDate.getDate();
          var getDay = nowDate.getDay();
          // 设置end date
          var endDate =new Date();
          switch(getDay){
            case 0:endDate.setDate(getDate+3);
            break;
            case 1:endDate.setDate(getDate+2)
            break;
            case 2:endDate.setDate(getDate+1)
            break;
            case 3:endDate.setDate(getDate+2)
            break;
            case 4:endDate.setDate(getDate+1)
            break;
            case 5:endDate.setDate(getDate+2)
            break;
            case 6:endDate.setDate(getDate+1)
            break;
          }
          $year.text(endDate.getFullYear());
          $month.text(endDate.getMonth()+1);
          $date.text(endDate.getDate());
          endDate.setHours(23)
          endDate.setMinutes(59)
          endDate.setSeconds(00)
          endDate.setMilliseconds(00)
          // 利用截止日期与当前日期差计算时间
          var t = endDate.getTime()- nowDate.getTime();
          var d,h,m,s,ms;
          d = Math.floor(t/1000/60/60/24);
          h = Math.floor(t/1000/60/60%24);
          m = Math.floor(t/1000/60%60);
          s = Math.floor(t/1000%60);
          ms = Math.floor(t%60);
          // document.getElementById("t_d").innerText = d;
       }
        setInterval(countDown,1000)
      },
      //carousel effect
      carousel:function(){
        var mySwiper = new Swiper ('.swiper-container', {
          autoplay : 3000,
          loop: true,
          slidesPerView : 2,
          centeredSlides : true,
          effect : 'coverflow',
          autoplayDisableOnInteraction : false,
          onSlideChangeEnd: function(swiper){
            $(".swiper-container .swiper-slide").removeClass("active");
            $(swiper.slides[swiper.activeIndex]).addClass("active")
          }
        })
      },
      //infoScroll 
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
  obj.updateTime()
  obj.carousel()
  var fotInfo = document.getElementById('fot-info');//fot
  obj.infoScroll(fotInfo,50)
})