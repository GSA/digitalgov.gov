const menuBar = document.querySelector(".dg-guide__menu-bar");
const menuBarImageContainer = document.querySelector(
  ".dg-guide__menu-bar-image"
);
const menuBarLinks = document.querySelector(".dg-guide__menu-bar-links");
const menuBarImage = document.createElement("img");
menuBarImage.src = "/img/digitalgov-logo.svg";
menuBarImage.alt = "Digital Gov Logo";
menuBarImage.style.maxWidth = "10rem";
menuBarImage.style.minWidth = "10rem";

function intersection(e) {
  if (!e.isIntersecting && e.boundingClientRect.top < 100) {
    menuBarImageContainer.appendChild(menuBarImage);
    menuBar.style.justifyContent = "space-evenly";
    scrollMenuBar();
  } else {
    menuBar.style.justifyContent = "center";
    menuBarImage.remove();
    scrollMenuBar();
  }
}

const observer = new IntersectionObserver(([e]) => intersection(e), {
  threshold: [1],
});

observer.observe(menuBar);

function scrollMenuBar() {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem || !menuBarLinks) return;
  menuBarLinks.scrollIntoView({  block: "none", inline: "end" });
}

document.addEventListener("DOMContentLoaded", () => {
  scrollMenuBar();
});
