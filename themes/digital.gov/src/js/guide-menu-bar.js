// Uses manual breakpoints because USWDS breakpoints are not accessible within JS
const menuBarScrollOffsetDefault = 600;
let menuBarLinks = null;
let menuBarImage = null;
let menuBarContainer = null;
let guideContent = null;
let guideContainer = null;

const guideSideNav = document.querySelector(".dg-guide__nav");
const menuBar = document.querySelector(".dg-guide__menu-bar");

if (menuBar) {
  menuBarLinks = menuBar.querySelector(".dg-guide__menu-bar-links");
  menuBarImage = menuBar.querySelector(".dg-guide__menu-bar-image-container");
  menuBarContainer = menuBar.querySelector(".dg-guide__menu-bar-container");
  guideContent = document.querySelector(".dg-guide__content");
  guideContainer = document.querySelector(".dg-guide__container");
}

// Scroll the guide menu bar so that the currently selected item is in view
function scrollMenuBar(offset) {
  const currentItem = document.querySelector(".dg-guide__menu-bar .dg-current");
  if (!currentItem || !menuBarLinks) return;
  menuBarLinks.scrollLeft = currentItem.offsetLeft - offset;
}

/**
 * Dynamically adjust the padding on the menu bar links to keep
 * in alignment with dg-guide__content and HCD guides dg-guide__container
 * */
function adjustMenuPadding() {
  let container = null;
  if (guideSideNav) {
    container = guideContainer;
  } else {
    container = guideContent;
  }

  const containerStyles = window.getComputedStyle(container);
  const containerMarginLeft = parseFloat(containerStyles.marginLeft);
  const containerPaddingLeft = parseFloat(containerStyles.paddingLeft);

  // Get the width of the sibling element
  const menuBarImageStyles = window.getComputedStyle(menuBarImage);
  const menuBarMarginLeft = parseFloat(menuBarImageStyles.marginLeft);
  const menuBarMarginRight = parseFloat(menuBarImageStyles.marginRight);

  const menuBarImageOffsetWidth = menuBarImage.offsetWidth;
  const menuBarImageWidth =
    menuBarMarginLeft + menuBarMarginRight + menuBarImageOffsetWidth;
  const containerMargin = containerMarginLeft + containerPaddingLeft;

  // Calculate the new padding-left for the menu
  const newPaddingLeft = containerMargin - menuBarImageWidth;
  menuBarLinks.style.paddingLeft = `${newPaddingLeft}px`;
}

// Handler for intersection events between the menu bar and the window
function intersection(e) {
  // Check if menu bar intersected the top of the page
  if (!e.isIntersecting && e.boundingClientRect.top < 1) {
    menuBar.classList.add("sticky");
    menuBarContainer.classList.remove(
      "grid-container",
      "grid-container-desktop"
    );

    menuBarImage.removeAttribute("hidden");
    menuBarImage.setAttribute("tabindex", "0");
    // call function to reset the menubar when menuBarImage is displayed
    adjustMenuPadding();
    window.addEventListener("resize", adjustMenuPadding);
    // Menu bar is no longer intersecting
  } else {
    menuBarImage.setAttribute("hidden", "");
    menuBarImage.setAttribute("tabindex", "-1");
    menuBarLinks.style.paddingLeft = 0;
    menuBar.classList.remove("sticky");
    window.removeEventListener("resize", adjustMenuPadding);
    menuBarContainer.classList.add("grid-container", "grid-container-desktop");
    scrollMenuBar(menuBarScrollOffsetDefault);
  }
}

// Register an interaction observer to detect when the menu bar intersects with the window
const observer = new IntersectionObserver(([e]) => intersection(e), {
  rootMargin: "-1px 0px 0px 0px",
  threshold: [1],
});

// Scroll the menu bar to the correct location on page load
document.addEventListener("DOMContentLoaded", () => {
  if (menuBar) {
    observer.observe(menuBar);
  }
  scrollMenuBar(false);
});

// Adjust padding when the window resizes
