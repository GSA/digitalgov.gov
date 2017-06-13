---


date: 2015-12-16 10:00:07 -0400
title: 'The Data Briefing\: Does the Federal Government Have an Obligation to Educate Open Data Users?'
summary: 'Pop quiz on statistics and data science (answers at the end of the article)\: 1) I have some data on accidents at railroad crossings. One variable indicates the compass direction a railroad crossing faces (North, Northwest, Northeast, and so on). This variable is a/an\: Ordinal Categorical Directional Interval 2) I have some ordinal data that'
authors: [bbrantley]
categories:
  - Data
tags:
  - API
  - data
  - data visualization
  - DOL
  - HHS
  - open data
  - The Data Briefing
  - U.S. Department of Labor
  - United States Department of Health and Human Services
  - United States Patent and Trademark Office
  - USPTO
---

Pop quiz on statistics and data science (answers at the end of the article):

1) I have some data on accidents at railroad crossings. One variable indicates the compass direction a railroad crossing faces (North, Northwest, Northeast, and so on). This variable is a/an:

<ol style="padding-left: 50px" type="a">
  <li>
    Ordinal
  </li>
  <li>
    Categorical
  </li>
  <li>
    Directional
  </li>
  <li>
    Interval
  </li>
</ol> 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/12/600-x-450-Key-hole-background-Sergey-Nivens-iStock-Thinkstock-180206412.jpg" alt="Concept art: An old-fashioned keyhole shape that is cut out of a blackboard displaying various types of data lets light into the room" %} 

2) I have some ordinal data that I want to analyze for trends. Would the one-sample t-test be appropriate to analyze my data?

<ol style="padding-left: 50px" type="a">
  <li>
    Yes
  </li>
  <li>
    No
  </li>
</ol>

3) “ELT” in data science is the acronym for:

<ol style="padding-left: 50px" type="a">
  <li>
    Evaluate, Load, Transfer
  </li>
  <li>
    Extract, Load, Transfer
  </li>
  <li>
    Evaluate, Load, Transform
  </li>
  <li>
    Extract, Load, Transform
  </li>
</ol>

Tony Hirst, a Senior Lecturer at the Open University in the United Kingdom, <a href="http://opendatacon.org/do-we-need-to-educate-open-data-users/" target="_blank">recently wrote about the need to educate open data users</a>. As he observed, many countries are making their data available for users to create [visualizations](https://www.WHATEVER/2015/07/24/free-the-data-femas-new-data-visualization-tool/) and [apps](https://www.WHATEVER/2015/01/07/the-api-briefing-make-2015-the-year-you-create-an-app/) from the data. However, much of the data made available is “dirty” in that there are misspellings, missing values and inconsistencies. The user would need to be familiar with the various ELT tools to arrange the data into usable forms.

Once the data is in good shape, the user would need to know how to use the data. That involves understanding basic statistics so as to know the appropriate statistical techniques to apply for analysis and visualization. Alternatively, an app developer would need to know how to create a well-formed request to an API (application programming interface).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/07/600-x-278-FEMA-Georgia-56-disasters-since-1953-visualization-county-map.jpg" alt="A data visualization map of Georgia shows different types of disasters that have occurred since 1953." %}

As I often tell my students, there are many good tools out there that allow one to create in-depth statistical analysis or build a sophisticated mobile app easily and with little knowledge. That is a benefit and a curse. A benefit is that the tools make it much easier to extract the value out of government datasets and a curse is that the wrong conclusions can be drawn from a badly-analyzed dataset. Alternatively, even worse, damages can result from relying upon a poorly-designed app that uses a government API.

Therefore, are federal agencies under an obligation to provide training on how to use the open data sources that they provide?

I do not know the answer to that question, but I do know some federal agencies do a wonderful job of educating the public on how to use the datasets the agency releases. For example, the Department of Health and Human Services (HHS) provides good documentation on <a href="http://www.healthdata.gov/" target="_blank">HealthData.gov</a>. In this beautifully designed site, users can easily search for the appropriate health datasets, view blog articles on how to use the health datasets and contact HSS with any questions concerning the datasets and APIs.

The Developer Portal at the Department of Labor (DOL) is also a well-designed site to help users more effectively use labor datasets and APIs. On the Developer Portal homepage, users can choose the “Beginner” or “Experienced” path through the DOL site. There is a <a href="http://developer.dol.gov/beginners-guide/" target="_blank">tutorial on how the DOL APIs work</a> and extensive documentation in <a href="http://developer.dol.gov/beginner/" target="_blank">eight different programming languages for the DOL APIs</a>. The datasets catalog is well-organized with good descriptions of the datasets and how to use them.

There was, and still may be, an expectation that users who access federal government data would know how to use the data properly. However, this may no longer be true given the great value of federal data; the increasing number of datasets and APIs being published; and the new tools that make it easy to access datasets and APIs. In the interests of public safety, economic innovation and increasing trust in government, maybe federal agencies should increase their training efforts in how to use federal government open data.

_Answers to the pop quiz: 1.B; 2. B; 3. D_.

_Each week, [The Data Briefing](https://www.WHATEVER/tag/the-data-briefing/) showcases the latest federal data news and trends._

_Dr. William Brantley is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. You can find out more about his personal work in open data, analytics, and related topics at <a href="http://billbrantley.com" target="_blank">BillBrantley.com</a>. All opinions are his own and do not reflect the opinions of the USPTO or GSA._