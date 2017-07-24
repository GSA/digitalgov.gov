jQuery(document).ready(function() {
  function curr_date(){
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var output = d.getFullYear() + '-' +
        (month<10 ? '0' : '') + month + '-' +
        (day<10 ? '0' : '') + day + ' ' + 
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() +
        ' -0400';
    return output;
  }
  $('input[name="m_date"]').val(curr_date());

  $( "#matter-maker input" ).keyup(function( event ) {
    var data = {};
    $('#matter-maker').serializeArray().map(function(x){data[x.name] = x.value;}); 
    print_matter(data);
  });

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
    '*': '&#42;',
    '$': '&#36;',
    '%': '&#37;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=*$%\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function list_items(d) {
    var list = d.split(',');
    $item = '';
    $item += '\n';
    $.each( list, function( key, value ) {
      $item += '  - ' + $.trim(value) + '\n';
    });
    return $item;
  }

  function print_matter(data){
    var matter = [
      "---",
        "date: " + data['m_date'],
        "title: '" + escapeHtml(data['m_title']) + "'",
        "summary: '" + escapeHtml(data['m_summary']) + "'",
        "author: " + list_items(data['m_author']),
        "categories: " + list_items(data['m_categories']),
        "tag: " + list_items(data['m_tag']),
      "---"
    ].join("\n");
    $('#post-matter').text(matter);
  }

});