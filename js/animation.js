$(document).ready(function(){
	$('.fa').hide(1);
	$('#Projects').hide(1);
	$('.Project').fadeOut(1);
	$('.fa-apple').show();

	var showProjects = function(){
		$('#Projects').show(2500);
		$('.Project').fadeIn(1500);
	};

	$('.fa-envelope-o').effect('bounce',{times:4},1800);
	//$('.fa-envelope-o').fadeIn(5000);
	$('.fa-twitter').effect('bounce',{times:4},1800);
	$('.fa-github').effect('bounce',{times:4},1800);
	$('.fa-linkedin').effect('bounce',{times:4, duration:1800,complete: showProjects
});

	var hovered =function(){	
		var width = $(this).width();
		var height = $(this).height();
		//$(this).find('.fa').stop(true,true).slideUp(600);
		$(this).height(height);
		$(this).width(width);
	};

	var notHovering = function(){
		//$(this).find('.fa').stop(true,true).slideDown(600);
		$(this).height('100%');
		$(this).width('auto');
	};
	
	$('a').hover(hovered,notHovering);
	//$('.Project').hide();
	
});
