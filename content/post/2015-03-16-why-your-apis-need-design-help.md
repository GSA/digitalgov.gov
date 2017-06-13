---


date: 2015-03-16 10:00:28 -0400
title: 'Why Your APIs Need Design Help'
summary: ' Anything built should be built right. It doesn&amp;#8217;t matter if it&rsquo;s built of wood, carbon nanotubes or code. So it&rsquo;s encouraging that the practice of User-Centered Design&mdash;getting customer feedback at every stage of a project&mdash;is catching on with APIs'
authors: [jonathan-rubin]
categories:
  - API
  - Code
  - Monthly Theme
  - UX
tags:
  - API
  - API keys
  - CFPB
  - Consumer Financial Protection Bureau
  - FDA
  - GitHub
  - json
  - U.S. Food and Drug Administration
  - usability
  - user centered design
  - user experience
  - UX
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/02/600-x-258-This-is-the-openFDA-API-endpoint-for-adverse-drug-event-reports-since-2004.jpg" alt="This is the openFDA API endpoint for adverse drug event reports since 2004" %}

Anything built should be built right. It doesn&#8217;t matter if it’s built of wood, carbon nanotubes or code. So it’s encouraging that the practice of User-Centered Design—getting customer feedback at every stage of a project—is catching on with APIs as well.

When we think APIs, we mostly think of developers and not designers. But the experience of those who want to use your APIs isn’t just dependant of the strength and elegance of your API. The first thing they see, after all, isn’t your magnificent code but your documentation page. If people can’t quickly understand the value of your API, and can’t effortless try it out, they’ll bail. And then all your blood, sweat and tears go down the drain.

For the past two years, our [API Usability Evaluation program](http://18f.github.io/API-Usability-Testing/) has connected federal API teams with unbiased, no-holds barred feedback from expert developers. We&#8217;ve introduced dozens of gov teams to the concept of usability, of designing something that’s intuitive, transparent, credible and, ultimately, useful. Often, the feedback included some of the same design suggestions. We would consistently hear:

#### 1. Use JSON

Many government APIs still return API calls in XML. This is usually considered old school at best, or annoying or frustrating at worst. Go with the trends, and deliver what people expect. As one evaluator said, “If I’m not getting JSON, I’m turned off.”

#### 2. Communicate value immediately

Since we don’t always know what people are doing with our data, or what their backgrounds are, we need to assume they aren’t familiar with us, our data or our mission. The [Consumer Financial Protection Bureau’s API](http://cfpb.github.io/api/hmda/) puts it up front and center: Here’s who we are and what you can use this for. It’s also good to include success stories or use cases of people using your product. Bonus points: Link to things they’ve created!

#### 3. Allow easy access

If you require an API key, say so and why. Test it out and see if you’re providing a good experience, but no matter what make it easy and automated. Developers will give up and move on if key registration isn’t immediate.

#### 4. Do as developers do

Once again, use the tools and conventions that people are expecting and familiar with. Posting your API info in GitHub, according to one tester, “gives me confidence that you’re using the language of the developers.” Also, use RESTful APIs and allow bulk download of datasets.

#### 5. Offer sample code

Let people test drive the car before investing in it. Providing interactive documentation where they can test the code gives them that ability, and shows that you are confident in your API. A nice example of this is the [OpenFDA API](https://open.fda.gov/), and here’s a [usability case study](https://www.WHATEVER/2014/08/22/api-usability-case-study-openfda/) that goes into detail why we like this one so much.

#### 6. Pay attention to details

Finally, anything that seems off about your API will make people think it’s not reliable, or that it might not work. You want people to have confidence in your API, so they’ll feel it’s worth their time to dive in. So make sure all your links work, that there’s no spelling mistakes or bad paragraph breaks, and that it looks like you know what you’re doing.