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
    const paginationContainer = document.querySelector(".usa-pagination");

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
      const totalImages = Object.keys(DIGITALGOV_IMAGES).length;
      console.log("Successfully loaded image data:", totalImages, "images");
    } catch (error) {
      console.error("Error loading image data:", error);
      imagesStreamContainer.innerHTML =
        "<p>Error loading images. Please try again later.</p>";
      return;
    }

    const ITEMS_PER_PAGE = 1; // Show one image per page
    const CDN_URL = "https://s3.amazonaws.com/digitalgov";

    // Get current page from URL
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get("page"), 10) || 1;

    /**
     * Shows loading state while images are being loaded
     */
    function showLoading() {
      imagesStreamContainer.innerHTML = `
        <div class="grid-container">
          <div class="usa-prose">
            <p class="text-center">Loading image...</p>
          </div>
        </div>`;
    }

    /**
     * Creates img card markup for individual images
     */
    function createImageElement(uid, image, currentPage, totalPages) {
      try {
        const imageUrl = `${CDN_URL}/${uid}.${image.format || "png"}`;

        return `
        <div class="grid-container">
          <div class="grid-row">
            <div class="grid-col-12">
              <div id="image-container-${uid}" class="media">
                <img src="${imageUrl}" loading="lazy" alt="${image.alt || ""}" class="usa-image">
              </div>

              <div id="metadata-${uid}" class="img-data display-none">
                <h3>Image ${currentPage} of ${totalPages}</h3>
                <dl>
                  <dt>uid:</dt>
                  <dd>${uid}</dd>
                  
                  ${image.credit ? `
                    <dt>credit:</dt>
                    <dd>${image.credit}</dd>
                  ` : ''}
                  
                  ${image.caption ? `
                    <dt>caption:</dt>
                    <dd>${image.caption}</dd>
                  ` : ''}
                  
                  ${image.alt ? `
                    <dt>alt:</dt>
                    <dd>${image.alt}</dd>
                  ` : ''}
                </dl>

                <h4>Use this field in the front matter</h4>
                <pre>primary_image: "${uid}"</pre>

                <h4>Use this shortcode in the content body</h4>
                <pre>{{< img src="${uid}" >}}</pre>

                <div class="margin-top-2">
                  <a class="usa-button" target="_new" href="https://github.com/GSA/digitalgov.gov/edit/main/data/images/${uid}.yml" title="Edit on GitHub">
                    Edit on GitHub »
                  </a>
                </div>

                <p class="margin-top-1">Uploaded on ${image.date}</p>
              </div>

              <button id="toggle-btn-${uid}" class="usa-button width-full" onclick="
                document.getElementById('metadata-${uid}').classList.toggle('display-none');
                document.getElementById('image-container-${uid}').classList.toggle('display-none');
                this.textContent = this.textContent === 'View Metadata' ? 'View Image' : 'View Metadata';
              ">
                View Metadata
              </button>
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
        
        // Create the list element with USWDS classes
        const paginationList = document.createElement('ul');
        paginationList.className = 'usa-pagination__list';
        
        // Previous button
        if (pageNum > 1) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__arrow">
              <a href="?page=${pageNum - 1}" class="usa-pagination__link usa-pagination__previous-page" aria-label="Previous page">
                <span class="usa-pagination__link-text">Previous</span>
              </a>
            </li>`;
        }

        // First page
        if (pageNum > 2) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__page-no">
              <a href="?page=1" class="usa-pagination__link" aria-label="Page 1">1</a>
            </li>`;
        }

        // Ellipsis if needed
        if (pageNum > 3) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__overflow" role="presentation">
              <span>…</span>
            </li>`;
        }

        // Current page and surrounding pages
        for (let i = Math.max(1, pageNum - 1); i <= Math.min(totalPages, pageNum + 1); i++) {
          if (i === pageNum) {
            paginationList.innerHTML += `
              <li class="usa-pagination__item usa-pagination__page-no">
                <a href="?page=${i}" class="usa-pagination__link usa-current" aria-current="page" aria-label="Page ${i}">
                  ${i}
                </a>
              </li>`;
          } else {
            paginationList.innerHTML += `
              <li class="usa-pagination__item usa-pagination__page-no">
                <a href="?page=${i}" class="usa-pagination__link" aria-label="Page ${i}">
                  ${i}
                </a>
              </li>`;
          }
        }

        // Ellipsis if needed
        if (pageNum < totalPages - 2) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__overflow" role="presentation">
              <span>…</span>
            </li>`;
        }

        // Last page
        if (pageNum < totalPages - 1) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__page-no">
              <a href="?page=${totalPages}" class="usa-pagination__link" aria-label="Last page">
                ${totalPages}
              </a>
            </li>`;
        }

        // Next button
        if (pageNum < totalPages) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__arrow">
              <a href="?page=${pageNum + 1}" class="usa-pagination__link usa-pagination__next-page" aria-label="Next page">
                <span class="usa-pagination__link-text">Next</span>
              </a>
            </li>`;
        }

        // Clear existing pagination and add new
        paginationContainer.innerHTML = '';
        paginationContainer.appendChild(paginationList);
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
        const totalImages = imageEntries.length;
        console.log("Total images:", totalImages);

        const totalPages = totalImages; // Since ITEMS_PER_PAGE is 1
        console.log("Total pages:", totalPages);

        // Validate page number
        let validatedPage = pageNumber;
        if (validatedPage < 1) validatedPage = 1;
        if (validatedPage > totalPages) validatedPage = totalPages;

        const start = validatedPage - 1; // Since ITEMS_PER_PAGE is 1
        const [uid, image] = imageEntries[start];
        
        imagesStreamContainer.innerHTML = createImageElement(uid, image, validatedPage, totalPages);
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
          const link = e.target.closest("a");
          if (link) {
            e.preventDefault();
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
