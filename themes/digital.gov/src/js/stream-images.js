/**
 *
 * Reads json file of hosted at /images/v1/json/ and displays images and meta-data on /images
 *
 * 1. Add pagination
 * 2. Refactor to use native js
 * 3. Remove hugo setting all_imagesJson, refactor to use variable
 */

(function () {
  const imagesJSONPath = "/images/v1/json/";
  /**
   * ! This function is called but it's results are not used!
   * @param {string} uid
   * @param {string} format
   * @param {number} width
   * @returns array of URLS to AWS endpoints
   *
   *  https://s3.amazonaws.com/digitalgov/guide-web-analytics-playbook_w200.png
   *  https://s3.amazonaws.com/digitalgov/guide-web-analytics-playbook_w200bw.png
   */
  function listAllImageSizes(uid, format, width) {
    const imageSizes = ["200", "400", "600", "800", "1200", "2400"]; // all image sizes
    const imageURLS = [];

    imageSizes.forEach((size) => {
      if (width > size) {
        // big-bend_w200.jpg
        const img = `https://s3.amazonaws.com/digitalgov/${uid}_w${size}.${format}`;
        // big-bend_w200bw.jpg
        const bwImg = `https://s3.amazonaws.com/digitalgov/${uid}_w${size}bw.${format}`;
        imageURLS.push(img, bwImg);
      }
    });
    return imageURLS;
  }

  /**
   *
   * Fetch images json and create array of image objects
   * @return {array} array of image objects
   */
  async function fetchImagesData() {
    const imagesData = await fetch(`${imagesJSONPath}`);
    const imagesJSON = await imagesData.json();
    const imagesToDisplay = [];

    imagesJSON.forEach(function (image) {
      const { width, date, uid, credit, caption, alt, format } = image;
      const imageObject = Object.assign(
        {},
        {
          width,
          date,
          uid,
          credit,
          caption,
          alt,
          format,
        }
      );
      imagesToDisplay.push(imageObject);
    });

    createImagesStream(imagesToDisplay);
  }

  fetchImagesData();

  /**
   * Returns image thumbnail path and checks to see if size is greater than 400px
   * Only want to display 400px or smaller for thumbnail
   * @param {object} image object
   * @returns {string} URL string path for image thumbnail
   */
  function createImageThumbnail(image) {
    // If the image is greater than 400px
    if (image.width > 400) {
      // get the w400 format, e.g. big-bend_w400.jpg
      return `https://s3.amazonaws.com/digitalgov/${image.uid}_w400.${image.format}`;
    } else {
      // else get the original image (which should be less than 400px), e.g. big-bend.jpg
      return `https://s3.amazonaws.com/digitalgov/${image.uid}.${image.format}`;
    }
  }

  /**
   * Returns image element markup as string
   * TODO: Refactor to return elements not strings
   *
   * @param {object} image object
   * @returns {string} HTML string to be rendered in markup
   */
  function createImageElement(image) {
    return `<div class="card-img">
    <div class="media">
      <img src="${image.thumbNail}">
      <p>${image.caption}</p>
    </div>
    <div class="img-data">
      <div class="box">
        <p><strong>uid:</strong> ${image.uid}</p>
        <p><strong>credit:</strong> ${image.credit}</p>
        <p><strong>caption:</strong> ${image.caption}</p>
        <p><strong>alt:</strong> ${image.alt}</p>
        <div class="code">
          <p class="label">Use this field in the front matter</p>
          <pre>primary_image: "${image.uid}"</pre>
        </div>
        <div class="code">
          <p class="label">Use this shortcode in the content body</p>
          <pre>{{< img src="${image.uid}" >}}</pre>
        </div>
        <p class="edit btn"><a target="_new" href="https://github.com/GSA/digitalgov.gov/edit/main/data/images/${image.uid}.yml" title="view on GitHub">Edit on GitHub »</a></p>
      </div>
    <p class="meta">Uploaded on ${image.date}</p>
    </div>
  </div>`;
  }

  /**
   * Displays list of images from images/v1/json
   * @param {object} imagesToDisplay array of image objects
   *
   */
  function createImagesStream(imagesToDisplay) {
    const imagesStreamContainer = document.querySelector("#stream-images");
    const imagesStreamFragment = document.createDocumentFragment();

    imagesToDisplay.forEach((image) => {
      image.thumbNail = createImageThumbnail(image);
      let imageElement = createImageElement(image);
      imagesStreamFragment.append(imageElement);
    });

    imagesStreamContainer.append(imagesStreamFragment);
  }
})();
