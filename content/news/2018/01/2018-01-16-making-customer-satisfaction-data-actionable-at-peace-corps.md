---
slug: making-customer-satisfaction-data-actionable-at-peace-corps
date: 2018-01-30 09:30:00 -0400
title: 'Making Customer Satisfaction Data Actionable at the Peace Corps'
summary: 'Learn how measuring customer experience helped inform and guide website development at Peace Corps'
authors:
  - chris-rottler
topics:
  - data
  - metrics
  - strategy
  - policy
  - design
  - user-testing-and-research
  - peace-corps
  - metrics
  - analytics
  - data
  - cx
  - cx
  - customer-service
featured_image:
  uid: peace-corps
  alt: 'Peace Corps Logo'
---

{{< img-right src="peace-corps" capton="" alt="" >}}

For the past couple of years, the [Peace Corps](https://www.peacecorps.gov/) has used online-based intercept surveys on peacecorps.gov to measure user satisfaction. The data captured over time has been interesting, but has not varied much month-to-month, which has made it difficult to translate insight into actionable enhancements on the website.

In order to get more out of the user satisfaction data, we developed a framework that applies statistical models to the data collected that identify key performance indicators (KPIs) that have the greatest likelihood to increase overall user satisfaction. We hope that this framework will help our team prioritize website changes and enhancements that have the greatest return on investment.

In June 2016, the Peace Corps launched a redesigned website in order to improve user experience and enhance our storytelling capabilities. As part of the project, we began capturing survey data to measure the impact of the redesign on a handful of KPIs pre- and post-launch. We decided to continue to conduct surveys since the launch to monitor user satisfaction over time, and to comply with the Office of Management and Budget’s (OMB) [Memorandum M-17-06 Policies for Federal Agency Public Websites and Digital Services](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2017/m-17-06.pdf) (PDF, 1.2 MB, 18 pages) that encourages use of analytics and user feedback to manage websites and digital services.

Our main KPIs that are tracked in the survey include overall satisfaction, content comprehension, task completion, likelihood to return to the website, net promoter score, and the primary purpose for the visit (i.e., find volunteer opportunities, learn about the agency, learn about a specific topic, contact an appropriate representative, use a site tool, and other).

Initially, the data was very interesting. We saw significant improvements to the user experience after the redesign was launched. However, while the initial improvement pre- and post-launch was striking, the delta month-to-month thereafter was minimal.

{{< img src="peace-corps-customer-satisfaction" alt="A bar graph showing User Satisfaction: Task Completion vs. Content Comprehension" >}}

The data provided a good moving indicator of our KPIs, but we found it difficult to choose what area to focus on to increase user satisfaction, and which enhancements to prioritize. To that end, we built a framework that systematizes model development, allowing us to build statistical models against the survey data to measure which KPI has the greatest likelihood to increase satisfaction. In the example above, “User Satisfaction: Task Completion vs. Content Comprehension,” we wanted to understand what KPI – comprehension of content or ability to complete a task – had the most potential to increase overall user satisfaction. As part of the analysis, we segmented the data set by users’ purpose of visit and developed a separate model for each segment to see if content comprehension or users’ ability to complete a task had a greater likelihood to increase overall user satisfaction.

Based on the type of data we capture – ordinal in nature – we run [ordered logistic regression](https://en.wikipedia.org/wiki/Ordered_logit). The chart above is a summary of the statistical outputs. What it means is that for a one unit increase in users’ ability to complete a task or comprehension of content increases the likelihood that their overall satisfaction increases (i.e., by the numbers to the right of each bar). So, for example, the overall satisfaction of users who come to the site to “learn about a specific topic” are 17.47 times more likely to increase to a higher score if the content is easy to understand. The satisfaction score of those same visitors is only 5.11 times more likely to increase if their ability to complete a task increases one unit. This example is fairly basic, but it is meant to illustrate the utility of this approach in terms of prioritizing website enhancements and testing them against customer satisfaction.

We plan to dig deeper by developing unique surveys for specific sections of the site, and developing models against different KPIs and dependent variables that are important to the Peace Corps in addition to satisfaction. Hopefully, this will help us improve the user experience and continue to optimize peacecorps.gov so that it better serves our visitors.
