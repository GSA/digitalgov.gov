---


date: 2016-03-11 10:00:58 -0400
title: 'Seeing States the Right Way\: How to Weigh Data by Population'
summary: 'One large issue my team has run into when analyzing and reporting data across different states is knowing whether sessions within an area are higher due to more interest, or a larger population. Time after time, we see the states with the largest populations show up with the largest amount of traffic, like the graph'
authors: [kelley-holden]
categories:
  - Data
  - Metrics
  - Monthly Theme
tags:
  - analytics
  - CFPB
  - Consumer Financial Protection Bureau
  - data
  - data visualization
  - Google Analytics
---

One large issue my team has run into when analyzing and reporting data across different states is knowing whether sessions within an area are higher due to more interest, or a larger population. Time after time, we see the states with the largest populations show up with the largest amount of traffic, like the graph below.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/02/600-x-344-CFPB-Raw-Sessions-by-Location-map.jpg" alt="A data visualization map of the United States shows Raw Session by Location." %}

However, creating a useful equation of users vs. population in a given area will likely give more insight into which states are most engaged, instead of which ones have the most people. We connected sessions per state data (through Google Analytics) and the projected state census population for 2014 (through SQL) to create a visualization in Tableau of normalized numbers, showing a more accurate depiction of interest across states, using the calculation seen below:

(Total Sessions per state/State population in 2014) x 100,000

Instead of creating a percentage of each value, we used 100,000 to make the numbers in our reports more manageable (as opposed to values like .01%). That means that the numbers shown in the normalized map represent total number of visits per 100,000 people. We chose to multiply by 100,000, since that is the order of magnitude of the lowest state populations—if we used a value above 100,000, the states with the lowest populations would have normalized values larger than the actual amount of sessions.

Also, to keep the color shades from being skewed by the high engagement rates in the District of Columbia, we omitted it from the map, and added its value in a table on the bottom left, along with Hawaii and Alaska. Adding a color scale based on the normalized value helps the end client to easily find the highest and lowest values before looking at the numbers themselves.

After creating a calculation for the normalized data, we replaced all raw data maps in our monthly reports with normalized data maps. They now look like the map below, allowing you to clearly see that the District of Columbia has the highest interest in [ConsumerFinance.gov](http://www.consumerfinance.gov/) overall, followed by Virginia and Minnesota.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/02/600-x-343-CFPB-Sessions-per-100000-people-by-location-map.jpg" alt="A data visualization map of the United States shows Sessions per 100,000 people by Location." %}

I highly recommend normalizing your location data if you are not doing it already. Normalizing will help end users get a better grasp on truly useful information, instead of seeing the same population graph, report after report. If any readers are interested in learning the steps we took to creating this map in Tableau, please feel free to reach out and I am more than happy to share!

_Kelley Holden has been working on the Digital Analytics Team over at the Consumer Financial Protection Bureau (CFPB) since March 2014. She and her team are passionate about Web analysis and data, and want to share their knowledge with others who are looking for a simple and easy tool for their analytics needs. If you have any questions, or would like to know more, feel free to [contact them](mailto:_DL_CFPBDigitalanalytics@cfpb.gov)._