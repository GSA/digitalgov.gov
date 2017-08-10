jQuery(document).ready(function($) {


  $( ".btn-group .btn" ).click(function() {
    $( ".btn-group .btn" ).removeClass( 'selected' );
    $( this ).addClass( 'selected' );
    get_matter_data();
  });
  
  function get_post_type(){
    var post_type = $( '.btn-group .selected' ).attr( 'data-type' );
    return post_type;
  }



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


  function get_matter_data(){
    var data = {};
    $('#matter-maker').serializeArray().map(function(x){
      data[x.name] = x.value;
    });
    setTimeout(function() {
      print_matter(data);
    }, 400);
  }

  $( "#matter-maker input" ).keyup(function( event ) {
    get_matter_data();
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

  function matter_url(d,t) {
    var date = d.match(/^[^\s]+/);
    date = date[0].replace(/-/g, '/');
    t = t.replace(small_words, '');
    t = t.replace(entityPattern, ' ').trim();
    t = t.replace(/\s+/g,' ').trim();
    var slug = t.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    var f = '/'+date+'/'+slug;
    return f;
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
    var post_type = get_post_type();
    console.log(post_type);
    
    if (post_type == 'post') {
      var matter = [
        "---",
          "url: " + matter_url(data['m_date'], data['m_title']),
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
      var body = encodeURIComponent(matter);
      var newfile = 'https://github.com/GSA/digital.gov/new/demo/content/posts/draft?filename='+filename(data['m_date'], data['m_title'])+'&value='+body;

    } else if (post_type == 'page') {
      var matter = [
        "---",
          "url: " + matter_url(data['m_date'], data['m_title']),
          "date: " + data['m_date'],
          "title: '" + escapeHtml(data['m_title']) + "'",
          "summary: '" + escapeHtml(data['m_summary']) + "'",
        "---",
        ,
        "***Paste content here. Delete this line***"
      ].join("\n");
      var body = encodeURIComponent(matter);
      var newfile = 'https://github.com/GSA/digital.gov/new/demo/content/docs/draft?filename='+filename(data['m_date'], data['m_title'])+'&value='+body;

    } else if (post_type == 'event') {
      var matter = [
        "---",
          "url: " + matter_url(data['m_date'], data['m_title']),
          "date: " + data['m_date'],
          "title: '" + escapeHtml(data['m_title']) + "'",
          "summary: '" + escapeHtml(data['m_summary']) + "'",
          "categories: " + list_items(data['m_categories']),
          "tag: " + list_items(data['m_tag']),
        "---",
        ,
        "***Paste content here. Delete this line***"
      ].join("\n");
      var body = encodeURIComponent(matter);
      var newfile = 'https://github.com/GSA/digital.gov/new/demo/content/events/draft?filename='+filename(data['m_date'], data['m_title'])+'&value='+body;
    }
    
    $('#post-matter').text(matter);
    $('#filename').text(filename(data['m_date'], data['m_title']));
    $('#newfile').attr('href', newfile);
  }

});
