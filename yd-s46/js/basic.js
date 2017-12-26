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
// 2、Deadline for registration
	var $month = $(".month");
	var $date = $(".date");
	var $year = $(".year");
	var myDate = new Date();
	var date = myDate.getDate();
	var day = myDate.getDay();
	if(day == 0){
		myDate.setDate(date+3);   
	}else if(day == 1){
		myDate.setDate(date+2);
	}else if(day == 2){
		myDate.setDate(date+1);
	}else if(day == 3){
		myDate.setDate(date+2);
	}else if(day == 4){
		myDate.setDate(date+1);
	}else if(day == 5){
		myDate.setDate(date+2);
	}else if(day == 6){
		myDate.setDate(date+1);
	}
	$year.text(myDate.getFullYear());
	$month.text(myDate.getMonth()+1);
	$date.text(myDate.getDate());
 //2、ban-fot-scroll-info
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
      infoScroll(fotInfo,50)
});