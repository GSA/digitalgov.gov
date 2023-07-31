// Disabling no-undef because some vars are set in templates.
// @TODO: Remove var setting in Hugo templates.
// Sets the timestamp for the last github update timestamp
/* eslint-disable no-undef */

const { gitOrg, gitRepo, gitBranch, gitFilepath, gitEditpathUrl } =
  document.querySelector("#githubRepo").dataset;

// return the branchlink as a link to github
function getBranchLink(branch) {
  const path = `https://github.com/GSA/digitalgov.gov/tree/${branch}`;
  const branchLink = `<a class="branch" href="${path}" title="${gitBranch}">${gitBranch}</a>`;
  return branchLink;
}

// format date to display at bottom of the page
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

// format data from github api to display as date time string on bottom of page
function showLastCommit(data, branch) {
  const branchLink = getBranchLink(branch);
  const commitData = Array.isArray(data) ? data[0] : data;
  const commitDate = commitData.commit.committer.date;
  // eslint-disable-next-line no-undef
  const commitHistoryUrl = `https://github.com/GSA/digitalgov.gov/commits/${gitBranch}/content/${gitFilepath}`;

  const lastCommit = [
    branchLink,
    `<p>Last updated on <a href=${commitHistoryUrl}>
        <span class='commit-date'>${formatDate(commitDate)}</span>
      </a></p>`,
  ];

  // eslint-disable-next-line no-unused-vars, func-names
  $(".edit-file").each(function (i, itemsList) {
    // TODO: replace jquery each with native forEach
    $(this).append(lastCommit.join("\n"));
  });
}

jQuery(($) => {
  function buildEditFileLink() {
    // gitEditpathURL is set the <head>
    if (gitEditpathUrl !== undefined) {
      // Build the edit link
      const edit = `<a target='_blank' class='edit-file-link' href='${gitEditpathUrl}' title='Edit in GitHub'>Edit</a>`;

      // Insert the .edit-file-link html into the .edit-file div and remove the .hidden class
      // TODO: replace jquery methods with native javascript
      $("#page-data .edit-file").html(edit).removeClass("hidden");
    }
  }
  buildEditFileLink();

  function getCommitData() {
    if (gitBranch === "main") {
      branchpath = "";
    } else {
      branchpath = `/${gitBranch}`;
    }
    // eslint-disable-next-line camelcase
    const commitApiPath = `https://api.github.com/repos/${gitOrg}/${gitRepo}/commits${branchpath}?path=/content/${gitFilepath}`;

    // TODO: replace $.ajax with fetch request
    if (commitApiPath !== undefined) {
      $.ajax({
        url: commitApiPath,
        dataType: "json",
      }).done((data) => {
        if (typeof data !== "undefined") {
          showLastCommit(data, gitBranch);
        }
      });
    }
  }
  getCommitData(gitFilepath);
});
