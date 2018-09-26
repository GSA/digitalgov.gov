jQuery(document).ready(function($) {

	$("#explore .close").click(function() {
		$("#mobile-nav").toggle();
	});

	$("#explore").click(function() {
		$("#mobile-nav").toggle();
		console.log('nav is clicked');
	});

	$(document).bind('keyup', function (evt) {
	  if (evt.keyCode == 27){

			console.log('esc to site');
			$("#mobile-nav").addClass('hide');
		}
	});

});
