/**
 * Handles image pagination and display
 */

(() => {
  const imagesStreamContainer = document.querySelector(".dg-image-stream");
  const paginationContainer = document.querySelector(".usa-pagination__list");

  if (!imagesStreamContainer || !window.DIGITALGOV_IMAGES) return;

  const ITEMS_PER_PAGE = 1;

  // Get current page from URL
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get('page')) || 1;

  /**
   * Creates img card markup for individual images
   */
  function createImageElement(uid, image) {
    return `<div class="card-img">
      <div class="media" style="max-width:400px;">
        <img src="${image.url}" loading="lazy" alt="${image.alt || ''}">
        <p>${image.caption}</p>
      </div>
      <div class="img-data">
        <div class="box">
          <p><strong>uid:</strong> ${uid}</p>
          <p><strong>credit:</strong> ${image.credit}</p>
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
  }

  /**
   * Creates pagination markup following USWDS design system
   */
  function createPagination(currentPage, totalPages) {
    let paginationHTML = '';

    // Previous button
    if (currentPage > 1) {
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__arrow">
          <a href="?page=${currentPage - 1}" class="usa-pagination__link usa-pagination__previous-page" aria-label="Previous page">
            <span class="usa-pagination__link-text">Previous</span>
          </a>
        </li>`;
    }

    // First page
    if (currentPage > 2) {
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__page-no">
          <a href="?page=1" class="usa-pagination__button" aria-label="Page 1">1</a>
        </li>`;
    }

    // Ellipsis if needed
    if (currentPage > 3) {
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__overflow">
          <span>...</span>
        </li>`;
    }

    // Current page and surrounding pages
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__page-no">
          <a href="?page=${i}" 
             class="usa-pagination__button${i === currentPage ? ' usa-current' : ''}" 
             aria-label="Page ${i}"
             ${i === currentPage ? 'aria-current="page"' : ''}>
            ${i}
          </a>
        </li>`;
    }

    // Ellipsis if needed
    if (currentPage < totalPages - 2) {
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__overflow">
          <span>...</span>
        </li>`;
    }

    // Last page
    if (currentPage < totalPages - 1) {
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__page-no">
          <a href="?page=${totalPages}" class="usa-pagination__button" aria-label="Page ${totalPages}">
            ${totalPages}
          </a>
        </li>`;
    }

    // Next button
    if (currentPage < totalPages) {
      paginationHTML += `
        <li class="usa-pagination__item usa-pagination__arrow">
          <a href="?page=${currentPage + 1}" class="usa-pagination__link usa-pagination__next-page" aria-label="Next page">
            <span class="usa-pagination__link-text">Next</span>
          </a>
        </li>`;
    }

    if (paginationContainer) {
      paginationContainer.innerHTML = paginationHTML;
    }
  }

  /**
   * Displays images for the current page
   */
  function displayImages(images, page) {
    const imageEntries = Object.entries(images);
    const totalPages = Math.ceil(imageEntries.length / ITEMS_PER_PAGE);
    
    // Validate current page
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    const start = (page - 1) * ITEMS_PER_PAGE;
    const currentImages = imageEntries.slice(start, start + ITEMS_PER_PAGE);
    
    let imagesMarkup = '';
    currentImages.forEach(([uid, image]) => {
      imagesMarkup += createImageElement(uid, image);
    });

    imagesStreamContainer.innerHTML = imagesMarkup;
    createPagination(page, totalPages);

    // Update URL without reloading
    const url = new URL(window.location);
    url.searchParams.set('page', page);
    window.history.pushState({}, '', url);
  }

  // Sort images by date
  const sortedImages = Object.fromEntries(
    Object.entries(window.DIGITALGOV_IMAGES).sort(([,a], [,b]) => 
      new Date(b.date) - new Date(a.date)
    )
  );

  // Initial display
  displayImages(sortedImages, currentPage);

  // Handle pagination clicks
  if (paginationContainer) {
    paginationContainer.addEventListener('click', (e) => {
      e.preventDefault();
      const link = e.target.closest('a');
      if (link) {
        const params = new URLSearchParams(new URL(link.href).search);
        const newPage = parseInt(params.get('page'));
        if (newPage) {
          currentPage = newPage;
          displayImages(sortedImages, currentPage);
          window.scrollTo(0, 0);
        }
      }
    });
  }
})();
