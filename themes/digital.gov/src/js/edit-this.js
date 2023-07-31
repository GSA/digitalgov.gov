// Sets the github URL link and button styles for each resource when edit-mode is enabled

jQuery(($) => {
  const { gitOrg, gitRepo, gitBranch } =
    document.querySelector("#githubRepo").dataset;

  const githubEditLinks = document.querySelectorAll("*[data-edit-this]");
  const editPageButton = document.querySelector(".edit-tools .edit-open");

  // loop through all data-edit-this items on page, add github link button and apply highlight class
  function enableEditThis() {
    githubEditLinks.forEach((link) => {
      let githubFilepath = link.getAttribute("data-edit-this");

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
    githubEditLinks.forEach((link) => {
      link.classList.remove("edit-this");
      let editLinkElement = link.querySelector(".edit-this-btn");
      editLinkElement.remove();
    });
  }

  editPageButton.addEventListener("click", function (event) {
    // event.preventDefault();
  });

  // toggle edit tools when clicking on edit-tools button in lower right corner
  $(".edit-tools .edit-open").on("click", (e) => {
    // TODO: replace on with addEventListener
    e.preventDefault();

    const $editIcon = $(this).find("i");
    const editIconDefaultClass = "far fa-edit";
    const editIconActiveClass = "fas fa-times";

    console.log($editIcon);

    // If the editing tool is already active
    if ($(".edit-tools").is(".active")) {
      // runs a function that removes edit tools from each item on the page that is editable.
      disableEditThis();
      // remove the active class from the edit button
      $(".edit-tools").removeClass("active");
      // swap out the icon in the edit button
      $editIcon.addClass(editIconDefaultClass).removeClass(editIconActiveClass);
    } else {
      enableEditThis();
      $(".edit-tools").addClass("active");
      $editIcon.addClass(editIconActiveClass).removeClass(editIconDefaultClass);
    }
  });
});

// TODO: refactor to use native javascript
// keycode 32 handles spacebar
$(() => {
  $(".edit-issue").on("keypress", (e) => {
    if (e.code === 32) {
      this.click();
    }
  });
});
