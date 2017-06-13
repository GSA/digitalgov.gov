---


date: 2013-10-30 8:45:15 -0400
title: 'Content Management Systems Toolkit'
summary: 'Improving the federal government&rsquo;s ability to deliver digital information anytime, anywhere, on any device&mdash;via open content&mdash;is a key goal of the Digital Government Strategy. A content management system (CMS) can help your agency move to an open content model, making it easier for people to find, share, use, and re-use your information. The key steps'
authors: [rflagg]
categories:
  - API
  - Content
tags:
  - CMS
  - Content Management System
  - content strategy
  - metadata
  - open source
  - sitesusagov
---

Improving the federal government’s ability to deliver digital information anytime, anywhere, on any device—via open content—is a key goal of the [Digital Government Strategy](https://obamawhitehouse.archives.gov/sites/default/files/omb/egov/digital-government/digital-government.html). A [content management system](http://en.wikipedia.org/wiki/Content_management_system) (CMS) can help your agency move to an [open content model](https://www.WHATEVER/2014/05/05/government-open-and-structured-content-models-are-here/ "Government Open and Structured Content Models Are Here!"), making it easier for people to find, share, use, and re-use your information.

The key steps in getting ready to move to a CMS include:

  * [Prepare Your Content](https://www.WHATEVER/resources/content-management-systems-toolkit/#prepare "Content Management Systems Toolkit")
  * [Choose a CMS](https://www.WHATEVER/resources/content-management-systems-toolkit/#choose "Content Management Systems Toolkit")
  * [Migrate Your Content to a CMS](https://www.WHATEVER/resources/content-management-systems-toolkit/#migrate "Content Management Systems Toolkit")

## Prepare Your Content {#prepare}

### Develop a Content Strategy

A [content strategy](https://www.WHATEVER/?s=content+strategy) defines such things as topics, themes and purpose, and can also play a part in website governance, customer experience, metadata and search engine optimization (SEO). The value of developing a content strategy is that it forces you to examine what you’re trying to accomplish with your digital content, where you need it delivered, and desired outcomes.

When developing your content strategy, ask:

  * Are you publishing content that is in your agency’s lane, or have you strayed out of scope?
  * Are you reaching customers via their preferred channel?
  * Are you posting content once and repurposing it, or publishing the same content several times, in different ways?
  * Is your most important content placing well in search results?
  * Are you regularly gathering and acting on customer feedback to improve your site?

[Content strategy news and articles](http://www.cmswire.com/news/topic/content+strategy)—news feed of the latest articles on content strategy from CMSWire.

### Conduct a Content Inventory

Complete a [content inventory](http://www.usability.gov/how-to-and-tools/methods/content-inventory.html) to identify and document everything on your site. At a minimum, include all your Web pages. You may also want to include all linked files and attachments such as PDFs, video files, documents, pictures, etc. The best way to track your inventory is with a spreadsheet, where you can list all your content. It will help you see all your content at a glance, and illustrate how the different sections of your site fit together. It can also help you map your current content to your new CMS.

To get you started, we’ve developed a sample content inventory spreadsheet**<span style="color: #000000"> <a href="https://www.WHATEVER/files/2014/07/sample-content-inventory.xlsx">sample content inventory spreadsheet</a></span>** which you can use to document your content inventory. The spreadsheet has two tabs: one for active content, and one to track content that you’ve archived or unpublished. The spreadsheet is organized so that you can group related pages together, following your site’s information architecture (IA). There are fields for the page name, URL, date, review schedule, content lead, and more. Tools you may find useful to develop your content inventory include:

  * [Xenu&#8217;s Link Sleuth](http://home.snafu.de/tilman/xenulink.html)—this link check program grabs page URLs and page titles, two key pieces of information to start your inventory
  * [Similar Page Checker](http://www.webconfs.com/similar-page-checker.php)—this tool compares two URLs for duplicate content
  * [Content Inventory](http://en.wikipedia.org/wiki/Content_inventory)—Wikipedia page contains several resources

Once you’ve built it, you should continue to update and maintain it, tracking all changes you make to your site as you add or remove content.

### Clean Up Your Content

Before implementing a CMS, you should get rid of “ROT” (Redundant, Outdated, Trivial) content. Your completed content inventory can help you spot the ROT.

  * Look for pages with similar content, and review to see if you can combine them and delete one of the pages.
  * [Examine your metrics](https://www.WHATEVER/category/metrics/). Do you have pages that are only getting a few visits a month? Those pages may not be worth keeping, if no one is looking at them.
  * Review search terms and compare your IA to the topics and terms people search for on your site. If a topic or page has low search traffic, and low visits, review to see if it’s a candidate for removal.

### Determine Content Structure

Structured content refers to content that is posted as &#8220;pieces of information&#8221; (vs. &#8220;pages&#8221;) and [tagged with keywords and metadata](http://en.wikipedia.org/wiki/Metadata_tag) so it can be aggregated, organized, shared, and reused. Structured content is not dependent on any particular device; content is divorced from presentation, meaning the information is accessible anytime, anywhere, on any device. Create open structured content by identifying such things as content types and taxonomies. Read more about [creating open content and National Public Radio (NPR)&#8217;s Create Once, Publish Everywhere strategy](https://www.WHATEVER/2013/07/29/how-to-create-open-structured-content/ "How to Create Open, Structured Content").


{% include image/full-width.html img="https://www.WHATEVER/files/2014/05/600-x-285-Open-Content-Model-full-cropped.jpg" alt="Open Content Model mural" %}

Once you determine the data structure for your content, you can configure your CMS so it’s easy to create and tag content accordingly. As an example, as part of EPA’s migration to a new CMS, they identified their content structure and can now tag each piece of content with metadata as it’s created in the new CMS.

See how [EPA uses Dublin Core metadata to structure content](https://www.WHATEVER/files/2014/07/metadata-in-drupal-epa.pdf) (PDF, 109 KB, 16 pages, November 2012).

### Tag Your Content with Metadata

[Metadata](http://en.wikipedia.org/wiki/Metadata) is essentially “data about data,” and consists of machine-readable descriptions that tell other computers important facts about your digital content. It provides a standardized system to label and classify content. It also:

  * Enables content aggregation, re-use, and syndication via Really Simple Syndication (RSS), [Application Programming Interfaces (APIs)](https://www.WHATEVER/category/code/api/), and other technologies
  * Provides an audit trail, with information about who created the information, and when
  * Helps identify redundant, duplicative, and possibly obsolete content

When tagging content, you should generally use established industry-standard vocabularies, [such as Dublin Core](http://wiki.dublincore.org/index.php/User_Guide), which define common elements and enable aggregation of common pieces of information from several different sources. Common metadata elements include:

  * Title
  * Description
  * Keywords
  * Format
  * Date
  * Publisher
  * Language

To enable Web crawlers and search engines to understand meaning and relationships in your content, and use that understanding to improve search results and search engine optimization (SEO), you should also employ the [Schema.org vocabulary](http://schema.org/) to provide additional descriptions for certain types of content, such as events.
  
Dublin Core tags can be used to describe &#8220;things&#8221;, and Schema.org tags can describe relationships between those things. Both are important to improve search results and make your information easier to find and re-use.

If you have a Content Management System, you should to enter the tags directly into your CMS. You may need to work with your CIO staff or developer to configure your CMS to collect metadata.

If you don&#8217;t have a Content Management System, you&#8217;ll need to add these tags manually as HTML code. Refer to the links below for guidance and syntax on manually tagging your content.

  * [Expressing Dublin Core metadata](http://dublincore.org/documents/dc-html/)—explains how to tag your content using Dublin Core structure and syntax
  * [Generic plain language metadata examples](http://dublincore.org/documents/2001/04/12/usageguide/generic.shtml)
  * [How to mark up your content using Schema.org vocabularies](http://schema.org/docs/gs.html#microdata_how)—explains how to tag your content so it&#8217;s easier to find and provides richer search results

These examples illustrate how agencies are creating structured content by tagging with metadata and microdata.

  * [Geospatial Metadata](http://www.fgdc.gov/metadata)—federal Geographic Data Committee
  * [Metadata management](http://www.usgs.gov/datamanagement/describe/metadata.php)—U.S. Geological Survey
  * [Content and Data Standards](http://www.gov.gov/standards/)—including XML markup and metadata descriptions—Library of Congress
  * [EPA Metadata Editor](https://edg.epa.gov/EME/) tool to create content that meets EPA and Federal Geographic Data Committee (FGDC) metadata requirements—Environmental Protection Agency
  * [LandView 6 Metadata](http://www.census.gov/geo/landview/lv6help/metadata.html) technical documentation on Census data quality—U.S. Census Bureau
  * [OpenEI:Projects/Tools Metadata](http://en.openei.org/wiki/OpenEI:Projects/Tools_Metadata) properties and values—Open Energy Information

[Project Open Data](http://project-open-data.github.io/) is an OMB and OSTP resource; an online repository of tools, best practices, and schema to help agencies adopt the framework presented in the [Open Data Policy OMB Memorandum M-13-13: Open Data Policy—Managing Information as an Asset](http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-13.pdf) (PDF, 6 MB, 12 pages, May 2013)

## Choose a CMS {#choose}

### Decide if You Need a CMS

A CMS provides many advantages over static HTML content:

  * Because a CMS typically has an interface similar to a word processing program, you don’t need to know markup language to add or edit content
  * Design templates can ensure that the “look and feel” of your site remains consistent
  * You can give contributors controlled access to the system, so some people can create, but not publish, while others have full control to create, publish, or delete content
  * You can build forms to collect content and metadata elements in a structured, organized way

If you post a catalog of items as structured content, the same information can be adapted to render correctly on different screen sizes and devices, so people can view the same catalog on their phone, tablet, desk top, or other device, and it will display in a format best suited to each device.

Two sites that have successfully implemented responsive design are [USA.gov](http://www.usa.gov/) and [AIDS.gov](http://aids.gov/). If you view each of these sites on your PC, you can see all the content available on the homepage, optimized for a large screen. View the same site on your mobile device, and you can see that top task content is presented prominently, in an easy-to-read format that’s been optimized for smaller screens.

### Identify Resource Needs

Whether you choose an open-source or commercial product, it will require an investment of time, money, and staff resources to move your content to a CMS. See if your agency already has a CMS solution that you could use without incurring new costs.

### Up-Front Development

  * Commercial products generally require a potentially significant up-front investment to purchase the software and user licenses. Licensing costs vary depending on the tool and implementation, so be careful to clarify these costs with the vendor. Read this article on [Why CMS Licensing is so Complicated](http://contenttype.wordpress.com/2009/11/03/why-is-cms-licensing-so-complicated/).
  * Open-source systems usually don’t cost anything to license or install, other than your developer’s time.
  * Web teams and CIO staff should coordinate on any additional IT issues such as security scans, or whether or not you’ll need a [Certification and Accreditation (C&A)](http://en.wikipedia.org/wiki/Certification_and_Accreditation) review.

### Long-Term Support

Web teams and CIO shops should discuss options for Web hosting. Your agency likely already has a hosting solution in place, so you’ll need to coordinate on how the site will be hosted. Be aware that if you have a high-traffic site, your current hosting solution may not be able to accommodate every CMS solution.

You will need developer support for ongoing general system maintenance.

Open-source systems can incur potentially significant development costs to maintain over time and take full advantage of customizable features.

Talk with other [government agencies who already use a particular CMS](https://www.WHATEVER/resources/content-management-systems-used-by-government-agencies/ "Content Management Systems Used by Government Agencies"), and who have sites comparable in size and scope to your own, to get an idea of how much developer support you might require.

### Document Your CMS Requirements

Business needs should be the [primary driver](https://www.WHATEVER/2013/12/12/9-reasons-your-agency-should-have-a-cms/ "9 Reasons Your Agency Should Have A CMS") in your choice of a content management system for your agency. Start with your content strategy, then focus on the CMS features and functionality that support that strategy. Consider the following:

### Ease of Use

  * Is the [WYSIWYG](http://en.wikipedia.org/wiki/WYSIWYG) easy-to-use, or will your content managers need to learn HTML? Are training resources are available, if needed?
  * Is it intuitive to complete basic content management tasks (e.g., create, edit, publish, or remove a page)? How easy is it to find your content within the system? Is it easy to move content off the site or to an online archive?
  * Can you easily save and roll back different versions of pages/content?
  * Are admin functions, such as adding a new user, intuitive?

### Functionality

  * Can you adapt your content workflow to the new system?
  * Is it flexible and easy to customize, such as turning features on/off, or customizing fields to match your content types?
  * Is the tool designed to support the size and type of website you have?
  * Does it support well-defined roles and permissions, so only certain people can perform tasks such as publishing or deleting content?
  * Are there extra bells and whistles that you don’t need and will never use?
  * Does it support [content lifecycle management](http://en.wikipedia.org/wiki/Web_content_lifecycle) with features such as the ability to automatically archive pages after a certain date?

### Support for Open Content and SEO {.gmail_extra}

  * Does it support [content types and fields](https://www.drupal.org/documentation/modules/field-ui)?
  * Is it easy to tag content with appropriate metadata?
  * Does it support search engine optimization (SEO) with such features as customizable metadata, static URLs, customized breadcrumbs, and support for microdata?

###  Integration into Current IT Environment

  * Are there restrictions around licensing? How much will it cost to purchase additional licenses if you need them?
  * Is it secure, stable, and extensible?
  * Will it work with your current Web hosting platform and other IT systems? Not every CMS will work with every hosting solution.

Use these tools to document how well different products match your requirements. This will help you to identify the one that will work best for you.

  * [CMS Solution Evaluation Tool](https://www.WHATEVER/files/2014/07/sample-cms-solution-evaluation-tool.xlsx)  (MS Excel, 36 KB, 1 sheet, November 2012)—a sample spreadsheet used to compare, rate, and rank different CMS tools side-by-side, based on features and functionality
  * [CMSmatrix.org](http://www.cmsmatrix.org/)—this online tool lets you compare features of many different CMS products side-by-side

Use this [sample Web CMS Requirements doc](https://www.WHATEVER/files/2014/07/cms-requirements-for-sow.docx) (MS Word, 90 KB, 27 pages, December 2012) as a model to document everything that your CMS should do.

### Is One CMS Enough?

Many agencies use a combination of commercial and open-source tools to meet different publishing needs.

  * Do you manage several different websites?
  * Do you manage both a website and a blog?
  * Do you support different types of websites (informational vs. transactional)?
  * You may find that a commercial tool is the best choice to manage your website, and an open-source tool is the best fit for your blog.
  * [Benefits and Challenges of a Consolidated CMS](http://jboye.com/blogpost/benefits-and-challenges-with-a-consolidated-web-cms/)—pros and cons of using one CMS to manage all your content

### Open-Source vs. Commercial

Content management systems come in many flavors, from proprietary, commercial tools with all the bells and whistles, to home-grown systems developed in-house, to open-source tools with a community of dedicated developers working to continually improve the product. Because there are pros and cons with any of these tools, the system you choose should reflect your agency’s goals and objectives.

  * Wikipedia lists many [types of open-source and commercial systems and frameworks](http://en.wikipedia.org/wiki/Comparison_of_content_management_systems)
  * A W3Techs report ranks [content management systems by popularity](http://w3techs.com/technologies/overview/content_management/all)
  * The CMSCritic website has a huge [list of content management systems](http://www.cmscritic.com/resource-lists/cms-list/), each with a brief description
  * CMS Review provides a [feature list and resources](http://www.cmsreview.com/index.html) to help select the right CMS
  * Real Story Group [evaluates CMS vendors, from complex to simpler solutions](http://www.realstorygroup.com/Research/Vendors/) (note, some free info, but mostly paid)

Whether you choose an open-source or commercial content management system depends on many facings, including your agency’s goals, and the level of internal developer resources available to install and support your CMS over the long term.

### Open Source CMS in Government

Many federal agencies already use open-source content management systems, and if you’re considering it for your agency, GSA offers a secure and compliant self-service content management platform, [sites.USA.gov](https://sites.usa.gov/), built on WordPress and available for all federal agencies as a shared service. This is a great, cost-effective solution to help your agency move to open-source.

### Include Both Technical and Content Needs

As you work through your requirements list, a few systems will begin to stand out as possible candidates. Once you’ve narrowed down the top 3-6 CMS, it’s time to take a test-drive. Involve both content and tech teams in the process. Identify user types and common tasks. Have content contributors give the tool a test-drive, and try completing basic content management tasks, to see how easy it is to use the system.

Use this [Use this sample CMS User Roles and Needs](https://www.WHATEVER/files/2014/07/cms-user-roles-and-needs.docx) (MS Word, 13 KB, 1 page, December 2012) to document different types of CMS users and the common tasks each will need to perform.

### Learn from the Community

If you choose an open-source CMS, urge your team to actively participate in user community forums. Contribute by answering questions, writing a component/module, testing new versions, or writing documentation.

### Resources

  * [CMSWire](http://www.cmswire.com/cms/web-cms/)—news and articles about content management systems, updated daily
  * [Open Source for Government](http://ben.balter.com/open-source-for-government/)—collaborative resource to facilitate government participation in open-source communities

## Migrate Your Content to a CMS {#migrate}

In addition to migrating content, you’ll also need to integrate your information architecture, navigation, search, social media, and other tools. Your CMS implementation also needs to align with your agency’s overall enterprise architecture and IT systems. The complexity of a migration illustrates the importance of strong Web governance, so a migration can be an opportunity to strengthen your governance model, if needed.

### Plan Your Migration

Depending on how large your site is, and how much content you have, a full-scale migration can take several weeks to several months, start to finish. A clear, concrete plan will help you achieve success.

### Develop Your Project Plan

A content migration is more than just an IT project; it should be managed as any other large business project. [Content Migration: the Iceberg of CMS Projects](http://www.openroad.ca/2007/11/02/content-migration-the-iceberg-of-cms-projects/) provides a good overview of the many aspects of a content migration that you’ll need to consider.
  
Here are some examples of both a very basic project outline, and a detailed project plan:

  * [Sample Task List for Website Redesign](https://www.WHATEVER/files/2014/07/task-list-for-website-redesign.docx) (MS Word, 13 KB, 2 pages, December 2012) shows a high-level project outline
  * [Sample Website Redesign Schedule](https://www.WHATEVER/files/2014/07/website-redesign-final-schedule.pdf) (PDF, 249 KB, 10 pages, December 2012) shows a detailed website migration project plan

### Identify Resource Requirements

Do you have sufficient resources to successfully pull off a migration? Consider:

  * Management support—have you clearly articulated the business value to managers so they are committed to supporting the migration?
  * Staffing—do you have enough people available to migrate content quickly, and review content to make sure it’s complete and correct in the new CMS? How will you manage both your ongoing, day-to-day work in addition to the migration work?
  * Technical resources—do you have the skills to configure the new CMS, write scripts for the migration, etc.? Note that many agencies outsource much of the technical work.
  * Communications—who will keep managers, program offices and content owners informed of progress, and help you articulate benefits and success?

### Decide if You Need Contractor Support

Many agencies contract for developer support with a migration, because it’s a lot of work to accomplish in a short time. To help you make this decision, consider:

  * Technical skills on your team—do you have people on your team who are experts in your new CMS? If you choose to automate the content migration, do you have developers who can write the proper code and scripts?
  * Time—even if you have the skills, do those people with the skills have the time?
  * Resources—do you have funding available to procure a contractor?
  * Size and Complexity—are you migrating one small site, or are you migrating a large site, or combining several old sites together into one new site? The larger the project, the more likely you’ll need some help to complete it in a reasonable timeframe.

A Statement of Work/Objectives (SOW/SOO) will help you retain the services of a 3rd-party contractor to assist with installing and configuring your new CMS, and migrating your content. Work with your Contracting Office to execute an SOO/SOW.

  * [Sample Technology Statements of Work (SOWs) from GSA](http://www.gsa.gov/portal/content/133795)
  * [Sample Statement of Objectives—Website CMS migration, development and support](https://www.WHATEVER/files/2014/07/sample-statement-of-objectives-website-migration.docx) (MS Word, 53 KB, 14 pages, November 2012)—GSA
  * [Sample Statement of Objectives—Website CMS consolidation](https://www.WHATEVER/files/2014/07/sample-statement-of-objectives-website-consolidation.docx) (MS Word, 53 KB, 12 pages, November 2012)—GSA

Once they’re on board, make sure the contractors are in the loop on all the prep work you’ve done up to this point.

  * Share relevant planning documents such as your content strategy and business requirements.
  * Review your content inventory in great detail, so the contractors understand your content, and how it’s supposed to look and act in the new system.
  * Review your content types, so they can help you migrate the content into a structured format.
  * Institute regular and frequent meetings with contractors, to keep everyone up-to-date, identify and mitigate problems early-on, and ensure everything flows smoothly.

### Identify Roles and Responsibilities

Document who’s responsible for every piece of the migration project, so nothing falls through the cracks.

  * Identify your project manager, and empower that person to make decisions and assign work.
  * Clarify who will lead each piece of the project, such as managing the content inventory, or coordinating development work.
  * A [Project Charter](https://www.WHATEVER/files/2014/07/sample-website-project-charter.docx) can ensure you have project buy-in from stakeholders across your organization.

### Communicate with Stakeholders

A successful migration depends on support from management and buy-in from stakeholders.

  * Provide regular updates throughout the migration process, highlight successes and flag potential problems, to keep everything on track.
  * See a [sample marketing flyer from EPA](https://www.WHATEVER/files/2014/07/one-epa-web.pdf) (PDF, 543 KB, 2 pages, November 2012) about their migration to Drupal. It outlines what they’re doing, why they’re doing it, and how it will work.

### Pick the Right Time to Migrate

Consider what times of the year are busiest for your agency, and avoid migrating during those times. For example, the IRS shouldn’t migrate their website in April.

### Minimize the Impact of a Content Freeze

At some point, you’ll have to restrict updates for a short time while you actually move content into the new CMS. To minimize the impact of this “content freeze” on your content owners, set realistic expectations around what will happen, and when.

  * Let content owners know in advance when to expect the content freeze, so they can make important site updates beforehand.
  * Once you know how long the freeze will last, give content owners an estimate that includes a few extra days, in case you run into unexpected delays. It’s better to wrap early, than to make people wait longer than they’d planned.

### Identify the Best Migration Model

The size and complexity of your site will determine whether or not you can automate certain migration tasks. Also consider how much time you need to realistically budget for a content freeze.

### Manual Migration

In a manual migration, content is manually copied and pasted from the old system to the new. The amount of time needed for a manual migration depends on the complexity of the site and the number of people doing the work.

If you’re moving from static HTML to a structured content model, you may not be able to simply cut and paste all your pages from the old system to the new. Depending on the type of content, you may need to paste the content in pieces, so you can save it as structured content.

### Automated Migration

An automated migration uses software tools to move content from the old site into the new CMS. It usually requires a lot of time upfront to develop migration scripts, but significantly speeds up the actual content migration process, and can reduce the length of your content freeze.

Computer scripts can be written to move entire pages, or move content by fields (such as title, body, meta elements, or other discrete items). Your scripts need to map content properly into the correct fields in your new CMS—and if you don’t already have structured content, you may still have to do much of the work by hand.

While scripts can make the migration process move quicker, the end result still needs to be reviewed by humans to make sure it worked properly.

### Mixed Migration

You may use a mix of manual work and automated tools, if you are only able to automate parts of your migration, and have to manually move the rest of your content into the new system.

### Content Freeze

Your migration will be simpler if you don’t make any content changes as you’re actually migrating content to the new CMS. If you absolutely cannot freeze your content, you’ll need to make identical content updates on both the old and new sites to keep content in sync, so you don’t lose any updates, or inadvertently migrate old content over new.

## Migrate Your Content

Once you’ve got a strategy in place, and identified the type of migration you’ll do, it’s time to migrate your content to the new CMS.

### Follow Your Plan

Do your best to stick to promised timelines and deadlines, so stakeholders remain supportive. If unexpected delays occur, let people know what’s happening, and how it will impact them, to mitigate any problems.

### Inform External Stakeholders

If you have a key group of external stakeholders, and you anticipate the migration may impact them, let people know. Use normal communications channels such as listservs or social media to keep people informed.

### Test Design Upgrades with Users

If you’re making any design changes along with your content migration, do [user testing](https://www.WHATEVER/category/ux/user-testing-research/) early-on, to gather feedback and make improvements before launch.

### Plan for Structured Content

You’ll need to structure your content as you move it into the new CMS. If the content is already tagged with metadata, you may be able to automate this. If not, you should tag each page as you move the content into the new CMS. It’s much faster to tag as you go, than to go back and tag everything afterwards.

### Back up Everything Before You Start

Make sure you have backed up your site, and coordinate with your IT shop to test the backup, to make sure it works and can be restored if needed.

### Do a Practice Run

Test out your migration process (especially if you’ve automated anything) in a sandbox or testbed. It will help you to identify any problems, and fix them before the actual migration.

### Consider a Beta Site

Some agencies have launched an early version their new site in “beta,” running it in parallel with the old site. This will give you a chance to test your migration process, and also gather customer feedback on the new site, if you’ve made any design enhancements.

### Move Your Content

Once you have tested your migration process and everything works well, it&#8217;s time to move your content into the new CMS. You&#8217;ll need to validate that each piece of content was correctly migrated. Use the checklist below to verify each page as you move it.

[Content Migration Validation Checklist](https://www.WHATEVER/files/2014/07/content-migration-validation-checklist.xlsx) (MS Excel, 41 KB, 1 sheet, December 2012)

### Create Redirects as Needed

No matter how thorough you are, you’ll be cleaning up and deleting old content and moving your entire website to a new platform, so your visitors may experience some broken links after the migration. If you&#8217;ve changed a lot of URLs during your migration, you may need to [create redirects](http://googlewebmastercentral.blogspot.com/2012/04/how-to-move-your-content-to-new.html) to help search engines re-index your site, and help your visitors find your content. Use [301 redirects](https://support.google.com/webmasters/answer/93633?hl=en) to update links that have permanently moved to a new URL, and 302 redirects for temporary moves. Also follow these [best practices for 404 (page not found) errors](http://www.bing.com/webmaster/help/404-pages-best-practices-1c9f53b3).

### Test Everything Once It’s Moved

Before you shut down the old site, run the old and new sites in parallel to test everything, and make sure all your content migrated over and works properly. Check links, test functionality, make sure your search box and any other tools work correctly. Don’t switch over to the new site until you know everything works.

### Launch Website in New CMS

If you’ve done your research and followed your plan, you should have a smooth migration. Once it’s all done, and the site is live in the new CMS:

  * Evaluate what worked well, and where you ran into problems. Document as lessons learned for future migration projects, and share with your colleagues.
  * Consider writing a case study, and [send to us](https://www.WHATEVER/contact-us/ "Contact Us") so we can post on DigitalGov, so others can benefit from your experiences.
  * Perform a “before and after comparison” to document improved efficiencies and help you measure success. Identify how the new CMS improves your ability to manage information assets, speed up content publication, or other improvements.
  * Communicate results to your management team and stakeholders, so they understand that all the hard work was worth it.

### Case Studies

  * [Why NCI Moved to a Structured Content Model](https://www.WHATEVER/2013/07/25/why-nci-moved-to-a-structured-content-model/ "Why NCI Moved to a Structured Content Model")
  * [How NASA Chose a New Content Management System](https://www.WHATEVER/2012/11/21/how-nasa-chose-a-new-content-management-system/ "How NASA Chose a New Content Management System")
  * [How the Department of Education Automated Publication of Press Releases](https://www.WHATEVER/2012/11/21/how-the-department-of-education-automated-publication-of-press-releases/ "How the Department of Education Automated Publication of Press Releases")