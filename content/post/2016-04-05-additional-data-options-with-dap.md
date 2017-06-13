---


date: 2016-04-05 10:00:38 -0400
title: 'Additional Data Options With DAP'
summary: 'Agencies can participate in the Digital Analytics Program (DAP) by implementing the DAP script block. It&rsquo;s a simple line of of code that enables you to take advantage DAP\: (Example) &amp;lt;script language=&amp;#8221;javascript&amp;#8221; id=&amp;#8221;_fed_an_ua_tag&amp;#8221; src=&amp;#8221;https\://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=DHS&amp;amp;subagency=FEMA&amp;#8221;&amp;gt;&amp;lt;/script&amp;gt; You can use this line to enhance the Web analytics solution with additional query string parameters. The query string parameters pass'
authors: [immanuel-lee]
categories:
  - Code
  - Data
  - Metrics
  - Monthly Theme
  - Our Work
tags:
  - analytics
  - code
  - DAP
  - data
  - Digital Analytics Program
  - metrics
---

Agencies can participate in the Digital Analytics Program (DAP) by implementing the DAP script block. It’s a simple line of of code that enables you to take advantage DAP:

(Example)
  
 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/04/600-x-400-switched-wide-Tablet-Screen-with-Pie-Chart-against-of-the-Report-robuart-iStock-Thinkstock-479377480.jpg" alt="A colorful illustration in the flat design style showing the relation between code and analytics." %} 

You can use this line to enhance the Web analytics solution with additional query string parameters. The query string parameters pass data that enable features within the code. They can also help configure settings in the code. It allows you to leverage more features in DAP or extract more data out of DAP. In the example above, we have the query string parameters “agency” and “subagency” that pass data into DAP for reporting purposes.

Let’s go through some useful options.

## Central Hosting

Our recommended implementation is to call the DAP code from a central location hosted by DAP. This allows you to implement the code once without having to worry about updating it manually for new versions.

Instead of setting the “src” attribute to a local directory, set the value to the centrally hosted URL as follows:

src=&#8221;**https://dap.WHATEVER/Universal-Federated-Analytics-Min.js?agency=DHS**&#8220;

Remember, the script block won’t work properly unless _src_ is specified with https://. The central host URL has been configured to only be called securely over SSL.

When DAP updates the code file, the new version will take effect immediately. If we update the code to include any bug fixes or additional features, you’ll see those updates automatically without revisiting the script block code.

## Parallel Tracking

If you have your own additional implementation of Google Analytics (GA), you may have a bit more flexibility in configuring the settings. However, you may be missing some of the features in DAP: for example, download tracking. You might want to consider running the two analytics codes simultaneously. Parallel tracking allows the DAP code to send DAP data to your separate account of GA.

This differs from a completely independent GA account in that the only GA code needed is the DAP code, which will collect data and send it to both accounts. A completely independent account means that you run both the DAP code and the out-of-the-box GA code, in which both will collect data mutually exclusively.

While DAP is a great Web analytics solution on its own, you can still take advantage of running your own GA account in parallel by adding the PUA parameter to the source file location:

https://dap.WHATEVER/Universal-Federated-Analytics-Min.js?agency=DHS&subagency=FEMA&**pua=UA-000000-0**

where UA-000000-0 would be replaced with your own UA ID.

Now, you can create and track your own Goals and configure other administrative settings to your own account while receiving data from DAP.

## Download Extensions

The DAP code will allow you to track a number of download extensions by default. You may have unconventional extensions that may not be included in our list. If you look at the [DAP code](https://dap.WHATEVER/Universal-Federated-Analytics-Min.js) and search for “EXTS”, the first instance of “EXTS” is followed by the list of extensions that are tracked in DAP by default.

If you don’t find your extension in that list, you can add your own with “exts” parameter:

[https://dap.WHATEVER/Universal-Federated-Analytics-Min.js?agency=DHS&**exts=f90**](https://dap.WHATEVER/Universal-Federated-Analytics-Min.js?agency=DHS&exts=mp3)

DAP will now help you track downloads with “f90” extensions.

## Demographics

You might interested in the demographics of your website users. Remember, DAP doesn’t collect any PII, but DAP does use data that Google collects based on Google profiles and users’ browsing habits across the Web (apart from DAP), either from surveys or ads that they serve.

Add a “dclink” parameter and set the value to true:

https://dap.WHATEVER/Universal-Federated-Analytics-Min.js?agency=DHS&**dclink=true**

You can find the demographic data in the Audience section of GA and discover the characteristics of your users.

Other potential options you can enable or change with querystring parameters in the DAP script tag include:

  * Cookie expiration time period (to determine new vs. returning users)
  * Adding search parameters (for internal search queries)
  * Embedded Youtube video metrics tracking

You don’t need to be a code junkie to enable tracking of these additional features. You can take a look at the [implementation guide](https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2014/05/QuickGuide-Sept-2015.pdf) for other parameters that you might want to add. If you’re interested in implementing DAP for your website, the guide provides instructions as well. For more information or if you have questions while implementing, [contact us](mailto:dap@support.WHATEVER)!