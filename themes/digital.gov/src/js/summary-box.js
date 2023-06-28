// Guide Table of Contents
// Replaces guidenav.js that used Hugo's .TableOfContents with Summary Box component — https://designsystem.digital.gov/components/summary-box/#package
// Get all H2's and create a top of the page Table of Contents if shortcode is used on the markdown page

(function () {
  const guideSummaryBox = document.querySelector(".usa-summary-box");
  const guideSummaryList = document.querySelector(".usa-list");
  const pageHeaders = document.querySelectorAll("h2");

  if (!guideSummaryBox) return;

  if (pageHeaders.length > 4) {
    createSummaryBox();
  }

  createSummaryBox();

  function createSummaryBox() {
    const summaryBoxFragment = document.createDocumentFragment();
    pageHeaders.forEach((link) => {
      let summaryListItem = document.createElement("li");

      let summaryLink = Object.assign(document.createElement("a"), {
        class: "usa-summary-box__link",
        href: `#${link.id}`,
        innerHTML: `${link.innerText}`,
      });

      summaryListItem.appendChild(summaryLink);
      summaryBoxFragment.appendChild(summaryListItem);
    });

    guideSummaryList.appendChild(summaryBoxFragment);
  }
})();
