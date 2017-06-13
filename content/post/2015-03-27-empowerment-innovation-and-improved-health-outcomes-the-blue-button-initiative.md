---


date: 2015-03-27 10:00:40 -0400
title: 'Empowerment, Innovation, and Improved Health Outcomes\: the Blue Button Initiative'
summary: 'Finding and getting access to our own health information can be a complex process. And most of us don&rsquo;t really think about having our health information readily accessible until we really need it &ndash; like in the event of an emergency, or when switching doctors or traveling. Combing through stacks of paperwork and contacting providers'
authors: [awichman]
categories:
  - API
  - Code
  - Data
  - Monthly Theme
tags:
  - API
  - Centers for Medicare and Medicaid Services
  - data
  - data.gov
  - HHS
  - Internet of things
  - json
  - open government
  - United States Department of Health and Human Services
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/600-x-400-Medical-form-Slawomir-Fajer-iStock-Thinkstock-ThinkstockPhotos-167343015.jpg" alt="Medical form and laptop" %} 

Finding and getting access to our own health information can be a complex process. And most of us don’t really think about having our health information readily accessible until we really need it – like in the event of an emergency, or when switching doctors or traveling. Combing through stacks of paperwork and contacting providers is daunting for even the most organized among us. However, this familiar scenario is being reimagined.

The [Blue Button Initiative](http://www.healthit.gov/patients-families/blue-button/about-blue-button) is a partnership between the federal government and the healthcare industry focused on increasing individuals’ access to their health information electronically and in a format they can use and re-use. Increased transparency and easier access to information empowers people to make informed decisions about their health, care for their family members, share information with providers, and check their information for accuracy. The initiative is led by the [Office of the National Coordinator for Health Information Technology](http://www.healthit.gov/newsroom/about-onc) (ONC) in the U.S. Department of Health and Human Services (HHS).

## Data for Patient Education and Empowerment

The [Blue Button Connector website](http://bluebuttonconnector.healthit.gov/) educates people about all the various places where their health data may reside. Health records are maintained by a variety of organizations: health insurance companies, clinics, hospitals, pharmacies, labs, and immunization registries. Visitors to the Blue Button Connector website can search for an organization and be taken directly to the place where they can follow log-in directions to access their information.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/250-x-210-Blue-Button-Initiative-logo.jpg" alt="The Blue Button® logo." %}Through the commitments from more than 600 organizations who have taken the [Blue Button Pledge](http://www.healthit.gov/patients-families/pledge-info), the ONC team estimates that more than 150 million Americans have access to data from their healthcare providers, health insurance companies, labs, and/or pharmacies. The Blue Button symbolizes placing control of health data in patients’ hands, enabling the idea of ‘consumer empowerment’ to take on real and practical meaning.

Accessing and using one’s own health information is still a new concept for most Americans and the experience of gathering and aggregating health data is still burdensome, especially in rural and underserved communities.

## Data for Innovation

Data flowing from institutions to consumers through Blue Button also serves as fuel for innovation. The Connector provides a [listing of healthcare apps](http://bluebuttonconnector.healthit.gov/apps/) that are available to help people make use of their data. The Connector also provides entrepreneurs with transparency regarding what types of electronic health data are available and from where to stimulate the development of new products and services for consumers. The Connector is built on an open source API, with [documentation](http://bluebuttonconnector.healthit.gov/developers/) available on the Blue Button website.

To support collaboration, agencies have adopted an open government approach, making detailed information, including Blue Button sample files, available to the public via [Data.gov](http://www.data.gov/).

## Looking to the Future

ONC and its federal partners have identified several future focus areas for Blue Button, as the initiative continues to build momentum:

  * **Monitoring patient access** to ensure the benefits are accruing to all
  * **Identifying and removing any barriers** to patients exercising their legal right to their health information in an electronic format if it is available that way
  * **Continuing to conduct research** to understand and improve the consumer experience of accessing and using digital health information
  * **Continuing to get the word out** about the importance of having access to health information and to encourage people to take action to gather their information
  * **Demonstrating Blue Button’s impact** on health outcomes, health costs, and other important indicators through community-led demonstrations

Previous research has already shown that Blue Button is seen as a valuable tool: 87% of respondents in a [Veteran Affairs survey](http://www.hsrd.research.va.gov/research/abstracts.cfm?Project_ID=2141701657) perceived that having access to Blue Button information was helpful to their care provider in making decisions about their care.

HHS is looking ahead at how new data sets, such as streams of data coming from “Internet of Things” connected devices, will lead to breakthroughs in personalized medicine, independent living for seniors, and more engaged consumers.

Developers in the federal space are also moving forward with Blue Button projects, and [apps using Blue Button standards](http://bluebuttonconnector.healthit.gov/apps/) can be found on the Connector site.

## Consumer Health Information Exchange via APIs


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/03/250-x-260-Blue-Button-Initiative-app-GenieMD-with-4.5-ratings-from-many-Apple-and-Android-users.jpg" %}Blue Button is supported by a portfolio of standards, including those developed by [Health Level Seven International](http://www.hl7.org/index.cfm) (HL7), a not-for-profit organization that develops standards for the exchange, integration, sharing, and retrieval of electronic health information. HL7’s Fast Healthcare Interoperability Resources (FHIR) create machine and human readable health standards that can be easily transported via secure Internet protocol over HTTPS (RESTful API).

Gajen Sunthara, Presidential Innovation Fellow at ONC, is building a public facing FHIR server within ONC’s Standards Implementation Testing Environment (SITE).

“This public facing FHIR server will allow startups and enterprises to build innovative health software applications with our sample data sets that will output JSON/XML in FHIR specifications standards,” Sunthara said. “For developers, this is music to their ears when working with RESTful API’s using JSON data sets.”

## Blue Button on FHIR

Mark Scrimshire, HHS Entrepreneur-in-Residence at the Centers for Medicare & Medicaid Services (CMS), is taking the FHIR Server code base developed by Sunthara and integrating it into a Blue Button on FHIR RESTful API data service for Medicare beneficiaries, using the [MyMedicare website](https://www.mymedicare.gov/).

This work includes defining a CMS Blue Button structured data format in JSON and XML, which can be used by Blue Button on FHIR to enable beneficiaries to connect their CMS data to the applications and services they trust, such as third-party mobile applications. This work also supports the health data interoperability objectives in HHS’s [Precision Medicine initiative](http://www.nih.gov/precisionmedicine/).

_If you’re interested in getting involved with Blue Button, FHIR, or any of ONC’s work to support patient engagement and innovation, contact the team on Twitter: Maya Uppaluru ([@mayauppaluru](https://twitter.com/@mayauppaluru)), Simone Myrie ([@myrietash](https://twitter.com/@MyrieTash)), and Erin Siminerio ([@epoetter](https://twitter.com/@epoetter))._