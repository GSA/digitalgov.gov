// Sets the github URL link and button styles for each resource when edit-mode is enabled
// eslint-disable-next-line func-names
(function () {
  const githubEditLinks = document.querySelectorAll("*[data-edit-this]");
  const editToolsButton = document.querySelector(".edit-tools");
  const gitRepo = {};

  /**
   * Gets the branch from the URL path to set the github filepath
   * If on cloud.pages then get the branch name from the URL
   * Otherwise, use main for local host and production
   */
  const host = window.location.hostname;
  if (host.includes("/preview/gsa")) {
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
      gitRepo.filepath = link.getAttribute("data-edit-this");
      const editSpan = Object.assign(document.createElement("span"), {
        innerHTML: "edit",
      });

      const editLinkButton = Object.assign(document.createElement("a"), {
        classList: "edit-this-btn",
        href: `https://github.com/gsa/digitalgov.gov/edit/${gitRepo.branch}/content/${gitRepo.filepath}`,
        target: "_blank",
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
    githubEditLinks.forEach((link) => {
      link.classList.remove("edit-this");
      link.lastChild.remove();
    });
  }

  /**
   * Add event listener to the edit tools button in lower right corner
   */
  // eslint-disable-next-line func-names
  editToolsButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (this.classList.contains("active")) {
      disableEditMode();
      this.classList.remove("active");
    } else {
      enableEditMode();
      this.classList.add("active");
    }
  });
})();
