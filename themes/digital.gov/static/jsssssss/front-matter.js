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
    '-': '&#8208;',
    '–': '&#8211;',
    '—': '&#8212;',
    '?': '&#63;'
  };

  // The small words we are removing from the filenames and URLs
  var small_words = /\band |\bthe |\bare |\bis |\bof |\bto /gi; // these are the small words we are removing from urls



  //- - - - - - - - - - - - - - - - - - - -


  // // Gets post type from buttons
  function get_post_type(){
    // var post_type = $( '.post_types .selected' ).attr( 'data-type' );
    var parts = location.href.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    var post_type = lastSegment.replace('new-', '');
    var d = $(".post_types .btn[data-type='"+post_type+"']").addClass('selected');
    return post_type;
  }
  get_post_type();


  // Gets today's date
  function curr_date(){
    var d = new Date();
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    var day = ("0" + (d.getDate())).slice(-2);
    var output = d.getFullYear() + '-' + month + '-' + day;
    return output;
  }

  // Gets today's time
  function curr_time(){
    var d = new Date();
    var hours = ("0" + (d.getHours())).slice(-2);
    var minutes = ("0" + (d.getMinutes())).slice(-2);
    var seconds = '00';
    var output = hours + ":" + minutes;
    return output;
  }

  // Combines date + time into a string that's ready for the front matter
  function matter_datetime(date, time){
    var dt = date + ' ' + time + ':00 -0500';
    return dt;
  }

  // jQuery UI Date picker
  $(function() {
    $( ".m_date .fm, .m_end_date .fm" ).datepicker({
      dateFormat: "yy-mm-dd",
      onSelect: function (dateText, inst) {
        get_matter_data();
      }
    });
  });

  // inputs the current date in the date field
  $('input[name="m_date"]').val(curr_date());
  $('input[name="m_time"]').val(curr_time());
  $('input[name="m_end_date"]').val(curr_date());
  $('input[name="m_end_time"]').val(curr_time());

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

  $("#matter-maker .fm").change(function() {
    get_matter_data();
  });


  // A function that replaces out the special characters in strings
  function escapeHtml (string) {
    return String(string).replace(entityPattern, function (s) {
      return entityMap[s];
    });
  }

  // Makes the filename
  function get_filename(d,s) {
    var date = d.match(/^[^\s]+/);
    var filename = date[0]+'-'+s+'.md';
    return filename;
  }

  // Makes the slug: for the front matter
  function matter_slug(title) {
    t = title.replace(new RegExp(small_words, "gi"), '');     // removes the small_words
    t = t.replace(/[^a-zA-Z0-9\s]/g,"");                                // removes anything that is not a number or letter (i think)
    t = t.toLowerCase();                                                // makes the title all lowercase
    t = t.replace(/\s\s+/g, ' ');                                       // replaces multiple spaces with single spaces
    t = t.replace(/[ \t]+$/g, '');                                      // removes trailing spaces from title
    var slug = t.replace(/\s/g,'-');                                    // converts single spaces into dashes
    return slug;
  }

  // Makes the title for the front matter
  function matter_title(t) {
    t = t.replace(/\s\s+/g, ' ');           // replaces multiple spaces with single spaces
    t = t.replace(/[ \t]+$/g, '');          // removes trailing spaces from title
    var title = escapeHtml(t);
    return title;
  }

  // Makes commit message
  function matter_commit_msg(post_type, title) {
    var msg = 'Add new ' + post_type + ': ' + title;
    return msg;
  }

  // Makes commit description
  function matter_commit_desc(post_type, title, summary, slug, filename) {
    var desc = [
      '**' + title + '** %0A',
      summary + '%0A',
      "---%0A",
      'slug: `' + slug + '`%0A',
      'filename: `' + filename + '`%0A',
      "---"
    ].join("\n");
    return desc;
  }

  // Makes branch name
  function matter_branch_name(post_type, slug) {
    var branch_name = 'new-' + post_type + '-' + slug;
    return branch_name;
  }

  // returns the year and month for use in the filepath on GitHub
  // Returns: 2017/09
  function file_yearmo(date) {
    var dateObj = new Date(date);
    var year = dateObj.getUTCFullYear();
    var month = ("0" + (dateObj.getUTCMonth() + 1)).slice(-2); //months from 1-12
    var yearmo = year + "/" + month;
    return yearmo;
  }


  // Makes lists in the front matter
  function list_items(d) {
    d = d.toString();
    var list = d.split(',');
    $item = '';
    $item += '\n';
    var total = list.length;
    $.each( list, function( key, value ) {
      slug = value.replace(entityPattern, ' ').trim();
      slug = slug.replace(/[^a-z0-9]/gi, '-').toLowerCase();
      if (key === total - 1) {
        $item += '  - ' + $.trim(slug);
      } else{
        $item += '  - ' + $.trim(slug) + '\n';
      }
    });
    return $item;
  }

  // Builds Venue Data
  function build_venue_data(d) {
    $item = '';
    $item += '\n';
    $.each( d, function( key, value ) {
      $item += '  ' + key + ': ' + $.trim(value) + '\n';
    });
    return $item;
  }


  function set_1800f(set){
    if (set == true) {
      $('.m_venue_name input').val('U.S. General Services Administration').prop("readonly", true).addClass('quiet');
      $('.m_address input').val('1800 F Street NW').prop("readonly", true).addClass('quiet');
      $('.m_city input').val('Washington').prop("readonly", true).addClass('quiet');
      $('.m_state input').val('D.C.').prop("readonly", true).addClass('quiet');
      $('.m_zip input').val('20405').prop("readonly", true).addClass('quiet');
      $('.m_country input').val('USA').prop("readonly", true).addClass('quiet');
      $('.m_map input').val('https://goo.gl/maps/bFWBD6QfDLA2').prop("readonly", true).addClass('quiet');
      get_matter_data();
    } else {
      $('.venue-block input').prop("readonly", false).removeClass('quiet');
      $('.m_venue_name input').val('');
      $('.m_address input').val('');
      $('.m_city input').val('');
      $('.m_state input').val('');
      $('.m_zip input').val('');
      $('.m_country input').val('');
      $('.m_map input').val('');
      get_matter_data();
    }
  }

  set_1800f(true);
  $('.m_1800f input').prop('checked', true);
  $('.m_1800f input').click(function(){
    if (this.checked) {
      set_1800f(true);
    } else {
      set_1800f(false);
    }
  });


  function get_event_type(){
    var allVals = [];
    $('.event_types :checked').each(function() {
      allVals.push($(this).val());
    });
    return allVals;
  }



  // Prints the front-matter in a DIV on the page
  function print_matter(data){
    var post_type = get_post_type(); // gets the post type
    var date = matter_datetime(data['m_date'], data['m_time']);
    var end_date = matter_datetime(data['m_end_date'], data['m_end_time']);
    var title = "'" + matter_title(data['m_title']) + "'";
    var summary = "'" + escapeHtml(data['m_summary']) + "'";
    var slug = matter_slug(data['m_title']);
    var filename = get_filename(data['m_date'], slug);
    var commit_msg = matter_commit_msg(post_type, matter_title(data['m_title']));
    var commit_desc = matter_commit_desc(post_type, matter_title(data['m_title']), escapeHtml(data['m_summary']), slug, filename);
    var branch = matter_branch_name(post_type, slug);

    // Checks to see what the post type is and prints the front-matter for each type
    // ========================================
    // POST
    if (post_type == 'post') {
      // show_fields('m_date, m_title, m_summary, m_authors, m_categories, m_tag');
      var matter = [
        "---",
          "slug: " + slug,
          "date: " + date,
          "title: " + title,
          "summary: " + summary,
          "authors: " + list_items(data['m_authors']),
          "categories: " + list_items(data['m_categories']),
          "tag: " + list_items(data['m_tag']),
          "featured_image: " + '',
          "  uid: " + data['m_featuredimg'],
          "  alt: '" + escapeHtml(data['m_featuredimg_alt']) + "'",
        "---",
        ,
        "***Paste body content here. Delete this line***"
      ].join("\n");
      var body = encodeURIComponent(matter);
      var newfile = 'https://github.com/GSA/digitalgov.gov/new/master/content/posts/'+file_yearmo(data['m_date'])+'/draft?filename='+filename+'&value='+body+'&message='+commit_msg+'&description='+commit_desc+'&target_branch='+branch;



      // ========================================
      // DOC
    } else if (post_type == 'doc') {
      // show_fields('m_date, m_title, m_summary');
      var matter = [
        "---",
          "slug: " + slug,
          "date: " + date,
          "title: " + title,
          "summary: " + summary,
        "---",
        ,
        "***Paste body content here. Delete this line***"
      ].join("\n");
      var body = encodeURIComponent(matter);
      var newfile = 'https://github.com/GSA/digitalgov.gov/new/master/content/docs/draft?filename='+filename+'&value='+body+'&message='+commit_msg+'&description='+commit_desc+'&target_branch='+branch;





    // ========================================
    // EVENT
    } else if (post_type == 'event') {
      var event_type_array = get_event_type();
      var event_types = list_items(event_type_array);

      if (event_type_array.includes("in-person")) {
        var venue_data = {'venue_name': data['m_venue_name'], 'room': data['m_room'], 'address': data['m_address'], 'city': data['m_city'], 'state': data['m_state'], 'zip': data['m_zip'], 'country': data['m_country'], 'map': data['m_map']}
        var venue_frontmatter = "venue: " + build_venue_data(venue_data);
        $('.venue-block').show();
      } else{
        $('.venue-block').hide();
      }
      var matter = [
        "---",
          "slug: " + slug,
          "title: " + title,
          "summary: " + summary,
          "featured_image: " + '',
          "  uid: " + data['m_featuredimg'],
          "  alt: '" + escapeHtml(data['m_featuredimg_alt']) + "'",
          "event_type: " + event_types,
          "date: " + date,
          "end_date: " + end_date,
          "event_organizer: " + data['m_event_organizer'],
          "host: " + data['m_host'],
          "registration_url: " + data['m_registration_url'],
          "youtube_id: " + data['m_youtube_id'],
          venue_frontmatter,
        "---",
        ,
        "***Paste body content here. Delete this line***"
      ].join("\n");

      var body = encodeURIComponent(matter);
      var newfile = 'https://github.com/GSA/digitalgov.gov/new/master/content/events/'+file_yearmo(data['m_date'])+'/draft?filename='+filename+'&value='+body+'&message='+commit_msg+'&description='+commit_desc+'&target_branch='+branch;
    }

    $('#post-matter').text(matter);
    $('#filename').text(filename);
    $('#newfile').attr('href', newfile);
  }

});
