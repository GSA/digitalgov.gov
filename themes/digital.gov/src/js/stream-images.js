/* eslint-disable no-console */
const STREAM_IMAGES_VERSION = "1.0.1";
console.log(`stream-images.js version ${STREAM_IMAGES_VERSION}`);

if (!window.imageStreamInitialized && typeof window !== "undefined") {
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

    const IMAGE_PATH = `${window.origin}/s3-images/`;
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get("page"), 10) || 1;

    function showLoading() {
      imagesStreamContainer.innerHTML = `
        <div class="grid-container">
          <div class="usa-prose">
            <p class="text-center">Loading image...</p>
          </div>
        </div>`;
    }

    function createImageElement(uid, image, pageNum, totalPages) {
      try {
        return `
        <div class="grid-container">
          <div class="grid-row">
            <div class="grid-col-12">
              <div class="image-viewer">
                <div class="image-viewer__card">
                  <div id="card-inner-${uid}" class="image-viewer__content">
                    <div class="image-viewer__face image-viewer__face--front">
                      <img src="${IMAGE_PATH}${uid}.${image.format || "png"}" 
                           loading="lazy" 
                           alt="${image.alt || ""}" 
                           class="usa-image">
                    </div>

                    <div class="image-viewer__face image-viewer__face--back">
                      <div class="metadata-header">
                        <h3 class="font-heading-lg">Image ${pageNum} of ${totalPages}</h3>
                      </div>

                      <div class="metadata-content">
                        <dl class="usa-list">
                          <dt>Image ID:</dt>
                          <dd>${uid}</dd>
                          
                          ${
                            image.credit
                              ? `
                            <dt>Credit:</dt>
                            <dd>${image.credit}</dd>
                          `
                              : ""
                          }
                          
                          ${
                            image.caption
                              ? `
                            <dt>Caption:</dt>
                            <dd>${image.caption}</dd>
                          `
                              : ""
                          }
                          
                          ${
                            image.alt
                              ? `
                            <dt>Alt Text:</dt>
                            <dd>${image.alt}</dd>
                          `
                              : ""
                          }
                        </dl>

                        <h4 class="font-heading-sm">Use in Front Matter</h4>
                        <pre class="usa-code">primary_image: "${uid}"</pre>

                        <h4 class="font-heading-sm">Use in Content</h4>
                        <pre class="usa-code">{{< img src="${uid}" >}}</pre>

                        <div class="metadata-footer">
                          <a class="usa-button" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             href="https://github.com/GSA/digitalgov.gov/edit/main/data/images/${uid}.yml">
                            Edit on GitHub »
                          </a>
                          <p class="margin-top-2 text-base">Uploaded on ${
                            image.date
                          }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-bottom border-base-lighter padding-y-4 margin-y-4">
                  <div class="text-center">
                    <button class="usa-button usa-button--outline toggle-button" 
                            type="button" 
                            aria-label="Toggle view">
                      View Metadata
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      } catch (error) {
        console.error("Error creating image element:", error, { uid, image });
        return "<p>Error displaying image</p>";
      }
    }

    function createPagination(pageNum, totalPages) {
      try {
        console.log("Creating pagination for page", pageNum, "of", totalPages);

        const paginationList = document.createElement("ul");
        paginationList.className = "usa-pagination__list";

        if (pageNum > 1) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__arrow">
              <a href="?page=${
                pageNum - 1
              }" class="usa-pagination__link usa-pagination__previous-page" aria-label="Previous page">
                <span class="usa-pagination__link-text">Previous</span>
              </a>
            </li>`;
        }

        if (pageNum > 2) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__page-no">
              <a href="?page=1" class="usa-pagination__link" aria-label="Page 1">1</a>
            </li>`;
        }

        if (pageNum > 3) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__overflow" role="presentation">
              <span>…</span>
            </li>`;
        }

        for (
          let i = Math.max(1, pageNum - 1);
          i <= Math.min(totalPages, pageNum + 1);
          i += 1
        ) {
          paginationList.innerHTML +=
            i === pageNum
              ? `<li class="usa-pagination__item usa-pagination__page-no">
                  <a href="?page=${i}" class="usa-pagination__link usa-current" aria-current="page" aria-label="Page ${i}">
                    ${i}
                  </a>
                </li>`
              : `<li class="usa-pagination__item usa-pagination__page-no">
                  <a href="?page=${i}" class="usa-pagination__link" aria-label="Page ${i}">
                    ${i}
                  </a>
                </li>`;
        }

        if (pageNum < totalPages - 2) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__overflow" role="presentation">
              <span>…</span>
            </li>`;
        }

        if (pageNum < totalPages - 1) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__page-no">
              <a href="?page=${totalPages}" class="usa-pagination__link" aria-label="Last page">
                ${totalPages}
              </a>
            </li>`;
        }

        if (pageNum < totalPages) {
          paginationList.innerHTML += `
            <li class="usa-pagination__item usa-pagination__arrow">
              <a href="?page=${
                pageNum + 1
              }" class="usa-pagination__link usa-pagination__next-page" aria-label="Next page">
                <span class="usa-pagination__link-text">Next</span>
              </a>
            </li>`;
        }

        paginationContainer.innerHTML = "";
        paginationContainer.appendChild(paginationList);
      } catch (error) {
        console.error("Error creating pagination:", error);
        if (paginationContainer) {
          paginationContainer.innerHTML = "";
        }
      }
    }

    function displayImages(images, pageNumber) {
      try {
        showLoading();

        const imageEntries = Object.entries(images);
        const totalImages = imageEntries.length;
        console.log("Total images:", totalImages);

        const totalPages = totalImages;
        console.log("Total pages:", totalPages);

        let validatedPage = pageNumber;
        if (validatedPage < 1) validatedPage = 1;
        if (validatedPage > totalPages) validatedPage = totalPages;

        const start = validatedPage - 1;
        const [uid, image] = imageEntries[start];

        imagesStreamContainer.innerHTML = createImageElement(
          uid,
          image,
          validatedPage,
          totalPages
        );
        createPagination(validatedPage, totalPages);

        const url = new URL(window.location);
        url.searchParams.set("page", validatedPage);
        window.history.pushState({}, "", url);

        // Set up card flip functionality
        const cardInner = document.querySelector(`#card-inner-${uid}`);
        const toggleButton = document.querySelector(".toggle-button");

        if (cardInner && toggleButton) {
          toggleButton.addEventListener("click", () => {
            cardInner.classList.toggle("is-flipped");
            toggleButton.textContent = cardInner.classList.contains(
              "is-flipped"
            )
              ? "View Image"
              : "View Metadata";
          });

          // Handle keyboard navigation
          const handleKeydown = (e) => {
            if (e.key === "Escape") {
              cardInner.classList.remove("is-flipped");
              toggleButton.textContent = "View Metadata";
            } else if (e.key === "i") {
              cardInner.classList.toggle("is-flipped");
              toggleButton.textContent = cardInner.classList.contains(
                "is-flipped"
              )
                ? "View Image"
                : "View Metadata";
            }
          };

          document.addEventListener("keydown", handleKeydown);
        }
      } catch (error) {
        console.error("Error displaying images:", error);
        imagesStreamContainer.innerHTML =
          "<p>Error displaying images. Please try again later.</p>";
      }
    }

    try {
      const sortedImages = Object.fromEntries(
        Object.entries(DIGITALGOV_IMAGES).sort(
          ([, a], [, b]) => new Date(b.date) - new Date(a.date)
        )
      );

      displayImages(sortedImages, currentPage);

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

if (typeof module !== "undefined" && module.exports) {
  module.exports = { version: STREAM_IMAGES_VERSION };
}
