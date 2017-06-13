---


date: 2015-09-09 10:00:14 -0400
title: 'Caution\: Your Web Analytics Might Not Be Human'
summary: 'A Digital Analytics Program (DAP) user recently contacted me with an observation/problem\: The data he had from his website&rsquo;s independent Web-analytics account was much, much higher than the data he was receiving in the DAP user interface. Theoretically, both tools (in this case, two separate Google Analytics accounts), were trying to measure the same thing,'
authors: [tlowden]
categories:
  - Metrics
  - Monthly Theme
tags:
  - analytics
  - DAP
  - data
  - Digital Analytics Program
---

A <a href="https://www.WHATEVER/services/dap/" target="_blank">Digital Analytics Program (DAP)</a> user recently contacted me with an observation/problem: The data he had from his website’s independent Web-analytics account was much, much higher than the data he was receiving in the DAP user interface. Theoretically, both tools (in this case, two separate Google Analytics accounts), were trying to measure the same thing, and he couldn’t figure out why the numbers would be so different.

When I say different, I mean substantially so. Looking at the pageviews metric, the agency implementation was reporting almost 33% MORE views than DAP. Naturally, he hoped that the higher numbers were the “correct” ones, and somehow, the DAP numbers were incorrect.

The first thing I told him was that, unfortunately, the two numbers will never be <a href="http://fivethirtyeight.com/features/why-we-still-cant-agree-on-web-metrics/" target="_blank">exactly the same</a>. Tracking with two different tools or in this case, even two instances of the same tool, won’t end up reporting perfect matches (since the DAP code is custom-built). That said, a 33% delta was far too much; and after some thought, I figured out what the main problem was. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/09/600-x-400-Robot-Spider-with-clipping-path-Linda-Bucklin-iStock-Thinkstock-139863441.jpg" alt="Illustration of a robot spider" %} 

Spiders.

Ok, not just spiders, but spiders and robots—of the digital kind. <a href="http://en.wikipedia.org/wiki/Internet_bot" target="_blank">Internet bots</a> and <a href="http://en.wikipedia.org/wiki/Web_crawler" target="_blank">Web crawlers </a>(better known as spiders) <a href="https://www.incapsula.com/blog/bot-traffic-report-2014.html" target="_blank">can account for a lot of traffic</a> in the digital universe. These little digital “creatures” are software applications that run automated tasks on the Internet and record data much faster than a human. There are “good” and “bad” versions of them. For example, “good” spiders are often used to index data for updating content or for search engine use. Unfortunately, these automated tasks can be reported as visits to your pages.

In the summer of 2014, <a href="https://plus.google.com/+GoogleAnalytics/posts/2tJ79CkfnZk" target="_blank">Google announced</a> that it had added a new feature to Google Analytics that filters out bots and spiders based on a <a href="http://www.iab.net/1418/spiders" target="_blank">constantly updated list</a> that usually costs thousands of dollars to access. In autumn 2014, the DAP staff chose to implement the filter, which can be done in a click.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/09/328-x-74-Bot-Filter.jpg" alt="Screen capture of a bot filter" %}

So I asked the DAP user if this option was enabled in his independent implementation (by default in Google Analytics, it is NOT turned on), and he responded that it was not, but that he’d turn it on to give it a shot.

A few days later, we revisited the data. It turns out, bots and spiders represented a significant portion of the pageviews the independent account was recording, especially to the homepage. By using this feature, we effectively changed the delta from 33% to a single-digit percentage.

If your agency is participating in the DAP and also running independent analytics tools, we encourage you to examine your data and compare. If you are not participating, we recommend you check with your analytics provider to see if it has a similar feature, or ask how bot and spider traffic can be accounted for.

High numbers are great, but human numbers are better.