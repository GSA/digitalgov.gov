---


date: 2015-06-18 10:00:40 -0400
title: 'NOAA&amp;#8217;s CrowdMag App\: Citizen Science on the Go'
summary: 'The rise in mobile device usage has created a rise in expectations\: the public wants new and innovative interactions with all organizations, including government. Incorporating social media in mobile websites and native apps is one way federal agencies have increased public interaction. Six agencies have leveraged native app functionality for crowdsourcing purposes. The National Oceanic'
authors: [jparcell]
categories:
  - 'Crowdsourcing &amp; Citizen Science'
  - Mobile
  - Monthly Theme
  - 'User Testing &amp; Research'
tags:
  - citizen science
  - crowdsourcing
  - Federal CrowdSource Mobile Testing Program
  - gamification
  - ios
  - Mobile UX Guideline 5
  - National Oceanic and Atmospheric Administration
  - NOAA
  - Thursday Mobile Products
---

The rise in mobile device usage has created a rise in expectations: [the public wants new and innovative interactions](https://www.WHATEVER/2014/06/24/trends-on-tuesday-are-mobile-devices-the-center-of-social-universe/) with all organizations, including government. Incorporating [social media in mobile websites and native apps](https://www.WHATEVER/2014/06/12/three-ways-agencies-are-using-social-media-in-mobile-products/) is one way federal agencies have increased public interaction.

Six agencies have leveraged native app functionality for [crowdsourcing purposes](https://www.WHATEVER/2014/06/12/three-ways-agencies-are-using-social-media-in-mobile-products/). The National Oceanic and Atmospheric Administration (NOAA) leads the way with three public-facing applications that transform ordinary citizens into citizen scientists: [Dolphin and Whale 911](https://www.WHATEVER/2013/10/24/dolphin-and-whale-apps-from-noaa-fisheries/), [Release Mako](https://www.WHATEVER/2012/04/26/noaas-release-mako-app/) and [CrowdMag](https://www.WHATEVER/2015/01/29/be-a-citizen-scientist-with-noaas-crowdmag-app/).


{% include image/full-width.html img="https://www.WHATEVER/files/2015/06/250-x-444-NOAA-CrowdMag.jpg" alt="Screenshot of the Crowd Mag app" %}The NOAA CrowdMag App collects and sends magnetometer data to NOAA researchers. The app leverages the magnetometer in mobile devices by automatically taking readings from the user’s device and sending the data to researchers. The app was launched in both [Android](https://play.google.com/store/apps/details?id=gov.noaa.ngdc.wmm2) and [iOS](https://itunes.apple.com/app/id910578825) in 2014 by [NOAA’s National Centers for Environmental Information](https://www.ncdc.noaa.gov/news/national-centers-environmental-information).

NOAA scientists combine the app’s crowdsourced magnetic data with real-time solar wind data to create near real-time models of Earth’s time changing magnetic field. The data also helps map local magnetic noise sources (think power transformers and iron pipes) to improve accuracy of magnetic navigation systems.

I have been a citizen scientist since earlier this year when I downloaded the app as part of the [Federal CrowdSource Mobile Testing native app testing pilot](https://www.WHATEVER/2015/06/16/trends-on-tuesday-native-app-lessons-from-the-crowdsource-mobile-testing-program/). I talked to Manoj Nair, an [environmental research scientist](http://cires.colorado.edu/about/noaa/) at NOAA, whose team created the application. Nair told me about user response to the application, implementing gamification based on user feedback and the innovative maps they’ve created based on the crowdsourced data.

**Users can be relatively passive with your app, in the sense that they download it, let it collect data and never really have to open it since the app collects data on its own. Are there benefits to users actively opening the application?**

Yes, for three reasons:

  1. Compass calibration. It is possible to get your phone’s compass out of calibration by placing it near a strong magnetic field. If the compass is out of calibration and the app is in the foreground, the app walks users through a set of steps to re-calibrate.
  2. For iOS, the background reporting is not done at a set time interval, but rather in a random fashion, due to a restriction from Apple. Opening the app regularly helps to collect more data.
  3. Apps that are opened regularly are likely to stay installed for a longer time.

**What has user feedback been like? Have people been comfortable with the app?**

The reviews and feedback are generally positive: people writing how delighted they are to participate in a crowdsourcing project. One of the early pieces of feedback from the Crowdsource Mobile Testing group that we acted upon was a lack of user engagement. For some users, the background reporting feature of CrowdMag was confusing. They wanted more engagement from the app about data statistics (how much data they have contributed, etc.). We introduced a badge system to address this issue. Also, there are people who want a higher sampling rate (currently, the maximum is 1 second).

We have a 4.4 average rating from 121 users (~4,000 installs) for Android. We have only a few reviews (less than 5) for iOS from about 2,000 users. We do not know why the iOS reviews are so low in numbers. Some users send feedback emails.

**Users can earn badges based on the number of data readings they make: 100 readings for bronze; 1,000 for silver; 10,000 for gold; and 100,000 for platinum. I recently got a bronze medal from the app, and it was a pleasant surprise. How have the badges impacted engagement? Have you discovered any super data collectors?**

We were not sure how people would respond to the pop-ups. However, users found the app to be more engaging after we introduced the badge system. It is almost impossible to uniquely identify users from the NOAA side to identify lead contributors. We are working on a solution that honors the lead contributors while protecting user anonymity.

**Is there a ceiling for the number of data points you need to collect?**

We are still figuring that out. For example, with 4 million data points (all data collected between October 2014 and May 2015), we created a degree-2 geomagnetic field model. Higher resolution magnetic field models require more crowdsourced data. This is because the noise content in CrowdMag data is much higher than that of satellite magnetic data.

**What are the plans for CrowdMag&#8217;s immediate future? Long term?**

Our immediate plan is to release the world’s first geomagnetic field model developed entirely using crowdsourced data. This is going to be a low resolution picture of the Earth’s magnetic field, showing its main dipole. The long term aim is to map the shorter wavelength features of the magnetic field observed on the Earth’s populated surface.