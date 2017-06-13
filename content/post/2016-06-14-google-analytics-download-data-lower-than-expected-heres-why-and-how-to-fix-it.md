---


date: 2016-06-14 10:00:36 -0400
title: 'Google Analytics Download Data Lower Than Expected? Here&rsquo;s Why (And How to Fix It)'
summary: 'What&rsquo;s the best way to track file downloads in Google Analytics? Will the Digital Analytics Program&nbsp;(DAP) help me track PDF/.doc/.xls downloads? Are my download numbers accurate? Why aren&rsquo;t my file downloads appearing in the web analytics data? The answers to these questions aren&rsquo;t abundantly clear to even seasoned web analysts. But here&rsquo;s the good news\:'
authors: [immanuel-lee]
categories:
  - Metrics
tags:
  - analytics
  - DAP
  - Digital Analytics Program
  - metrics
---

What’s the best way to track file downloads in Google Analytics? Will the [Digital Analytics Program](https://www.WHATEVER/services/dap/) (DAP) help me track PDF/.doc/.xls downloads? Are my download numbers accurate? Why aren’t my file downloads appearing in the web analytics data? 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/06/600-x-400-Download-f-dalgic-iStock-Thinkstock-481014627.jpg" alt="Download screen on a mobile phone." %} 

The answers to these questions aren’t abundantly clear to even seasoned web analysts. But here’s the good news: If your site uses DAP, we’ve done the hard work, and our code records file downloads on your web pages by default! That said, sometimes people come to us and say “I KNOW my PDF file has been viewed a lot, but the analytics don’t say that.”

_(We’ll use PDF as the example from now on, but everything said applies to all file extensions like .doc, .xls, etc.)_

One reason might be that you’re sharing links [directly to your PDF](https://twitter.com/algoritmic/status/740180482005045249) through your communications channels, social media, email, or promotional partners. If that is the case, the direct link that you’re sharing is exactly where the problem lies. **Analytics tools can only record data for file downloads if a link to the file is clicked on a web page.**


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/06/250-x-205-view-page-soure.jpg" %}Why? Because a URL that opens a PDF document in your browser doesn’t have html behind it, and the DAP code (or any analytics tool’s code) exists only in the html. Web pages allow you to right click and choose an option to view the html page source code (give it a try!).

Right-clicking on a web page allows you to view the html page source code. However, you can’t do this with a PDF document. Try it yourself with [this sample PDF](https://www.irs.gov/pub/irs-pdf/f1040.pdf).

You can’t actually place analytics tracking code behind a PDF document, so the analytics tool has no way of knowing when someone views the PDF from a direct URL. The code on a web page watches for a link click to a specified file, and records that as a “download.”

There are two possible solutions to obtain the data tracking the total number of times your PDF document has been viewed.

The first is to access the server log files, which maintains a list of all activities your server has performed. This includes the total number of times your online PDF document has been accessed (both by direct URL or by link click on a web page). Beware, you may have to jump through some hoops to obtain access to the log files if you don’t already have it.

The second option, and perhaps the more simple option, is to [share the web page URL](http://www.metmuseum.org/art/metpublications/American_Stories_Paintings_of_Everyday_Life_1765_1915?utm_source=Twitter&utm_medium=tweet&utm_content=20160605&utm_campaign=metpublications) with a link to the PDF on it. You can implement a web analytics solution, such as DAP, on that web page. Google Analytics can then track the number of times users access your PDF from that web page based on link clicks.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/06/600-x-360-pdf-downloads-post.jpg" alt="Screen capture of Google Analytics showing metrics for 4 file types." %}

Since Google Analytics will only track PDF downloads from the web page, the numbers will differ from those in your server logs. Remember, server logs will track access to your PDF from both a link on one of your web pages and direct links from external sources or channels.

For more information about how DAP can help you track PDF downloads or downloads of other extensions, [please email DAP](mailto:dap@support.WHATEVER).