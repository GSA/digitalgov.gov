/* eslint-disable no-console */
/**
 * Handles image pagination and display
 */

// Ensure we only initialize once
if (!window.imageStreamInitialized) {
  window.imageStreamInitialized = true;

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing image stream...");

    const imagesStreamContainer = document.querySelector("#stream-images");
    const paginationContainer = document.querySelector(".usa-pagination__list");

    if (!imagesStreamContainer) {
      console.error("Images container not found");
      return;
    }
    if (!paginationContainer) {
      console.error("Pagination container not found");
      return;
    }
    if (!window.DIGITALGOV_IMAGES) {
      console.error("Image data not found in window.DIGITALGOV_IMAGES");
      return;
    }

    const { DIGITALGOV_IMAGES } = window;
    try {
      if (!DIGITALGOV_IMAGES) {
        throw new Error("No image data found");
      }
      console.log(
        "Successfully loaded image data:",
        Object.keys(DIGITALGOV_IMAGES).length,
        "images"
      );
    } catch (error) {
      console.error("Error loading image data:", error);
      imagesStreamContainer.innerHTML =
        "<p>Error loading images. Please try again later.</p>";
      return;
    }

    const ITEMS_PER_PAGE = 12; // Show more items per page
    const CDN_URL = "https://s3.amazonaws.com/digitalgov";

    // Get current page from URL
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get("page"), 10) || 1;
    console.log("Current page:", currentPage);

    /**
     * Shows loading state while images are being loaded
     */
    function showLoading() {
      imagesStreamContainer.innerHTML = `
        <div class="grid-row grid-gap">
          <div class="grid-col-12 text-center padding-4">
            <p>Loading images...</p>
          </div>
        </div>`;
    }

    /**
     * Creates img card markup for individual images
     */
    function createImageElement(uid, image) {
      try {
        // Construct the full image URL using the CDN URL, uid, and format from the image data
        const imageUrl = `${CDN_URL}/${uid}.${image.format || "png"}`;

        return `<div class="card-img">
          <div class="media" style="max-width:400px;">
            <img src="${imageUrl}" loading="lazy" alt="${image.alt || ""}">
            ${image.caption ? `<p>${image.caption}</p>` : ""}
          </div>
          <div class="img-data">
            <div class="box">
              <p><strong>uid:</strong> ${uid}</p>
              ${
                image.credit
                  ? `<p><strong>credit:</strong> ${image.credit}</p>`
                  : ""
              }
              ${
                image.caption
                  ? `<p><strong>caption:</strong> ${image.caption}</p>`
                  : ""
              }
              ${image.alt ? `<p><strong>alt:</strong> ${image.alt}</p>` : ""}
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

        // Previous button
        if (pageNum > 1) {
          paginationHTML += `
            <li class="usa-pagination__item usa-pagination__arrow">
              <a href="?page=${
                pageNum - 1
              }" class="usa-pagination__link usa-pagination__previous-page" aria-label="Previous page">
                ‹ Previous
              </a>
            </li>`;
        }

        // First page
        if (pageNum > 2) {
          paginationHTML += `
            <li class="usa-pagination__item usa-pagination__page-no">
              <a href="?page=1" class="usa-pagination__link" aria-label="Page 1">1</a>
            </li>`;
        }

        // Ellipsis if needed
        if (pageNum > 3) {
          paginationHTML += `
            <li class="usa-pagination__item usa-pagination__overflow" role="presentation">
              <span>…</span>
            </li>`;
        }

        // Current page and surrounding pages
        for (
          let i = Math.max(1, pageNum - 2);
          i <= Math.min(totalPages, pageNum + 2);
          i += 1
        ) {
          if (i === pageNum) {
            paginationHTML += `
              <li class="usa-pagination__item usa-pagination__page-no">
                <a href="?page=${i}" class="usa-pagination__link usa-current" aria-label="Page ${i}" aria-current="page">
                  ${i}
                </a>
              </li>`;
          } else {
            paginationHTML += `
              <li class="usa-pagination__item usa-pagination__page-no">
                <a href="?page=${i}" class="usa-pagination__link" aria-label="Page ${i}">
                  ${i}
                </a>
              </li>`;
          }
        }

        // Ellipsis if needed
        if (pageNum < totalPages - 2) {
          paginationHTML += `
            <li class="usa-pagination__item usa-pagination__overflow" role="presentation">
              <span>…</span>
            </li>`;
        }

        // Last page
        if (pageNum < totalPages - 1) {
          paginationHTML += `
            <li class="usa-pagination__item usa-pagination__page-no">
              <a href="?page=${totalPages}" class="usa-pagination__link" aria-label="Last page, page ${totalPages}">
                ${totalPages}
              </a>
            </li>`;
        }

        // Next button
        if (pageNum < totalPages) {
          paginationHTML += `
            <li class="usa-pagination__item usa-pagination__arrow">
              <a href="?page=${
                pageNum + 1
              }" class="usa-pagination__link usa-pagination__next-page" aria-label="Next page">
                Next ›
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
        showLoading();

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

        let imagesMarkup = '<div class="grid-row grid-gap">';
        currentImages.forEach(([uid, image]) => {
          imagesMarkup += `<div class="tablet:grid-col-6 desktop:grid-col-4">${createImageElement(
            uid,
            image
          )}</div>`;
        });
        imagesMarkup += "</div>";

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
}
