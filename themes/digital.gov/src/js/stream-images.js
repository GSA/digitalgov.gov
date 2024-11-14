/**
 * Handles image pagination and display
 */

alert("stream-images.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing image stream...");

  const imagesStreamContainer = document.querySelector(".dg-image-stream");
  const paginationContainer = document.querySelector(".usa-pagination__list");
  const imageDataElement = document.querySelector("#image-data");

  if (!imagesStreamContainer) {
    console.error("Images container not found");
    return;
  }
  if (!paginationContainer) {
    console.error("Pagination container not found");
    return;
  }
  if (!imageDataElement) {
    console.error("Image data element not found");
    return;
  }

  let DIGITALGOV_IMAGES;
  try {
    const rawData = imageDataElement.getAttribute("data-images");
    console.log(JSON.parse(rawData)); // Validate JSON
    console.log("Raw image uuid: ");
    DIGITALGOV_IMAGES = JSON.parse(rawData);
    if (!DIGITALGOV_IMAGES) {
      throw new Error("No image data found");
    }
    console.log(
      "Successfully parsed image data:",
      Object.keys(DIGITALGOV_IMAGES).length,
      "images"
    );
  } catch (error) {
    console.error("Error parsing image data:", error);
    imagesStreamContainer.innerHTML =
      "<p>Error loading images. Please try again later.</p>";
    return;
  }

  const ITEMS_PER_PAGE = 1;

  // Get current page from URL
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get("page"), 10) || 1;
  console.log("Current page:", currentPage);

  /**
   * Creates img card markup for individual images
   */
  function createImageElement(uid, image) {
    try {
      return `<div class="card-img">
        <div class="media" style="max-width:400px;">
          <img src="${image.url}" loading="lazy" alt="${image.alt || ""}">
          <p>${image.caption}</p>
        </div>
        <div class="img-data">
          <div class="box">
            <p><strong>uid:</strong> ${uid}</p>
            <p><straong>credit:</straong> ${image.credit}</p>
            <p><strong>caption:</strong> ${image.caption}</p>
            <p><strong>alt:</strong> ${image.alt}</p>
            <div class="code">
              <p class="label">Use this field in the front matter</p>
              <pre>primary_image: "${uid}"</pre>
            </div>
            <div class="code">
              <p class="label">Use this shortcode in the content body</p>
              <pre>{{< img src="${uid}" >}}</pre>
            </div>
            <p class="edit btn"><a target="_new" href="https://github.com/GSA/digitalgov.gov/edit/main/data/images/${uid}.yml" title="view on GitHub">Edit on GitHub »</a></p>
            <hr>
            <p class="meta">Uploaded on ${image.date}</p>
          </div>
        </div>
      </div>`;
    } catch (error) {
      console.error("Error creating image element:", error, { uid, image });
      return "<p>Error displaying image</p>";
    }
  }

  /**
   * Creates pagination markup following USWDS design system
   */
  function createPagination(pageNum, totalPages) {
    try {
      console.log("Creating pagination for page", pageNum, "of", totalPages);
      let paginationHTML = "";

      // Previous button (slot 0)
      if (pageNum > 1) {
        paginationHTML += `
          <li class="usa-pagination__item usa-pagination__arrow">
            <a href="?page=${
              pageNum - 1
            }" class="usa-pagination__link usa-pagination__previous-page" aria-label="Previous page">
              <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="/uswds/img/sprite.svg#navigate_before"></use>
              </svg>
              <span class="usa-pagination__link-text">Previous</span>
            </a>
          </li>`;
      }

      // First page (slot 1)
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__page-no">
          <a href="?page=1" class="usa-pagination__button${
            pageNum === 1 ? " usa-current" : ""
          }" 
             aria-label="Page 1"${
               pageNum === 1 ? ' aria-current="page"' : ""
             }>1</a>
        </li>`;

      // Calculate visible page numbers
      let pages = [];
      if (totalPages <= 7) {
        // Show all pages if 7 or fewer
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
      } else if (pageNum <= 4) {
        // Near start
        pages = [1, 2, 3, 4, 5];
      } else if (pageNum >= totalPages - 3) {
        // Near end
        pages = [
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        // Middle
        pages = [pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2];
      }

      // Add ellipsis and pages
      if (pages[0] > 2) {
        paginationHTML += `
          <li class="usa-pagination__item usa-pagination__overflow" aria-label="ellipsis indicating non-visible pages">
            <span>…</span>
          </li>`;
      }

      // Middle pages (slots 2-6)
      pages.slice(1).forEach((pageNumber) => {
        paginationHTML += `
          <li class="usa-pagination__item usa-pagination__page-no">
            <a href="?page=${pageNumber}" 
               class="usa-pagination__button${
                 pageNumber === pageNum ? " usa-current" : ""
               }" 
               aria-label="Page ${pageNumber}"
               ${pageNumber === pageNum ? 'aria-current="page"' : ""}>
              ${pageNumber}
            </a>
          </li>`;
      });

      // Add ending ellipsis if needed (slot 6)
      if (pages[pages.length - 1] < totalPages - 1) {
        paginationHTML += `
          <li class="usa-pagination__item usa-pagination__overflow" aria-label="ellipsis indicating non-visible pages">
            <span>…</span>
          </li>`;
      }

      // Last page if not already shown (slot 7)
      if (pages[pages.length - 1] !== totalPages) {
        paginationHTML += `
          <li class="usa-pagination__item usa-pagination__page-no">
            <a href="?page=${totalPages}" 
               class="usa-pagination__button${
                 pageNum === totalPages ? " usa-current" : ""
               }" 
               aria-label="Last page, page ${totalPages}"
               ${pageNum === totalPages ? 'aria-current="page"' : ""}>
              ${totalPages}
            </a>
          </li>`;
      }

      // Next button (after slot 7)
      if (pageNum < totalPages) {
        paginationHTML += `
          <li class="usa-pagination__item usa-pagination__arrow">
            <a href="?page=${
              pageNum + 1
            }" class="usa-pagination__link usa-pagination__next-page" aria-label="Next page">
              <span class="usa-pagination__link-text">Next</span>
              <svg class="usa-icon" aria-hidden="true" role="img">
                <use xlink:href="/uswds/img/sprite.svg#navigate_next"></use>
              </svg>
            </a>
          </li>`;
      }

      if (paginationContainer) {
        paginationContainer.innerHTML = paginationHTML;
      }
    } catch (error) {
      console.error("Error creating pagination:", error);
      if (paginationContainer) {
        paginationContainer.innerHTML = "";
      }
    }
  }

  /**
   * Displays images for the current page
   */
  function displayImages(images, pageNumber) {
    try {
      const imageEntries = Object.entries(images);
      console.log("Total images:", imageEntries.length);

      const totalPages = Math.ceil(imageEntries.length / ITEMS_PER_PAGE);
      console.log("Total pages:", totalPages);

      // Validate page number
      let validatedPage = pageNumber;
      if (validatedPage < 1) validatedPage = 1;
      if (validatedPage > totalPages) validatedPage = totalPages;

      const start = (validatedPage - 1) * ITEMS_PER_PAGE;
      const currentImages = imageEntries.slice(start, start + ITEMS_PER_PAGE);

      let imagesMarkup = "";
      currentImages.forEach(([uid, image]) => {
        imagesMarkup += createImageElement(uid, image);
      });

      imagesStreamContainer.innerHTML = imagesMarkup;
      createPagination(validatedPage, totalPages);

      // Update URL without reloading
      const url = new URL(window.location);
      url.searchParams.set("page", validatedPage);
      window.history.pushState({}, "", url);
    } catch (error) {
      console.error("Error displaying images:", error);
      imagesStreamContainer.innerHTML =
        "<p>Error displaying images. Please try again later.</p>";
    }
  }

  try {
    // Sort images by date
    const sortedImages = Object.fromEntries(
      Object.entries(DIGITALGOV_IMAGES).sort(
        ([, a], [, b]) => new Date(b.date) - new Date(a.date)
      )
    );

    // Initial display
    displayImages(sortedImages, currentPage);

    // Handle pagination clicks
    if (paginationContainer) {
      paginationContainer.addEventListener("click", (e) => {
        e.preventDefault();
        const link = e.target.closest("a");
        if (link) {
          const params = new URLSearchParams(new URL(link.href).search);
          const newPageNum = parseInt(params.get("page"), 10);
          if (newPageNum) {
            currentPage = newPageNum;
            displayImages(sortedImages, currentPage);
            window.scrollTo(0, 0);
          }
        }
      });
    }
  } catch (error) {
    console.error("Error initializing image display:", error);
    imagesStreamContainer.innerHTML =
      "<p>Error initializing image display. Please try again later.</p>";
  }
});
