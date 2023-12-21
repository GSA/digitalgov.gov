---
date: 2023-12-08 23:30:00 -0500
title: "Making GSA's public art collection more accessible"
deck: "A case study on how we updated art.gsa.gov"
summary: "GSA’s Fine Arts team recently leveraged modern product development practices to launch the new collection website."

# See all topics at https://digital.gov/topics
topics:
  - design
  - code
  - user-experience

# See all authors at https://digital.gov/authors
authors:
  - jenn-noinaj

slug: making-gsa-public-art-collection-more-accessible

primary_image: screen-at-fda-by-doh-ho-suh-library-of-congress-photo-carol-m-highsmith

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

Imagine if the Louvre’s vast collection of masterpieces was hidden away from public view, or the museum was accessible to only 5,000 visitors a year! The GSA Fine Arts Program faced this very challenge: How do you share one of the largest U.S. public art collections with the world without them having to visit every federal building?

Follow along on our journey to make one of the oldest and largest public art collections in the United States on [art.gsa.gov](https://art.gsa.gov/) **accessible to all**.

{{< img src="screen-at-fda-by-doh-ho-suh-library-of-congress-photo-carol-m-highsmith" >}}

## Background

The U.S. General Services Administration’s (GSA) Fine Arts Collection traces its origins to the mid-nineteenth century; it was created during a time when the Office of the Supervising Architect in the U.S. Department of the Treasury administered the construction of federal buildings. The growth of the federal government in the 1930s led to an extensive building campaign that created four separate public art programs to help adorn the buildings, provide employment, and make art available to large and small communities.

Today, the GSA Fine Arts Program team maintains this collection. Much of the artwork owned by GSA lives in our federal buildings and courthouses. Pieces from the collection are also on long-term loan to museums and other non-profit organizations.

Last year, GSA celebrated the [50th anniversary of the Art in Architecture program](https://www.gsa.gov/real-estate/design-and-construction/art-in-architecturefine-arts/art-in-architecture-50). Launched in 1972 under the recommendations of President John F. Kennedy's Ad Hoc Committee on Federal Office Space, the program proposed:

{{< card-quote text="Where appropriate, fine art should be incorporated into the designs of federal buildings with emphasis on the work of living American artists." cite="" >}}

## Identifying the barriers

The original public-facing website where the collection was virtually housed was hard to find and navigate, making it difficult for members of the public to learn more about GSA’s 26,000 pieces of historical and contemporary art. The website was also difficult to maintain and lacked a way to track site traffic. The GSA Service Delivery team partnered with the Fine Arts Program to tackle these barriers.

## The road to art for all

{{< img src="gsa-fine-arts-process" >}}

### Discovery research

The first step in all of our projects is discovery research. Discovery research helps the team understand user needs, behaviors, and motivations to inform critical design and technical project decisions.

Our discovery research included:

* Stakeholder interviews to understand business needs
* User research to understand the goals, pain points, and scenarios in which people were using the site
* Usability testing of the existing website to uncover additional insights
* System reviews to inform the technical direction of the project

Discussions with public art professionals during this research helped highlight the importance of the site for the art community:

{{< card-quote text="When people think [of] GSA, they don’t think art. [GSA’s Fine Arts program] is a valuable asset and resource that, unfortunately, a lot of museum curators do not know exists." cite="" >}}

Our research findings helped us identify three core opportunities to improve the current site:

1. **Functionality** – Make the site easier for the public to engage with, especially through improved navigation and search. The existing site was hard to find and navigate, making it difficult for members of the public to access our extensive art collection.
2. **Performance** – Improve the website’s performance. The existing site was slow to load; we ran a website audit to assess performance, accessibility, and other metrics, and the existing site scored 29 out of 100.
3. **Maintenance** - Create a better way for the Fine Arts team to make updates to the site. The site didn’t get updated often because changes required coordination between three GSA teams and two different contractors.

From those high-level findings, we developed a product vision statement to guide the project:

*Make it easier for the public to find art they’re interested in, and for the Fine Arts program to keep the website updated.*

### Acquisition process

Once we had an idea of user needs, and product vision and goals, our engineers did a build-or-buy analysis and identified three possible paths forward with pros and cons for each one:

1. **Keep the current system** but update the backend (in Drupal and JavaScript) to help make the code more readable and testable.
2. **Use a public-facing version** of a commercial-off-the-shelf (COTS) product that the Fine Arts team already uses internally.
3. **Create a new site** outside of the Drupal platform.

The team chose option 2 (use the public-facing product of their internal collection database) to optimize for long-term maintainability. The COTS product is widely used for collections management in the arts world and could be easily customized to meet user needs.

### Design and prototyping

Once we selected the technical approach, our team got to work on the initial design and prototype of the site which began with identifying user types (see the template below). Our research identified three high-level user types:

1. The **New Deal Art Aficionado** is passionate about New Deal art and enjoys viewing it, promoting it, and continuing its legacy. They want to explore art in our collection, find art to visit, and use it as a source of information and inspiration.
2. The **Public Art Professional** works in a regional public art program, and they look to GSA’s collection for inspiration in terms of the artists, materials, and diversity of our artworks. The site informs their programs, and they often want to know about other GSA Fine Arts projects in development.
3. The **GSA Employee** works to bring awareness and appreciation for the art collection. They research artwork for outreach that promotes and supports the program's vision.

{{< ring title="What are user types?">}}
User types, also known as user archetypes, are often used in user experience (UX) to identify a broad grouping of different types of customers and end users. They are centered around existing users' motivations, behaviors, and pain points.

[Personas](https://digital.gov/2023/05/19/personas-learn-how-to-discover-your-audience-understand-them-and-pivot-to-address-their-needs/), while similar, are often used in marketing to identify a "target audience." Personas include demographic information like gender and age. One profile usually serves as a representation of a target audience.

The GSA Service Delivery team has developed a user type template. After you have completed user research, analyze and synthesize the research findings and insights by users, and use the template to identify what should be included in your team’s user types.

[View the user type template (.docx, 223 KB, 3pages)](https://s3.amazonaws.com/digitalgov/static/gsa-service-delivery-template-synthesis-user-types.docx) →
{{< /ring >}}

Our research also informed the design principles for the site. We needed the website to be:

* **User-friendly**: content is structured, accessible, and easy to navigate
* **Informative**: content is clear, compelling, consistent, and accurate
* **Relevant**: content is current and can be easily updated

## Taking an iterative approach to website design

We used a collaborative design tool to prototype the first few versions of key pages for the website (Figure 1 below); this allowed us to incorporate feedback quickly and iterate on the design. After the first version, we held a design critique to gather internal feedback on whether or not it met the program’s objectives.

With the second version, we conducted usability testing to get feedback from the public and our internal users. We received feedback from an arts advocate and outreach professional that confirmed we were on the right path:

{{< card-quote text="There are some new things here that pique my curiosity. I like how the art is categorized and the navigation menu is really simple." cite="" >}}

We revised the prototype based on the feedback we received, and the vendor used the last prototype version as a starting point for development.

{{< img src="gsa-fine-arts-figure-1-prototypes" alt="" >}}

### Development and testing

Our team worked in sprints with the vendor, collaborating closely during the development. We held weekly meetings with the entire team to prioritize the backlog of work and provided [weekly ships](https://18f.gsa.gov/2021/10/21/the_weekly_ship/)—a short email highlighting work completed, next steps, and identified blockers—to stakeholders to keep them informed throughout the project.

Initial site development began with the vendor customizing the product based on the latest prototype. Our team then internally tested this version to identify and resolve any initial development issues prior to testing with our users.

We conducted another round of usability testing, this time with members of the arts community and the public who hadn’t heard of the art collection or interacted with the existing site. We also ran automated accessibility tests, manually checked for accessibility issues, and tested the site with our [agency Section 508 Program Manager](https://www.section508.gov/tools/program-manager-listing/).

The findings and insights from this testing led to the final version of the site (see Figure 2). Some of the major changes we made include:

* Updating the branding to spell out GSA and emphasizing the collection portion for new users who had never heard of GSA or the art collection
* Adding the tagline to give users a sense of the collection scale
* Improving wayfinding by adding navigation tiles

{{< img src="gsa-fine-arts-figure-2-prototype-and-final" alt="" >}}

During usability testing, an arts program manager at another federal agency told us:

{{< card-quote text="I will be spending my entire day on this site when it's live because there’s some really amazing artwork. I love that GSA is realizing what a great resource this is." cite="" >}}

Once the vendor completed development, we coordinated with our security and operations teams to migrate the site to our test environment. The project team conducted user acceptance testing and worked with the vendor to resolve any issues encountered with the transition.

The new site launched at [art.gsa.gov](https://art.gsa.gov/) in June 2023!

## Project impact

{{< img src="gsa-fine-arts-stats" alt="" >}}

The new website makes it easier for the public to navigate and engage with GSA’s art collection. It also gives the Fine Arts program the ability to easily maintain and update the site content. The site performance increased from 29 to 59, accessibility increased from 92 to 100, and we’ve seen engagement increase as well, with visits increasing from about 5,600 visitors a month on the old site to 13,900 visitors a month on the new site.

To summarize the impact of the new site on the art community, an executive director of a non-profit arts organization shared:

{{< card-quote text="This collection represents the history of this country and belongs to every US citizen. It’s creative, celebratory, and shows the ingenuity and innovation of American people. [The website] should reflect this and capture that dynamic so people can discover this incredible resource and treasure." cite="" >}}

The GSA Service Delivery team delivers digital services focused on user needs. We're a cross-functional team of product managers, designers, engineers, and acquisition professionals, and we help GSA teams deliver solutions that are simple, effective, and accessible.

### D﻿isclaimer

_All references to specific brands, products, and/or companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency._
