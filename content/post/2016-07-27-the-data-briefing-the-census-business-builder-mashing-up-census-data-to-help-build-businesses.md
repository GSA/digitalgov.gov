---


date: 2016-07-27 10:00:57 -0400
title: 'The Data Briefing\: The Census Business Builder&mdash;Mashing Up Census Data to Help Build Businesses'
summary: 'The Census Bureau conducts&nbsp;more&nbsp;surveys than just the Constitutionally-mandated Decennial Census. There is also the American Community Survey, the Economic Census, the County Business Patterns series, statistics on Nonemployer businesses, and the&nbsp;Survey of Business Owners and Self-Employed Persons. &nbsp;On their own, each survey is full of useful information for researchers, local and state governments, and entrepreneurs.'
authors: [bbrantley]
categories:
  - API
  - Data
tags:
  - API
  - Census
  - data
  - open data
  - The Data Briefing
  - United States Census Bureau
---

The Census Bureau conducts more surveys than just the Constitutionally-mandated Decennial Census. There is also the [American Community Survey](http://www.census.gov/programs-surveys/acs/), the [Economic Census](http://www.census.gov/econ/census/), the [County Business Patterns series](http://www.census.gov/programs-surveys/cbp.html), statistics on [Nonemployer businesses](http://www.census.gov/econ/nonemployer/), and the [Survey of Business Owners and Self-Employed Persons](http://www.census.gov/programs-surveys/sbo.html).  On their own, each survey is full of useful information for researchers, local and state governments, and entrepreneurs. However, how valuable would the data be if it were mixed and displayed geographically?

Mixing Census survey data and geographical data is the idea behind the [Census Business Builder](https://cbb.census.gov/sbe2.0-preview/index.html#). Developed from an idea generated at a Census Bureau hackathon, the Census Business Builder helps entrepreneurs research business ideas. As the creators behind the Census Business Builder explain, many entrepreneurs start a business &#8220;from the heart.&#8221; The entrepreneur has an idea and often does little or no research on the location where he or she will open the business. However, with the Census Business Builder, the entrepreneur can develop a customized report drawing from Census data, spending data from a third party, and (coming soon) imported data sets.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/600-x-342-Census-Business-Builder_Small-Business-Edition.jpg" alt="Screen capture of the Census Business Builder, Small Business Edition homepage." %}

The entrepreneur starts by choosing one of 53 business types. I’ve decided that I want to open a pizza restaurant in College Park, MD. I click on the &#8220;Food Services&#8221; button and then &#8220;Fast Food.&#8221;  I then enter &#8220;Prince George’s County&#8221; as my location and view the map. After the map is produced, I can apply different map variables to determine my potential customers, view their spending habits, and map out potential competitors. The map displays many fast food restaurants with a young population that would be an ideal demographic. Their spending habits tell me I will need to keep the pizza moderately priced. My final task is to have the application build a report for me.

The Census Bureau has demonstrated the Census Business Builder at several entrepreneurial conferences to enthusiastic acclaim. More enhancements are planned for future versions, including [full mobile support](http://www.census.gov/data/data-tools/cbb.html). The full mobile support is especially exciting because this can allow entrepreneurs to perform competitive analysis while they are at a potential business site.

Because of the success of the Census Business Builder, the Census Bureau released a companion tool: the [Regional Analyst Edition](https://cbb.census.gov/rae2.0-preview/index.html#). The Regional Analyst Edition provides similar information as the Census Business Builder and is intended for use by state and local governments. Both applications are the first Census applications to be released in the cloud. The tools leverage ESRI’s ArcGIS platform, the Census Bureau’s [TIGERWeb geography API](http://www.census.gov/data/developers/data-sets/TIGERweb-map-service.html)* (application programming interface), and the [Census Bureau’s data APIs](http://www.census.gov/data/developers/data-sets.html).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/600-x-342-Census-Business-Builder_Regional-Analyst-Edition.jpg" alt="Screen capture of the Census Business Builder, Regional Analyst Edition homepage." %}

The Census Business Builder and the Regional Analyst Edition demonstrate several innovations in creating and implementing federal government data applications. First, the Census Business Builder was created using agile project management after being conceived in a hackathon. Second, both applications illustrate the power of combining data sets to create new data products. Third, both demonstrate the power of building API-powered federal government applications in the cloud to serve the needs of the American entrepreneur and American public.

_(ESRI and ArcGIS are used for illustrative purposes and does not imply endorsement by the federal government or any specific federal agencies.)_

_*API – Application Programming Interface—how software programs and databases share data and functions with each other. Check out [APIs in Government](https://www.WHATEVER/2013/04/30/apis-in-government/) for more information._

_Each week, [The Data Briefing](https://www.WHATEVER/tag/the-data-briefing/) showcases the latest federal data news and trends._

_Dr. William Brantley is the Training Administrator for the U.S. Patent and Trademark Office’s Global Intellectual Property Academy. You can find out more about his personal work in open data, analytics, and related topics at [BillBrantley.com](http://billbrantley.com). All opinions are his own and do not reflect the opinions of the USPTO or GSA._