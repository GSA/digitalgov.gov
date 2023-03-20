document.addEventListener("DOMContentLoaded", () => {
  const relatedItems = document.querySelector(".content__related-items");
  const inPageNav = document.querySelector(".usa-in-page-nav__nav");
  const inPageNavHeader = document.querySelector(".usa-in-page-nav__heading");
  const navItems = document.querySelectorAll("li.usa-in-page-nav__item:not(.usa-in-page-nav__item--sub-item)");

  if (navItems.length < 3) {
    inPageNav.style.display = "none";
    return;
  }

  if (!relatedItems) {
    return;
  }

  inPageNavHeader.removeAttribute('tabindex');
  relatedItems.before(inPageNav);
});