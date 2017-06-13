---


date: 2014-07-16 1:00:03 -0400
title: 'Hot off the Press\: 18F&rsquo;s API Standards'
summary: 'We recently released the first version of our API Standards&mdash;a set of recommendations and guidelines for API production. It is our intention that every 18F API meet these standards, to help us ensure a baseline quality and consistency across all APIs we offer now and in the future. These standards guide the'
authors: [alan-delevie, eric-mill]
categories:
  - API
tags:
  - 18F
  - White House
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/07/250-x-264-18F-blue-light-bulb.jpg" alt="250-x-264-18F-blue-light-bulb" %}We recently released the first version of our [API Standards](https://github.com/18F/api-standards)—a set of recommendations and guidelines for API production. It is our intention that every 18F API meet these standards, to help us ensure a baseline quality and consistency across all APIs we offer now and in the future.

These standards guide the user-facing implementation details of an API. Wherever possible, the standards prescribe a goal instead of a specific technology. What was once universally recommended about APIs just a few years ago may be dated today. For example, while the best issue tracker may change every couple years, the need for an obvious point of contact to the API producer is more enduring.

The standards are generally technology-neutral, with a few specific opinions when warranted. For example, our standards don’t allow for the use of JSONP, as it raises [security](https://en.wikipedia.org/wiki/JSONP#Security_concerns) and [performance](https://gist.github.com/tmcw/6244497#practical-concerns) concerns.

Though these standards are part of a living document, a focus on goals—and not on tools—will increase their shelf-life. By writing these standards under a goal-oriented and “sane defaults” approach, we hope they help us achieve API objectives that will never change: utility for the users and respect for their time and effort.

We began drafting our standards after forking the White House’s own API standards. By [publishing their standards in the open](https://github.com/WhiteHouse/api-standards) so others could benefit, the White House set an important example—one that we greatly support! Similarly, we invite you to fork our API standards and modify as needed for your own organization’s use.

_This post was originally published on the [18f blog](https://18f.gsa.gov/) by Alan DeLevie and Eric Mill of [18f](https://18f.gsa.gov/)._