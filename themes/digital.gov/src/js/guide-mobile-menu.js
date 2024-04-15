const deviceBreakpoint = 480;
const dgGuideMenuBar = document.querySelector(".dg-guide__menu-bar");
const dgAccordionMobileMenu = document.querySelector(
  ".dg-accordion-mobile-menu"
);
const dgAccordionHeader = document.querySelector(
  ".dg-accordion-mobile-menu--heading"
);
const dgAccordionButton = document.querySelector(
  ".dg-accordion-mobile-menu .usa-accordion__button"
);
const dgAccordionContent = document.querySelector(
  ".dg-accordion-mobile-menu .usa-accordion__content"
);

/**
 * Update usa-accordion state to hidden on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  dgAccordionButton.setAttribute("aria-expanded", false);
  dgAccordionContent.setAttribute("hidden", true);
});

/**
 * Toggle display of desktop and mobile menus
 */
if (window.innerWidth < deviceBreakpoint) {
  dgAccordionMobileMenu.style.display = "block";
  dgGuideMenuBar.style.display = "none";
} else {
  dgAccordionMobileMenu.style.display = "none";
  dgGuideMenuBar.style.display = "flex";
}
/**
 * Toggle the background color on the graphics header
 * @param {object} event
 */
function handleMouseEvent(event) {
  if (event.type === "mouseenter") {
    dgAccordionHeader.style.backgroundColor = "#dfe1e2";
  } else if (event.type === "mouseleave") {
    dgAccordionHeader.style.backgroundColor = "#edeff0";
  }
}

/**
 * Listen for mouse enter/leave on accordion button to toggle background color to match for the icon
 */
function toggleBackgroundColor() {
  dgAccordionButton.addEventListener("mouseenter", handleMouseEvent);
  dgAccordionButton.addEventListener("mouseleave", handleMouseEvent);
}

toggleBackgroundColor();
