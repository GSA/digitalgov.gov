// Sets the github URL link and button styles for each resource when edit-mode is enabled
// eslint-disable-next-line func-names
(function () {
  const githubEditLinks = document.querySelectorAll("[data-gh-edit-page]");
  const editToolsButton = document.querySelector(".gh-edit-tools");
  const repoBaseUrl = "https://github.com/gsa/digitalgov.gov";

  /**
   * Object for storing the git file edit path and branch
   */
  const gitRepo = {
    filepath: null,
    // eslint-disable-next-line no-use-before-define
    branch: setBranch(),
  };

  /**
   * If on cloud.pages get the branch name from the URL
   * Otherwise, use "main" for localhost and production
   * @returns {string} branch name
   * @example:
   * Given: https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-site-alert-component/
   * Expect: nl-site-alert-component
   */
  function setBranch() {
    const host = window.location.hostname;
    let currentBranch = "";
    if (host.includes("sites.pages.cloud.gov")) {
      // eslint-disable-next-line prefer-destructuring
      currentBranch = host.split("/")[4];
    } else {
      currentBranch = "main";
    }
    return currentBranch;
  }

  /**
   * Adds github "button" link and highlight style to Github items
   * Add link as last child in the parent element
   */
  function enableEditMode() {
    githubEditLinks.forEach((link) => {
      gitRepo.filepath = link.dataset.ghEditPage;
      console.log(gitRepo);
      const editSpan = Object.assign(document.createElement("span"), {
        classList: "gh-edit-page__button-text",
        textContent: "edit",
      });
      const editLinkButton = Object.assign(document.createElement("a"), {
        classList: "gh-edit-page__button",
        href: `${repoBaseUrl}/edit/${gitRepo.branch}/content/${gitRepo.filepath}`,
        target: "_blank",
        rel: "noreferrer",
        title: "edit page on github",
      });

      editLinkButton.appendChild(editSpan);
      link.appendChild(editLinkButton);
      link.classList.add("gh-edit-page");
    });
  }

  /**
   * Remove highlight style and edit button element from Github items
   * Removes the last child link from the parent element
   */
  function disableEditMode() {
    // eslint-disable-next-line func-names
    githubEditLinks.forEach((editLink) => {
      editLink.classList.remove("gh-edit-page");
      editLink.lastChild.remove();
    });
  }

  /**
   * Add event listener to the edit tools button in lower right corner
   */
  // eslint-disable-next-line func-names
  editToolsButton.addEventListener("click", function () {
    if (this.classList.contains("gh-edit-tools--active")) {
      disableEditMode();
      this.classList.remove("gh-edit-tools--active");
    } else {
      enableEditMode();
      this.classList.add("gh-edit-tools--active");
    }
  });
})();
