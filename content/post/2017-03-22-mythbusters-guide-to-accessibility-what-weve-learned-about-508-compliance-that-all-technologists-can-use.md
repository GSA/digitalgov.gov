---


date: 2017-03-22 12:14:30 -0400
title: 'Mythbuster&rsquo;s Guide to Accessibility\: What We&amp;#8217;ve Learned About 508 Compliance That All Technologists Can Use'
summary: 'As government technology improves and accelerates, the U.S. Digital Service has the opportunity to improve the most critical public-facing services across agencies. The services and products we create need to be accessible to everyone. Too often, we&rsquo;ve seen others neglect accessibility because of some common misconceptions that make things difficult. In this post, we&rsquo;ll debunk'
authors: [nick-heiner]
categories:
  - Accessibility
  - Design
  - UX
tags:
  - accessibility
  - U.S. Digital Service
  - USDS
  - user experience
  - UX
---

As government technology improves and accelerates, the U.S. Digital Service has the opportunity to improve the most critical public-facing services across agencies. The services and products we create need to be accessible to everyone. Too often, we’ve seen others neglect accessibility because of some common misconceptions that make things difficult. In this post, we’ll debunk these myths, so you can easily create universally accessible content.

## Myth #1: Government accessibility is harder than it is in the private sector.

_Reality: Accessibility is the same inside and outside the government._

Government accessibility standards are defined by Section 508, enacted as an amendment to the Rehabilitation Act of 1973, to knock down barriers to technology for those with disabilities. (Section 508 talks about all sorts of technology, but in this post, we’ll be focusing exclusively on common consumer tech like websites and apps.)

Section 508 doesn’t have any requirements that wouldn’t also make sense in the private sector. It lines up almost exactly with the <a class="markup--anchor markup--p-anchor" href="https://www.w3.org/WAI/intro/wcag" target="_blank" rel="nofollow noopener">Web Content Accessibility Guidelines (WCAG)</a>, which is a set of standards authored by industry experts, and backed by the <a class="markup--anchor markup--p-anchor" href="https://www.w3.org/" target="_blank" rel="nofollow noopener">World Wide Web Consortium (W3C)</a>.

Section 508 itself is quite simple. The core requirement is that everyone has comparable access to services and products:

> _[I]ndividuals with disabilities … have access to and use of information and data that is comparable to that provided to … individuals with[out] disabilities._ <a class="markup--anchor markup--blockquote-anchor" href="https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards#subpart_a" target="_blank" rel="nofollow noopener">36 CFR 1194.1</a>

If your app provides comparable access to users with a disability as those without one, then it’s 508 compliant.

## Myth #2: Accessibility requires very specific implementations.

_Reality: Content is accessible when it can be used by users with a disability, period. There are many ways to achieve this. Following a particular implementation pattern is not necessary to achieve accessibility._

WCAG provides the industry-recognized set of standards for accessible content. It’s written as a set of technology-agnostic criteria, such as:

> _2.4.6 Headings and Labels: Headings and labels describe topic or purpose._

Depending on the context in which you’re building, headings and labels may be implemented in different ways. On the web, for instance, you’d use an 

# tag for a page heading.</p> 

When you’re trying to make content accessible, you may hear that you must use a particular implementation method. This is simply not true — WCAG does not require any particular implementation. Focus on the “what” not the “how.”

## Myth 3: It’s possible to build something that’s 100% accessible.

_Reality: No product is perfect by any metric._

Fixing 100% of reported accessibility defects is not a reasonable goal, just like you wouldn’t expect to ship with zero known bugs or a perfect user experience for users without a disability. How much you invest in UX is a judgement call, and eventually you have to ship. 508 only requires a user experience that’s “comparable” between user with and without a disability; it doesn’t require either of those user experiences to be perfect.

## Myth 4: It’s easy to treat accessibility as an afterthought.

_Reality: Designing for accessibility from the beginning is way easier._

