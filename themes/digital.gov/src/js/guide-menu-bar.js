document.addEventListener("DOMContentLoaded", () => {
  const currentItem = document.querySelector(".dg-guide__menu-bar #current");
  if (!currentItem) return;
  currentItem.scrollIntoView({ block: "nearest", inline: "center" });
});
