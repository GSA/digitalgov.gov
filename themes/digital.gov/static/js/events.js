jQuery(document).ready(function($) {

	var d1 = $(".events-single .event .stage").attr('data-eventdate');

	//Check to see if the DateTime is in the future
	//param: dateTime must be a JS Date Object
	//return True if DateTime is after Now
	//return False if DateTIme is before Now
	function futureDateTime( dateTime ) {
		var now = new Date();
		var future = false;
		if( Date.parse(now.toISOString()) < Date.parse(dateTime) ) {
			future = true;
		}
		return future;
	}

	if (d1 !== undefined) {
		var future = futureDateTime(d1);
		if (future == true) {
			$(".events-single .event .stage").hide();
		}
	}



	$(".btn_events_past").click(function(e) {
		e.preventDefault();
		$("#events-past").toggle();
		if ($(this).hasClass("btn_events_past_close")) {
			$(".btn_events_past_close").text('View past events').removeClass('btn_events_past_close');
		} else {
			$(this).text('Hide past events').addClass('btn_events_past_close');
		}
	});

});
