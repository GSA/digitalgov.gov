---
date: 2021-11-05 13:34:00 -0500
kicker: USWDS
title: "Webinar Recap: U.S. Web Design System September 2021 Monthly Call"
deck: Where do we go from USWDS 2.0?
summary: "For our September call, we focused on the future of the U.S. Web Design System (USWDS): Where does the design system go from USWDS 2.0? What did we learn from our 1.0 and 2.0 releases? Read key points and takeaways from this month’s presentation."

# See all topics at https://digital.gov/topics
topics:
  - uswds
  - user-research
  - usability
  - recaps

# See all authors at https://digital.gov/authors
authors:
  - kathryn-mullan

slug: webinar-recap-u-s-web-design-system-september-2021-monthly-call

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

primary_image: "uswds-2-illio-feature-image"

---

The [presentation deck and script](https://designsystem.digital.gov/files/monthly-calls/uswds-monthly-call-september-2021-distro.pptx) from the U.S. Web Design System (USWDS) [September Monthly Call](https://digital.gov/event/2021/09/16/uswds-monthly-call-september-2021/) are now available. Remember to tune in for the U.S. Web Design System monthly calls every third Thursday of the month.

## We have a new major version coming in January 2022: USWDS 3.0

For our September call, we focused on the future of USWDS. Where does the design system go from USWDS 2.0? What did we learn from our 1.0 and 2.0 releases? What challenges can the design system better address as we move forward? How can the design system be ready to grow and evolve alongside the teams that use it? 

There were three key points from this month’s presentation. 

1. The USWDS 3.0 beta program will begin in October 2021.
2. This new version will do four things:
   * Signal the end of IE11 support.
   * Update to modern Sass Module Syntax.
   * Allow requiring JavaScript for some functionality.
   * Publish versioned component packages.
3. Here’s what the next release will not do:
   * Move straight to cutting-edge CSS.
   * Change markup or look-and-feel.
   * Radically change our JavaScript.
   * Remove the familiar USWDS omnibus package.

## We want to support informed incremental design

Starting with USWDS 3.0, we’ll be publishing individual component packages, in addition to the familiar USWDS omnibus package. Unbundling the design system will allow components to evolve at their own speed and enable projects to tailor their implementation to their unique needs.

* We want to make it easier to stay up-to-date with the design system.
* We want to prevent major changes to some components from blocking teams from updating to critical changes in other components.
* We want to make it very clear what’s changed in the design system from version to version so teams can update their implementations intentionally and strategically, at the speed that’s right for their project.
* We want you to know how the design system is changing and how these specific changes will impact your project.
* We’re going to be more strict about semantic versioning to better communicate the impact of the changes we make from version to version.

## We’ll be making it as easy as possible to upgrade and migrate to USWDS 3.0

We aim to make an upgrade from the latest version to USWDS 3.0 take minutes, not hours, days, or weeks. Our overall focus is on ease of use over time for designers, developers, and program managers. We learned an important lesson with USWDS 2.0: that migration pain makes any change that much harder.

The biggest migration update, from a developer’s perspective, will probably be related to the Sass Modules work, but we expect that most projects will be able to update only a few lines of code to successfully migrate. Other USWDS conventions (tokens, settings, functions, mixins, and component JavaScript) will continue to work as expected.

Following along with the USWDS 3.0 [beta program](https://github.com/uswds/uswds/discussions/4365) will not only help teams better understand what will be changing, but will help the design system make the upgrade process as seamless and painless as possible for everyone.

## Resources

* Learn more about the [USWDS release history and versions](https://github.com/uswds/uswds/releases).
* See the progress we are making on our [product roadmap](https://designsystem.digital.gov/about/product-roadmap/).
* Join the [USWDS Slack channel](https://chat.18f.gov/). 
* Join the [USWDS Community](https://designsystem.digital.gov/about/community/).
* Follow us on [GitHub](https://github.com/uswds).

## Q&A follow-up

Here is a snapshot overview of our lively question and answer session for your reference.

**Q: Will there be a shared (tokens or styles) package for all these new independent components? And what would the versioning strategy be?**

A: Yes, there will be a core package that contains global tokens, settings, functions, and mixins. Each new package will follow semantic versioning, starting at 1.0.0. We will continue to maintain the bundled package (USWDS), which will follow semantic versioning as well, continuing from its 3.0.0 release. We expect that the core package will be pretty stable. The settings, functions, mixins, and token APIs should not change frequently.

**Q: Will this also make it easier for teams to create (and even share) their own components? Like a template repo for building new components and/or a list of other non-official components, so we can see what other teams have built and shared?**

A: Yes, we hope that the changes in USWDS 3.0 will make it easier for teams to contribute back to USWDS. We’re re-organizing the codebase around components, so we will be better able to formalize component requirements and provide a more clear template for component development.

Non-official and community components are a possibility down the road. I think we see USWDS as something of a hardware store for components, and there may be a practical way forward for components that aren't the “store brand.” The changes we’re making now make this more possible, but it’s not something that’s coming in the near term.

In the coming months, we will start to discuss component APIs—this may also be a way forward for developing component variants that share common core functionality.

**Q: Seems like 3.0 will have more customer-facing UX changes, and 2.0 is more on restructuring. Is that true?**

A: Not exactly. USWDS 2.0 was a restructuring, but it was more of a complete re-architecting of the “language” of the platform, rebuilding the way we use styles, tokens, and variables. In a way, USWDS 2.0 was a complete rewrite of the USWDS style API. 

Neither USWDS 2.0 or USWDS 3.0 are focused on UX changes. USWDS 3.0 is what we might think of as a platform for change rather than the change itself. USWDS 3.0 changes a couple key ground rules (and how we organize and distribute the design system), so we’re better able to evolve moving forward, and teams are better able to evolve with us.

So, USWDS 3.0 will not be a release with a lot of dramatic user-facing changes! It is more of a signpost release. For example, USWDS 3.0 will drop IE11 support, but it doesn't all-of-a-sudden implement CSS Grid or custom properties. It will allow requiring JS for some interactions but doesn’t go all-in on something like web components. USWDS 3.0 allows us to more easily make these enhancements down the road.

**Q: What assurances do agencies have for continued support and development for years down the line?**

A: The USWDS team knows that long-term support is critical to building a successful service and earning the trust of the teams that use it. In addition, GSA recognizes the value of providing shared services that accelerate the adoption of modern systems, increase operational efficiencies, deliver better results and better value overall. Our expectation is to be able to provide ongoing support and continue our development for the foreseeable future.

**Q: Would SSG/R (static site generation/server-side rendering) be a consideration as part of the conversation when relaxing the “no JavaScript” rule? Or at least the concept of hydration as a prerequisite to preserving progressive enhancement so that even for users who have JavaScript enabled, content can still be delivered first and fast?** 

A: Yes, hydration is a good model here. We’re committed to developing with performance in mind and content up front.

**Q: Is there any file showing the current version of USWDS, so I can be sure that I’m on it?**  

A: Consult [GitHub](https://github.com/uswds/uswds/releases) for our current releases. Check your \`package.json\` file if you’ve downloaded the USWDS package from NPM. Look for a line like `“uswds”: “^2.8.0”`&mdash;in this case, the active USWDS version is 2.8.0.

**Q: How does Layout Paragraphs play with USWDS?**

A:  You can see a USWDS Paragraph components implementation on the [USWDS Implementations page](https://designsystem.digital.gov/documentation/implementations) or at [drupal.org](https://www.drupal.org/project/uswds_paragraph_components).
