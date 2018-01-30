jQuery(document).ready(function($) {



$(".btn_events_past").click(function(e) {
	$(this).hide();
	e.preventDefault();
	$("#events_past").show();
});

// Transforms the Edit link on posts/pages/events to point to the GitHub file
function transform_edit_file_link(){
	// If there is an edit link on the page
	if ( $('.entry .edit_file').length ) {
		var data = $('.edit_file'); // get the edit link data
		var filepath = $(data).attr('data-filepath'); // the filename in GitHub
		var github_file_path = 'https://github.com/GSA/digitalgov.gov/edit/master/content/'+filepath;
		$(data).attr('href', github_file_path);
	}
}
transform_edit_file_link();

var filepath = $('.last_commit').attr('data-filepath');

function get_commit_data(filepath){
	// https://api.github.com/repos/GSA/digitalgov.gov/commits?path=/content/about/about.md
	if (filepath !== undefined) {
		var commit_file_path = 'https://api.github.com/repos/GSA/digitalgov.gov/commits?path=/content/'+filepath;
		$.ajax({
		  url: commit_file_path,
		 	dataType: 'json',
		}).done(function(data) {
			get_last_commit(data)
		});
	}
}
get_commit_data(filepath);

function get_last_commit(data){
	var commit_date = data[0]['commit']['committer']['date'];
	$('.last_commit span').text(getFormattedDate(commit_date));
	$('.last_commit').show();
}

function get_commit_history_url(filepath) {
	if (filepath !== undefined) {
		var commit_history_url = 'https://github.com/GSA/digitalgov.gov/commits/master/content/' + filepath;
		$('.last_commit span').wrap('<a href="'+commit_history_url+'"></a>');
	}
}
get_commit_history_url(filepath);

function getFormattedDate(d) {
	var date = new Date(d);
	date.setUTCHours(date.getUTCHours() - 5);
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var year = date.getUTCFullYear();
  var month = (date.getUTCMonth()).toString();
  month = monthNames[month];
  var day = date.getUTCDate().toString();
  day = day.length > 1 ? day : '0' + day;
	var hours = date.getUTCHours().toString();
	var minutes = date.getUTCMinutes().toString();
	minutes = minutes.length > 1 ? minutes : '0' + minutes;
	var seconds = date.getUTCSeconds().toString();
	var ampm = hours >= 12 ? 'pm' : 'am';
	var date_string = month + ' ' + day + ', ' + year + ' at ' + hours + ':' + minutes + ampm + ' ET';
  return date_string;
}

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




function scrollToAnchor(hash) {
  var target = jQuery(hash),
    headerHeight = jQuery("#fixednav").height() + 5; // Get fixed header height

  target = target.length ? target : jQuery('[name=' + hash.slice(1) +']');

  if (target.length)
  {
    jQuery('html,body').animate({
      scrollTop: target.offset().top - headerHeight
    }, 700);
    return false;
  }
}

if(window.location.hash) {
  scrollToAnchor(window.location.hash);
}


jQuery("a[href*=\\#]:not([href=\\#])").click(function()
{
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    || location.hostname == this.hostname)
  {
    scrollToAnchor(this.hash);
  }
});
