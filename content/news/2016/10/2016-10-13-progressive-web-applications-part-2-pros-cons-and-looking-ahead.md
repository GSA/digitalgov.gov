---
slug: progressive-web-applications-part-2-pros-cons-and-looking-ahead
date: 2016-10-13 11:00:04 -0400
title: 'Progressive Web Applications, Part 2: Pros, Cons, and Looking Ahead'
summary: 'A few weeks ago, Progressive Web Applications, Part 1: the New Pack Mule of the Internet introduced PWAs and the technologies behind them. We shared that article to the MobileGov Community of Practice and asked about the pros and cons of this approach to winning mobile moments. What Are Some Benefits of PWAs? PWAs bring'
authors:
  - david-fern
topics:
  - code
  - content
  - design
  - mobile
  - user-experience
  - app
  - code
  - innovation
  - mobile
  - mobile-apps
  - native-apps
  - thursday-mobile-products
---

> _A few weeks ago, [_Progressive Web Applications, Part 1: the New Pack Mule of the Internet_]({{< ref "2016-09-20-progressive-web-applications-part-1-the-new-pack-mule-of-the-internet.md" >}}) _introduced PWAs and the technologies behind them. We shared that article to the [_MobileGov Community of Practice_]({{< ref "mobilegov.md" >}}) and asked about the pros and cons of this approach to_ [_winning mobile moments_]({{< ref "2015-10-07-is-your-agency-winning-its-mobile-moments.md" >}})._

## What Are Some Benefits of PWAs?

PWAs bring a host of advantages over the traditional native mobile and Web methodologies including:

1. **No “Installation” Required** – Since PWAs are essentially web pages, they do not require any device installation method. However, they can be quickly and easily installed on the device’s home screen, making them available anytime.
2. **No Application Updating Required** – Since PWAs are essentially Web pages, they update like web pages by being refreshed in the background using push notifications unlike native applications that require installations.
3. **Portability** &#8211; These are just web sites that took all the right vitamins. There are many strategies for native app portability (including Hybrid apps), but unlike those strategies, PWAs don&#8217;t change your deployment and packaging model.
4. **Quick Loading** &#8211; Service workers allow your apps to load nearly instantly and reliably, no matter what kind of network connection your user is on.
5. **Presence on the Home Screen** &#8211; Web app install banners give you the ability to let your users quickly and seamlessly add your web app to their home screen, making it easy to launch and return to your app.
6. **Fresh Content is Always Readily Available** – PWAs use the service worker to push notifications that contain relevant, timely, and contextual notifications to the device, even when the browser is closed.
7. **Secure** – PWAs are secure when hosted over HTTPS as they are served via TLS between the user and server.
8. **Responsive** – PWAs can use responsive web design (RWD) techniques to match all of the combinations of mobile device make, models and versions for laptops, smart phones and tablets.
9. **Less Intrusive than Native Apps on The Device** – PWAs in general use less space on the device and use fewer resources, extending the device battery life and requiring less data usage as they can function under low to no bandwidth or even offline thanks to the service workers.
10. **PWAs Appear As Native App Interfaces** – PWAs are built using the application shell model with minimal page refreshes which makes them appear as if they are a native app interface, providing quick, smooth animations, scrolling, and navigations.
11. **Linkable and Sharable** &#8211; Since PWAs are essentially web pages, users are able to quickly and easily share and bookmark the URL, unlike native applications.
12. **Discoverable Through Search Engines** – Since PWAs are essentially websites, they are discoverable using search engines because of their W3C manifests and service worker registration, unlike native applications.
13. **The App Store is Not Required** – App stores create an added burden that is not needed for installation and upgrading of PWAs.

## What Are Some Challenges of PWAs?

Along with the advantages, PWAs bring challenges, and these may be deal breakers for some. Those of us that support all the makes, models and versions of devices and browsers may find that many of our customers will not be able to enjoy the PWA experience we are providing. Some examples of PWA challenges include:

