// Uses manual breakpoints because USWDS breakpoints are not accessible within JS
const deviceBreakpoint = 480;
const menuBarScrollOffsetMobile = 600;
const menuBarScrollOffsetFull = 600;
const menuBarScrollOffsetDefault = 600;
let menuBarLinks = null;
let menuBarImage = null;
let menuBarContainer = null;

const guideSideNav = document.querySelector(".dg-guide__nav");
const menuBar = document.querySelector(".dg-guide__menu-bar");
if (menuBar) {
  menuBarLinks = menuBar.querySelector(".dg-guide__menu-bar-links");
  menuBarImage = menuBar.querySelector(".dg-guide__menu-bar-image-container");
  menuBarContainer = menuBar.querySelector(".dg-guide__menu-bar-container");
}

// Scroll the guide menu bar so that the currently selected item is in view
function scrollMenuBar(offset) {
  const currentItem = document.querySelector(".dg-guide__menu-bar .dg-current");
  if (!currentItem || !menuBarLinks) return;
  menuBarLinks.scrollLeft = currentItem.offsetLeft - offset;
}

// Slightly adjust the padding on the menu bar links to keep in alignment with content and HCD guides
function applyGuideResponsivePadding() {
  if (guideSideNav) {
    menuBarLinks.style.paddingLeft = `calc(50vw - 38.75rem)`;
  } else {
    menuBarLinks.style.paddingLeft = `calc(50vw - 35rem)`;
  }
}

// Slightly adjust the padding on the menu bar links to keep in alignment with content and regular guides
function applyResponsivePadding() {
  if (window.matchMedia("(max-width: 87.5rem)").matches) {
    menuBarLinks.style.paddingLeft = `calc(50vw - 36rem)`;
  } else {
    menuBarLinks.style.paddingLeft = `calc(50vw - 35rem)`;
  }
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
    applyResponsivePadding();
    applyGuideResponsivePadding();
    menuBarImage.removeAttribute("hidden");
    menuBarImage.setAttribute("tabindex", "0");
    // Check if viewing on mobile device
    if (window.innerWidth < deviceBreakpoint) {
      scrollMenuBar(menuBarScrollOffsetMobile);
    } else {
      scrollMenuBar(menuBarScrollOffsetFull);
    }
    // Menu bar is no longer intersecting
  } else {
    menuBarImage.setAttribute("hidden", "");
    menuBarImage.setAttribute("tabindex", "-1");
    menuBarLinks.style.paddingLeft = 0;
    menuBar.classList.remove("sticky");
    menuBarContainer.classList.add("grid-container", "grid-container-desktop");
    scrollMenuBar(menuBarScrollOffsetDefault);
  }
}

// Register an interaction observer to detect when the menu bar intersects with the window
const observer = new IntersectionObserver(([e]) => intersection(e), {
  rootMargin: "-1px 0px 0px 0px",
  threshold: [1],
});

// Listen for window resize
window.addEventListener("resize", applyResponsivePadding);

// Scroll the menu bar to the correct location on page load
document.addEventListener("DOMContentLoaded", () => {
  if (menuBar) {
    observer.observe(menuBar);
  }
  scrollMenuBar(false);
});
