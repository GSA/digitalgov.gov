---


date: 2013-04-30 1:07:53 -0400
title: 'Producing APIs through Data.gov'
summary: 'One way agencies can offer APIs for their data is to use the built&ndash;in functionality of&nbsp;Data.gov. The information that is hosted as interactive datasets have an API layer which agencies can make available through documentation in the developer&amp;#8217;s section of the agency&amp;#8217;s website. The guide below will help you do this. Process Upload a dataset'
authors: [gray-brooks]
categories:
  - API
  - Code
tags:
  - API
  - data.gov
  - open data
---


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/08/250-x-86-API-letter-blocks-23575697-Hemera-Technologies-PhotoObjects.net-Thinkstock-87667306.jpg" alt="Children's building blocks letters spelling A P I." %} 

One way agencies can offer APIs for their data is to use the built–in functionality of [Data.gov](http://www.data.gov/). The information that is hosted as interactive datasets have an API layer which agencies can make available through documentation in the developer&#8217;s section of the agency&#8217;s website. The guide below will help you do this.

## Process

  1. Upload a dataset as an interactive dataset in Data.gov. A. Your agency should have a Data.gov point–of–contact who can help. If you need help finding yours, [contact the Data.gov team](http://www.data.gov/webform/contact-us).
  2. Once the dataset is live in Data.gov&#8217;s [interactive datasets catalog](https://explore.data.gov/catalog/next-gen), click on &#8216;Export&#8217; (in the top right), then &#8216;API&#8217;. You’ll need the resulting information in a moment.
  3. Create an html page within your agency&#8217;s developer hub that will serve as an API homepage for this documentation (e.g., www.agency.gov/developer/name-of-api).
  4. Customize the template below with the appropriate API information from your interactive dataset (see #2) and add the information to the API homepage that you&#8217;ve created. A. For the API URL, copy the &#8216;API Access Endpoint&#8217;, remove the &#8216;json&#8217; suffix, and insert &#8216;[format]&#8217;.B. The &#8216;Response Format&#8217;, &#8216;Type&#8217;, and &#8216;Authentication&#8217; fields do not need customizing.C. For the &#8216;Example Requests&#8217;, begin with the dataset&#8217;s &#8216;API Access Endpoint&#8217;, and customize it with parameters and values that demonstrate potential uses of this dataset&#8217;s API.D. For the Parameter&#8217;s Chart, describe each of the parameters listed in the &#8216;Column IDs&#8217; and provide examples that are used in the dataset.  It may be appropriate to combine some Column IDs, for instance, along the lines of the example below.
  5. Include a link to the &#8216;[Further Developer Documentation](http://dev.socrata.com/)&#8216; that Socrata offers.
  6. Link to any [additional developer resources](https://www.WHATEVER/2013/05/16/api-release-kit/ "API Release Kit") you create to a &#8216;Related Resources&#8217; section.

## Template

### Name of Dataset

This section is a description of the dataset and some background for the API. Use plain language to describe what the underlying data is and what developers can do with it. Avoid insider language and acronyms—remember to ask whether someone who is new to your agency&#8217;s work would easily understand it.

### API URL

http://explore.data.gov/resource/_[dataset-id]_.

[format]

### Response Format

json, xml

### Type

HTTP GET

### Authentication

None required

### Example Request

[See the [example](http://gsa.gov/portal/content/162379) for a model to use]

### Parameters and Values

<table border="1" cellspacing="1" cellpadding="5">
  <tr>
    <td>
      <strong>Parameter</strong>
    </td>
    
    <td>
      <strong>Type</strong>
    </td>
    
    <td>
      <strong>Description</strong>
    </td>
    
    <td>
      <strong>Sample Values</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong> </strong>
    </td>
    
    <td>
      <strong> </strong>
    </td>
    
    <td>
      <strong> </strong>
    </td>
    
    <td>
      <strong> </strong>
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
  </tr>
</table>

[See the [example](http://gsa.gov/portal/content/162379) for a model to use]

### Further Developer Documentation

[Socrata’s SODA Documentation](http://dev.socrata.com/)

### Related Resources

Include [any additional resources](https://www.WHATEVER/2013/05/16/api-release-kit/ "API Release Kit") your team can offer developers.

## Completed Example

To see this model in action, check out [GSA’s Per Diem API](http://gsa.gov/portal/content/162379).