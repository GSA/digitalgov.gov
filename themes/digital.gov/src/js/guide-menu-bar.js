const menuBar = document.querySelector(".dg-guide__menu-bar");
const menuBarImageContainer = document.querySelector(
  ".dg-guide__menu-bar-image"
);
const menuBarLinks = document.querySelector(".dg-guide__menu-bar-links");
const menuBarImage = document.createElement("img");
const menuBarImageWidth = 150;
menuBarImage.src = "/img/digitalgov-logo.svg";
menuBarImage.alt = "Digital Gov Logo";
menuBarImage.style.maxWidth = menuBarImageWidth + "px";
menuBarImage.style.minWidth = menuBarImageWidth + "px";

function intersection(e) {
  if (!e.isIntersecting && e.boundingClientRect.top < 100) {
    menuBarImageContainer.appendChild(menuBarImage);
    menuBar.style.justifyContent = "space-evenly";
    scrollMenuBar(true);
  } else {
    menuBar.style.justifyContent = "center";
    menuBarImage.remove();
    scrollMenuBar(false);
  }
}

const observer = new IntersectionObserver(([e]) => intersection(e), {
  threshold: [1],
});

observer.observe(menuBar);

function scrollMenuBar(intersect) {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem || !menuBarLinks) return;
  if (intersect) {
    menuBarLinks.scrollLeft = currentItem.offsetLeft - menuBarImageWidth - 100;
  } else {
    menuBarLinks.scrollLeft = currentItem.offsetLeft - 100;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  scrollMenuBar(false);
});
