jQuery(document).ready(function($) {

	// Temporary
	// Press the escape key to open nav
	$(document).bind('keyup', function (evt) {
		if (evt.keyCode == 27){
			return (this.tog = !this.tog) ? openNav() : closeNav();
		}
	});

	// Temporary
	// Press the 1 key to toggleClass on .paper
	$(document).bind('keyup', function (evt) {
		if (evt.keyCode == 49){
			$('.paper').toggleClass('testing');
		}
	});

	// Temporary
	// Press the 1 key to toggleClass on .paper
	$(document).bind('keyup', function (evt) {
		if (evt.keyCode == 16){
			var logo = $('.usa-logo img.old_logo').toggle();
			var logo = $('.usa-logo img.new_logo').toggle();
		}
	});

});
