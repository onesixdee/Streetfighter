$(document).ready(function() {

$('.ryu-action').hide();
$('.ryu-still').show();

	$('.ryu').mouseenter(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	 })
	 $('.ryu').mouseleave(function() { 
		$('.ryu-action').hide();
 		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,  //milliseconds
			function() {
				$(this).hide();
				$(this).css('left', '600px');
			});
	})
	.mouseup(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	});
});

$(document).keydown(function(e) {
    if(e.keyCode==88){
     	$('.ryu-action').hide();
		$('.ryu-cool').show();
	}
})
$(document).keyup(function(e) {
    if(e.keyCode==88){
		$('.ryu-action').hide();
		$('.ryu-still').show();
	}
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}



















// $(document).ready(function(){   

	// event handler that listens for the page to be ready, then handles it by calling the function you passed in.

 // $('.ryu').mouseenter(function(){

 	//inside the function, you select the DOM element with the class .ryu and attach a new event handler

 	// this event handler is attached to every element with the ryu class
 	// and the function you passed in, called the "callback function" is stored in the browser memory
 	// every time the mouseenter event happens, the browser invokes that callback function from it's memory in reponse to the event
