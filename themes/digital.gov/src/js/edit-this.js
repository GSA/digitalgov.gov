// Sets the github URL link and button styles for each resource when edit-mode is enabled
// eslint-disable-next-line func-names
(function () {
  const { gitOrg, gitRepo, gitBranch } =
    document.querySelector("#githubRepo").dataset;

  const githubEditLinks = document.querySelectorAll("*[data-edit-this]");
  const editToolsButton = document.querySelector(".edit-tools");
  // const editIssueButton = document.querySelector(".edit-issue");

  // loop through all data-edit-this items on page, add github link button and apply highlight class
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

  // remove highlight and edit button from all editable items
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

  // eslint-disable-next-line func-names
  // editIssueButton.addEventListener("keydown", function (event) {});
  // if (event.keyCode === 32) {

  // }
})();

// TODO: refactor to use native javascript
// keycode 32 handles spacebar
// $(() => {
//   $(".edit-issue").on("keypress", (e) => {
//     if (e.code === 32) {
//       console.log("spacebar pressed");
//       this.click();
//     }
//   });
// });
