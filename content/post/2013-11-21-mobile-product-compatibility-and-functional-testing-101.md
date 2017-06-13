---


date: 2013-11-21 9:55:56 -0400
title: 'Mobile Product Compatibility and Functional Testing 101'
summary: 'As covered in the Mobile Product Testing Guidelines article, there are various approaches to mobile testing. This article is a resource of the Federal CrowdSource Mobile Testing Program&nbsp;and focuses on two common test types are compatibility testing and functional testing. Compatibility Testing The Wikipedia article on compatibility testing states the &amp;#8220;Compatibility testing, part of software'
authors: [jparcell]
categories:
  - Mobile
  - 'User Testing &amp; Research'
tags:
  - mobile
  - mobile apps
  - responsive web design
---

As covered in the [Mobile Product Testing Guidelines](https://www.WHATEVER/2013/08/22/guidlelines-to-mobile-testing/ "Guidellines to Mobile Testing") article, there are various approaches to mobile testing. This article is a resource of the [Federal CrowdSource Mobile Testing Program](https://www.WHATEVER/services/open-opportunities-mobile-application-testing-program/ "Federal CrowdSource Mobile Testing Program") and focuses on two common test types are compatibility testing and functional testing.

## Compatibility Testing

The Wikipedia article on [compatibility testing](http://en.wikipedia.org/wiki/Software_testing#Compatibility_testing) states the &#8220;Compatibility testing, part of software <a href="http://en.wikipedia.org/wiki/Non-functional_tests" rel="nofollow">non-functional tests</a>, is testing conducted on the application to evaluate the application&#8217;s compatibility with the computing environment. Computing environment may contain some or all of the below mentioned elements:

  * Computing capacity of Hardware Platform (IBM 360, HP 9000, etc.)..
  * Bandwidth handling capacity of networking hardware
  * Compatibility of peripherals (Printer, DVD drive, etc.)
  * Operating systems (Linux, Windows, etc.)
  * Database (Oracle, SQL Server, MySQL, etc.)
  * Other System Software (Web server, networking/ messaging tool, etc.)
  * Browser compatibility (Chrome, Firefox, Netscape, Internet Explorer, Safari, etc.)”

## Functional Testing

Functional testing is testing performed to ensure the mobile application developed meets the requirements for which it was designed. There are two broad methods of functional testing: unscripted and scripted. Additionally, the exploratory testing method for mobile testing is gaining traction.

### Unscripted Testing

Unscripted testing is often referred to as ad hoc testing. According to QATestLab, [ad-hoc testing](http://qatestlab.com/services/No-Documentation/ad-hoc-testing/) &#8220;is a term commonly used for the tests carried out without planning the software and documentation.The tests are supposed to be executed only once, unless a defect is discovered.&#8221;

### Scripted Testing

Scripted testing is testing that involved the developer creating specific test scenarios for the tester to follow.

### Exploratory Testing

A new method of testing, aimed at mobile device testing and being advanced by [QATestLab](http://qatestlab.com/) is called [exploratory testing](http://qatestlab.com/services/No-Documentation/exploratory-testing/). This is a hybrid testing methodology that uses attributes of both unscripted and scripted testing. Exploratory testing uses the &#8220;freedom&#8221; scale. It is a plan is to cover each end of the spectrum when testing our mobile application. The tester is asked to perform exploratory testing as well as execute the scripted tests that the Agency has provided.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/01/freedom_scale.png" alt="Testing Scale" %}

  
Source: [Telling Your Exploratory Story](http://agile2010.agilealliance.org/files/Telling%20Your%20Exploratory%20Story%20Agile2010.pdf)

## Mobile Applications Architectures

There are a variety of mobile application architectures, including:

  * Native apps
  * Hybrid apps
  * Dedicated mobile web apps
  * Device specific web apps
  * Responsive websites

Native apps are developed for the individual mobile platform in programming languages they support e.g. Java for Android, ObjectiveC for iOS. New features arrive in new models, and this may break compatibility and increase the maintenance. However, native apps have great performance, and they have access to device functions such as camera, navigation etc. Development cost is usually high; especially when there is a requirement for supporting multiple devices.

Hybrid apps could be said to take the best from both worlds. They rely in development frameworks where the native implementation across multiple device architectures becomes less a headache. Hybrid apps main content is typically delivered using standard web standards (HTML, CSS, JavaScript) to keep the cost down, but they can still access the device functions e.g. camera.

Dedicated mobile web apps are simply websites optimized specifically to be rendered on mobile devices. This is useful for giving users access to web based information and transactions via mobile devices. However, maintenance of both a traditional and a mobile website may be the consequence of this model. Keep in mind that web apps and websites will not have access to device features.

Device specific web apps make it possible to create web apps that are optimized for specific devices; such as iPhone and Android.

Responsive websites are websites that rely on recent development in CSS3 e.g. media queries to adapt the page layouts to the actual screen sizes. This model allows organizations to maintain one website and still provide pages that look great for users on computers, tablets and smartphones.

## Mobile Operating System Market

There are many mobile operating systems in use, and this number continues to rise. The following chart from [StatCounter](http://gs.statcounter.com/) shows some examples and trends of the mobile market share from October 2012 through October 2013.

{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/01/StatCounterMobileOS.png" alt="Stat Counter Mobile Chart" %}


The chart shows that as of October 2013, 90.2% of mobile devices run either iOS and Android operating system.

Reminder: When using this type of data, your specific “users” must be kept in mind. For example, this information is representative of the United States, but your customer base may be regional or even worldwide, possibly having different characteristics. Using tools such as Google Analytics can help determine your specific customer base characteristics.

## Common Testing Questions

Regardless of the mobile testing being performed, two common questions must be answered:

  1. What devices should an application be tested with to prove it works?
  2. What types of things should Testers look for during exploratory and scripted testing?

### What devices should an application be tested with to prove it works?

As mentioned above, it would be nice to test on every possible mobile device and operating system, but this is not possible as we simply do not have enough time or resources to do so.

Instead, the goal should be to test on what your specific users are using. Some organizations gather this information by using tools such as Google Analytics to see exactly what type of mobile devices are hitting their site.

If it is not possible to get reports on the types of devices that are hitting your site, you need to do your own research using the industry trends shown above.

### What types of things should testers look for during exploratory and scripted testing?

The following is a list of some of the things that testers should look for during testing:

  1. Links 
      1. Test all links to see that they navigate to the correct page
  2. Graphical User Interface (GUI) check: 
      1. Font size and color
      2. Cursor or mouse focus
      3. Location of buttons, images, symbols and logos.
      4. Consistent design.
      5. Buttons should have the right size and be suitable to big fingers
      6. All text is readable
      7. Test all header and footer links which are constant for all pages.
      8. Check to see that pages are uniform and consistent
      9. Be sure that no text or objects are cut off
  3. Field Validation 
      1. Is valid data accepted?
      2. Is invalid data rejected and giving a good error message?
  4. Page Content 
      1. Verify whether information on all pages is correct and easy to understand.
      2. Test for spelling and grammatical errors.
      3. Check for proper help if available
  5. Touch 
      1. Tapping should zoom-in and zoom-out
  6. Positioning 
      1. The Application should function properly in landscape and portrait mode
  7. Scrolling 
      1. Can you scroll back and forth on the page?

## Common Testing Activities

Regardless of the mobile testing being performed, common activities include:

  1. Saving screen shots
  2. Capturing mobile device logs

### Saving Screen Shots

Many times during the testing process, testers find an issue or potential issue. The best way to show someone exactly what you saw is to capture a screen shot of the issue.

There are many ways to save mobile screen shots; some are more difficult/technical than others depending on the device.

The following are instructions for capturing screen shots on a variety of devices:

**iPhone**

  * [How to Take a Screenshot with the iPhone](http://www.imore.com/how-to-take-a-screenshot-with-the-iphone)
  * [How to Take An iPod and iPhone Screenshot](http://ipod.about.com/od/iphonewidgets/ht/iph-screenshot.htm)

**Android 4**

  * [How to Take a Screenshot on Android](http://lifehacker.com/5994516/how-to-take-a-screenshot-on-android)

**Android Before version 4**

  * [How to Take a Screenshot on Google on an Android Gingerbread](http://smallbusiness.chron.com/screenshot-google-android-gingerbread-36229.html)

**General Android Screen Shots**

  * [6 Ways To Take Screenshots On Android](http://www.makeuseof.com/tag/6-ways-to-take-screenshots-on-android/)

**Microsoft**

  * [How to Take a Screenshot in Windows Mobile](http://www.windowsphone.com/en-us/how-to/wp8/photos/take-a-screenshot)

**Blackberry**

  * [How to Take a Screenshot on a BlackBerry Smartphone](http://howto.cnet.com/8301-11310_39-20057498-285/how-to-take-a-screenshot-on-a-blackberry-smartphone/)

When all else fails, remember that you can always take a screen shot or movie of your device with another device and submit that.

### Capturing Mobile Device Logs

Sometimes mobile applications “crash” or stop working. The only way to really figure out what happened and to provide a description is to save the system logs.

The following are some ways to save the logs on mobile phones.

**iOS**

  * [How to Collect iOS Logs](http://support.panopto.com/documentation/mobile/how-collect-ios-logs)

**Android**

  * [CatLog](https://play.google.com/store/apps/details?id=com.nolanlawson.logcat)
  * [Log Viewer Lite](https://play.google.com/store/apps/details?id=ukzzang.android.app.logviewer&hl=en)