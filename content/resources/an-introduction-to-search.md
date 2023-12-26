---
date: 2023-10-04 12:01:00 -0500
title: An introduction to search
deck: Understand how and why your content must be easy to search
summary: Learn why search functionality is an important component of federal
  websites, and discover how to add a search function to your website.
# See all topics at https://digital.gov/topics
topics:
  - 21st-century-idea
  - search-engine-optimization
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 1
slug: an-introduction-to-search

---

## What is search functionality?

Search functionality enables people to find information. Whether they use a commercial search engine, or search within a single website via its search function, searching is a commonplace activity for users.

Commercial search engines scour the internet and deliver results based on the terms someone searches for.

Site-specific search functionality is typically provided via a search box. Some websites display an actual box, whereas others only display an icon (such as a magnifying glass) that expands to allow users to type their query once they’ve selected the icon. The U.S. Web Design System’s [Search component](https://designsystem.digital.gov/components/search/) usability guidance recommends using a full search box. Specifically, the search function should appear on a site’s home page as a search box instead of a link so users can locate it easily.

If using the Design System’s [Header component](https://designsystem.digital.gov/components/header/), you’ll place the search box in the top right corner.

## Why is search important for your website?

Most people begin a search for information on a commercial search engine. Once they arrive at a specific website, they’re likely to first [review the site navigation](https://www.nngroup.com/videos/search-box-vs-navigation/). However, if they don’t easily find what they’re looking for, they’ll attempt to search for it using the site’s internal search feature.

You can configure search results to promote popular or top-task content so it’s easier for users to find. Offering clear navigation, as well as easy-to-use search functionality, will accommodate both methods of finding information.

Including a search function on your website offers you a view into how site visitors search for your information. By analyzing search data, you can find common search terms, and rewrite content (particularly headings) to include words that customers typically search for.

Finally, the [21st Century Integrated Digital Experience Act](https://digital.gov/resources/21st-century-integrated-digital-experience-act/) requires that all federal websites and digital services have “Information and services that are discoverable and optimized for search.”

Section III.A.4 of OMB’s policy guidance, [M-23-22, Delivering a Digital-First Public Experience](https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/), clarifies this requirement, “Agencies’ public-facing websites must contain a search function that allows users to easily search content intended for public use.”

{{< accordion icon="content_copy" kicker="Memo M-23-22" title="**Delivering a Digital-First Public Experience, Section III.A.4**: Requirements for Websites and Digital Services" >}}*Note: For footnotes, use the link at the end of this section to open the full .pdf file.*

**Section III. DELIVERING A DIGITAL-FIRST PUBLIC EXPERIENCE**

**A. Requirements for Websites and Digital Services**

Federal websites and digital services serve agencies’ missions and help users find the information and support they need. Agencies should ensure their websites, including web applications, digital services, and mobile applications, conform to the requirements and principles described below to design and deliver a high-quality, integrated digital experience that is simple, seamless, and secure across agencies for all users.

{{< highlight >}}**4. Information and Services That Are Discoverable and Optimized for Search**{{< /highlight >}}

Search is a basic and universal part of using the internet, and search functionality is an expected feature for websites and digital services. Moreover, the public currently gets to Federal Government information and services online primarily through external search engines, which are critical to discoverability. Agencies’ websites must be structured well; contain rich, descriptive metadata; feature machine-readable content to the extent practicable; and follow search engine optimization (SEO) practices to ensure that members of the public can access government information and services from third-party websites and applications. In addition to SEO and public discoverability, a well-structured website also can be friendlier to assistive technology, archival software or services, and for other uses.

The Federal Government’s public web presence is an open book that may be crawled, archived, or “scraped” by anyone in the general public, at any time. Enabling short- and long-term preservation of government content is critical to public understanding of the government and its history, when appropriate. Web scraping plays an important role in making government information and data available and useful for a variety of public uses, including potentially for the training of large language models that enable artificial intelligence chatbots and services to accurately represent information about the government.

- **Use on-site search functionality:** Agencies’ public-facing websites must contain a search function that allows users to easily search content intended for public use. This search function should be a site-wide global search and, when appropriate, could be a feature-specific search for a subset of the website content that is of significant public12 interest (e.g., find-a-form tool). Agencies should participate in the Search.gov program by utilizing Search.gov for on-site search solutions or by integrating search solutions with Search.gov.
- **Design search-engine optimized content:** Agencies should ensure that publicly available content (i.e., content that does not require user authentication or sign in) is designed and structured so it can be effectively crawled and indexed by search engines. Agencies must not limit which search engines or crawlers can access or archive their public content. Agencies should employ best practices to improve crawling or indexing of web content, including using sitemaps, robots.txt files,<sup>29</sup> and descriptive metadata in commonly parsed fields (e.g., meta element tags).
- **Promote the “right” content:** Agencies should be strategic with SEO efforts and should think about SEO in the context of the intended audience. Agencies generate a lot of content and not all of this content is of equal importance. Unoptimized or poorly optimized content will result in negative user experiences and poor customer satisfaction. Agencies should perform keyword research and actively look at third-party search results to better understand how the public is trying to find information and should optimize content accordingly so that search terms generate results that are most likely to address the user’s query.
- **Optimize content for discoverability and utility:** Agencies should optimize and organize online content to help the public find what they are looking for as efficiently as possible, with the fewest number of steps or clicks, and without forcing the user to understand bureaucratic jargon, internal government concepts and structures, or any other superfluous information that would unnecessarily impede the public’s understanding.
- **Indicate timeliness of content:** Agencies should indicate when content on static,<sup>30</sup> public-facing websites was created or last updated by including temporal information in line with content or by using “Last Modified” in the HTTP header, in metadata tags, or in XML sitemaps. Time-and-date stamps provide transparency to the user and help the public better understand the freshness of content. When developing a timestamp strategy, agencies should prioritize adding timestamps to content that is time-sensitive, frequently changed, or top-trafficked.
- **Permit automated web scraping:** Generally, agencies shall permit web scraping and archival services to operate unimpeded without challenge-response restrictions (e.g., without presenting CAPTCHAs). Blocking or throttling of even potentially abusive crawlers is only appropriate in exceptional circumstances, such as an active denial-of-service attack, and, even then, is appropriate only on a temporary basis. If an agency detects significant public interest in scraping information from web pages, the agency should strongly consider making that information available as machine-readable data that can be accessed in bulk and optimized for automated access (such as through an API).

<a class="src" href="https://www.whitehouse.gov/omb/management/ofcio/delivering-a-digital-first-public-experience/" title="View ">View the full policy guidance as a web page<svg class="usa-icon dg-icon dg-icon--standard margin-bottom-05" aria-hidden="true" focusable="false" role="img"> <use xlink:href="/assets/img/sprite.svg#arrow_forward"></use></svg></a>

{{< /accordion >}}

## How to improve searchability

Install a **search function** on your website.

* [Search.gov](https://search.gov/) is a shared service offered by GSA, and free to federal agencies. It’s secure, compliant, and tailored for government use.

Follow **search engine optimization (SEO)** best practices to help search engines discover your content:

* Write content that is clear, concise, unique, and authoritative, to increase page rankings on commercial search engines.
* Use semantic HTML, which helps search engines differentiate types of content on a page, such as the title, description, or headings, delivers more descriptive search results, and increases the effectiveness of assistive technologies, such as screen readers.
* Properly structure headings. Include only one H1 on a page, and use it for your page title. Use H2, H3, etc. to organize content into sections and subsections.
* Create an XML sitemap that includes all URLs that you want to be discoverable through search.
* Create a robots.txt file.
* Register your site with [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster) and [Google Search Console](https://www.google.com/webmasters/tools/home?hl=en).

{{< note >}} All references to specific brands, products, and companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency. {{< /note >}}
