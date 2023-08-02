/**
 * Sets the most recent commit timestamp for the page
 * This is displayed in #page-data section at the bottom of the page
 * Sets git details from the <head> tag by reading data-attributes from a script tag
 * Disabling no-undef because some vars are set in templates.
 */

// eslint-disable-next-line func-names
(function () {
  const editFileButton = document.querySelector(".edit-file");
  const editPageLink = document.querySelector("#page-data .edit-file");
  let gitFilepath;
  let gitBranch;

  const gitEditFilePath = `https://github.com/GSA/digitalgov.gov/edit/${gitBranch}/content/${gitFilepath}`;

  /**
   * get hugo file path from each hugo resource
   * example string: news/2023/07/2023-07-19-gsa-shared-service-provider-program-guide.md
   */
  if (editPageLink) {
    gitFilepath = document
      .querySelector("div[data-edit-this]")
      .getAttribute("data-edit-this");
  } else {
    gitFilepath = "";
  }

  /**
   * Set the branch from the URL path
   * If on cloud.pages then get the branch name from the URL
   * Otherwise, use main for local host and production
   */
  const host = window.location.hostname;
  if (host.includes("/preview/gsa")) {
    // eslint-disable-next-line prefer-destructuring
    gitBranch = window.location.pathname.split("/")[4];
  } else {
    gitBranch = "main";
  }

  /**
   * format date from github ISO format to human friendly string
   * @param {timezone} timezoneDate YYYY-MM-DDTHH:MM:SSZ
   * @returns {string} Formatted string that reads like "Jul 6, 2023 at 5:23 p.m., ET"
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

  /**
   * display github commit date in <p> tag at bottom of page
   * @param {json} data response object from github api /commit endpoint
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
    // gitEditFilePath is referenced in the <head> on a script tag
    if (gitEditFilePath !== undefined) {
      const githubEditLink = Object.assign(document.createElement("a"), {
        classList: "edit-file-link",
        href: `${gitEditFilePath}`,
        innerHTML: "Edit",
        target: "_blank",
        title: "Edit in GitHub",
      });

      if (editPageLink) editPageLink.appendChild(githubEditLink);
    }
  }
  buildEditFileLink();

  /**
   * use the gitFilepath string to retrieve the commit details from Github API
   * @param {string} gitFilepath path of hugo file that returns events/2023/06/2023-06-08-uswds-monthly-call-june-2023.md
   */
  async function getCommitData() {
    let branchPath;
    if (gitBranch === "main") {
      branchPath = "";
    } else {
      branchPath = `/${gitBranch}`;
    }

    // eslint-disable-next-line camelcase
    const commitApiPath = `https://api.github.com/repos/gsa/digitalgov.gov/commits${branchPath}?path=/content/${gitFilepath}`;

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
  getCommitData();
})();
