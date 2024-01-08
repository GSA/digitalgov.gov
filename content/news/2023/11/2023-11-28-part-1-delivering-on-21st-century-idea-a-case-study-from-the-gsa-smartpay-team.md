---
date: 2023-11-28 08:52:00 -0500
title: "Delivering on 21st Century IDEA: A case study from the GSA SmartPay team (Part 1)"
summary: "The GSA SmartPay program, the largest government charge card and commercial payment solutions program in the world, celebrated their 25th anniversary by launching three new websites with a user-centered, agile approach."

# See all topics at https://digital.gov/topics
topics:
  - content-strategy
  - digital-service-delivery
  - product-management
  - project-management
  - user-experience

# See all authors at https://digital.gov/authors
authors:
  - ryan-johnson

slug: part-1-delivering-on-21st-century-idea-a-case-study-from-the-gsa-smartpay-team

primary_image: three-gsa-smartpay-screens

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

{{< box >}}*The U.S. General Services Administration (GSA) Center for Charge Card Management (CCCM) administers the GSA SmartPay®️ program, providing services to more than 560 federal agencies, organizations, and Native American tribal governments. Watch this [1-minute video celebrating the program’s 25th anniversary](https://www.youtube.com/watch?v=3kcvidn5ikc), which will be November 30, 2023. To date, GSA SmartPay has handled $643 billion dollars in total spend and provided $5.6 billion in refunds to agencies to invest in their mission.*{{< /box >}}

{{< img src="three-gsa-smartpay-screens" >}}

Late in fiscal year 2022, the [GSA SmartPay program](https://smartpay.gsa.gov/) — the largest government charge card and commercial payment solutions program in the world — was experiencing challenges with one of its websites.

Thousands of card and account holders are required to complete training courses on the GSA SmartPay website. Random timeouts and crashes disrupted the user experience, causing frustration and bottlenecks in training certifications. And since most participants needed to complete the training only once every few years, many users forgot their login and password, requiring assistance from program staff.

## Working with GSA Service Delivery

The GSA SmartPay team reached out to GSA’s [Service Delivery team](https://github.com/GSA/service-delivery), a cross-functional team with product management, user experience design, content strategy, engineering, and acquisition skills.

Through research, we discovered the program’s main website — composed of general program information, resources for agency program coordinators and card and account holders, and important program updates — suffered from design and operational challenges. It was hosted and maintained by the vendor, and didn’t align with many of the requirements of the [21st Century Integrated Digital Experience Act](https://digital.gov/resources/21st-century-integrated-digital-experience-act/) (21st Century IDEA), including the use of the [U.S. Web Design System](https://designsystem.digital.gov/).

The two teams interviewed users to identify their goals and pain points. We also reviewed the websites’ analytics, collected and made available to federal agencies by the government’s [Digital Analytics Program](https://digital.gov/guides/dap/).

## Getting focused with product framing

After initial user research, the teams developed product framing for the training and program websites. Product framing is the process of creating a narrative to communicate your vision and goals, and collaboratively define the scope with a project team. It includes several components:

* Problem statement
* Product vision
* Product goals
* User types
* Out of scope items
* Risks

The teams used product framing to articulate and agree upon the problems they were trying to solve, the user needs they intended to meet, and — importantly — what they were not going to try to do.

At this point, there wasn’t a plan to build anything; the teams first wanted to agree on the problems they wanted to solve before jumping to solutions.

## Technical discovery

While the teams worked on product framing, the Service Delivery team conducted technical discovery, attempting to determine technical alternatives to mitigate or eliminate program challenges.

One technical aspect of immediate concern was the websites’ hosting. The vendor hosted both websites, making it difficult to move to an alternative technical stack or to even have full visibility into the cause of performance, accessibility, and user experience challenges.

To solve this problem, the Service Delivery team proposed moving both websites’ hosting to [Cloud.gov](https://cloud.gov/), a federal cloud-hosting service built for government work. This would offer more flexibility with technical options, vendor choices, and overall maintenance.

At the same time, the Service Delivery engineering team explored options for an approach for the training website without a login. This would eliminate the need for onerous password resets, while still allowing the program to track and authenticate user training completion and certification.

## Content auditing

In what would prove to be a crucial step later, the team initiated a [content audit](https://methods.18f.gov/decide/content-audit/) — a thorough listing and analysis of all the content on an existing website.

For the GSA SmartPay program website, this meant reviewing 560 pieces of content, including webpages, videos, documents, charts, and other content.

The audit revealed several opportunities to consolidate content; remove redundant, outdated, and trivial (ROT) content; and improve [accessibility](https://digital.gov/topics/accessibility/), [search engine optimization](https://digital.gov/topics/search-engine-optimization/) (SEO), and consistency.

## A new opportunity emerges

With the two teams working toward a path for the training and program websites, a new opportunity emerged. Because GSA SmartPay is widely used for federal procurement, card and account holders must comply with federal laws and regulations that govern purchasing goods and services for government use. This includes the fiscal year 2019 [National Defense Authorization Act (NDAA)](https://www.congress.gov/115/bills/hr5515/BILLS-115hr5515enr.pdf), and [Section 889](https://www.acquisition.gov/Section-889-Policies), which prohibits the purchase of certain telecommunications equipment and services from vendors who sell products containing spyware.

While it was possible to search for the Section 889 status of a given vendor, the tools were difficult for users to find and use, or required back-and-forth email requests.

The GSA SmartPay team learned of a tool built by [NASA](https://www.nasa.gov/) that could streamline the search process for Section 889 status, thanks to a query of the [SAM.gov](https://sam.gov/content/home) application programming interface (API). NASA offered their codebase for GSA to build on – which was production ready and well built – and we were able to quickly deploy the application. The GSA SmartPay team changed the front-end to align the user experience with GSA standards and made minor modifications to optimize the code to run on GSA hosting platforms.

Through cross-agency collaboration, the GSA SmartPay team launched the [889 Representations Search tool](https://889.smartpay.gsa.gov/) in April 2023, reducing search time for 889 status by an estimated 95%, equivalent to 75,000 hours per year saved in burden reduction.

## Agile, iterative development

With the launch of the 889 search tool, the two teams were ready to dig into the training and program websites.

The teams set up public repositories for the [training codebase](https://github.com/GSA/smartpay-training) and [program codebase](https://github.com/GSA/smartpay-website) (both open source), and managed agile development in two-week sprints, starting with the training website. Initially led by the Service Delivery team, product management tasks — including leading agile ceremonies — gradually transitioned to the GSA SmartPay product owners.

Eventually, one of the GSA SmartPay product owners became so comfortable and skilled at prioritizing the work and managing agile sprints, [they presented at a webinar on backlog management hosted by Digital.gov](https://digital.gov/event/2023/10/12/backlogs-and-why-every-website-needs-one/).

Meanwhile, based on the content audit, the GSA SmartPay program was working to iteratively consolidate, remove, and rewrite content for the program website. Ultimately, the program would reduce the volume of program website content by 75%, leading to a reassessment of the website’s information architecture, with the program helping to lead [card sorting](https://methods.18f.gov/validate/card-sorting/) and tree testing sessions with users.

To facilitate ongoing usability testing, the Service Delivery team developed multiple design and coded prototypes, continuously testing assumptions and approaches. [Cloud.gov Pages](https://cloud.gov/pages/) allowed the teams to quickly and easily launch coded, interactive prototypes for usability testing at multiple stages. The teams also ran continuous automated accessibility testing, along with manual accessibility testing by the team and with a user of assistive technology.

## Acquisition

With the three websites launched or under development, the Service Delivery team simultaneously worked with the GSA SmartPay program on an [agile procurement](https://github.com/GSA/SmartPay-RFQ/blob/main/RFQ.md) based on the [18F De-risking Guide](https://derisking-guide.18f.gov/) to support longer term development and maintenance.

The contract used a Statement of Objectives to describe work to be done, but not prescribe how to achieve program goals, which is suitable for agile development. It includes a strong [Quality Assurance Surveillance Plan](https://github.com/GSA/SmartPay-RFQ/blob/main/RFQ.md#25-list-of-deliverables-with-quality-assurance-surveillance-plan-qasp) (QASP) that GSA engineers will use in post-award management to ensure code quality.

Through the use of these methods, the Center for Charge Card Management awarded a contract to a small business based on evaluation criteria that included [past project code and user research plan reviews](https://derisking-guide.18f.gov/federal-field-guide/deciding-what-to-buy/#evaluate-contractor-proposals-based-on-industry-best-practices).

## Conclusion

In the end, the GSA SmartPay team launched three websites that embody the spirit of and deliver on the 21st Century IDEA. The sites are accessible to all users, leverage the U.S. Web Design System, and were built with and for users.

**Many thanks to everyone involved**:

* **NASA** – *Tracy Hall, Benjamin Jensen, Godfrey Sauti, and Emilie Siochi*
* **GSA** – *Andrew Lee, Rebekah Perillo, Erin VanDagna, Tri Thai, David Shea, Rosalind Cherry, Bo Berlas, Arpan Patel, Jessica Marine, Mark Meyer, Wei Wang, Jeff Fredrickson, Ryan Johnson, Kristen Lohman, Jenn Noinaj, Ashley Owens, and Mel Choyce*

---

*Read [part 2](https://digital.gov/2023/11/29/part-2-delivering-on-21st-century-idea-a-case-study-from-the-gsa-smartpay-team/) and [part 3](https://digital.gov/2023/11/29/part-3-delivering-on-21st-century-idea-a-case-study-from-the-gsa-smartpay-team/) for more information about the GSA SmartPay project.*
