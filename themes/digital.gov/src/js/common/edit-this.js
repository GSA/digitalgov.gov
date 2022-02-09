jQuery(document).ready(function($) {
  function enable_edit_this(){
    $('*[data-edit-this]').each(function(){
      var filepath = $(this).data('edit-this');
      var edit_link = '<a class="edit_this_btn" href="https://github.com/'+git_org+'/'+git_repo+'/edit/'+branch+'/content/'+filepath+'" title="edit this" target="_blank"><span>edit</span></a>';
      $(this).addClass('edit-this').append(edit_link);
    });
  }
  function disable_edit_this(){
    $('*[data-edit-this]').each(function(){
      $(this).removeClass('edit-this');
      $('.edit_this_btn').remove();
    });
  }

  $('.edit_tools .edit-open').click(function(e){
    e.preventDefault();

    const $editIcon = $(this).find("i");
    const editIconDefaultClass = "far fa-edit";
    const editIconActiveClass = "fas fa-times";

    // If the editing tool is already active
    if ( $('.edit_tools').is( ".active" ) ) {
      // runs a function that removes edit tools from each item on the page that is editable.
      disable_edit_this();
      // remove the active class from the edit button
      $('.edit_tools').removeClass('active');
      // swap out the icon in the edit button
      $editIcon.addClass(editIconDefaultClass).removeClass(editIconActiveClass);
    } else {
      enable_edit_this();
      $('.edit_tools').addClass('active');
      $editIcon.addClass(editIconActiveClass).removeClass(editIconDefaultClass);
    }
  });

});
// keycode 32 handles spacebar
$(function(){
  $('.edit-issue').keypress(function(e) {
    if(e.keyCode == 32){
      this.click();
    }
  });
});