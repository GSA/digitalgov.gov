---


date: 2016-09-16 2:00:24 -0400
title: 'How Much Does It Cost to Go Through FedRAMP?'
summary: 'One of the questions we get asked the most at FedRAMP from our vendors is\: &ldquo;How much will it cost me to get through FedRAMP?&rdquo; One of the reasons this is a hard question to answer is that comparing cloud providers to each other isn&rsquo;t even like trying to compare apples to oranges &ndash; those'
authors: [matt-goodrich]
categories:
  - Data
  - Managing Digital
tags:
  - cloud
  - data
  - FedRAMP
---

One of the questions we get asked the most at [FedRAMP](https://www.fedramp.gov/) from our vendors is: “How much will it cost me to get through FedRAMP?” One of the reasons this is a hard question to answer is that comparing cloud providers to each other isn’t even like trying to compare apples to oranges – those are both at least fruit. Comparing a global content distribution network to a government only ticketing and CRM solution and then comparing to a web-based agile project management tool is like comparing an apple to a bike to a television. The size, complexity, and scope of services of the systems varies greatly and makes a comparison incredibly hard.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/09/600-x-430-fedramp-their-Screen-Shot-2016-09-08-at-10.34.00-AM.jpg" alt="Money and time symbols" %}

But, just because a question is hard to answer doesn’t mean I shy away from trying to answer it. Recently I engaged with 4 of our cloud service providers to ask them to help us identify the overall costs for going through FedRAMP. In order to have a good place to start, I chose 4 vendors who were relatively similar. All 4 vendors owned their own infrastructure, three were IaaS solutions, one a SaaS solution. **They all also went through the JAB for their authorization through the old process prior to** [**FedRAMP Accelerated**](https://www.fedramp.gov/participate/fedramp-accelerated-process/). When talking to these providers, we knew there were lots of factors to consider in overall cost, so we tried to break it down into five main areas:

<li class="first-child">
  <b>Engineering</b> <ul>
    <li class="first-child">
      $1,100,000 average cost.
    </li>
    <li class="last-child">
      These are costs associated with implementing technical changes to a system to meet the Federal requirements at the moderate impact level (e.g. FIPS 140-2 encryption, PIV/CAC for authentication, etc.)
    </li>
  </ul>
</li>

  * **Documentation** 
    <li class="first-child">
      $400,000 average cost
    </li>
    <li class="last-child">
      These are costs associated with documenting the system in policies and procedures, the System Security Plan, Incident Response Plan, etc.
    </li>
  * **3PAO Assessment** 
    <li class="first-child">
      $500,000 average cost
    </li>
    <li class="last-child">
      These are costs associated with the independent assessment by a FedRAMP Accredited 3PAO including the development of a test plan, onsite assessment, creation of the security assessment report and briefings to authorizing officials.
    </li>
  * **FedRAMP JAB Review** 
    <li class="first-child">
      $250,000 average cost
    </li>
    <li class="last-child">
      These are costs associated with updates required due to meeting the JAB requirements (e.g. areas where a CSP didn’t fully meet the FedRAMP requirements prior to entering the assessment process).
    </li>
<li class="last-child">
  <b>Continuous Monitoring</b> <ul>
    <li class="first-child">
      $1,000,000 average cost
    </li>
    <li class="last-child">
      This is the yearly ongoing costs associated with monthly vulnerability scans, POA&M management, significant changes, and annual assessments.
    </li>
  </ul>
</li>

So the total median cost for a mid-range CSP was $2,250,000 to achieve a FedRAMP authorization. This splits pretty cleanly with about 50% of that being on engineering costs and 50% on the process itself. Additionally, about $1,000,000 a year maintaining an acceptable risk posture through Continuous Monitoring.

However, even with vendors with similar scopes and services – the variance between the four was large. The costs ranged from just under $500,000 for one vendor to a little over $4,000,000 for another vendor. When digging into these variances, there were three areas that significantly changed the costs for vendors:

<li class="first-child">
  Outside consultants helping with documentation increased the documentation cost but decreased the 3PAO Assessment and JAB Review costs.
</li>
  * 3PAO assessments ranged from one to six months for the CSPs, and (not shockingly) the cost associated with the audit was correlated to the length of the audit.
<li class="last-child">
  Engineering costs were greater for those companies whose systems were not initially built according to FedRAMP requirements (e.g. traditionally commercial system being “retrofitted” to meet Federal requirements).
</li>

One important thing to note, again, is that these baseline costs are associated with the old FedRAMP process and was before we introduced FedRAMP Accelerated. With the redesigned, reimagined process now being tested with three CSPs, we will ensure that Accelerated works for everyone. One way we’re going about this is to to compare and contrast the costs of the old process to Accelerated and to ensure we’re getting a greater ROI for both government and industry.

As we continue to iterate and upgrade FedRAMP Accelerated, we’ll be re-baselining the costs associated with the vendors currently involved to ensure that not only is the process faster and more transparent, but that it’s becoming more cost efficient as well. If you’re a vendor who would like to help us build out our baseline costs to better understand more factors that contribute to cost and nuances to our model, please reach out to us via [email](mailto:info@fedramp.gov)!

_This post was originally published on the [FedRAMP blog](https://www.fedramp.gov/focus-on-fedramp/)._