---


date: 2016-09-28 11:00:27 -0400
title: 'The New Vote.gov\: Leaner, Faster and Multi-Lingual'
summary: 'One year ago this week, we launched vote.gov (also known as vote.usa.gov). It&rsquo;s a concise and simple site with a single mission\: direct citizens through the voter registration process as quickly as possible. It was created by a joint team of USA.gov staffers and Presidential Innovation Fellows, all of whom work within the General Services'
authors: [yoz-grahame]
categories:
  - Code
  - Content
  - Design
  - 'User Testing &amp; Research'
  - UX
tags:
  - 18F
  - analytics
  - cloud
  - cloud.gov
  - content
  - content strategy
  - Customer Experience
  - CX
  - Draft Web Design Standards
  - GSA
  - metrics
  - multilingual
  - open source
  - social media
  - usa.gov
  - USAgov
  - user centered design
---

[One year ago this week](https://www.WHATEVER/2015/09/23/usa-gov-launches-vote-usa-gov-to-help-citizens-register-and-connect-with-states/), we launched [vote.gov](https://vote.gov/) (also known as vote.usa.gov). It’s a concise and simple site with a single mission: direct citizens through the voter registration process as quickly as possible. It was created by a joint team of [USA.gov](https://www.usa.gov/) staffers and [Presidential Innovation Fellows](https://www.whitehouse.gov/innovationfellows), all of whom work within the [General Services Administration](https://www.gsa.gov/) (GSA).

Did it work? Yes. In fact, it worked so well that Facebook made it the destination for their 2016 voter registration drive. Last Friday, it received over five million user visits, among the highest count ever recorded by a U.S. government website in a single day.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/09/600-x-544-new-2016-vote.gov-screenshot.jpg" alt="Screen capture of the new vote.gov homepage." %}

It was a good site, but there was room for improvement. The site was only available in English.The pages for individual states did not have URLs, so it was hard to share them with other people. We weren’t sure if the front page really needed to be that long.

So, earlier this year, USA.gov worked together with [18F](https://18f.gsa.gov/) to research, prototype, test, and implement an improved version of vote.gov.

Today, on National Voter Registration Day, we’re launching this new version.

The changes are small, but significant:

  * The whole site is now [available in Spanish](https://vote.gov/es/).
  * Thanks to usability testing and analytics, we realised we could remove much of the front page content. The site entrance is now considerably leaner and faster: the total data that a user has to download is less than one-third of the previous amount.
  * The visual design has been updated, and is now based on another USAGov & 18F collaboration: the [US Web Design Standards](https://standards.usa.gov/).
  * The site is fully functional without JavaScript.
  * All parts of the site are reachable via URLs, which allows people to share individual state pages directly in  either English or Spanish.

The largest change will be totally invisible to most users: we’ve switched from a bespoke single HTML page to a multi-page site deployed on 18F’s [cloud.gov](https://cloud.gov/) application platform. This gives our development process more flexibility, and made the above improvements much easier to implement. If this is the aspect that most interests you, feel free to take a look at the [source code](https://github.com/18F/vote-gov/). As always with our open source projects: code contributions are welcome!

Finally, please share the site. Voting is a great privilege of citizenship. We want everyone who can to register to vote.

_Yoz Grahame is a software developer at [18F](http://www.gsa.gov/portal/content/124182), part of the GSA’s new [Technology & Transformation Service](http://www.gsa.gov/portal/category/25729)._

_This post was originally published on the [USAgov blog](https://blog.usa.gov/)._