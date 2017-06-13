---


date: 2013-10-24 2:24:12 -0400
title: 'Understanding Your Users&amp;#8217; Needs By Analyzing Search Terms'
summary: 'Analyzing your visitors&amp;#8217; search terms can help you better understand their needs. It can provide valuable data about the content and organization of the content on your site. Create a Semi-Automated Report of Terms Here&amp;#8217;s how to create a semi-automated report for analyzing large amounts of search data on a regular basis. A human still'
authors: [michelle-chronister]
categories:
  - Content
  - Data
  - Managing Digital
  - Metrics
tags:
  - DigitalGov Search
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/10/250-x-166-Magnifier-and-documents-SarapulSar38-iStock-Thinkstock-179126082.jpg" alt="Magnifying glass and documents." %} 

Analyzing your visitors&#8217; search terms can help you better understand their needs. It can provide valuable data about the content and organization of the content on your site.

## Create a Semi-Automated Report of Terms

Here&#8217;s how to create a semi-automated report for analyzing large amounts of search data on a regular basis. A human still needs to review the data for changes and new trends, but this process can save a lot of time once you have a solid understanding of the data and the spreadsheet functions in place. Use this process to look at searches performed during a visit to your site (internal searches) or searches performed on commercial search engines that brought visitors to your site (external searches). You should look at internal and external data separately since they tell different stories.

### Step 1. Open the Data in a Spreadsheet

Export your site’s search data from a metrics program or your internal search tool and open it in your spreadsheet tool of choice, such as Microsoft Excel or Google Docs. At the very least, the sheet should contain a column of search terms and a column that shows how many times people searched for that term. {% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/understand-user-needs-open-data-in-spreadsheet.png" alt="photo of example of search terms in a table" %}
  In these examples, there are two columns: raw count and IP-deduped count. The raw count is the total number of times that query was entered. The IP-deduped count shows the number of times the query was entered from different IP addresses. So if you search for &#8220;jobs&#8221; 4 times from the same computer, the total under raw count would be 4. The total under IP-deduped count would be 1. This data is from [DigitalGov Search](https://www.WHATEVER/services/search/ "USASearch"), the service that powers the search box on [USA.gov](http://www.usa.gov/). Your data may be different.

### Step 2. Review the Terms

Look for patterns and synonyms. You should see groups emerge, such as variations of a term (such as jobs and job openings), synonyms (like jobs, careers, employment), acronyms, or misspellings.

### Step 3. Create Groups

Make a list of the groups you noticed during this first pass in a different column. Write down preliminary rules for that group. For instance, a passport group might contain passport renewal, passport, and passports. Decide how broad or specific to make each group. If there are enough passport specific searches, then you could create a group just for passports. If there are some searches for passports, travel warnings, and international flights, then you could create an international travel group. There’s no magic formula to determine the size and depth of a group. Only you can do that based on the data and the goals of your site. You could imagine the State Department&#8217;s Bureau of Consular Affairs (the agency that issues passports), might have an apply for a passport group, a renew a passport group, etc. They could then roll these subgroups into a master passport group. A site with a broader mission, like USA.gov, might lump all passport searches together in one group. Refine your group as you review the data.

### Step 4. Write Magic Formulas

Now write the formulas for each group. You’re going to tell the spreadsheet to look through the column of search terms and add the counts together if the terms meet your rules. For example, a passports group would add the counts for any search term that contains the word &#8220;passport&#8221; or a variation of it, such as passports or passport.

<div>
  <b><a href="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/understand-user-needs-write-magic-formulas.png">
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/understand-user-needs-write-magic-formulas.png" alt="understand user needs write-magic formulas screen shot" %}</a></b>
</div>

Here&#8217;s one formula you can use to do this where column A is the list of terms and column C is the search count you want to add: =sumif(A:A,&#8221;\*passport\*&#8221;,C:C)+sumif(A:A,&#8221;passport&#8221;,C:C) (Please note there are other ways to write a formula to achieve the same goal.) The asterisks around the word passport tells the spreadsheet to look for that word anywhere in the cell. This will catch &#8220;passport,&#8221; &#8220;passports,&#8221; &#8220;passport renewal,&#8221; &#8220;passport application,&#8221; and &#8220;renew passport.&#8221; You can explore USA.gov&#8217;s magic formulas in this [spreadsheet](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/10/usa.gov-monthly-search-reports-fy13.xlsx) (MS Excel, 371 KB, October 2013).

### Step 5. Test Magic Formulas

You should double check your formulas the first time around to make sure that they are correct. Some tools handle **[wildcard characters](http://office.microsoft.com/en-us/excel-help/wildcard-characters-HP005203612.aspx)** better than others. **{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/understand-user-needs-test-magic-formulas.png" alt="screen shot of testing your formulas" %}
** Be careful using asterisks. If you use =sumif(A:A,&#8221;\*passport\*&#8221;,C:C)+sumif(A:A,&#8221;\*passports\*&#8221;,C:C) then it will add everything with the word passport and everything with passports, which will double count some cells and inflate the total.

### Step 6. Repeat on a Regular Basis

Now that you&#8217;ve set up the basic process, you can repeat it regularly, such as every week or month, in significantly less time. Review the terms to see if there are changes and refine your groups. If you decide to alter a group to include different terms and you want to apply the changes retroactively, you only need to copy and paste the new formula over the old ones. Once you have accumulated data over time, you can quickly chart trends by referencing formulas in other cells or sheets. **{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2013/12/understand-user-needs-repeat-regular-basis.png" alt="screen shot of charting trends" %}
**

### Step 7. Analyze and Share

The data can now be used to tell a story about how visitors interact with your internal search or how they get to your site from external search engines. The graph above shows a spike in internal searches for passports on USA.gov from February through April. This could be visitors who are planning international vacations over the Summer. That knowledge allows you to plan accordingly for next Spring. Be sure to share the data and your analysis of it with your team and key decision makers. Search terms are a valuable source of user experience data that can be used to improve both the browsing and searching experience on your site.