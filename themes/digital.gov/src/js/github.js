/**
 * Sets the most recent commit timestamp for the page
 * This is displayed in #page-data section at the bottom of the page
 */

// eslint-disable-next-line func-names
(function () {
  const editFileButton = document.querySelector(".edit-file");
  const editPageLink = document.querySelector("#page-data .edit-file");
  let gitFilepath;
  let gitBranch;

  const gitEditFilePath = `https://github.com/GSA/digitalgov.gov/edit/${gitBranch}/content/${gitFilepath}`;

  /**
   * Get hugo file path from the data-edit-this attribute
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
   * format github ISO date format to human friendly string
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
   * creates the markup and adds the commit date and URL path for editing on github
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
   * Add "Edit" link to the #page-data element before the "Last updated on" commit timestamp
   * Checks if page has the #page-data element for single pages, not displayed on landing pages
   */
  function buildEditFileLink() {
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

  /**
   * Retrieves Github API commit information for hugo resource/page
   * @param {string} gitFilepath path of hugo file that returns "events/2023/06/2023-06-08-uswds-monthly-call-june-2023.md"
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

  buildEditFileLink();
  getCommitData();
})();
