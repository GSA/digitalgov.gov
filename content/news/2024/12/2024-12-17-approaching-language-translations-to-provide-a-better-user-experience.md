---
date: 2024-12-17 00:00:00 -0500
title: "Approaching language translations to provide a better user experience: A Login.gov case study"
deck: "Login.gov adds new languages to provide expanded access and assistance to the public."
summary: "Learn how the Login.gov team improved translations and added a new language to enhance their service."

# See all authors at https://digital.gov/authors
authors:
  - julia-solorzano
  - danielle-lee
  - mitchell-henke
  - nick-ng

# See all topics at https://digital.gov/topics
topics:
  - multilingual
  - content-strategy

slug: approaching-language-translations-to-provide-a-better-user-experience

primary_image: 

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

## Expanding language support for greater access

Of the roughly [330 million people living in the United States](https://www.census.gov/library/stories/2020/07/census-bureau-estimates-united-states-population-reached-330-million-today.html), almost all of these people need to interact with the government in some way. Login.gov’s vision for a simple, secure sign-in service is designed to streamline access for the public by allowing users to maintain a single account and password for seamless, secure entry to a range of participating government programs and services. 

Over 27 million members of the public [who speak English less than “very well”](https://www.census.gov/library/visualizations/interactive/people-that-speak-english-less-than-very-well.html) have an additional challenge trying to navigate government services, which can be difficult even for those with English proficiency. Login.gov recognized that if we are going to effectively serve the public, we would need to include languages other than English, so we started with Spanish and French. Doing our part to fulfill the governmentwide [requirements for improving access to services for people with limited English proficiency (LEP)](https://digital.gov/resources/requirements-for-improving-access-to-services-for-people-with-limited-english-proficiency-lep/) in Executive Order 13166 and the General Services Administration (GSA) [Language Access Plan](https://www.gsa.gov/directives-library/language-access-plan), Login.gov recently added Chinese (Simplified). 

Keep reading to learn how we added a new language and revamped our [multilingual](https://digital.gov/topics/multilingual/) approach in the process.

## When innovation presents opportunity

Adding a new language was an opportunity for us to re-evaluate our previous translations, which revealed areas where we could be more precise and culturally relevant. Without providing adequate context (including showing the precise interactions the translations would be used for), our translators made educated guesses about the intended meaning, resulting in some inaccuracies and misinterpretations. Because this negatively impacted both the effectiveness of the content and the overall user experience in their designated language, we decided to change our translations process.

Login.gov already had a well-documented standard operating procedure for translating its content, because we knew how critical this was in developing a cohesive brand voice across languages. Without this procedure, roles, responsibilities, and workflows can be unclear, causing confusion and delays in the process that could ultimately result in a fragmented user experience.  

Changing the process would require buy-in across the Login.gov organization to be successful. Therefore, the User Experience Operations team needed to work with members throughout the program — including partnerships, delivery, and our leadership team to improve the standard operating procedure and create new templates for translating English content into designated foreign languages while retaining the brand voice and tone. 

## Balancing risk and reward

The new process involved using highly skilled, human translators from the [Office of Language Services](https://www.state.gov/about-us-ols/translating/) at the U.S. Department of State instead of machine translation. This requires more work on the front-end to do the initial translations and ongoing maintenance which could have a ripple effect on other related activities, features, and new product enhancements. However, using State Department language experts means higher-quality translations because the human translators can capture the specific linguistic, cultural, and technical nuances.

{{< img src="login-gov-english-log-in-600" >}} {{< img src="login-gov-chinese-log-in-600" >}}

The leadership team carefully considered the trade-offs associated with using human translators instead of machines. It essentially boiled down to sacrificing some delivery speed for increased accuracy. Ultimately, our leadership team decided to adjust to our delivery schedules and provide a better user experience with higher-quality translations. 

{{< featured-resource link="resources/introduction-to-translation-technology/" kicker ="Learn more">}}

We met with product owners, scrum teams, engineers, and other stakeholders to set expectations for how long the process might take and explain any “worst case scenarios” that might make the process longer than anticipated. Each team adjusted their delivery to account for the longer process and created their own systems to manage a longer workflow in our project management software.

We planned for a ramp up period where the User Experience Operations team assisted all [scrum teams](https://guides.18f.gov/agile/agile-lexicon/) during the submission process. However, we underestimated the amount of content for that first round of submissions, which created a lengthy backlog and an even longer delivery time than we anticipated. Our plan worked on paper, but not as much in real time. 

## Lesson: Start small

Even the best project plan can have gaps that you will not see until you test it. In the future, we would start with one team to walk through the process and make incremental adjustments before onboarding all teams. 

We store our content alongside the code in structured files, which is helpful for tracking changes. While it was straightforward in theory to update existing content and add new files, some of the manual parts of the process strained under the volume and were more difficult with the addition of Chinese (Simplified) – our first non-Latin script language. We had over 2,000 pieces of content for the main site and almost 50 pages on our static site.

Tackling a non-Latin script language also required us to make fewer assumptions and ensure our content was better prepared for translation.  In the past, we sometimes included dynamic elements, markup like bolding or punctuation to translated content. Doing that with content in Chinese (Simplified) is not possible. Moving this aspect into the domain of the language experts made for greater accuracy and a better user experience for the public.

## Future enhancements
Through the process, we relied on limited ad-hoc scripting to bring in new content as it was translated. This is the area with the most opportunity for automation. Copying and pasting to update individual lines of files is both prone to errors and is time-consuming. It is manageable at low volumes, but we learned as we scale and add more languages, automation of some of our processes will help to minimize delays while delivering a better user experience.

As Login.gov expands our language offerings, we are dedicated to evaluating the impact of this support on our program. By gathering user feedback, analyzing engagement metrics, and monitoring customer feedback and satisfaction, we aim to enhance access for all end users. Our commitment extends to equipping staff with the skills needed to effectively serve diverse language groups; ensuring a positive and equitable experience. We are excited about the potential to break down language barriers and better connect with our end users through these improvements.

## Results
The results are still coming in, and we are seeing trends across the non-English language segments on Login.gov. In the last few months, Spanish continues to lead the way in language selection with 7.82% total language selections while Chinese (Simplified) made up an average of 0.32% selections. 

According to a 2019 Census.gov study, [Language Use in the United States (PDF, 1.2 MB, 37 pages)](https://www.census.gov/content/dam/Census/library/publications/2022/acs/acs-50.pdf), approximately 5.15% of people speak Chinese at home. This disparity between Simplified Chinese usage on Login.gov and the proportion of Chinese speakers in the U.S. may suggest that there are barriers, particularly a limited awareness of the service among Chinese-speaking communities. 

We plan to raise awareness on the availability of Chinese (Simplified) to help engage more Chinese-speakers and close this access gap.

## About Login.gov
Login.gov enables members of the public to create a single digital account that provides access to their benefits and services at 50 federal and state agencies. This “one account for government” saves users time, saves taxpayers money, reduces complexity for agencies, and ensures consistent security and anti-fraud practices across government. As a digital identity provider, Login.gov offers digital identity management as a shared service to government agencies, including:

An authentication service: Securely and seamlessly log into numerous government services with a single account using an email, password, and multi-factor authentication option.
An identity verification service: Easily prove your identity from the convenience of your own home or on-the-go from your smartphone.

For more information, visit [Login.gov](https://www.login.gov).

{{< note variant="join" >}}
The **Multilingual Community of Practice** is a group of government digital professionals working to expand and improve digital content in languages other than English. [Join the Multilingual Community](https://digital.gov/communities/multilingual/).
{{< /note >}}

