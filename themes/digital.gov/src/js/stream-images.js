/* eslint-disable no-undef */
jQuery(($) => {
  // eslint-disable-next-line no-unused-vars
  function getAllImageSizes(uid, format, width, height) {
    const sizes = ["200", "400", "600", "800", "1200", "2400"]; // all image sizes
    const imgs = [];
    $.each(sizes, (key, size) => {
      if (width > size) {
        // big-bend_w200.jpg
        const img = `https://s3.amazonaws.com/digitalgov/${uid}_w${size}.${format}`;
        // big-bend_w200bw.jpg
        const bwImg = `https://s3.amazonaws.com/digitalgov/${uid}_w${size}bw.${format}`;
        imgs.push(img, bwImg);
      }
    });
    return imgs;
  }

  // The all-images JSON file is now included via the "footer--custom-js" partial
  // var all_imagesJson = '/images/v1/json/';

  // Gets all the image from the JSON file and appends them to #all-images div
  $.getJSON(all_imagesJson, (data) => {
    $.each(data, (key, img) => {
      const { width } = img;
      const { height } = img;
      const { date } = img;
      const { uid } = img;
      const { credit } = img;
      const { caption } = img;
      const { alt } = img;
      const { format } = img;
      // eslint-disable-next-line no-unused-vars
      const allSizes = getAllImageSizes(uid, format, width, height);

      // big-bend.jpg
      // eslint-disable-next-line no-unused-vars
      const filename = `${uid}.${format}`;
      // big-bend_jpg.jpg
      // eslint-disable-next-line no-unused-vars, camelcase
      const proxyImg = `${root_url}/img/proxy/${uid}_${format}.${format}`;

      // If the image is greater than 400px
      let thumb;
      if (width > 400) {
        // get the w400 image
        // big-bend_w400.jpg
        thumb = `https://s3.amazonaws.com/digitalgov/${uid}_w400.${format}`;
      } else {
        // else get the original image (which should be less than 400px)
        // big-bend.jpg
        thumb = `https://s3.amazonaws.com/digitalgov/${uid}.${format}`;
      }

      const imgAsset = `<div class="card-img">
        <div class="media">
          <img src="${thumb}">
          <p>${caption}</p>
        </div>
        <div class="img-data">
          <div class="box">
            <p><strong>uid:</strong> ${uid}</p>
            <p><strong>credit:</strong> ${credit}</p>
            <p><strong>caption:</strong> ${caption}</p>
            <p><strong>alt:</strong> ${alt}</p>
            <div class="code">
              <p class="label">Use this field in the front matter</p>
              <pre>primary_image: "${uid}"</pre>
            </div>
            <div class="code">
              <p class="label">Use this shortcode in the content body</p>
              <pre>{{< img src="${uid}" >}}</pre>
            </div>
            <p class="edit btn"><a target="_new" href="https://github.com/GSA/digitalgov.gov/edit/main/data/images/${uid}.yml" title="view on GitHub">Edit on GitHub »</a></p>
          </div>
        <p class="meta">Uploaded on ${date}</p>
        </div>
      </div>`;

      // Appends img_asset to DIV
      $("#stream-images").append(imgAsset);
    });
  });
});
