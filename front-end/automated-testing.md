---
layout: primary
title: Automated testing
permalink: /front-end/automated-testing/
category: Front-end development
sidebar: frontend
question: Did your accessibility testing tools provide accurate results?
---

**Why it's important:** Including automated accessibility testing throughout the development process can help quickly catch [many accessibility errors](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/), but can’t guarantee that your site is accessible. Always combine automated testing with ongoing manual testing. Manual testing is the most reliable method to assess accessibility. 

### Steps to take
- **Quick check**: Use a tool to quickly check for common errors in your browser. You can use [HTML CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US), [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse/), [Accessibility Insights](https://accessibilityinsights.io/), or [WAVE](http://wave.webaim.org/extension/).
- **Build process**: Integrate a tool like [axe-core](https://github.com/dequelabs/axe-core), [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically), or [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master) into your project to programmatically add accessibility tests and catch errors as you build out your website.
- **Continuous integration**: Use a tool like [AccessLint](https://www.accesslint.com/) to find accessibility issues in your GitHub pull requests.
- **Simulate impairments**: Use tools to simulate color blindness, low vision, zoom, low contrast, high contrast, and more.

#### Resources
<a href="https://youtu.be/cOmehxAU_4s?t=8m57s">
  <i class="fa fa-youtube-play" aria-hidden="true"></i>Video tutorial: How I do an accessibility check (tools and extensions)
</a>

- [GOV.UK: What we found when we tested tools on the world’s least-accessible webpage](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/)
