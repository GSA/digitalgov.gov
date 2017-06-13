---


date: 2017-04-14 11:00:08 -0400
title: 'Steps Towards SEO\: Meta Descriptions on MedlinePlus'
summary: 'MedlinePlus is a consumer health website produced by the&nbsp;U.S. National Library of Medicine (NLM), available in both&nbsp;English and&nbsp;Spanish. As part of our Search Engine Optimization (SEO) strategy, we recently added meta descriptions to our health topic pages. A meta description is a short HTML attribute in the head tag that describes the contents of a'
authors: [katie-chan, kate-masterton]
categories:
  - Content
  - Social Media
tags:
  - code
  - multilingual
  - search engine optimization
  - SEO
  - social media
---

MedlinePlus is a consumer health website produced by the [U.S. National Library of Medicine](https://www.nlm.nih.gov/) (NLM), available in both [English](https://medlineplus.gov/) and [Spanish](https://medlineplus.gov/spanish/). As part of our Search Engine Optimization (SEO) strategy, we recently added meta descriptions to our health topic pages. A meta description is a short HTML attribute in the head tag that describes the contents of a web page. When the meta description is not available or is poorly written, search engines automatically generate their own version to describe what is on a web page. They may use snippets from the page, text from anchor links, or other sources on the page.


{% include image/full-width.html img="https://www.WHATEVER/files/2017/04/600-x-340-MedLinePlus-Spanish-site.png" alt="Homepage of NLM’s Spanish-language MedlinePlus website." %}

These sources lead to varying degrees of quality for automatically generated web page descriptions. By leveraging the meta description, content owners provide search engines with their preferred descriptions.

While custom meta descriptions don’t factor in boosting a page’s rank in search results, they help users know what to expect from a webpage. People are more likely to click through to the site when the meta description is well-written, increasing clicks and conversions.


{% include image/full-width.html img="https://www.WHATEVER/files/2017/04/600-x-400-Open\_Graph\_protocol\_logo\_public-domain.jpg" alt="The Open Graph protocol logo." %}

Social networking sites like Google+ also use meta descriptions when users share your page. The display is more elegant than what is generated automatically by the site. Similarly, Facebook uses [Open Graph markup](https://developers.facebook.com/docs/sharing/webmasters#markup) to pull information such as the page description when a user shares a page.

Given that approximately 80% of traffic to MedlinePlus comes from external search engines and Facebook is our top social referrer, we decided that optimizing our pages with the meta descriptions would improve the external search and social sharing experience for our users.

## Diving into the Project

Nine NLM staff wrote descriptions for 978 English health topics over eleven weeks. Staff members spent 30-60 minutes per week writing the meta descriptions, which were added to the site in four batches throughout the project time span.

## Guidelines for Writing

Staff followed these guidelines when writing the meta descriptions:

  1. Use no more than 150 characters in the meta description. While there is no concrete rule about character limits for meta descriptions (most resources say 150-160 characters), the MedlinePlus team decided to go with 150 so that there would be a low likelihood of the descriptions being cut off in search results.
  2. Use relevant keywords, when possible from [Google Key Word Planner](https://adwords.google.com/KeywordPlanner) and [Google Trends](https://www.google.com/trends/). Keywords tell us what people are searching for. Incorporating those words into the meta description when appropriate helps users know that the page will be highly relevant to their information need.
  3. Use action words such as learn, read, find, etc. Action words give the user a reason to click through to the page.
  4. Don’t use special symbols such as ampersands (&) to ensure a consistent and clean display in external search engines.
  5. Use [plain language](http://www.plainlanguage.gov/howto/guidelines/FederalPLGuidelines/index.cfm)!
  6. Create unique meta descriptions for each page.

Here is an example of the meta description for the MedlinePlus health topic on [Arthritis](https://medlineplus.gov/arthritis.html). The custom description is put in the 

<meta />
tag “description”:

> <pre><meta name="description" content="Arthritis can cause</pre>
<pre>pain, swelling and stiffness in and around the joints.</pre>
<pre>Learn about the different types of Arthritis and how</pre>
<pre>they can affect you." />
</pre>

In the MedlinePlus content management system, we use the same text to generate an Open Graph description tag for Facebook:

> <pre><meta property="og:description" content="Arthritis can</pre>
<pre>cause pain, swelling and stiffness in and around the</pre>
<pre>joints. Learn about the different types of Arthritis</pre>
<pre>and how they can affect you." />
</pre>

## Results

MedlinePlus continues to evaluate the impact of the custom meta descriptions to our pages for Google click-through rates.

Bing and DuckDuckGo use meta descriptions consistently, so custom meta descriptions enhance the MedlinePlus external search engine presence. Meta descriptions and Open Graph description tags provide the opportunity for us to highlight contents of a page and let users of social media know precisely what information is available. We will also be leveraging the meta descriptions in our internal search engines to improve user experience.

## What’s next?

MedlinePlus staff will write meta descriptions in Spanish for health topics for [MedlinePlus en español](https://medlineplus.gov/spanish/). We continue to explore what other types of structured data could be used and optimized on the site. The team will look at creating better title tags and explore the use of schema microdata or JSON (JavaScript Object Notation). Finally, we will continue pursuing broad ranging SEO efforts to make sure our content is highly discoverable via external search engines.

_All references to specific brands and/or companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency._