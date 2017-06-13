---


date: 2016-02-23 1:00:27 -0400
title: 'The Benefits of Being Push-y\: Reaching Your Audience Through Push Notifications'
summary: 'Need to get in touch with your audience? Give them a little push. Push notifications allow agencies to connect with their audiences for immediate communication. The Office of Personnel Management&rsquo;s OPM Alert app provides a real time look at the current operating status for federal offices in the Washington, DC, area and uses push technology'
authors: [awichman]
categories:
  - Mobile
tags:
  - mobile
  - mobile apps
  - OPM
  - United States Office of Personnel Management
---

Need to get in touch with your audience? Give them a little push.

[Push notifications](https://www.WHATEVER/2015/06/30/trends-on-tuesday-native-app-push-notifications-drive-repeat-use/) allow agencies to connect with their audiences for immediate communication. The Office of Personnel Management’s [OPM Alert app](https://www.opm.gov/policy-data-oversight/snow-dismissal-procedures/mobile-app/) provides a real time look at the current operating status for federal offices in the Washington, DC, area and uses push technology to alert users of status changes. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/02/600-x-400-Push-notifications-elements-set-dark-Background-Olyzel-iStock-Thinkstock-488569892.jpg" alt="Push notifications elements set" %} 

While the most well-known use of the OPM Alert is for weather closings, the app can be used to alert users of other events: for example, the app was used to announce the lapse in federal appropriations in 2013 and the resulting office closures (and the later re-opening). Users are able to opt-in for the type of alerts they want to receive.

The app is available on [iOS](https://itunes.apple.com/us/app/opm-alert/id627986929?mt=8), [Android](https://play.google.com/store/apps/details?id=gov.opm.status), [Windows Phone](https://www.microsoft.com/en-us/store/apps/opm-alert/9nblggh0j7g6), and [Blackberry](https://appworld.blackberry.com/webstore/content/26089873/?countrycode=US&lang=en).

## Why Push?

A developer for OPM Alert said that the app development team considered several notification options before deciding on push.

“There is no reason to do this app without the push,” the OPM developer said. “The focus of the app is: status updates at whatever time they happen. Nobody is aware or waiting for them, and they need to know that a status update has occurred via push notification. We looked at different notifications—SMS or native push—and because of costs and ease of implementation, we decided to focus on native push.”

## Building the App

Because the OPM team wanted to support apps on four platforms, at the time there was only one vendor capable of doing so.

“We found [a company that] was working on their alpha API for push notifications on Windows Phone, and they had a good service level agreement (SLA) for government,” said the developer. “We went with [that company] and worked with them on their alpha. We were able to apply it with advanced segmentation: we had to allow not just push for everyone, but also for people who want push for unscheduled closing, or unscheduled telework, or other options.”

OPM needed to have the capacity to push to 100,000 addressable devices every five to ten seconds. The team considered building their own push notification server but recognized that the costs to build and maintain the server made an outside vendor more feasible.

## Coordinating the Effort

Ty Hughes, Web Services Manager at OPM, said one of the most important aspects of the app from a business and customer standpoint is coordination with program offices and OPM in general.

“When the notification goes out, and we update the status on the app itself, we have to make sure the recorded message for the OPM phone line is changed in concert with the status as well as the social media feeds,” Hughes said. “Nothing would cause more confusion than conflicting messaging.”

The team conducts readiness exercises to confirm that both the apps and coordination process are running smoothly. Winter is the busiest alert season, and the team recently did a practice run in preparation. The app also sends out a push notification every night when the status updates, which is a good way for the team to test the app, the developer said. The team’s developers have the app installed, and if someone doesn’t get the daily alert, they can explore why. So far, the only time an alert didn’t arrive was due to an expired certificate, and because of the test, the issue was caught and addressed the following day.

## The Push Effect

Whenever there is a possible event in the DC area, the OPM team sees a spike in traffic. When Hurricane Joaquin was coming along the east coast, there were 1,200 new downloads, compared to 100 downloads on a nice weather day.

The mobile app also has analytics that allow the team to see real time views.

“Prior to a status update, we might have a couple of hundred people on the mobile app,” the developer said. “As we approach the time when we see updates occurring (the 3 am &#8211; 5 am time frame), we start to see Web statistics that show traffic tick up to 300 to 400 users.  When we make the update, and the notification goes out, there is an 8 minute delay between when we put it out and when the push is received (we have to clear our Akamai cache). When the push goes out, within 2 to 3 minutes, the real time users spike to 5,000 &#8211; 15,000 users. We’ve seen as high as 25,000 users on the mobile app after the alert goes out. Throughout the course of the day, we see 1 million to 2 million unique users between the app and website.”

Traffic between the mobile and desktop versions is split, with 50% typically using each platform. It’s also noteworthy that the app has been adopted outside the DC area: the app has ‘quite a few’ users in Germany that check it to see why they can’t get in touch with people in DC, the developer said.

## Lessons Observed

Through observation the team has identified several issues since launching the app. Below are a few highlights:

<li style="margin-bottom: 15px">
  <strong>Never underestimate how quickly your app can be adopted.</strong> “Luckily, we were going on the side of assuming far too aggressive adoption, but it still surpassed our expectations,” the developer said. “We over planned and could accommodate. I thought 50,000 downloads in the 1st year would be a win; in the first year, we had 200,000 downloads.”The team estimated their numbers based on what other agencies with operating status apps had seen. Currently, there have been more than 500,000 installs. The developer noted that the SLA needs to be based on addressable devices that actually receive push notifications, not on installs: Fewer people are receiving push than the total number who have installed the app.
</li>
<li style="margin-bottom: 15px">
  <strong>Push notifications can be terrifying; </strong>plan and test accordingly.&#8221;Push notifications are so permanent once they go out,” the developer said. “You have to make sure that once users receive the notifications, everything is reflective of those notifications. The worst thing to have happen would be to have a cache that wasn’t clear, and when they clicked on the status that they see is closed, they go to the website and see something that still says open.”
</li>
  * **Stay apprised of recent developments within the various mobile platforms** so that you can stay on top of any updates that would affect the push notifications.“We’ve been lucky that [the company we work with] handles Apple, Android, Microsoft, and Blackberry push platform updates for us,” the developer said. “But, I know people who have built their own server solutions and run into extended periods of downtime because of changes at the end point that they were not aware of until something actually broke.” Recently the team released v 2.0.1 of the app to make it compatible with iOS9.

## Looking Ahead

Although the OPM Alert app is currently limited to the DC region, there are many ideas on how it can be expanded.

“We are interested in introducing geolocation, so if you are in a field office you can update,” Hughes said. “We are also looking at leveraging this app for an internal notification system and for segmentations. For example, if there is an all OPM alert that goes out over the device instead of an email, we want to be able to segment: all of CIO, all of the Office of Communications, all of ‘Field Office X’ for example.”

There are several reasons segmentation would be beneficial, Hughes said. For example: if there was a power outage in the DC office, and some people are in the building and others are teleworking, it could impact communication channels. Users could get that alert on their phone. It could also be used for alerting employees of a cybersecurity issue, like a virus being circulated through email.

The developer noted that while push is effective, there are limitations.

“We use a native app, but it requires a smartphone,” the developer said. “What about people who are not in that scenario? We knew our population and what our target was. To expand outside of a native app, for something like SMS, we’d have to use something other than push notifications, and that’s when we get into the charges that come along with messaging rates. It would be interesting how we’d handle that in the future if it becomes a requirement. We use an API that could be expanded, and it could be expanded to include SMS notification.”