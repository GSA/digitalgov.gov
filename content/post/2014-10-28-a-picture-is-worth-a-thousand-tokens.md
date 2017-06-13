---


date: 2014-10-28 11:15:34 -0400
title: 'A Picture Is Worth a Thousand Tokens'
summary: 'Increasingly, we&amp;#8217;ve noticed that our agency customers are publishing their highest quality images on social media and within database-driven multimedia galleries on their websites. These sources are curated, contain metadata, and have both thumbnails and full-size images. That&amp;#8217;s a big improvement in quality over the images embedded within HTML pages on agencies&amp;#8217; websites. After some'
authors: [loren-siebert]
categories:
  - API
  - Our Work
  - Social Media
  - Video
tags:
  - DigitalGov Search
  - Instagram
---

Increasingly, we&#8217;ve noticed that our agency customers are publishing their highest quality images on social media and within database-driven multimedia galleries on their websites. These sources are curated, contain metadata, and have both thumbnails and full-size images. That&#8217;s a big improvement in quality over the images embedded within HTML pages on agencies&#8217; websites.

After some investigating, we decided we could leverage their Flickr and Instagram photos to build an image search engine that better met their needs. We gave it a plucky name and put it in production.

See the sample results page below that shows image results displayed on [DOI.gov for a search on _moon_](http://search.doi.gov/search/images?utf8=%E2%9C%93&affiliate=doi.gov&query=moon).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-658-DOIgov-search-moon.jpg" alt="DOI.gov DigitalGov Search on the word moon." %}

We also [open-sourced the entire codebase](https://github.com/GSA/oasis) behind this project.

This post is the first of [two in a series](https://www.WHATEVER/2014/11/04/a-picture-is-worth-a-thousand-tokens-part-ii/ "A Picture Is Worth a Thousand Tokens: Part II") where I take a technical deep dive into the details of how the image search engine works, and specifically how we used Elasticsearch to build it.

## Our Goal

Our initial goal was to provide a search interface across photos from the [Flickr API](https://www.flickr.com/services/api/) and [Instagram API](http://instagram.com/developer/) that blended these photos together into a single set of results. We wanted a relevancy framework that took into account the photos&#8217; popularity, recency, and of course text metadata like titles, descriptions, captions, and tags.

We wanted this system to be decoupled from our main codebase so it could evolve independently, and accessed 100% via API so that any client could access it. And finally, we wanted to make the entire codebase open so that others could see what we are doing and even help make improvements.

## Technology Stack

[Elasticsearch](http://www.elasticsearch.org/) is the foundation for both our [Jobs API](http://search.WHATEVER/developer/jobs.html) and our entire in-house analytics system, so it was an easy choice to use as the information retrieval backbone of our image search engine. To manage requests and serve up a versioned API, we&#8217;re using a pared-down Rails API called [Grape](http://intridea.github.io/grape/). To parallelize fetching and indexing Flickr and Instagram photos, we&#8217;re using [Sidekiq](http://sidekiq.org/).

## The Data

Flickr and Instagram both publish a lot of metadata about each photo in their APIs. Some of it overlaps, some of it is particular to each platform, and some of it is not particularly useful so we ignore it.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/482-x-176-Flickr-Instagram-metadata-table.jpg" alt="Flickr and Instagram both publish a lot of metadata about each photo in their APIs" %}

Both platforms have the notion of when a photo was taken, and of course they have the image itself along with some thumbnail. A set of tags can potentially be assigned to each photo, too.

Flickr uses an owner to associate images with profiles, while Instagram uses a username. Additionally, a Flickr photo can belong to one or more Flickr group profiles, so we augment the API data with that group information. Together, these fields allow us to filter our results to just the profiles the agency wants to show to searchers on its website.

Flickr captures the number of views for each photo, while Instagram captures the comments and the “likes.” This information drives a simple popularity field we use to help with relevancy.

And finally, title, description, and caption are natural language full-text fields that are matched up against the searcher&#8217;s query.

## First Iteration: Developing our MVP

To develop our [minimum viable product](http://theleanstartup.com/principles) (MVP), we created an index for Flickr photos and a separate index for Instagram photos. We could have created a single index called &#8220;photos&#8221; and separated Flickr and Instagram photos by types, but we kept them separate so they could have their own relevancy scores and they could be indexed and updated independently of each other. These are the initial mappings we used.

Flickr (click image to see full code block):

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-initial-flickr-code.jpg" alt="600-x-186-tokens-initial-flickr-code" %}


Instagram (click image to see full code block):

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-initial-instagram-code.jpg" alt="600-x-186-tokens-initial-instagram-code" %}


We used these settings across the indexes (click image to see full code block):

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-initial-settings-across-indexes-code.jpg" alt="600-x-186-tokens-initial-settings-across-indexes-code" %}


Looking at the mappings and the settings, you can see that we had to make a lot of decisions upfront about how fields would be treated when we indexed the documents (photo metadata). In theory, Elasticsearch is schema-less and we could have just taken whatever fields we got from the Instagram and Flickr APIs and sent them over the fence to Elasticsearch as JSON documents to be dynamically mapped. We had learned a few lessons from prior Elasticsearch and [Solr](http://lucene.apache.org/solr/) projects, however, so we had ideas on how the analysis chain should behave for the various fields.

For the full-text fields (title, description, caption), we use a [custom analyzer](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/analysis-custom-analyzer.html) we call &#8220;en\_analyzer&#8221;. This uses the custom &#8220;ignore\_chars&#8221; character filter to get rid of some different types of apostrophes, and then it hands the tokens off to the chain of filters. ASCII folding lets _resume_ match _resumé_. Lowercasing everything makes the search case insensitive. The stop filter yanks out words that contribute little to relevancy.

The minimal English stemmer does a pretty good job of threading the needle between over-stemming and under-stemming. We experimented with several of the English stemmers using the [Inquisitor plugin](https://github.com/polyfractal/elasticsearch-inquisitor), and decided we could get the closest to our desired behavior by starting with the minimal English stemmer and using our own curated synonym list to fill in the gaps. When we had used the more aggressive [Snowball stemmer](http://snowball.tartarus.org/) in the past, we found ourselves constantly overriding it with an updated protected words list.

To keep the JSON a little more manageable for this post, the settings above are only showing a subset of the synonyms and stopwords that we actually use. Have a look at the latest [code](https://github.com/GSA/asis) to see what we are currently using.

For the tags, we use a custom &#8220;tag_analyzer&#8221; to do the same lowercasing and ASCII folding as with the full-text fields, but we also strip out the whitespace. After looking through some sample Flickr and Instagram data, we noticed a lot of tags like _barackobama_ or _4thofjuly_ and we wanted to match on queries like _Barack Obama_ and _4th of July_.

To represent popularity, we initially didn&#8217;t know how to compare Instagram comments, Instagram likes, and Flickr views, so we started with something simple knowing that we could tune it once we knew more about our relevancy model. For Flickr, we just set the popularity as the number of views. For Instagram, we used the sum of the comments and the likes. We’re considering weighting them all differently, as it takes more effort to write a comment than to &#8220;like&#8221; something, and simply viewing a photo takes the least effort of all.

With all that in place, we looked up the Flickr profiles and Instagram usernames for a handful of [our agency customers](http://search.WHATEVER/customers.html) like the [Department of the Interior](http://www.doi.gov/index.cfm), [U.S. Army](http://www.army.mil/), and [USA.gov](http://www.usa.gov/) and started fetching and indexing their photos. This all happens pretty quickly with enough Sidekiq threads chugging away, even if you are just trying this out on your laptop.

## Initial Search Query

We had a few heuristics in mind as to how we wanted relevancy and precision to work for this data:

  * More recent photos are more relevant than older photos
  * Popularity can be a proxy for relevancy, so rank popular photos higher
  * All of the search terms have to be present in at least one of the full-text or tags fields

The initial query looked like this (click image to see full code block):

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-initial-search-query-code.jpg" alt="600-x-186-tokens-initial-search-query-code" %}


At a high level, this is a filtered query that uses a custom function score to impact the final score, and the query runs across both the Instagram and Flickr indexes. The filter part of the filtered query limits the search space to just the profiles we care about. The query part of the filtered query says that the search term should match at least the tags or one of the full-text fields. The function score takes the raw score from the filtered query and multiplies it by factors based on the popularity field and the taken_at field. Rather than use the raw popularity value to impact the score, we run it through the log2p() function. This takes the base-10 logarithm of the popularity so that a photo with a popularity of 1,000,000 is only boosted 2x more than a photo with a popularity of 1,000 instead of being boosted by 1,000X more. The log2p() function adds 2 to the raw popularity value before taking the logarithm, nicely accounting for the cases where a photo&#8217;s popularity is 0 or 1. To account for recency, we applied a Gaussian [decay function](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html#_decay_functions) to the taken_at date field, essentially making photos from one month ago half as relevant as photos posted today while not penalizing photos much from just a few days ago.

By playing around with this query a little bit using [Sense](http://www.elasticsearch.org/guide/en/marvel/current/#_sense), we could gain some confidence that the results were reasonable and blended across both the Flickr and Instagram indexes. We made the search interface available via an HTTP API that returned JSON, and then hooked up our first customer: ourselves! We make API calls to [ASIS](https://github.com/GSA/asis) and then transform the results into a nicely-tiled responsive search results page with image thumbnails. The API call that generated the query above would look something like this:

> http://oasis\_host/api/v1/image.json?flickr\_groups=flickr\_group\_profile\_1@n07&flickr\_users=flickr\_user\_profile_1
  
> @n02,flickr\_user\_profile\_2@n03&instagram\_profiles=instagram\_username\_1,
  
> instagram\_username\_2,instagram\_username\_3&query=4th+of+july

## First Impressions of our MVP

### Speed Improved

The first thing we noticed when we put this into production was the improvement in performance. Our Queries are now hitting our own Elasticsearch cluster and are running reliably in 20-30ms, while the former system that reached out to an external commercial index had taken 300-900ms. Speed is an important factor in searchers’ satisfaction with results, and the lower variance in response times has made our user experience more uniform and predictable.

### Garbage In, Garbage Out (GIGO) Exists

As we worked around some hiccups with the Flickr and Instagram APIs, we started to see some issues with the agency-generated content that affected both recall and relevancy. Some profile owners attach dozens of very broad tags like _government_, _usa_, and _president_ to hundreds or thousands of photos.

Recent photos that happened to be popular on Flickr or Instagram would get boosted to the top of the list despite having a relatively low similarity (based on Lucene’s [Practical Scoring Function](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/practical-scoring-function.html)) score from matching on a very common term in our corpus. A similar problem would occur when profile owners would append the same hundred words of boilerplate text (e.g., source attribution, copyright) to their photo descriptions.

A much bigger problem surfaced around photo albums. Sometimes photographers would take dozens of photographs of the same event, assign very similar metadata to all of them, and upload them to their social media profile. This screenshot of a search results page with 19 nearly identical pictures of Michelle Obama in a yellow sundress sums up the problem nicely:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-614-USAgov-search-Barack-Obama.jpg" alt="600-x-614-USAgov-search-Barack-Obama" %}

All of these similar photos are relevant, but we&#8217;d rather just show a few of them for an [image search on _barack obama_ on USA.gov](http://search.usa.gov/search/images?affiliate=usagov&query=barack+obama) and perhaps let the visitor click through to see the rest of them.

### Relevance Needs to Be Tweaked

**Proximity**: When visitors searched on multi-word terms like _jefferson memorial_, we weren&#8217;t treating &#8220;Memorial event in Jefferson County&#8221; any differently than &#8220;County event in Jefferson Memorial.&#8221; We needed to take into account where the tokens appeared in the document in relation to each other.

**Date**: We initially focused on surfacing the most relevant pictures on the first page of the search results, but as we dug into page two and beyond, we saw some profiles had photos that were all scored 0.0. The culprit was the Gaussian decay function we were applying to decrease relevancy on older photos. The first batch of agency photos all happened to cover current affairs, like White House events and State Department conferences. But some of our other agencies use social media mainly for archival photos. The [Library of Congress Flickr photostream](https://www.flickr.com/photos/library_of_congress/) contains some photos that were taken 150 _years_ ago, and the Gaussian decay function decayed their relevancy right down to zero.

This clearly isn’t what we wanted so we focused on improving our relevance algorithm in our second iteration, which I’ll tell you more about in [next week’s blog post](https://www.WHATEVER/2014/11/04/a-picture-is-worth-a-thousand-tokens-part-ii/ "A Picture Is Worth a Thousand Tokens: Part II").

## About Us

[DigitalGov Search](http://search.WHATEVER/) provides fast, relevant search results to 1,500 government websites. We use a combination of commercial and our own indexes built on top of open government data to give millions of visitors a good search experience each day.