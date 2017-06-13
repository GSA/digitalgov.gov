---


date: 2015-08-24 2:07:31 -0400
title: 'The Content Corner\: Modular Design and Structured Content'
summary: 'Several months ago I discussed the concept of a world without Web pages and the importance of structured content and thinking about content, not pages. This week, I&rsquo;m taking that discussion further by discussing the importance of modularity in Web design and how that complements our efforts to create more structured and reusable data. Break'
authors: [tymanuel]
categories:
  - Content
  - Design
tags:
  - Administrative Office of the United States Courts
  - content models
  - Mobile UX Guideline 1
  - structured content
  - The Content Corner
---

Several months ago I discussed the concept of a [world without Web pages](https://www.WHATEVER/2015/03/16/the-content-corner-a-world-without-web-pages/) and the importance of structured content and thinking about content, not pages. This week, I’m taking that discussion further by discussing the importance of modularity in Web design and how that complements our efforts to create more structured and reusable data.

## Break It Down

One of the critical aspects of our current efforts in structured data and adaptive content is the reductionary process. By taking a piece of content and breaking it down to what can be called a molecular level, we can make these individual pieces [more flexible and hence more re-usable](https://www.WHATEVER/2013/07/29/how-to-create-open-structured-content/).

The end goal is to create once and publish everywhere (COPE) and anywhere by pulling this structured content as needed to deliver information to a user.

This same concept is now becoming more and more popular throughout all phases of Web development, from data to content to design. The idea of modular Web design and the process of breaking down the elements of your design is gaining broader acceptance throughout the Web design community. This includes a review of all style and design concepts used within the site—not exactly like a [content style guide](https://www.WHATEVER/2015/06/08/the-content-corner-creating-a-content-style-guide/), but similar.

The creation of a design style guide (or [pattern library](https://www.futurelearn.com/pattern-library)) gathers all of the CSS styles, including colors and typography. However, in many instances it captures even more, such as in [Future Learn’s example](https://about.futurelearn.com/blog/pattern-library/). After failing in their initial efforts at building a style guide for their site, Future Learn&#8217;s design team embraced the concept of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) to better catalog all of the elements of their site.

## Better Designing Through Chemistry 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-450-atomic-design-by-Brad-Frost-CC-BY-4-0.jpg" alt="Modular design graphic." %} 

[Brad Frost](http://bradfrost.com/) has been credited with taking various concepts for modular or molecular design and forming them into a repeatable framework that others are able to easily leverage for their own sites and designs. His inspiration was chemistry and the concept of molecular bonds. He transferred the concept of molecular structures into an understandable method of deconstructing Web design into key components:

<li style="font-weight: 400">
  Atoms
</li>
<li style="font-weight: 400">
  Molecules
</li>
<li style="font-weight: 400">
  Organisms
</li>
<li style="font-weight: 400">
  Templates
</li>
<li style="font-weight: 400">
  Pages.
</li>

**Atoms** would make up the most basic pieces of your design such as colors and typography, items that can&#8217;t be broken down further, much like actual atoms.

The analogy continues as atoms are bonded together to form **Molecules**, such as a particular color and font combining to create the heading molecules or a navigation element. These can also be more complex, such as a form field and a button combined to create a search box.

The molecules then can be used to create **Organisms** that make up more modular components of a site, such as the header that includes text and color atoms, and headings and logos and the search box.

**Templates** break the analogy of chemistry, but were important to help show potential clients or other stakeholders something that looks more recognizable as a Web page.

And **Pages** are the final product as representations of how all the pieces are combined to create a specific instance of the homepage or an article.

While I dislike the concrete term page to describe what the final result is, I understand its usage from a service provider-to-client interaction standpoint. Again, to me, pages is too limiting and restrictive a concept as I see modular design and adaptive content. To me, you simply have modules arranged in a wide variety of ways based on various criteria such as location, device, user data, etc. If it helps others understand to call that final result a “page,” so be it. In fact, Brad Frost actually shares some great perspectives on how we all need to move beyond the &#8220;page&#8221; as a concept in his upcoming book.

Regardless of what the final product is called, atomic design creates a greater appreciation for how individual elements are arranged and their interactions or dependencies. This appreciation also leads to a more reusable design that eliminates redundant elements and reduces unintended variations (such as headings that are just a few shades different in color). And, as with structured content, some of the same challenges arise when developing a modular design guide or pattern library. Some of the biggest challenges are related to semantics and [ontology and arriving at a common language](http://www.slideshare.net/AbbyCovert/lessons-from-an-ontology-nerd) that will be used by all parties involved in the design.

## Speaking the Same Language

As opposed to structured content, we don’t generally assign metadata to elements of a design library. Using the principles of atomic design, we can break apart the disparate elements and [assign them categories or their places within the atomic structure](http://demo.patternlab.io/), such as an atom or an organism, but this does little to inform us about the actual function of a particular unit. We need to provide each element or module a descriptive name, the only real metadata that it will have.

As opposed to working within a [content model](https://www.WHATEVER/2014/05/05/government-open-and-structured-content-models-are-here/) for example, where the “title” field will more closely be derived from the content itself, room for significant variance exists when naming design elements, especially at the atomic or molecular level. Just as with [18F&#8217;s efforts to develop a style guide](https://www.WHATEVER/2015/08/03/18fs-style-guide-for-open-source-project-documentation/) for its GitHub efforts in order to foster better understanding and exchange, establishing an accepted ontology is key for any modular design effort.

Everyone on the team should be regularly discussing naming conventions for site elements (and actually everyone on the team should be sharing all kinds of information regularly, [it&#8217;s not as hard as it may seem](https://www.WHATEVER/2013/11/04/sharing-information-across-and-within-organizations-shouldnt-be-challenging/)). For example, do you all call the item on your homepage a rotator, slider, or carousel? Before developing a structure and inventory, you need to establish clear names for items that resonate with everyone and don’t change.

While any pattern library or style guide is always a living document, changing the names of key modules can have a serious impact on how reusable and extensible the design can be. Consider how frustrating it would be for developers to address frequent significant changes to an agency’s API that they are trying to use to provide additional content for their site. If I am programming a call to a “title” field, then that field needs to always be called that and it should always be something reasonably like a title.

Be aware of the impact assigning a name to an element will have. Be sure to regularly have discussions with the team about whether an item should have a functional name, a descriptive name and how it aligns with other elements and previously assigned names. This type of discussion should occur regularly and openly; some use chat systems such as [Slack](https://www.WHATEVER/2015/07/30/picking-up-the-slack-for-team-communication/) to help facilitate this ongoing dialogue. The key is that it takes place and solid agreement is arrived at in a natural and organic method in order to ensure future flexibility as much as possible. That is the overarching goal of modular design, after all.

## Modularity=Future Proof

From the work of [NASA and their Orion craft](http://www.nasa.gov/orion) that has been designed for maximum flexibility to [our efforts to create structured, device-agnostic Web content](http://gsa.github.io/Open-And-Structured-Content-Models/), the benefits of modularity are becoming more and more important in a world where the future always seems to arrive ahead of schedule.

Modular design allows for quick changes with minimal disruption. The header or logo needs to be changed? They are only one block of a larger framework and can easily be swapped in and out. It also allows for the fuller realization of our world without Web pages. We now have blocks of content that will display within specific design modules, depending on the user or platform or device. The content and appearance of the site can be altered to facilitate (one hopes) changes or requirements we can’t even envision yet. [A quote from the inventor of the World Wide Web, Tim Berners-Lee](http://www.w3.org/blog/2008/01/modularity/) (from 2008 no less), seems to sum it up nicely: “So we should always be looking to make a clean system with an interface ready to be used by a system which hasn&#8217;t yet been invented. Messy interfaces introduce complexity, which we may later regret.”

Modular design, from front-end to back-end, helps reduce the messy interfaces and reacts faster to all those things that haven’t been invented yet.

_You’ve just finished reading the latest article from our Monday column, [The Content Corner](https://www.WHATEVER/tag/the-content-corner/). This column focuses on helping solve the main content issues facing federal digital professionals, including producing enough content and making that content engaging._