1. **Not all Browsers are Supported** – While newer versions of Chrome, Opera, and Samsung’s Android browser support PWA, IE, Edge, Safari and many custom and proprietary default browsers do not. At this point, Safari alone has close to 50% of the mobile browser market.
2. **Not All Native Device Software Functionality is Supported** – PWA support is limited on Android devices, and they do not support functionality such as home screen shortcut prompting and notifications on iOS devices. In the U.S., iOS is about 50% of the mobile device market.
3. **Not All Native Device Hardware Functionality is Supported** – PWAs do not currently support all hardware components that traditional native apps support, including the camera, GPS, and fingerprint scanners.
4. **There is No Central Download Store**– Traditionally, app stores have been central repositories of applications helping users find apps and providing a level of legitimacy. PWAs do not require an app store and may have difficulty getting users to find their apps and instilling confidence that the apps are legitimate.
5. **Cross Application Logins are Not Supported** – Many third party applications that require a login, such as Facebook and Google, will continue to require their individual login as PWAs are unable to independently collect this data.

## What Are Some Examples of PWAs?

Using Gartner’s 2016 "[Hype Cycle for Web Computing](http://www.gartner.com/document/3398518)," PWAs are in the in the embryonic stage of the Gartner hype cycle and have a less than 1% penetration rate of target audience. This makes finding many PWAs difficult. However, one can experience firsthand a variety of PWAs on sites such as:

 - Progressive Web App Showcase &#8211; <a href="https://pwa.rocks/">https://pwa.rocks</a>
 - Google Progressive Web App &#8211; <a href="https://developers.google.com/web/progressive-web-apps/">https://developers.google.com/web/progressive-web-apps/</a>
 - Pokedex &#8211; <a href="https://www.pokedex.org/">https://www.pokedex.org/</a>
 - Flipkart &#8211; <a href="https://www.flipkart.com/">https://www.flipkart.com/</a>
 - Air Berlin &#8211; <a href="https://flights.airberlin.com/en-DE/progressive-web-app">https://flights.airberlin.com/en-DE/progressive-web-app</a>

## What is the Future of PWA?

There was a lot of interest in this approach from the community, but as you can see above there a lot of challenges. While their components are W3C compliant, when combined into a PWA they are not supported on many existing browsers. We will need to explore this new approach to mobile and will need [industry support](http://www.benfarrell.com/2016/02/26/progressive-web-apps/) to help us get PWAs supported in all browsers and development tools. PWAs are in their infancy, but have the potential to move from pack mule to workhouse of the Internet.

### Resources (in alphabetical order by title):

[A Beginner’s Guide to Progressive Web Apps](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/)

[Gartner’s 2016 “Hype Cycle for Web Computing”](http://www.gartner.com/document/3398518)

[Getting Started with Progressive Web Apps](https://addyosmani.com/blog/getting-started-with-progressive-web-apps/)

[Google Progressive Web App](https://developers.google.com/web/progressive-web-apps/)

[Progressive Web App Showcase](https://www.pwa.rocks)

[Progressive Web App Summit 2016 by Google Chrome Developers on YouTube](https://www.youtube.com/playlist?list=PLNYkxOF6rcIAWWNR_Q6eLPhsyx6VvYjVb)

[The State of Mobile: Exciting Times, Exploding Choices](http://sdtimes.com/the-state-of-mobile-exciting-times-exploding-choices/)

[3 Trends Shaping Mobile Development in 2016](https://adtmag.com/blogs/dev-watch/2016/01/mobile-dev-trends.aspx)

[Understanding Progressive Enhancement](http://alistapart.com/article/understandingprogressiveenhancement)

[Wait! The Web Isn’t Dead After All. Google Made Sure of It](https://www.wired.com/2016/04/wait-web-isnt-really-dead-google-made-sure/)

[What’s Your Mobile Development Strategy?](http://sdtimes.com/whats-your-mobile-deveolpment-strategy/)


_Are you developing or already using Progressive Web Apps? Let us know in the comments below!_
