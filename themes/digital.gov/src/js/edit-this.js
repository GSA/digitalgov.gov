// Sets the github URL for each resource when edit-mode is enabled

jQuery(($) => {
  // only returns git information in scope for the page, doesn't update scope for each link in enableEditThis on landing pages
  const githubScript = document.querySelector("#githubRepo");
  const gitOrg = githubScript.dataset.gitOrg;
  const gitRepo = githubScript.dataset.gitRepo;
  const gitBranch = githubScript.dataset.branch;
  const gitFilepathURL = githubScript.dataset.editpathUrl;

  // loop through all data-edit-this attributes on page and add edit link
  function enableEditThis() {
    // eslint-disable-next-line func-names
    $("*[data-edit-this]").each(function () {
      const filepath = $(this).data("edit-this");
      console.log(filepath);
      //
      // Disabling no-undef & camelcase because these are defined in templates.
      //
      // eslint-disable-next-line no-undef, camelcase
      const editLink = `<a class="edit-this-btn" href="https://github.com/${gitOrg}/${gitRepo}/edit/${gitBranch}/content/${filepath}" title="edit this" target="_blank"><span>edit</span></a>`;
      $(this).addClass("edit-this").append(editLink);
    });
  }

  // remove highlight from all editable items
  function disableEditThis() {
    // eslint-disable-next-line func-names
    $("*[data-edit-this]").each(function () {
      $(this).removeClass("edit-this");
      $(".edit-this-btn").remove();
    });
  }

  $(".edit-tools .edit-open").on("click", (e) => {
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
// keycode 32 handles spacebar
$(() => {
  $(".edit-issue").on("keypress", (e) => {
    if (e.code === 32) {
      this.click();
    }
  });
});
