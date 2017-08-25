jQuery(document).ready(function($) {


  // Gets all the image sizes as paths
  function get_all_image_sizes(uid, format, width, height){
    var sizes = ['200', '400', '600', '800', '1200', '2400']; // all image sizes
    var imgs = [];
    $.each( sizes, function( key, size ) {
      if (width > size) {
        var img = 'https://s3.amazonaws.com/digitalgov/'+uid +'_w'+ size +'.'+ format; // big-bend_w200.jpg
        var bw_img = 'https://s3.amazonaws.com/digitalgov/'+uid +'_w'+ size +'bw.'+ format; // big-bend_w200bw.jpg
        imgs.push(img, bw_img);
      }
    });
    return imgs;
  }


  // The all-images JSON file
  // var all_images = '/images/index.json';


  // Gets all the image from the JSON file and appends them to #all-images div
  $.getJSON( all_images, function( data ) {
    $.each( data, function( key, img ) {

      var all_sizes = get_all_image_sizes(img['uid'], img['format'], img['width'], img['height']);

      var filename = img['uid']+"."+img['format'];                                                    // big-bend.jpg
      var proxy_img = root + '/img/proxy/'+img['uid']+"_"+img['format']+"."+img['format'];             // big-bend_jpg.jpg
      var w400 = 'https://s3.amazonaws.com/digitalgov/'+img['uid']+"_w400."+img['format'];            // big-bend_w400.jpg

      var img_asset = [
        "<div class='img-card'>",
          "<div class='img-file'>",
            "<img src='"+proxy_img+"'>",
          "</div>",
          "<div class='img-data'>",
            "<p>"+filename+"</p>",
            "<p>"+img['date']+"</p>",
            "<pre>{{% img \""+img['uid']+"\" %}}</pre>",
            "<p><a href='https://github.com/GSA/digitalgov.gov/tree/demo/data/images/"+img['uid']+".yml' title='view on GitHub'>View on GitHub »</a></p>",
          "</div>",
        "</div>"
      ].join("\n");

      // Appends img_asset to DIV
      $( "#all-images" ).append( img_asset);

    });
  });
});
