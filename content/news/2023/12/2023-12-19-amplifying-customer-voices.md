---
date: 2023-12-19 17:38:00 -0500
title: "Amplifying customer voices"
deck: "A guide to natural language processing in customer experience data analysis"
summary: "Understand how to use natural language processing and advanced analytics to gain insights on high-impact service performance and survey design."

# See all topics at https://digital.gov/topics
topics:
  - data
  - code
  - product-management
  - customer-experience

# See all authors at https://digital.gov/authors
authors:
  - isabel-izzy-metzger

slug: amplifying-customer-voices

primary_image: green-structured-unstructured-data-iceberg-chavapong-prateep-na-thalang-istock-getty-images-1353745656-b

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

Agencies rely on customer experience surveys to collect critical feedback about how their services and products are working for the public. Some services across the government have been designated as `high impact` because they have an extensive customer base or a profound impact on the individuals they serve.

[OMB Circular A-11 Section 280 (PDF, 385 KB, 14 pages, 2023)](https://www.whitehouse.gov/wp-content/uploads/2018/06/s280.pdf) provides guidance on managing customer experience and improving service delivery. This guidance requires [High-impact Service Providers](https://www.performance.gov/cx/hisps/) (HISPs) to collect feedback after each transaction across seven indicator measures of experience. Agencies survey customers and ask them to rate different aspects of their experience on a 5-point scale, ranging from very negative (1) to very positive (5); these ratings generate structured data. The survey design also includes an optional open-ended response allowing customers to describe their experiences in their own words, which creates unstructured data. This work has resulted in a large collection of structured and unstructured data on the performance of high-impact services.

## Bridging the gap: From structured to unstructured data

The customer experience data we have collected resembles an iceberg. The more visible, structured data at the tip of the iceberg can offer insight, while the massive, unstructured data below the surface holds great potential for developing a deeper understanding of customer experiences.

{{< img src="nlp-cx-customer-experience-large-iceberg-in-water-simon-lee-unsplash-comp" alt="" >}}

When customers answer survey questions like `Were you satisfied?`, the structured response data helps us gauge whether we are providing an effective service. But it doesn’t do much to shed light on why that service was effective (or not), or how we can improve that service. These insights are more likely to exist in the free-text data, where individuals have an opportunity to explain their service experience.

GSA’s Analytics and Decision Support Division within the Office of the Chief Financial Officer sought to dive deeper into this unstructured data to gain richer insights into the customer experiences with two different services at the [Department of Labor](https://www.dol.gov/): an in-person service, and an online, digital-based service. We set out to answer two questions:

1. **What's driving customer satisfaction?** Beyond surface-level metrics and aggregated scores, we wanted to pinpoint specific elements and features that resonate positively with users. Using natural language processing, especially techniques like `topic modeling`, we sought to discover hidden themes and sentiments. The goal was not only to identify these themes but to understand their correlation with satisfaction levels and potential pain points.
2. **Are there varied experiences across customer types?** With the digital service catering to a broad spectrum of users, it was important to discern variations in experiences. Key questions posed included: *Do different user categories experience similar challenges? Is the level of satisfaction consistent across the board?* Comprehensive analysis and statistical tests of ratings – segmented by user groups and coupled with deep dives into their responses via natural language processing – enabled us to discern these differences, offering insights into the distinct journeys and experiences of various users.

In our efforts to support High-impact Service Providers in analyzing and understanding their data, we created a [dashboard to decode public sentiment](https://digital.gov/2023/10/30/decoding-public-sentiment-harnessing-open-data-to-gain-insights-into-service-delivery/) and a [reusable code repository](https://github.com/GSA/GovCXAnalyzer). The code repository provides the statistical and text analysis methods we describe in this blog post.

## Transforming unstructured data into actionable insights

Before diving into our findings, it's worth specifying the three natural language processing techniques we used to systematically analyze the unstructured data:

1. **Aspect-level sentiment analysis**: Traditional sentiment analysis tells us whether a customer’s free-text response is generally positive, negative or neutral. Aspect-level sentiment analysis goes one step further by categorizing the specific aspects or features of the statement. For the statement, "The information was helpful, but the website was hard to navigate," aspect-level sentiment analysis would identify `information` as positive and `website navigation`" as negative. This allows us to break down the feedback into targeted areas for praise or improvement.
2. **Topic modeling**: This technique automatically identifies the themes or topics that are prevalent in a large collection of texts. In the context of customer feedback, it clusters similar comments together to highlight recurring issues or strengths. For example, if multiple respondents mention phrases like `long wait times` or `slow service`, this technique will cluster these together under a broader topic like `Efficiency`. It offers a scalable alternative to manual categorization and ensures that no major themes are overlooked. This was incredibly important when analyzing digital services that often capture thousands of survey responses per quarter.
3. **Named entity recognition**: This technique identifies and classifies named entities such as organizations, persons, dates, and even specialized terms, like programs, within the text. The approach allows us to track mentions of specific entities within the customer feedback.

## Rethinking survey design: The role of sentiment analysis 

Incorporating program-specific questions into your surveys can significantly enhance the depth and relevance of the insights you gather. Specifically, asking questions about the user can enable a more granular and effective analysis of customer segments and their unique needs. For example, a service that supports the private sector might benefit from asking questions about the user’s specific industry sector. Asking at least one user-type question not only enriches your analysis but helps identify which customer segments are currently well-served and which may be lacking attention.

Additionally, our analysis uncovered a critical issue with survey design that impacts the data’s reliability. It was through sentiment analysis that we identified a disconnect between the sentiment expressed in open-text responses and the numerical ratings. We identified instances where customers gave a `1` (low) rating but conveyed a positive experience in the accompanying text. This discovery highlights the need for survey question clarity, both in the prompts, and the available options for responses.

In response to this finding, we proposed a survey redesign to accurately capture customer experience. We suggested rephrasing the questions in the following formats:

{{< box >}}
1. Do you agree or disagree with the following statement:<br />"The information I needed to complete \[service] was easy to find and understand."

* Strongly Agree
* Agree
* Neutral
* Disagree
* Strongly Disagree

2. On a scale of 1-5 (with 1 being very difficult and 5 being very easy), please rate your ease of finding the information you needed to complete \[service].

* 1 (very difficult)
* 2
* 3
* 4
* 5 (very easy)
{{< /box >}}

By clarifying the phrasing of the question and explicitly labeling the rating scale, these questions aim to prevent misunderstandings and improve the quality of the data collected.

## Department of Labor case study: Enhancing services through comprehensive customer feedback analysis

As mentioned earlier, GSA’s Analytics and Decision Support Division within the Office of the Chief Financial Officer applied natural language processing techniques to customer survey data from two services at the Department of Labor: an in-person service and an online, digital-based service.

{{< card-quote text="...\[GSA] was able to look at the data we had collected, along with additional data they collected, and provide us insights into our program that gave us a roadmap to really improve the customer experience..\[Their analysis] provided us with an excellent summary of their findings, and some concrete actions we could take to improve our interactions with both our internal and external stakeholders. At the same time that \[GSA] was analyzing our processes and data, we were working on a project to modernize our program. The recommendations from \[the analysis] dovetailed well with our own discoveries during this process and provided support for making changes...we intend to investigate those recommendations further and incorporate them in the upcoming fiscal year, where we can." cite="Department of Labor HISP Customer Experience manager (in-person service)" >}}

**Highlights from the in-person service deep dive analysis**

* **Understanding high satisfaction drivers**: Customers reported overwhelmingly high satisfaction, with the majority of survey respondents rating the service at 4 or 5. Free-text offered important context because there was a lack of variation in the numerical customer ratings. Sentiment analysis highlighted employee interactions (people factor) and the perceived service quality as the primary drivers behind positive customer experience. Customer free-text responses praised Department of Labor personnel for their helpfulness, dedication, and competence.
* **Efficiency challenges**: Despite the high satisfaction ratings, analysis of the free-text responses revealed issues with the speed and efficiency of the service. In particular, customers highlighted delays in the notification process. Additional analysis revealed that certain industry sectors felt these pain points more acutely than others. Based on these findings, we recommended that the service:
   * Establish clear benchmarks for each stage of the process to identify and address inefficiencies,
   * Notify customers upfront about expected timeframes (particularly if lengthy) to set accurate expectations and alleviate user anxieties.

**Highlights from the website service deep dive analysis**

* **Varied experience across customer segments**: Customer segments interacted with the platform differently, leading to remarkably varied feedback scores. One customer segment in particular reported a less satisfactory experience across most of the survey prompts. Their main pain points revolved around the perceived absence of required services in certain geographic areas, and the platform's complexity. The insight indicates that they may require a user-specific interface or website page to address a perceived lack of clear information and/or service availability. Other customer segments had much more positive experiences in comparison. Testimonials such as, “I have been using this website for a couple of years... It has been very helpful,” highlighted their positive journey. They expressed genuine appreciation for the resources provided, often citing specific tools and pages the platform offers.
* **Emotion as a key dimension**: For users with complex information needs, such as searching for information on federal disaster assistance and unemployment benefits, emotion played a pivotal role in their customer experience. When these users didn’t find solutions to their challenges, they often expressed stronger negative emotions and broader frustrations that went beyond the platform to include the entire U.S. government. This aligns with the [Recovering from a Disaster](https://www.performance.gov/cx/life-experiences/recovering-from-a-disaster) project on Performance.gov, which focuses on developing trauma-informed communication guidelines. The project aims to provide agency staff with the knowledge, skills, and support for a trauma-informed approach, enhancing the recovery experience for disaster-impacted individuals. It also introduces a holistic methodology to calculate the end-to-end burden on users, considering psychological and learning costs. Adopting these practices in customer service is highly recommended, especially for federal services that are serving customers in challenging situations.
* **Emergent theme from analyzing customer responses**: Topic modeling identified a theme in the text feedback around outdated content and broken links. For this web-based service, we recommended leveraging the user feedback to identify and prioritize areas for content updates.

The comprehensive analysis provided a rich and detailed picture of user sentiment, allowing for targeted recommendations for improving the online platform's user experience across diverse customer segments. We’re continuing to partner with this Department of Labor service to perform a [Voice of the Customer](https://www.performance.gov/policies/terms/cx/#voc) analysis that goes beyond the survey data to look at unsolicited feedback from customers, such as emails and chat messages.

In parallel, GSA's [Customer Experience Center of Excellence](https://coe.gsa.gov/coe/customer-experience.html) also worked with the Department of Labor to help them identify ways to improve their end-to-end customer experience through a customer experience maturity assessment, a website assessment and customer and stakeholder interviews.

Their findings from this work echoed many of the insights uncovered by our team. By combining advanced data science techniques (such as natural language processing) and the Center of Excellence’s mixed methods work, GSA was able to provide a fuller picture of customer experience.

## Closing thoughts and call to action

Natural language processing opens up a new world in customer experience analytics. With it, we're not just measuring experiences. We're also using advanced analytics to understand the experiences — and, most importantly, to drive how we can improve them.

Whether it's understanding the pivotal role of federal staff in delivering an in-person program or addressing the user-friendliness of a digital platform, combining analysis of structured and unstructured customer feedback provides actionable insights for enhancing customer experience with federal services.

{{< note >}}For those interested in implementing these techniques, the code is available in GSA’s [GovCXAnalyzer GitHub repository](https://github.com/GSA/GovCXAnalyzer/). Feel free to dive in, adapt it, and start to analyze your own structured and unstructured customer feedback data.{{< /note >}}
