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
const listElement = document.querySelector(selectors.list);
const search = document.querySelector(selectors.search);
const toggleButtons = document.querySelectorAll(selectors.toggle);
const closeButton = document.querySelector(selectors.close);
let list = null;
let trigger = null;

function itemTemplate(values) {
  /* eslint-disable no-undef */
  const id = `glossary-term-${values.termId}`;
  const template = `<li class="${values.itemClass}">
    <button class="${values.termClass}" aria-controls="${id}">${values.term}</button>
    <svg id="${id}" class="${values.iconClass} usa-icon dg-icon dg-icon--large" aria-hidden="true" focusable="false" role="img" hidden>
      <use class="${values.iconClass}"xlink:href="${glossaryIcon}"></use>
    </svg>
    <div id="${id}" class="${values.definitionClass}" hidden>${values.definition}</div>
  </li>`;
  return template;
}

function showGlossary(button) {
  glossaryBody.setAttribute("aria-hidden", "false");
  search.focus();
  trigger = button;
}

function hideGlossary() {
  if (trigger) {
    glossaryBody.setAttribute("aria-hidden", "true");
    trigger.focus();
    trigger = null;
  }
}

function handleTermClick(e) {
  if (e.target.matches(`.${cssClasses.term}`)) {
    const termNumber = e.target.getAttribute("aria-controls");
    e.target.setAttribute(
      "aria-expanded",
      e.target.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
    glossaryBody
      .querySelectorAll(`#${termNumber}`)
      .forEach((definition) => definition.toggleAttribute("hidden"));
  }
}

async function initializeList(path) {
  const response = await fetch(path);
  const terms = await response.json();
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

  // When the last element in the list is reached, focus the top of the glossary
  listElement.lastChild.firstElementChild.addEventListener("keydown", (e) => {
    if (e.keyCode === KEYCODE_TAB) {
      search.focus();
    }
  });

  const listClass = selectors.list.slice(1);
  const searchClass = selectors.search.slice(1);
  const options = {
    valueNames: [cssClasses.term],
    listClass,
    searchClass,
  };
  list = new List(glossaryBody, options);
}

if (glossaryBody) {
  // Fetch the glossary terms from the "glossaryPath" variable set in baseof.html
  /* eslint-disable no-undef */
  if (glossaryPath) {
    initializeList(glossaryPath);
  }

  // Open the glossary when toggle buttons are clicked
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => showGlossary(button));
  });

  // Hide the glossary when the close button is clicked, the escape key is pressed, or the user clicks outside of the glossary
  document.body.addEventListener("keyup", (e) => {
    if (e.keyCode === KEYCODE_ESC) {
      hideGlossary();
    }
  });

  document.body.addEventListener("click", (e) => {
    const buttons = Array.from(toggleButtons);
    if (!buttons.includes(e.target)) {
      if (!glossaryBody.contains(e.target)) {
        hideGlossary();
      }
    }
  });

  closeButton.addEventListener("click", hideGlossary);

  // When the first item (close button) is reached, refocus the top of glossary
  closeButton.addEventListener("keydown", (e) => {
    if (e.keyCode === KEYCODE_TAB) {
      search.focus();
    }
  });

  // Filter the term list as the user searches
  search.addEventListener("input", () => {
    if (list.filtered) {
      list.filter();
    }
  });

  // When a glossary term is clicked, toggle the definition expansion
  glossaryBody.addEventListener("click", (e) => handleTermClick(e));
}
