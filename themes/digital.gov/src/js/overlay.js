jQuery(document).ready(function($) {

	$("#overlay .close").click(function() {
		$("#overlay").toggle();
	});

	$(document).bind('keyup', function (evt) {
	  if (evt.keyCode == 191){
			$("#overlay").toggle();
		}
	});

	$(document).bind('keyup', function (evt) {
	  if (evt.keyCode == 27){
			$("#mobile-nav").toggle();
		}
	});

});
