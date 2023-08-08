/**
 *
 * Reads json file of hosted at /images/v1/json/ and displays images and meta-data on /images
 *
 * TODO: Add pagination
 * TODO: create img-card component
 * DONE Refactor to use native js
 * DONE Remove hugo setting all_imagesJson, refactor to use variable
 */

// eslint-disable-next-line func-names
(function () {
  const imagesJSONPath = "images/v1/json/";

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
   * Returns image element markup as string
   * TODO: Refactor to return elements not strings
   * Add to DOM as HTML elements using createElement and fragment
   * Or Add as template strings merged into one large template string and added at one time
   *
   * @param {object} image object
   * @returns {string} HTML markup for image element
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
        <hr>
        <p class="meta">Uploaded on ${image.date}</p>
      </div>
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
    // const imagesStreamFragment = document.createDocumentFragment();
    let imagesMarkupString = "";

    imagesToDisplay.forEach((image) => {
      // eslint-disable-next-line no-param-reassign
      image.thumbNail = createImageThumbnail(image);
      const imageElement = createImageElement(image);
      imagesMarkupString += imageElement;
    });
    imagesStreamContainer.innerHTML = imagesMarkupString;
  }

  /**
   * Fetch images json and create array of image objects
   * @return {array} array of image objects
   */
  async function fetchImagesData() {
    let currentURL = window.location.href;
    const imagesData = await fetch(`${currentURL}${imagesJSONPath}`);

    if (!imagesData.ok) {
      throw new Error("Images json error");
    }
    const imagesJSON = await imagesData.json();
    createImagesStream(imagesJSON);
  }

  // fetch data, render markup, add to DOM
  fetchImagesData();
})();
