---


date: 2016-11-21 12:00:19 -0400
title: 'Mobile Development and Testing with Chrome Developer Tools'
summary: 'Around Q3, I was looking for way to test the HTML and CSS of an online application that was to be public-facing. At first, my office&rsquo;s plan was to connect mobile devices to the network owned by federal employees on a volunteer basis for testing. All of a sudden, a new policy came down that'
authors: [angela-smithers]
categories:
  - Code
  - Design
  - Mobile
tags:
  - code
  - mobile
  - mobile testing
  - National Ocean Service
  - National Oceanic and Atmospheric Administration
  - NOAA
  - NOS
  - Office of Inspector General
  - OIG
---

Around Q3, I was looking for way to test the HTML and CSS of an online application that was to be public-facing. At first, my office’s plan was to connect mobile devices to the network owned by federal employees on a volunteer basis for testing. All of a sudden, a new policy came down that stated, &#8220;devices that were not purchased by the agency could not be connected to the network. If we needed a device(s) to be on the network, we needed to go through the steps to have the device inspected, documented and approved.&#8221;

I wondered, would this prolong my process? Would volunteers throughout the building be willing to go through this step with me? I also did not feel comfortable with the idea of having the agency purchase devices for testing—what happens in six months or a year when those devices become obsolete? Our web application was to be utilized worldwide; how many devices are “enough” devices? 
{% include image/full-width.html img="https://www.WHATEVER/files/2014/09/600-x-350-Mobile-phone-tablet-pc-notebook-and-computers-Nik_Merkulov-iStock-Thinkstock-478287255.jpg" alt="American flag and global continents on various devices; mobile phone, tablet, desktop computer, notebook" %} 

Could we purchase an application or a subscription to an online io to test within my computer? I went to my desk to meditate on this new option because I just didn’t feel at ease. Playing in my Chrome Dev environment I accidently stumbled upon a button. I clicked it out of curiosity and … shazam! Behold – the rendered view completely changed! My CSS completely changed! What was this magic that I had discovered?

## What Is Chrome’s Mobile Dev Tool?

Although not truly magic, [Chrome Developer Tools](https://developer.chrome.com/) (or DevTools) are a set of web authoring and debugging tools built into the Google Chrome web browser. Using the [Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/) can be an integral part of the government’s efforts to reach citizens where they are most likely to be reached; on [their mobile devices](https://www.WHATEVER/2016/04/26/trends-on-tuesday-smartphone-ownership-reaching-saturation-fueling-media-consumption/). Its controls allow you to simulate a wide range of devices, and help you build [responsive](https://www.WHATEVER/tag/responsive-web-design/), [mobile-first](https://www.WHATEVER/tag/mobile-first/) web [experiences](https://www.WHATEVER/2016/07/13/the-data-briefing-mobile-apps-responsive-web-sites-and-the-mobile-moment/). Thankfully, it’s also free.

I recently asked members of the [MobileGov Community](https://www.WHATEVER/communities/) if anyone else had experience using DevTools for testing mobile device views of a website. Troy Kitch and Robert Aspinall of the [National Ocean Service](http://oceanservice.noaa.gov/) (NOS) at [National Oceanic and Atmospheric Administration](http://www.noaa.gov/) (NOAA) were among those who responded. Troy said that he uses it often for the NOS website and that &#8220;Google&#8217;s Developer Tool is a somewhat more convenient tool [than others mentioned], because it also allows you to test style changes on the fly and preview at different sizes before actually changing your style sheets.&#8221; Robert added, &#8220;It does a great job of imitating fingertip input and disabling hover events (no way to hover on a mobile device). It&#8217;s useful when testing our responsive websites.&#8221;

## Where to Find It

This is a [Chrome Developer Tool](https://developer.chrome.com/), so naturally, you will only be able to access it when using the Google Chrome browser. You can access the tool either by using the Chrome menu icon at the top right of your browser window (select Tools, then Developer Tools), or by right-clicking on any space inside the browser window and then selecting ‘Inspect’ from the dropdown menu that appears. 
{% include image/full-width.html img="https://www.WHATEVER/files/2016/11/600-x-375-Chrome-DevTools-Elements-panel.jpg" alt="Chrome DevTools Elements panel.png" %} 

Open the Device Mode toolbar by left-clicking on the icon that resembles a phone in front of a tablet (see [DevTools Windows and Mac keyboard shortcuts](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/shortcuts)). It is found in the top left corner of the ‘Inspect’ window. 
{% include image/full-width.html img="https://www.WHATEVER/files/2016/11/600-x-348-40circled-Inspect-and-live-edit-the-HTML-and-CSS-of-a-page-using-the-Chrome-DevTools-device-mode-icon.jpg" alt="Device Mode icon circled in red at top left." %} 

## How to Use It

The Viewport Controls that appear at the top of the browser window allow you to choose a device from a single dropdown menu. You can add more devices to that menu by choosing the “Edit” option, then scroll through a list of checkboxes to select or deselect a device. If the device you are familiar with is not in the list, you can ‘Add’ another device. So after you select a device, the snazziest part is being able to toggle that device’s orientation. You bad! 
{% include image/full-width.html img="https://www.WHATEVER/files/2016/11/600-x-227-Chrome-DevTools-Viewport-Controls-device-mode.jpg" alt="Viewport Controls." %} 

So there you have it. Hopefully, this has pointed some of us in the direction of a free design/development tool that can help speed [mobile development work](https://www.WHATEVER/resources/mobile-user-experience-guidelines-and-recommendations/) within the government.

_All references to specific brands and/or companies are used only for illustrative purposes and do not imply endorsement by the U.S. federal government or any federal government agency._

_Federal agencies can register their mobile products—mobile websites and native apps—on the [U.S. Digital Registry](https://usdigitalregistry.WHATEVER) to verify that they’re [mobile-friendly](https://www.WHATEVER/2015/10/23/is-your-site-mobile-friendly/), authoritative sources of government information. [Learn more](https://www.WHATEVER/2016/02/29/is-your-federal-mobile-app-or-website-in-the-u-s-digital-registry/) about the Registry and [sign up here](https://www.WHATEVER/services/u-s-digital-registry/)._ 

_Got a great idea for a mobile product or service and need help planning or releasing it? Contact the [Mobile Application Development Program](https://www.WHATEVER/resources/mobile-application-development-program/). Are you a federal employee interested in how agencies are using mobile technologies and building government-wide solutions? Join the [MobileGov Community of Practice](https://www.WHATEVER/communities/mobile/) with your .gov or .mil email address._