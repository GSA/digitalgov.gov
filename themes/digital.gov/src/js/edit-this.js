// Sets the github URL link and button styles for each resource when edit-mode is enabled
// eslint-disable-next-line func-names
(function () {
  let gitBranch;
  const githubEditLinks = document.querySelectorAll("*[data-edit-this]");
  const editToolsButton = document.querySelector(".edit-tools");

  /**
   * Set the branch from the URL path
   * If on cloud.pages then get the branch name from the URL
   * Otherwise, use main for local host and production
   */
  const host = window.location.hostname;
  if (host.includes("/preview/gsa")) {
    // eslint-disable-next-line prefer-destructuring
    gitBranch = window.location.pathname.split("/")[4];
  } else {
    gitBranch = "main";
  }

  /**
   * add github "button" link and highlight style to github items on the page
   * add link as last child in the parent element
   */
  function enableEditThis() {
    githubEditLinks.forEach((link) => {
      const githubFilepath = link.getAttribute("data-edit-this");
      const editSpan = Object.assign(document.createElement("span"), {
        innerHTML: "edit",
      });

      const editLinkButton = Object.assign(document.createElement("a"), {
        classList: "edit-this-btn",
        href: `https://github.com/gsa/digitalgov.gov/edit/${gitBranch}/content/${githubFilepath}`,
        target: "_blank",
        title: "edit this",
      });

      editLinkButton.appendChild(editSpan);
      link.appendChild(editLinkButton);
      link.classList.add("edit-this");
    });
  }

  /**
   * remove highlight style and edit button element from github items on the page
   * removes the last child link from the parent element
   */
  function disableEditThis() {
    // eslint-disable-next-line func-names
    githubEditLinks.forEach((link) => {
      link.classList.remove("edit-this");
      link.lastChild.remove();
    });
  }

  /**
   * add event listener for toggling highlight and normal states for github resources
   * @return none
   */
  // eslint-disable-next-line func-names
  editToolsButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (this.classList.contains("active")) {
      disableEditThis();
      this.classList.remove("active");
    } else {
      enableEditThis();
      this.classList.add("active");
    }
  });
})();
