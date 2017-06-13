---


date: 2012-10-25 3:09:20 -0400
title: 'GSA&amp;#8217;s Child Care Information Portal'
summary: 'Mobile Gov Experiences&nbsp;are agency stories about creating anytime, anywhere, any device government services and info. This entry is a story shared by the General Services Administration. The&nbsp;Child Care Information Portal&nbsp;is a responsively designed web site built by General Services Administration&amp;#8217;s Office of the Chief Financial'
authors: [jparcell]
categories:
  - Mobile
tags:
  - GSA
  - Mobile Gov Experience
  - responsive web design
---

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/GSA_ChildCareInfoPortal.png" alt="Home Screen of GSA Child Care Info Portal" %}
Mobile Gov Experiences are agency stories about creating anytime, anywhere, any device government services and info. This entry is a story shared by the General Services Administration._

The <a href="http://apps.ocfo.gsa.gov/childcare_portal/index.shtml" rel="nofollow">Child Care Information Portal</a> is a responsively designed web site built by General Services Administration&#8217;s Office of the Chief Financial Officer, accessible on computers, smartphones and tablets.

## <a name="x-Why We Did It"></a>Why We Did It {#toc0}

We decided to create a responsive design site for this project, for three reasons:

  * customer feedback requesting mobile friendly pages
  * ease of maintenance since we wouldn&#8217;t need to create a separate pages for mobile consumption
  * desire to put mobile gov into practice

## <a name="x-What We Did"></a>What We Did {#toc1}

We referenced the <a href="http://html5boilerplate.com/" rel="nofollow">HTML5Boilerplate</a> and other CSS/HTML5 frameworks as a starting point and built a GSA branded set of style sheets and template pages that implement responsive design. We did not use any JavaScript libraries with this site, though we may well do so in the future.

We developed two style sheets, one for 480 pixels and below, basically a mobile version and one for all larger screen sizes. All displays get the mobile version as a base. There is a media query in the header to detect if a user is displaying greater than 480 pixels. If so, they get the additional &#8216;desktop&#8217; stylesheet that will support a multi-column format. The mobile site doesn&#8217;t display any images, though they are still being downloaded. This isn&#8217;t an ideal situation and there are some advanced techniques that wouldn&#8217;t download the images, but we&#8217;re not there yet.

There are a few data tables on the site and we had to do some special formatting for them to display properly. We did a lot of testing on these; we have a public-facing &#8220;test&#8221; area so we were able to test the site with our own devices.

## <a name="x-How It Worked"></a>How It Worked {#toc2}

The Child Care Information Portal went live in early April and the initial feedback we have received has been positive. We now have a set of boilerplate templates that our developers can use to create additional new pages. Our approach to responsive design has been very pragmatic and shows how a small shop can create a reusable responsive design approach that is very maintainable on a limited budget.

## <a name="x-What We Learned"></a>What We Learned {#toc3}

We found out that responsive design can be included in all of our sites. There is a learning curve we needed to go through for this site; almost all of the effort was involved with the creation of the style sheets. For instance, just figuring out how to move our Contact Us box from one place to the other in the style sheets took a lot of time.

We learned so much more about responsive design in a month because we actually created a site than we would have if we&#8217;d just been reading about it. We were surprised by how well it worked.

One specific technique we would recommend is examining other well-designed responsive web sites to understand the techniques and tools they are using. With the Google Chrome browser, a developer can right click a page and select “Inspect Element”. This launches the Chrome developer tools that have very powerful features for examining the HTML5, CSS3, and JavaScript code used on a site.

## <a name="x-What's Next"></a>What&#8217;s Next {#toc4}

We will begin applying responsive techniques to the interactive functionality of our applications, instead of just content pages. We also will be investigating the use of a Content Management System with responsive templates for maintaining our content.

As the display sizes and capabilities of mobile devices grows, we will continue to revise our style sheets and templates to provide the best user experience.

## <a name="x-Contact"></a>Contact {#toc6}

Ryan Day | ryan (dot) day (at) gsa (dot) gov
  
William Wales | william (dot) wales (at) gsa (dot) gov