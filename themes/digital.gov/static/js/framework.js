jQuery(document).ready(function() {
	jQuery('ul#filter a').click(function() {
		jQuery(this).css('outline','none');
		jQuery('ul#filter .current').removeClass('current');
		jQuery(this).parent().addClass('current');
		
		var filterVal = jQuery(this).text();
				
		if(filterVal == 'all') {
			jQuery('ul#portfolio li.hidden').fadeIn(0000).removeClass('hidden');
		} else {
			
			jQuery('ul#portfolio li').each(function() {
				if(!jQuery(this).hasClass(filterVal)) {
					jQuery(this).fadeOut(0000).addClass('hidden');
				} else {
					jQuery(this).fadeIn(0000).removeClass('hidden');
				}
			});
		}
		
		return false;
	});
});