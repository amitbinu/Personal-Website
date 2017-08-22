$(document).ready(function(){
	$('.fa').hide();
	$('#Projects').hide();
	$('.Project').hide();
	$('.fa-apple').show();
	//$("#buttons").hide();
	$("#up").hide();
	$("#down").hide();
	var current = 0;
	var onlyOnce = true;
	var noAnimation;
	if ( $( window ).width() > 880) {
		noAnimation = false;
	}
	else{
		noAnimation = true;
	}

	var height = $('.Heading').offset().top -   $("#OneLine").offset().top - $("#OneLine").height();
	var oldValues = {
		height1 : height,
		MailWidth : $('.Mail').offset().left-20,
		GithubWidth:$(document).width() - $('.Github').offset().left - $('.Github').width()- 20,
		height2: height + $('.Heading').height()+250,
		TwitterWidth:$('.Twitter').offset().left-20,
		LinkedinWidth:$(document).width() - $('.Linkedin').offset().left - $('.Linkedin').width()- 20
	};

	var positionFixed = false;
	$( window ).resize(function() {
		$('.contactInfo').css({position:"static"});
  		height = $('.Heading').offset().top -   $("#OneLine").offset().top - $("#OneLine").height();
		if(onlyOnce === true){
			oldValues = {
			height1 : height,
			MailWidth : $('.Mail').offset().left-20,
			GithubWidth:$(document).width() - $('.Github').offset().left - $('.Github').width()- 20,
			height2: height + $('.Heading').height()+250,
			TwitterWidth:$('.Twitter').offset().left-20,
			LinkedinWidth:$(document).width() - $('.Linkedin').offset().left - $('.Linkedin').width()- 20

			};
		}
		if( $( window ).width() > 880){
			noAnimation = false;
		}
		else{
			noAnimation = true;
		}
	});

	var tempstuff = $('.Mail').offset().top;
	$(window).scroll(function(){
		var num = $(this).scrollTop();

		if(positionFixed === true){
			$('.Mail').css('top', num - 200 + 'px');
			$('.Github').css('top',num - 200+ 'px');

			$('.Twitter').css('top', num - 50 + 'px');
			$('.Linkedin').css('top',num - 50 + 'px');
		}

		if(num > $("#OneLine").offset().top+$("#OneLine").height() && onlyOnce===true && !(noAnimation) === true){
			$('.contactInfo').css({position:"relative"});
			onlyOnce = false;
			width = $('.Mail').offset().left - 20;
			height =  num - 200;
			oldValues.height1 = height;

			$(".Mail").animate({top:"+="+height+'px',right:"+="+width+'px'},1000,function(){
					tempstuff = $('.Mail').position().top;
			});

			width =$(document).width() - $('.Github').offset().left - $('.Github').width() - 20;
			$(".Github").animate({top:"+="+height+'px',left:"+="+width+'px'},1000,function(){});

			width = $('.Twitter').offset().left - 20;
			height += 150;
			$(".Twitter").animate({top:"+="+height+'px',right:"+="+width+'px'},1000,function(){});

			width = $(document).width() - $('.Linkedin').offset().left - $('.Linkedin').width()- 20;	
			$(".Linkedin").animate({top:"+="+height+'px',left:"+="+width+'px'},1000,function(){
				positionFixed = true;
			});

		}
		if (num < $("#OneLine").offset().top+$("#OneLine").height() && onlyOnce===false && !(noAnimation) === true) {


			positionFixed = false;
			onlyOnce = true;
			width = oldValues.MailWidth;
			height =oldValues.height1;
			$(".Mail").css({top:"-="+height+'px',right:"-="+width+'px'});
			width = oldValues.GithubWidth;
			$(".Github").css({top:"-="+height+'px',left:"-="+width+'px'});
			width = oldValues.TwitterWidth;
			height += 150;
			$(".Twitter").css({top:"-="+height+'px',right:"-="+width+'px'});
			width = oldValues.LinkedinWidth;
			$(".Linkedin").css({top:"-="+height+'px',left:"-="+width+'px'});
			$('.contactInfo').css({position:"static"});
		}

	
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
		$('html, body').stop().animate({scrollTop: $('#Projects').offset().top+5},1000);
		
	});

	$('#up').click(function(){
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
		$(this).height(height);
		$(this).width(width);
	};

	var notHovering = function(){
		$(this).find('.fa').stop(true,true).animate({fontSize: "5vw"},300);
		$(this).height('100%');
	};

	$('.contactInfo').hover(hovered,notHovering);
	
});
