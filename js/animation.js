$(document).ready(function(){
	$('.fa').hide();
	$('#Projects').hide();
	$('#Projects').show(2000);

	$('.fa-envelope-o').fadeIn(4500);
	$('.fa-twitter').fadeIn(4500);
	$('.fa-github').fadeIn(4500);
	$('.fa-linkedin').fadeIn(4500);
/*	$('a').css('border','1px solid yellow');
	$('i').css('border','1px solid red');
	$('h4').css('border','1px solid red');*/

	var hovered =function(){	
		var width = $(this).width();
		var height = $(this).height();
		$(this).find('.fa').stop(true,true).slideUp(600);
		$(this).height(height);
		$(this).width(width);
	}

	var notHovering = function(){
		$(this).find('.fa').stop(true,true).slideDown(600);
	}
	
	$('a').hover(hovered,notHovering);
});
