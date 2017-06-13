---


date: 2014-11-04 10:00:48 -0400
title: 'A Picture Is Worth a Thousand Tokens\: Part II'
summary: 'In the first part of A Picture Is Worth a Thousand Tokens, I explained why we built a social media-driven image search engine, and specifically how we used Elasticsearch to build its first iteration. In this week&rsquo;s post, I&rsquo;ll take a deep dive into how we worked to improve relevancy, recall, and the searcher&rsquo;s experience'
authors: [loren-siebert]
categories:
  - Content
  - Our Work
  - Social Media
tags:
  - Instagram
  - open government
  - USAgov
---

In the first part of [_A Picture Is Worth a Thousand Tokens_](https://www.WHATEVER/2014/10/28/a-picture-is-worth-a-thousand-tokens/ "A Picture Is Worth a Thousand Tokens"), I explained why we built a social media-driven image search engine, and specifically how we used Elasticsearch to build its first iteration. In this week’s post, I’ll take a deep dive into how we worked to improve relevancy, recall, and the searcher’s experience as a whole.

## Redefine Recency

To solve the scoring problem on older photos for archival photostreams, we decided that after some amount of time, say six weeks, we no longer wanted to keep decaying the relevancy on photos. To put that into effect, we modified the functions in the function score like this:

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-Part-2-Redefine-Recency-code.jpg" alt="600-x-186-tokens-Part-2-Redefine-Recency-code" %}


Now we only apply the Gaussian decay for photos taken in the last six weeks or so. Anything older than that gets a constant decay or negative boost equal to what it would be if the photo were about six weeks old. So rather than having the decay factor continue on down to zero, we stop it at around 0.12. For all those Civil War photos in the Library of Congress’ photostream, the date ends up being factored out of the relevancy equation and they are judged solely on their similarity score and their popularity.

## Recognize Proximity

To rank &#8220;County event in Jefferson Memorial&#8221; higher than &#8220;Memorial event in Jefferson County&#8221; on a search for _jefferson memorial_, the simplest way to handle it was to use a [match_phrase query](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-match-query.html#_phrase) to make the proximity of the terms a nice-to-have signal that could be factored into the overall score. The updated boolean clause matches on the phrase like this:

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-Part-2-Recognize-Proximity-code.jpg" alt="600-x-186-tokens-Part-2-Recognize-Proximity-code" %}


## Account for Misspellings

We already knew from prior projects that we’d get a lot of misspelled search terms, but we put off implementing spelling suggestions and overrides until we’d rolled out our minimum viable product in our first iteration.

Misspelled search terms can be handled in different ways depending on your corpus and your tolerance for false positives. This shows one way of thinking about it:

A visitor searches for _jeferson memorial_ (sic).

Perform search with misspelled term.

Are there any results at all for the misspelled _jeferson memorial_?

> Show them.
  
> Can we suggest a similar query that yields **more** results from our indexes (such as _jefferson memorial_)?
  
> Surface suggestion above results: &#8220;Did you mean _jefferson memorial_?&#8221;

Can we find a similar query that would yield **any** results?

> Perform search with that new overridden corrected term.
  
> Surface override above results: &#8220;We&#8217;re showing results for _jefferson memorial_.&#8221;

The problem with suggesting a &#8220;better&#8221; search term than what the visitor typed is that it&#8217;s easy to get false positives that vary from hilarious to embarrassing:

  * You searched on _president obama_. Did you mean _obama precedent_?
  * You searched on _correspondents dinner_. Did you mean _correspondence dinner_?
  * You searched on _civil rights_. Did you mean _civil right_?
  * You searched on _better america_. Did you mean _bitter america_?

OK, that last one didn’t really happen, but it could have, so we put that particular problem on the back shelf and instead focused on handling cases where the visitor’s search as typed didn&#8217;t return any results from our indexes but a slight variation on the query did. To do this, we introduced a new field to the indexes called &#8220;bigram&#8221; based on a [shingle token filter](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/analysis-shingle-tokenfilter.html#analysis-shingle-tokenfilter) we called &#8220;bigram_filter.&#8221;

The Elasticsearch settings got modified like this:

<pre>{
  "filter": {
    "bigram_filter": {
      "type": "shingle"
    },
    ….
  }
}</pre>

The properties in the Flickr and Instagram index mappings got modified as well.

Flickr:

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-Part-2-flickr-code.jpg" alt="600-x-186-tokens-Part-2-flickr-code" %}


Instagram:

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-Part-2-instagram-code.jpg" alt="600-x-186-tokens-Part-2-instagram-code" %}


This populates the bigram field for each index with whatever natural language fields it might have. For Instagram, it&#8217;s just the caption field, but Flickr has title and description so these are essentially appended together as they are copied into the bigram field. In both cases, they are analyzed with the shingle filter which creates bigrams out of the text. The clause of the query that generates the suggestion looks like this:

<pre>{
  "suggest": {
    "text": "jeferson memorial",
    "suggestion": {
      "phrase": {
        "analyzer": "bigram_analyzer",
        "field": "bigram",
        "size": 1,
        "direct_generator": [
          {
            "field": "bigram",
            "prefix_len": 1
          }
        ],
        "highlight": {
          "pre_tag": "<strong>",
          "post_tag": "<\/strong>"
        }
      }
    }
  }
}</pre>


<p>
  We only care about the top suggestion, and we&#8217;re willing to take the small performance penalty of using just the first letter of the search term as the starting point for the suggestion rather than the default two-character prefix.
</p>


<p>
  Here&#8217;s an example of how bigrams really help generate relevant multi-word suggestions.
</p>


<p>
  An <a href="http://search.usa.gov/search/images?affiliate=usagov&query=correspondence">image search on USA.gov for <em>correspondence</em></a> generates lots of results. Misspell it and <a href="http://search.usa.gov/search/images?utf8=%E2%9C%93&affiliate=usagov&query=correspondense">search on <em>correspondense</em></a> and it works as you might expect, showing results for <em>correspondence</em>.
</p>


<p>
  But now when you <a href="http://search.usa.gov/search/images?utf8=%E2%9C%93&affiliate=usagov&query=correspondense+dinner">search on <em>correspondense dinner</em></a>, you get results for <em>correspondents dinner</em>. It correctly recommends <em>correspondents dinner</em> even though <em>correspondence</em> has a higher term frequency than <em>correspondents</em> does.
</p>


<p>
  Bigrams (word pairs) let us generate phrase suggestions rather than term suggestions by giving the suggester some collocation information. This increases the likelihood of a good suggestion for a multi-word search query when there are multiple possibilities for each individual word in the query.
</p>


<h2>
  Group Photos into Albums
</h2>


<p>
  Most of the near-duplicate photo problems came from Flickr profiles. Flickr has the notion of an album, so we thought we could take advantage of this and save ourselves a lot of work building a classifier. Even if retrieving a photo&#8217;s albums (they can belong to many) from the Flickr API had been straightforward, it would still not have helped as some albums contain thousands of very different photos. Some of the Library of Congress albums on Flickr have over 10,000 photos, all with very different titles and descriptions.
</p>


<p>
  As we were already using Elasticsearch to do everything else, we wondered if it could also help us group photos into albums and then return just the most relevant photo from each album in the search results. The answer turned out to be &#8220;yes&#8221; on both fronts by using the <a href="http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html">more_like_this query</a> as a starting point for classification and the <a href="http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-aggregations-metrics-top-hits-aggregation.html#_options">top_hits aggregation</a> to pluck the best photos from each album.
</p>


<p>
  First we added an unanalyzed &#8220;album&#8221; field to the mappings on each index:
</p>


<pre>{
  "album": {
    "type": "string",
    "index": "not_analyzed"
  }
}</pre>


<p>
  Then we established some criteria to describe when two photos should be considered part of the same album:
</p>


<ul>
  <li>
    Same index (Flickr/Instagram)
  </li>
  
  
  <li>
    Same profile/username
  </li>
  
  
  <li>
    Taken on the same day
  </li>
  
  
  <li>
    Very similar tags and natural language fields (i.e., title, description, and caption)
  </li>
  
</ul>


<p>
  For a given Flickr photo with ID #12345, this query finds other Flickr photos from the same Flickr user profile &#8220;flickr_user_1@n02&#8221; also taken on April 23rd, 2012 that could potentially be grouped into the same album:
</p>


<p>
  <a href="https://gist.github.com/loren/cbc7e95ed9d015e70e4a">
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/10/600-x-186-tokens-Part-2-More-Like-This-code.jpg" alt="600-x-186-tokens-Part-2-More-Like-This-code" %}</a>
</p>


<p>
  The filter part of this query is straightforward, as it&#8217;s just enforcing two of the criteria we established for classifying photos. The more_like_this (MLT) part is actually broken down into multiple pieces, each with its own parameters, and wrapped up in a boolean clause. For all of the MLT queries, we set the minimum term frequency to 1 as a given term may only show up once in any particular field. The max_query_terms parameter is raised up really high to 500 terms, as sometimes a field can have that many terms in it and we want to take them all into account. From there, we just used some trial and error to see what percent_terms_to_match threshold to use for each field.
</p>


<p>
  The aggregation on the raw document scores came about after looking at the distribution of relevancy scores from the MLT query. Often, some group of, say, 100 photos would be pretty similar to a given photo, but the distribution of scores would be clumped around a few scores. Perhaps 60 photos would have an identical score of 4.5 and another 20 would have the same score of 4.4, and next group down would have a few clumped much lower at 0.6 and then the remainder would have different but all very low scores. The photos that ended up with the same scores to each other tended to have identical metadata. Usually the first two buckets from the aggregations would have very similar scores, so we assigned all of those photos to the same Elasticsearch album.
</p>


<p>
  Now that we had some notion of an album, we needed to pick the most relevant photo from each album and then sort all of those top picks by their relevancy scores to generate the actual search results. And don&#8217;t forget, we could be searching across hundreds of thousands of albums spanning hundreds of Flickr and Instagram profiles, and we still need to take each photo&#8217;s dynamic recency and popularity into account and then blend the results from both Flickr and Instagram indexes. And ideally, all this should happen within a few dozen milliseconds. It seems like an awfully tall order but the top_hits query made it pretty simple. The filtered query part of our request remained the same. We just added a nested aggregation to bucket by album and then pick the top hit from each album:
</p>


<pre>{
  "aggs": {
    "album_agg": {
      "terms": {
        "field": "album",
        "order": {
          "top_score": "desc"
        }
      },
      "aggs": {
        "top_image_hits": {
          "top_hits": {
            "size": 1
          }
        },
        "top_score": {
          "max": {
            "script": "_doc.score"
          }
        }
      }
    }
  }
}
</pre>


<p>
  We changed the type of query to the more <a href="http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-request-search-type.html#count">efficient search_count</a>, as we no longer needed &#8220;hits&#8221;. We are only looking at the aggregation buckets now.
</p>


<blockquote>
  <p>
    GET http://localhost:9200/development-asis-flickr_photos,development-asis-instagram_photos/_search?search_type=count&size=0
  </p>
</blockquote>


<p>
  Like any fuzzy matching solution, this album classification strategy is practically guaranteed to both under-classify photos that should be in the same album as well as over-classify photos that should be kept separate. But we were pretty confident that the search experience had improved, and were impressed with how easy Elasticsearch made it to pull a solution together.
</p>


<p>
  One downside is that the aggregation query is more CPU and memory intensive than the more typical &#8220;hits&#8221; query we had before, but we still get results in well under 100ms and we haven&#8217;t done anything to optimize it yet. The other problem we created with these aggregated results centered around pagination. If you request 10 results from the API, the 10 photos you get may each come from a different album, and each album may have thousands of photos. So the 10th photo might actually have been the 10,000th &#8220;hit&#8221;. And while it&#8217;s easy for Elasticsearch to tell you how many total hits were found, currently there&#8217;s no cheap way of knowing how many potential buckets you&#8217;ll have in an aggregation unless you go and compute them all, and that can lead to both <a href="http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/aggregations-and-analysis.html#_high_cardinality_memory_implications">memory problems</a> and <a href="http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/pagination.html">wasted CPU</a>.
</p>


<h2>
  Managing Growth
</h2>


<p> Although Elasticsearch defaults to five <a href="http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/glossary.html#glossary-shard">shards</a> per index, we put each image index in just one shard. As we are relying so heavily on relevance across potentially small populations of photos, we wanted the results to be as accurate as possible (see <a href="http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/relevance-is-broken.html#relevance-is-broken">Elasticsearch’s Relevance Is Broken!</a>).
</p>


<p>
  With just a million photos in our initial index this is not a problem, but a billion photos will require the sort of horizontal scaling that Elasticsearch is known for. Changing the number of shards will require a full reindex. We also update our synonyms from time to time, and that requires reindexing, too. To accommodate this without any downtime, we use index aliases. We spin up a new index in the background, populate it with <a href="https://github.com/elasticsearch/stream2es">stream2es</a>, and just adjust the alias on the running system in real-time. As the number of shards grows, we can experiment with routing the indexing and the queries to hit the same shards.
</p>


<h2>
  Why I Wrote This
</h2>


<p>
  Many Elasticsearch articles involve closed proprietary systems that cannot be fully shared with the rest of the world. With <a href="https://github.com/GSA/asis">ASIS</a>, we&#8217;ve taken a different approach and published the entire codebase along with this explanation of how we went about building it and the decisions (good and bad) we made along the way. This stemmed from our commitment to transparency and <a href="http://www.whitehouse.gov/open">open government</a>, and we&#8217;d also like others to be able to <a href="https://github.com/GSA/asis/fork">fork the ASIS codebase</a> and either help improve it or perhaps just use it to build their own image search engine.
</p>