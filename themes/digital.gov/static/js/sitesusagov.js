jQuery(document).keyup(function(e) {
  if (e.keyCode == 27) {
  	jQuery( ":focus" ).blur();
   }
});
