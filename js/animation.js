$(document).ready(function(){
	$('.fa').hide();
	$('#Projects').hide();
	$('.Project').hide();
	$('.fa-apple').show();

	

	var showProjects = function(){
		$('#Projects').show(2500);
		$('.Project').fadeIn(1500);
		$('.Project').click(function(){
			$(this).effect("shake");
		});
	};

	var showTwitter = function(){
		$('.fa-twitter').fadeIn({duration:800, complete: showgithub});
	};

	$('.fa-envelope-o').fadeIn({duration:1000, complete: showTwitter});
	
	
	var showLinkedin = function(){
		$('.fa-linkedin').fadeIn({duration:800, complete: showProjects});
	};

	var showgithub = function(){
		$('.fa-github').fadeIn({duration:800, complete: showLinkedin});
	};
	var hovered =function(){	
		var width = $(this).width();
		var height = $(this).height();
		$(this).find('.fa').stop(true,true).animate({fontSize: "3vw"},500);
	//	$(this).find('.fa').stop(true,true).effect("scale",{percent : "10"});
		$(this).height(height);
		$(this).width(width);
	};

	var notHovering = function(){
		$(this).find('.fa').stop(true,true).animate({fontSize: "5vw"},300);
		$(this).height('100%');
	};

	$('contact').hover(hovered,notHovering);
	
});
