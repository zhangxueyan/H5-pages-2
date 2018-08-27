/*nav*/
$(function() {
	var $t, leftX, newWidth;

	$('.menu ul').append('<div class="block"></div>');
	var $block = $('.block');

	$block.width($(".current").width()).css('left', $('.current a').position().left).data('rightLeft', $block.position().left).data('rightWidth', $block.width());

	$('.menu ul li').find('a').hover(function() {
		$t = $(this);
		leftX = $t.position().left;
		newWidth = $t.parent().width();

		$block.stop().animate({
			left: leftX,
			width: newWidth
		},300);
	}, function() {
		$block.stop().animate({
			left: $block.data('rightLeft'),
			width: $block.data('rightWidth')
		},300)
	})
});

/*banner*/
$(function() {
			var bannerSlider = new Slider($('#banner_tabs'), {
				time: 50000,
				delay: 800,
				event: 'hover',
				auto: true,
				mode: 'fade',
				controller: $('#bannerCtrl'),
				activeControllerCls: 'active'
			});
			$('#banner_tabs .flex-prev').click(function() {
				bannerSlider.prev()
			});
			$('#banner_tabs .flex-next').click(function() {
				bannerSlider.next()
			});
		})

// part1滑动层
$(function(){
	$(".boxlist li").hover(
		function(){
			var that=this;
			item2Timer=setTimeout(function(){
				$(that).find('.cover').slideDown(300);
			},100);
			
		},
		function(){
			var that=this;
			clearTimeout(item2Timer);
			$(that).find('.cover').slideUp(300);
		}
	);

});

//part8鼠标hover上移
$(function(){
	$('.p8-list li .round').hover(
		function(){
			var that=this;
			item3Timer=setTimeout(function(){
				$(that).animate({top:'10px'});
			},100);
		},
		function(){
			var that=this;
			clearTimeout(item3Timer);
			$(that).animate({top:'130px'});
		}
	)
})
// 表单验证
$(function(){
	$('.form-btn').click(function(){
		if($('.name').val()===''||$('.name').val()==="输入您的真实姓名"){
			alert("请输入您的姓名");
			return false;
		}else if($('.call').val()===''||$('.call').val()==="输入您的手机号码"){
				alert("请输入您的手机号码");
			return false;

		}else if($('.education').val()===''||$('.education').val()==="您目前的最高学历"){
					alert("请输入您的学历");
			return false;
					
		}
	});
//弹出框
$(function(){
	setTimeout(function(){
		$('.xl-tc').css('display','block');
		$('.close').click(function(){
			$('.xl-tc').css('display','none');
			setTimeout(function(){
				$('.xl-tc').css('display','block');
			},30000)
		});
	},15000);
	
})

	$(function(){
		$('.right-close').click(function(){
			$('.right').animate({marginRight:'-131px'})
			$('.ask').animate({right:'131px'})
		});
		$('.ask').click(function(){
			$('.right').animate({marginRight:'0px'})
			$('.ask').animate({right:'-60px'})
		})
	})

})



  $(function(){
    var obj= {
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
      }
    };
    obj.updateTime()
  })
				   