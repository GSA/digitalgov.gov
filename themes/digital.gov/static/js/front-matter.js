jQuery(document).ready(function($) {

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

    setTimeout(function() {
      print_matter(data);
    }, 400);

  });

  var entityPattern = /[&<>"'`=:*?$%\/]/g;
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
    '%': '&#37;',
    ':': '&#58;',
    '?': '&#63;'
  };

  function escapeHtml (string) {
    return String(string).replace(entityPattern, function (s) {
      return entityMap[s];
    });
  }

  var small_words = /and |the |are |is |of |to |a /gi;

  function filename(d,t) {
    var date = d.match(/^[^\s]+/);
    t = t.replace(small_words, '');
    t = t.replace(entityPattern, ' ').trim();
    t = t.replace(/\s+/g,' ').trim();
    var slug = t.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    var filename = date[0]+'-'+slug+'.md';
    return filename;
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
        "authors: " + list_items(data['m_author']),
        "categories: " + list_items(data['m_categories']),
        "tag: " + list_items(data['m_tag']),
      "---",
      ,
      "***Paste content here. Delete this line***"
    ].join("\n");
    $('#post-matter').text(matter);
    $('#filename').text(filename(data['m_date'], data['m_title']));
    var body = encodeURIComponent(matter);
    var newfile = 'https://github.com/GSA/digital.gov/new/demo/content/posts/draft?filename='+filename(data['m_date'], data['m_title'])+'&value='+body;
    $('#newfile').attr('href', newfile);
  }

});
