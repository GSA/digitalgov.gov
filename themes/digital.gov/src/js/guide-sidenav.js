document.addEventListener("DOMContentLoaded", () => {
  // add class to current sidenav list item
  const guideCurrentListItem = document.querySelector(
    ".usa-sidenav .usa-current"
  );
  guideCurrentListItem.parentNode.classList.add("current");

  // apply style to previous list item to display guide progress
  const sidenavLinks = document.querySelectorAll(".usa-sidenav__item");
  for (const link of sidenavLinks) {
    if (link.classList.contains("current")) return;
    link.classList.add("usa-sidenav__item--read");
  }
});
