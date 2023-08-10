// Return all of the h2 and h3 elements in the guide content body
function getHeadings() {
  const guideNav = document.querySelector(".dg-guide__nav-list");
  if (guideNav) {
    const body = document.querySelector(".dg-guide__content-body");
    if (body) {
      const headings = body.querySelectorAll(
        "h2:not(.dg-featured-resource__text-title), h3:not(.usa-accordion__heading)"
      );
      return headings;
    }
  }
  return [];
}

function scrollIntoView(element) {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const guideNav = document.querySelector(".dg-guide__nav-list");
  if (!guideNav) return;

  // Add "read" class to previously read sections
  const guideCurrentListItem = guideNav.querySelector(".usa-current");
  if (guideCurrentListItem) {
    guideCurrentListItem.parentNode.classList.add("current");
  }
  const sidenavLinks = document.querySelectorAll(".usa-sidenav__item");

  // eslint-disable-next-line no-restricted-syntax
  for (const link of sidenavLinks) {
    if (link.classList.contains("current")) break;
    link.classList.add("usa-sidenav__item--read");
  }

  // Add headings as subnav to current section
  const headings = getHeadings();
  const subList = document.createElement("ul");
  subList.classList.add("usa-sidenav__sublist");

  for (let i = 0; i < headings.length; i += 1) {
    // Clean heading text and create link to append to subnav
    const text = headings[i].innerText;
    const regex = /[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~“”‘’]/g;
    const cleanText = text.replace(regex, "");
    const textElements = cleanText.split(" ");
    const href = textElements.join("-").toLowerCase();
    const link = document.createElement("a");
    link.href = `#${href}`;
    link.innerText = text;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      scrollIntoView(link.getAttribute("href"));

      // This is necessary to account for a bug with multiple scroll listeners in Chromium browsers
      const menuBar = document.querySelector(".dg-guide__menu-bar");
      if (menuBar && !menuBar.classList.contains("sticky")) {
        setTimeout(() => {
          scrollIntoView(link.getAttribute("href"));
        }, 500);
      }
      const heading = document.querySelector(link.getAttribute("href"));
      heading.setAttribute("tabindex", -1);
      heading.focus({ preventScroll: true });
    });
    subList.appendChild(link);
  }
  const current = document.querySelector(".usa-sidenav__item.current");
  if (current) {
    current.appendChild(subList);
  }
});

// Highlight the current section heading in the sidenav
function setCurrentHeader() {
  const scrollOffset = 130; // Needed to account for height of sticky header
  const headings = getHeadings();
  const scrollPos = document.documentElement.scrollTop + scrollOffset;
  let topHeading = headings[0];
  let i = 0;
  let found = false;
  while (!found && i < headings.length) {
    if (scrollPos < headings[i].offsetTop) {
      found = true;
    } else {
      topHeading = headings[i];
    }
    i += 1;
  }
  if (!topHeading) return;
  const href = topHeading.id;
  const oldLink = document.querySelector(".usa-sidenav__sublist .dg-current");
  if (oldLink) {
    oldLink.removeAttribute("class"); // Don't leave behind an empty class
  }
  const currentLink = document.querySelector(
    `.usa-sidenav__sublist [href="#${href}"]`
  );
  if (!currentLink) return;
  currentLink.classList.add("dg-current");
}

window.addEventListener("scroll", setCurrentHeader);
