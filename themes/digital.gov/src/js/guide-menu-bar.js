document.addEventListener("DOMContentLoaded", () => {
  const currentItem = document.querySelector(".menu-bar-guide #current");
  if (!currentItem) return;
  currentItem.scrollIntoView({ block: "nearest", inline: "center" });
});
