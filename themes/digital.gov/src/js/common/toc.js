// add aria-label to the built-in .TableOfContents variable. Cannot override from configuration file
const tableOfContents = document.querySelector('nav#TableOfContents');

if (tableOfContents) {
  tableOfContents.ariaLabel = "Table of contents";
}