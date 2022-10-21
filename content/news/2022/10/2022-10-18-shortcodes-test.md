---
# Originally published at the following URL
source: ""
date: 2022-10-18 11:04:00 -0500
title: Shortcodes Testing
deck: "Medicare Open Enrollment kicks off this Saturday, October 15 and runs
  through December 7. Join the Centers for Medicare & Medicaid Services (CMS) on
  social media to help spread the word! For suggested posts and shareable
  images, use their partner social media toolkit – available in both English and
  Spanish. Don’t forget to use the hashtag #MedicareOE to engage with the
  conversation online."
summary: "Medicare Open Enrollment kicks off this Saturday, October 15 and runs
  through December 7. Join the Centers for Medicare & Medicaid Services (CMS) on
  social media to help spread the word! For suggested posts and shareable
  images, use their partner social media toolkit – available in both English and
  Spanish. Don’t forget to use the hashtag #MedicareOE to engage with the
  conversation online."
# See all topics at https://digital.gov/topics
topics:
  - social-media
  - multilingual
  - cms
  - hhs
slug: shortcodes-test-page
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1
---



<!-- ## Todo
 [x] create note variant for video
 [x] remove padding from note shortcode to vertical .5rem
  - match these styles https://federalist-466b7d92-5da1-4208-974f-d61fd4348571.app.cloud.gov/preview/gsa/digitalgov.gov/shortcodes-tests-pt-2/2022/01/11/shortcodes-tests/ (pre 3.0)
 [ ] update wiki with link to icons and colors and explain how to pass into the shortcode
 [ ] identify some color states for various styling options for box, note, accordion, card
 [x] increase font icon sizes for note, same size as first capital letter
- https://designsystem.digital.gov/design-tokens/color/system-tokens/ -->

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
{{< accordion title="Title goes here" icon="unfold_more">}}
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

{{< note "video" >}} Video text goes here... {{< /note >}}

**Youtube**:
{{< youtube Hvo7WVKvPGU >}}