---


date: 2015-09-04 1:00:18 -0400
title: 'How the CIO Council Made Our Open Data Prioritization Tool Kit More Open'
summary: 'Shown in Figure 1, the Open Data Prioritization Toolkit is categorized into phases of understanding, evaluating, and opening datasets. It also shows alignment to support tools designed to help your agency throughout each phase. The provided tools are sample templates to guide agencies as they examine datasets and customize them based on their'
authors: [cio-council-operations-staff]
categories:
  - Content
  - Data
tags:
  - open data
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/09/594-x-347-CIO-Open-Data-Prioritization-Toolkit-figure-1.jpg" alt="Shown in Figure 1, the Open Data Prioritization Toolkit is categorized into phases of understanding, evaluating, and opening datasets. It also shows alignment to support tools designed to help your agency throughout each phase. The provided tools are sample templates to guide agencies as they examine datasets and customize them based on their unique requirements." %}

A few weeks ago the Council’s Innovation Committee released the [Open Data Prioritization Toolkit](https://cio.gov/cio-council-releases-open-data-prioritization-toolkit/). The response to the toolkit has been positive, but we also heard back from the community asking why the Open Data toolkit’s summary was locked up in a non-open format—PDF.

The Council Operations Team noted the irony of publishing a guide to opening data in a non-open format made a decision to eat our own dogfood.After some scouring we found a few open source tools to make the summary a markdown document we could share in HTML format.

Below is a rundown of the tools we used and how we did it. This is not an endorsement of specific tools, but it is an endorsement of making open the default for government publishing.

  1. We used [Ben Balter’s](https://twitter.com/BenBalter) [word-to-markdown tool](http://word-to-markdown.herokuapp.com/) to convert our .docx copy of the summary to markdown.
  2. We pasted the markdown into [StackEdit](https://stackedit.io/) to convert it to HTML. In StackEdit, we did have to clean up the HTML a bit. We reinserted the figure images (hosted on CIO.gov), re-linked the table of contents, and recreated the footnotes.
  3. We exported the HTML and published on CIO.gov.

Some notes:

  * You can still use StackEdit to export to PDF, too.
  * An alternative to StackEdit is [Dillinger.io](http://dillinger.io/).
  * We found this [cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) helpful with formatting in markdown.
  * We like using markdown because it allows you to focus on the content and not the formatting.

Questions? Tweet us [@ciodotgov](https://twitter.com/ciodotgov).

_This post was originally published on the [CIO Council blog](https://cio.gov/cioc-blog/) by the CIO Council Operations Staff._

&nbsp;