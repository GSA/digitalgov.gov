---
slug: how-the-department-of-education-automated-publication-of-press-releases
date: 2012-11-21 15:59:49 -0400
title: How the Department of Education Automated Publication of Press Releases
summary: A case study on how the Department of Education used the Drupal content management system (CMS) to publish press releases as structured content to automatically generate listing pages and reduce errors and posting time. The Challenge The Department of Education was posting press releases using a system that posted them as static HTML files. The
authors:
  - jennifer-reeves
topics:
  - content
  - CMS
  - content-management-system
  - drupal
  - structured-content
  - us-department-of-education
---

{{< legacy-img src="2014/07/250-x-188-Web-design-concept-Gears-on-Html-Code-background-maxkabakov-iStock-Thinkstock-469530729.jpg" alt="Web design concept: Gears on HTML Code background" caption="" >}}

A case study on how the Department of Education used the Drupal [content management system]({{< ref "2013-10-30-content-management-systems-toolkit.md" >}} "Content Management Systems Toolkit") (CMS) to publish press releases as structured content to automatically generate listing pages and reduce errors and posting time.

## The Challenge

The Department of Education was posting press releases using a system that posted them as static HTML files. The site design required press releases to be linked from several different pages, but the system was not designed to create those links automatically. Every time a new press release was posted, content managers had to manually link to multiple locations: the correct monthly archive page, the latest press releases page, the homepage headline area, and the site’s RSS feed.

## The Solution

They moved to a CMS (Drupal) that could store the parts of a press release as data and use database queries to generate the listing pages from that data. Other database-driven CMS will allow you to do this, but may require more development work. Blogging software (like WordPress) can provide this basic functionality, too, if you post your news items as blog posts.

With Drupal, they decided which pieces of information would be useful for sorting and listing (for example, title, press release data, excerpt, keywords), and created a form in the system that would collect each piece in a separate field. They then used the system’s tools (Drupal Views) to build very simple database queries that would generate the listing pages and RSS feeds.

## Results {{< legacy-img src="2014/07/250-x-188-Electronic-documents-sharing-Pei-ling-Hoo-Hemera-thinkstock-99708065.jpg" alt="Electronic documents sharing" caption="" >}}

They reduced the amount of work associated with posting press releases by about 15 minutes for each one, and removed several opportunities for error. Additionally, the new system allowed easy creation of multiple listings of press releases, such as all press releases tagged with a particular keyword. This would have been impossible with the manual system. Each listing page also has its own RSS feed, which can then be used for further syndication.

## Examples

  * [Automatic press release listing](http://www.ed.gov/news/press-releases) on Department of Education site
  * [Keyword-filtered press release listing](http://www.ed.gov/news/press-releases/tags/esea-flexibility) on Department of Education site
