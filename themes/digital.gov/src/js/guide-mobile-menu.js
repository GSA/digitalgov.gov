const dgGuideMenuBar = document.querySelector(".dg-guide__menu-bar");
const dgAccordionMobileMenu = document.querySelector(
  ".dg-accordion-mobile-menu"
);
const dgAccordionHeader = document.querySelector(
  ".dg-accordion-mobile-menu__heading"
);
const dgAccordionButton = document.querySelector(
  ".dg-accordion-mobile-menu .usa-accordion__button"
);
const dgAccordionContent = document.querySelector(
  ".dg-accordion-mobile-menu .usa-accordion__content"
);

const desktopBreakpoint = window.matchMedia("(min-width: 480px)");

/**
 *  Reset menu based on screen size
 *
 * @param {MediaQueryList} breakpoint
 */
function handleResize(breakpoint) {
  if (breakpoint.matches) {
    dgAccordionMobileMenu.style.display = "none";
    dgGuideMenuBar.style.display = "flex";
  } else {
    dgAccordionMobileMenu.style.display = "block";
    dgGuideMenuBar.style.display = "none";
  }
}

/**
 * Update usa-accordion state to collapsed on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  dgAccordionButton.setAttribute("aria-expanded", false);
  dgAccordionContent.setAttribute("hidden", true);
});

/**
 * Toggle the background color on the graphics header to match the accordion header
 * and style the sections button with token blue-warm-20v
 * @param {object} event
 */
function handleMouseEvent(event) {
  if (event.type === "mouseenter") {
    dgAccordionHeader.style.backgroundColor = "#dfe1e2";
    dgAccordionButton.style.backgroundColor = "#adcdff";
  } else if (event.type === "mouseleave") {
    dgAccordionHeader.style.backgroundColor = "#edeff0";
    dgAccordionButton.style.backgroundColor = "#adcdff";
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
handleResize(desktopBreakpoint);
desktopBreakpoint.addEventListener("change", handleResize);
