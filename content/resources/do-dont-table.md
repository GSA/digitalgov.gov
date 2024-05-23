---
slug: do-dont-table
date: 2013-12-04 4:26:11 -0400
title: "Using the do and don'ts table"
summary: "What to do and what not to do, that is the question"
topics:
  - user-experience
  - research
authors:
  - andreanocesigritz
---

{{< do-dont-table caption="This is a table" >}}
  {{< row >}}
    {{< do-row >}} [Multilingual](https://digital.gov/communities/multilingual/) {{< /do-row >}}
    {{< dont-row >}} Don't follow these bad practices {{< /dont-row >}}
  {{< /row >}}

  {{< row >}}
    {{< do-row >}} open &#34;the door&#34; for those who need a hand {{< /do-row >}}
    {{< dont-row >}} Don't follow these bad practices {{< /dont-row >}}
  {{< /row >}}

  {{< row >}}
    {{< do-row >}} read `the directions` before using {{< /do-row >}}
    {{< dont-row >}}forget {{< highlight >}}to wash your hands{{< /highlight >}} for 20 seconds{{< /dont-row >}}
  {{< /row >}}
{{< /do-dont-table >}}


## Please follow the rules

When setting up a **do-dont-table**, you need to make sure you have the correct formatting.

* Start with a a **do-dont-table** then nest **do-dont-row**
* When you don't provide a matching pair for **do** or **don't**, the table row will not appear. Make sure you have both.
* Make sure to close the **do-dont't table** with a closing tag, it is not needed for the **do-dont-row**
