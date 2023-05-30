jQuery(function ($) {
  const editThisButton = `edit-this-btn`;
  const editTools = `edit-tools`;
  function enable_edit_this(){
    $('*[data-edit-this]').each(function(){
      var filepath = $(this).data('edit-this');
      var edit_link = `<a class="${editThisButton}" href="https://github.com/${git_org}/${git_repo}/edit/${branch}/content/${filepath}" title="edit this" target="_blank"><span>edit</span></a>`;
      $(this).addClass('edit-this').append(edit_link);
    });
  }
  function disable_edit_this(){
    $('*[data-edit-this]').each(function(){
      $(this).removeClass('edit-this');
      $(`.${editThisButton}`).remove();
    });
  }

  $(`.${editTools} .edit-open`).click(function(e){
    e.preventDefault();

    const $editIcon = $(this).find("i");
    const editIconDefaultClass = "far fa-edit";
    const editIconActiveClass = "fas fa-times";

    // If the editing tool is already active
    if ( $(`.${editTools}`).is( ".active" ) ) {
      // runs a function that removes edit tools from each item on the page that is editable.
      disable_edit_this();
      // remove the active class from the edit button
      $(`.${editTools}`).removeClass('active');
      // swap out the icon in the edit button
      $editIcon.addClass(editIconDefaultClass).removeClass(editIconActiveClass);
    } else {
      enable_edit_this();
      $(`.${editTools}`).addClass('active');
      $editIcon.addClass(editIconActiveClass).removeClass(editIconDefaultClass);
    }
  });

});
// keycode 32 handles spacebar
$(function(){
  const editIssue = `edit-issue`;
  $(`.${editIssue}`).keypress(function(e) {
    if(e.keyCode == 32){
      this.click();
    }
  });
});
