// This code was adapted from the 18F glossary component
// https://github.com/18F/glossary/tree/master

const List = require("list.js");

const KEYCODE_ESC = 27;
const KEYCODE_TAB = 9;

const selectors = {
  glossaryID: "#dg-glossary",
  toggle: ".dg-glossary__toggle",
  close: ".dg-glossary__close",
  listClass: ".dg-glossary__list",
  searchClass: ".dg-glossary__search",
};

const classes = {
  definitionClass: "dg-glossary__definition",
  glossaryItemClass: "dg-glossary__item",
  termClass: "dg-glossary__term",
  iconClass: "dg-glossary__icon",
};

/**
 * Glossary side panel
 * @constructor
 */
function Glossary() {
  this.body = document.querySelector(selectors.glossaryID);
  this.toggleBtn = document.querySelectorAll(selectors.toggle);
  this.closeBtn = document.querySelector(selectors.close);
  if (this.body) {
    this.search = this.body.querySelector(selectors.searchClass);
    this.listElm = this.body.querySelector(selectors.listClass);
  }

  this.isOpen = false;

  this.initGlossary();

  this.toggleBtn.forEach((btn) => {
    this.addEventListener(btn, "click", this.toggle.bind(this));
  });
  this.addEventListener(this.closeBtn, "click", this.hide.bind(this));
  this.addEventListener(this.search, "input", this.handleInput.bind(this));
  this.addEventListener(document.body, "keyup", this.handleKeyup.bind(this));
  this.addEventListener(document, "click", this.closeOpenGlossary.bind(this));
  this.addEventListener(this.body, "click", this.handleTermTouch.bind(this));
}

function itemTemplate(values) {
  /* eslint-disable no-undef */
  const id = `glossary-term-${values.termId}`;
  const template = `<li class="${values.glossaryItemClass}">
    <button class="${values.termClass}" aria-controls="${id}" aria-expanded="false">${values.term}</button>
    <svg id="${id}" class="${values.iconClass} usa-icon dg-icon dg-icon--large" aria-hidden="true" focusable="false" role="img">
      <use class="${values.iconClass}"xlink:href="${glossaryIcon}"></use>
    </svg>
    <div id="${id}" class="${values.definitionClass}" aria-hidden="true">${values.definition}</div>
  </li>`;
  return template;
}

// Initialize the glossary list with terms
Glossary.prototype.initGlossary = async function initGlossary() {
  try {
    // Fetch the glossary terms from the "glossaryPath" variable set in baseof.html
    /* eslint-disable no-undef */
    let response = null;
    if (glossaryPath) {
      response = await fetch(glossaryPath);
    }
    const terms = await response.json();
    terms.forEach((term, i) => {
      const opts = {
        term: term.term,
        definition: term.definition,
        definitionClass: classes.definitionClass,
        glossaryItemClass: classes.glossaryItemClass,
        termClass: classes.termClass,
        iconClass: classes.iconClass,
        termId: i,
      };
      this.listElm.insertAdjacentHTML("beforeend", itemTemplate(opts));
    }, this);

    const glossaryID = selectors.glossaryID.slice(1);
    const listClass = selectors.listClass.slice(1);
    const searchClass = selectors.searchClass.slice(1);
    const options = {
      valueNames: [classes.termClass],
      listClass,
      searchClass,
    };
    this.list = new List(glossaryID, options);

    // When last term is reached, focus top of glossary
    this.addEventListener(
      this.listElm.lastChild.firstElementChild,
      "keydown",
      (e) => {
        if (e.keyCode === KEYCODE_TAB) {
          this.search.focus();
        }
      }
    );

    // When first item (close button) is reached, focus top of glossary
    this.addEventListener(this.closeBtn, "keydown", (e) => {
      if (e.keyCode === KEYCODE_TAB) {
        this.search.focus();
      }
    });
  } catch (e) {
    // No glossary on this page
  }
};

// https://davidwalsh.name/element-matches-selector
function selectorMatches(el, selector) {
  const p = Element.prototype;
  const f =
    p.matches ||
    p.webkitMatchesSelector ||
    p.mozMatchesSelector ||
    p.msMatchesSelector ||
    function selectorMatch(s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
  return f.call(el, selector);
}

// Toggle glossary term visibility
Glossary.prototype.handleTermTouch = function handleTermTouch(e) {
  if (
    selectorMatches(e.target, `.${classes.termClass}`) ||
    selectorMatches(e.target, `.${classes.iconClass}`)
  ) {
    // Needed to handle icon clicks
    let { target } = e;
    if (target.tagName.toLowerCase() === "svg") {
      target = target.previousElementSibling;
    } else if (target.tagName.toLowerCase() === "use") {
      target = target.parentElement.previousElementSibling;
    }

    const expanded = target.getAttribute("aria-expanded");
    const termNumber = target.getAttribute("aria-controls");
    if (expanded === "false") {
      target.setAttribute("aria-expanded", "true");
      document
        .querySelectorAll(`#${termNumber}`)
        .forEach((el) => el.setAttribute("aria-hidden", "false"));
    } else {
      target.setAttribute("aria-expanded", "false");
      document
        .querySelectorAll(`#${termNumber}`)
        .forEach((el) => el.setAttribute("aria-hidden", "true"));
    }
  }
};

// Toggle glossary visibility
Glossary.prototype.toggle = function toggle() {
  const method = this.isOpen ? this.hide : this.show;
  method.apply(this);
};

// Show glossary
Glossary.prototype.show = function show() {
  this.body.setAttribute("aria-hidden", "false");
  this.toggleBtn.forEach((button) =>
    button.setAttribute("aria-expanded", "true")
  );
  this.search.focus();
  this.isOpen = true;
};

// Hide glossary
Glossary.prototype.hide = function hide() {
  this.body.setAttribute("aria-hidden", "true");
  this.toggleBtn.forEach((button) =>
    button.setAttribute("aria-expanded", "false")
  );
  this.toggleBtn[0].focus();
  this.isOpen = false;
};

// Filter glossary terms on search
Glossary.prototype.handleInput = function handleInput() {
  if (this.list.filtered) {
    this.list.filter();
  }
};

// Close glossary on escape keypress
Glossary.prototype.handleKeyup = function handleKeyup(e) {
  if (e.keyCode === KEYCODE_ESC) {
    if (this.isOpen) {
      this.hide();
    }
  }
};

// Helper function to identify closest parent element
function closest(element, selector) {
  let el = element;
  while (el) {
    if (selectorMatches(el, selector)) {
      break;
    }
    el = el.parentElement;
  }
  return el;
}

// Close glossary when clicking outside of aside
Glossary.prototype.closeOpenGlossary = function closeOpenGlossary(e) {
  const buttons = Array.from(this.toggleBtn);
  if (!buttons.includes(e.target) && this.isOpen) {
    if (!closest(e.target, selectors.glossaryID)) {
      this.hide();
    }
  }
};

// Helper function to add event listeners to Glossary object
Glossary.prototype.addEventListener = function addEventListener(
  elm,
  event,
  callback
) {
  if (elm) {
    elm.addEventListener(event, callback);
  }
};

/* eslint-disable no-new */
new Glossary();
