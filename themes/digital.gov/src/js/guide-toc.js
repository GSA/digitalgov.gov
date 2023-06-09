// Guide Table of Contents
// Replaces guidenav.js that used Hugo's .TableOfContents with Summary Box component — https://designsystem.digital.gov/components/summary-box/#package
// Get all H2's and create a top of the page Table of Contents if shortcode is used on the markdown page

const guideTOCList = document.querySelector(".usa-list");
const guideTOC = document.querySelector(".usa-summary-box");

if (guideTOC) {
  let guideLinks = document.querySelectorAll("h2");
  let linksToDisplay = [];
  guideLinks.forEach(function (link) {
    linksToDisplay.push(
      `<li><a class="usa-summary-box__link" href="#${link.id}">${link.innerText}</a></li>`
    );
  });

  linksToDisplay.forEach(function (link) {
    guideTOCList.insertAdjacentHTML("beforeend", link);
  });
}
