---


date: 2014-06-18 10:00:46 -0400
title: 'The API Briefing\: Department of State&rsquo;s Model App &amp;#8211; Education USA'
summary: 'Not only does the Department of State have a great set of APIs, State also has an excellent example of how to build an informative and useful app. EducationUSA is a network of State Department advisers who help international students apply for U.S. university programs. The'
authors: [bbrantley]
categories:
  - API
  - Code
  - Mobile
  - UX
tags:
  - mobile apps
  - U.S. Department of State
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/250-x-250-logo-Seal\_of\_Department\_of\_state.jpg" alt="U.S. Department of State seal / logo" %}Not only does the Department of State have a great set of APIs, State also has an excellent example of how to build an informative and useful app. [EducationUSA](https://www.educationusa.info/) is a network of State Department advisers who help international students apply for U.S. university programs. The [EducationUSA app](https://www.educationusa.info/mobileapp/) has the most popular resources and services from the [EducationUSA website](https://www.educationusa.info/), such as the ability to:

  * Search for EducationUSA advising center information
  * Follow the primary social media channels (Facebook, Twitter, & YouTube)
  * View Frequently Asked Questions (in 8 languages)
  * Discover new financial aid opportunities, and
  * Utilize the Ask an Adviser (in five languages) function

The EducationUSA app is an excellent example of designing for multiple-device experiences. According to Michael Levin, there are three design types for multiple device experiences:

  1. **Consistent**. Apps maintain the same look and functionality no matter the device.
  2. **Continuous.** The look depends on the particular device but the experience is consistent.
  3. **Complementary.** Devices collaborate to provide an experience.

The EducationUSA app uses the continuous design in that the user has a consistent experience, but, a different look which is optimized for that particular device. (One place you can read more about this approach is in Levin’s [_Designing Multi-Device Experiences_](http://shop.oreilly.com/product/0636920027089.do)).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/06/600-x-473-cropped-EducationUSA-app-horizontal-screencap-on-smart-phone.jpg" alt="EducationUSA app horizontal screencap on smart phone" %}

Why is this important for the API developer? Let&#8217;s say you are developing an app using the Department of State’s [Office of Historian Ebook Catalog API](http://history.state.gov/developer/catalog). This API is the catalog for all of the ebooks from the Foreign Relations of the United States. [ShuBook](http://www.ambibma.com/en/shubook.html), a third-party iTunes e-reader application, uses the API to allow users to browse and download the complete volume in a compatible e-book format. How you search and view the ebooks depends on whether you see it on the iPhone, iPad, or iMac even though all three experiences are served by the same API.

The creativity of third-party app developers and federal app developers is why the release of federal government information as APIs is so beneficial to the American public. Not only just for the information, but also new ways to present and combine the information in more useful and rich experiences.

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via [email](mailto:William.Brantley@opm.gov)._

_Dr. William A. Brantley, PMP, is a Program Analyst, in Forecasting and Methods at the U.S. Office of Personnel Management (OPM). You can find out more about his work in this space at [BillBrantley.com](http://billbrantley.com/)._