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
});
