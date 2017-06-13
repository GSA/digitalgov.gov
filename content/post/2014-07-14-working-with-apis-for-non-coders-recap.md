---


date: 2014-07-14 10:00:00 -0400
title: 'Working with APIs for Non-Coders Recap'
summary: 'In a recent event titled\: &amp;#8220;Intro to APIs\: Working with URLs, JSON, APIs, and Open Data&mdash;Without Writing Any Code,&amp;#8221; federal practitioners and supporters interested in open data attended an in-person workshop, led by Eric Mill, a key developer on GSA&amp;#8217;s 18f team. This event was especially targeted to non-developers and explored the basics of APIs,'
authors: [zeshan-khan]
categories:
  - API
tags:
  - 18F
  - API
  - Recaps
---

In a recent event titled: &#8220;Intro to APIs: Working with URLs, JSON, APIs, and Open Data—Without Writing Any Code,&#8221; federal practitioners and supporters interested in open data attended an in-person workshop, led by Eric Mill, a key developer on GSA&#8217;s 18f team. This event was especially targeted to non-developers and explored the basics of APIs, [using the Congress API](http://sunlightlabs.github.io/congress/), offered by the Sunlight Foundation, as an example. The purpose of the event was to showcase that anybody of any skill level can understand and use APIs without any coding knowledge! Below are some takeaways for those who weren’t able to attend the event.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/07/600-x-400-Sunlight-Foundation-Congress-API.jpg" alt="600 x 400 Sunlight Foundation Congress API" %}


## Understanding the anatomy of a URL

In one sense, APIs are just URLs that lead to data instead of a Web page. In order to explore an API, we need to understand the breakdown of a URL. As an example, take a look at the following URL.

<span style="color: #993366">https://</span><span style="color: #339966">www.flickr.com</span><span style="color: #3366ff">/search/</span><span style="color: #ff0000">?sort=relevance&text=ukraine</span>

<span style="color: #993366"><strong>https</strong></span> is the protocol or set of rules used in the communication between the browser and web server.

<span style="color: #339966"><strong>flickr.com</strong></span> is the domain name. Think of this as the “web address.”

<span style="color: #3366ff"><strong>/search/</strong></span> is a path – a folder in the root folder.

<span style="color: #ff0000"><strong>?sort=relevance&text=ukraine</strong></span> is information you are sending to the server.

## APIs aren&#8217;t complicated

As stated above, APIs are just URLs that lead you to data. There are many formats used to create an API, but JSON is most common these days. There are several reasons for this, including “cleaner” data, greater efficiency, and scalability. One way JSON accomplishes this is by using arrays. Arrays allow values to be compacted, or in other words, arrays are a way of holding data that would be difficult in a two dimensional grid.

You sometimes need an API key to access some APIs. It is usually a quick registration process to obtain one and there should be clear directions for how to do this. The documentation also includes a description and details on what data you can access through the API as well as other information useful to navigating around the API.

Lastly, by adding certain paths or values in your URL, you can narrow down the API to give you just the data fields you want to access.

The [URL below for the Congress API](https://congress.api.sunlightfoundation.com/votes?apikey=opendataday&fields=voted_at,chamber,result,required,question,breakdown.total&order=voted_at_&breakdown.total.Yea__gte=70&chamber=senate) has the same features as the Flickr URL mentioned above.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/07/600-x-52-congress-api-url-in-color.jpg" alt="An image of the very, very long color-coded URL to access the Congress API" %}

&nbsp;

Entering this URL into a browser then returns information specific to the request:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/07/425-x-620-Nomination-code-API.jpg" alt="425 x 620 Nomination code API" %}

## Simplify your tabular data by converting your JSON file into a CSV

You can use [this tool](http://konklone.io/json/) to convert your JSON files into CSV (simply copy and paste <span style="color: #222222">the JSON data into the text box</span>). The purpose of this is to make it easier for you to look at the data. CSV stands for Comma Separated Values and a CSV file stores your tabular data in plain-text that is easily viewed as a spreadsheet.

## Conclusion

There&#8217;s a lot you can do with APIs and you don&#8217;t have to be a developer or a coder to do so. [Check out this blog post](http://sunlightfoundation.com/blog/2014/04/03/i-learned-basic-json-in-the-morning-and-made-a-silly-twitter-bot-with-sunlights-api-in-the-afternoon/) where a non-developer used the Sunlight API to make a Twitter bot that automatically tweets out Happy Birthday to our Congressmen.

All it takes is a little courage and determination!

_Editor&#8217;s note: GSA will be hosting this session again in the future, so everyone will have a chance to take this class and others like it._