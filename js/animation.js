$(document).ready(function(){
	$('.fa').hide();
	$('.fa-apple').show();
	$('#Projects').hide();
	
	var showProjects = function(){
		$('#Projects').show(2500);
	};



	$('.fa-envelope-o').effect('bounce',{times:2},1500);
	//$('.fa-envelope-o').fadeIn(5000);
	$('.fa-twitter').effect('bounce',{times:2},1500);
	$('.fa-github').effect('bounce',{times:2},1500);
	$('.fa-linkedin').effect('bounce',{times:2, duration:1500,complete: showProjects
});
/*	$('a').css('border','1px solid yellow');
	$('i').css('border','1px solid red');
	$('h4').css('border','1px solid red');*/

	

	var hovered =function(){	
		var width = $(this).width();
		var height = $(this).height();
		$(this).find('.fa').stop(true,true).slideUp(600);
		$(this).height(height);
		$(this).width(width);
	};

	var notHovering = function(){
		$(this).find('.fa').stop(true,true).slideDown(600);
		$(this).height('100%');
		$(this).width('auto');
	};

	
	$('a').hover(hovered,notHovering);
});
