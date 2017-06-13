---


date: 2016-08-15 12:00:13 -0400
title: 'FedRAMP Weekly Tips &amp;#038; Cues &ndash; August 10, 2016'
summary: 'Many of &nbsp;our cloud service providers (CSPs), federal agencies, and third party assessment organizations (3PAOs) often &nbsp;share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we will be providing weekly tips and address frequently asked questions and concerns. This week&rsquo;s tips come from FedRAMP&rsquo;s Accelerated event. Read the'
authors: [fedramp]
categories:
  - Managing Digital
tags:
  - cloud
  - data
  - Federal Risk and Authorization Management Program
  - FedRAMP
  - security
---

Many of  our cloud service providers (CSPs), federal agencies, and third party assessment organizations (3PAOs) often  share common issues and questions when going through the FedRAMP process. To help guide our stakeholders, we will be providing weekly tips and address frequently asked questions and concerns.

This week’s tips come from FedRAMP’s Accelerated event. Read the full list of questions asked during FedRAMP Accelerated [here](https://www.fedramp.gov/fedramp-webcasts/).

Send potential tips and questions that you would like published as a tip [via [email](mailto:info@FedRAMP.gov)]. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/08/600-x-348-Cloud-Kalawin-iStock-Thinkstock-470542178.jpg" alt="Kalawin/iStock/Thinkstock" %} 

## **Federal Agencies**

### _Question:_

Do Federal Agencies need an Interconnection Security Agreement (ISA) with a CSP?

### _Answer:_

Interconnection Security Agreements (ISAs) are not designed for use between a CSP and Federal Agency. An Agency ATO memo should be the governing document for Agency and CSP interaction and security requirement communications. CSPs should document security protections in place for agency access – whether through dedicated connections or publicly routable internet space. This documentation should be included within the standard FedRAMP-required templates, policies, and procedures.

Agencies should follow the documented processes for issuing ATOs included in the FedRAMP guidance and documentation available on [FedRAMP.gov](https://www.fedramp.gov/):

<li class="first-child">
  <a href="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/03/Guide-to-Understanding-FedRAMP-v2.0-4.docx">Guide to Understanding FedRAMP</a>
</li>
  * [Agency Guide for FedRAMP Authorizations](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/08/Agency-Guide-for-FedRAMP-Authorizations_FINAL.pdf)
<li class="last-child">
  <a href="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/482/2015/09/FedRAMP-Agency-ATO-Quick-Guide-v2-1.pptx">Agency ATO Quick Guide</a>
</li>

<p class="gd_p">
  CSPs should also continue to utilize ISAs for cloud system interconnections that fall within the scope of the cloud boundary. These ISAs will be reviewed as part of the security assessment and testing process by 3PAOs and testing for control CA-3. The FedRAMP Agency or JAB P-ATO process should be the mechanism for validating ISA documentation.
</p>

## **Federal Agencies**

### _Question:_

How can a federal organization ensure it maintains reasonable investigation capabilities, auditability, and traceability of data within the cloud?

### _Answer:_ {.gd_p}

<p class="gd_p">
  Federal Agencies can ensure they maintain reasonable investigation capabilities, auditability, and traceability of data by logging and monitoring the following application events:
</p>

<li class="first-child">
  Management of network connections
</li>
  * Addition or removal of users
  * Management of changes to privileges
  * Assignment of users to tokens
  * Addition or removal of tokens
  * Management of system administrative privileges access
  * Actions by users with administrative privileges
  * Use of data encrypting keys
  * Management of key changes
  * Creation and removal of system level objects
  * Import and export of data, including screen based reports
<li class="last-child">
  Submission of user-generated content, especially file uploads
</li>

_This post was originally published on the [FedRAMP blog](https://www.fedramp.gov/category/newsroom/)._