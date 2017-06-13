---


date: 2012-09-13 3:37:35 -0400
title: 'Medicare.gov Responsive Redesign'
summary: 'Mobile Gov Experiences are agency stories about creating anytime, anywhere, any device government services and info. This entry is a story shared by the Centers for Medicare and Medicaid Services. Medicare.gov is the consumer website for Medicare beneficiaries, caregivers, and advocates. The site includes information about Medicare plans, coverage, and care quality'
authors: [jon-booth]
categories:
  - Mobile
tags:
  - CMS
  - HHS
  - Mobile Gov Experience
  - responsive web design
---

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/Medicare-tablet-vertical-187x250.jpg" alt="Medicare-tablet-vertical" %}
Mobile Gov Experiences are agency stories about creating anytime, anywhere, any device government services and info. This entry is a story shared by the **Centers for Medicare and Medicaid Services**._

<a href="http://www.medicare.gov" rel="nofollow">Medicare.gov</a> is the consumer website for Medicare beneficiaries, caregivers, and advocates. The site includes information about Medicare plans, coverage, and care quality managed by the Centers for Medicare & Medicaid Services within Department of Health and Human Services. Initially, the site was going to be improved to implement a web content management system that would allow for easier maintenance of content on the site.

Part of this effort was to reorganize the information most requested by users to make it more easily accessible from the homepage. Based on that, we decided a visual refresh of the homepage was needed as well. We had a preliminary design for the desktop view and refined this initial design after seeing the opportunity to rebuild the front end (home page and the rest of the website) with responsive design in order to allow users on any devices to use the site.

## Why We Did It

Our goal for the new responsive Medicare.gov was to take advantage of the planned redesign to incorporate responsive design elements to ensure the site would be device agnostic. The idea was to anticipate the influx of increased mobile traffic based on the growing mobile adoption rates in the country and align to the Obama Administration’s Digital Government Strategy.

Rather than build native apps for specific devices, responsive design was determined to be the optimal solution. It allowed us to build a single HTML5/CSS3 page template framework that would simplify overall maintenance as well as improve the end user experience.

## What We Did

We developed a responsive framework using existing open source frameworks. For the base of our responsive framework, we chose Bootstrap because of its simple and flexible use of HTML5, CSS3, and JavaScript. The templates were built on top of Bootstrap with custom media queries based on the different resolutions that we wanted to support.

Media queries detect the current resolution and serve the user different views based on their current browser resolution. The style sheet that was developed supports four different resolutions: 980 pixels and up for desktop and tablets, 768 pixels for tablets in portrait mode, and two breakpoints for smartphones, 480 pixels and 320 pixels.

These different breakpoints were chosen because they are among the most common for tablet and mobile use. For the desktop view, we chose 980 pixels to support because of existing web applications that were unable to become responsive within the time frame. These applications will be upgraded to responsive layouts at a future date.

We also coded the site with Section 508 accessibility compliance in mind. By using iterative 508 testing and development, we ensured that the site would not only work on any device, but it would be accessible to people with disabilities to that they can find and use information quickly and easily.

Responsive design inherently poses problems with Internet Explorer 7 and 8 compatibility because of the lack of CSS3 support. While there are workarounds for this issue, like respond.js, the benefits of responsive support for IE7 and IE8 were not great enough to troubleshoot the issues. We initially started by using respond.js but decided to remove it due to a number of UI errors and problems with it when we moved from environment to environment. Since no mobile devices use IE7 or IE8, it was decided to drop responsive support for Internet Explorer.

Fluid grids are a big component of responsive design but a number of our existing applications use a fixed width container so we had to determine the best way to support these without redesigning them. The solution we chose was a combination of fixed and fluid grids. For the desktop view, we utilize a fixed width grid system and as you move down in resolution it shifts to a fluid based system.

## How It Worked

The redesigned site will improve consumer’s access to the information they want about Medicare. The redesigned site and web content management system allow the content managers to easily add, remove or update content without having to worry about coding or testing.

## What We Learned

Mobile first isn’t the only way to design a site, it’s possible to take the full version and scale down, removing components that may be redundant or cumbersome on smaller displays while maintaining full functionality. While this resulted in more iterations of design mock-ups, it allowed us to take the most common tasks that people wanted on the full homepage and scale them down to be convenient and accessible on all devices.

Sites can be designed to be responsive while maintaining Section 508 compliance if tested and developed with those factors in mind.

## What&#8217;s Next

We are next planning on redesigning our existing applications to be responsive. This will allow all the tools across the site to be accessible for all users.

## Contact

Contact Jon Booth via [email](mailto:jon.booth@cms.hhs.gov).