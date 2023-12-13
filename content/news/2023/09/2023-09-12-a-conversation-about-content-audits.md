---
date: 2023-09-12 10:12:00 -0500
title: A conversation about content audits
deck: Two content designers discuss why content audits are important and how to get started
summary: Content audits can be tedious. Two content designers discuss why we do them anyway, and how to get started.

# See all topics at https://digital.gov/topics
topics:
  - seo
  - accessibility
  - plain-language
  - plain-language
  - content-strategy
  - analytics
# See all authors at https://digital.gov/authors
authors:
  - michelle-rago
  - ryan-johnson

slug: a-conversation-about-content-audits
primary_image: website-audit-control-panel-olivier-le-moal-istock-getty-images-693699396-comp

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

Content audits are a core part of a content strategist’s toolkit. Following a recent content audit, Ryan Johnson (GSA Service Delivery) met with Michelle Rago (18F) to talk about them, including why they can be both crucial and challenging, what conditions might prompt a content audit, and how to get started.

## Crucial yet challenging

**Michelle**: Ryan, you recently gave a GREAT talk on content audits. You started out by saying “content audits are tedious” and went on to explain why we need to do them anyway. As you know, I don’t think [content audits](https://methods.18f.gov/decide/content-audit/) are tedious. Audits are the only way I get a handle on the content. And, I’m learning at each step of the audit.

**Ryan**: The truth is that I have a love-hate relationship with content audits; I do find them tedious, but also indispensable. On most projects, I’m not sure content strategists can successfully do their job without auditing their content. 

I framed the talk with the acknowledgement that content audits can be tedious because I’ve observed a lot of organizations and teams can easily find reasons not to do them. The talk was designed to demonstrate why — despite the tedium and time — content auditing should be a priority for digital product teams.

## Why we do them

**Ryan**: In the talk, I listed some events or changes that might prompt a content audit, such as website migrations and policy updates, among others. When and why have you decided to do a content audit on your projects?

**Michelle**: In my experience, an audit is almost always prompted by a redesign. (The [USAGov content team has blogged about their recent redesign](https://blog.usa.gov/a-new-approach-to-content-for-usagovs-beta-sites).) You mention policy updates as another reason for an audit. Do you think conducting regular content audits is a best practice?

**Ryan**: I’ll admit that most of the content audits I’ve done have been in the context of a redesign, content management system migration, or some other big change or catalyzing event. That said, I have done “rolling” content audits, where I systematically audit portions of the site on some interval, or because those sections of the site haven’t been reviewed in a while. Occasionally, I’ve audited sections of the site because a user found something old, out of date, or downright embarrassing, and they informed us about it. When that’s happened, I would often audit similar or related pages, or dig into pages that might have had a similar origin or author.

A rolling audit strategy might be more practical when a site has tens of thousands — or more — content assets. 

I find that I audit for different attributes depending on why I’m auditing in the first place. Outside of the inventory (title, url, format, etc.), is there anything you always audit for? I ask this because when I did my last content audit, I didn’t include any analytics data at first. It was a complete oversight, and I had to merge in the [Digital Analytics Program (DAP)](https://digital.gov/guides/dap/) data after the fact, when I could have just included them in the course of the audit. Is there anything that you include regardless of what or why you’re auditing?

**Michelle**: Yes, I always include metrics. Metrics inform prioritization and can often yield surprises, like realizing a page with incorrect information is getting a lot of traffic because it’s a top search result for a particular term (eek!). 

Other attributes I usually capture in audits include:

* HTML page titles and page headings: I like to explore the differences between these fields. Sometimes they’re very different, not descriptive, or don’t capture what the page is about. 
* Purpose: What is this page supposed to be about?
* Audience: Who is this page supposed to serve?
* Subject matter expert or content manager: Who is responsible for this page?
* Goal: Is this page tied to a particular web content goal?
* [Redundant, outdated, or trivial (ROT)](https://www.usda.gov/digital-strategy/content/plays#content4): This ROT analysis is common in audits and can clarify what the major content issues are.
* Notes or other issues: I always have a column for surprises! For example, I might note if content is evergreen and a good candidate for reuse on another platform.

## How to get started

**Michelle**: We haven’t talked about how we start an audit. I first determine the audit’s scope. The scope could be part of a website, or it could include other communications channels like social media. For website content audits, I usually start with an automated tool. If the site is large I’ll figure out what the scope of my audit will be and adjust the site crawler as needed. The output of this tool is a spreadsheet. I’ll use that spreadsheet as the basis of my audit. Automated tools can also generate visualizations of site structures which can be helpful. How do you start your audits?

**Ryan**: I also use automated tools for this step! I don’t have a go-to tool for generating an inventory; I usually reach for the simplest and most accessible tool for the job.

When I first started doing content audits, I was surprised to find that generating a reliable website inventory was tricky, and in many ways still is. Ideally, your CMS (content management system) can generate a site inventory for you, but with some popular content management systems, you still have to manually configure which content types get included in the output. I’ve been on teams where they started (and “finished”) an audit, only to discover that the inventory was a subset of the actual content.

Some teams use their analytics data as the basis of the inventory—but that’s flawed in several ways, including that pages with no pageviews at all (but still live on the website) won’t be included in the output. And PDFs and other files are difficult to inventory that way.

Sitemaps are a great start—such as [Digital.gov’s XML sitemap](https://digital.gov/sitemap.xml)—but are limited for this purpose when they only contain web pages, as is often the case.

But there are definitely several automated tools to generate an inventory, which is great, because manually clicking through a website to build an inventory is error-prone and painful.

Speaking of automation, a point of emphasis when I talk about content auditing is the limits of automation in the context of a content audit. I tried to demonstrate the limits of automation, and how certain automated tools can help support an audit (for example, it shows that required `alt` text for accessibility is present on an image), but are insufficient (having `alt` text that is just the filename  `image.png` doesn’t adequately describe the image for screen readers).

I use automated tools to audit for accessibility, SEO (search engine optimization), reading grade level, broken links, and some others. But I still manually audit each page, and sometimes each word, regardless of the output of the automated tests. I mostly use the automated scores to help prioritize next steps following the audit.

What do you think about automated tools to support an audit, and do you have any particular favorites?

**Michelle**: I don’t have a favorite tool. I use whatever I have access to. This is because of what you just said; automation can only get you so far. At some point, you need to read the content. You need to experience the content. An automated tool can’t (yet) know your users’ needs or your organization’s goals and priorities.

As I move through an audit, I develop a sense of the severity of the issues that need to be addressed. This will, of course, be informed by my knowledge of user needs and organizational goals and priorities. (I know I just referred to those things, but they’re really important and need to be kept in mind during an audit.)

## Presenting your findings

**Michelle**: So, what’s the best way to present an audit’s findings? You know I’m going to say, “it depends.” It depends on the organization, the project, etc. I’ll usually create a presentation with high-level findings that describe the most serious issues (like, “Outdated information”), the impact of the issues (like, “Outdated information on the site is leading users to think we’re open when we’re not”), and suggestions for next steps (like, “Assign a content owner to manage information about hours and develop one authoritative source for this information”).

You mentioned that you often use the automated scores to help prioritize next steps following the audit. Do you find that the scores usually line up with what you think is most important? And, how do you present your findings, Ryan? 

**Ryan**: Well, you said it…it depends! But I do find that the automated scores help prioritize at least some of the next steps, especially accessibility scores. I’ll usually address those immediately, depending on the complexity of the fixes. Same with SEO, since those fixes are often a handful of meta tag additions or edits in templates that propagate across the entire site. So there are quick wins that can help build momentum and motivation for the trickier or more time-consuming work.

In terms of presenting findings, the automated scores can help with that, too. Writing and editing tools that highlight [passive voice](https://www.plainlanguage.gov/guidelines/conversational/use-active-voice/), complex phrases, and sentences that are difficult to read can be really compelling when presented to teams and leadership. You can see the “aha” moments when you show content blanketed in red highlights is marked “post-graduate reading grade level.” That kind of thing can really help build support for your recommendations, and the value of content auditing in general.

But just as content auditing can be tedious, the result of the content audit (a densely-packed spreadsheet) is rarely a persuasive or effective deliverable on its own. So, like you, I always synthesize the findings into a slide deck. I usually write a report, too. It’s kind of a “bite, snack, meal” approach to sharing the findings: the deck is the bite, the report is the snack, and the meal is the entire audit spreadsheet. 

For the deck, I’ll share the high-level observations and specific visual examples (such as the highlighted difficult-to-read sentences discussed earlier), along with next steps. Depending on the context, I might try to do some light coaching when I share the deck. In the past, I’ve shared recordings of screen readers interacting with certain elements to demonstrate accessibility principles. 

In the report, I’ll go into more detail about the findings, including where to find specific examples in the audit spreadsheet, and share my methodology and approach—and any omissions, caveats, or limitations to the findings. And, finally, the spreadsheet itself.

## Consulting versus internal projects

**Ryan**: You and I currently work on teams that help other teams—and other agencies, in your case—improve their content. As we bring this content audit conversation to a close, what are some differences and similarities in the content audit process—and, especially, presenting the findings and next steps—between doing this work as part of the team that works on the website in question, as opposed to advising or supporting another team?

**Michelle**: If I’m working on a project with a partner agency, as [18F](https://18f.gsa.gov/) does, it’s important to understand their goals, content operations, and capabilities. The recommendations based on an audit’s findings must be practical. With internal teams, you might have a content governance structure in place that includes reviewing audit findings as part of a standard workflow. Or, you’ll likely have more insight into the issues and how best to fix them. 

On consulting projects with partner agencies, audits provide critical information beyond what’s in the spreadsheet. You can learn how an organization manages web content (or doesn’t). Audits can play a role in introducing content strategy and governance to partners. As you said, sharing those specific examples can be compelling. Anything to add before we bring this home?

**Ryan**: Obviously we could talk for days about content audits! I think we’ve covered the value of content auditing, and a little bit about the process. Thanks for joining me to discuss content audits!

{{< note "activity" >}}The Web Managers Community of Practice is a group of government employees who manage government websites and digital services. They work to create a trusted, seamless online experience for all. [Join the Web Managers Community](https://digital.gov/communities/web-content-managers/).{{< /note >}}
