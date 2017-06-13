---


date: 2015-11-04 10:11:23 -0400
title: 'The Data Briefing\: Is That Drug Safe? &amp;#8211; The FDA&rsquo;s RR-Drug R/Shiny App'
summary: 'I (virtually) attended the Third Annual Safety Datapalooza last Thursday and was greatly impressed by the projects and initiatives for public safety. This was a great event, and I am glad that live streaming was provided for those who could not attend in person but have a great interest in using government data for disaster'
authors: [bbrantley]
categories:
  - Data
tags:
  - FDA
  - The Data Briefing
  - U.S. Food and Drug Administration
  - United States Patent and Trademark Office
  - USPTO
---

I (virtually) attended the Third Annual Safety Datapalooza last Thursday and was greatly impressed by the projects and initiatives for public safety. This was a great event, and I am glad that live streaming was provided for those who could not attend in person but have a great interest in using government data for disaster preparedness. If you have not already visited <a href="http://www.data.gov/disasters/" target="_blank">disasters.data.gov</a>, please do. It is a great portal for data, apps, and tools for developers who want to help build vitally-needed public safety resources. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/11/600-x-402-Colorful-tablets-with-capsules-ulkan-iStock-Thinkstock-467982355.jpg" alt="Various colorful pills." %} 

Back to the Safety Datapalooza: one presentation that spoke to my data analyst inner geek was the Food and Drug Administration’s (FDA) “RR-Drug.” The “RR-Drug” is an application using <a href="https://www.r-project.org/" target="_blank">R (open source statistical application and language)</a> and data from the <a href="https://open.fda.gov/drug/event/reference/" target="_blank">openFDA Drug Adverse Event API</a>. The API pulls data from the <a href="https://open.fda.gov/data/faers/" target="_blank">FDA Adverse Event Reporting System (FAERS)</a> which collects reports on adverse drug events and medication errors.

FAERS has approximately 5.5 million records going back to 2004. The challenge is to make this data easily accessible to the public. The FDA’s solution was to use <a href="http://shiny.rstudio.com/" target="_blank">Shiny</a> which allows developers to build online, interactive applications with R.

Navigate to the RR-Drug Shiny application at <a href="https://openfda.shinyapps.io/RR_D/" target="_blank">https://openfda.shinyapps.io/RR_D/</a>. On the left-hand side, you will see a gray box with two tabs: “Data Reference” and “Select Drug.” Click on the blue box that says “Select Drug and # of Events…” A box will appear. Type in a drug name (I used “aspirin”) and accept the default variables for the other two text boxes. Then, click on “Update Variables.” The box will disappear, and you will see a table on the right-hand side that displays five symptoms (“flushing,” “dizziness,” etc.) along with “Counts for ASPIRIN” and other columns. If you do not see the table, select the “PRR and ROR Results” tab just under the “RR-Drug” title. Then, select the “Table” tab that is next to the “Word Cloud” tab and “text Plot” tab.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/11/600-x-418-OpenFDA-RR-Drug-Text-Plot-tab-for-Ibuprofen.jpg" alt="OpenFDA RR-Drug Text Plot tab for Ibuprofen" %}

As you can see, there is much technical information contained in this application. Click the tabs at the top and also check out the “Word Cloud” display and “text Plot” display. If you click on the “Other Apps” tab, you will find even more Shiny Apps that display FDA data reports. This is a very rich application that allows the user to interact fully with FDA data. I am looking forward to the developers adding more data visualizations from the FAERS API.

If you know R (and there are plenty of free online training resources if you want to learn R), then you can build similar Shiny applications. Applications such as Shiny, <a href="http://www.tableau.com/" target="_blank">Tableau</a>, [BIRT](http://www.eclipse.org/birt/), or similar data visualization tools can make federal government data more useful for citizens by providing visually-attractive search interfaces and ad-hoc report building either through a website or in a mobile app. Helping to make safety data easier to access and use is a great way to help the American be prepared for disasters.

_(“R,” “Shiny,” “Tableau,” and “BIRT” are used for illustrative purposes and does not imply endorsement by the federal government as a whole or by specific federal agencies.)_

_Each week, The Data Briefing showcases the latest federal data news and trends._

_Dr. William Brantley is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. You can find out more about his personal work in open data, analytics, and related topics at [BillBrantley.com](http://billbrantley.com). All opinions are his own and do not reflect the opinions of the USPTO or GSA._

<div class="copyIcon copy0">
</div>

<div class="pasteIcon paste0">
</div>

<div class="notifyIcon">
</div>

<div class="copyIcon copy0">
</div>

<div class="pasteIcon paste0">
</div>

<div class="notifyIcon">
</div>