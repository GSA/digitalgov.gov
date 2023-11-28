---
date: 2023-10-30 10:00:00 -0500
title: "Decoding public sentiment: Harnessing open data to gain insights into service delivery"
deck: An analysis of High-Impact Service Provider (HISP) data
summary: Exploring High-Impact Service Provider performance through open source data analysis to enhance customer experience with federal services.

# See all topics at https://digital.gov/topics
topics:
  - user-experience
  - customer-experience
# See all authors at https://digital.gov/authors
authors:
  - michael-kelty

slug: decoding-public-sentiment-harnessing-open-data-to-gain-insights-into-service-delivery
primary_image: "dashboard-templates-dmitry-kostrov-istock-getty-images-1145665438-comp"

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

## The value of decoding open data for understanding customer experience 

In the era of digital transformation, open source data has become a critical tool in shaping customer experiences and informing strategic decisions. One way to use open data for insights into customers' experiences is to hack it. Hacking open data refers to the process of using creative and innovative techniques to extract insights from data that is not traditionally considered a source of business intelligence.

The GSA Analytics and Decision Support Division within the Office of the Chief Financial Officer recently "hacked" open data from [Performance.gov](https://www.performance.gov/cx/hisps/) to see what we could learn about public sentiment around federal service delivery. The analysis focused on survey data collected by High-Impact Service Providers (HISPs), and a dashboard created to visualize the data. The [High-Impact Service Providers Dashboard (HISP-D)](https://d2d.gsa.gov/report/hisp-cx-dashboard) is available on the [Data2Decision (D2D) platform](https://d2d.gsa.gov/) to all federal employees who are curious about customer experience (CX).

{{< img src="high-impact-service-provider-hisp-dashboard-filter" >}}

## Collecting data on High-Impact Service Providers

As defined in [Executive Order 14058](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/12/13/executive-order-on-transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government/), HISPs are [those federal entities designated by the Office of Management and Budget (OMB)](https://www.performance.gov/cx/hisps/) that provide or fund high-impact customer-facing services, usually due to a large customer base or a significant impact on those served by the program. These services are essential to ensuring a great experience with federal government services for the public.

Per OMB, HISPs are required to collect feedback from customers after they have completed a transaction. OMB provides guidance for this collection and survey design in [OMB Circular A-11 Section 280 (PDF, 385 KB, 14 pages)](https://www.whitehouse.gov/wp-content/uploads/2018/06/s280.pdf), which was most recently updated on August 11, 2023. Most questions are rated on a 1-5 Likert scale (view an [example on the CX Toolkit](https://digital.gov/resources/customer-experience-toolkit/#measurement)), where 1 represents a very negative experience and 5 represents a very positive experience.

In its guidance, OMB has established seven drivers of customer experience:

1. Effectiveness
2. Ease
3. Efficiency
4. Transparency
5. Equity and Humanity
6. Employee interaction
7. Other

GSA is responsible for consolidating governmentwide HISP feedback data on a quarterly basis and reporting it publicly on the [Performance.gov customer experience data page](https://www.performance.gov/cx/data/). Visit the [Touchpoints GitHub Wiki data collections page](https://github.com/GSA/touchpoints/wiki/Data-Collections) to learn more about the data submission and collection process.

The raw data gathered by GSA includes ten quarters of submissions for 29 out of 35 HISPs reporting customer feedback. To make this data set more transparent and actionable, the analytics team created a dashboard with visualizations of response trends, question-level score distributions, and channel-level score distributions at both the provider and service levels. 

## Data-driven insights into customer experience

To build the dashboard, we began by consolidating various data fields from the [Touchpoints data model schema](https://github.com/GSA/touchpoints/wiki/Data-Model) into a single machine-readable file. During this process, we identified significant fluctuations in response rates, differences in how agencies adapted the seven survey prompts, missing data, and changes in the definitions of services over time. These irregularities dictate caution in comparing results among different services and HISPs, as well as interpreting trends over time.

Although these data quality issues make comparisons challenging, the dashboard does offer insights into a range of business questions concerning the performance of individual HISPs and the services they provide:

* What are the overall satisfaction levels for a specific HISP? 
* What drivers have the most significant impact on a typical customer’s experience?
* How does customer satisfaction compare between different HISPs offering similar services?
* Are there any notable trends in customer experience or response rates over time?
* Which services have the highest and lowest response rates?
* Are there services that are underutilized, despite high customer satisfaction rates?
* What services might need more resources based on low satisfaction and high demand?
* How have different HISPs customized the survey prompts, and what impact has this had on the data collected?
* Are certain survey channels (email, website, in-person, mobile, etc.) more effective for particular types of services?
* Is there a noticeable difference in feedback quality based on the survey channel?

To highlight how analysts can use the dashboard to generate insights on both service delivery and survey design, we offer two examples.

### Example 1: Customers’ service perceptions

First, an analyst can use the dashboard to see customers’ perceptions of the service, including how respondents are rating an agency or a specific HISP across the seven driver areas, as well as trends over time. For one HISP, depicted in the screenshot below, we observed that although the percentage of positive responses had been on the rise, there were still clear areas where the service was underperforming. Specifically, a significant number of customers reported negative responses across the `Quality`, `Simplicity`, and `Efficiency` questions. This suggests that even if a service seems to be improving overall, there could be certain aspects that need targeted improvement.

{{< img src="question-level-analysis-hisp-dashboard" >}}

### Example 2: Survey design

A second use for the dashboard is to analyze the design of the survey itself. The dashboard displays the count of responses for each question (respondents are not required to answer every question). At the aggregate level, we saw that the `Satisfaction` question had the most responses, and the `Equity` question had the fewest responses. At the individual HISP level, we saw that some services have relatively equal response numbers across prompts, whereas others reveal a drop-off in responses after certain questions. The screenshot below shows that respondents for this particular HISP are answering the `Satisfaction` and `Trust` questions at the highest rate. This data may have implications for the length of the survey and how the questions are sequenced and worded. 

{{< img src="question-response-counts-comparison-hisp-dashboard" >}}

The dashboard also displays the distribution of scores by survey channel, as well as the trends in the numbers of responses collected through each channel over time. We found that for certain services, customer satisfaction ratings differed significantly depending on the survey channel. In the screenshot below we see that the HISP receives a high volume of survey responses by computer but customer satisfaction levels are lowest among those responses relative to other channels. This data may point to a number of implications that would require further investigation, for example, the channel may be underperforming or the timing of email surveys may affect responses.

{{< img src="survey-channel-response-values-hisp-dashboard" >}}

## Final thoughts: Using open data for service improvement and collaboration

This analysis serves as a compelling reminder of the power of “hacking” open source data to drive service improvements across federal agencies. We invite you to explore the [High-Impact Service Providers Dashboard](https://d2d.gsa.gov/report/hisp-cx-dashboard) to find data related to your agency, HISP, or service.

Please keep an eye out for future Digital.gov blog posts from the GSA Analytics and Decision Support Division as we continue to dig deeper into the HISP survey data and explore both the structured and unstructured responses.
