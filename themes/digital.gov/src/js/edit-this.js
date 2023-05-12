jQuery(($) => {
  function enableEditThis() {
    // eslint-disable-next-line func-names
    $("*[data-edit-this]").each(function () {
      const filepath = $(this).data("edit-this");
      //
      // Disabling no-undef & camelcase because these are defined in templates.
      //
      // eslint-disable-next-line no-undef, camelcase
      const editLink = `<a class="edit_this_btn" href="https://github.com/${git_org}/${git_repo}/edit/${branch}/content/${filepath}" title="edit this" target="_blank"><span>edit</span></a>`;

      $(this).addClass("edit-this").append(editLink);
    });
  }
  function disableEditThis() {
    $("*[data-edit-this]").each(() => {
      $(this).removeClass("edit-this");
      $(".edit_this_btn").remove();
    });
  }

  $(".edit_tools .edit-open").on("click", (e) => {
    e.preventDefault();

    const $editIcon = $(this).find("i");
    const editIconDefaultClass = "far fa-edit";
    const editIconActiveClass = "fas fa-times";

    // If the editing tool is already active
    if ($(".edit_tools").is(".active")) {
      // runs a function that removes edit tools from each item on the page that is editable.
      disableEditThis();
      // remove the active class from the edit button
      $(".edit_tools").removeClass("active");
      // swap out the icon in the edit button
      $editIcon.addClass(editIconDefaultClass).removeClass(editIconActiveClass);
    } else {
      enableEditThis();
      $(".edit_tools").addClass("active");
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
