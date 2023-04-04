jQuery(function ($) {
  // Builds the Edit link on posts/pages/events to point to the GitHub file
  function build_edit_file_link() {
    // editpathURL is set the <head>
    if (editpathURL !== undefined) {
      // Build the edit link
      var edit = `<a target='_blank' class='edit_file_link' href='${editpathURL}' title='Edit in GitHub'><span>Edit</span></a>`;

      // Insert the .edit_file_link html into the .edit_file div and remove the .hidden class
      $("#page-data .edit_file").html(edit).removeClass("hidden");
    }
  }
  build_edit_file_link();

  function get_commit_data() {
    if (branch == "main") {
      branchpath = "";
    } else {
      branchpath = "/" + branch;
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
    var commit_data = $.isArray(data) ? data[0] : data;
    var commit_date = commit_data.commit.committer.date;
    var commit_author = (commit_data.author || {}).login;
    var commit_author_url = `https://github.com/${commit_author}`;
    var commit_history_url = `https://github.com/GSA/digitalgov.gov/commits/${branch}/content/${filepath}`;
    if (commit_author) {
      last_commit = [
        branch_link,
        `<p>Last updated
         on <a href="${commit_history_url}"><span class="commit-date">${formatDate(
          commit_date
        )}</span>
        </a></p>`,
      ];
    } else {
      last_commit = [
        branch_link,
        `<p>Last updated on <a href=${commit_history_url}>
          <span class='commit-date'>${formatDate(commit_date)}</span>
        </a></p>`,
      ];
    }
    $(".edit_file").each(function (i, items_list) {
      $(this).append(last_commit.join("\n"));
    });
  }

  function show_branch_last_commit(data, branch) {
    var branch_link = get_branch_link(branch);
    var last_commit = [branch_link].join("\n");
    $(".edit_file").each(function (i, items_list) {
      $(this).append(last_commit).removeClass("hidden");
    });
  }

  function getFormattedDate(d) {
    var date = new Date(d);
    date.setUTCHours(date.getUTCHours() - 4);
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth().toString();
    var hours;
    month = monthNames[month];
    var day = date.getUTCDate().toString();
    day = day.length > 1 ? day : "0" + day;
    var globalhours = parseInt(date.getUTCHours().toString());
    if (globalhours === 0) {
      hours = 12;
    } else if (globalhours > 12) {
      hours = globalhours - 12;
    } else {
      hours = globalhours;
    }
    var minutes = date.getUTCMinutes().toString();
    minutes = minutes.length > 1 ? minutes : "0" + minutes;
    var seconds = date.getUTCSeconds().toString();
    var ampm;
    if (globalhours > 11) {
      ampm = "pm";
    } else {
      ampm = "am";
    }
    var date_string = `${month} ${day}, ${year} at ${hours}:${minutes} ${ampm} ET`;
    return date_string;
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
  const output_time = input_date.toLocaleTimeString("en-US", timeOptions).replace('AM', 'a.m.,').replace('PM', 'p.m.,');
  return `${output_date} at ${output_time}`;
}
