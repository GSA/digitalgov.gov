---


date: 2015-04-16 10:00:49 -0400
title: 'NASA APIs\: Opening Data Assets'
summary: 'Data is one of the most important assets at NASA. We have data on comets, measurements of Mars, and real-time imagery of Earth. But what good is data if you can&rsquo;t access it? Not good at all! We&rsquo;re in the process of building a site (at api.nasa.gov) to catalog NASA APIs that structure access to'
authors: [dan-hammer]
categories:
  - API
tags:
  - API
  - data
  - GitHub
  - NASA
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/04/600-x-502-Mystic-Mountain-Dust-Pillars\_Image-Credit-Hubble-Legacy-Archive-NASA-ESA\_Processing-and-Copyright-David-Forteza.jpg" alt="Image Credit: Hubble Legacy Archive, NASA, ESA; Processing & Copyright: David Forteza" %} 

Data is one of the most important assets at NASA. We have data on comets, measurements of Mars, and real-time imagery of Earth. But what good is data if you can’t access it? Not good at all! We’re in the process of building a site (at api.nasa.gov) to catalog NASA APIs that structure access to our data, making it eminently easy for developers to build applications. An application, here, is broadly defined and includes research applications, mobile applications, policy applications—any data use that converts information into insight and action.

Consider, for example, our new REST API for the Astronomy Picture of the Day (APOD). The [APOD site](http://apod.nasa.gov/apod/astropix.html) is consistently one of the most popular sites for the entire federal government, with approximately 3.5 million views per month. (You can track federal website statistics at the [Digital Analytics Dashboard](https://analytics.usa.gov/), [built by 18F](https://github.com/GSA/analytics.usa.gov/graphs/contributors).) APOD is as popular as Justin Bieber. There are dozens of applications that could incorporate the APOD images, and we’re making it easier to work with the images. [Try it](https://api.data.gov/nasa/planetary/apod?concept_tags=True&date=2015-03-05&api_key=DEMO_KEY)! Build something! The [documentation is available](https://data.nasa.gov/developer/external/planetary/#apod). If you want to see something different—more features, less noise—submit an issue on [our Github repository](https://github.com/nasa/api-docs).

Our list of API’s (available on [our developer page](https://data.nasa.gov/developer)) is growing everyday. Currently we have structured endpoints for Earth imagery, NASA patents, and gridded Earth temperature anomalies. We will continue to collect and document our APIs—the doorway to our data.

Stay tuned for api.nasa.gov!

_Dan Hammer is a Presidential Innovation Fellow at NASA Headquarters. He can be reached via [email](mailto:daniel.s.hammer@nasa.gov)._

_This article was originally posted on the [open.NASA blog](http://open.nasa.gov/blog/2015/04/13/nasa-apis/)._