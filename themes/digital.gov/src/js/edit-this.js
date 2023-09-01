// Sets the github URL link and button styles for each resource when edit-mode is enabled
// eslint-disable-next-line func-names
(function () {
  const githubEditLinks = document.querySelectorAll("[data-gh-edit-page]");
  const editToolsButton = document.querySelector(".edit-tools");
  const repoBaseUrl = "https://github.com/gsa/digitalgov.gov";
  const gitRepo = {
    filepath: null,
    branch: null,
  };

  /**
   * Gets the branch from the URL path to set the github filepath
   * If on cloud.pages then get the branch name from the URL
   * Otherwise, use main for local host and production
   */
  const host = window.location.hostname;
  if (host.includes("sites.pages.cloud.gov")) {
    // eslint-disable-next-line prefer-destructuring
    gitRepo.branch = window.location.pathname.split("/")[4];
  } else {
    gitRepo.branch = "main";
  }

  /**
   * Adds github "button" link and highlight style to Github items
   * Add link as last child in the parent element
   */
  function enableEditMode() {
    githubEditLinks.forEach((link) => {
      gitRepo.filepath = link.dataset.ghEditPage;
      const editSpan = Object.assign(document.createElement("span"), {
        textContent: "edit",
      });
      const editLinkButton = Object.assign(document.createElement("a"), {
        classList: "edit-this-btn",
        href: `${repoBaseUrl}/edit/${gitRepo.branch}/content/${gitRepo.filepath}`,
        target: "_blank",
        rel: "noreferrer",
        title: "edit this",
      });

      editLinkButton.appendChild(editSpan);
      link.appendChild(editLinkButton);
      link.classList.add("edit-this");
    });
  }

  /**
   * Remove highlight style and edit button element from Github items
   * Removes the last child link from the parent element
   */
  function disableEditMode() {
    // eslint-disable-next-line func-names
    githubEditLinks.forEach((editLink) => {
      editLink.classList.remove("edit-this");
      editLink.lastChild.remove();
    });
  }

  /**
   * Add event listener to the edit tools button in lower right corner
   */
  // eslint-disable-next-line func-names
  editToolsButton.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      disableEditMode();
      this.classList.remove("active");
    } else {
      enableEditMode();
      this.classList.add("active");
    }
  });
})();
