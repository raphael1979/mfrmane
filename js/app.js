$(document).ready(function(){
	console.log('coucou');

	$(function(){
		$('#btn_up').click(function() {
			$('html,body').animate({scrollTop: 0}, 'slow');
		});
		//Lesly
		$ ('#carousel').carousel({interval : 2000}) ;

		$(window).scroll(function(){
		   	//console.log($(window).height(), $(window).scrollTop());
		   	if($(window).scrollTop() < 100){
		     	//console.log('<' + $(window).height());
		     	$('#btn_up').fadeOut();
		     }else{
		     	$('#btn_up').fadeIn();
		     	console.log('keep down...')
		     }
		 });
	});
});