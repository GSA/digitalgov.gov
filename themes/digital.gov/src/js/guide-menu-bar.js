document.addEventListener("DOMContentLoaded", () => {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem) return;
  currentItem.scrollIntoView({ block: "nearest", inline: "center" });
});

const menuBar = document.querySelector(".dg-guide__menu-bar");
const menuBarImageContainer = document.querySelector(
  ".dg-guide__menu-bar-image"
);
const menuBarImage = document.createElement("img");
menuBarImage.src = "/img/digitalgov-logo.svg";
menuBarImage.alt = "Digital Gov Logo";
menuBarImage.style.maxWidth = "10rem";
menuBarImage.style.minWidth = "10rem";

function intersection(e) {
  if (!e.isIntersecting && e.boundingClientRect.top < 100) {
    menuBarImageContainer.appendChild(menuBarImage);
    menuBar.style.justifyContent = "space-evenly";
  } else {
    menuBar.style.justifyContent = "center";
    menuBarImage.remove();
  }
}

const observer = new IntersectionObserver(([e]) => intersection(e), {
  threshold: [1],
});

observer.observe(menuBar);
