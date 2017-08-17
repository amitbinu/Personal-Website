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
			$("down").hide();
			$("#up").fadeIn(500);
		}
		else{
			$("#up").fadeOut(500);
		}
		if (num < ($("#Projects").offset().top)) {
			$("#up").hide();
			$("#down").fadeIn(500);
			
		}
		if (num >= $("#Projects").offset().top) {$("#down").fadeOut(500);};
		
	});
	$('#down').click(function(){
		console.log(current);
		$('html, body').stop().animate({scrollTop: $('#Projects').offset().top+5},1000);
		
	});

	$('#up').click(function(){
		console.log(current);
		$('html, body').stop().animate({scrollTop: $('html, body').offset().top},1000);
	});
	

	var showProjects = function(){
		$("#aboutMe").text("About Me");
		$('#aboutMe').show(4000);
		$('#Projects').show(2000);
		$('.Project').fadeIn(1500);
		if($('body').innerWidth() > 680){
			$("#down").fadeIn(1000);
		}

		$("#y2").show("slide", {direction: "left"},1000);
	};

	var showTwitter = function(){
		$('.fa-twitter').fadeIn({duration:1000, complete: showgithub});
	};

	$('.fa-envelope-o').fadeIn({duration:1000, complete: showTwitter});
	
	
	var showLinkedin = function(){
		$('.fa-linkedin').fadeIn({duration:1000, complete: showProjects});
	};

	var showgithub = function(){
		$('.fa-github').fadeIn({duration:1000, complete: showLinkedin});
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
