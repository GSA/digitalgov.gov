// Disabling no-undef because some vars are set in templates.
// @TODO: Remove var setting in Hugo templates.
/* eslint-disable no-undef */

function getBranchLink(branch) {
  const path = `https://github.com/GSA/digitalgov.gov/tree/${branch}`;
  const branchLink = `<a class="branch" href="${path}" title="${branch}">${branch}</a>`;
  return branchLink;
}

function formatDate(timezoneDate) {
  const inputDate = new Date(timezoneDate);

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

  const outputDate = inputDate.toLocaleDateString(undefined, dateOptions);
  const outputTime = inputDate
    .toLocaleTimeString("en-US", timeOptions)
    .replace("AM", "a.m.,")
    .replace("PM", "p.m.,");
  return `${outputDate} at ${outputTime}`;
}

function showLastCommit(data, branch) {
  const branchLink = getBranchLink(branch);
  const commitData = Array.isArray(data) ? data[0] : data;
  const commitDate = commitData.commit.committer.date;
  // eslint-disable-next-line no-undef
  const commitHistoryUrl = `https://github.com/GSA/digitalgov.gov/commits/${branch}/content/${filepath}`;

  const lastCommit = [
    branchLink,
    `<p>Last updated on <a href=${commitHistoryUrl}>
        <span class='commit-date'>${formatDate(commitDate)}</span>
      </a></p>`,
  ];

  // eslint-disable-next-line no-unused-vars, func-names
  $(".edit-file").each(function (i, itemsList) {
    $(this).append(lastCommit.join("\n"));
  });
}

jQuery(($) => {
  function buildEditFileLink() {
    // editpathURL is set the <head>
    if (editpathURL !== undefined) {
      // Build the edit link
      const edit = `<a target='_blank' class='edit-file-link' href='${editpathURL}' title='Edit in GitHub'>Edit</a>`;

      // Insert the .edit-file-link html into the .edit-file div and remove the .hidden class
      $("#page-data .edit-file").html(edit).removeClass("hidden");
    }
  }
  buildEditFileLink();

  function getCommitData() {
    if (branch === "main") {
      branchpath = "";
    } else {
      branchpath = `/${branch}`;
    }
    // eslint-disable-next-line camelcase
    const commitApiPath = `https://api.github.com/repos/${git_org}/${git_repo}/commits${branchpath}?path=/content/${filepath}`;

    if (commitApiPath !== undefined) {
      $.ajax({
        url: commitApiPath,
        dataType: "json",
      }).done((data) => {
        if (typeof data !== "undefined") {
          showLastCommit(data, branch);
        }
      });
    }
  }
  getCommitData(filepath);
});