Just like mobile has different design considerations than desktop, so does accessibility. Many designs are going to be onerous to make accessible after the fact. You can save a ton of development time and headaches by baking accessibility in upfront.

Visually-impaired users interact with a UI in a fundamentally different way than sighted users. Sighted users can visually absorb the entire page at once, and quickly jump around to what appears to be the most relevant content. Non-sighted users perceive a page linearly, as a single stream of text served through a screenreader. Designers should consider both methods of interaction. And to validate both these approaches, user testing should be done with both sighted and non-sighted users.

The <a href="https://18f.gsa.gov/2015/09/28/web-design-standards/" target="_blank" rel="nofollow noopener">U.S. Web Design Standards</a> provide guidance for accessibility out of the box. If you’re working for the government, you can start with the U.S. Web Design Standards and know that you’re building on a good, accessible foundation. Additionally, each UI component in the Standards offers guidance for how to ensure accessibility.

## Myth 5: Implementing accessibility can only be done by 10x Rockstar Ninja Guru A-Player Front-End Engineers

_Reality: Accessibility is straightforward for mid-level developers._

If you write semantic, standards-conformant code, you’ll get a lot of accessibility support out of the box. To provide assistive technology additional clues about how your content is structured, you can use <a href="https://www.w3.org/WAI/intro/aria" target="_blank" rel="nofollow noopener">ARIA</a>.

For instance, consider the following table:

![](https://cdn-images-1.medium.com/max/1600/1*a-vpzuV8bS9SRLCaj28xAg.png)

To a sighted user, it’s obvious that the title “Overview By Tax Year” is related to the table. However, just by looking at the markup, a screenreader may not be able to draw the same conclusion:

<pre><h3>
  Overview By Tax Year
</h3>


<table>
  <!-- ... --></pre>
  
  
  <p>
    To explicitly link the two, we use <code>&lt;a href="https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby" target="_blank" rel="nofollow noopener">aria-labelledby&lt;/a></code>:
  </p>
  
  
  <pre><h3 id="overview-by-tax-year-table-title">
  Overview By Tax Year
</h3>


<table aria-labelledby="overview-by-tax-year-table-title">
  <!-- ... --></pre>
  
  
  <p>
    This way, the screenreader is able to provide a richer experience.
  </p>
  
  
  <h2>
    Myth 6: Testing can be done without consulting assistive technologies or users with disabilities.
  </h2>
  
  
  <p>
    <em>Reality: The only way to ensure that users with a disability get a comparable experience is to test with them and the tools they use.</em>
  </p>
  
  
  <p>
    Non-sighted users, for instance, use screen readers that read an app’s content aloud instead of displaying it on a screen. The only way to know if your content works well on a screen reader is to try it out — automated scanners or reading the code yourself will only catch a few issues. Many operating systems, like iOS, macOS, and Android, have free screen readers built in.
  </p>
  
  
  <h2>
    Myth 7: Text-Only versions of your content are accessible.
  </h2>
  
  
  <p>
    <em>Reality: “Separate but equal” accommodations are a lose-lose.</em>
  </p>
  
  
  <p>
    If it’s hard to make your content accessible, it may be tempting to make a separate text-only version, that doesn’t have styling or interactivity. This is not a good solution. Users with a disability do not like being sent off to a separate experience, and frequently find that the text-only version is an afterthought that receives updates much less frequently than the main version. This is not the “comparable experience” that Section 508 requires. And, it costs you more to maintain multiple versions.
  </p>
  
  
  <h2>
    Conclusion
  </h2>
  
  
  <p>
    Accessibility isn’t crazy voodoo magic. If you’re comfortable building modern apps, you can easily pick up the skills necessary to make your content accessible. Being thoughtful about accessibility is a win-win: you get more users, and everyone can benefit from your creation.
  </p>
  
  
  
  <p>
    <em>Nick Heiner is a Software Engineer for the U.S. Digital Service (USDS).</em>
  </p>
  
  
  <p>
    <i>This post was originally published on the <a href="https://www.usds.gov/blog">USDS blog</a>.</i>
  </p>