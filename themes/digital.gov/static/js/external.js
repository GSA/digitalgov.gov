jQuery(document).ready(function($) {

$(".page-details .close").click(function() {
	$(".page-details").toggle();
});
$(document).bind('keyup', function (evt) {
  if (evt.keyCode == 191){
		$(".page-details").toggle();
	}
});
var featured_height = $('.featured-video').height();
var featured_hed = $('.featured-news .hed').height();
var featured_foot = $('.featured-news .foot').height();
$('.featured-news .wrap').height(featured_height - featured_hed - featured_foot);

$( window ).resize(function() {
	var is_mobile = false;
	if( $('.featured-news .wrap').css('overflow')=='auto') {
	  is_mobile = true;
	}
	if (is_mobile == true) {
		$('.featured-news .wrap').css('height', 'auto');
	}
});


// Builds the Edit link on posts/pages/events to point to the GitHub file
function build_edit_file_link(){
	// editpathURL is set the <head>
	if (editpathURL !== undefined) {

		// Build the edit link
		var edit = [
			"<a target='_blank' class='edit_file_link' href='"+editpathURL+"' title='Edit in GitHub'>",
				"Edit",
			"</a>"
		].join("\n");

		// Insert the .edit_file_link html into the .edit_file div and remove the .hidden class
		$('.entry-meta .edit_file').html(edit).removeClass('hidden');
	}
}
build_edit_file_link();



function get_issue_comments(){
	var issue_id = '1517';
	var issue_comments_api = "https://api.github.com/repos/GSA/digitalgov.gov/issues/" + issue_id + "/comments";
	if (issue_comments_api !== undefined) {
		$.ajax({
		  url: issue_comments_api,
		 	dataType: 'json',
		}).done(function(data) {
			if (typeof data !== 'undefined') {
				var count = $(data).length;
				if (count > 1) {
					$('.card-prompt .submit span').html('<strong>'+count+'</strong> submissions');
				}
			}
		});
	}
}
get_issue_comments();



function get_commit_data(){
	if (branch == "master") {
		branchpath = "";
	} else {
		branchpath = "/" + branch;
	}
	var commit_api_path  = "https://api.github.com/repos/" + git_org + "/" + git_repo + "/commits" + branchpath + "?path=/content/" + filepath;
	if (commit_api_path !== undefined) {
		$.ajax({
		  url: commit_api_path,
		 	dataType: 'json',
		}).done(function(data) {
			if (typeof data !== 'undefined') {
				if (branch == "master") {
					show_last_commit(data, branch);
				} else {
					// show_branch_last_commit(data, branch);
					show_last_commit(data, branch);
				}
			}
		});
	}
}
get_commit_data(filepath);

function get_branch_link(branch){
	var path = 'https://github.com/GSA/digitalgov.gov/tree/' + branch;
	var branch_link = [
		"<a class='branch' href="+path+" title="+branch+">"+branch+"</a> "
	].join("\n");
	return branch_link;
}

function show_last_commit(data, branch){
	var branch_link = get_branch_link(branch);
	if (data[0] == null) {
		var commit_date = data['commit']['committer']['date'];
		var commit_author = data['author']['login'];
	} else {
		var commit_date = data[0]['commit']['committer']['date'];
		var commit_author = data[0]['author']['login'];
	}
	var commit_author_url = 'https://github.com/' + commit_author;
	var commit_history_url = 'https://github.com/GSA/digitalgov.gov/commits/'+branch+'/content/' + filepath;
	var last_commit = [
		branch_link,
		"Last updated by",
		"<a href="+commit_author_url+" title="+commit_author+">",
			"<span class='commit-author'>"+commit_author+"</span>",
		"</a> on ",
		"<a href="+commit_history_url+">",
			"<span class='commit-date'>"+getFormattedDate(commit_date)+"</span>",
		"</a>",
		""
	].join("\n");
	$('.last_commit').each(function(i, items_list) {
		$(this).append(last_commit).removeClass('hidden');
	});
}

function show_branch_last_commit(data, branch){
	var branch_link = get_branch_link(branch);
	var last_commit = [
		branch_link
	].join("\n");
	$('.last_commit').each(function(i, items_list) {
		$(this).append(last_commit).removeClass('hidden');
	});
}


function getFormattedDate(d) {

	var date = new Date(d);
	date.setUTCHours(date.getUTCHours() - 5);
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var year = date.getUTCFullYear();
  var month = (date.getUTCMonth()).toString();
  month = monthNames[month];
  var day = date.getUTCDate().toString();
  day = day.length > 1 ? day : '0' + day;
	var globalhours = date.getUTCHours().toString();
	if (globalhours > 12 ) {
		var hours = globalhours - 12;
	} else {
		var hours = globalhours;
	}
	var minutes = date.getUTCMinutes().toString();
	minutes = minutes.length > 1 ? minutes : '0' + minutes;
	var seconds = date.getUTCSeconds().toString();
	if (globalhours > 12 ) {
		var ampm = 'pm';
	} else {
		var ampm = 'am';
	}
	var date_string = month + ' ' + day + ', ' + year + ' at ' + hours + ':' + minutes + ' ' + ampm + ' ET';
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
