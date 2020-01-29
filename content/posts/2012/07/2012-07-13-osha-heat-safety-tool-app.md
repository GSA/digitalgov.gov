---
slug: osha-heat-safety-tool-app
date: 2012-07-13 14:39:01 -0400
title: OSHA Heat Safety Tool App
summary: 'Mobile Gov Experiences are agency stories about creating anytime, anywhere, any device government services and info. This entry is a story shared by the Department of Labor. The Heat Safety Tool provides the heat index for your work site and precautions to prevent heat illness. Why We Did It OSHA developed the'
topics:
  - mobile
  - DOL
  - mobile-apps
  - mobile-gov-experience
  - us-department-of-labor
---

_[{{< legacy-img src="2013/12/OSHAHeatSafety_App.jpg" alt="OSHA Heat Safety App" >}}](https://s3.amazonaws.com/digitalgov/_legacy-img/2013/12/OSHAHeatSafety_App.jpg)Mobile Gov Experiences are agency stories about creating anytime, anywhere, any device government services and info._ _This entry is a story shared by the Department of Labor._

The <a href="http://www.dol.gov/dol/apps/heatindex.htm" rel="nofollow">Heat Safety Tool</a> provides the heat index for your work site and precautions to prevent heat illness.

## <a name="x-Why We Did It"></a>Why We Did It {#toc0}

OSHA developed the Heat Safety Tool smartphone app as part of a nationwide outreach campaign to raise awareness among workers and employers about the hazards of working outdoors in hot weather.

## <a name="x-What We Did"></a>What We Did {#toc1}

OSHA first created an Android app which calls the API provided by the National Weather Service to get the local temperature and relative humidity via the phone&#8217;s geolocation capability. Users can also enter temperature and relative humidity manually.

OSHA&#8217;s contractor developed the Android version first, working through some accessibility issues. The developers did not use a cross platform software development kit (SDK) and instead the iPhone application was created by porting the Android app pixel by pixel into iOS.

## <a name="x-How It Worked"></a>How It Worked {#toc2}

In iOS, the app became a very confusing experience. User interface conventions were thrown out the window and what happened was an app that had the following issues:

  * A confusing interface (even though and because it was an exact replica of the Android version.) It did not look or behave like an iPhone app.
  * Accessibility problems. Alternative ways of implementing the interface had to be used to accomplish the cross-platform design. This meant not using native UI controls, which meant the built-in accessibility tools couldn&#8217;t read the interface.
  * Cheap look. By not looking or feeling like an iPhone app, it had a cheap look and feel. It looked like it was slapped together.

## <a name="x-What We Learned"></a>What We Learned {#toc3}

Design for the individual platforms from the beginning. Headaches and delays later in the process from usability or accessibility issues can be headed-off right from the beginning. One way to do that is by following a good [Statement of Work model](https://digital.gov/resources/mobile-sow-and-developer-qualifications/ "Mobile SOW and Developer Qualifications") when contracting for mobile products.

<span style="color: #000000;font-family: arial, helvetica, sans-serif;font-size: 12.727272033691406px;line-height: 17.27272605895996px;background-color: #ffffff"> </span>