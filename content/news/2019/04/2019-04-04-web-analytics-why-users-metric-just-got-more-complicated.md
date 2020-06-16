---
slug: web-analytics-why-users-metric-just-got-more-complicated
date: 2019-04-04 13:51:00 -0500
title: 'Web Analytics: Why the Users Metric Just Got More Complicated'
deck: 'A look at how the new Safari policy will alter your web analytics benchmarks.'
summary: 'A look at how the new Safari policy will alter your web analytics benchmarks.'
authors:
  - tlowden
categories:
  - metrics
tag:
  - analytics
  - dap
featured_image:
  uid: dap-new-returning
  alt: ''

---

Making sense of web analytics data is difficult in itself – there is a lot of terminology, learning curves for tools, and troubleshooting implementations. Unfortunately for web analysts, things just got a bunch harder when WebKit (which powers Safari, [among other projects](https://en.wikipedia.org/wiki/WebKit)) implemented [“Intelligent Tracking Prevention” (ITP) version 2.1](https://webkit.org/blog/8613/intelligent-tracking-prevention-2-1/) in March, 2019.

ITP 2.1 has its roots in a noble cause – essentially, stopping ad networks from tracking users across domains and building profiles to target ads. Most of us outside of the marketing world applaud such an initiative. Unfortunately, in doing so, the way web analytics work for all of us, including those of us just trying to improve user experiences, is changing.

### So What’s the Big Deal?

The biggest takeaway for us is:

“With ITP 2.1, all persistent client-side cookies, i.e. persistent cookies created through document.cookie, are capped to a seven day expiry.”

Essentially, that means that the persistent cookie used by web analytics tools to determine if a user is new or returning (the Google Analytics cookie has a default expiration of 24 months) will be forced to expire after seven days. So, if a user visits a site on Safari and returns just eight days later,that user will appear as a “new user” rather than a “returning” user (and count as two total users rather than one).

{{< img src="dap-new-returning" >}}

Another change is that both cross-domain and cross-subdomain tracking will be limited. A site would have to use the [Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) and obtain consent from the user to do so. That said, this change is less of a worry for most [Digital Analytics Program](https://digital.gov/dap/) (DAP) sites since DAP has no cross-domain tracking turned on by default.

While the only major player to implement these new settings at the moment is Safari (which [accounts for over 30%](https://analytics.usa.gov/) of sessions to DAP sites at the moment), other major browsers will probably follow suit.

### OK, but How Does It Affect Reporting?

Mainly, if you track “users,” “new users,” or “returning users” as a key performance indicator (KPI), you need to be aware that those numbers are going to change as a result of ITP 2.1.

If you regularly tune in to DAP [trainings](https://www.youtube.com/playlist?list=PLd9b-GuOJ3nFwlyvLFUtmDpYFKezhot8P), you’ll probably remember our team talking about how “users” metrics were already somewhat flawed, in our opinion, because of the inability to track users across devices (for example, a user who visited a site on a laptop and then on a mobile device would look like two new users instead of one returning user).

Regardless, those users metrics will shift from their previous benchmarks as a result of this change. You will most likely see more new users and less returning users from March 2019 on. If you need to prepare your leadership for that, we suggest you start immediately!

### Is DAP making any changes as a result?

Not at the moment. We want to see how this affects reporting before assessing how we react, if we react at all. At the time of writing, Google Analytics has issued no statement on ITP 2.1.

There are analytics blogs that offer [suggestions](https://www.simoahava.com/analytics/itp-2-1-and-web-analytics/) to counter negative effects that may interest you for non-DAP implementations. 

### In conclusion

Keep in mind that while this is only affecting Safari for now on both MacOS (desktop) and iOS (mobile), other browsers may follow, so, setting benchmarks for users metrics may be difficult until all the ITP 2.1 dust settles. We felt it was important for DAP users to understand and be prepared for this change.

As always, if you have questions or need help explaining these changes to leadership, contact us at [dap@support.digitalgov.gov](mailto:dap@support.digitalgov.gov).

