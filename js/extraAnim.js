$(document).ready(function(){
	new WOW().init();
	$('.contact').hide();
	$('.contact').fadeIn(600);
	
	var hovered =function(){	
		var width = $(this).width();
		var height = $(this).height();
		$(this).find('.fa').stop(true,true).animate({fontSize: "3vw"},500);
		$(this).height(height);
		$(this).width(width);
	};

	var notHovering = function(){
		$(this).find('.fa').stop(true,true).animate({fontSize: "5vw"},300);
		$(this).height('auto');
	};

	$('.contactInfo').hover(hovered,notHovering);

	$("#goDown").click(function(){
		$('html, body').stop().animate({scrollTop: $('#Projects').offset().top+5},1000);
	});
	
	$("#goUp").click(function(){
		$('html, body').stop().animate({scrollTop: $('#Header').offset().top+5},1000);
	});
});

