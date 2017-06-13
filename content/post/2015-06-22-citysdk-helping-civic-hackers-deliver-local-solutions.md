---


date: 2015-06-22 1:00:02 -0400
title: 'CitySDK\: Helping Civic Hackers Deliver Local Solutions'
summary: 'Civic hackers are a special breed&mdash;their primary motivation is closely tied to the social issues closest to their hearts. Most attend hack-a-thons, engage in civic meetups, and show up at city hearings to champion their cause and push solutions at the societal, technology, and policy levels. On the technological front, creating civic city-based solutions has'
authors: [tyrone-grandison]
categories:
  - API
  - Data
tags:
  - API
  - Census
  - data
  - json
  - National Day of Civic Hacking
  - open data
  - United States Census Bureau
---

Civic hackers are a special breed—their primary motivation is closely tied to the social issues closest to their hearts.

Most attend hack-a-thons, engage in civic meetups, and show up at city hearings to champion their cause and push solutions at the societal, technology, and policy levels.

On the technological front, creating civic city-based solutions has traditionally been unnecessarily difficult. Data issues range from the lack of open data access to the inconsistent interpretation of current data sets to the difficulty of using federal data, such as U.S. census information.

With this in mind, the [U.S. Census Bureau](http://www.census.gov/) created the [U.S. City SDK](http://uscensusbureau.github.io/citysdk/): an open source, community-based, user-friendly software development kit for civic technologists, which takes the pain out of interacting with Census data, removes the need for them to become experts in Census methods and terminologies, and gets hacktivists to a deliverable quicker and with less hassle; all while enabling them to connect local and national public data through a simple and elegant Javascript library.

JavaScript is the initial language chosen in order to maximize flexibility and interoperability and to decrease the time from first blush to working Web application.

The launch of the beta was on June 6th, 2015—the [National Civic Day of Hacking](http://hackforchange.org/).

The initiative draws inspiration from the [European CitySDK effort](http://www.citysdk.eu/).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-338-City-SDK.jpg" alt="600-x-338-City-SDK" %}

## CitySDK Basics

Once a developer has registered for and received their [API key](http://uscensusbureau.github.io/citysdk/gettingstarted.html), they can include the [following code snippet](https://github.com/uscensusbureau/citysdk/tree/master/examples) to start using CitySDK:

> 
  
> 
  
> 
  
> 

A developer can then craft [request](http://uscensusbureau.github.io/citysdk/guides/censusModule/commonRequests.html) and response statements that return GeoJSON shapefiles with the requested (statistical) data.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-372-City-SDK-Census-module.jpg" alt="600-x-372-City-SDK-Census-module" %}

CitySDK has built-in [FIPS](http://quickfacts.census.gov/qfd/meta/long_fips.htm) code translation for latitude and longitude, addresses, and ZIP codes. Also, there is a [list of aliases](http://uscensusbureau.github.io/citysdk/guides/censusModule/aliases.html) for common variables in Census’s American Community Survey (ACS) and a [Query Builder](http://uscensusbureau.github.io/citysdk/guides/censusModule/queryBuilder.html) to help developers.

[Examples](http://uscensusbureau.github.io/citysdk/guides.html) are provided that enable those new to CitySDK to cut-and-paste sample code, modify it for their own purposes, and quickly get to their minimally viable solution.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-372-City-SDK-Guides.jpg" alt="600-x-372-City-SDK-Guides" %}

The long term goal of CitySDK is to organically include as many functions or data sets as the community needs. For this, any community developer can host a [CitySDK module](http://uscensusbureau.github.io/citysdk/guides/creatingModules.html) in their own github repository and make it [accessible to the broader community](http://uscensusbureau.github.io/citysdk/gallery.html).

These are all the features in the initial CitySDK beta.

## The Beta

On June 6th, 2015, there were two flagship events for CitySDK’s launch: one in Chicago and one in Washington, DC.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-372-City-SDK-Beta-launch-map.jpg" alt="600-x-372-City-SDK-Beta-launch-map" %}

## CitySDK in Chicago

The Chicago launch was focused on sustainability. The Census team worked with Microsoft and the [University of Chicago’s Data Science for Social Good fellows](http://dssg.uchicago.edu/).

The two CitySDK projects from Chicago were Purshable and TechSpaces.

### Purshable

[Purshable](http://www.purshable.com/) builds demand for close-to-expiration food that grocery stores normally throw away by marketing it at a discount to low-income and environmentally conscious consumers, which has the added benefit of allowing grocers to earn new revenue.

Purshable won 1st place in the [Center for Neighborhood Technology](http://www.cnt.org/) (CNT)’s [Urban Sustainability Apps Challenge](http://www.cntideas.com/).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-372-City-SDK-Purshable-weekend-launch.jpg" alt="600-x-372-City-SDK-Purshable-weekend-launch" %}

### TechSpaces

The [TechSpaces](http://www.techspace.com/) project seeks to understand city innovation hotspots using the Census CitySDK.

This project placed second in CNT’s [Urban Sustainability Apps Challenge](http://www.cntideas.com/).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-373-City-SDK-Techspaces.jpg" alt="600-x-373-City-SDK-Techspaces" %}

## CitySDK in Washington, DC

The DC projects were focused on small businesses. The Census team collaborated with:

  * [U.S. Small Business Administration](https://www.sba.gov/)
  * [BusinessUSA](http://business.usa.gov/)
  * [U.S. Department of Labor](http://www.dol.gov/)
  * [CHIEF](http://www.agencychief.com/)
  * [GovLoop](https://www.govloop.com/)
  * [e-Management](http://www.e-mcinc.com/)
  * [Fosterly](http://www.fosterly.com/)
  * [DC&#8217;s Department of Small and Local Business Development](http://dslbd.dc.gov/)
  * [Microsoft](http://azure.microsoft.com/en-us/)
  * [OpenIDEO DC](http://www.meetup.com/OpenIDEO-DC-Dojo/)
  * <a style="line-height: 1.5" href="https://generalassemb.ly/">General Assembly</a>.

The five CitySDK projects from Washington, DC, were the Gender Disparity Map, DC Data Smoothie, Specialty EBiz, Brick and Mortar, and Chicken Little.

### Gender Disparity Map

This project uses the demographic and occupation data from the ACS, via CitySDK, to identify states with disproportionately large numbers of one gender representing a variety of S.T.E.M. related occupations.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-373-City-SDK-Gender-disparity-map-by-population.jpg" alt="600-x-373-City-SDK-Gender-disparity-map-by-population" %}

### DC Data Smoothie

[DC Data Smoothie](https://hackforchange.hackpad.com/DC-Data-Smoothie-uf5pautvpgU)’s mission is to help local Business Improvement Districts (BIDs) within DC understand the composition of their constituency.

They achieved this by creating a map that leverages CitySDK to send custom (DC BID) boundaries requests for all nested block-groups and displays the ACS data for the selected area(s).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-373-City-SDK-DC-Data-Smoothie.jpg" alt="600-x-373-City-SDK-DC-Data-Smoothie" %}

### Specialty EBiz

[The Specialty EBiz team](https://hackforchange.hackpad.com/Specialty-Service-Providers-Specialty-EBiz-MI8FQUU1MTz) wanted to solve the following problems faced by a local specialty business owner: &#8220;How do I use open data to identify areas that have a high density of likely clients that meet certain criteria/fit a certain cohort?&#8221;

They used ACS data, via CitySDK, to build a novel multi-step mapping algorithm, which allows the user to combine multiple ACS variables by filtering higher level and then nested geographies that contain different criteria.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-373-City-SDK-Specialty-EBiz.jpg" alt="600-x-373-City-SDK-Specialty-EBiz" %}

### Brick and Mortar

This project used open data to maximize the number of customers who come through a company’s doors. They combined meetup information with ACS demographics from CitySDK to help businesses dynamically manage their operations based on their current open data indicators in their environment. For example, adjusting opening hours based on commute times, maximizing supplies based on meetups nearby, and increasing inventory based on community demographics.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-373-City-SDK-Brick-and-Mortar.jpg" alt="600-x-373-City-SDK-Brick-and-Mortar" %}

### Chicken Little

[Chicken Little](http://bbrotsos.github.io/chicken_little/avian_flu_map.html) is a data visualization using CitySDK, the [U.S. Department of Agriculture&#8217;s QuickStats](http://www.nass.usda.gov/Quick_Stats/), and the Animal and Plant Health Inspection Service&#8217;s avian flu data to show the effects of avian flu across the United States.

The USDA hopes to distribute Chicken Little’s data to support small farmers in their efforts to protect their businesses.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-373-City-Chicken-Little-map.jpg" alt="600-x-373-City-Chicken-Little-map" %}

## Next Steps

CitySDK is for the community and by the community.

We are looking to help you, Mr. and Ms. Civic Hacker. Let us know how we can.

You can help the CitySDK team build and improve the platform by [submitting an issue to our github repo](https://github.com/uscensusbureau/citysdk/issues), by helping us prioritize the community’s needs, by [contributing to the code base](https://github.com/uscensusbureau/citysdk), and/or by building CitySDK apps for [Census’s Data Solutions Challenge](https://www.challenge.gov/challenge/city-software-development-kit-sdk-data-solutions-challenge/).

For more information on CitySDK, please email [Jeffrey Meisel](mailto:jeffrey.meisel@gsa.gov) and  [Tyrone Grandison](mailto:tyrone.grandison@gsa.gov).

_Tyrone Grandison is a Presidential Innovation Fellow at the General Services Administration, working with the United States Census Bureau._