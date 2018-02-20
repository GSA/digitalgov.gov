jQuery(document).ready(function($) {

	$(".btn_events_past").click(function(e) {
		e.preventDefault();
		$("#events-past").toggle();
		if ($(this).hasClass("btn_events_past_close")) {
			$(".btn_events_past_close").text('View past events').removeClass('btn_events_past_close');
		} else {
			$(this).text('Hide past events').addClass('btn_events_past_close');
		}
	});

})();
