//Uses manual breakpoints and absolute URLs because USWDS and Hugo are not accessible within JS

const menuBarImageWidth = 150;
const menuBarImageWidthMobile = 30;
const menuBarScrollOffset = 40;
const deviceBreakpoint = 480;

const menuBar = document.querySelector(".dg-guide__menu-bar");
const menuBarImageContainer = document.querySelector(
  ".dg-guide__menu-bar-image"
);
const menuBarLinks = document.querySelector(".dg-guide__menu-bar-links");
const menuBarImage = Object.assign(document.createElement("img"), {
  src: "https://digital.gov/img/digitalgov-logo.svg",
  alt: "Digital Gov Logo",
});

Object.assign(menuBarImage.style, {
  maxWidth: `${menuBarImageWidth}px`,
  minWidth: `${menuBarImageWidth}px`,
  marginLeft: "1em",
  marginRight: "1em",
});

const menuBarImageMobile = Object.assign(document.createElement("img"), {
  src: "https://digital.gov/img/digit-100.svg",
  alt: "Digital Gov Logo Small",
});

Object.assign(menuBarImageMobile.style, {
  maxWidth: `${menuBarImageWidthMobile}px`,
  minWidth: `${menuBarImageWidthMobile}px`,
  marginLeft: "1em",
  marginRight: "1em",
});

function scrollMenuBar(intersect) {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem || !menuBarLinks) return;
  if (intersect) {
    if (window.innerWidth < deviceBreakpoint) {
      menuBarLinks.scrollLeft =
        currentItem.offsetLeft - menuBarImageWidthMobile - menuBarScrollOffset;
    } else {
      menuBarLinks.scrollLeft =
        currentItem.offsetLeft - menuBarImageWidth - menuBarScrollOffset;
    }
  } else {
    menuBarLinks.scrollLeft = currentItem.offsetLeft - menuBarScrollOffset;
  }
}

function intersection(e) {
  if (!e.isIntersecting && e.boundingClientRect.top < 100) {
    if (window.innerWidth < deviceBreakpoint) {
      menuBarImageContainer.appendChild(menuBarImageMobile);
    } else {
      menuBarImageContainer.appendChild(menuBarImage);
    }
    menuBar.style.justifyContent = "space-evenly";
    scrollMenuBar(true);
  } else {
    menuBar.style.justifyContent = "center";
    menuBarImage.remove();
    menuBarImageMobile.remove();
    scrollMenuBar(false);
  }
}

const observer = new IntersectionObserver(([e]) => intersection(e), {
  threshold: [1],
});

observer.observe(menuBar);

document.addEventListener("DOMContentLoaded", () => {
  scrollMenuBar(false);
});
