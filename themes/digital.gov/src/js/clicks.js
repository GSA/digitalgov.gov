jQuery(document).ready(function($) {



	$(function () {
	  $(document).ready(function() {
			$('*[data-short_url]').each(function(){
				var short_url = $(this).data('short_url');
				console.log(this);
				var article = $(this);
				var api = 'https://go.usa.gov/api/clicks.json?login=jeremyz&apiKey=d0ac464a2dfad044147e9537fd51503b&shortUrl=' + encodeURI(short_url);
				$.getJSON( api, function( data ) {
					$.each( data.response.data.entry, function( key, value ) {
						var clicks_element = $(article).find('.clicks span');
						var clicks = $(clicks_element).text();
						var current_clicks = value.user_clicks;
						var interval = setInterval(function() {
			        if (clicks >= current_clicks) clearInterval(interval);
			        clicks++;
							$(clicks_element).html(clicks);
				    }, 30);

					});
				});
			});
	  });
	});

});
