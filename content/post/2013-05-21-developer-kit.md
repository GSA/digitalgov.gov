---

date: 2013-05-21 1:05:45 -0400
title: 'Developer Kit'
summary: 'These are the elements that make up a well-rounded developer hub. Homepage The API efforts of any agency should all be accessible via one easy to reach developers hub. This Web page should provide a path to all public APIs and any associated resources. Once an agency has begun to publish multiple APIs, certain resources'
authors: [gray-brooks]
categories:
  - Code
tags:
  - API
  - USA.gov Federal Mobile Apps Directory
---

These are the elements that make up a well-rounded developer hub.

## Homepage

The API efforts of any agency should all be accessible via one easy to reach developers hub. This Web page should provide a path to all public APIs and any associated resources. Once an agency has begun to publish multiple APIs, certain resources may make sense to be specific to each API whereas others may make sense to be provided more generally for all of the agency’s APIs. The major elements of the overall developer homepage are: a catalog of and links to available APIs, any communal elements that apply to all of the APIs, and links to non-API resources that may also be of use to developers. Agency.gov/developer, agency.gov/developers, and agency.gov/api should either be the direct URL for the page or should redirect to the page.

Your team should decide which of the following elements to include in your developer hub, recognizing that ensuring a well-rounded and fully functional developer experience is the best recipe for your APIs’ success. The below list represents elements for you to assemble in order to deliver just such an experience. Examples and suggested tools are included and can be readily copied and improved upon between agencies.

## Welcome

A brief welcome message can be used to provide context for the agency’s mission and the role of developer outreach within it. Your agency can set an appropriate and respectable standard by using this section to announce that the developer hub is the accumulation of the agency’s current API offerings and that developers can return to find future APIs as they are posted there as well.

## Catalog of APIs

The most important element of a developer hub is access to each of the APIs. Usually, this takes the form of links along with a brief description. Over time, it is preferable to standardize the individual API homepages into consistent developers subsections; however, many agencies begin by simply linking to the API homepages regardless of their location and styling within the agency’s Web presence. Alternatively, several free and open-source options exist that provide additional catalog functionality.

