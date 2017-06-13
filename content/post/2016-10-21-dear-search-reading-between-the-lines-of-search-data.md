---


date: 2016-10-21 11:00:34 -0400
title: 'Dear Search\: Reading Between the Lines of Search Data'
summary: 'Welcome to the first Dear Search article, an occasional series where the DigitalGov Search team addresses common search questions. Dear Search, Right now, I am building up user research services that can be offered to product owners on a regular or as-needed basis. So, being able to look at search trends and offer advice to'
authors: [dmccleskey]
categories:
  - Metrics
  - Our Work
  - UX
tags:
  - analytics
  - DigitalGov Search
  - user experience
  - UX
---

> Welcome to the first _Dear Search_ article, an occasional series where the DigitalGov Search team addresses common search questions.

Dear Search,

Right now, I am building up user research services that can be offered to product owners on a regular or as-needed basis. So, being able to look at search trends and offer advice to teams seems like a good start.

When you are trying to understand user behavior based on search data, how do you typically go about it? Do you look for terms, find trends, and then talk to the teams involved in those words and see if the content matches the search terms?

Or do you look at it from a higher level and see if the terms fit into a content strategy?

Is there more to search data than just the terms people search for – does it matter which page people are on when they search? Or can you tell how many times a person is searching to see if they like / don’t like the results?

And finally, do you have a formal method of evaluating the search experience that you can share?

Best,
  
UX Vexed 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-400-Search-bar-on-virtual-screen-Gajus-iStock-Thinkstock-178761722.jpg" alt="Search bar on virtual screen." %} 

Dear Vexed,

There is a natural progression in thinking about search trends and user experience as they fit within the overall content strategy of a website.

  1. What terms are people searching for?
  2. What are they clicking on after they run those searches?
  3. Why am I seeing a click-through rate over 100% on some of these searches?
  4. Wait, where were these people when they ran these searches?
  5. Wow, there are so many ways people are searching for the same kind of thing using different words, how can I look at this more holistically?

And a question that can branch off of any of these stages is _where_ to make improvements, whether any updates are needed to the search configuration, the content on the site, the structure of the site, or all of these working together.

There is a line of thinking that says if a site is designed optimally, then <a href="https://books.google.com/books?id=LzgNHuKKGJIC&pg=PA41&lpg=PA41&dq=site+design+%22don%27t+need+search%22&source=bl&ots=sAd_zUGwQD&sig=XyGaXabkZtTT8cy_Kdw1R3sirtQ&hl=en&sa=X&ved=0ahUKEwjY58qz_u_KAhVFGh4KHfnuAYoQ6AEIMDAB#v=onepage&q=site%20design%20%22don't%20need%20search%22&f=false" target="_blank">search is not necessary</a>. However, usability research has shown that <a href="http://chil.rice.edu/research/pdf/KatzByrne03.pdf" target="_blank">about half of people start with search</a>, and a good number of the people who start out browsing resort to search if their sensemaking process doesn’t jive with the site’s architecture. Besides, providing multiple paths of discovery has been a <a href="https://en.wikipedia.org/wiki/Library_catalog" target="_blank">core tenet of information science for over 125 years</a>.

<a href="http://search.WHATEVER" target="_blank">DigitalGov Search</a>, like any search tool worth its salt, provides robust search analytics. We give views into to the top <a href="http://search.WHATEVER/manual/queries.html" target="_blank">queries</a> your site gets and the <a href="http://search.WHATEVER/manual/clicks.html" target="_blank">top pages clicked on</a> out of your results pages. We also provide click-through rates for all queries: for all the times a query was run, how many clicks did that search results page get? You can see this for the top queries, or you can search for a particular term and see all the queries that contain that term.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/09/Queries\_-\_USA_gov-600w.png" alt="Screenshot of DigitalGov Search report on the top queries performed on USA.gov" %}

A really low click-through rate, or one well above 100%, is a sign that some sort of change would be helpful to searchers, but what that change is will depend on what they were looking for.

Does a particular page need to be boosted in the search results, or do you need to respond to queries on a jargony keyword? Then <a href="http://search.WHATEVER/manual/best-bets.html" target="_blank">setting up a Best Bet</a> in our Admin Center may be your answer. Or does the page need a plain language rewrite? A click-through rate over 100% means that searchers are, on average, clicking on the same results page a bunch of times, finding results that look promising, but then the content doesn’t end up serving their needs. This kind of bouncing is called <a href="https://www.nngroup.com/articles/pogo-sticking/" target="_blank">pogo sticking</a> &#8211; fun for kids, frustrating for searchers. It could indicate your site has a lot of similar-looking content on a given topic that could benefit from disambiguating the page titles.

The next important question is: Where were the searchers when they ran a particular query? I’ve seen cases where a query was run directly from a page that, from the look of the url, should have contained the information the person was looking for. In our <a href="http://search.WHATEVER/manual/referrers.html" target="_blank">referrers</a> report you can see the pages where the most queries were run on your site, and from there you can see all the queries that were run on any particular page. This is a gold mine for determining whether it’s your search configuration or your site content &#8211; or structure! &#8211; that needs tweaking.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/09/Referrers\_-\_USA_gov-600w.png" alt="The DigitalGov Search Top Referring URLs report, showing the pages on which people most frequently used the search box." %}

Because the relationships between all these data points can be complex, we gave a webinar in December 2015 on analytics. Michelle Chronister, the former user experience team lead for USAgov, described how that team looks at search data for trends that can guide USAgov’s content strategy. They group query terms into topics, and analyze at the topic level. A <a href="https://www.WHATEVER/2016/01/08/what-are-your-customers-searching-for/" target="_blank">webinar recap</a> is available that includes a video recording, slide deck, and data tracking/report template as well as an infographic of USAgov’s 2015 search traffic.

By looking at trends for individual queries, query topics, locations, and destinations, you’ve begun the journey towards using data to better inform your search configuration and content strategy. We also recommend looking at your website data from the <a href="https://www.WHATEVER/services/dap/" target="_blank">Digital Analytics Program</a> or any other analytics software you have running on your site.

If you have further questions, Vexed, you can always <a href="search@support.WHATEVER" target="_blank">email the DigitalGov Search team</a>.

Happy searching,
  
Dawn
  
Program Manager, DigitalGov Search