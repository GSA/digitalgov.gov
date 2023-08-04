const Glossary = require("glossary-panel");
const terms = require("../../../../data/glossary/hcd-glossary.json");

/* eslint-disable no-new */
try {
  new Glossary(terms);
} catch {
  // Do nothing
}
