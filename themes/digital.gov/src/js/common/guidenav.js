jQuery(document).ready(function($) {

	var topListItem = $(".usa-current").parents("li").last();
	$( topListItem).addClass('current');

	// Cleans up the #TableOfContents from HUGO
	// $('#TableOfContents ul').addClass('add-list-reset');
	$('#TableOfContents > ul:first').contents().unwrap();
	$('#TableOfContents > li:first').contents().unwrap();
	$('#TableOfContents > ul > ul').remove();

	function mobile_check(){
		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
				isMobile = true;
		}
		return isMobile;
	}

	function format_toc(hash){
		// for each of the items in #TableOfContents
		$('#TableOfContents > ul').each(function(i, items_list) {
			$(items_list).find('li a').each(function(i, li){
				// console.log(li);
				// remove any 'active' classes
				$(li).removeClass('active');

				// Get the title for the Title attribute
				var title = $(li).html();

				// get the anchor link of the li
				var anchor = $(li).attr('href').substring(1);

				// If the anchor == hash, then set that <li> to 'active'
				var state;
				if (anchor == hash) {
					state = 'active';
				} else {
					state = '';
				}
				$(li).attr('title', title).attr('name', anchor).attr('class', state);

	    });
		});
	}

	function truncate_nav(){
		// checks if it is a mobile browser
		if (mobile_check() == true) {
			console.log('mobile device!');
			var num = $('nav#TableOfContents ul:first-child > li').size();
			console.log(num);
			// if the number of H2 items in the in-page nav is greater than 6
			// then truncate the list after 4 items, by adding the .ex and .display-none classes to the additional <li> tags in the nav
			if (num > 6) {
				var rem = num - 4;
				$('nav#TableOfContents ul:first-child > li').slice(-rem).addClass("ex display-none");
				// If greater than 6, the show / hide button appears as the last item in the list
				$('<li class="more"><a href="#" title="view the '+rem+' more items in this page">+ '+rem+' more »</a></li>').appendTo($('#TableOfContents ul:first-child'));
				$('<li class="close display-none"><a href="#" title="close the navigation">close</a></li>').appendTo($('#TableOfContents ul:first-child'));
			}

		} else {
			console.log('not a mobile device');
		}
	}
	truncate_nav();


	// Looks out for a click on the in-page nav
	// passes the hash onto format_toc()
	$("#TableOfContents a").click(function() {
		var hash = $(this).attr('name');
		console.log(hash);
		format_toc(hash);
	});

	// If the page loads, and there is a hash in the URL,
	// pass that along to format_toc()
	if(window.location.hash) {
		var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
		format_toc(hash);
	}

	if ($("#TableOfContents").length > 0) {
		$(this).show();
	} else{
		$(this).hide();
	}


	$("#TableOfContents .more").click(function(e) {
		e.preventDefault();
		$(this).addClass('display-none');
		$("nav#TableOfContents ul:first-child > li.ex").removeClass('display-none');
		$("#TableOfContents .close").removeClass('display-none');
	});

	$("#TableOfContents .close").click(function(e) {
		e.preventDefault();
		$("#TableOfContents .more").removeClass('display-none');
		$("nav#TableOfContents ul:first-child > li.ex").addClass('display-none');
		$("#TableOfContents .close").addClass('display-none');
	});

});
