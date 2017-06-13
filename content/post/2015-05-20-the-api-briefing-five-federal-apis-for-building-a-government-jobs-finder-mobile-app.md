---


date: 2015-05-20 10:00:43 -0400
title: 'The API Briefing\: Five Federal APIs for Building a Government Jobs Finder Mobile App'
summary: 'The spring semesters are winding down at the universities where I teach. Many students are looking for summer internships or their first job after graduation. Of course, I talk about the opportunities in government through the Pathways program, the Presidential Management Fellows, or the various agency-specific internship programs. I&rsquo;ve demonstrated USAJOBS in my classes, but'
authors: [bbrantley]
categories:
  - API
tags:
  - API
  - DigitalGov Search
  - mobile apps
  - Wednesday API Briefing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-400-Search-jobs-on-newspaper-in-tablet.-Conceptual-image-Bet_Noire-iStock-Thinkstock-459384559.jpg" alt="Search jobs on newspaper in tablet. Conceptual image" %} 

The spring semesters are winding down at the universities where I teach. Many students are looking for summer internships or their first job after graduation. Of course, I talk about the opportunities in government through the Pathways program, the Presidential Management Fellows, or the various agency-specific internship programs. I’ve demonstrated USAJOBS in my classes, but I often wondered how to improve the experience for job seekers, especially for job seekers who prefer to use mobile apps. The following are five APIs that I would join to build a government jobs finder mobile app.

The foundation API for the mobile app will be <a href="https://data.usajobs.gov/Rest" target="_blank">USAJOBS Job Opportunity Announcements (JOA) API</a>. The JOA API provides the same announcement information that a user would find on the USAJOBS website. This is a <a href="http://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST API</a> and allows for querying by such fields as an organization, title, location, and series. USAJOBS has a search agent that emails the user when jobs fitting the user’s interests are announced. It would be great to integrate the closing dates with the mobile app user’s preferred reminder service such as Google Calendar.

DigitalGov Search also offers a <a href="http://search.WHATEVER/developer/jobs.html" target="_blank">Jobs API</a> that provides local, state, and federal job openings. Users can query the Jobs API just like querying the USAJOBS JOA API: by location, by agency, by keywords, by date, or a combination of parameters. I ran a few test queries, and it seems that for federal jobs, both the JOA API and the Jobs API return the same results. So, a developer may want to use the JOA API for federal jobs and adding the Jobs API when expanding the search to local and state jobs.

Two additional APIs for the government jobs finder app are the <a href="http://www.usa.gov/About/developer-resources/federal-agency-directory/index.shtml" target="_blank">Federal Agency Directory API</a> and the <a href="http://www.usa.gov/About/developer-resources/social-media-registry.shtml" target="_blank">Social Media Registry API</a>. The Federal Agency Directory API provides contact information for a specified federal agency such as the address and phone numbers. The user can use the directory information to learn more about the agency and whom to contact for more information.

The Social Media Registry API provides verification of the official social media accounts for agencies and government officials. Thanks to social networks like Twitter, Facebook, and LinkedIn, many job seekers and employers are sharing information about jobs through online word-of-mouth. Federal agencies also pass on information about job openings in their social network accounts. The reason to include the Social Media Registry API is so that the job seeker can verify that the social account is an official registered social media account of the federal agency.

The fifth API is the <a href="http://jobcenter.usa.gov/apis" target="_blank">American Job Center Resource API</a> which is still in beta. The purpose of the American Job Center Resource API is to provide a vocational interest assessment instrument that helps job seekers understand their career interests. After assessing their vocational options, job seekers can then better target their government jobs search by searching for specific occupations.

So, as you can see, my proposed government jobs finder mobile app would take the job seeker through the whole job seeking process. Users start by learning more about their career interests and use that information to help narrow down their search on USAJOBS and the Jobs API. Once users have found federal agencies they are interested in, they can obtain agency contact information and even map the directions to the job interview. Job seekers can then augment their search by using social media and be assured that they are viewing only official social media accounts for federal agencies. All this from the convenience of the jobseeker’s smartphone or tablet.

(_Twitter, Facebook, LinkedIn, and Google Calendar are only used for illustrative purposes and does not imply endorsement by the U.S. government)_

_*API – Application Programming Interface; how software programs and databases share data and functions with each other. Check out [APIs in Government](https://www.WHATEVER/2013/04/30/apis-in-government/) for more information._

_Each week, “[The API Briefing](https://www.WHATEVER/tag/wednesday-api-briefing/)” will showcase government APIs and the latest API news and trends. Visit this column every week to learn how government APIs are transforming government and improving government services for the American people. If you have ideas for a topic or have questions about APIs, please contact me via <a href="mailto:%20bill@billbrantley.com" target="_blank">email</a>. All opinions are my own and do not reflect the opinions of the USDA and GSA._