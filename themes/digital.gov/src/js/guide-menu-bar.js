// Uses manual breakpoints because USWDS breakpoints are not accessible within JS
const deviceBreakpoint = 480;
const menuBarScrollOffsetMobile = 80;
const menuBarScrollOffsetFull = 240;
const menuBarScrollOffsetDefault = 30;

const menuBar = document.querySelector(".dg-guide__menu-bar");
const menuBarLinks = menuBar.querySelector(".dg-guide__menu-bar-links");
const menuBarImageFull = menuBar.querySelector(
  ".dg-guide__menu-bar-image.full"
);
const menuBarImageMobile = menuBar.querySelector(
  ".dg-guide__menu-bar-image.mobile"
);

// Scroll the guide menu bar so that the currently selected item is in view
function scrollMenuBar(offset) {
  const currentItem = document.querySelector(".dg-guide__menu-bar .dg-current");
  if (!currentItem || !menuBarLinks) return;
  menuBarLinks.scrollLeft = currentItem.offsetLeft - offset;
}

// Handler for intersection events between the menu bar and the window
function intersection(e) {
  // Check if menu bar intersected the top of the page
  if (!e.isIntersecting && e.boundingClientRect.top < 1) {
    menuBar.classList.add("sticky");

    // Check if viewing on mobile device
    if (window.innerWidth < deviceBreakpoint) {
      menuBarImageMobile.removeAttribute("hidden");
      scrollMenuBar(menuBarScrollOffsetMobile);
    } else {
      menuBarImageFull.removeAttribute("hidden");
      scrollMenuBar(menuBarScrollOffsetFull);
    }
    // Menu bar is no longer intersecting
  } else {
    menuBarImageMobile.setAttribute("hidden", "");
    menuBarImageFull.setAttribute("hidden", "");
    menuBar.classList.remove("sticky");
    scrollMenuBar(menuBarScrollOffsetDefault);
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
