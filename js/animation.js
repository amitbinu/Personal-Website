$(document).ready(function(){
	$('.fa').hide();
	$('#Projects').hide();
	$('.Project').hide();
	$('.fa-apple').show();
	$("#buttons").hide();
	var current = 0;
	$('#down').click(function(){
		console.log(current);
		switch(current){
			case 0:
				$('html, body').stop().animate({scrollTop: $('#Projects').offset().top},1000);
				current++;
				break;
			case 1:
				$('html, body').stop().animate({scrollTop: $('#Yummy').offset().top},1000);
				current++;
				break;
			case 2:
				$('html, body').stop().animate({scrollTop: $('#PokeIt').offset().top},1000);
				current++;
				break;

			case 3:
				$('html, body').stop().animate({scrollTop: $('#RemindVoice').offset().top},1000);
				current++;
				break;

			case 4:
				$('html, body').stop().animate({scrollTop: $('#PatientsPal').offset().top},1000);
				current++;
				break;
				}
		
	});

	$('#up').click(function(){
		switch(current){
			case 1:
				$('html, body').stop().animate({scrollTop: $('html, body').offset().top},1000);
				current = 0;
				break;
			case 2:
				$('html, body').stop().animate({scrollTop: $('#Projects').offset().top},1000);
				current--;
				break;
			case 3:
				$('html, body').stop().animate({scrollTop: $('#Yummy').offset().top},1000);
				current--;
				break;

			case 4:
				$('html, body').stop().animate({scrollTop: $('#PokeIt').offset().top},1000);
				current--;
				break;

			case 5:
				$('html, body').stop().animate({scrollTop: $('#RemindVoice').offset().top},1000);
				current--;
				break;
				}
		
	});
	

	var showProjects = function(){
		$('#Projects').show(2000);
		$('.Project').fadeIn(1500);
		if($('body').innerWidth() > 380){
			$("#buttons").fadeIn(1000);
		}
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

	$('.contactInfo').hover(hovered,notHovering);
	
});
