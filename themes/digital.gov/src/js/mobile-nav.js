jQuery(document).ready(function($) {

	function openNav() {
		$('#mobile-nav').addClass('open');
		$('.paper').addClass('open');
	}
	function closeNav() {
		$('#mobile-nav').removeClass('open');
		$('.paper').removeClass('open');
	}

	$("#explore").click(function() {
	  openNav();
	});

	$(".close").click(function() {
		closeNav();
	});

	$(".paper .screen").click(function() {
		closeNav();
	});

	// Temporary
	// Press the escape key to open nav
	$(document).bind('keyup', function (evt) {
		if (evt.keyCode == 27){
			return (this.tog = !this.tog) ? openNav() : closeNav();
		}
	});

});
