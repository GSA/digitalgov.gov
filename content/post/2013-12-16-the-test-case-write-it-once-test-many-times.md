---


date: 2013-12-16 11:38:54 -0400
title: 'The Test Case\: Write It Once, Test Many Times'
summary: 'What if Thomas Edison Didn&rsquo;t Use Test Cases? &ldquo;I have not failed. I&amp;#8217;ve just found 10,000 ways that won&amp;#8217;t work.&rdquo;&nbsp;~Thomas A. Edison Software testing is like a science experiment. The Tester must plan\: methods, steps, and paths through the Application Under Test (AUT) to completely exercise the application'
authors: [jparcell]
categories:
  - Mobile
  - 'User Testing &amp; Research'
tags:
  - Federal CrowdSource Mobile Testing Program
  - mobile testing
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/250-x-281-Mobile-Tester-Newsletter.jpg" alt="Mobile testing on a laptop" %}**What if Thomas Edison Didn’t Use Test Cases?**

> “I have not failed. I&#8217;ve just found 10,000 ways that won&#8217;t work.” ~Thomas A. Edison

Software testing is like a science experiment. The Tester must plan: methods, steps, and paths through the Application Under Test (AUT) to completely exercise the application and uncover undesirable issues before its release.

If Thomas Edison did not document his 10,000 test cases, he may have wasted time by executing some tests multiple times, or he may have missed some combinations, thus making the development of the light bulb take even longer or not at all possible.

## What is a test case?

A test case is simply a list of setup instructions (or preconditions) and steps to expect a test usually linked to a requirement or expected behavior of the AUT.

Think of a test case as the directions you would give to a user to complete a task broken into the most basic of steps. Test cases allow almost anyone to execute the same test in the same way every time.

Applications can have hundreds or even thousands of test cases. However, if multiple tests require the same steps repeated with different data, a single test case can be created that links with an accompanying data table. This method promotes efficiency especially during maintenance where only one test case will require updating.

For example, if a Tester wants to validate that the values 2,4,6, and 8 are accepted by a field, the Tester would write a single test case; in the data table (or Excel sheet), they would have the data 2,4,6, and 8. This helps to verify the multiple data without writing the same test case four times.

## Why do we need to write test cases?

Test cases help the Tester think through all of the test combinations and paths that are required to fully test an application. Once written, these tests can be give to multiple Testers during execution. Additionally, once the test cases are complete, the Testers are able to provide valuable metrics on test case execution and requirements coverage.

## What should be included in a test case?

If you want your test cases to be reusable and usable by different Testers, you should standardize them.

Some fields you may want to include in your test case are:

  * **Test Case ID** – The unique identifier for this test case
  * **Test Case Title** – A short description of test case
  * **Test Case Summary** – A detailed description of what the test case does and why it is important
  * **Precondition/Test Data** – Required test data, or anything else that needs to be in place before the test case start, such as a certain version of Windows or Internet Explorer to use
  * **Test Steps** – The actual steps that the Tester should execute, such as to enter data and press submit button
  * **Expected Result** – What the Tester should expect to see or occur at the end of the test case
  * **Actual Result** – What the Tester actually saw or what occurred at the end of the test case
  * **Test Case Status** – Did the test pass or fail?
  * **Comments** – Notes on the test execution.

**How are mobile test cases different for Web test cases?**

They aren’t. If you understand test case writing for a Web application, you will be able to write test cases for any type of allocation including a mobile application. Test cases for any technology require the same types of information. That said, with any technology, there will be some differences. For example, test cases written specifically for Web Services may also include XML scripts, database testing may include SQL statements, and “graphic heavy” applications may include many graphics to compare test execution results with.

Writing test cases relies on Testers to be organized, thorough, and competent in the medium, be it Web or mobile.

## What tools do I need to write a test case?

None! While there are many free and paid tools dedicated to creating, storing and reporting on test cases, but many of us still use Microsoft Word or Excel to document our test cases. However, the benefit of using some of the bigger artifact repositories is that they can assist in creating more standard test cases as well as provide mechanism to automatically generate test case metrics such as complete, ready, executed, passed/failed, etc.

## **Conclusion**

> “Many of life&#8217;s failures are people who did not realize how close they were to success when they gave up.”
  
> ~Thomas A. Edison

As an inventor and scientist, Thomas Edison knew the value of writing and using test cases. As Testers we need to be as thorough and organized as a scientist by developing and writing our own test cases, and organizing and linking our test cases to requirements to ensure that we are testing every aspect of the application under test. The failure to use test cases in our test experiments many cause us to miss issues that will certainly be found by our users in production.

## **References**

  * <a class="wiki_link_ext" href="http://www.softwaretestinghelp.com/how-to-write-effective-test-cases-test-cases-procedures-and-definitions/" rel="nofollow">How to Write Effective Test Cases, Procedures, and Definitions</a>
  * <a class="wiki_link_ext" href="http://file:http://help.utest.com/testers/crash-courses/functional/test-case-writing-creation-101" rel="nofollow">Test Case Writing (Creation) 101</a>
  * <a class="wiki_link_ext" href="http://www.qualitytesting.info/profiles/blogs/how-to-write-a-good-test-case" rel="nofollow">How to Write a Good Test Case</a>
  * <a class="wiki_link_ext" href="http://www.softwaretestingclass.com/tips-guidelines-for-writing-test-cases/" rel="nofollow">Tips/Guidelines for Writing Test Cases</a>
  * <a class="wiki_link_ext" href="http://www.stickyminds.com/sitewide.asp?Function=edetail&ObjectType=ART&ObjectId=8965" rel="nofollow">The Test Case as a Scientific Experiment</a>

_The Mobile Tester Newsletter is sent bi-monthly to the volunteer Testers in our [Federal Crowdsource Mobile Testing Program](https://www.WHATEVER/services/mobile-application-testing-program/). Each newsletter contains a feature article, and interesting trends and statistics from the world of mobile testing. To receive our next edition, [sign up to become a Tester](https://docs.google.com/a/gsa.gov/spreadsheet/viewform?formkey=dGRJTFdQdjQ5VXNHUHFMbmNzUExhNnc6MQ#gid=0)._

&nbsp;