---


date: 2014-05-28 1:35:08 -0400
title: 'The API Briefing\: NIH&amp;#8217;s Pillbox &ndash; Unlocking Valuable Government Health Information through APIs'
summary: 'The Food and Drug Administration collects drug labeling information for human prescription, over-the-counter, homeopathic, and veterinary products through a special markup language called &ldquo;Structured Product Labeling&rdquo; (SPL).&nbsp; The database created from the SPL submissions is a treasure trove of health information that is valuable to'
authors: [bbrantley]
categories:
  - API
  - Code
  - Data
  - 'Strategy &amp; Policy'
tags:
  - API
  - GitHub
  - National Institutes of Health
  - National Library of Medicine
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/05/250-x-250-NLM-National-Library-of-Medicine-Pillbox-app-icon.jpg" alt="National Library of Medicine (NLM) Pillbox app icon" %}The Food and Drug Administration collects drug labeling information for human prescription, over-the-counter, homeopathic, and veterinary products through a special [markup language](http://en.wikipedia.org/wiki/Markup_language "Definition of Markup Language") called “[Structured Product Labeling](http://www.fda.gov/forindustry/datastandards/structuredproductlabeling/default.htm "Structured Product Labeling")” (SPL). The database created from the SPL submissions is a treasure trove of health information that is valuable to pharmacists, doctors, and the ordinary health consumer. The problem is that data is hard for developers to access and process. Until recently, when the National Library of Medicine released open source code for “[Pillbox](http://developmentseed.org/blog/2014/05/23/pillbox-launches-on-github/ "Pillbox on Github").”

Available on [Github](https://github.com/HHS/pillbox-data-process), Pillbox is a collection of [Python scripts](https://www.python.org/doc/essays/blurb/ "What is Python?") that download the SPL data files, process the data files along with other data sources to create a “pill-focused” view of the information, and provide the data into formats that can be easily used by APIs. Pillbox is available as an API or developers can download and incorporate the scripts into their own applications. Developers can use Pillbox to power applications that can check for drug interactions, help consumers identify a pill by taking a picture of it with their smartphone, or maintain a list of personal medical prescriptions.

Pillbox is a great example of how to use the open source community to help develop government APIs. By releasing Pillbox on Github, the National Library of Medicine invites anyone to copy (“fork” in Github terms) the scripts and make their own improvements which could be incorporated back into the original code (“commit”). The National Library of Medicine also encourages users to find and describe errors in the Pillbox drug information data. The Federal government benefits by having an army of volunteers to improve the pill data and to find new uses for it.

However, the greater benefits are to the American public. The National Library of Medicine’s approach behind Pillbox is smart in that it creates an easier way to access vital government information and encourages developers to find innovative uses for vitally-needed health information. Pillbox&#8217;s open source code was made possible through [Health and Human Services&#8217; Idealab program](http://www.hhs.gov/idealab/innovate/pillbox/ "HHS' Idealab Program") (watch the [Pillbox pitch video](http://www.youtube.com/watch?v=lPCY75t2P4M "Pillbox Video Pitch")). I wonder what other government data sources could benefit from a similar method of development.

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via [email](mailto:%20William.Brantley@opm.gov)._

_**Dr. William A. Brantley**, PMP, is a Program Analyst, in Forecasting and Methods at the U.S. Office of Personnel Management (OPM). You can find out more about his work in this space at [BillBrantley.com](http://billbrantley.com/)._