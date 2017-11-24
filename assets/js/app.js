$(function() {

$('#animate').click(function() {
 var boolean =$('html').hasClass( "pulsate-bg" );
 if(!boolean){
 	$('html').addClass("pulsate-bg");
 	$('#animate').find('i').removeClass('fa fa-play-circle fa-2x');
 	$('#animate').find('i').addClass('fa fa-pause fa-2x');
 	document.getElementById('player_audio').play();
 }else{
 	$('html').removeClass("pulsate-bg");
 	$('#animate').find('i').removeClass('fa fa-pause fa-2x');
 	$('#animate').find('i').addClass('fa fa-play-circle fa-2x');
 	//$('#player_audio').pause();
 	document.getElementById('player_audio').pause();
 }
});
});