### Potential Tools

  * [APIGrove](http://apigrove.github.com/apigrove/)
  * [Google APIs Explorer](http://code.google.com/p/google-apis-explorer/)
  * [WSO2 API Manager](http://wso2.com/products/api-manager/)

### .Gov Examples

  * [Department of Labor](http://developer.dol.gov/)
  * [Federal Communications Commission](http://www.fcc.gov/developers)
  * [National Library of Medicine](http://www.nlm.nih.gov/api/)
  * [National Renewable Energy Laboratory](http://developer.nrel.gov/)
  * [Small Business Administration](http://www.sba.gov/about-sba/sba_performance/sba_data_store/web_service_api)
  * [National Broadband Map](http://www.broadbandmap.gov/developer/)
  * [USA.gov](http://www.usa.gov/About/developer-resources/developers.shtml)

## Terms of Service

A Terms of Service (ToS) provides the legal framework by which the API provider conveys any rules or regulations that developers need to know. Developers agree to the terms set out in the ToS by their use of the API itself and thus enable the API producer to regulate use of their API if necessary. Common elements include but are not limited to attribution, modification, false representation, right to limit, right to terminate, and indemnification. This is a particularly good area to review the Terms of Service of other government APIs and consider re-using their material instead of starting from scratch. This element is often composed of static page content.

### .Gov Examples

  * [Department of Labor](http://developer.dol.gov/terms-service)
  * [Census Bureau](http://www.census.gov/developers/tos/terms.html)
  * [Energy Information Administration](http://www.eia.gov/beta/api/tos.cfm)
  * [Federal Motor Carrier Safety Administration](https://mobile.fmcsa.dot.gov/developer/tou.page?cid=1140526)
  * [Federal Communications Commission](http://www.fcc.gov/developers/api-terms-of-service)
  * [National Institute on Drug Abuse](http://www.drugabuse.gov/developers/nmassist/apiterms)
  * [HealthFinder.gov](http://healthfinder.gov/developer/Term_of_Use.aspx)
  * [USA.gov](http://www.usa.gov/About/developer-resources/terms-of-service.shtml)

## Status Dashboard

As agency API efforts become more complex and developers grow more dependent on the services, the status of each service becomes increasingly important. The goal of such a dashboard is to provide information on the current status of each API as well as planned future status changes (e.g., downtime during a system upgrade). The dashboard can be manually maintained, with upcoming or current system updates written out. A straightforward application can also be used to check the server response codes for each API on a regular basis (~every 5 minutes) and automatically change an API’s status on the dashboard. This has the benefit of ensuring quick updates for developers, whose applications may rely on this news. Even with an automated dashboard, there is also a need for the API producer to provide human updates in the event of downtime in order to communicate with interested developers.

### Potential Tools

[Stashboard](http://www.stashboard.org/)

## Apps Gallery

As agency and third-party developers consume the APIs in new projects, there is substantial value in highlighting the growing list of mobile and desktop applications that have been built on top of them. Highlighting these products rewards adoption, promotes further creative work, and raises awareness about the returns on investment for the APIs. This element is often composed of static page content such as links, descriptions, and screenshots.

### .Gov Examples

  * [Census Bureau](http://www.census.gov/developers/apps/)
  * [Environmental Protection Agency](http://www.epa.gov/developer/open_source.html)
  * [Federal Motor Carrier Safety Administration](https://mobile.fmcsa.dot.gov/developer/appgall.page?cid=1140526)
  * [USA.gov](http://www.usa.gov/About/developer-resources/1usagov.shtml#projects)
  * [Social Media Registry API](http://www.usa.gov/About/developer-resources/social-media-registry.shtml#examples)

## Link to Open-Source Projects

An agency’s open-source projects often relate to their API efforts and have similar potential customers. Both SourceForge and GitHub offer [federal-friendly Terms of Service](https://digitalgov.sites.usa.gov/resources/negotiated-terms-of-service-agreements/ "Negotiated Terms of Service Agreements"), though GitHub has gained higher adoption due to its feature set, widespread popularity, and ease of use. By offering more components of your agency’s API packages as repositories online, you support faster developer adoption.

### .Gov Examples

  * [Department of Labor](http://developer.dol.gov/)
  * [Environmental Protection Agency](http://www.epa.gov/developer/open_source.html)
  * [Federal Communications Commission](http://www.fcc.gov/developers#opensource)
  * [Federal Register](https://www.federalregister.gov/blog/learn/developers)
  * [National Archives & Records Administration](http://www.archives.gov/developers/)
  * [White House](http://www.whitehouse.gov/developers)
  * [HealthData.gov](http://www.healthdata.gov/developer)

## Link to Agency Data Hub

An agency’s static data is also of interest to developers both for direct use and also to inspire further ideas about what mashups are possible with the agency’s APIs. Including a link to the agency’s public data catalog is a simple but important addition to the developer homepage.

### .Gov Examples

  * [Department of Labor](http://developer.dol.gov/)
  * [Environmental Protection Agency](http://www.epa.gov/developer/other.html#data_resources)
  * [Federal Communications Commission](http://www.fcc.gov/developers)
  * [HealthData.gov](http://www.healthdata.gov/developer)

## Links to Other Relevant Sections

Each agency’s Web presence offers different material that may be of interest to potential developers, such as a Maps hub or Open Government page. Including these links on the developer homepage grows the cross-ties between the teams behind each section and helps site visitors to more readily understand the wider context of the agency’s offerings and strategic direction.

### .Gov Examples

  * [Environmental Protection Agency](http://www.epa.gov/developer/)
  * [Federal Communications Commission](http://www.fcc.gov/developers)
  * [National Archives & Records Administration](http://www.archives.gov/developers/)
  * [National Library of Medicine](http://www.nlm.nih.gov/api/)
  * [HealthData.gov](http://www.healthdata.gov/developer)

## Blog/Microblog

In order to deepen both interest and trust in your agency’s API efforts, your agency’s developer outreach should include program updates such as announcements of new initiatives and program updates such as planned downtime. Depending on how much information the agency is generating, it may be better to create a category on the agency blog that distinguishes these posts or an entire independent agency blog to house the material. Regardless, it is best to link directly to the category or blog from the developer hub. Similarly, your team may prefer to set up a standalone twitter account for the API and developer announcements, either as a complement to a blog (category) or in lieu of it. An important aspect to each of these models, though, is the ability of developers to subscribe or otherwise follow a reliable channel for news that impacts their development efforts.

### Potential Tools

  * [Blogger](http://www.blogger.com/)
  * [Tumblr](https://www.tumblr.com/)
  * [Twitter](https://twitter.com/)
  * [WordPress](http://wordpress.com/)

### .Gov Examples

  * [National Renewable Energy Laboratory](http://developer.nrel.gov/community)
  * [Federal Communications Commission](http://www.fcc.gov/developers)
  * [HealthData.gov](http://www.healthdata.gov/developer)
  * [HealthIndicators.gov](http://healthindicators.gov/Developers/)

## Public Feedback Mechanism

Having a set of front-facing feedback mechanisms promotes an open and productive relationship between public developers and the agency. When used to supplement other feedback mechanisms, this approach encourages greater public interest, promotes a better agency response, and fosters ideation among the public. Two important questions that warrant individual prompts include feedback on existing APIs and requests for new APIs. This ensures that you have clear direction from those who use your APIs. Uservoice, Ideascale, and Dialogue App each offer [federal-friendly Terms of Service](https://digitalgov.sites.usa.gov/resources/negotiated-terms-of-service-agreements/ "Negotiated Terms of Service Agreements") and provide robust ideation platforms for public feedback. For a lighter weight implementation, you can use the similarly gov-friendly Disqus commenting platform to embed commenting functionality within a page that you host expressly for this purpose. For an even simpler setup, you can author a series of ‘open thread’ blog posts that each encourage public feedback to a specific prompt and then link to those posts from the developer hub as a means of driving public feedback. One other option would be to use the popular developer Q&A hub, Stack Exchange, ask the prompts and receive feedback.

### Potential Tools

  * [Uservoice](http://www.uservoice.com/)
  * [Ideascale](http://ideascale.com/)
  * [Dialogue App](http://www.dialogue-app.com/info/)
  * [Disqus](http://www.disqus.com/)
  * [StackExchange](http://stackexchange.com/)

### .Gov Examples

  * [Census Bureau](http://apiforum.ideascale.com/)
  * [Energy Information Administration](http://www.eia.gov/beta/api/#)
  * [National Renewable Energy Laboratory](http://developer.nrel.gov/doc/api/alt-fuel-stations/v1#comments)
  * [HealthData.gov](http://www.healthdata.gov/developer)

## Developer Mailing List/Group

By offering visitors the ability to subscribe to emails about your developer outreach, you can build an email list that supports a quick and convenient means of publicizing new projects and API updates. This functionality can be easily assembled in the same fashion as any other email collection webform. Alternatively, you could create an email group or listserve either using in-house resources or third party solutions such as Google Groups or Yahoo Groups. An advantage of this model is that it allows developers to more readily interact with each other.

### Potential Tools

  * [Google Groups](https://groups.google.com/forum/?fromgroups#!overview)
  * [Yahoo Groups](http://groups.yahoo.com/)

### .Gov Examples

  * [Department of Labor](http://developer.dol.gov/contactfollow-us)
  * [Environmental Protection Agency](http://www.epa.gov/developer/)
  * [Federal Communications Commission](http://www.fcc.gov/developers)
  * [USA.gov](http://www.usa.gov/About/developer-resources/developers.shtml)

## Forum

Providing a public user forum can complement other tools to provide a well-rounded collaboration and feedback environment for developers

### Potential Tools

  * [BBPress](http://bbpress.org/)
  * [phpBB Forums](https://www.phpbb.com/)

## Wiki

Wikis provide a scalable and robust platform for your developers and site visitors. By providing a wiki and using it yourself to publish and collaborate on material, you deepen the potential of your developer community and encourage adoption. In addition to numerous free and open-source solutions for wikis, two no-hassle options include the wiki functionality built into GitHub repositories as well as wiki.data.gov (publicly visible, but editable by anyone with a .gov email address). By creating a GitHub repo specifically for developer hub functionality (such as [Issue Tracking](https://digitalgov.sites.usa.gov/2013/05/16/api-release-kit/#issue-tracker) and [Roadmaps](https://digitalgov.sites.usa.gov/2013/05/16/api-release-kit/#api-roadmap)), you can also employ the built-in wiki functionality to offer a platform already integrated and readily available through the very popular social network for developers.

### Potential Tools

[Github Wikis](https://github.com/blog/774-git-powered-wikis-improved)

## FAQ

Any common questions that developers ask may reflect confusion held by other potential users that turned away. Maintaining a simple list of frequently asked questions and answers provides a simple utility today as well as a good catch-all for future disclaimers and loose information that may come to mind in the future. Depending on your needs, this section might work better at the developer hub level or on an individual basis for single APIs.

### .Gov Examples

  * [Department of Labor](http://developer.dol.gov/frequently-asked-questions)
  * [Environmental Protection Agency](http://www.epa.gov/developer/site_for_you.html#faq)
  * [Federal Aviation Administration](http://services.faa.gov/docs/faq/)
  * [HealthData.gov](http://www.healthdata.gov/developer)
  * [HealthFinder.gov](http://healthfinder.gov/developer/FAQ.aspx)
  * [HealthIndicators.gov](http://healthindicators.gov/Resources/FAQ)

## Link to Other Agency Developer Hubs

Much of the value of government data exists when it is integrated with other government data. As more agencies launch developer hubs, it is useful for each to link to the others. One possibility is to link to each of them individually ([embed code available here](https://github.com/gsa/slash-developer-pages#readme)), or simply link to the GSA [repository](https://github.com/gsa/slash-developer-pages) that includes the up to date list. New hubs are regularly added, thus creating more pages that link to your hub at an ever increasing rate.

### .Gov Examples

  * [Department of Energy](http://energy.gov/developer-resources)
  * [Department of Labor](http://developer.dol.gov/)
  * [Environmental Protection Agency](http://www.epa.gov/developer/other.html)
  * [Federal Communications Commission](http://www.fcc.gov/developers)
  * [National Archives & Records Administration](http://www.archives.gov/developers/)

## Link to All Gov GitHub Accounts

In order to highlight other open-source development in government, you can also link to the growing list of [repositories from all .gov GitHub accounts](http://gsa.github.com/federal-open-source-repos/).

### .Gov Examples

[Department of Labor](http://developer.dol.gov/)

## Link to Basic API Information

Depending on the audience for your developer section, it is often useful to include links to basic reading material that explains what APIs are and gives access to educational resources that fit those who may just be getting started with APIs.

### .Gov Examples

  * [Federal Aviation Administration](http://services.faa.gov/)
  * [HealthFinder.gov](http://healthfinder.gov/developer/How_to_Use.aspx)

## PoC

Developers still need to have the ability to contact agency staff directly and for this purpose, it is important to offer contact information for a developers’ point of contact. This is often done at the agency level by creating an email account at developer@agency.gov and forwarding it to one or several staff who work together to field the incoming messages. The same contact information can then be published at the developer hub level or at each API page.

### .Gov Examples

  * [Department of Energy](http://energy.gov/developer-resources)
  * [Department of Labor](http://developer.dol.gov/contactfollow-us)
  * [National Broadband Map](http://broadbandmap.gov/developer)
  * [National Renewable Energy Laboratory](http://developer.nrel.gov/community)
  * [U.S. Courts—PACER](http://www.pacer.gov/cmecf/developer/)
