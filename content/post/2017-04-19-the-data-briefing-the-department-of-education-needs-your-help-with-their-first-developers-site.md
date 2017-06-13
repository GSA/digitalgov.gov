---


date: 2017-04-19 11:00:26 -0400
title: 'The Data Briefing\: The Department of Education Needs Your Help with their First Developers&amp;#8217; Site'
summary: 'The Department of Education (ED) launched its first developer site. The developer site is built on GitHub which will make it easier for ED to centralize their code and Application Programming Interfaces (APIs). Currently, ten APIs are on the developer site\: The Civil Right Data Collection (CRDC) APIs\: These three APIs give information on public'
authors: [bbrantley]
categories:
  - API
  - Data
tags:
  - API
  - data
  - Education
  - GitHub
  - U.S. Department of Education
---

The Department of Education (ED) launched its [first developer site](https://usedgov.github.io/). The developer site is built on GitHub which will make it easier for ED to centralize their code and Application Programming Interfaces (APIs). Currently, ten APIs are on the developer site:

  1. [The Civil Right Data Collection (CRDC) APIs](https://usedgov.github.io/api/crdc.html): These three APIs give information on public school enrollment in 2013–14, chronic absenteeism in 2013–14, and out-of-school suspension in 2013–14.
  2. [The College Scorecard API](https://collegescorecard.ed.gov/data/documentation/): This is data from the College Scorecard project which allows student and families to “[compare college costs and outcomes as they weigh the tradeoffs of different colleges, accounting for their own needs and educational goals](https://collegescorecard.ed.gov/assets/FullDataDocumentation.pdf).” (735 KB, PDF)
  3. [My Brother’s Keeper (MBK) APIs](https://usedgov.github.io/api/mbk.html): These are six datasets that provide information on “18- to 24-year-olds by race/ethnicity and sex, including high school dropout rates; college enrollment and graduation rates; rates of disconnected youth (who are neither working nor in school); imprisonment rates; and labor force participation rates.”


{% include image/full-width.html img="https://www.WHATEVER/files/2017/04/600-x-213-Department-of-Education-EDU-GitHub-Developer-site.jpg" alt="Screencapture of the Department of Education GitHub Developer site." %}

What is especially interesting about the CRDC and MBK APIs is that they are APIs created from flat files. Flat files can be a text document, spreadsheet, or similar type of file not in a database. ED used an [18F](https://www.gsa.gov/portal/content/124182) open source project, [AutoAPI](https://github.com/18F/autoapi), to convert the flat files into APIs. AutoAPI is a great leap forward because there are many agency datasets that are still in flat file formats. Having an automated system to build APIs from flat files can quickly increase the number of federal government APIs.

Organizing ED’s open source projects and APIs is the first goal for the developer site. The second goal is to [spread the news](https://usedgov.github.io/news/) about ED’s efforts on building out education’s “digital landscape.” Developers can learn more about ED’s open source projects by visiting the [repositories section](https://github.com/usedgov). ED will also use the developer site to highlight how other developers are using ED’s data resources.


{% include image/full-width.html img="https://www.WHATEVER/files/2017/04/600-x-300-Department-of-Education-EDU-GitHub-Developer-site.jpg" alt="Homepage of used.github.io" %}

[As ED explains](https://usedgov.github.io/news/launching-eds-developer-hub.html), the developer site is just the beginning. ED asks for help from the public — in tell ED “[what APIs you would like to see](https://github.com/usedgov/API-Program/issues/1) and [your ideas for improving our datasets and documentation](https://github.com/usedgov/API-Program/issues/2).” I suggest that ED map the education data ecosystem like the recent mapping of the [big data ecosystem of U.S. agriculture](https://www.WHATEVER/2016/02/03/the-data-briefing-mapping-the-big-data-ecosystem-of-u-s-agriculture/). Mapping the U.S. educational system’s big data ecosystem would be a major asset for developers and could greatly spur developing educational apps. Also, ED should make connections with child welfare datasets and with U.S. labor datasets. It would be interesting and beneficial to see education’s impact on improving child welfare and building a robust, educated workforce.

_GitHub is used for illustrative purposes and does not imply endorsement by the U.S. Federal government or any specific Federal agency._

_Each week, [The Data Briefing](https://www.WHATEVER/tag/the-data-briefing/) showcases the latest federal data news and trends. Visit this blog every week to learn how data is transforming government and improving government services for the American people. If you have ideas for a topic or have questions about government data, please [contact me via email](mailto:William.Brantley@uspto.gov?subject=The%20Data%20Briefing)._

_[Dr. William Brantley](https://www.WHATEVER/author/bbrantley/) is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. All opinions are his own and do not reflect the opinions of the USPTO or GSA._