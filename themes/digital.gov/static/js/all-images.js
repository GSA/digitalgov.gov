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
  // var all_images_json = '/images/index.json';


  // Gets all the image from the JSON file and appends them to #all-images div
  $.getJSON( all_images_json, function( data ) {
    $.each( data, function( key, img ) {
      var width = img['width'];
      var height = img['height'];
      var date = img['date'];
      var uid = img['uid'];
      var credit = img['credit'];
      var caption = img['caption'];
      var alt = img['alt'];
      console.log('alt '+alt);
      var format = img['format'];
      var all_sizes = get_all_image_sizes(uid, format, width, height);

      var filename = uid+"."+format;                                               // big-bend.jpg
      var proxy_img = root_url + '/img/proxy/'+uid+"_"+format+"."+format;          // big-bend_jpg.jpg

      // If the image is greater than 400px
      if (width > 400) {
        // get the w400 image
        var thumb = 'https://s3.amazonaws.com/digitalgov/'+uid+"_w400."+format;    // big-bend_w400.jpg
      } else {
        // else get the original image (which should be less than 400px)
        var thumb = 'https://s3.amazonaws.com/digitalgov/'+uid+"."+format;         // big-bend.jpg
      }

      var img_asset = [
        "<div class='img-card'>",
          "<div class='img-file'>",
            "<img src='"+thumb+"'>",
          "</div>",
          "<div class='img-data'>",
            "<p><strong>date:</strong> "+date+"</p>",
            "<p><strong>file:</strong> "+filename+"</p>",
            "<p><strong>uid:</strong> "+uid+"</p>",
            "<p><strong>credit:</strong> "+credit+"</p>",
            "<p><strong>caption:</strong> "+caption+"</p>",
            "<p><strong>alt:</strong> "+alt+"</p>",
            "<p><strong>shortcode:</strong></p>",
            "<pre>{{< img src=\""+uid+"\" >}}</pre>", // shortcode
            "<p><a target='_new' href='https://github.com/GSA/digitalgov.gov/tree/demo/data/images/"+uid+".yml' title='view on GitHub'>Edit on GitHub »</a></p>",
          "</div>",
        "</div>"
      ].join("\n");

      // Appends img_asset to DIV
      $( "#all-images" ).append( img_asset);

    });
  });
});
