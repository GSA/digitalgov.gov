jQuery(document).ready(function($) {

	var d1 = $(".events-single .event .stage").attr('data-eventdate');

	//Check to see if the DateTime is in the future
	//param: dateTime must be a JS Date Object
	//return True if DateTime is after Now
	//return False if DateTIme is before Now
	function futureDateTime( eventdate ) {
		console.log(eventdate);
		var now = new Date();
		var years = now.getFullYear();
		var month = now.getMonth();
		var days = now.getDate();
		var date_string = years + '-' + month + '-' + days;
		// console.log(now);
		console.log(date_string);
		var is_future = false;
		if( Date.parse(now.toISOString()) < Date.parse(eventdate) ) {
			is_future = true;
		}
		return is_future;
	}


});
