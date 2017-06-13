---


date: 2015-09-18 11:00:10 -0400
title: 'Under the Hood\: Building a New College Scorecard with Students'
summary: 'Summary\: How the U.S. Digital Service worked with students, families, schools, developers and teams across the federal government to rebuild the new College Scorecard tool. My niece is a smart kid. I&rsquo;m biased, but I swear she is. And just as I started working on the College Scorecard project as the U.S. Digital Service&rsquo;s new'
authors: [lisa-gelobter]
categories:
  - Code
  - Data
tags:
  - 18F
  - agile
  - API
  - data
  - open data
  - prototype
  - U.S. Department of Education
  - U.S. Digital Service
  - user experience
---

> Summary: 'How the U.S. Digital Service worked with students, families, schools, developers and teams across the federal government to rebuild the new College Scorecard tool.'

My niece is a smart kid. I’m biased, but I swear she is. And just as I started working on the College Scorecard project as the [U.S. Digital Service](https://www.whitehouse.gov/digital/united-states-digital-service)’s new Chief Digital Service Officer at the Department of Education, I got a call from her—she was trying to decide where to go to school. As we were building this tool, wading through this data, and working with all the top college choice tools already in the market, I was also helping her navigate her college choice process. Where should she go? What was the best value? What is value when it comes to schools? This may be the single most important investment of her life, and even she was struggling to find clear, reliable data on critical questions.

**Today, the Department of Education is proud to announce new steps to help students, parents and advisers make better college choices**, including:

  1. **A new [College Scorecard](https://collegescorecard.ed.gov/)** redesigned with direct input from students, families, and their advisers to provide the clearest, most accessible, and reliable national data on college cost, graduation, debt, and post-college earnings. This new College Scorecard can empower Americans to rate colleges based on what matters most to them; to highlight colleges that are serving students of all backgrounds well; and to focus on making a quality, affordable education within reach.
  2. **New, [comprehensive and updated data](https://collegescorecard.ed.gov/data/) on higher education institutions**. For the first time, the public can access the most reliable and comprehensive data on students’ outcomes at specific colleges, including former students’ earnings, graduates’ student debt, and borrowers’ repayment rates. These data are also available for various sub-groups, like first generation and Pell students. Because these data will be published through an open application programming interface (API), researchers, policymakers, and members of the public can customize their own analysis of college performance more quickly and easily.
  3. **Customized tools for students**, with 11 organizations already using these data to launch new tools. Today, **[ScholarMatch](http://scholarmatcher.scholarmatch.org/)**, **[StartClass](http://www.startclass.com/)** and **[College Abacus](https://collegeabacus.org/)**, three college search resources, are using this new, unique data that help students search for, compare, and develop a list of colleges based on the outcomes data that the Department is making available to the public for the first time. **[PayScale](http://www.payscale.com/college-roi/roi-by-income-level)**, which offers consumers a large salary database, will use the new data to analyze various colleges’ return-on-investment for different student groups while **[InsideTrack](http://www.insidetrack.com/)**, which is a team of coaches and consultants working to improve student outcomes, will use the data to develop and implement effective student-centered initiatives. **[ProPublica](https://www.propublica.org/)**, a non-profit investigative journalism newsroom, has built a tool with the open data to help consumers make more informed decisions.

This work was truly collaborative team effort, with teams from the Departments of Education and of the Treasury, White House Domestic Policy Council, Council of Economic Advisors, and Office of Management and Budget, the [General Services Administration’s 18F](https://18f.gsa.gov/) and the [U.S. Digital Service](https://www.whitehouse.gov/digital/united-states-digital-service).

## Here’s how we did it:

### _Build with, not for, users._

We knew what we needed to do—make people’s lives better by providing them the tools and information to make more informed choices and get the best bang for buck college choice. And we thought—exactly how do people make choices when deciding on college?

#### _**So we went out and asked them.**_

Following our practice of [focusing on user needs](https://playbook.cio.gov/#play1), the College Scorecard team first spent time engaging directly with users at every single step in the project. Some of our favorite conversations were when we talked to high school students in Washington, D.C.’s Anacostia neighborhood and their excellent guidance counselor who told us how he “hacks” the process to make sure every one of his students gets an acceptance letter from a college, and feels that rush of possibility.

We met with 4-H kids from across the country who were frustrated by inaccurate data on the college search tools they use to find the best agricultural programs today. We listened to a mom from Maryland explain that she shopped for schools based on the lowest annual actual cost to become a medical technician—her dream. We even called a young woman who works as a college advisor in the Bronx, who had written a letter to the President with her ideas of how to make higher education data and tools work even better for her students. We also visited the newsrooms of data journalists to understand how they used higher education open data to report on how well schools were serving students.

We build on the hard work of the Department of Education; previously, they met with thousands of stakeholders from the higher education community to learn about their concerns and ideas and hopes for how we could help students and families make a more informed decision.

### _Be agile._

Based on this research, we made the cheapest, fastest prototype of the College Scorecard possible, based on what we heard. We knew it needed to be mobile-first, simple, and easy to customize. That prototype ended up being a homemade, cardboard iPhone with slips of paper with wireframes of what the tool could look like. It probably cost less than a cup of coffee to produce.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/09/600-x-340-Scorecard-Demo.jpg" alt="Scorecard demo" %}


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/09/600-x-400-College-Scorecard_0.jpg" alt="College Scorecard" %}

We also went to work with the federal government’s data from over 7,000 schools, going back 18 years, putting it into an open API (Application Programming Interface) that fuels the College Scorecard website. We wanted to make the data as usable by software developers and data scientists. The API allows anyone to create tools and insights that will help prospective college students make these important decisions.

We worked with a group of software developers and data scientists to be beta users of the data—to make sure it worked well and was clear. In addition to the groups I mentioned above, whose work is live today, we’re also excited to see the tools and enhancements that [Niche](https://niche.com/), [College Greenlight](https://www.collegegreenlight.com/), [Noodle](https://www.noodle.com/), [Tractus Insight (HelloCollege)](https://tractusinsight.com/) and [I’m First!](http://www.imfirst.org/) are working on—and are looking forward to what many others will be able to do with the data that’s now open and available.

### _What’s in the data?_

With nearly 2,000 data points for over 7,000 schools going back 18 years, there’s a lot of information in the College Scorecard dataset. The dataset includes information from the Department of the Treasury on student loan repayment rates, and the IRS on post-college income. When we can combine new data from Departments of Education and of the Treasury with data that colleges already report on graduation rates, cost, and other descriptions about their school, the College Scorecard allows the public to distinguish colleges based on the outcomes of their students.

Some of the information students, their parents or guardians, and advisors will be able to see includes:

  * **Employment outcomes**: The College Scorecard contains the first-ever comprehensive and reliable data on post-college earnings for students who attended all types of undergraduate institutions, based upon tax records. While increased earnings are only one of many reasons to go to college, many students consider their future career prospects when making an investment in their education. Specifically, the new Scorecard includes: (1) the proportion of former students earning over $25,000, which is the average earnings of high school graduates, six years after enrolling and (2) the median earnings of students 10 years after they enroll in college.
  * **Student-level outcomes data**: The College Scorecard publishes data from the National Student Loan Data System (NSLDS), which ED has used to manage and track grants and loans since the 1990s. The data can be used to produce a variety of new institutional performance metrics including (1) median cumulative loan debt, (2) repayment rate, and (3) completion and transfer rates, all by various student sub-groups.

The demographic data includes things you might expect, like ethnicity or gender, as well as how many students are the first in their family to attend college, students’ family income, and the rates at which students are taking out student loans or grants. We should point out that the Department of Education ensured the data protects the privacy of all students by aggregating up to the institution level and only reporting information for schools with enough students. Rest assured that no one can distinguish any individuals from the data. With these data, we can better understand how well schools do for students.

And this is just the beginning. By giving developers access to an API, even more customized tools will be created, providing students more options than ever before to find the right school for them.

### _What this means for the marketplace_

As the President said in his [weekly address](https://www.whitehouse.gov/the-press-office/2015/09/12/weekly-address-new-college-scorecard),

> _&#8220;The status quo serves some colleges and the companies that rank them just fine. But it doesn&#8217;t serve our students well—and that doesn&#8217;t serve any of us well. There are colleges dedicated to helping students of all backgrounds learn without saddling them with debt. We should hold everybody to that standard. Our economic future depends on it.&#8221; &#8211; President Barack Obama, Weekly Address, September 12, 2015_

When consumers have more access to information, it means they can make better financial decisions for themselves and their families. This is a huge win for students, families, and the marketplace—open data like this ensures that both colleges and students are operating in a more fair, competitive, and transparent environment.

A college degree is the best investment students can make in their future, and the public now has more data than ever to make one of the most important decisions students face in their lifetimes.

_This post was originally published on the [White House blog](https://www.whitehouse.gov/blog) by Lisa Gelobter, the Chief U.S. Digital Service Officer at the U.S. Department of Education._