document.addEventListener("DOMContentLoaded", () => {
  const relatedItems = document.querySelector(".content__related-items");
  const inPageNav = document.querySelector(".usa-in-page-nav__nav");
  const navItems = document.querySelectorAll("li.usa-in-page-nav__item:not(.usa-in-page-nav__item--sub-item)");

  console.log(navItems.length);

  if (!relatedItems) {
    return;
  }

  if (navItems.length < 3) {
    inPageNav.remove();
    return;
  }

  relatedItems.before(inPageNav);
});