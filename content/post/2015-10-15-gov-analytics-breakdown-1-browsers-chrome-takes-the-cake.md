---


date: 2015-10-15 3:25:39 -0400
title: 'Gov Analytics Breakdown #1 &amp;#8211; Browsers\: Chrome Takes the Cake'
summary: 'If you were visiting a federal government website two years ago, the best odds were that&nbsp;you&rsquo;d have been using Internet Explorer as your Internet browser. But today, that&rsquo;s no longer the case. Within just the last year, Chrome has taken over the top spot as the browser most used to view federal websites, according to'
authors: [tlowden]
categories:
  - Content
  - Data
  - Metrics
  - UX
tags:
  - analytics
  - browsers
  - Digital Analytics Program
---

If you were visiting a federal government website two years ago, the best odds were that you’d have been using Internet Explorer as your Internet browser. But today, that’s no longer the case. Within just the last year, Chrome has taken over the top spot as the browser most used to view federal websites, according to data from the [Digital Analytics Program](http://WHATEVER/services/dap) (DAP), and it seems to show no signs of slowing.

We wanted to take a look at overall browser usage now that DAP has a few years of data, and the changes tell an interesting story. Here’s a breakdown of the percent of total sessions of the top five browsers during the last three years*:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-371-Broswer-Percentage-by-Year.jpg" %}

## Safari

Taking a look at the breakdown, it’s easy to see that the most consistent browser is Safari, having changed a mere percentage point over the years, moving from 19% to 20%. Mobile usage of Safari (which we’ll discuss in more detail next week), which it owes to being the default browser on both the popular iPhone and iPad, accounts for a stunning 77%** of total Safari sessions in the sample time period in 2015.

## Firefox & Android

Both Mozilla Firefox and the Android browser have had modest decreases year over year, with representations of 10% and 3% of sessions in 2015, respectively. For Firefox, the change could be as a result of continually growing mobile usage. Currently, [Firefox does not offer](https://support.mozilla.org/en-US/kb/is-firefox-available-iphone-or-ipad) an iOS mobile app in the United States, and iOS has a significant share of the U.S. mobile market. About 15% of sessions during the examined period in 2015 happened on an Android [operating system](https://en.wikipedia.org/wiki/Operating_system) (OS), but the Android browser held only 3% of session share in the browser category (note: the Android browser is the default browser on many Android OS devices, but you can use other browsers on an Android device, as well).

## Chrome

<table id="breakbox" class="bordered" style="margin-left: 5px" width="250" align="right">
  <tr>
    <th>
      <strong>Interesting browser facts:</strong>
    </th>
  </tr>
  
  <tr>
    <td>
      <ul style="padding-left: 5px;margin-bottom: 0px">
        <li>
          Safari has kept nearly the same percentage of visits (~19%).
        </li>
        <li>
          Visits using Firefox and Android have been decreasing each year (10% and 3% this year).
        </li>
        <li>
          Chrome has increased to a 40% share of visits in 2015 from 20% in 2013.
        </li>
        <li>
          Internet Explorer has gone from being used for 40% of visits in 2013 to only 24% in 2015.
        </li>
      </ul>
    </td>
  </tr>
</table>

The most visible change is the significant rise in usage of Google’s Chrome browser, increasing at a steady rate from 20% to 40% share of total sessions and overtaking Internet Explorer as the most-used browser. Other interesting facts include that around two-thirds of the visits viewed with Chrome were on a desktop, and one-third via mobile device in 2015. A hefty 59% of sessions viewed with Chrome used a Windows OS.

## Internet Explorer

An interesting statistic for anyone who builds websites is the usage of Internet Explorer (IE), and more specifically, the version of Internet Explorer. Because of the evolution of websites and technology, many features on sites in 2015 must have special work done to retrofit for older versions of IE (particularly IE8 and below) in order to maintain functionality for the visitor.

The data shows that the overall usage of Internet Explorer has dropped from 40% of sessions in the sample time period in 2013 to 24% in the same period in 2015, but how much of that traffic is done using IE8 or lower? Here’s a breakdown:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-371-IE-Version-Percentage-by-Year-chart.jpg" %}

IE11 [was released on October 17, 2013](https://en.wikipedia.org/wiki/Internet_Explorer_11), and by 2015 it had captured the majority of sessions viewed with Internet Explorer, accounting for about 14% of the total sessions in the sample time period. IE7 and IE8 combined in 2013 accounted for over 17% of all sessions, but by 2015 had shrunk to about 3.5%.

Since the DAP-participating websites are public-facing (i.e. viewing is intended for all), I wanted to see what proportion of traffic came from government networks (from government buildings) for the older versions of Internet Explorer. Using a segment to filter for government networks, the percentage of sessions by the public using IE8 and below shrunk even more. About 40% of the IE8-and-below traffic came from government networks during the sample period in 2015, potentially because of a feature called “[compatibility mode](https://productforums.google.com/forum/#!topic/analytics/JwSRQKSaprM)”, that fools the analytics tools into thinking the browser is a lower version.

Regardless, what that means is that in 2015, only around **2% of all recorded non-government sessions were viewed using IE8 or below**, and that might be good news for developers who are hoping that some day they won’t have to do extra work to support it.

This data is not exhaustive, and represents only the sites that participated in DAP at the time of the records, but it is interesting, nonetheless. We hope it proves useful for insights about the federal websites you work on. Check back next week, when we’ll dive deeper into the shift in mobile usage on federal websites over the last few years.

***For all DAP figures cited, the date range of August 16 &#8211; September 15 was used in the three consecutive years (2013, 2014, and 2015) across all DAP-participating websites. The number of sites participating in DAP increased yearly, so the data included in the yearly analysis was represented by a different sample size of websites. This information should be used to provide a general insight to the public’s behavior trends.**

** **Correction: This was incorrectly first reported as 98%, which actually referred to the percentage of mobile sessions using Safari on either an iPhone or iPad. We regret the error.**

_Author’s Note: This is Part 1 of a blog in which we use data from the [Digital Analytics Program](http://WHATEVER/services/dap) (DAP) to discuss shifts in the ways the public interacts with U.S. federal government websites. Part 1 focuses on Web browser usage, while Part 2 (to be published next week) will discuss the change in mobile vs. desktop visits. The DAP collects data from more than 4,000 U.S. federal government websites. See more data at [analytics.usa.gov](https://analytics.usa.gov)._

_To learn more about the Digital Analytics Program, request access to the data (federal employees or contractors only; subject to approval) or to learn how to participate, [email DAP](mailto:dap@support.WHATEVER)._