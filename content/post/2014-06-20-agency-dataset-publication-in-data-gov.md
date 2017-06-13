---


date: 2014-06-20 10:00:51 -0400
title: 'Agency Dataset Publication in Data.gov'
summary: 'Not sure how to get your datasets into Data.gov? We&rsquo;ve put together an overview to show you how the process works. Agencies prepare their enterprise data inventories in data.json format and post them on their websites (agency.gov/data.json), pursuant to the Open Data Policy and following the guidance and using the tools available on Project Open'
authors: [hyon-kim]
categories:
  - API
  - Data
tags:
  - API
  - data.gov
  - metadata
---

Not sure how to get your datasets into [Data.gov](http://www.data.gov/)? We’ve put together an overview to show you how the process works.

Agencies prepare their enterprise data inventories in data.json format and post them on their websites (agency.gov/data.json), pursuant to the [Open Data Policy](http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-13.pdf) and following the guidance and using the tools available on [Project Open Data](http://project-open-data.github.io/). Data.gov also offers a tool called inventory.data.gov that can be used to assist agencies in creating their data inventories.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/600-x-484-DataGov-Agency-JSON-consumption-chart.jpg" alt="600-x-484-DataGov-Agency-JSON-consumption-chart" %}


&nbsp;

## Harvesting Datasets

The Data.gov team at GSA works with agencies to validate their data.json and identifies any errors that the agency needs to fix. Once the agency data.json is revised and revalidated, the agency posts the corrected file and directs the Data.gov team to begin “harvesting” their data.json into the Data.gov catalog.

The Data.gov team sets up the harvest of the agency data.json and sets the frequency (normally on a daily basis). Metadata records (datasets) that are invalid against the Project Open Data [schema](http://project-open-data.github.io/schema/) are rejected, but all valid datasets will be published in the Data.gov [catalog](http://catalog.data.gov/dataset). The valid datasets that are published replace the existing dataset records for that agency. The Data.gov team and the agency continue to collaborate to fix errors.

The harvesting process continues on a daily basis and the agency’s catalog listings on Data.gov are continually updated.

## Data.gov Topics

Data.gov currently has 21 Topics on issues such as [Agriculture](https://www.data.gov/food/), [Climate](https://www.data.gov/climate/), [Education](https://www.data.gov/education/) and [Public Safety](https://www.data.gov/safety/). The Topics have their own curated collections of datasets. Currently, the addition of datasets to Topics collections is not automated. The community leaders of the Topics areas indicate datasets to be tagged for the Topic and the Data.gov team updates the datasets with the relevant tags to include them in the desired Topic. There is work ongoing to streamline this process.

## Accessing Datasets

For end users, once agency datasets are published in the Data.gov [catalog](http://catalog.data.gov/dataset), they can access the catalog through the user interface (based on the open source platform for data catalogs called [CKAN](http://ckan.org/)). The Data.gov catalog is also available through the Data.gov CKAN [API](http://catalog.data.gov/api/3/).

_**Hyon Kim** is the Deputy Program Director for Data.gov at the U.S. General Services Administration (GSA)._