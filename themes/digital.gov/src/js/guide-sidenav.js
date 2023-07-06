document.addEventListener("DOMContentLoaded", () => {
  const guideNav = document.querySelector(".dg-guide__nav-list");

  if (!guideNav) return;

  // add class to current sidenav list item
  const guideCurrentListItem = guideNav.querySelector(".usa-current");
  guideCurrentListItem.parentNode.classList.add("current");

  // apply style to previous list item to display guide progress
  const sidenavLinks = document.querySelectorAll(".usa-sidenav__item");

  // eslint-disable-next-line no-restricted-syntax
  for (const link of sidenavLinks) {
    if (link.classList.contains("current")) return;
    link.classList.add("usa-sidenav__item--read");
  }
});
