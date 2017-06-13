---


date: 2015-06-09 11:10:14 -0400
title: 'The Emulator Dilemma\: Can Mobile Device Testing Be Completed Without Mobile Devices?'
summary: 'Government agencies have created&nbsp;a variety of apps to meet the needs of the public. As&nbsp;you join in on the mobile first trend and begin developing your shiny new mobile application, you will need to test it. There are a basic set of questions that must be answered\: Does it function properly? Does it function properly'
authors: [david-fern, awichman]
categories:
  - Mobile
  - 'User Testing &amp; Research'
tags:
  - Federal CrowdSource Mobile Testing Program
  - mobile
  - mobile testing
  - Mobile UX Guideline 1
  - Mobile UX Guideline 4
  - native app
  - responsive web design
  - user experience
---

Government agencies have created a [variety of apps to meet the needs of the public](https://www.WHATEVER/tag/thursday-mobile-products/). As you join in on the [mobile first trend](https://www.WHATEVER/2013/09/30/mobile-first/) and begin developing your shiny new mobile application, you will need to test it.

There are a basic set of questions that must be answered:

  * Does it function properly?
  * Does it function properly on the different mobile devices your customers are using?
  * Do all developers and testers need a collection of devices to physically test the application with?
  * Who can afford to buy, support and maintain all the different devices and device operating system combinations required for a mobile test lab?

**You are in luck: you have a lot of alternatives!**

There are many types of tools that provide alternatives to building your own lab. Tools range from services that allow you to remotely access and test every possible combination of device and operating system to the many free tools that simulate and/or emulate the entire operating system or just the screen size and resolution. This article will focus on the latter, with information gleaned from [Testdroid](http://testdroid.com/news/rely-only-on-real-emulators-vs-devices), [HP](http://h30499.www3.hp.com/t5/The-Future-of-Testing-Blog/Emulators-vs-Real-Devices-for-Mobile-Application-Testing-The/ba-p/5506993#.VWyWC89Vikq), and [Guru99](http://www.guru99.com/real-device-vs-emulator-testing-ultimate-showdown.html).

## What Are Emulators and Simulators?

[According to Quora](http://www.quora.com/What-are-the-differences-between-simulation-and-emulation), both simulators and emulators let you run software in one environment that&#8217;s meant for another. This allows us to see how our mobile application looks and functions without having an actual mobile device. The benefit is that both developers and testers can sit at their desktop computers and see how their application behaves without needing to purchase and configure a lot of hardware or actually deploying the application to a mobile device.

The most popular emulators are [Xcode for Apple iOS](https://developer.apple.com/xcode/downloads) (below, left image) and the [Android SDK for Android devices](http://developer.android.com/sdk/index.html) (below, right image). Both of these tools were built by their respective operating system vendors and are free, relatively reliable, and easy to use, but they can take a bit of time to get setup and properly configured. Keep in mind that you need to have enough physical resources on your computer to run these tools.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/262-x-210-Figure-2-Xcode-iOS-Emulator.jpg" alt="Figure 1: Xcode iOS Emulator" %} 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/299-x-210-Figure-1-Android-SDK-Emulator.jpg" alt="Figure 2: Android SDK Emulator" %}

Another option is the light weight Chrome Device Mode and Mobile Emulation tool (below) that is built into Chrome version 32 and later. This allows you to see what your responsive design application looks like on a variety of different device screen sizes and resolutions.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/450-x-292-Figure-3-Chrome-Device-Mode-Mobile-Emulation-tool.jpg" alt="Figure 3 - Chrome Device Mode & Mobile Emulation tool" %}

## Who is Using Emulators and Simulators and to What Extent?

The following chart, from a [research study sponsored by Sauce Labs](http://saucelabs.com/resources/sauce_labs_testing_trends_2015.pdf) [PDF], shows the percentage of people using simulators and emulators and to what extent:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/06/600-x-307-Pie-chart-How-do-you-test-on-a-mobile-platform.jpg" %}

Is this surprising to you?  Which category do you fit into?

## Should I Use Emulators and Simulators?

Generally speaking, using emulators and simulators is a great, low cost way to increase your breadth of testing.

These emulators and simulators are most valuable for developer testing: early stage testing, high level sanity and smoke testing. It is preferable to bring in a subset of “real” devices for testing in the final stages of development.

The following are 5 categories of test classes that are much better tested using physical devices rather than emulators.

### Testing the Usability, Look and Feel

Emulators can be used to navigate through an application and look at the screen layout and presentation, but the true user experience, look, and feel can only be properly tested as a customer would: on a physical device. It is a totally different experience using a full-sized keyboard and mouse than physically navigating the mobile application using touch and gestures.

### Testing Hardware Components

Hardware testing is one of the biggest challenges in mobile testing today. There are hundreds of makes, models, screen sizes and versions of mobile devices, and new ones are coming out weekly.

One best practice would be to develop a prioritized mobile hardware device make, model and version list that represents the devices that the majority of your customers are using. Use these devices for regular testing and special testing such as memory usage, low battery, and interoperability.

Once you have physically tested the priority devices, emulators may be used to provide some of the other screen resolutions and display sizes that may be popular but that you do not have on hand.

### Testing Related Software

Your mobile application never works alone and always interacts with other software, including multiple operating system software types and versions, multiple web browsers, and simply coexisting with other software installed on the device. All this software is competing for resources and needs to be properly configured in the operating systems.

One best practice would be to develop a priority operating system and browser priority test list, similar to a Web browser priority testing list that you may use for testing your desktop Web applications.

One great use for the emulator testing might be for testing your application on a new version of an operating system that is in beta or was  just released. While you may not be able to get the newest device or want to upgrade an existing device, these tools may give you a great quick check to see if your application has any issues when customers&#8217; devices start upgrading to the new operating system version.

### Testing Networking

The uniqueness of mobile devices is that they use wireless and/or cellular networks. Testing networking and connectivity includes Interrupt testing, signal connectivity, network radio switching, OEM and carrier, and network interoperability. None of these types of testing can be completed correctly using an emulator, as the emulating software uses much, if not all, of the desktop computer&#8217;s connectivity.

### Application Specific Testing

Every application is different. For example: if your application heavily uses native device functionality such as GPS, initial testing may be conducted using emulators, but different makes and models of physical devices should be included in later testing to prove that things are functioning correctly.

If your application has responsive Web design (RWD) or is a native application, each has their own different challenges.

In general, RWD applications use fewer native device functions, so emulators may be useful. For example, since the application is browser-based, there are many emulators that can be used to see the application on different screen sizes and orientations. Additionally, some of the many mobile browsers may be installed on your desktop where you can test for compatibility. But, even with RWD applications, don’t underestimate the importance of testing on the physical device.

Native applications are far more unpredictable and require much more physical device testing, as the emulators do not exactly mirror the operating systems your customers are using. For example, the plain vanilla Android version 5.0 that is used in the Android APK is quite a bit different from the Verizon or AT&T version your customers got pushed to their devices. With all these “splintered” versions, extra testing focusing on installation (new/upgrade) and uninstall testing on physical devices becomes so important and requires many different operating systems and versions.

## Conclusion:

While emulators and simulators are great tools for the tester’s and developer’s toolbox, testing on physical mobile devices will always be a required part of the development and testing process. Keep in mind: the public will not be accessing your agency&#8217;s mobile product via an emulator!

This is why we have been testing agency websites and native apps on mobile devices in the [Federal Crowdsource Mobile Testing Program](https://www.WHATEVER/services/mobile-application-testing-program/), and we have learned a few things that you would not learn on an emulator. If you want to help out a fellow agency you can sign up to [help us virtually test the beta site of USA.gov](https://openopps.WHATEVER/tasks/94) at your leisure, June 15-22, 2015.

The goal of testing is to reduce the risk of releasing software that does not function properly for your customers. Testing your application using emulators is better than not testing at all, but testing on the physical devices that your customers use is always the best choice.

_You can also submit your mobile Web application for a future test cycle. The [CrowdSource Mobile Testing Program](https://www.WHATEVER/services/mobile-application-testing-program/) page provides information on how you can use this free service to test your products and is sponsored by the [MobileGov Community of Practice](https://www.WHATEVER/communities/mobile/)._

_David Fern is an IT Specialist and Technical Leader at the Social Security Administration’s Division of Quality, Testing and Validation._