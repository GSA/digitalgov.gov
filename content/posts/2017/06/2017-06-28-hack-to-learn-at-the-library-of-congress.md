---
slug: hack-to-learn-at-the-library-of-congress
date: 2017-06-28 1:06:05 -0400
title: Hack-to-Learn at the Library of Congress
summary: 'When hosting workshops, such as Software Carpentry, or events, such as Collections As Data, our National Digital Initiatives team made a discovery&mdash;there is an appetite among librarians for hands-on computational experience. That’s why we created an inclusive hackathon, or a &ldquo;hack-to-learn,&rdquo; taking advantage of the skills librarians already have and pairing them with programmers to'
authors:
  - jaime-mears
topics:
  - data
  - data
  - hackathon
  - Library of Congress
  - LOC
---

When hosting workshops, such as [Software Carpentry](https://blogs.loc.gov/thesignal/2017/04/software-carpentry-at-the-library-of-congress/?loclr=blogsig), or events, such as [Collections As Data](http://digitalpreservation.gov/meetings/dcs16.html?loclr=blogsig), our National Digital Initiatives team made a discovery—there is an appetite among librarians for hands-on computational experience. That’s why we created an inclusive hackathon, or a “hack-to-learn,” taking advantage of the skills librarians already have and pairing them with programmers to mine digital collections.

Hack-to-Learn took place on May 16-17 in partnership with George Mason and George Washington University Libraries. Over the two days, 61 attendees used low or no-cost computational tools to explore four library collection as data sets. You can see the [full schedule](http://www.digitalpreservation.gov/meetings/hack-to-learn/hack-to-learn-site.html?loclr=blogsig) here.

{{< legacy-img src="2017/06/600-x-450-Hack-to-Learn-LOC-May-2017-day-2-GWU-Library-group.png" alt="Day two of the workshop took place at George Washington University Libraries. Here, George Oberle III, History Librarian at George Mason University, gives a Carto tutorial. Photo by Justin Littman, event organizer." >}}

## The Data Sets

The meat of this event was our ability to provide library collections as data to explore, and with concerted effort we were able to make a diverse set available and accessible.

In the spring, the Library of Congress released [25 million of its MARC records for free bulk download](https://www.loc.gov/cds/products/marcDist.php?loclr=blogsig). Some have already been working with the data – Ben Schmidt was able to join us on day one to present his [visual hacking history of MARC cataloging](http://sappingattention.blogspot.com/2017/05/a-brief-visual-history-of-marc.html?loclr=blogsig){.external} and Matt Miller made [a list of 9 million unique titles](https://medium.com/@thisismattmiller/library-of-congress-lists-57ddd177f1e2?loclr=blogsig){.external}. We thought these cataloging records would also be a great collection for hack-to-learn attendees because the format is well-structured and familiar for librarians.

The Eleanor Roosevelt Papers Project at George Washington University shared its [“My Day” collection](https://erpapers.columbian.gwu.edu/my-day?loclr=blogsig){.external} – Roosevelt’s daily syndicated newspaper column and the closest thing we have to her diary. George Washington University Libraries contributed their Tumblr End of Term Archive- text and metadata from 72 federal Tumblr blogs harvested as part of the End of Term Archive project.

{{< legacy-img src="2017/06/600-x-385-Hack-to-Learn-LOC-May-2017-ER\_mallet\_topics.png" alt="Topic modelling in MALLET with the Eleanor Roosevelt “My Day” collection. MALLET generates a list of topics from a corpus and keywords composing those topics. An attendee suggested it would be a useful method for generating research topics for students (and we agree!)." >}}

As excitement for hack-to-learn grew, the Smithsonian joined the fun by providing their [Phyllis Diller Gag file](https://transcription.si.edu/phyllis-diller-cards?loclr=blogsig){.external}. Donated to the Smithsonian American History Museum, the gag file is a physical card catalog containing 52,000 typewritten joke cards the comedian organized by subject. The Smithsonian Transcription Center put these joke cards online, and they were transcribed by the public in just a few weeks. Our event was the first time these transcriptions were used.

{{< legacy-img src="2017/06/600-x-598-Hack-to-Learn-LOC-May-2017-Phyllis-Diller-Gag-Gephi-network-data-visualization-copy.png" alt="Gephi network analysis visualization of the Phyllis Diller Gag file. The circles (or nodes) represent joke authors and their relationship to each other based on their joke subjects." >}}

To encourage immediate access to the data and tools, we spent a significant amount of time readying these four data sets so ready-to-load versions were available. For the MARC records to be amenable for the mapping tool Carto, for example, Wendy Mann, Head of George Mason University Data Services, had to reduce the size of the set, then convert the 1,000 row files to csv using MarcEdit, map the MARC fields as column headings, create load files for MARC fields in each file, and then mass edit column names in OpenRefine so that each field name began with a character as opposed to a number (a Carto requirement).

We also wanted to be transparent about this work so attendees could re-create these workflows after hack-to-learn. We bundled the data sets in their multiple versions of readiness, README files, a list of resources, a list of brainstorming ideas of what possible questions to ask of the data, and install directions for the different tools all in a folder that was available for attendees a week before the event. We invited attendees to join a Slack channel to ask questions or report errors before and during the event, and opened day one with a series of lightning talks about the data sets from content and technical experts.

## What Was Learned

Participants were largely librarians, faculty or students from our three partner organizations. 12 seats were opened to the public and quickly filled by librarians, faculty or students from universities or cultural heritage institutions. Based on our registration survey, the majority of participants trended towards little or no experience. Almost half reported experience with OpenRefine, while 44.8% reported having never used any of the tools before. 49.3% wanted to learn about “all” methodologies (data cleaning, text mining, network analysis, etc.), and 46.3% reported interest in specifically text mining.

{{< legacy-img src="2017/06/600-x-280-Hack-to-Learn-LOC-May-2017-pie-chart.png" alt="31.3% of hack-to-learn registrants were curious about computational research and wanted and introduction, and 28.4% were familiar with some tools but not all. 14.9% thought it sounded fun!" >}}

Twenty-one attendees responded to our post-event survey. Participants confirmed that collections as data work felt less “intimidating” and the tools more “approachable.” Respondents reported a recognition of untapped potential in their data sets and requested more events of this kind.

> “I was able to get results using all the tools, so in a sense everything worked well. Pretty sure my ‘success’ was related to the scale of task I set for myself; I viewed the work time as time for exploring the tools, rather than finishing something.”

Many appreciated the event’s diversity- the diversity of data sets and tools, the mixture of subject matter and technical experts, and the mix between instructional and problem-solving time.

> “The tools and datasets were all well-selected and gave a good overview of how they can be used. It was the right mix of easy to difficult. Easy enough to give us confidence and challenging enough to push our skills.” {{< legacy-img src="2017/06/600-x-400-Hack-to-Learn-LOC-May-2017-Phyllis-Diller-team-day-2.jpg" alt="The Phyllis Diller team works with OpenRefine at Hack-to-Learn, May 17, 2017." caption="" >}}

When asked what could be improved, many felt that identifying what task to do or question to ask of the data set was difficult, and attendees often underestimated the data preparation step. We received suggestions such as adding guided exercises with the tools before independent work and more time for digging deeper into a particular methodology or research question.

> “It was at first overwhelming but ultimately hugely beneficial to have multiple tools and multiple data sets to choose from. All this complexity allowed me to think more broadly about how I might use the tools, and having data sets with different characteristics allowed for more experimentation.”

Most importantly, attendees identified what still needed to be learned. Insights from the event related to the limitations of the tools. For example, attendees recognized GUI interfaces were accessible and useful for surface-level investigation of a data set, but command-line knowledge was needed for deeper investigation or in some cases, working with a larger data set. Several participants in the post-event survey showed interest in learning Python as a result.

Recognizing what they didn’t know was not discouraging. In fact, one point we heard from multiple attendees was the desire for more hack-to-learn events.

> “If someone were to host occasional half-day or drop-in hack-a-thons with these or other data sets, I would like to try again. I especially appreciate that you were welcoming of people like me without a lot of programming experience … Your explicit invitation to people with \*all\* levels of experience was the difference between me actually doing this and not doing it.”

We’d like to send a big thank you again to our partners at George Washington and George Mason University Libraries, and to the Smithsonian American History Museum and Smithsonian Transcription Center for you time and resources to make Hack-to-Learn a success! We encourage anyone reading this to consider doing one at your library, and if you do, let us know so we can share it on The Signal!
