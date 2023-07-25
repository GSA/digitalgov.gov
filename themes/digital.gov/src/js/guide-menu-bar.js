// Uses manual breakpoints because USWDS breakpoints are not accessible within JS
const deviceBreakpoint = 480;
const menuBarScrollOffsetMobile = 80;
const menuBarScrollOffsetFull = 240;
const menuBarScrollOffsetDefault = 30;

const menuBar = document.querySelector(".dg-guide__menu-bar");
const menuBarLinks = document.querySelector(".dg-guide__menu-bar-links");
const menuBarImageFull = document.querySelector(
  ".dg-guide__menu-bar-image.full"
);
const menuBarImageMobile = document.querySelector(
  ".dg-guide__menu-bar-image.mobile"
);

// Automatically scroll the guide menu bar so that the currently selected item is in view
// Scroll the distance that the currently selected item is offset from the edge, minus a certain correction factor (to account for the width of the logo)
function scrollMenuBar(intersect) {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem || !menuBarLinks) return;
  // Check if the menu bar is "stuck" to the top of the page (and thus if the logo is being displayed)
  if (intersect) {
    // Check if the menu bar is being viewed on mobile
    if (window.innerWidth < deviceBreakpoint) {
      menuBarLinks.scrollLeft =
        currentItem.offsetLeft - menuBarScrollOffsetMobile;
    } else {
      menuBarLinks.scrollLeft =
        currentItem.offsetLeft - menuBarScrollOffsetFull;
    }
  } else {
    menuBarLinks.scrollLeft =
      currentItem.offsetLeft - menuBarScrollOffsetDefault;
  }
}

// Handler for intersection events between the menu bar and the window
function intersection(e) {
  if (!e.isIntersecting && e.boundingClientRect.top < 100) {
    // Menu bar has intersected the top of the page
    if (window.innerWidth < deviceBreakpoint) {
      menuBarImageMobile.classList.add("sticky");
    } else {
      menuBarImageFull.classList.add("sticky");
    }
    menuBar.style.justifyContent = "space-evenly";
    scrollMenuBar(true);
  } else {
    // Menu bar is no longer stuck to the top of the page
    menuBarImageMobile.classList.remove("sticky");
    menuBarImageFull.classList.remove("sticky");
    menuBar.style.justifyContent = "center";
    scrollMenuBar(false);
  }
}

// Register an interaction observer to detect when the menu bar intersects with the window
const observer = new IntersectionObserver(([e]) => intersection(e), {
  rootMargin: "-1px 0px 0px 0px",
  threshold: [1],
});

if (menuBar) {
  observer.observe(menuBar);
}

// Scroll the menu bar to the correct location on page load
document.addEventListener("DOMContentLoaded", () => {
  scrollMenuBar(false);
});
