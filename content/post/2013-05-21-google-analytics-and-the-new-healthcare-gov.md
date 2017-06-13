---


date: 2013-05-21 8:53:22 -0400
title: 'Google Analytics and the New Healthcare.gov'
summary: 'The new Healthcare.gov will sort content according to user demand with a new plugin developed for the site. For a content-heavy site like healthcare.gov, this option will allow HHS to serve popular content to readers quickly. In April we told you about&nbsp;Jekyll. The new Healthcare.gov will use this free'
authors: [lnelson]
categories:
  - Code
tags:
  - HHS
  - United States Department of Health and Human Services
---

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/01/healthcare.gov-10-253x220-250x217.jpg" alt="Screenshot of Healthcare.gov homepage" %}
The new Healthcare.gov will sort content according to user demand with a new plugin developed for the site. For a content-heavy site like healthcare.gov, this option will allow HHS to serve popular content to readers quickly.

In April we told you about [Jekyll](http://www.hhs.gov/digitalstrategy/blog/2013/04/new-heathcare-open-cms-free.html). The new Healthcare.gov will use this free open-source solution to create flat webpages without the long load times associated with a traditional content management system (CMS). Developers created a [new plugin](https://github.com/developmentseed/jekyll-ga) to work with the system to make it possible for the Department to quickly and dynamically provide the site’s most popular information to visitors . This plugin will allow HHS to take advantage of some of the best features a CMS offers without a heavy load on the site’s servers.

This new plugin, called ‘Jekyll-ga,’ pings Google Analytics each time Jekyll updates the website. By checking Google Analytics, HHS can to present dynamic lists of popular content while still taking advantage of the speed Jekyll offers.

By default, Jekyll sorts content chronologically and alphabetically. This works well for blogs, but now with jekyll-ga, we have many more options. Any metric you can track in Google Analytics — including custom variables — can be used to sort content or as a variable in our flexible templates. This will allow HHS to promote health options popular among a customer’s peers, greatly increasing the potential for satisfaction in the [Health Marketplace](http://www.healthcare.gov/marketplace/).

The new plugin is publicly available on [github](https://github.com/developmentseed/jekyll-ga)  so it can be use on other Jekyll sites. Check back soon for more in our ongoing series about the upcoming relaunch of healthcare.gov.

Originally published on the HHS.gov <a href="http://www.hhs.gov/digitalstrategy/blog/2013/04/new-heathcare-open-cms-free.html" target="_blank">Digital Strategy Blog</a> by David Cole, a contractor leading the technical strategy and development of heathcare.gov with contributions from Chris Bernstein, Digital Communications Division, Public Affairs, HHS.