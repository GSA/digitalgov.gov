// This code was adapted from the 18F glossary component
// https://github.com/18F/glossary/tree/master

const List = require("list.js");

const cssClasses = {
  close: "dg-glossary__close",
  container: "dg-glossary__container",
  definition: "dg-glossary__definition",
  icon: "dg-glossary__icon",
  item: "dg-glossary__item",
  list: "dg-glossary__list",
  search: "dg-glossary__search",
  term: "dg-glossary__term",
  toggle: "dg-glossary__toggle",
};

const glossaryBody = document.querySelector(`.${cssClasses.container}`);
let listElement = null;
let search = null;
let toggleButtons = null;
let toggleButtonTrigger = null;
let closeButton = null;
let list = null;
let definitions = null;

/**
 * Query the document for glossary elements and assign them to the relevant variables
 */

function initializeElements() {
  toggleButtons = document.body.querySelectorAll(`.${cssClasses.toggle}`);
  closeButton = glossaryBody.querySelector(`.${cssClasses.close}`);
  listElement = glossaryBody.querySelector(`.${cssClasses.list}`);
  search = glossaryBody.querySelector(`.${cssClasses.search}`);
}

/**
 * Generate glossary term markup
 * @param {object} values object of glossary term & definition data from json, class and aria values for markup
 * @returns {string} template string of list markup
 */

function itemTemplate(values) {
  /* eslint-disable no-undef */
  const id = `glossary-term-${values.termId}`;
  const template = `<li class="${values.itemClass}">
    <button class="${values.termClass}" aria-controls="${id}" aria-expanded="false" disabled>${values.term}</button>
    <svg id="${id}-icon" class="${values.iconClass} usa-icon dg-icon dg-icon--large" aria-hidden="true" focusable="false" role="img">
      <use xlink:href="${glossaryIcon}"></use>
    </svg>
    <div id="${id}" class="${values.definitionClass}" hidden>${values.definition}</div>
  </li>`;
  return template;
}

/**
 * Generate list markup and insert into list element to display
 * @param {object} terms json data list of terms and definitions
 */

function generateListMarkup(terms) {
  let termsMarkup = "";
  terms.forEach((term, i) => {
    const values = {
      term: term.term,
      definition: term.definition,
      definitionClass: cssClasses.definition,
      itemClass: cssClasses.item,
      termClass: cssClasses.term,
      iconClass: cssClasses.icon,
      termId: i,
    };
    termsMarkup += itemTemplate(values);
  });
  listElement.insertAdjacentHTML("beforeend", termsMarkup);
}

/**
 * Construct new list object from list.js library
 */

function initializeList() {
  const listClass = cssClasses.list;
  const searchClass = cssClasses.search;
  const options = {
    valueNames: [cssClasses.term],
    listClass,
    searchClass,
  };
  list = new List(glossaryBody, options);
  definitions = glossaryBody.querySelectorAll(`.${cssClasses.term}`);
}

/**
 * Hide glossary and disable all focusable elements
 */

function hideGlossary() {
  if (toggleButtonTrigger) {
    glossaryBody.setAttribute("aria-hidden", "true");
    closeButton.setAttribute("disabled", "");
    search.setAttribute("disabled", "");
    definitions.forEach((definition) =>
      definition.setAttribute("disabled", "")
    );
    toggleButtonTrigger.focus({ preventScroll: true });
    toggleButtonTrigger = null;
  }
}

/**
 * Show glossary and enable all focusable elements
 * @param {element} toggleButton button which was clicked to open the glossary
 */

function showGlossary(toggleButton) {
  if (!toggleButtonTrigger) {
    glossaryBody.setAttribute("aria-hidden", "false");
    closeButton.removeAttribute("disabled");
    search.removeAttribute("disabled");
    search.focus();
    definitions.forEach((definition) => definition.removeAttribute("disabled"));
    toggleButtonTrigger = toggleButton;
  } else {
    hideGlossary();
  }
}

/**
 * Toggle glossary term expansion when clicked
 * @param {event} event fired when term is clicked
 */

function handleTermClick(e) {
  if (e.target.matches(`.${cssClasses.term}`)) {
    const termNumber = e.target.getAttribute("aria-controls");
    const isTermExpanded = e.target.getAttribute("aria-expanded");
    e.target.setAttribute("aria-expanded", !isTermExpanded);
    glossaryBody
      .querySelectorAll(`#${termNumber}`)
      .forEach((definition) => definition.toggleAttribute("hidden"));
    glossaryBody
      .querySelectorAll(`#${termNumber}-icon`)
      .forEach((icon) => icon.classList.toggle("active"));
  }
}

function initializeEventListeners() {
  /**
   * Open glossary when toggle button is clicked
   */
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => showGlossary(button));
  });

  /**
   * Close glossary on escape keypress
   * @param {event} e to handle keycode lookup when "escape" is pressed
   */
  document.body.addEventListener("keyup", (e) => {
    if (e.code === "Escape") {
      hideGlossary();
    }
  });

  /**
   * Close glossary when clicking outside of aside (and not on toggle button)
   * @param {event} e to handle click on document body
   */
  document.body.addEventListener("click", (e) => {
    const buttons = Array.from(toggleButtons);
    if (!buttons.includes(e.target) && !glossaryBody.contains(e.target)) {
      hideGlossary();
    }
  });

  /**
   * Close glossary when close button is clicked
   */
  closeButton.addEventListener("click", hideGlossary);

  /**
   * When the first item (close button) is reached, refocus the top of glossary
   * @param {event} e to handle tab key press (changing focus)
   */
  closeButton.addEventListener("keydown", (e) => {
    if (e.code === "Tab") {
      search.focus();
    }
  });

  /**
   * When the last element in the list is reached, focus the top of the glossary
   * @param {event} e to handle tab key press (changing focus)
   */
  listElement.lastChild.firstElementChild.addEventListener("keydown", (e) => {
    if (e.code === "Tab") {
      search.focus();
    }
  });

  /**
   * Filter glossary terms on search
   */
  search.addEventListener("input", () => {
    if (list.filtered) {
      list.filter();
    }
  });

  /**
   * When a glossary term is clicked, toggle the definition expansion
   */
  glossaryBody.addEventListener("click", (e) => handleTermClick(e));
}

/**
 * Initialize the glossary DOM elements
 * Fetch the glossary terms from the "glossaryPath" variable set in baseof.html
 * Generate list markup, initialize new list, and initialize event listeners
 * @param {string} path relative path to the json file with terms
 */

async function initializeGlossary(path) {
  initializeElements();

  const response = await fetch(path);
  if (!response.ok) return;
  const terms = await response.json();

  generateListMarkup(terms);

  initializeList();

  initializeEventListeners();
}

/* eslint-disable no-undef */
if (glossaryBody && glossaryPath) {
  initializeGlossary(glossaryPath);
}
