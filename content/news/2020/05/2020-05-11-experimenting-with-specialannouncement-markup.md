---
# View this page at https://digital.gov/2020/05/11/experimenting-with-specialannouncement-markup
# Learn how to edit our pages at https://workflow.digital.gov
slug: experimenting-with-specialannouncement-markup

# Short URL — https://go.usa.gov/
short_url: 
date: 2020-05-11 12:00:00 -0500
kicker: "Findability"
title: "Experimenting with SpecialAnnouncement Mark-up"
deck: "What USAgov learned during its pilot with SpecialAnnouncement mark-up to make information easier to find in search results."
summary: "What USAgov learned during its pilot with SpecialAnnouncement mark-up to make information easier to find in search results."

# see all authors at https://digital.gov/authors
authors: 
  - david-kaufmann

# primary Image (for social media)
primary_image: "usagov-specialannouncement"

# Page weight: controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

topics: 
  - content-strategy
  - cx
  - metadata
  - search-engine-optimization

# Make it better ♥
---

## Introduction

The American people need access to the most up-to-date, trusted information on coronavirus.

On April 15, 2020, [a blog post from the White House](https://www.whitehouse.gov/articles/connecting-americans-coronavirus-information-online/) directed that federal government websites add “SpecialAnnouncement” schema.org tags on web pages with information pertaining to the coronavirus pandemic to help ensure these critical resources appear in search engine results.

Below, based on our experience with schema.org tags on USAgov, we explain how to do it, and what to expect. Please note that all aspects of this will be changing over time, including how search engines present information from web pages with these tags, and which tags they look for. We’ll update this content as we learn new information.

## What are schema.org tags

Search engines try to learn about our web pages to provide good matches for their users’ searches. To do this, they gather more information than just the visible content on a page. There are lots of other types of data that search engines can use about a page, which website managers can share in the code of their sites.

[Schema.org is an example](https://schema.org/docs/gs.html). Created together by major search engines, the schema.org tags let you tell search engines about your content, so that they can better understand it. The tags create structure within unstructured web page data. For example, websites might use the schema.org tags to tell search engines that the breadcrumbs on their webpages are breadcrumbs, and then search engines can show these breadcrumbs in search results.

Similarly, search engines won’t be able to interpret different paragraphs of text appropriately without signals as to the type of content. USA.gov uses [FAQPage](https://schema.org/FAQPage), a type of schema.org mark-up, to tell them that some of the headings on our pages are questions and the text that follows are answers; search engines use these to create special results that show full question and answer content from that website within search results pages. SpecialAnnouncement is one of the many Schema.org types.

## What is SpecialAnnouncement

The [SpecialAnnouncement](https://schema.org/SpecialAnnouncement) mark-up allows web pages to identify themselves as containing new and important information for the public concerning the coronavirus response. It also lets search engines provide a category for that type of information. Because these are announcements, they’re expected to apply for a limited amount of time, so expiration dates can be set. All of this data about the page can be used by search engines to present the page as a special or “rich” result to their users. These rich results are eye-catching to readers through modified layout, symbol and color.

The major search engines have published guidance on how they will interpret your use of SpecialAnnouncement. They also shared information about how they actually support the data by using it in search results.

- [Google’s SpecialAnnouncement documentation](https://developers.google.com/search/docs/data-types/special-announcements)  
- [Bing’s SpecialAnnouncement documentation](https://www.bing.com/webmaster/help/special-announcement-specifications-5cbd6249)
  
Schema.org also has lots of detailed [information about SpecialAnnouncement](https://schema.org/SpecialAnnouncement). In most cases, the search engine documentation should be sufficient to get you going.

## What might search engines do with SpecialAnnouncement mark-up

To date, we, and other agencies that have implemented the mark-up, haven’t seen any changes on search results pages. Google has released a [statement on feature availability](https://developers.google.com/search/docs/data-types/special-announcements#feature-availability) and, hopefully, rich results using the data we provide with SpecialAnnouncement will become prevalent in the future.

In the meantime, using SpecialAnnouncement can help search engines learn about important information that agencies disseminate to the public. When visual representation of the data occurs in search engine results pages, pages with this code on them will immediately benefit.

Based on our experience with the display of data using other schema.org types such as FAQ, treatment for special announcement may involve an alert symbol and a distinct background color.

## Does my page need this mark-up

Yes, any web page your agency publishes about coronavirus needs this mark-up.

In [Connecting Americans to Coronavirus Information Online](https://www.whitehouse.gov/articles/connecting-americans-coronavirus-information-online/), “The White House Office of Science and Technology Policy (OSTP) and Office of Management and Budget (OMB) directed Federal Chief Information Officers to incorporate these new Schema.org standard tags into all federally maintained web pages related to COVID-19.” When a government web page that announces information about our coronavirus pandemic response includes SpecialAnnouncement mark-up, it will help search engines fine-tune their support for our information. And, having mark-up on your pages now means that they are ready for special treatment in results pages as soon as that is a possibility.

In the event that it is not possible to add the mark-up to every page that might be appropriate, here are some considerations USAGov has used to prioritize.

### Learn about your page’s position in search results

People who use search engines have questions. Our websites often have answers, but to be visible, we have to beat out other websites. When dealing with whether or not a rich result appears for your page, you enter the often murky world of search engine optimization (SEO). As confusing as it can be, there are some clear basic steps that we can take to make our pages friendly to search engines. A good place to start is with [this advice from Google for government agencies and health organizations](https://support.google.com/webmasters/answer/9781983?hl=en).

The major search engine companies also provide tools that let you see how your pages rank in results for individual search terms. These tools in [Google Search Console](https://search.google.com/search-console/about) and [Bing Webmaster Tools](https://www.bing.com/webmaster/help/help-center-661b2d18) can help you get the data you need to make choices about a page and improve its ranking. If a page is not appearing in a high position for any query, no rich results will ever be triggered.

### Start with pages that already rank high

Adding the mark-up will not improve the results ranking for any given page. A page won’t be listed higher in search results pages than it normally would by adding the mark-up. But while using schema.org tags like this does not improve position in search results, if a page already ranks highly for a certain query and that page has supported schema.org mark-up on it, the special treatment for that page’s listing may be triggered.

## What information do you need to create the mark-up

USAgov found we actually do not need much more information to create the mark-up. Because it is based on content we already have within the web page, it is pretty easy to create each field required by the mark-up.

As with all mark-up formats, SpecialAnnouncement creates structure within unstructured web page data. That means it applies signals to certain information in the page, as if assigning that information to fields in a database. Choosing the values for the categories it wants is sort of like filling out a form. It’s best to explore those categories using the documentation from the major search engines. For example, here is [the list from Google](https://developers.google.com/search/docs/data-types/special-announcements#data-type-definitions). The list of mandatory fields you need to provide values for is very short; there are also options to choose fields depending on the topic of your page.

The main categories to answer are:

- The name of your announcement, which is basically a very short headline version.
- The category of your announcement, from a list or freeform text if none are applicable.

Depending on the category you choose, there may be more choices for extra information you can provide. Also consider the expiration date field.

If you still have questions, there is a [Google SpecialAnnouncement support group](https://developers.google.com/search/docs/data-types/special-announcements#troubleshooting) you can join. You can also join Digital.gov’s [web content managers community](https://digital.gov/communities/web-content-managers/) to ask and answer questions of your federal government peers.

## How do I get the mark-up on the page

USAgov’s preferred method for putting SpecialAnnouncement information onto pages is by coding it using JSON-LD, and then putting this code into the “head” section of the web page’s code. JSON-LD is a computer language that is just for data. It allows for simple pairs of categories and a value, and it allows for hierarchies. We prefer this method for several reasons. It is supported by multiple search engines, it’s easy for them to read, and it’s separate from the other parts of your code so it can be inserted and adjusted without breaking things.

If you are unable to get developer support to add JSON-LD to your web page, Google provides a form within your Search Console account to submit SpecialAnnouncements. There are some limitations to this approach, however - you have to have a Google Search Console account, the announcements have early expiration dates, and Bing and other search engines do not get the information.

### Managing SpecialAnnouncement pages over time

Adding new mark-up code with original content to individual web pages in this manner may be outside of your normal workflow, so you’ll need to add some new steps. You will need a way to keep track of this “hidden” content that you add to each web page. If possible, define a strategy for which mark-up you’ll add to which types of pages, and assign those pages to particular content types. You can then add the mark-up fields to the page template for that content type, which will allow you to make global changes as needed, and target items for regular review.

If the mark-up can’t be managed holistically, the expiration date field can be of some service, because once the announcement has expired in the search engines, it won’t have any impact.

## How do I know if my mark-up is valid

Search engines provide validation tools for structured data. These tools allow you to submit a url for a web page, and then test to see if the code is correct for the types of structured data that the search engine supports. If there’s a problem, they can give you some clues on how to fix it. The Bing tool requires a [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster) account. The [Google rich results tester](https://search.google.com/test/rich-results) does not have such a requirement. Both tools know to look for and check SpecialAnnouncement.

USAgov tests its code before we put it on a page. The rich results tester allows us to test pasted-in code, as well. It expects full page html, not just a block of JSON-LD, so to perfectly recreate what our page will be like with the code, we copy the page’s code into the tester, then we paste the new JSON-LD `<script>` block into the head section of the page html already in the tester. Then, we run the test. (Tip: Remember to surround the JSON-LD with a `<script>` tag as shown in the documentation.)

If you’re not a developer, but you’re writing the JSON-LD yourself, another tip is to copy a sample piece of code from the search engine documentation. Then, open a simple text editor like NotePad or TextEdit and turn off formatting so that it is only plain text. Paste in the sample code. Then, just change the parts you need to. Avoid using formatted text from a word processing program. Also, remember to put a backslash (`\`) in front of quotation marks in href code if you provide hyperlinks within the “Text” field.

If your code is on a page and working, and you have access to Google Search Console or Bing Webmaster Tools, they provide forms so you can let them know that your page has been updated and therefore should be re-indexed soon.

## How do I know if my mark-up is being used by search engines

As mentioned above, USAgov has not seen support for display of rich results within results pages using our SpecialAnnouncement mark-up. However, as of May 5, 2020, Google Search Console now supports tracking performance for pages with this type of mark-up. That means that a Search Console account for your site allows you to discover:

- Which pages on your site have been discovered as having mark-up;
- Which pages have valid or invalid mark-up; and  
- How many times a rich result using that mark-up has been shown in results pages, and how many times that has resulted in a referral to your site.

If your mark-up is not valid, and you make a change to try to fix it, you can request that the search engine re-index your page in order to evaluate the change.

USAgov has used Search Console to learn which marked-up pages have been indexed and the validity of their mark-up. As of May 5, the data does not indicate that the mark-up has been used for any rich results. See the screenshot below.

{{< img src="two-specialannouncement-pages" >}}

We will update this page as things change and as we learn more.

Please [join the web content managers community](https://digital.gov/communities/web-content-managers/) to ask your questions and share news, findings, and results on this and other issues related to managing government digital content. If you have screenshots of SpecialAnnouncement rich results for any of your web pages, or Search Console data demonstrating their use by a search engine, please share.