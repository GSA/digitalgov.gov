---
# View this page at https://digital.gov/resources/an-introduction-github
# Learn how to edit our pages at https://workflow.digital.gov

# slug (url path) — changing this requires a redirect
slug: an-introduction-github
date: 2020-06-18 13:00:00 -0500
title: "An introduction to GitHub"
deck: "How to use GitHub to create, manage, and publish website content."
summary: "Steps for managing website content in GitHub."

# see all topics at https://digital.gov/topics
topics:
  
  - code

# Page weight: controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 2

# Make it better ♥

---

{{< note >}}
In this first training video, Content Strategy and Design Specialist for GSA’s Technology Transformation Services (TTS), Malaika Carpenter, breaks down how to use GitHub into easy, practical steps and demonstrates ways to use this tool to create, manage and publish website content.
{{< /note >}}

{{< youtube lZD7_kmc_zs >}}

## What is GitHub?

[GitHub](https://github.com/) is a web-based interface that uses [Git](https://git-scm.com/), the open source version control software that lets multiple people make separate changes to web pages at the same time. As Carpenter notes, because it allows for real-time collaboration, GitHub encourages teams to work together to build and edit their site content.

## How can GitHub help my team and me?

GitHub allows multiple developers to work on a single project at the same time, reduces the risk of duplicative or conflicting work, and can help decrease production time. With GitHub, developers can build code, track changes, and innovate solutions to problems that might arise during the site development process simultaneously. Non-developers can also use it to create, edit, and update website content, which Carpenter demonstrates in her tutorial.

## How do I speak GitHub?

There are some common terms teams will need to understand when using GitHub. They are:

- **Git** &mdash; a tool that allows developers and others to use version control
- **GitHub** &mdash; one of many web interfaces for using Git
- **Organization (org)** &mdash; a grouping mechanism allowing teams to collaborate across many projects at once
- **Repository (repo)** &mdash; a folder in which all files and their version histories are stored
- **Branch** &mdash; a version of the repo that allows work without affecting other branches. Repos may have many branches for different possible changes being tested or considered, along with a default branch that serves as the source of truth.
- **Fork** &mdash; a new repository that inherits from a parent “upstream” repo. It is used to suggest changes to an “upstream” public repo by someone who doesn’t have access to edit in the repo’s home org.
- **Markdown (.md)** &mdash; a way to write content that converts plain text to formatted text.
- **Commit Changes** &mdash; a saved record of a change made to a file within the repo.
- **Pull Request (PR)** &mdash; a request for changes made to a branch to be pulled into another branch. Allows multiple users to see, discuss and review work being suggested.
- **Merge** &mdash; after a pull request is approved, the commit will be pulled in (or merged) from one branch to another and then, deployed on the live site
- **Issues** &mdash; allow users to report issues or bugs and track progress of assigning the fix for the issues.
- **[Federalist](https://federalist.18f.gov/features/)** &mdash; a platform that securely deploys a website from a GitHub repository in minutes and lets users preview proposed and published changes.
- **Projects** &mdash; allows you to use GitHub for project management and tracking a set of issues, either for a specific repo or an entire org
- **Wiki** &mdash; a section of a repo made for hosting documentation. Documentation may be in the repo’s README files instead.

Becoming fluent in GitHub terminology might seem intimidating at first, but the more team members engage with the platform, the easier it is to understand the ins and outs of GitHub.

## How do I use GitHub?

{{<note>}}
This second tutorial and live demonstration covers a variety of Git-related concepts so that you can have confidence using GitHub in the future. You can also [download the slides that are found in this presentation (.pptx, 28.4 MB, 41 slides)](https://s3.amazonaws.com/digitalgov/static/07-25-2023-github-basics-final.pptx).
{{< /note >}}

{{< youtube gLozuPQ34EQ >}}

In the demonstrations on this page, both presenters show how files are changed and merged in GitHub. This can be done by any member on the team, developers and non-developers, that has access to a GitHub repository. The following is a step-by-step method in which GitHub users can develop their websites:

- **Step 1** &mdash; Team members will open an issue via a project board.
- **Step 2** &mdash; Team members will create a new branch from the most recent version of the main branch in the repository where the entire team works to avoid conflicts.
- **Step 3** &mdash; Team members will add commits (edits or changes) to their respective branches.
- **Step 4** &mdash; Team members will open a pull request in which users can assign other team members to review content changes and internally discuss the details of the commits.
- **Step 5** &mdash; After waiting for the Federalist build to complete, team members can preview the change on a test version of the website and request reviewers to approve or comment on the change. Once the reviewers approve the pull request, the commits merge into the main branch and are published on the live site.

## What else do I need to know about GitHub?

When starting a project using issues and project boards, write your content on external word processors or via Google Docs, and then, save these files to their respective project boards. These steps allow developers and content creators to have a master copy of the file(s), thus helping them track changes over the course of a project.

In addition, developers should consider downloading [GitHub Desktop](https://desktop.github.com/). GitHub Desktop allows users to do everything that could be done on GitHub’s web interface, but locally on a user’s machine.

GitHub is built to be a collaborative interface. By allowing multiple users to work on the same project simultaneously and requiring cross-team approval for pull requests, GitHub not only allows for, but encourages collaboration within design teams. This type of collaboration can help produce a higher level of quality control.

## Additional resources

- [Intro to GitHub | TTS Handbook](https://handbook.tts.gsa.gov/intro-to-github/) - a guide on how to use GitHub from understanding basic level terminology to understanding more complicated concepts.
- [Simple Guide to GitHub for Non-Developers](https://unito.io/blog/guide-to-github-for-project-managers/) - a resource that explains the basics of GitHub language.
- [Getting Started with GitHub Desktop](https://help.github.com/en/desktop/getting-started-with-github-desktop) - a guide to help GitHub Desktop users understand how to work from a local computer.
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) - is a tool to help users transcribe plain text language into GitHub code.
