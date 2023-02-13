document.addEventListener("DOMContentLoaded", (event) => {
  let relatedItems = document.querySelector(".content__related-items");
  let inPageNav = document.querySelector(".usa-in-page-nav__nav");

  if (relatedItems) {
    relatedItems.before(inPageNav);
  }
});