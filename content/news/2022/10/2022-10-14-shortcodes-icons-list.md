---
date: 2022-10-14 08:30:00 -0500
title: "Shortcodes & Icons 2022"
deck: shortcode and icons
summary: Testing PR for all shortcodes

# See all topics at https://digital.gov/topics
topics:
  - 21st-century-idea
  - cx
  - design
  - governance
  - performance
# See all authors at https://digital.gov/authors
authors:
  - ana-monroe
slug: shortcodes-icons-list
primary_image: "gsa-logo-blue-bg-1200-x-630"

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

## Text Highlights

Within regular copy

`About` or `About Us`

Within a box

{{< box >}}

 `About` or `About Us`

{{< / box >}}

With yellow highlight

**C.** {{< highlight >}}Agencies must develop accessibility statements for their website{{< /highlight >}} and appoint a Section 508 Coordinator {{< highlight >}}as required by OMB Memorandum, <em>Strategic Plan for Improving Management of Section 508 of the Rehabilitation Act</em>{{< /highlight >}}.


## Shortcodes (Commonly Used)

**Accordion**:
{{< accordion title="Title goes here" >}}
Text goes here
{{< /accordion >}}

**Asset Img** :
{{< asset-img path="/img/digitalgov-logo.png" alt="" width="220" >}}

**Authors Bio**:
{{< author-bio "kelley-holden" >}}


**Box**:

{{< box >}} Box with no color {{< /box >}}

{{< box color="base" >}} Box with base {{< /box >}}

{{< box color="base-light" >}} Box with base-light {{< /box >}}

{{< box color="base-dark" >}} Box with base-dark {{< /box >}}

**Button**:
{{< button href="https://www.digital.gov" text="Digital.gov">}}

**Card Policy**:
{{< card-policy title="card-policy shortcode">}}
Content goes here
{{< /card-policy >}}


**Card Prompt**:
{{< card-prompt title="card-prompt shortcode">}}
Content goes here
{{< /card-prompt >}}

**Card Quote**:
{{< card-quote text="quote goes here">}}

**Footnotes**:
{{< footnote >}} Some footnote text {{< /footnote >}}

**Guide TOC**:
{{< guide-toc >}}

**Highlight**:
{{< highlight >}} This is a highlight {{< /highlight >}}

**Img**:
{{< img src="presidents-managment-agenda" >}}

**Img Right**:
{{< img-right src="challenge-gov-2021-logo-600" >}}

**Link**:
[Digital Analytics Program]({{< link "/dap/" >}}

**List Resources**:
{{< list-resources >}}


**Notes**

{{< note >}} Standard note goes here... {{< /note >}}

{{< note button-text="submit">}} A note can also include a button:  {{< /note >}}

{{< note "activity" >}} Activity text goes here... {{< /note >}}

{{< note "action" >}} Action text goes here... {{< /note >}}

{{< note "alert" >}} Alert text goes here... {{< /note >}}

**Youtube**:
{{< youtube Hvo7WVKvPGU >}}