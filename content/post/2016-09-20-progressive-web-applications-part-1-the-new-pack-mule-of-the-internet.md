---


date: 2016-09-20 11:00:19 -0400
title: 'Progressive Web Applications, Part 1\: the New Pack Mule of the Internet'
summary: 'A&nbsp;mule&nbsp;is the hybrid offspring&nbsp;of a&nbsp;male donkey&nbsp;and a&nbsp;horse.&nbsp;This new species is stronger and better equipped than the species from which it comes. Overall, mules tend to be healthier, more sound,&nbsp;and live longer than horses. They are favored over horses in mountainous terrain because the mule has a reputation for being more surefooted than their equine cousins.'
authors: [david-fern]
categories:
  - Code
  - Content
  - Design
  - Managing Digital
  - Mobile
  - UX
tags:
  - app
  - code
  - innovation
  - mobile
  - mobile apps
  - native apps
---

****A mule is the hybrid offspring of a male donkey and a horse. This new species is stronger and better equipped than the species from which it comes. Overall, mules tend to be healthier, more sound, and live longer than horses. They are favored over horses in mountainous terrain because the mule has a reputation for being more surefooted than their equine cousins. Finally, mules do not require expensive grains, eat less and don&#8217;t tend to overeat as horses do.

Progressive Web Applications are the new hybrid mules of the Internet! 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/09/600-x-400-Pack-Mule-cartoon-toonerman-iStock-Thinkstock-454943937.jpg" alt="A cartoon illustration of a pack mule." %} 

## What Are Progressive Web Applications (PWA)?

With PWAs (again, think hybrid mule), developers take the best of native applications and the best of Web applications, and combine them into a “new” and “better“ user experience. As mobile devices became more popular, the choice has been native or web mobile applications, with the goal being to create the best user experience at an acceptable price.

**Native Applications** – Designed in a native language for a single operating system, native apps are the most customizable and take advantage of the device’s hardware, (the device’s “native” features) with high performance. However, mobile native applications are expensive to build, test and support as they are OS- and (in many cases) device-specific and are often required to be released through an app store.

**Web Applications** &#8211; Web apps are built to be used in a common browser and delivered in real time via the Internet. They are built using standard HTML, CSS and JavaScript. However, they have limited access to a device’s features, such as the camera and GPS. Additionally, network performance can adversely affect the application’s performance, and there are user interface limitations due to HTML/CSS/JavaScript.

**Progressive Web Applications** – PWAs have been able to take the best of both worlds and combine them into a hybrid application that is fast (with or without a fast network connection), can work across devices, and does not need to be distributed through a store as it is as linkable and shareable as a web page.

## How do PWAs Work?

PWAs can be thought of as a single web page or a set of web pages that are rendered on a device browser using common Web technologies such as HTML, HTML5, CSS3, media queries, and JavaScript that simulate the retrieval of data from a mock API, all in a shell like architecture. To make the application appear as a native application experience, a Web manifest is used to describe the application, and a service worker is used similar to the cache, keeping the pages up to date on the device.

The best analogy for a PWA was given by Aaron Gustafson, where he compared it to a peanut M&M (a self-contained unit) with the peanut being the content, the chocolate coating the presentation layer, and the JavaScript is the hard candy shell that comes in different colors and is experienced differently depending on the browser used.

These three components create a browser wrapper for PWAs:

  * **Peanut/Content** – This is the core Web HTML page content.

  * **Chocolate/Presentation** – This is the middle tier that contains the CSS

  * **Hard Candy Shell/Client Side Scripting** – JavaScript that works with the service worker to increase speed, loading times, and functionality to create the user experience. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/09/600-x-400-Sweet-candy-AppleZoomZoom-iStock-Thinkstock-496973541.jpg" alt="Peanut M&M candies." %} 

To pull the PWA together we need to add in the service worker and the web App manifest.

### The Service Worker

The key to PWAs is the service worker, a JavaScript background task that replaces the traditional web cache with a cache API. The API wakes up when needed and listens to network requests and saves or caches the static resources from the visited sites. This enables the PWA to function even when offline, making the app “always available.”

To save these resources, the Web page registers the service worker with the browser; then, the web page no longer goes to the web server but instead goes to the service worker for updates. Additionally, the service worker responds to push notifications from the Web Server and maintains cached data to the application.

### The Web App Manifest

The Web Application Manifest is a JSON script that makes it possible for the Web application to assign a home screen icon, theme and background color to the app, define a [splash screen](https://developers.google.com/web/updates/2015/10/splashscreen?hl=en), and run the web app in full-screen mode as a standalone application.

&nbsp;

_In the coming weeks, we’ll explore some of the [benefits and challenges of using PWAs](https://www.WHATEVER/2016/10/13/progressive-web-applications-part-2-pros-cons-and-looking-ahead/) and some real world examples. Stay tuned!_