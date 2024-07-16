// Only show the in-page navigation when 3 or more nav items are present on the page
// Only display h2's as the primary nav items and set h3 and h4 sub-items to display: none

document.addEventListener("DOMContentLoaded", () => {
  const relatedItems = document.querySelector("[data-related-items]");
  const inPageNav = document.querySelector(".usa-in-page-nav__nav");
  const inPageNavHeader = document.querySelector(".usa-in-page-nav__heading");
  const navItems = document.querySelectorAll(
    "li.usa-in-page-nav__item:not(.usa-in-page-nav__item--sub-item)"
  );

  if (inPageNav && navItems.length < 3) {
    inPageNav.style.display = "none";
    return;
  }

  if (!relatedItems) {
    return;
  }

  inPageNavHeader.removeAttribute("tabindex");
  relatedItems.before(inPageNav);

  // Hide nav links when they are a child of a ring component
  navItems.forEach((item) => {
    const targetId = item.querySelector("a").getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement && targetElement.closest(".dg-ring")) {
      const newItem = item;
      newItem.style.display = "none";
    }
  });
});
