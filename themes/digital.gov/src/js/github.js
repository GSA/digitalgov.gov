// Disabling no-undef because some vars are set in templates.
// @TODO: Remove var setting in Hugo templates.
// Sets the timestamp for the last github update timestamp
/* eslint-disable no-undef */

// eslint-disable-next-line func-names
(function () {
  const { gitOrg, gitRepo, gitBranch, gitFilepath, gitEditpathUrl } =
    document.querySelector("#githubRepo").dataset;

  const editFileButton = document.querySelector(".edit-file");
  const editPageLink = document.querySelector("#page-data .edit-file");

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
  function showLastCommit(data) {
    const commitData = Array.isArray(data) ? data[0] : data;
    const commitDate = commitData.commit.committer.date;
    const commitHistoryUrl = `https://github.com/GSA/digitalgov.gov/commits/${gitBranch}/content/${gitFilepath}`;

    const lastCommitParagraph = Object.assign(document.createElement("p"), {
      innerHTML: "Last updated on ",
    });

    const lastCommitLink = Object.assign(document.createElement("a"), {
      href: `${commitHistoryUrl}`,
    });

    const lastCommitSpan = Object.assign(document.createElement("span"), {
      classList: "commit-date",
      innerHTML: `${formatDate(commitDate)}`,
    });

    lastCommitLink.appendChild(lastCommitSpan);
    lastCommitParagraph.appendChild(lastCommitLink);

    if (editFileButton) {
      editFileButton.appendChild(lastCommitParagraph);
    }
  }

  function buildEditFileLink() {
    // gitEditpathURL is set the <head>
    if (gitEditpathUrl !== undefined) {
      const githubEditLink = Object.assign(document.createElement("a"), {
        classList: "edit-file-link",
        href: `${gitEditpathUrl}`,
        innerHTML: "Edit",
        target: "_blank",
        title: "Edit in GitHub",
      });

      if (editPageLink) editPageLink.appendChild(githubEditLink);
    }
  }
  buildEditFileLink();

  async function getCommitData() {
    if (gitBranch === "main") {
      branchpath = "";
    } else {
      branchpath = `/${gitBranch}`;
    }
    // eslint-disable-next-line camelcase
    const commitApiPath = `https://api.github.com/repos/${gitOrg}/${gitRepo}/commits${branchpath}?path=/content/${gitFilepath}`;

    // TODO: replace $.ajax with fetch request
    if (commitApiPath !== undefined) {
      const githubResponse = await fetch(`${commitApiPath}`);
      const githubData = await githubResponse.json();

      if (typeof githubData !== "undefined") {
        showLastCommit(githubData);
      }
    }
  }
  getCommitData(gitFilepath);
})();
