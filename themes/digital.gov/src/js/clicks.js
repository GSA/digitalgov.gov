jQuery(document).ready(function($) {

	// ==============================================================
	// Register clicks on pages that have the short_url
	// ==============================================================

	// The Goal:
	// To be able to display a metric on our Spotlight/News content that indicates a measure of interest from our readers.

	// How are we doing this?
	// We are registering all clicks through the go.usa.gov short_url.

	// We are using the short_url in:
	// - links from our newsletter
	// - links on twitter, facebook, etc...
	// - links in any form of sharing outside of the website

	// What about links that originate on digital.gov (e.g. from the homepage)?
	// - If there the referrer is digital.gov...
	// - A script inserts an iframe into the page that then loads the short_url. This then registers a click with the go.usa.gov short_url.
	// - The iframe does not fully load because we block digital.gov from loading within iframes

	// What about direct links (e.g. liks that I copy and paste to a friend)?
	// - These are a little more tricky. At the moment, we are not capturing these.
	// - The best way to capture these is if we were able to capture the referrer of all the links from go.usa.gov and then be able to conditionaly register a click based on this value.


	// How to test
	// 1. Any link originating from digital.gov should register one click, via the iframe
	// 2. Any link originating from a short_url should register a click via the short_url (the iframe should not load)
	// 3. Any direct link (e.g bookmark of )


	var referer = document.referrer;
	console.log('referer: '+referer);
	var domains = ["localhost","digital.gov","demo.digital.gov"];
	if ( (new RegExp(domains.join("|")).test(referer)) || (referer)) {
		// short_url is defined in the <head>
		// If not, none of this runs...
		if (short_url){

			// Get the ID of the short_url — https://go.usa.gov/123ID
			var short_url_id = short_url.replace("https://go.usa.gov/", "");

			// Now create the name of the cookie we're going to set
			var cookie_id = 'view_' + short_url_id;
			// This name will be specific to the article (or short URL) we are viewing
			// If a reader is clicking around a number of articles, they might one cookie for each article they are viewing.
			// Cookies expire after 1hr.


			// Let's set a cookie!
			// If the cookie_id already exists, we are not going to load the iframe and increment the clicks (views) of the short URL.
	    if (getCookie(cookie_id) == 'true') {
				console.log('cookie is set');
	    } else {
				$('#clicks_iframe').prepend('<iframe src="'+short_url+'" width="1" height="1"></iframe>');
	      setCookie(cookie_id,'true');
	    }

		}
	}

	function setCookie(key, value) {
		var expires = new Date();
		// I think this means that the cookie will expire in 60mins?
		expires.setTime(expires.getTime() + (60 * (60 * 1000)) );
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + "; path=/";
	}

	function getCookie(key) {
		console.log('test1');
		var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
		return keyValue ? keyValue[2] : null;
	}






	// ==============================================================
	// Display clicks on articles
	// ==============================================================

	// We want to display the clicks/views of any item on the page
	// To do so, we need to merely set the data-short_url attribute in the HTML and include the short_url in
	// e.g. <article data-short_url="https://go.usa.gov/123ID">

	// This finds all of the elements on the page that have the short_url defined
	// - It gets the json API from https://go.usa.gov/ for that short url
	// - identifies the current number of clicks
	// - It adds the number of clicks to the HTML with a little number counting animation for fun

	$('*[data-short_url]').each(function(){
		var short_url = $(this).data('short_url');
		var article = $(this);
		var api = 'https://go.usa.gov/api/clicks.json?login=jeremyz&apiKey=d0ac464a2dfad044147e9537fd51503b&shortUrl=' + encodeURI(short_url);
		$.getJSON( api, function( data ) {
			$.each( data.response.data.entry, function( key, value ) {
				var element = $(article).find('.clicks span');
				var stale_clicks = $(element).text();
				var current_clicks = value.user_clicks;

				// Count up from the existing number to the current_num_clicks
				var interval = setInterval(function() {
					if (stale_clicks >= current_clicks) clearInterval(interval);
					stale_clicks++;
					$(element).html(stale_clicks);
				}, 50);

			});
		});
	});



});
