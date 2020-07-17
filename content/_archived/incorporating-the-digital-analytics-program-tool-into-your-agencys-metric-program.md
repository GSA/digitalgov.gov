---
url: /services/dap/incorporating-the-digital-analytics-program-tool-into-your-agencys-metric-program/
date: 2014-03-18 2:38:16 -0400
title: 'Incorporating the Digital Analytics Program Tool Into Your Agency&#8217;s Metric Program'
summary: 'This guidance is part of the Digital Analytics Program (DAP). See more on the DAP. Several factors are important to consider when determining what role the Digital Analytics Program (DAP) Analytics Tool (DAP AT) solution should play in your agency&rsquo;s or sub-agency&rsquo;s Web analytics reporting. This discussion is especially relevant to those agencies who are considering a transition from their legacy Web analytics tool to'
guide: dap
---

**This guidance is part of the [Digital Analytics Program]({{< link "/dap/" >}} "DAP: Digital Analytics Program") (DAP). [See more on the DAP]({{< link "/dap/" >}} "DAP: Digital Analytics Program").**

Several factors are important to consider when determining what role the [Digital Analytics Program]({{< link "/dap/" >}} "DAP: Digital Analytics Program") (DAP) Analytics Tool (DAP AT) solution should play in your agency’s or sub-agency’s Web analytics reporting. This discussion is especially relevant to those agencies who are considering a transition from their legacy Web analytics tool to using the DAP AT solution as their sole Web analytics solution. Here we provide agencies additional information and guidance to ensure that a transition to the DAP solution will not result in significant gaps in your agency-specific reporting. Please consider all of this information before deciding to transition from an agency-specific Web analytics legacy tool to the DAP AT solution.

## What is the DAP’s approach to GA code customization?

The DAP is the largest custom implementation of Google Analytics (GA) Premium in the world, using a single User Agent (UA) Web Property. The DAP solution is unobtrusive to existing Web analytics tools already in place on .gov and .mil websites. By design, the DAP solution provides a macro view of the federal government&#8217;s Web traffic, focusing more on historical trends and changes in data patterns rather than absolute numbers and microanalysis. The DAP’s primary goal is to provide standard website performance analytics for all .gov and .mil websites by using a uniform approach to tracking, collecting, and reporting. Customization of the DAP code is intentionally limited to ensure consistency and uniformity across all websites using the tool. However, all websites are uniquely built, and some websites have special needs where customization may be necessary. We welcome agencies’ inquiries and customization requests to determine if changes to the DAP would be beneficial for the majority of the .gov and .mil websites and the program. For instance, as part of its latest version, the DAP code will allow agencies the option to input their agency-required visitor cookie expiration time, custom search query parameters, and additional parallel tracking with another, separate GA account (if needed) as part of the DAP GA code. **Any additional customization of the DAP AT code by agencies is prohibited.**

## How should you incorporate the DAP tool into your agency&#8217;s metric program?

The DAP code can be incorporated into your agency&#8217;s metric program in one of three ways:

  1. Add a free GA account to the DAP implementation;
  2. Keep your existing Web analytics tool(s) in addition to using the DAP; or
  3. Transition to the DAP solution altogether, and drop your legacy tool(s).

Which solution you choose will depend on your Web analytics requirements and your website&#8217;s architecture. If your website is architected in a way that requires a lot of additional custom coding for proper tracking and reporting of agency-specific metrics, then using the DAP solution as the only Web analytics solution **may not be sufficient.**

## What are the differences between logfile analysis and the DAP?

