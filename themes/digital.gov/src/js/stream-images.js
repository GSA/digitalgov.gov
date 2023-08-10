/**
 *
 * Reads json file of hosted at /images/v1/json/ and displays images and meta-data on digital.gov/images
 * Uses imagesJSONPath set in baseof.html to create
 *
 * 1. Check if on /images page
 * 2. Fetch /images/v1/json file
 * 3. Render json data in img-card markup
 * 4. Add to DOM in one update
 */

// eslint-disable-next-line func-names
(function () {
  // check for #stream-images in layouts/_default/images.html
  const imagesStreamContainer = document.querySelector("#stream-images");
  const jsonPath = "v1/json";

  if (imagesStreamContainer) {
    // eslint-disable-next-line no-use-before-define
    fetchImagesData();
  }

  /**
   * Returns image thumbnail path
   * Checks if image size is greater than 400px
   * Will display 400px or smaller for thumbnail
   * @param {object} image object
   * @returns {string} URL string path for image thumbnail
   */
  function createImageThumbnail(image) {
    let thumbnail = "";
    // If the image is greater than 400px
    if (image.width > 400) {
      // get the w400 format, e.g. big-bend_w400.jpg
      thumbnail = `https://s3.amazonaws.com/digitalgov/${image.uid}_w400.${image.format}`;
    } else {
      // else get the original image (which should be less than 400px), e.g. big-bend.jpg
      thumbnail = `https://s3.amazonaws.com/digitalgov/${image.uid}.${image.format}`;
    }
    return thumbnail;
  }

  /**
   * Creates img card markup for indivual images, returns template markup string
   * @param {object} image object
   * @returns {string} HTML markup for image element
   */
  function createImageElement(image) {
    return `<div class="card-img">
    <div class="media">
      <img src="${image.thumbnail}">
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
        <hr>
        <p class="meta">Uploaded on ${image.date}</p>
      </div>
    </div>
  </div>`;
  }

  /**
   * Displays list of images from /images/v1/json data file
   * Loop through images json file, return populated markup for each image and display within #stream-images container
   * @param {object} imagesToDisplay array of image objects
   */
  function createImagesStream(imagesToDisplay) {
    let imagesMarkup = "";
    imagesToDisplay.forEach((image) => {
      // eslint-disable-next-line no-param-reassign
      image.thumbnail = createImageThumbnail(image);
      const imageElement = createImageElement(image);
      imagesMarkup += imageElement;
    });
    imagesStreamContainer.innerHTML = imagesMarkup;
  }

  /**
   * Fetch images json and return images json
   * @return {array} json array of image objects
   */
  async function fetchImagesData() {
    const imagesData = await fetch(`${jsonPath}`);

    if (!imagesData.ok) {
      throw new Error("Images json error");
    }

    const imagesJSON = await imagesData.json();
    createImagesStream(imagesJSON);
  }
})();
