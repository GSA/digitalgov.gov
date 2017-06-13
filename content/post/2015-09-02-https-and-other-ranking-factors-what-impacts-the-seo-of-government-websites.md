---


date: 2015-09-02 10:00:43 -0400
title: 'HTTPS and Other Ranking Factors\: What Impacts the SEO of Government Websites?'
summary: 'Following the recent OMB memo that all publicly available federal websites and Web services must implement HTTPS by December 31, 2016, Web content managers across government are considering the SEO (search engine optimization) implications of the transition, among other details. In August 2014, Google confirmed that HTTPS is a ranking signal in their algorithm. But'
authors: [dmccleskey]
categories:
  - Content
  - Our Work
tags:
  - DigitalGov Search
  - HTTPS
  - Plain language
  - search engine optimization
  - SEO
---

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/09/600-x-418-search-magnifying-glass-sibgat-526855245.jpg" alt="An image of a magnifying glass over a computer screen" %}
 

Following the [recent OMB memo](https://https.cio.gov/) that all publicly available federal websites and Web services must [implement HTTPS](https://www.WHATEVER/2015/07/21/an-introduction-to-https-by-18f-and-digitalgov-university/) by December 31, 2016, Web content managers across government are considering the [SEO](http://search.WHATEVER/blog/seo-joe-pagano.html) (search engine optimization) implications of the transition, among other details.

In August 2014, Google confirmed that [HTTPS is a ranking signal in their algorithm](http://googlewebmastercentral.blogspot.com/2014/08/https-as-ranking-signal.html). But being a ranking signal and having an impact on findability are two different things. In the post, Google describes HTTPS as “a very lightweight signal—affecting fewer than 1% of global queries, and carrying less weight than other signals such as [high-quality content](https://support.google.com/webmasters/answer/6001093).” And, in October 2014, Bing found the idea of an HTTPS boost [almost laughable](https://www.seroundtable.com/bing-https-ranking-19243.html). SearchMetrics recently found an [increasing proportion of top-ranking sites use HTTPS](http://www.searchmetrics.com/wp-content/uploads/Ranking-Factors-2015-Whitepaper-US.pdf) [PDF, see page 10], but it’s still small and rankings are attributed primarily to brand strength.

While there are no inherent SEO risks to implementing HTTPS, it does count as an address change and so it [needs to be done right](http://searchengineland.com/google-starts-giving-ranking-boost-secure-httpsssl-sites-199446/), particularly:

  * Place **301 permanent redirects** from your HTTP site to your HTTPS site, and
  * Use **<link rel=&#8221;canonical&#8221;>** to flag your HTTPS URLs as the version of record.

And there is the added benefit of better information within analytics tracking tools, as HTTPS sites do not pass referrer data to HTTP sites.

So, if HTTPS doesn’t have much of an SEO impact, what does?

## Inbound Links—Yes!

Same as it ever was, [link building is important](https://moz.com/beginners-guide-to-seo/growing-popularity-and-links) to improve your agency website’s ranking and drive traffic to it. Government websites bear relatively higher [PageRanks](https://en.wikipedia.org/wiki/PageRank) due to high quality content and other factors, including the old stand-by, number of inbound links.

This is sometimes confused with .gov websites getting a boost, just because they are in the .gov top-level domain (TLD). I have dug, and dug, and dug, looking for evidence of this TLD boost, and the closest I could get to an answer was a [2008 interview with Google&#8217;s Matt Cutts](http://www.stephanspencer.com/matt-cutts-interview/) saying there is nothing in their algorithm that values links from sites with a .gov TLD more highly than links from other sites. My money’s on Matt Cutts’ version. Every major .gov site I tested had a PageRank of 8, and [USA.gov](https://www.usa.gov/) and [WhiteHouse.gov](https://www.whitehouse.gov/) enjoy a PageRank of 10. Meanwhile, [NYTimes.com](http://www.nytimes.com/), [FaceBook.com](https://www.facebook.com/), and [Yahoo.com](https://www.yahoo.com/) have PageRanks of 9, and [HuffingtonPost.com](http://www.huffingtonpost.com/) scores an 8, as do [BuzzFeed.com](http://www.buzzfeed.com/) and [BoingBoing.net](http://boingboing.net/).

And just in the past two weeks, two studies of 2015’s significant ranking factors were released, from [SearchMetrics](http://pages.searchmetrics.com/rs/656-KWJ-035/images/Ranking-Factors-2015-Whitepaper-US_FINAL.pdf) and [Moz](https://moz.com/search-ranking-factors/correlations). Moz stated their study found “little relationship with the type of top-level domain (.com, org, etc.) and rankings in Google.”

  * [Tip from SEOBook](http://www.seobook.com/archives/001792.shtml): Link building is a long, hard process, and requires tricks very similar to traditional marketing techniques—have good-quality, authoritative content, and get the word out in ways people will want to link to. For instance, people love lists of things—top 10 ways to XYZ, best resources for ABC, etc.

## # and 

## Tags—Yes!

Using 

# and 

## tags in your page text shows you are thinking about user experience and want your readers to be able to scan the page quickly to orient themselves and find what they’re looking for. While a similar look can be achieved with bold text and increased font size, a search engine spider isn’t able to interpret this decoration consistently. 

# and 

## tags are a clear signal to the spider what your page is about. Thinking of a Web page as a newspaper article, 

# indicates the headline, 

## the section heading, and so on, down to 

###### .</p> 

  * [Tip from Search Engine Journal](http://www.searchenginejournal.com/in-2014-how-important-is-an-h1-tag-for-seo/): While the impact of 
    # on rankings has diminished over time, it’s still an important ranking factor. It’s also an important signal to search engines—and visitors arriving at your site from search engines—about the page’s content.</li> 
    
      * [Tip from Greenlane](http://www.greenlaneseo.com/blog/2015/02/seo-101-seo-and-multiple-h1-tags/): Conventional wisdom was to have only one 
        # per page, but as long as they work in the context of the page, multiple 
        
        # tags can be used.</li> 
        
          * [Tip from WebAIM](http://webaim.org/techniques/semanticstructure/): HTML heading tags are important for 508 compliance, so screen readers and other assistive technologies—which largely ignore visual styling—can determine a page’s information structure.</ul> 
        
        ## <title>
          Tags—Yes!</h2> 
          
          <p>
            The <a href="https://www.WHATEVER/2014/03/28/plain-language-page-titles-more-important-than-ever/">
            
            <title>
              tag</a> we’re talking about here is located within the 
              
              <head>
                of the page and is important for user experience on a search results page. While it’s basically invisible to the reader, search engines will try to use this tag for the title they display in their search results. Web browsers will display the 
                
                <title>
                  as the browser window label or tab label, and many agencies have placed a general agency, division, or site section name here, aiming to best identify the open window/tab as belonging to them. However, if all a site’s 
                  
                  <title>
                    tags are identical, search engines won’t be able to use them, and so will look to other references to your page’s title to assemble something usable for their search results. The outcome of this <a href="https://blogs.bing.com/webmaster/2014/06/23/how-does-bing-choose-the-title-for-my-web-page/">page-title crowdsourcing</a> can be annoying at best, and inappropriate at worst. Your 
                    
                    <title>
                      tag will most likely match your 
                      
                      <h1>
                        tag.</p> 
                        
                        <ul>
                          <li>
                            <a href="http://searchengineland.com/advanced-seo-learning-experiments-using-googles-title-tag-changes-example-189850">Tip from Search Engine Land</a>: There’s no magic number, but around 55 characters or less is good. Use the <title>
                              tag to give each page a unique, meaningful, relatively brief title, with relevant keywords towards the beginning.</li> </ul> 
                              
                              <h2>
                                Meta Descriptions—Yes!
                              </h2>
                              
                              <p>
                                The <a href="https://moz.com/learn/seo/meta-description">meta description</a>, also located in the 
                                
                                <head>
                                  , is search-engines’ first stop when they are indexing your site. After all, it would be easier for them to pull your description than to assemble their own snippet. But if you don’t have this tag, or it doesn’t reflect the content of the page, it may be ignored. You may have heard that 
                                  
                                  <meta />
                                  tags are no longer useful in SEO, but it is only 
                                  <a href="https://moz.com/community/q/meta-keywords-should-we-use-them-or-not">meta keywords</a> that are either ignored by search engines, or taken as a spam signal after this tag was abused by Web marketers trying to game the system.</p> 
                                  
                                  <ul>
                                    <li>
                                      <a href="https://yoast.com/meta-descriptions/">Tip from Yoast</a>: Meta descriptions should be about 140 characters, like a tweet, and unique. Use active voice, relevant keywords, and include a call to action.
                                    </li>
                                  </ul>
                                  
                                  <h2>
                                    Quality Content—Yes!!!
                                  </h2>
                                  
                                  <p>
                                    Google has <a href="http://googlewebmastercentral.blogspot.com/2011/05/more-guidance-on-building-high-quality.html">emphasized for years</a> that the most important ranking factor is the quality of the content. I’m not sure I believe this, given the PageRanks of federal websites are the same as Boing Boing. However, providing quality services and information to the public is the central goal of all government websites, and raising the bar on both the substance and the communication style can only be a benefit. While writing plainly can be a great challenge, effective communication is important for conducting our country’s business, and <a href="http://www.plainlanguage.gov/plLaw/index.cfm">it’s the law</a>. The direct benefits for agencies and the public are only magnified by the indirect benefit of SEO, allowing search engines to better leverage the content of your site, and get people to your information more quickly.
                                  </p>
                                  
                                  <ul>
                                    <li>
                                      <a href="http://www.plainlanguage.gov/howto/guidelines/FederalPLGuidelines/index.cfm">Tip from PlainLanguage.gov</a>: Think about your audience, organize, write your document, write for the Web, and test.
                                    </li>
                                    <li>
                                      Tip from Copyblogger: <a href="http://scribecontent.com/downloads/How-to-Create-Compelling-Content.pdf">How to Create Compelling Content that Ranks Well in Search Engines</a>
                                    </li>
                                    <li>
                                      Tip from Killer Web Content: <a href="http://www.gerrymcgovern.com/first-chapter/28/books/killer-web-content">Do you have the killer instinct?</a>
                                    </li>
                                  </ul>