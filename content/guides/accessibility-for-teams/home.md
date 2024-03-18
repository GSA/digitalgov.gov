---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Home
permalink: /
---

<div class="home-list">
  <div class="grid-container">
    <div class="grid-row">
    <div class="grid-col-12">
      <p class="home-list-text">Everyone who works on government websites has a role to play in making federal resources accessible and inclusive.</p>
      <p class="home-list-text"><b>Choose the guide that fits your role:</b></p>
      <ul class="home-roles-list grid-row">
        <li class="grid-col-12 tablet:grid-col-fill">
          <a href="{{ site.baseurl }}/product/getting-started/">
            <img src="{{ site.baseurl }}/assets/img/icons/product.svg" alt="">
            <p>Product</p>
          </a>
        </li>
        <li class="grid-col-12 tablet:grid-col-fill">
          <a href="{{ site.baseurl }}/content-design/getting-started/">
            <img src="{{ site.baseurl }}/assets/img/icons/content.svg" alt="">
            <p>Content</p>
          </a>
        </li>
        <li class="grid-col-12 tablet:grid-col-fill">
          <a href="{{ site.baseurl }}/ux/getting-started/">
            <img src="{{ site.baseurl }}/assets/img/icons/ux.svg" alt="">
            <p>UX</p>
          </a>
        </li >
        <li class="grid-col-12 tablet:grid-col-fill">
          <a href="{{ site.baseurl }}/visual-design/getting-started/">
            <img src="{{ site.baseurl }}/assets/img/icons/visual-design.svg" alt="">
            <p>Visual design</p>
          </a>
        </li>
        <li class="grid-col-12 tablet:grid-col-fill">
          <a href="{{ site.baseurl }}/front-end/getting-started/">
            <img src="{{ site.baseurl }}/assets/img/icons/front-end.svg" alt="">
            <p>Front end</p>
          </a>
        </li>
      </ul>
      <p class="home-roles-note">These roles are based on the roles we have at the Technology Transformation Services at GSA.</p>
    </div>
    </div>
  </div>
</div>

{% capture home-2 %}
**This guide provides:**
{: .home-about-heading }

<ul class="list-none">
  <li>
    <i class="fa fa-circle" aria-hidden="true"></i>
    <span>An overview of how each team member can contribute to a product's accessibility</span>
  </li>
  <li>
    <i class="fa fa-circle" aria-hidden="true"></i>
    <span>A framework for thinking about accessibility and inclusive design in your role</span>
  </li>
  <li>
    <i class="fa fa-circle" aria-hidden="true"></i>
    <span>An understanding of the human need behind accessibility practices</span>
  </li>
</ul>

We focus on the issues most likely to impact government sites. These guidelines do not provide a comprehensive list of all possible issues. Your team will need additional resources and work to conduct manual audits to conform to the standards of [Section 508](https://www.section508.gov/) (which aligns with the [W3C Web Content Accessibility Guidelines (WCAG) 2.0 Level AA](https://www.w3.org/WAI/WCAG20/quickref/)), a law that ensures all web content is accessible to anybody with a disability.

{% endcapture %}

<div class="grid-container usa-prose home-section-about">
{{ home-2 | markdownify }}
</div>
