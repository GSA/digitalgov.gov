function externalLinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		if (anchor.getAttribute("href") &&
			anchor.getAttribute("rel") == "external")
			anchor.target = "_blank";
	}
}

window.onload = externalLinks;

jQuery(window).load(function() {
	jQuery("#topofpage").hide().removeAttr("href");
	if (jQuery(window).scrollTop() != "0")
		jQuery("#backtotop").fadeIn("fast")
	var scrollDiv = jQuery("#backtotop");
	jQuery(window).scroll(function(){
		if (jQuery(window).scrollTop() == "0")
			jQuery(scrollDiv).fadeOut("fast")
		else
			jQuery(scrollDiv).fadeIn("fast")
	});
	jQuery("#backtotop").click(function() {
		jQuery("html, body").animate({
			scrollTop: 0
		}, "fast")
	})
});

jQuery(function( $ ){
	jQuery(window).scroll(function() {
		var yPos = ( jQuery(window).scrollTop() );
		if(yPos > 200) { // show fixed nav bar after screen has scrolled down 200px from the top
			jQuery("#fixednav").fadeIn('fast');
		} else {
			jQuery("#fixednav").fadeOut('fast');
		}
	});
});