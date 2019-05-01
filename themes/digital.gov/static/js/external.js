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

function get_commit_data(){
	if (branch == "master") {
		branchpath = "";
	} else {
		branchpath = "/" + branch;
	}
	var commit_api_path  = "https://api.github.com/repos/" + git_org + "/" + git_repo + "/commits" + branchpath + "?path=/content/" + filepath;
	console.log(commit_api_path);
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
	console.log(data);
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



// Cleans up the #TableOfContents from HUGO
$('#TableOfContents > ul:first').contents().unwrap();
$('#TableOfContents > li:first').contents().unwrap();

function mobile_check(){
	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
			isMobile = true;
	}
	return isMobile;
}

function format_toc(hash){
	$('.guide-nav #TableOfContents ul').each(function(i, items_list) {
		$(items_list).find('li:first-child > a').each(function(j, li){
			$(li).removeClass('active');
			var t = $(li).html();
			var a = $(li).attr('href').substring(1);
			if (a == hash) {
				var c = 'active';
			} else {
				var c = '';
			}
			$(li).attr('title', t).attr('name', a).attr('class', c);
    });
	});

	// checks if it is a mobile browser
	if (mobile_check() == true) {
		console.log('mobile device');
		var num = $('nav#TableOfContents ul:first-child > li').size();

		// if the number of H2 items in the in-page nav is greater than 6
		// then truncate the list after 4 items, by adding the .ex class to the additional <li> tags in the nav
		if (num > 6) {
			var rem = num - 4;
			$('nav#TableOfContents ul:first-child > li').slice(-rem).addClass("ex");
			// If greater than 6, the show / hide button appears as the last item in the list
			$('<li class="more"><a href="#" title="">+ '+rem+' more »</a></li>').appendTo($('#TableOfContents ul:first-child'));
		}

	} else {
		console.log('not a mobile device');
	}
}

// Looks out for a click on the in-page nav
$("#TableOfContents li a").click(function() {
	var hash = $(this).attr('id');
	format_toc(hash);
});

if ($(".toc #TableOfContents").length > 0) {
	$(".toc").show();
} else{
	$(".toc").hide();
}

// checks if there is a #hash in the URL on load. If so, it passes that along.
if(window.location.hash) {
	var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
} else {
	var hash = '';
}
format_toc(hash);
var txt = $("#TableOfContents .more a").text();
$("#TableOfContents .more a").toggle(function() {
    $(this).text("close");
		$("nav#TableOfContents ul:first-child > li.ex").addClass('show');
}, function() {
    $(this).text(txt);
		$("nav#TableOfContents ul:first-child > li.ex").removeClass('show');
});

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
