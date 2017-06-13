---


date: 2012-04-10 9:25:46 -0400
title: 'USA.gov Mobile Apps Gallery'
summary: 'In April 2012, the U.S. General Services Administration launched a &amp;#8220;full stack&amp;#8221; responsive redesign of the federal mobile apps galleries\: apps.USA.gov and apps.GobiernoUSA.gov. The full stack includes both a REST API and a complete redesign of the site using responsive design techniques. Responsive web design allows the content on a website to respond to the'
authors: [jparcell]
categories:
  - Mobile
tags:
  - GSA
  - mobile apps
  - Mobile Gov Experience
---

In April 2012, the U.S. General Services Administration launched a &#8220;full stack&#8221; responsive redesign of the federal mobile apps galleries: <a href="http://apps.usa.gov/" rel="nofollow">apps.USA.gov</a> and <a href="http://apps.gobiernousa.gov/" rel="nofollow">apps.GobiernoUSA.gov</a>. The full stack includes both a REST API and a complete redesign of the site using responsive design techniques. [Responsive web design](http://mobilegovwiki.howto.gov/Responsive+Design) allows the content on a website to respond to the screen size and device it is being viewed on. So, while the app galleries are rendered one way on desktop browsers, the same website adapts and rearranges content when viewed on a tablet or smartphone.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/01/ResponsiveDesignAppGallery.png" alt="USA dot gov Responsive Design Apps Gallery" %}


**Why We Did It**

The mobile app gallery websites had not been updated since 2009. In fact, even though they showcased mobile apps, the website itself, was not mobile friendly. As part of a larger [strategic &#8216;mobile first&#8217; initiative](http://mobilegovwiki.howto.gov/Mobile+First), the U.S. General Services Administration is evaluating the use of responsive design for its web properties because of it&#8217;s many potential benefits.

The app galleries were launched as the first responsive design site as their content is inherently mobile and it would allow our team to learn more about responsive design so that lessons learned and best practices can be applied to future projects.

**What We Did**

  1. Content analysis &#8211; the team initially analyzed all of the content from not only the USA.gov and GobiernoUSA.gov app galleries, but also other commercial app stores and markets. We also took into account that future galleries might include non-mobile apps as well as new devices
  2. Existing commercial app stores and markets were reviewed for design ideas to create a best in breed design, starting with the mobile experience and then expanding to a full screen experience
  3. The data dictionary was designed to accommodate the data elements and functionality desired in the app galleries
  4. A REST API was created to provide public access to app information. Using a REST API as a foundation for building the app galleries would enable other developers to create additional products based on the app gallery data
  5. The responsive design app galleries were created using both the App Gallery API and the USA Search API.
  6. Once completed, the design was integrated into USA.gov’s content management system and deployed.

**How It Worked**

Apps.USA.gov and apps.GobiernoUSA.gov were launched and received positive feedback from the community. Its launch was covered in both <a href="http://fedscoop.com/responsivegov-gsa-redesigns-app-store/" rel="nofollow">Fedscoop</a> and <a href="http://gov.aol.com/2012/05/03/gsa-hits-refresh-button-on-mobile-apps-galleries/" rel="nofollow">AOL government</a> .

New benefits to visitors over the original website include:

  * Mobile-friendly format
  * Content filtered to the device being used
  * Up-to-date ratings for apps

**What We Learned**

Overall, there were lots of lessons learned during the process. The pros and cons of using responsive design techniques include:

PROS:

  * You have a single version of your website (not a redirect to a mobile site)
  * There is less maintenance as you do not have to maintain multiple sites and apps
  * Sharing links works across all platforms and devices (not a mobile version and a desktop version)
  * It is future-ready – If designed right, should adapt to new sizes of mobile devices coming out
  * Not just about the device – Resizing on the desktop still allows users to get to all content (as opposed to having to scroll horizontally
  * It forces a “mobile first” content strategy ensuring that the most valuable information for users is distilled and presented in a concise manner

CONS:

  * Development time and resources – Developing cross-browser and cross-device is difficult and time consuming. Thus it takes more time to launch a responsive design website over a traditional desktop website
  * Loading times – In many cases, responsive design mobile websites are “heavier” as they have more code to deal with the multiple screen sizes and device detection
  * 508 compliance – Federal sites need to be 508-compliant and some responsive design techniques (hiding and showing content based on device) are not 508-compliant and thus cannot be used
  * Responsive design is not always the right answer – In many cases, a dedicated mobile site should be used if the mobile content (and thus experience) should be different

**What&#8217;s Next?**

We are excited to be one of the first federal agencies to take advantage of responsive design techniques as part of our ‘mobile first’ strategy for our websites. We will continue to enhance the app galleries and are talking to other agencies that are interested in leveraging our API and responsive design for their own app galleries. Finally, we are using the lessons learned to create a 508-compliant, responsive design template that may be used for the USA.gov and GobiernoUSA.gov mobile sites.

**Contact**

Email Meghan Daly at: <a href="mailto:meghan.daly@gsa.gov" rel="nofollow">meghan (dot) daly (at) gsa (dot) gov</a>
  
Email Ken Fang at: <a href="mailto:ken.fang@mobomo.com" rel="nofollow">ken (dot) fang (at) mobomo (dot) com</a>
  
Email Brian Lacey at: <a href="mailto:brian@mobomo.com" rel="nofollow">brian (at) mobomo (dot) com</a>