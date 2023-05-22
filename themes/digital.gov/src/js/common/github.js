jQuery(function ($) {
  const editFile = `.edit-file`;
  // Builds the Edit link on posts/pages/events to point to the GitHub file
  function build_edit_file_link() {
    // editpathURL is set the <head>
    if (editpathURL !== undefined) {
      // Build the edit link
      var edit = `<a target='_blank' class='edit-file-link' href='${editpathURL}' title='Edit in GitHub'>Edit</a>`;

      // Insert the .edit-file-link html into the .edit-file div and remove the .hidden class
      $(`#page-data ${editFile}`).html(edit).removeClass("hidden");
    }
  }
  build_edit_file_link();

  function get_commit_data() {
    if (branch == "main") {
      branchpath = "";
    } else {
      branchpath = `/${branch}`;
    }
    var commit_api_path = `https://api.github.com/repos/${git_org}/${git_repo}/commits${branchpath}?path=/content/${filepath}`;
    if (commit_api_path !== undefined) {
      $.ajax({
        url: commit_api_path,
        dataType: "json",
      }).done(function (data) {
        if (typeof data !== "undefined") {
          show_last_commit(data, branch);
        }
      });
    }
  }
  get_commit_data(filepath);

  function get_branch_link(branch) {
    var path = `https://github.com/GSA/digitalgov.gov/tree/${branch}`;
    var branch_link = `<a class="branch" href="${path}" title="${branch}">${branch}</a>`;
    return branch_link;
  }

  function show_last_commit(data, branch) {
    var branch_link = get_branch_link(branch);
    var commit_data = Array.isArray(data) ? data[0] : data;
    var commit_date = commit_data.commit.committer.date;
    var commit_history_url = `https://github.com/GSA/digitalgov.gov/commits/${branch}/content/${filepath}`;

    last_commit = [
      branch_link,
      `<p>Last updated on <a href=${commit_history_url}>
        <span class='commit-date'>${formatDate(commit_date)}</span>
      </a></p>`,
    ];

    $(`${editFile}`).each(function (i, items_list) {
      $(this).append(last_commit.join("\n"));
    });
  }
});

function formatDate(timezone_date) {
  const input_date = new Date(timezone_date);

  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "shortGeneric",
  };

  const output_date = input_date.toLocaleDateString(undefined, dateOptions);
  const output_time = input_date
    .toLocaleTimeString("en-US", timeOptions)
    .replace("AM", "a.m.,")
    .replace("PM", "p.m.,");
  return `${output_date} at ${output_time}`;
}
