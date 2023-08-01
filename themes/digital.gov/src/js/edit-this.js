// Sets the github URL link and button styles for each resource when edit-mode is enabled
// eslint-disable-next-line func-names
(function () {
  const { gitOrg, gitRepo, gitBranch } =
    document.querySelector("#githubRepo").dataset;

  const githubEditLinks = document.querySelectorAll("*[data-edit-this]");
  const editToolsButton = document.querySelector(".edit-tools");

  console.log(window.location.pathname);

  // get all github resources on page, add github link button to markup and apply highlight class
  function enableEditThis() {
    githubEditLinks.forEach((link) => {
      const githubFilepath = link.getAttribute("data-edit-this");

      const editSpan = Object.assign(document.createElement("span"), {
        innerHTML: "edit",
      });

      const editLinkButton = Object.assign(document.createElement("a"), {
        classList: "edit-this-btn",
        href: `https://github.com/${gitOrg}/${gitRepo}/edit/${gitBranch}/content/${githubFilepath}`,
        target: "_blank",
        title: "edit this",
      });

      editLinkButton.appendChild(editSpan);
      link.appendChild(editLinkButton);
      link.classList.add("edit-this");
    });
  }

  // remove highlight class and edit button from markup
  function disableEditThis() {
    // eslint-disable-next-line func-names
    githubEditLinks.forEach((link) => {
      link.classList.remove("edit-this");
      const editLinkElement = link.querySelector(".edit-this-btn");
      editLinkElement.remove();
    });
  }

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
