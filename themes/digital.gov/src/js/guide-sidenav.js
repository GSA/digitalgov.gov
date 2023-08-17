/**
 * Javscript code for the secondary navigation on the left side of guide pages
 */

let guideNav = null;
let guideContentBody = null;
let guideCurrentListItem = null;
let sidenavLinks = null;
let guideMenuBar = null;
const scrollOffset = 130; // Needed to account for height of sticky header

/**
 * Query the document for the relevant elements and assign them to variables
 */
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
  const element = document.getElementById(attribute.slice(1));
  element.scrollIntoView({
    behavior: "smooth",
  });
}

/**
 * Event that's fired when an in-page navigation link is clicked
 * @param {event} event fired when link is clicked
 * @param {element} link element with href to scroll to
 */
function createLinkAction(event, link) {
  event.preventDefault();
  const href = link.getAttribute("href");
  scrollIntoView(href);

  // This is necessary to account for a bug with simultaneous scrolling in Chromium browsers
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1043933
  if (guideMenuBar && !guideMenuBar.classList.contains("sticky")) {
    setTimeout(() => {
      scrollIntoView(href);
    }, 500);
  }
  const heading = document.getElementById(href.slice(1));
  heading.setAttribute("tabindex", -1);
  heading.focus({ preventScroll: true });
}

/**
 * Create a link element given inner text and an href
 * @param {string} text
 * @param {string} href
 * @returns {element} resulting link element
 */
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

/**
 * Convert a document heading to a clean link
 * @param {string} heading to be converted
 * @returns {string} cleaned text
 */
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

/**
 * Helper function to determine the number of times a value appears in an array
 * @param {array} array of elements
 * @param {*} value to search for in the array
 * @returns {int} count of the number of times the element appears
 */
function getOccurrences(array, value) {
  let count = 0;
  array.forEach((v) => {
    if (v === value) {
      count += 1;
    }
  });
  return count;
}

/**
 * For each heading, append a link object to an array
 * @returns {array} array of links corresponding to each heading
 */
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

/**
 * For each link on the page, append an item to the sublist
 */
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

/**
 * Recursive helper function to identify the top heading that has been scrolled to
 * @param {int} i counter of the number of headings that have been searched
 * @param {boolean} found whether or not the top heading has been found
 * @param {int} scrollPos the current scroll position
 * @param {array} headings all of the headings on the page
 * @param {element} topHeading the current heading element
 */
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

/**
 * Highlight the current header in the side navigation
 */
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

/**
 * On scroll events, set the current header
 * https://gomakethings.com/debouncing-your-javascript-events/
 */
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

/**
 * On content load, do the following:
 * 1. Query the document for a side navigation element
 * 2. Initialize the rest of the relevant elements
 * 3. Style the already-read elements
 * 4. Add all of the section headers as a sublist of the current section
 * 5. Listen for scroll events and update the current section accordingly
 */
document.addEventListener("DOMContentLoaded", () => {
  // Check if navigation is present on page
  guideNav = document.querySelector(".dg-guide__nav-list");
  if (!guideNav) return;
  initializeElements();
  setupLinkStyles();
  createSublist();
  listenForScroll();
});
