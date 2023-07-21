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

function scrollMenuBar(intersect) {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem || !menuBarLinks) return;
  if (intersect) {
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

function intersection(e) {
  if (!e.isIntersecting && e.boundingClientRect.top < 100) {
    if (window.innerWidth < deviceBreakpoint) {
      menuBarImageMobile.classList.add("sticky");
    } else {
      menuBarImageFull.classList.add("sticky");
    }
    menuBar.style.justifyContent = "space-evenly";
    scrollMenuBar(true);
  } else {
    menuBarImageMobile.classList.remove("sticky");
    menuBarImageFull.classList.remove("sticky");
    menuBar.style.justifyContent = "center";
    scrollMenuBar(false);
  }
}

const observer = new IntersectionObserver(([e]) => intersection(e), {
  rootMargin: "-1px 0px 0px 0px",
  threshold: [1],
});

observer.observe(menuBar);

document.addEventListener("DOMContentLoaded", () => {
  scrollMenuBar(false);
});
