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

  // Filter out items with ring class
  navItems.forEach((item) => {
    const targetId = item.querySelector("a").getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement && targetElement.closest(".dg-ring")) {
      const newItem = item;
      newItem.style.display = "none";
    }
  });
});
