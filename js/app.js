$(document).ready(function(){
	console.log('coucou');

	$(function(){
		$('#btn_up').click(function() {
			$('html,body').animate({scrollTop: 0}, 'slow');
		});
		

		$(window).scroll(function(){
		   	//console.log($(window).height(), $(window).scrollTop());
		   	if($(window).scrollTop() < 100){
		     	//console.log('<' + $(window).height());
		     	$('#btn_up').fadeOut();
		     }else{
		     	$('#btn_up').fadeIn();
		     	//console.log('keep down...')
		     }
		 });
	});

});

$('#myModal').modal('show');

//Lesly
$ ('#carousel').carousel({interval : 2000}) ;

var timerIn = 200;
var timerOut = 200;
$('ul.nav li.dropdown').hover(function() {
	$(this).find('> .dropdown-menu').stop(true, true).fadeIn(timerIn);
	$(this).addClass('open');
}, function() {
	$(this).find('> .dropdown-menu').stop(true, true).fadeOut(timerOut);
	$(this).removeClass('open');

// //Facebook feed
// //<div id="fb-root"></div>
// (function(d, s, id) {
// 	var js, fjs = d.getElementsByTagName(s)[0];
// 	if (d.getElementById(id)) return;
// 	js = d.createElement(s); js.id = id;
// 	js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8";
// 	fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
	//Fin Facebook Feed
});