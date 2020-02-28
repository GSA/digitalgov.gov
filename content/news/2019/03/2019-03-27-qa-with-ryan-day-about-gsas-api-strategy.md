---
slug: qa-with-ryan-day-about-gsas-api-strategy
date: 2019-03-27 13:00:00 -0500
title: 'Q&amp;A With Ryan Day About GSA’s API Strategy'
deck: 'These new API standards will make it easier for GSA staff to launch and maintain good APIs&#46;'
summary: 'These new API standards will make it easier for GSA staff to launch and maintain good APIs&#46;'
authors:
  - gray-brooks
  - ryan-day
topics:
  - api
  - api
  - code
  - product-management
  - open-source
featured_image:
  uid: q-and-a
  alt: ''

---

David Shive, chief information officer at The U.S. General Services Administration (GSA) recently published [an update about our agency’s adoption of an API standards](https://gsablogs.gsa.gov/innovation/2019/02/26/gsa-rolls-out-agency-api-standards/) which seeks to improve the developer experience for those who use our agency’s APIs, and save time and money by making it easier for GSA staff to launch and maintain good APIs. This initiative is the culmination of a good bit of work that we hope will be a model for other agencies to follow.

Gray Brooks recently chatted with Ryan Day, who leads [GSA’s API Strategy](https://tech.gsa.gov/guides/API_strategy/), to discuss the background to this effort.

---

**Gray Brooks:** To start, tell me at a high level what problem you were solving for with this initiative?

**Ryan Day:** We wanted to define what a high quality API is, and provide a clear path for GSA’s API programs to implement one.

APIs are important to GSA, and we have been developing and operating them for many years. We have fantastic programs and teams inside GSA that produce high quality work. But since we didn’t have a consistent set of [API standards](https://github.com/GSA/api-standards), each new project team had to make design decisions in a vacuum instead of using a consistent pattern. And outside users of our APIs could tell: the APIs were not always consistent.

These new API standards streamline the process for GSA teams to design, develop, and operate their APIs. We have made some of the most common decisions ahead of time, so GSA teams don’t have to.

GSA teams have begun the process of applying these standards to their existing and new APIs. We are focusing at first on our public APIs, but much of the information is relevant for non-public ones as well.

**Gray:** At GSA, this effort has the direct support of the agency CTO and CIO. What advice would you give to someone at another agency who is trying to implement API standards and wants to get that same type of buy-in and support?

**Ryan:** That’s true — our previous CTO actually developed the API strategy and the CIO has supported the work all along the way.

To get to that point in another agency, I would start by reinforcing the value of APIs to the agency’s mission, to show why they deserve the attention. A good way to do this is by showcasing the work that other agencies are doing in the federal government. There are a lot of great examples of API programs, but two off the top of my head are the [Blue Button API at Centers for Medicare and Medicaid Services](https://bluebutton.cms.gov/) and [Department of Veterans Affairs](https://govmatters.tv/veterans-affairs-launches-new-health-api-to-support-applications/).

Then I would explain that standards can save time and money up front and long term. They save time and money in the development, modernization, and enhancement phases (DM&E) by streamlining the decisions that project teams make for new APIs. If every development team has to make all of the decisions independently without following standards, that causes a lot of waste. They also save time and money in operations and maintenance phase (O&M) because the agency’s APIs will be consistent across programs, and IT teams can more easily support them.

**Gray:** There are two constituencies for this effort—the API program owners at GSA, and the third party developers who are consuming these APIs. How have you balanced both of their needs?

**Ryan:** You’re right that both of those groups are key in an agency’s entire API strategy. Two of the three pillars in our [API Strategy Implementation](https://tech.gsa.gov/guides/API_strategy/) address those groups: “Internal Engagement” is our work with the GSA programs and “External Customer Experience” is our focus on the people using our APIs.

The APIs that are produced using these standards will provide a fantastic experience for those third party developers through consistent design, useful documentation, clear and monitored support mechanisms, and more. So those third party developers will gain a lot as API programs implement the standards.

And the truth is the API program owners and their IT teams want to provide that fantastic experience, but there are a lot of different ways to accomplish that. These standards provide a shared vocabulary between the API program owners and their IT teams. By referencing the API standards, both will have a clear definition of what a “quality” API means in GSA.

Those program owners and IT teams worked closely with us as we drafted the standards and assessed the level of effort to implement them. We made several adjustments based on their feedback so that the standards would be workable for them.

We also continue to provide them with tools and assistance to help them be successful. Our motto for this effort is “Making The Right Thing The Easy Thing.”

{{< img src="api-pillars" >}}

**Gray:** What resources from GSA’s API standards and your work are reusable by other agencies.

**Ryan:** The standards themselves might be a good starting point for an agency that hasn’t developed their own standards or API style guide. Agencies are welcome to fork them or otherwise reference them. We certainly benefited from the [work done previously by the White House](https://github.com/WhiteHouse/api-standards) and [our own 18F organization](https://github.com/18F/api-standards).

And if a federal agency is not already using the [api.data.gov](https://api.data.gov) API management platform, they should check that out immediately. That platform is kind of a cheat code for implementing standards such as these, because standards can be applied to the customer-facing view without changing the existing back-end implementation.

In addition, our developer portal is hosted on the [Federalist platform](https://federalist.18f.gov/) and the source code of our portal resides in [an open source code repository](https://github.com/GSA/open-gsa-redesign). It might be a useful starting point for an agency developing their own API documentation or developer portal.

**Gray:** How do you see open source methods enabling this work with GSA API programs?

**Ryan:** We definitely benefit from a lot of open source work in our API program. The api.data.gov platform I mentioned before is built around the API Umbrella, which is an open source project. Our [Developer Portal](https://open.gsa.gov/api/) is built using the [U.S. Web Design System](https://designsystem.digital.gov/), which is also open source. Our standards also require that public APIs provide an [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification) file in their documentation, so that API users can import that file into their tooling and save a lot of manual effort.

**Gray:** What are your next goals?

**Ryan:** Overall, we will continue to drive our work in the three pillars of our API strategy implementation: External Customer Experience, Internal Engagement, and Technical Architecture.

We recently rolled out to GSA teams the ability to host their API documentation directly on our developer portal via self-service.

We are working closely with our security organization to develop several guides and playbooks to ensure that APIs are developed in a secure manner and properly authorized.

We also will be turning our focus to the non-public APIs that are used for system integration. We hope to use many of the same techniques to streamline the way we use APIs to connect systems internally. We see this as key to delivering an architecture where systems are easier to maintain, deploy, and enhance.

And we hope to use human centered design techniques to become more familiar with the developers and citizens who are using our public APIs. We want to understand their needs and goals and improve our onboarding process and developer portal to serve them better.

## Key Resources:

- GSA’s Developer Portal: [https://open.gsa.gov/api](https://open.gsa.gov/api)
- Source code for GSA’s Developer Portal: [https://github.com/GSA/open-gsa-redesign](https://github.com/GSA/open-gsa-redesign)
- GSA’s API Standards: [https://github.com/GSA/api-standards](https://github.com/GSA/api-standards)
- The API.DATA.GOV platform: [https://api.data.gov/about/](https://api.data.gov/about/)
- The Federalist platform: [https://federalist.18f.gov/](https://federalist.18f.gov/)
- GSA’s open source policy: [https://open.gsa.gov/oss-policy/](https://open.gsa.gov/oss-policy/)
- GSA’s API Strategy: [https://tech.gsa.gov/guides/API_strategy/](https://tech.gsa.gov/guides/API_strategy/)
