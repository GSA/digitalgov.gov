jQuery(document).ready(function($) {

	// Temporary
	// Press the 1 key to toggleClass on .paper
	$(document).bind('keyup', function (evt) {
		if (evt.keyCode == 49){
			$('.paper').toggleClass('testing');
		}
	});


});