Web analytics programs collect data through logfile analysis or page tagging. Because of the technologies and methods used to collect data, measurements between the two can be very different. Page tagging provides more accurate data about human activity on websites, so it’s more useful for business analysis. Logfile analysis tracks all traffic (bots, spiders, and visitors not running JavaScript) and thus provides a very granular view of site metrics. Wikipedia provides a useful [overview of the two collection methods](http://en.wikipedia.org/wiki/Web_analytics). To determine if your website needs both collection methods, ask:  “How do I currently use our Web analytics data?”

* Do I primarily run basic traffic and usage reports and analysis (that is, high-level business analysis, such as website visits, page views, visitor demographics, etc.)?
* Do I rely heavily on my server-side metrics, such as website/page availability (uptime), actual usage of podcasts or other features that belong to the agency, but are stored or hosted on other/partner websites (for example, iTunes)?
* Do I use logfile mining and transactional data to measure how much our Web servers are hit not just by human traffic, but also bots, search engine spiders, and visits from visitors who are not running JavaScript?

Answers to these questions drive your agency’s/website’s Web analytics requirements and the decision about which analytics solution is right for you.

## What are the differences between existing/legacy JavaScript-based Web analytics tools and the DAP code?

Much of the decision on whether to switch from your existing JavaScript-based Web analytics solutions exclusively to DAP depends on your agency-specific Web analytics requirements and KPIs. While JavaScript-based Web analytics tools use the same collection method and tend to report the same site metrics, the tools can be quite different when it comes to user interfaces, reporting capabilities, and configurable outputs (for example, dashboards). For the purposes of this discussion, Web analytics tool differences are limited to sampling and page-level analytics.

### Sampling

Web analytics tools like Adobe/Omniture SiteCatalyst and GA use sampling when reporting traffic metrics. [Quoting the GA developer page](https://support.google.com/analytics/answer/2637192?hl=en): &#8220;Sampling in Google Analytics (GA) or in any web-analytics software refers to the practice of selecting a subset of data from your website traffic and reporting on the trends available in that sample set. Sampling is widely used in statistical analysis because analyzing a subset of data gives similar results to analyzing all of the data. In addition, sampling speeds up processing for reports when the volume of data is so large as to slow down report queries.&#8221; All of the GA standard reports (and most drill-down reports anticipated to be required) are available on the left-side navigation bar); these are pre-aggregated and provide unsampled, &#8220;100% data&#8221; out of the box. When a GA user creates a custom report, sampling will be involved only if the number of visits in the given date range exceeds 500K visits (the highest possible threshold available). GA uses a sampling algorithm with a sample set of up to 500K visits, proportional to the distribution of visits by day, for the selected date range. Thus, the sampling rate varies for every query depending on the number of visits included in the selected date range. Given the data volume in the DAP AT account and the various traffic levels across thousands of websites, GA sampling has a more noticeable impact in the DAP account than a typical GA account. When a user creates a custom advanced segment or a custom report (or modifies a Standard Report), the output almost always will be sampled. If a website of interest has fewer visits, compared to the average number of visits across all of the DAP GA websites, sampling may have a greater impact. Here&#8217;s a common scenario: A niche website with lower levels of traffic, or perhaps, a sub-agency’s subfolder and, compared to the overall traffic reported across all of the .gov and .mil websites in DAP AT, the website represents a small subset of all visits (say, less than 1% of visits). In this case, it may be beneficial for you to create an additional GA standard (free) account for that specific website, and opt for parallel DAP AT tracking. This approach will ensure that while niche websites (or sub-folders within a website) are represented in the DAP AT governmentwide traffic for high-level trend analysis, the free GA account can also be used for microanalysis and will provide that agency with complete and exhaustive traffic information. Alternatively, if the agency/sub-agency/group representing a website already has a Web analytics solution, in addition to DAP AT, it may be beneficial to keep the existing tool to ensure that it continues to provide the level of detail the organization needs.

### Page-Level Analytics

Other leading Web analytics solutions, such as Omniture/Adobe SiteCatalyst and Webtrends On-Demand, are known for their robust page-level clickstream analytics, pathing, and page-level dashboards. For example, they are able to report on exactly which referring page was used to get to a specific page on an agency’s website. Additionally, they can provide ad-hoc path analysis for paths forward and reverse based on popular entry pages or any page on the website. Page-level pathing analysis provides a wealth of knowledge to understand how content is being used on websites. The ability to create page-level dashboards also allows agencies to create effective visual reporting on how each specific Web page is performing, along with the top paths at the page level. GA can provide page-level analytics for pathing, but not out of the box. In general, GA is more focused on aggregate, host name-based analytics when it comes to pathing, rather than individual pages. If a website uses a great deal of clickstream analysis and page-level pathing through its existing Web analytics solution, the DAP solution alone is of limited help.

## Learn More

* [Digital Analytics Program]({{< link "/dap/" >}} "DAP: Digital Analytics Program")
* [Common Questions About the Digital Analytics Program]({{< link "common-questions-about-dap.md" >}} "Common Questions about DAP - FAQ")

## Contact Us

Questions? Comments? Please email <dap@support.digitalgov.gov>.
