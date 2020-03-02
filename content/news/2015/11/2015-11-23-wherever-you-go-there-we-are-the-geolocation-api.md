---
slug: wherever-you-go-there-we-are-the-geolocation-api
date: 2015-11-23 13:00:37 -0400
title: 'Wherever You Go, There We Are: the Geolocation API'
summary: 'No matter how you go mobile, you can meet your user’s needs. Recommendations based on location are plentiful, particularly on native apps. But don’t fret, agencies with mobile websites: you can also get in the location customization game. Geolocation is a W3C scripting API that can be used with JavaScript in Web browsers. In the'
authors:
  - awichman
  - leo-yang
topics:
  - api
  - mobile
  - api
  - mobile
  - NPS
  - us-national-park-service
---

No matter [how you go mobile]({{< ref "2015-10-07-is-your-agency-winning-its-mobile-moments.md" >}}), you can meet your user’s needs. Recommendations based on location are plentiful, particularly on native apps. But don’t fret, agencies with mobile websites: you can also get in the location customization game. {{< legacy-img src="2015/11/600-x-400-Mobile-phone-gps-navigation-travel-destination-location-and-positioning-concept-cybrain-iStock-Thinkstock-493553122.jpg" alt="Mobile phone gps navigation, travel destination, location and positioning concept of a map and single marker over a smart phone" caption="" >}} 

[Geolocation](http://dev.w3.org/geo/api/spec-source.html) is a W3C scripting [API]({{< ref "2013-04-30-apis-in-government.md" >}}) that can be used with JavaScript in Web browsers. In the past, geolocation could only be done in native apps through a mobile programming API. With the Geolocation API, a mobile web app can request a user’s location.

{{< legacy-img src="2015/11/250-x-445-Find-Your-Park-Geolocation-phone-screenshot.jpg" alt="Screen capture of the Find Your Park service on an iPhone asking for permission to use the phone's Current Location." >}}There are numerous ways federal agencies could use this API. For example, the National Park Service (NPS)’s [FindYourPark.com](http://findyourpark.com/find) provides customized recommendations based on a user’s location. As noted in a [previous DigitalGov article]({{< ref "2015-06-30-celebrating-parks-creating-connections-nps-prepares-for-2016-centennial.md" >}}), NPS metadata from [NPS.gov](http://www.nps.gov/index.htm) is pulled over to the FindYourPark website, including information about [Centennial Rvents](http://findyourpark.com/find#centennial_events) and the maps for the find feature.

Geolocation is not part of W3C HTML5 or the WHATWG HTML. However, W3C has published specifications to standardize this API to retrieve the geographical location information for a client-side device.

Additional Resources:

  * [Coding examples for developers](http://www.w3schools.com/HTML/html5_geolocation.asp) 
  * [Geolocation API browser compatibility chart](http://caniuse.com/#feat=geolocation)