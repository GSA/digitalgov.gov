// This code was adapted from the 18F glossary component
// https://github.com/18F/glossary/tree/master

const List = require("list.js");

const KEYCODE_ESC = 27;
const KEYCODE_TAB = 9;

const selectors = {
  close: ".dg-glossary__close",
  container: ".dg-glossary__container",
  list: ".dg-glossary__list",
  search: ".dg-glossary__search",
  toggle: ".dg-glossary__toggle",
};

const cssClasses = {
  definition: "dg-glossary__definition",
  item: "dg-glossary__item",
  icon: "dg-glossary__icon",
  term: "dg-glossary__term",
};

const glossaryBody = document.querySelector(selectors.container);
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
  toggleButtons = document.body.querySelectorAll(selectors.toggle);
  listElement = glossaryBody.querySelector(selectors.list);
  search = glossaryBody.querySelector(selectors.search);
  closeButton = glossaryBody.querySelector(selectors.close);
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
    <button class="${values.termClass}" aria-controls="${id}" disabled>${values.term}</button>
    <svg id="${id}-icon" class="${values.iconClass} usa-icon dg-icon dg-icon--large" aria-hidden="true" focusable="false" role="img" hidden>
      <use class="${values.iconClass}"xlink:href="${glossaryIcon}"></use>
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
  const listClass = selectors.list.slice(1);
  const searchClass = selectors.search.slice(1);
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
    e.target.setAttribute(
      "aria-expanded",
      e.target.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
    glossaryBody
      .querySelectorAll(`#${termNumber}, #${termNumber}-icon`)
      .forEach((definition) => definition.toggleAttribute("hidden"));
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
    if (e.keyCode === KEYCODE_ESC) {
      hideGlossary();
    }
  });

  /**
   * Close glossary when clicking outside of aside (and not on toggle button)
   * @param {event} e to handle click on document body
   */
  document.body.addEventListener("click", (e) => {
    const buttons = Array.from(toggleButtons);
    if (!buttons.includes(e.target)) {
      if (!glossaryBody.contains(e.target)) {
        hideGlossary();
      }
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
    if (e.keyCode === KEYCODE_TAB) {
      search.focus();
    }
  });

  /**
   * When the last element in the list is reached, focus the top of the glossary
   * @param {event} e to handle tab key press (changing focus)
   */
  listElement.lastChild.firstElementChild.addEventListener("keydown", (e) => {
    if (e.keyCode === KEYCODE_TAB) {
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
if (glossaryBody) {
  if (glossaryPath) {
    initializeGlossary(glossaryPath);
  }
}
