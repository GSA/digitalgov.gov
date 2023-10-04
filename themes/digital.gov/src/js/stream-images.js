/**
 *
 * Reads json file of hosted at /images/v1/json/index.json and
 * displays images and meta-data on https:/digital.gov/images.
 *
 */

(() => {
  const imagesStreamContainer = document.querySelector(".dg-image-stream");

  if (!imagesStreamContainer) return;

  const baseURL = "https://s3.amazonaws.com/digitalgov";
  const imageDataURI = imagesStreamContainer.baseURI;

  // Replace any double backslash with single.
  const jsonPath = `${imageDataURI}/v1/json/index.json`
    .split("//v1")
    .join("/v1");

  /**
   * Creates a thumbnail image with original image as fallback.
   *
   * Checks if image size is greater than 400px, otherwise use original.
   * @param {object} image object
   * @returns {string} URL string path for image thumbnail
   */
  function createImageThumbnail(image) {
    let thumbnail = "";

    if (image.width > 400) {
      // Example: big-bend_w400.jpg
      thumbnail = `${baseURL}/${image.uid}_w400.${image.format}`;
    } else {
      // Example: big-bend.jpg
      thumbnail = `${baseURL}/${image.uid}.${image.format}`;
    }
    // return thumbnail;
    return `<img src="${thumbnail}" loading="lazy" ></img>`;
  }

  /**
   * Creates img card markup for individual images, returns template markup string
   *
   * @param {object} image - Image information, such as width & UID.
   * @returns {string} HTML markup for image element
   */
  function createImageElement(image) {
    return `<div class="card-img">
    <div class="media">
      ${createImageThumbnail(image)}
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
        <p class="edit btn"><a target="_new" href="https://github.com/GSA/digitalgov.gov/edit/main/data/images/${
          image.uid
        }.yml" title="view on GitHub">Edit on GitHub »</a></p>
        <hr>
        <p class="meta">Uploaded on ${image.date}</p>
      </div>
    </div>
  </div>`;
  }

  /**
   * Creates a stream of images from an array of images.
   *
   * Loop through images json file, return markup for each image and display within imagesStreamContainer.
   * @param {Array<object>} imagesToDisplay - An array of image objects.
   */
  function createImagesStream(imagesToDisplay) {
    let imagesMarkup = "";

    imagesToDisplay.forEach((image) => {
      const imageElement = createImageElement(image);

      imagesMarkup += imageElement;
    });

    imagesStreamContainer.innerHTML = imagesMarkup;
  }

  /**
   * Fetches data for a list of images from a JSON file.
   *
   * @return {array} - A promise that returns a data object.
   */
  async function fetchImagesData() {
    const imagesData = await fetch(`${jsonPath}`);

    if (!imagesData.ok) {
      throw new Error("Error fetching images JSON.");
    }

    const imagesJSON = await imagesData.json();
    const imageData = JSON.parse(imagesJSON.item[0].content);

    createImagesStream(imageData);
  }

  fetchImagesData();
})();
