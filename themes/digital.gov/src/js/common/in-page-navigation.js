document.addEventListener("DOMContentLoaded", () => {
  const relatedItems = document.querySelector(".content__related-items");
  const inPageNav = document.querySelector(".usa-in-page-nav__nav");
  const inPageNavHeader = inPageNav.querySelector(".usa-in-page-nav__heading");
  const navItems = document.querySelectorAll("li.usa-in-page-nav__item:not(.usa-in-page-nav__item--sub-item)");



  if (!relatedItems) {
    return;
  }

  if (navItems.length < 3) {
    inPageNav.style.display = "none";
    return;
  }

  inPageNavHeader.removeAttribute('tabindex');
  relatedItems.before(inPageNav);
});