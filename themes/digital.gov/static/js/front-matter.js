jQuery(document).ready(function($) {

  // Step 1. Add into this string the characters to look for
  var entityPattern = /[&<>"'`)(=+:*@.?$%\/]/g; 
  // Step 2. Add a new line that contains the HTML character and the entity that you want it transformed into
  // Reference: https://dev.w3.org/html5/html-author/charref
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
    '.': '&#46;',
    '(': '&#40;',
    ')': '&#41;',
    '+': '&#43;',
    '@': '&#64;',
    '?': '&#63;'
  };

  // The small words we are removing from the filenames and URLs
  var small_words = /and |the |are |is |of |to |a /gi; // these are the small words we are removing from urls


  //- - - - - - - - - - - - - - - - - - - - 

  // Post type Buttons
  $(".btn-group .btn").click(function() {
    $(".btn-group .btn").removeClass('selected');
    $(this).addClass('selected');
    get_matter_data();
  });
  
  // Gets post type from buttons
  function get_post_type(){
    var post_type = $( '.btn-group .selected' ).attr( 'data-type' );
    return post_type;
  }


  // Gets today's date + time
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

  // inputs the current date in the date field
  $('input[name="m_date"]').val(curr_date());


  // Gets the data from the FORM and pushes it to print_matter()
  function get_matter_data(){
    var data = {};
    $('#matter-maker').serializeArray().map(function(x){
      data[x.name] = x.value;
    });
    setTimeout(function() {
      print_matter(data);
    }, 400);
  }

  // This watches for any keyup events (typing) in the form fields
  $( "#matter-maker .fm" ).keyup(function( event ) {
    get_matter_data();
  });


  function show_fields(d){
    $('#matter-maker label').addClass('hidden');
    var fields = d.split(', ');
    for (var f in fields) {
      var field = '.'+fields[f];
      $('#matter-maker '+field).removeClass('hidden');
    }
  }

  // A function that replaces out the special characters in strings
  function escapeHtml (string) {
    return String(string).replace(entityPattern, function (s) {
      return entityMap[s];
    });
  }

  // Makes the filename
  function filename(d,t) {
    var date = d.match(/^[^\s]+/);
    t = t.replace(small_words, '');
    t = t.replace(entityPattern, ' ').trim();
    t = t.replace(/\s+/g,' ').trim();
    var slug = t.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    var filename = date[0]+'-'+slug+'.md';
    return filename;
  }

  // Makes the URL
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

  // Makes lists in the front matter
  function list_items(d) {
    var list = d.split(',');
    $item = '';
    $item += '\n';
    $.each( list, function( key, value ) {
      $item += '  - ' + $.trim(value) + '\n';
    });
    return $item;
  }

  // Prints the front-matter in a DIV on the page
  function print_matter(data){
    var post_type = get_post_type(); // gets the post type

    // Checks to see what the post type is and prints the front-matter for each type
    // POST
    if (post_type == 'post') {
      show_fields('m_date, m_title, m_summary, m_authors, m_categories, m_tag');
      var matter = [
        "---",
          "url: " + matter_url(data['m_date'], data['m_title']),
          "date: " + data['m_date'],
          "title: '" + escapeHtml(data['m_title']) + "'",
          "summary: '" + escapeHtml(data['m_summary']) + "'",
          "authors: " + list_items(data['m_authors']),
          "categories: " + list_items(data['m_categories']),
          "tag: " + list_items(data['m_tag']),
        "---",
        ,
        "***Paste content here. Delete this line***"
      ].join("\n");
      var body = encodeURIComponent(matter);
      var newfile = 'https://github.com/GSA/digital.gov/new/demo/content/posts/draft?filename='+filename(data['m_date'], data['m_title'])+'&value='+body;

      // DOC
    } else if (post_type == 'doc') {
      show_fields('m_date, m_title, m_summary');
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

      // EVENT
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
