---


date: 2015-08-06 11:24:50 -0400
title: 'Analytics Restoration\: Improving on a Classic'
summary: 'Sometimes it is important to take a fresh look at a classic. As we digital analysts can attest, the array of software now available to our respective analytics programs has grown tremendously over the past few years. Even as we play catch-up to our private sector leaders, many digital analytics programs across the federal government'
authors: [hhs-digital-analytics-team]
categories:
  - Metrics
tags:
  - analytics
  - HHS
  - United States Department of Health and Human Services
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-400-Vintage-red-coupe-ladimiroquai-iStock-Thinkstock-464976020.jpg" alt="Vintage red convertible coupe" %} 

Sometimes it is important to take a fresh look at a classic.

As we digital analysts can attest, the array of software now available to our respective analytics programs has grown tremendously over the past few years. Even as we play catch-up to our private sector leaders, many digital analytics programs across the federal government can now boast an inventory far greater than lone Web traffic or quality assurance (QA) software.

We now have access to click-tracking via heat maps and session replay, more robust social media monitoring, multivariate testing, tag management, and richer visualization tools, to name just a handful of advancements. All of these tools have enhanced our analysis and reporting capabilities; and yet, it is important that we do not forget the power of the originator—our Web traffic analysis software.

No matter the page-tracking solution you are using, you not only have a source for Web user and traffic metrics, you have access to a powerful, customizable, database. A database, by the way, that accepts user-defined data sources, allowing us to segment our Web metrics in ways that can expand our inventories and capabilities just as much as, and sometimes even more than, the latest software on the shelf.

“OK, how, exactly?” you might be asking.

Here at the Department of Health and Human Services (HHS), we happen to be using Google’s Universal Analytics (UA), which allows us to define certain “Custom” Events, Dimensions, and Metrics, or data points that we send to our UA account based on specific parameters we set. Here are a few examples, along with some use cases.

## Custom Searches

**Custom Metrics:** KeyMatch Results Returned, OneBox Results Returned, and Zero Results Returned

**Value:** If you happen to have implemented some of the custom features of Google Search Appliance (GSA) for your internal site search, you may have noticed that GSA does not offer a way to track the usage of those features independently.

By implementing custom metrics, our team now tracks the usage of KeyMatch, a feature that matches specific results to select search terms. KeyMatches can be thought of as sponsored search results, but for internal site search. We also track the use of OneBox, which offers on-page answers presented in a sidebar box. As OneBox answers can potentially satisfy a user without the need for them to select a URL from the listed results, understanding OneBox usage is essential to interpreting our overall click through rates (CTRs).

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-138-Analytics-Restoration\_Image-1-Sample-Report-with-OneBox-Search-Results\_Custom-Metric.jpg" alt="Image 1: Sample Report with OneBox Search Results (Custom Metric)" %}


Another custom search metric, Zero Results Returned, allows us to identify content gaps or system errors in a way not previously available to us. Once we identify which search phrases return zero results, we can adjust our content keywords and search features as needed.

## Content Types

**Custom Dimension:** Content Type (e.g. Article, Blog, Alert, etc.)

**Value**: As structured content becomes more standardized, our analytics reporting should be able to segment the metrics for that content accordingly. Tracking usage by content type, and even audience tags, takes us yet another step beyond segmenting content by URL string. This custom dimension alone carries a lot of potential for advanced analysis.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-143-Analytics-Restoration\_Image-2-Sample-Report-with-Content-Type\_Custom-Dimension.jpg" alt="Image 2: Sample Report with Content Type (Custom Dimension)" %}


## Metadata

**Custom Dimensions:** Source Organization, Content Creator, Modified Date

**Value:** Capturing various metadata as custom dimensions creates the opportunity for a range of useful reports. You are limited only by the metadata you are capturing. For example, you can easily identify content owners by author, or office, if you are capturing that metadata. You can send content owners reports on pages with outdated content, missing metadata, or broken links. Since this data can be paired with traffic metrics, busy content owners can prioritize what to fix first, instead of addressing issues at random.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-145-Analytics-Restoration\_Image-3-Sample-Report-with-Source-Organization-and-Modified-Date\_Custom-Dimensions.jpg" alt="Image 3: Sample Report with Source Organization and Modified Date (Custom Dimensions)" %}


## JavaScript Errors

**Custom Event**: JavaScript Errors

**Value**: Is your development team overworked? How about sending them JavaScript errors prioritized by event (error) volume? With this custom event, you can use UA to segment errors by browser, operating system, or device, providing your development team additional context.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-199-Analytics-Restoration\_Image-4-Sample-Report-with-JavaScript-Errors-by-HTML-Line-Number\_Custom-Event.jpg" alt="Image 4: Sample Report with JavaScript Errors by HTML Line Number (Custom Event)" %}


Google Analytics (GA) has offered user-defined data sources ever since the first version of Classic GA was introduced. Only, now, with custom dimensions in particular, that capability is greater than ever. So, before you embrace the next niche analytics software, consider taking a pause.

While the latest digital showrooms tout new technologies and modern designs, you just might get more bang-for-your-buck with a simple tune-up. What if you could double your value with a few tweaks to your engine?

_The HHS Digital Analytics Team supports the Department of Health and Human Services (HHS) through the collection, analysis, and reporting of analytics in support of the Agency’s mission._