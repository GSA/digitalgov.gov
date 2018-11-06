jQuery(document).ready(function($) {

function openNav() {
	$('#mobile-nav').addClass('open');
	$('.paper').addClass('open');
}
function closeNav() {
	$('#mobile-nav').removeClass('open');
	$('.paper').removeClass('open');
}

$("#explore").click(function() {
	openNav();
});

$(".closebtn").click(function() {
	closeNav();
});

// $(document).bind('keyup', function (evt) {
//   if (evt.keyCode == 27){
// 		openNav();
// 	}
// });

});
