jQuery(document).ready(function($) {

  var all_images = 'http://localhost:1313/images/index.json';

  $.getJSON( all_images, function( data ) {
    console.log(data);
    var items = [];
    $.each( data, function( key, img ) {
      var filename = img['uid']+"."+img['format'];
      var proxy_img = img['uid']+"_"+img['format']+"."+img['format'];
      var img_asset = [
        "<div class='img-card'>",
          "<div class='img-file'>",
            "<img src='http://localhost:1313/img/proxy/"+proxy_img+"'>",
          "</div>",
          "<div class='img-data'>",
            "<p>"+filename+"</p>",
            "<p>"+img['date']+"</p>",
            "<pre>{{% img src="+filename+" %}}</pre>",
            "<p><a href='https://github.com/GSA/digitalgov.gov/tree/demo/data/images/"+img['uid']+".yml' title='view on GitHub'>View on GitHub »</a></p>",
          "</div>",
        "</div>"
      ].join("\n");
      $( "#all-images" ).append( img_asset);
    });
  });




});
