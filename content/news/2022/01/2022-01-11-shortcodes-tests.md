---
date: 2022-01-11 18:53:00 -0500
kicker: kicker
title: shortcodes tests
deck: deck
summary: summary
# See all topics at https://digital.gov/topics
topics:
  - 18f
# See all authors at https://digital.gov/authors
authors:
  - toni-bonitto
slug: shortcodes-tests
primary_image: 10x-gold-x-logo
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

Box shortcode:


{{< box >}} Box with no color {{< /box >}}


{{< box color="base" >}} Box with base {{< /box >}}


{{< box color="base-light" >}} Box with base-light {{< /box >}}


{{< box color="base-dark" >}} Box with base-dark {{< /box >}}


---

Footnotes

{{< footnote >}} Some footnote text {{< /footnote >}}

No change from other text; needs formatting

---

Notes

{{< note >}} text goes here... {{< /note >}}

A note can also include a button: 

{{< note button-text="submit">}} text goes here... {{< /note >}}

Activity — 

{{< note "activity" >}} Activity text goes here... {{< /note >}}

Alert — 

{{< note "alert" >}} Alert text goes here... {{< /note >}}

Comment — 

{{< note "comment" >}} > Comment goes here as a blockquote

additional text goes here... {{< /note >}}

---

Button

{{< button href="https://usdigitalregistry.digitalgov.gov/admin" text="Register and Manage Accounts" >}}

---

END of examples
