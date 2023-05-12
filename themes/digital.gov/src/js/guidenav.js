// Disabling fun-names because jQuery relying on "this".
/* eslint-disable func-names */
jQuery(($) => {
  const topListItem = $(".usa-current").parents("li").last();
  $(topListItem).addClass("current");

  // Cleans up the #TableOfContents from HUGO
  // $('#TableOfContents ul').addClass('add-list-reset');
  $("#TableOfContents > ul:first").contents().unwrap();
  $("#TableOfContents > li:first").contents().unwrap();
  $("#TableOfContents > ul > ul").remove();

  function formatToc(hash) {
    // for each of the items in #TableOfContents
    $("#TableOfContents > ul").each(function (i, itemsList) {
      $(itemsList)
        .find("li a")
        // eslint-disable-next-line no-shadow
        .each(function (i, li) {
          // remove any 'active' classes
          $(li).removeClass("active");

          // Get the title for the Title attribute
          const title = $(li).html();

          // get the anchor link of the li
          const anchor = $(li).attr("href").substring(1);

          // If the anchor == hash, then set that <li> to 'active'
          let state;
          if (anchor === hash) {
            state = "active";
          } else {
            state = "";
          }
          $(li).attr("title", title).attr("name", anchor).attr("class", state);
        });
    });
  }

  // Looks out for a click on the in-page nav
  // passes the hash onto format_toc()
  $("#TableOfContents a").on("click", function () {
    const hash = $(this).attr("name");
    formatToc(hash);
  });

  // If the page loads, and there is a hash in the URL,
  // pass that along to format_toc()
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); // Puts hash in variable, and removes the # character
    formatToc(hash);
  }

  if ($("#TableOfContents").length > 0) {
    $(this).show();
  } else {
    $(this).hide();
  }
});
