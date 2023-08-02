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

  /**
   * format date from github ISO format to human friendly string
   * @param {timezone} timezoneDate YYYY-MM-DDTHH:MM:SSZ
   * @returns {string} Jul 6, 2023 at 5:23 p.m., ET
   */
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

  //
  /**
   * display github commit date in <p> tag at bottom of page
   * @param {json} data response object from github api /commit endpoint
   * @returns none
   */
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

  /**
   * if #page-data component exists, add "edit in github" button to it
   * @return none
   */
  function buildEditFileLink() {
    // gitEditpathURL is referenced in the <head> on a script tag
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

  /**
   * use the gitFilepath string to retrieve the commit details from github api
   * @param {string} gitFilepath path of hugo file: events/2023/06/2023-06-08-uswds-monthly-call-june-2023.md
   */
  async function getCommitData(gitFilepath) {
    if (gitBranch === "main") {
      branchpath = "";
    } else {
      branchpath = `/${gitBranch}`;
    }
    // eslint-disable-next-line camelcase
    const commitApiPath = `https://api.github.com/repos/${gitOrg}/${gitRepo}/commits${branchpath}?path=/content/${gitFilepath}`;

    if (commitApiPath !== undefined) {
      const githubResponse = await fetch(`${commitApiPath}`);

      if (!githubResponse.ok) {
        throw new Error(`HTTP error! status: ${githubResponse.status}`);
      }

      const githubData = await githubResponse.json();

      if (typeof githubData !== "undefined" || githubData.length !== 0) {
        showLastCommit(githubData);
      }
    }
  }
  getCommitData(`events/2023/06/2023-06-08-uswds-monthly-call-june-2023.md`);
})();
