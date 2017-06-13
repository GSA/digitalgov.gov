---


date: 2015-08-17 1:10:53 -0400
title: 'The Content Corner\: Using Natural Language Processing to Improve Rulemaking'
summary: 'For the past several weeks, I have been inflicting you with my recent dive down the rabbit hole of natural language generation and the larger discipline of natural language algorithms. Most of the focus has been on the power of natural language generation and how it can help you rapidly produce content on a wide'
authors: [tymanuel]
categories:
  - Content
tags:
  - Administrative Office of the United States Courts
  - CFPB
  - Consumer Financial Protection Bureau
  - EPA
  - FCC
  - Federal Communications Commission
  - HHS
  - natural language generation
  - open government
  - structured content
  - The Content Corner
  - U.S. Environmental Protection Agency
  - United States Department of Health and Human Services
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-343-Asking-cyborg-Ociacia-iStock-Thinkstock-177531624.jpg" alt="Cyborg gesturing to ask a question" %} 

For the past several weeks, I have been inflicting you with my recent dive down the rabbit hole of natural language generation and the larger discipline of natural language algorithms. Most of the focus has been on the power of natural language generation and how it can help you rapidly produce content on a wide array of topics in an easy to read format with little effort on the part of a human. In the final chapter of what I am calling my natural language trilogy (NL III: Return of the Data?), I’ll flip the focus from [natural language generation](https://www.WHATEVER/2015/08/03/the-content-corner-rise-of-the-machines/) to natural language processing and how it can help us gather important data not from the content we publish, but the content we receive.

## A Natural Language Processing Primer

[In last week’s post](https://www.WHATEVER/2015/08/10/the-content-corner-can-automated-content-creation-help-your-agency/) I briefly touched on natural language processing and UIMA, an Apache project that scans electronic medical records to provide physicians with a better understanding of a patient’s entire medical history. This better understanding begins with one of the main challenges with NLP, which is to make the computer “understand” or derive meaning from the text inputs first. Many of the major research areas in the NLP field approach this challenge in various ways, depending on specific research and goals, leveraging various levels of artificial intelligence or AI. One of the earliest mentions of NLP is attributed to the father of AI, Alan Turing, and evolved into his well-known [Turing test](https://en.wikipedia.org/wiki/Turing_test), where an AI needs to properly process human language (text) inputs and respond in a manner indistinguishable from a human.

Aside from the aforementioned UIMA. one of the most practical uses where government agencies should look to leverage NLP is the evaluation of public comments as part of the regulatory process.

## You Spoke, We Listened 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/08/600-x-400-Rules-and-regulations-filmfoto-iStock-Thinkstock-181929062.jpg" alt="Two hand stamps, one for Rules and one for Regulations, lay next to a stack of documents." %} 

Over the past decade, [the number of federal regulations enacted by year](https://www.federalregister.gov/uploads/2015/05/OFR-STATISTICS-CHARTS-ALL1-1-1-2014.pdf) has averaged between 3,000-4,000. And aside from certain exceptions, a public comment period is required before the issuance of a final rule. For example, the [Federal Communications Commission  received (and publicly released) 800,000 public comments](https://sunlightfoundation.com/blog/2014/09/02/what-can-we-learn-from-800000-public-comments-on-the-fccs-net-neutrality-plan/) on its Net Neutrality plan. I personally can’t even begin to fathom how the agency was able to respond to that deluge of information (if you’re from FCC and reading this, please share!). Based on this amount of data that needs to be reviewed, the benefits of using NLP to help categorize or cluster this information should be readily apparent. One example from [CMS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB8QFjAAahUKEwjRp6z-lqHHAhXRMIgKHZBKAhs&url=https%3A%2F%2Fwww.cms.gov%2F&ei=g_7JVZHaAtHhoASQlYnYAQ&usg=AFQjCNGG_y0r9OT_pnZjOljF54Pu0-62lw&sig2=KLD1tceOXyaIjlx1FSSRjQ&bvm=bv.99804247,d.cGU) estimated it takes 1,000-plus hours to review public comments before they can then be sent to a subject matter expert for more thorough review.

One of the first ways NLP can help is to recognize clusters of related information and provide a categorization: for example, if the comment contains the word “oppose” or “bandwidth speed”, place it within a certain category or cluster. That is at least a decent first cut, which then allows you to drill further: perhaps then scan the “oppose” cluster for additional relationships and terms such as “economic” or “cost” to help better ascertain a pattern of why people are opposed or in favor of the plan.

For an example of the power of NLP, check out the [interactive graphic](https://s3.amazonaws.com/openinternet.widgets.sunlightfoundation.com/index.html#7_1-0-2-0-3-2-3-3) from Sunlight Foundation’s analysis of the comments. Using NLP, Sunlight was able to create granular clusters of keywords and develop an understanding of the role of interest groups, organized form-letter campaigns, and even the influence of John Oliver on the commenting process.

Through [Ignite](http://www.hhs.gov/idealab/what-we-do/hhs-ignite/), an internal innovation program run out of the [HHS IDEA Lab](http://www.hhs.gov/idealab/), teams at the Department of Health and Human Services </span>and the <span style="font-weight: 400">Environmental Protection Agency</span> tackled the onerous comment review process by <span style="font-weight: 400"><a href="http://www.hhs.gov/idealab/projects-item/increasing-efficiency-in-rule-making-with-natural-language-processing/">beta testing NLP software to review comments</a> received for several HHS rules. One rule received 1,323 comments and the other 772. They tested two approaches to using the Content Analyst Analytical Technology (CAAT) sorting tool.</p> 

<p>
  The first allowed for user input such as example documents that would be used to help train the software to better understand the data it would be analyzing. It also allowed for greater control over the creation of categories as opposed to the second method, auto-categorization, which relied on computer-generated categories. Beta-testing on the two examples revealed the potential to save time and money, increase staff satisfaction, and do so with calculated accuracy rates. The project predicted an annual savings for one HHS agency of over 300,000 employee hours when using the NLP capabilities.
</p>

<p>
  The success of NLP and the cost-savings and efficiencies shown by the HHS project has led to fast-tracking of the implementation of the categorization system. The auto-categorization feature is currently available for users of the Federal Docket Management System (FDMS) and allows users to run an automated categorization of public comments received on a Federal Register document containing 20+ comments. If your agency was involved or is using the auto-categorization feature in FDMS, please share your experiences in the comments section.
</p>

<h2>
  The Importance of Open and Structured Data (Yes, Again)
</h2>

<p>
  There is one possible misconception that should be dismissed immediately as I sing the praises of NLP: it does not reduce the need for <a href="https://www.WHATEVER/2015/04/13/the-content-corner-structured-content-challenges-and-lessons-learned/">structured content</a>. Yes, NLP has the ability to help improve understanding and categorizing of complicated and varied data, but the better the structure of the original data, the better success rates of your auto-categorization, for instance. And in speaking with Rachel Shorey at Sunlight Foundation, in her experience analyzing the FCC data, the highly structured inputs and well-designed comment interface lessened the need for NLP. They were able to gather significant information just from the categories and tags immediately available in the data. As I always stress when discussing structured data, a little extra work at the beginning makes things much easier (and makes certain things possible) in the end.
</p>

<p>
  During her presentation on HHS and the CAAT project, Katerina Horska addressed the varied categorization success rates and mentioned improvements and tweaks to user-input as one thing that could significantly increase success. For any natural language system to be most effective, you will either need to tweak the data being input or the templates and patterns the computer is trying to recognize.
</p>

<p>
  Sunlight also discussed the importance of a minor category change on the Consumer Financial Protection Bureau commenting system that significantly improved the quality of data gathered by consumers. In this instance, an added category provided users with a better match to their specific issue and thus caused an increase in complaints within a more appropriate category. Since the data was already being classified in a different way, NLP would have probably missed this, so providing the most understandable options for your users when collecting comments is also very critical. As the saying goes, “help them, help you.”
</p>

<p>
  Finally, NLP is another tool that can be leveraged as we continue to strive for a more open and customer service oriented government. Open data formats including APIs or XML allow anyone or any organization (such as the Sunlight Foundation) to access reams of government data and use that data to keep us all better informed and to help better discover areas where our customers are not being adequately served. We can also use NLP to gain a better understanding of what citizens are trying to tell us on any given issue or in general. It allows for a clearer understanding of items that may need to be addressed, from healthcare to consumer safety. NLPs can help us do a better job of not just listening to the people, but answering them as well.
</p>

<p>
  <em>A special thanks to Read Holman, Katerina Horska and Kate Appel at HHS for sharing their work and for the work they are doing in general. Also thanks to Rachel Shorey at Sunlight Foundation for giving me a deeper understanding and appreciation of their process.</em>
</p>

<p>
  <em>You’ve just finished reading the latest article from our Monday column, <a href="https://www.WHATEVER/tag/the-content-corner/">The Content Corner</a>. This column focuses on helping solve the main content issues facing federal digital professionals, including producing enough content and making that content engaging.</em>
</p>