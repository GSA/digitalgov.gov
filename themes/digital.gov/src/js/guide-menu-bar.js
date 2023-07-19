document.addEventListener("DOMContentLoaded", () => {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem) return;
  currentItem.scrollIntoView({ block: "nearest", inline: "center" });
});

const menuBar = document.querySelector(".dg-guide__menu-bar");
const menuBarImage = document.querySelector(".dg-guide__menu-bar-image");

function intersection(e) {
  if (!e.isIntersecting && e.boundingClientRect.top < 100) {
    menuBarImage.style.visibility = "visible";
  } else {
    menuBarImage.style.visibility = "hidden";
  }
  menuBarImage.classList.toggle('isSticky');
}

const observer = new IntersectionObserver( 
  ([e]) => intersection(e),
  {threshold: [1]}
);

observer.observe(menuBar);