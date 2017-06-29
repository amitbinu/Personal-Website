$(document).ready(function(){

	$('#Projects').hide();
	$('#Projects').show(2000);

	$('a').mouseenter(function(){
		$(this).find('.fa').stop(true,true).slideUp(1000);
	});
	$('a').mouseleave(function(){
		$(this).find('.fa').stop(true,true).slideDown(600);
	});
});