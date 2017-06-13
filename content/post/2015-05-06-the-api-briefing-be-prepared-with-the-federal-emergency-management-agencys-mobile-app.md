---


date: 2015-05-06 11:00:44 -0400
title: 'The API Briefing\:  Be Prepared with the Federal Emergency Management Agency&rsquo;s Mobile App'
summary: 'Before coming to DC in late 2008, I lived in Louisville, Kentucky. Louisville is in the Ohio Valley Region, which meteorologists euphemistically call &ldquo;weather-rich.&rdquo; With spring came the beautiful flowers and the Kentucky Derby. Spring also brought flooding, tornadoes, severe thunderstorms, and windstorms. This is why I had several emergency weather radios that also doubled'
authors: [bbrantley]
categories:
  - API
  - Mobile
tags:
  - API
  - data
  - Federal Emergency Management Agency
  - FEMA
  - mobile
  - Mobile UX Guideline 3
  - Mobile UX Guideline 5
  - native app
  - Wednesday API Briefing
---

Before coming to DC in late 2008, I lived in Louisville, Kentucky. Louisville is in the Ohio Valley Region, which meteorologists euphemistically call “weather-rich.” With spring came the beautiful flowers and the Kentucky Derby. Spring also brought flooding, tornadoes, severe thunderstorms, and windstorms. This is why I had several emergency weather radios that also doubled as flashlights and cell phone chargers.

I also have several emergency information apps on my smartphone. Of all of the mobile apps, I like the <a href="http://www.fema.gov/mobile-app" target="_blank">Federal Emergency Management Agency’s (FEMA) Disaster Management Mobile App</a> the best. It has local weather alerts, safety tips, and information on local disaster shelters. It has a good, clean design that is especially useful for people who need emergency information _now_! Another good point about the design is that the FEMA app has a limited set of features. I could not find any evidence from the FEMA site to support this assertion, but I believe that the FEMA app designers did extensive user testing to determine the most needed tasks for a disaster app. There is a fine art to determining just the right mix of features for an app.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/05/600-x-530-FEMA-app\_features\_webpage_medium.jpg" alt="Menu items from the FEMA app, which is available for Apple, Android, and Blackberry mobile devices. Five types are shown on the screen: 1) Prepare: Get tips to survive natural disasters, customize your emergency checklist, and save meeting locations, 2) Weather Alerts: Receive alerts from the National Weather Service, 3) Disaster Resources: Locate open shelters and Disaster Recovery Centers, and apply for assistance, 4) Disaster Reporter: Upload and share your disaster photos to help document what happened in your area, and 5) Social Hub and Blog: Stay connected on social media and the FEMA blog." %}

When I find a good Federal app, I like to visit the agency’s Developer’s page to find additional useful agency APIs. FEMA has <a href="http://catalog.data.gov/dataset?vocab_category_all=Natural+Hazards&q=-aapi+api+OR++res_format%3Aapi&_vocab_category_all_limit=0" target="_blank">four APIs devoted to some disaster grants programs</a>. The <a href="http://catalog.data.gov/dataset/fema-disaster-declaration-summary-api" target="_blank">FEMA Disaster Declaration Summary API</a> lists all of FEMA’s disaster declarations since 1953. The <a href="http://www.fema.gov/openfema-dataset-disaster-declarations-summaries-v1" target="_blank">API has a simple set of fields</a> including when the disaster was declared, the type of disaster declared, and the state where the disaster occurred. After investigating this API, the next step is to think up ways to use the API in an app.

Here is one idea: pair the information from the FEMA disaster declaration API with a real estate app. Users could build a neighborhood profile that could advise prospective homeowners on potential natural disaster risks. This could help in determining if the homeowner should buy flood insurance or buy a home that could better withstand lightning strikes.

Another idea: the FEMA disaster declaration API can be programmed into a spreadsheet along with long-term economic development data. Researchers could investigate how long it takes a disaster area to recover from a disaster and what types of grant programs and economic assistance were most effective.

The Federal government has much information on disaster preparation and recovery from up-to-minute disaster notification services to rebuilding after a natural disaster. As the FEMA Mobile App shows, this information is perfect for APIs and apps to help the American public – especially if you live in a weather-rich location. In-person attendees of the [DigitalGov Citizen Services Summit](https://summit.WHATEVER/) can talk to the FEMA representatives who developed the app at the [Summit Expo](https://summit.WHATEVER/expo/). If you don&#8217;t have a Summit ticket, you can sign up for the [remote attendance](https://www.eventbrite.com/e/2015-spring-citizen-services-summit-registration-12671367401).

_*API – Application Programming Interface. How software programs and databases share data and functions with each other. Check out <a href="https://www.WHATEVER/2013/04/30/apis-in-government/" target="_blank">APIs in Government</a> for more information._

_Each week in “The API Briefing,” I will showcase government APIs and the latest API news and trends. Visit this blog every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via <a href="mailto:bill.brantley@wdc.usda.gov" target="_blank">email</a>._

_Dr. William A. Brantley is the HRIS Branch Chief in the USDA’s Rural Development Human Resources Office. You can find out more about his non-Federal work in this space at <a href="http://billbrantley.com/" target="_blank">BillBrantley.com</a>. All opinions are his own and do not reflect the opinions of the USDA and GSA._