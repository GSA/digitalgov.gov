// Sets the github URL link and button styles for each resource when edit-mode is enabled

jQuery(($) => {
  const { gitOrg, gitRepo, gitBranch } =
    document.querySelector("#githubRepo").dataset;
  // loop through all data-edit-this items on page, add github link button and apply highlight class
  function enableEditThis() {
    // TODO: replace each with native forEach
    // eslint-disable-next-line func-names
    $("*[data-edit-this]").each(function () {
      const filepath = $(this).data("edit-this");
      //
      // Disabling no-undef & camelcase because these are defined in templates.
      //
      // eslint-disable-next-line no-undef, camelcase
      const editLink = `<a class="edit-this-btn" href="https://github.com/${gitOrg}/${gitRepo}/edit/${gitBranch}/content/${filepath}" title="edit this" target="_blank"><span>edit</span></a>`;
      // TODO: replace with native javascript methods
      $(this).addClass("edit-this").append(editLink);
    });
  }

  // remove highlight and edit button from all editable items
  function disableEditThis() {
    // eslint-disable-next-line func-names
    $("*[data-edit-this]").each(function () {
      // TODO: replace each with native forEach
      $(this).removeClass("edit-this");
      $(".edit-this-btn").remove();
    });
  }

  // toggle edit tools when clicking on edit-tools button in lower right corner
  $(".edit-tools .edit-open").on("click", (e) => {
    // TODO: replace on with addEventListener
    e.preventDefault();

    const $editIcon = $(this).find("i");
    const editIconDefaultClass = "far fa-edit";
    const editIconActiveClass = "fas fa-times";

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
