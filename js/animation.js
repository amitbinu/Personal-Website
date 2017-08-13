$(document).ready(function(){
	$('.fa').hide();
	$('#Projects').hide();
	$('.Project').hide();
	$('.fa-apple').show();
	//$("#buttons").hide();
	$("#up").hide();
	$("#down").hide();
	var current = 0;
	$(window).scroll(function(){
		var num = $(this).scrollTop();
		if(num > $("#RemindVoice").offset().top){
			$("#up").fadeIn(1000);
		}
		else{
			$("#up").fadeOut(1000);
		}
		if (num < ($("#Projects").offset().top)) {
			$("#down").fadeIn(1000);
			
		}
		if (num >= $("#Projects").offset().top) {$("#down").fadeOut(1000);};
		
	});
	$('#down').click(function(){
		console.log(current);
		$('html, body').stop().animate({scrollTop: $('#Projects').offset().top+5},1000);
	/*	switch(current){
			case 0:
				$('html, body').stop().animate({scrollTop: $('#Projects').offset().top},1000);
				current++;
				break;
			case 1:
				$('html, body').stop().animate({scrollTop: $('#PokeIt').offset().top-10},1000);
				current++;
				break;

			case 2:
				$('html, body').stop().animate({scrollTop: $('#RemindVoice').offset().top-10},1000);
				current++;
				break;

			case 3:
				$('html, body').stop().animate({scrollTop: $('#PatientsPal').offset().top-10},1000);
				current++;
				break;
				}*/
		
	});

	$('#up').click(function(){
		console.log(current);
		$('html, body').stop().animate({scrollTop: $('html, body').offset().top},1000);
		/*switch(current){
			case 0:
				$('html, body').stop().animate({scrollTop: $('html, body').offset().top},1000);
				current = 0;
				break;
			case 1:
				$('html, body').stop().animate({scrollTop: $('#Projects').offset().top},1000);
				current--;
				break;
			case 2:
				$('html, body').stop().animate({scrollTop: $('#PokeIt').offset().top-10},1000);
				current--;
				break;

			case 3:
				

			case 4:
				$('html, body').stop().animate({scrollTop: $('#RemindVoice').offset().top-10},1000);
				current--;
				break;
				}*/
		
	});
	

	var showProjects = function(){
		$("#aboutMe").text("About Me");
		$('#aboutMe').show(4000);
		$('#Projects').show(2000);
		$('.Project').fadeIn(1500);
		if($('body').innerWidth() > 680){
			$("#down").fadeIn(1000);
		}

	console.log($("#Projects").offset().top);
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
