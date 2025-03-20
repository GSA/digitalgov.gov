---
url: /short-codes/
date: 2013-12-19 12:58:33 -0400
title: "Testing short codes"
summary: "Examples of all short codes."

---

## Accordion:

{{< accordion kicker="Day 3" title="Managing UX - July 30" icon="content_copy" >}}

The accordion body.

Another line in the accordion body.

{{< /accordion >}}

## Asset Static:

{{< asset-static file="ep2-challengegov.pdf" label="View the slides from this presentation (PDF, 4.4 MB, 39 pages)." >}}

## Box:

{{< box >}}
**Did you know?** Digital.gov follows the [Associated Press (AP) Stylebook](https://www.apstylebook.com/) and [general plain language guidance](https://www.plainlanguage.gov/). When we make edits, it’s to ensure the content reaches and engages our audience. View our full [Digital.gov Style Guide](https://digital.gov/style-guide/).
{{< /box >}}

## Button:

{{< button href="/about" text="View All Videos" >}}

## Card Policy:

{{< card-policy src="https://www.whitehouse.gov/wp-content/uploads/2018/06/a11.pdf" kicker="Policy" title="OMB Circular A-11, Part 6, Section 210.6" >}}

When developing performance information for publication, agencies should be open, transparent, and accountable for results of progress against stated performance goals and objectives, publishing information online consistent with the Federal Records Act, privacy and security restrictions, and other applicable law and policy including [OMB Circular A-130](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf), Managing Information as a Strategic Resource. It is important that agencies communicate relevant, reliable, and timely performance information within and outside their organizations to improve performance outcomes and operational efficiency.

Consistent with the GPRA Modernization Act of 2010, information published through Performance.gov will be made available to the public in a machine-readable format. See section 240 for additional information on an initiative to make agency performance plans and reports ‘machine readable’ with the 2021 Budget and Performance Planning / Reporting cycle.

{{< /card-policy >}}

## Card Prompt:

{{< card-prompt intro="**In your words, help us complete these two sentences.** There are no right or wrong answers, and you’re welcome to submit as many times as you’d like." button-text="Submit your answers" button-url="https://github.com/GSA/digitalgov.gov/issues/1517">}}

> 1. To deliver an experience that is trustworthy
> 2. To perform this action, we need

{{< /card-prompt >}}

## Quote (Quote Block)

Default

{{< quote-block text="One of the most important things we know about writing is to have some idea of your audience and whom you might be writing for." cite="Dr. Meredith Larson, Department of Education" >}}

Dark

{{< quote-block text="One of the most important things we know about writing is to have some idea of your audience and whom you might be writing for." cite="Dr. Meredith Larson, Department of Education" bg="dark" >}}

## Check List:

{{< checklist >}}

{{< checkbox >}}Submit slides 5 days before the event to [digitalgov@gsa.gov](mailto:digitalgov@gsa.gov). Copy the event hosts.{{< /checkbox >}}
{{< checkbox >}}Submit slides in **PowerPoint** file format (.pptx).{{< /checkbox >}}


{{< checklist-sublist >}}
{{< checkbox-sublist-item >}} Use large text. {{< /checkbox-sublist-item >}}
{{< checkbox-sublist-item >}} Use typefaces (fonts) that are easy to read like Source Sans Pro or Merriweather. {{< /checkbox-sublist-item >}}

{{< /checklist-sublist >}}

{{< /checklist >}}

Watch these [presentations training videos](https://www.section508.gov/create/presentations/training-videos) for more information on creating accessible presentations.

https://github.com/GSA/digitalgov.gov/pull/8366 needs to be integrated before this actually removes the border.

{{< checklist border=false >}}

{{< checkbox >}}Link to government websites by default.{{< /checkbox >}}

{{< /checklist >}}

## Do/Don't Table:

{{< do-dont-table caption="When participating in the community, community members must follow the ground rules for discussions." >}}
{{< row >}}
{{< do-row >}} Share your pronouns. Even if you are not in the LGBTQI+ community, you can choose to share your pronouns when introducing yourself to a new person, when speaking on a group call, etc. This helps normalize the act of sharing pronouns in all settings and prevent “outing” transgender or gender nonconforming people. (Outing someone is when their identity is exposed without their consent.) {{< /do-row >}}
{{< dont-row >}} Don’t take offense if someone shares their pronouns or asks about your pronouns. {{< /dont-row >}}
{{< /row >}}

{{< row >}}
{{< do-row >}} Add your own pronouns, if you’re comfortable sharing them, in your email signature or other places your name is displayed. {{< /do-row >}}
{{< dont-row >}} Don’t share your pronouns if you are not comfortable or ready. {{< /dont-row >}}
{{< /row >}}

{{< row >}}
{{< do-row >}} If you’re unsure of someone’s pronouns, use their name or just ask. {{< /do-row >}}
{{< dont-row >}} Don’t assume someone’s pronouns based on their name or physical appearance. {{< /dont-row >}}
{{< /row >}}

{{< /do-dont-table >}}

## Featured Resource:

{{< featured-resource link="topics/accessibility" >}}

## Featured Resource - External

{{< featured-resource link="https://www.ai.gov" kicker="Visit ai.gov" title="Check out ai.gov" summary="ai.gov is the go to reference for all artifical intelligence in the federal government" >}}

## Highlight:

{{< highlight >}}**1. Accessible to People of Diverse Abilities**{{< /highlight >}}

## Image:

{{< img src="2012-social-gov-summit-accessibility" >}}

## Image Flexible:

{{< img-flexible src=hcd-discovery-concepts-8 small="true" >}}

## Image Right:

{{< img-right src="2012-social-gov-summit-accessibility" >}}

## Link:

### [Link to MD with type prefix that is a 404, defaults to /resources](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/2019/11/18/building-elements-that-earn-trust/)

```[We published an overview of 21st Century IDEA]({{</* link "resources/21st-century-integrated-digital-experience-act.md" */>}})```

[We published an overview of 21st Century IDEA]({{< link "resources/21st-century-integrated-digital-experience-act.md" >}})

### [Link to a relative URL, not MD](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/event/2019/11/04/foundations-agile-i/)

```[**Foundations of Agile, Part I**]({{</* link "/event/2019/11/04/foundations-agile-i/" */>}})```

[**Foundations of Agile, Part I**]({{< link "/event/2019/11/04/foundations-agile-i/" >}})

### [Link to MD without type prefix](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/resources/negotiated-terms-of-service-agreements/)

```[Federal-Compatible Terms of Service Agreements]({{</* link "federal-compatible-terms-of-service-agreements.md" */>}})```

[Federal-Compatible Terms of Service Agreements]({{< link "federal-compatible-terms-of-service-agreements.md" >}})

### [Absolute external link](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/resources/federal-compatible-terms-of-service-agreements/)

```[download our easy step-by-step flowchart]({{</* link "https://s3.amazonaws.com/digitalgov/_legacy-img/2015/02/DigitalGov-TOS-flowchart_v6-Feb-2-2015.pdf " see our easy step by step flowchart"" */>}})```

[download our easy step-by-step flowchart]({{< link "https://s3.amazonaws.com/digitalgov/_legacy-img/2015/02/DigitalGov-TOS-flowchart_v6-Feb-2-2015.pdf " see our easy step by step flowchart"" >}})

## Note:

Type: Activity

{{< note variant="activity" >}} Literacy and Numeracy has a 5-point scale.{{< /note >}}

Type: Action

{{< note variant="action" >}} Literacy and Numeracy has a 5-point scale.{{< /note >}}

Type: Alert

{{< note variant="alert" >}}The **Consumer Action Handbook** by the U.S. General Services Administration (GSA) is no longer in production. The last one was published in 2017 and there are no more hard copies available.<br />
To request other free U.S. government publications, visit the U.S. Government Publishing Office (GPO) [Pueblo Distribution Center website](https://pueblo.gpo.gov/).{{< /note >}}

Type: Comment

{{< note variant="comment" >}} Literacy and Numeracy has a 5-point scale.{{< /note >}}

Type: Video

{{< note variant="video" >}} Literacy and Numeracy has a 5-point scale.{{< /note >}}

Type: Note

{{< note >}} Literacy and Numeracy has a 5-point scale.{{< /note >}}

## Note - Disclaimer

{{< note variant="disclaimer" >}}

{{< /note >}}

## Note - Join

{{< note variant="join" >}}

The **Web Managers Community of Practice** is a group of government employees and contractors who manage government websites and digital services. They work to create a trusted, seamless online experience for all. [Join the Web Managers Community](https://digital.gov/communities/web-content-managers/).

{{< /note >}}

## Ring:

{{< ring title="Try it out">}}
Create an interview/conversation guide with a list of keywords or themes you want to cover with each participant. This does not need to be formal, but all researchers should use it so as to create continuity across the interviews.
{{< /ring >}}

## Youtube:

{{< youtube id="5vyAlqOEsuM" title="U.S. Federal #SocialGov: 2 Years of Smashing Silos + Elevating Citizen Services with Social Media" >}}

## Ref:

### [Ref with no / or .md](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/guides/web-analytics-playbook/)

```[Commit to action]({{</* ref "commit-to-action" */>}})```

[Commit to action]({{< ref "commit-to-action" >}})

### [Relative with / no .md](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/event/2019/05/28/mobile-community-practice-spring-meeting/)

```[Mobile Community of Practice]({{</* ref "/communities" */>}})```

[Mobile Community of Practice]({{< ref "/communities" >}})

### [Prefix and MD](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/event/2019/05/28/mobile-community-practice-spring-meeting/)

```[Eight Principles of Mobile-Friendliness]({{</* ref "/guides/mobile-principles/_index.md" */>}})```

[Eight Principles of Mobile-Friendliness]({{< ref "/guides/mobile-principles/_index.md" >}})

### [Ref with no prefix and MD](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/event/2020/09/24/dap-analytics-case-study-part-2/)

```[Analytics Case Study Part 1]({{</* ref "2020-08-26-dap-analytics-case-study-part-1.md" */>}})```

[Analytics Case Study Part 1]({{< ref "2020-08-26-dap-analytics-case-study-part-1.md" >}})

### [Ref with prefix and links to _index.md](https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.sites.pages.cloud.gov/preview/gsa/digitalgov.gov/nl-json-endpoints/event/2020/09/24/dap-analytics-case-study-part-2/)

```[Digital Analytics Program]({{</* ref "/guides/dap/_index.md" */>}})```

[Digital Analytics Program]({{< ref "/guides/dap/_index.md" >}})
