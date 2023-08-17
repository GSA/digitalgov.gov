/**
 * Javscript code for the secondary navigation on the left side of guide pages
 */

let guideNav = null;
let guideContentBody = null;
let guideCurrentListItem = null;
let sidenavLinks = null;
let guideMenuBar = null;
const scrollOffset = 130; // Needed to account for height of sticky header

function initializeElements() {
  guideContentBody = document.querySelector(".dg-guide__content-body");
  guideCurrentListItem = guideNav.querySelector(".usa-current");
  sidenavLinks = document.querySelectorAll(".usa-sidenav__item");
  guideMenuBar = document.querySelector(".dg-guide__menu-bar");
}

/**
 * Helper function to style previously read sections
 */
function setupLinkStyles() {
  if (guideCurrentListItem) {
    guideCurrentListItem.parentNode.classList.add("current");
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const link of sidenavLinks) {
    if (link.classList.contains("current")) break;
    link.classList.add("usa-sidenav__item--read");
  }
}

/**
 * Helper function to apply scrollIntoView onto an element with a certain attribute
 * @param {string} attribute of the element to scroll into view
 */
function scrollIntoView(attribute) {
  const element = document.querySelector(attribute);
  element.scrollIntoView({
    behavior: "smooth",
  });
}

function createLinkAction(event, link) {
  event.preventDefault();
  const href = link.getAttribute("href");
  scrollIntoView(href);

  // This is necessary to account for a bug with simultaneous scrolling in Chromium browsers
  if (guideMenuBar && !guideMenuBar.classList.contains("sticky")) {
    setTimeout(() => {
      scrollIntoView(href);
    }, 500);
  }
  const heading = document.querySelector(href);
  heading.setAttribute("tabindex", -1);
  heading.focus({ preventScroll: true });
}

function createLink(text, href) {
  const link = document.createElement("a");
  link.href = `#${href}`;
  link.innerText = text;
  link.addEventListener("click", (e) => createLinkAction(e, link));
  return link;
}

/**
 * Return all of the h2 and h3 elements in the guide content body
 * @returns {array} array of h2, h3 tags
 */
function getHeadings() {
  if (guideNav && guideContentBody) {
    // Markdown h2, h3 have no classes, so we can filter for all non content headers
    const headings = guideContentBody.querySelectorAll(
      "h2:not([class]), h3:not([class])"
    );
    return headings;
  }
  return [];
}

function headingToLink(heading) {
  const link = heading.textContent
    .toLowerCase()
    // Replace non-alphanumeric characters with dashes
    .replace(/[^a-z\d]/g, "-")
    // Replace a sequence of two or more dashes with a single dash
    .replace(/-{2,}/g, "-")
    // Trim leading or trailing dash (there should only ever be one)
    .replace(/^-|-$/g, "");

  return link;
}

function getOccurrences(array, value) {
  let count = 0;
  array.forEach((v) => {
    if (v === value) {
      count += 1;
    }
  });
  return count;
}

function createLinks() {
  const pastHrefs = [];
  const links = [];
  const headings = getHeadings();

  headings.forEach((heading) => {
    let href = headingToLink(heading);
    const occurrences = getOccurrences(pastHrefs, href);
    pastHrefs.push(href);
    if (occurrences >= 1) {
      href += `-${occurrences}`;
    }
    const link = createLink(heading.textContent, href);
    links.push(link);
  });

  return links;
}

function createSublist() {
  const subList = document.createElement("ul");
  subList.classList.add("usa-sidenav__sublist");
  const links = createLinks();
  links.forEach((link) => {
    const subItem = document.createElement("li");
    subItem.classList.add("usa-sidenav__item");
    subItem.appendChild(link);
    subList.appendChild(subItem);
  });
  const currentItem = document.querySelector(".usa-sidenav__item.current");
  if (currentItem) {
    currentItem.appendChild(subList);
  }
}

function findTopHeading(
  i,
  found,
  scrollPos,
  headings,
  topHeading = headings[0]
) {
  // Base case
  if (i >= headings.length || found) {
    return topHeading;
  }

  // Recursive case
  /* eslint-disable no-param-reassign */
  if (scrollPos < headings[i].offsetTop) {
    found = true;
  } else {
    topHeading = headings[i];
  }
  return findTopHeading(i + 1, found, scrollPos, headings, topHeading);
}

// Highlight the current section heading in the sidenav
function setCurrentHeader() {
  const headings = getHeadings();
  const scrollPos = document.documentElement.scrollTop + scrollOffset;
  const topHeading = findTopHeading(0, false, scrollPos, headings);

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

// https://gomakethings.com/debouncing-your-javascript-events/
function listenForScroll() {
  let timeout;
  window.addEventListener(
    "scroll",
    () => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(setCurrentHeader);
    },
    false
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Check if navigation is present on page
  guideNav = document.querySelector(".dg-guide__nav-list");
  if (!guideNav) return;
  initializeElements();
  setupLinkStyles();
  createSublist();
  listenForScroll();
});
