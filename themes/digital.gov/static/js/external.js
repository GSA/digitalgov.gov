jQuery(document).ready(function($) {


// Transforms the Edit link on posts/pages/events to point to the GitHub file
function transform_edit_file_link(){
	// If there is an edit link on the page
	if ( $('.entry .edit_file').length ) {
		var data = $('.edit_file'); // get the edit link data
		var filepath = $(data).attr('data-filepath'); // the filename in GitHub
		var github_file_path = 'https://github.com/GSA/digitalgov.gov/blob/demo/content/'+filepath;
		$(data).attr('href', github_file_path);
	}
}
transform_edit_file_link();
});



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
