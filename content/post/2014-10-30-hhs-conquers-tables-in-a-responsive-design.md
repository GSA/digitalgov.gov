---


date: 2014-10-30 10:00:13 -0400
title: 'HHS Conquers Tables in a Responsive Design'
summary: 'This year, we moved HHS.gov to a responsive template to ensure that users accessing our site in a mobile environment had the best possible experience. Our department faced several challenges in moving a site the size of HHS.gov into a responsive template and one of those challenges surrounded our need to make tables work in'
authors: [clair-koroma]
categories:
  - Mobile
  - Monthly Theme
tags:
  - HHS
  - Mobile UX Guideline 5
  - responsive web design
  - United States Department of Health and Human Services
---

This year, we moved [HHS.gov](http://www.hhs.gov) to a responsive template to ensure that users accessing our site in a mobile environment had the best possible experience. Our department faced several challenges in moving a site the size of HHS.gov into a responsive template and one of those challenges surrounded our need to make tables work in a responsive environment.

Because of the nature of the information our department provides to the public, our use of tables is an integral part of how we communicate information. Not only do we use [a lot of tables like other agencies](https://www.WHATEVER/2014/10/28/trends-on-tuesday-8-ways-to-format-tables-for-responsive-web-design/ "Trends on Tuesday: 8 Ways To Format Tables for Responsive Web Design"), we also use complex tables and we have a lot of them, over 3,000 of our pages have tables. We considered fixing them as we found them, but that would have opened us up to a long, labor-intensive process that left a lot of our content inaccessible on mobile. So we had to figure out a way to:

  1. Deal with a large volume of legacy tables
  2. Present the data without omitting any of it, since for most of tables the entirety of the data is important to providing accurate information
  3. Fix all of the tables in the least labor-intensive way, which lends to a code solution
  4. Implement a solution that would work well for any new table we created after the solution is implemented

In considering our goals, we determined that we needed an approach that allowed us to avoid touching the content. We did a lot of research on what others were doing in this arena and found solutions in which the [table content was linearized](http://www.w3.org/TR/WCAG10-HTML-TECHS/#wrapped-text) interesting, but would not work for us because of the diversity in tables that we have on our site. We determined we would try to find an approach using code, specifically CSS. Since we did not want to have to do any direct manipulation to the actual tables or their code, we knew that the code could not be a class or ID level, but it would have to be a tag level code, so we focused on working on a code for the “table” tag. There are two main things that made this solution a good candidate for us:

  1. **Our html is well coded because of our adherence to 508 guidelines.** We do not have a lot of “junk” html on our sites in the base code. Additionally, our tables are coded using “super” html so that all row and column scopes are properly defined and no tables are nested, so we were confident that when we implemented a CSS solution, the code would “behave” properly with the right definitions for the style.
  2. **We trusted the power of the swipe in a mobile environment.** We recognized that people intuitively use the swipe to access information on mobile, so if we could implement a CSS code that acknowledged that swipe power and allowed the user to use the device in a way that is natural to them in accessing the information, then we would achieve our goal of making tables mobile friendly.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-428-HHS-table-code.jpg" alt="600-x-428-HHS-table-code" %}

We started with the “table” tag and applied the “block” attribute to it. This allowed the table to show in a block within the mobile environment. Our second step is to control the overflow of the table so that on the Y axis it is hidden, i.e. no vertical scroll bar, and on the X access it is “auto” so if needed a scroll bar will appear so that the user can swipe right and left.

You can hear more about our approach from me and the developer in the 15 minute video embedded in this post. In addition we have shared the code snippet we developed for tables on the [Mobile Code Sharing Catalog](http://gsa.github.io/Mobile-Code-Catalog/web_html.html) so other agencies can use it for their efforts. If you have questions, please let me know in the comments of this post.

[youtube=http://www.youtube.com/watch?v=1HMsJ5mUFEc&w=600]

&nbsp;

_**Clair Koroma** is a Public Affairs Specialist in the Digital Communications Division of the Department of Health and Human Services._