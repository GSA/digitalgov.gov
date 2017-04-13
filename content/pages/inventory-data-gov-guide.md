---
title: Inventory.data.gov Guide
date: 2015-01-27T17:47:03+00:00
layout: docs
image: Datagov_logo.jpg
---

  * [Introduction](#introduction)
  * [Features](#features)
  * [Using inventory.data.gov](#using-inventory-data-gov) 
      * [Creating a User Account](#creating-user-account)
      * [Using inventory.data.gov to manage datasets](#manage-datasets)
      * [Adding a Dataset](#add-dataset)
      * [Exporting Data.json](#export-data-json)
      * [Automating data.json downloads by agencies](#automating-data-json-downloads)
      * [Dataset Hosting](#dataset-hosting)
  * [Webinar on inventory.data.gov](#webinar)

<h2 id="introduction" style="padding-top: 50px">
  Introduction
</h2>

[Inventory.data.gov](http://inventory.data.gov) is a data management tool established in 2013 by the Data.gov Program Management Office (PMO) in the Office of Citizen Services and Innovative Technologies (OCSIT) of the U.S. General Services Administration (GSA). Inventory.data.gov supports the implementation of the 2013 Federal [Open Data Policy](http://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-13.pdf) (M-13-13) by providing all of the relevant metadata fields and export formats required for agencies to have their data harvested by Data.gov and to comply with the Federal Open Data Policy. Inventory.data.gov is not meant to be used by all agencies, but rather offered in order to assist agencies that do not have another solution for creating and maintaining data inventories.

The platform is primarily used to generate two different data.json files for each agency, one representing the Unredacted Inventory / Enterprise Data Inventory (EDI) that contains unredacted datasets and another representing the Redacted Inventory / Public Data Listing (PDL) that contains datasets with redactions as agency indicated. The Undredacted Inventory/EDI file is a comprehensive inventory for an agency. This file is sent directly to omb.max.gov and not publicly accessed. The Redacted Inventory/PDL file (often referred to as data.json) is made public and is posted on agency.gov/data.json and harvested by the Data.gov catalog.

[The Data.gov catalog](http://catalog.data.gov/)� is based on [CKAN](http://ckan.org/) (Comprehensive Knowledge Archive Network), an open source technology that powers many government open data sites. [Inventory.data.gov](http://inventory.data.gov/)� is a separate instance of CKAN hosted at GSA on the same infrastructure as the Data.gov catalog. To avoid confusion, neither site should simply be referred to as the “CKAN site”, but instead by the full URL.

This guide describes the features available through inventory.data.gov and provides instructions for agencies interested in using inventory.data.gov for dataset management. At the current level of usage, Data.gov/GSA has been able to provide inventory.data.gov to interested agencies at no cost. This could change in the future if there is a significant change in the level of usage and/or in the Data.gov/GSA budget.

Inventory.data.gov as a dataset management system requires a user account/password and is not publicly accessible (with the exception of a few datasets that are hosted on inventory.data.gov, discussed in more detail below). Inventory.data.gov allows the registered users to manage the datasets for their agency only.

<h2 id="features" style="padding-top: 50px">
  Features
</h2>

Inventory.data.gov provides the following features for dataset management/Open Data Policy compliance purposes:

  * Existing data.json and enterprise data inventory metadata can be imported directly into inventory.data.gov.
  * User group organizations can be created either for an entire agency or for individual bureaus so that users and permissions can be managed and delegated as needed by the agency
  * A platform to manage public/non-public datasets: create new entries, modify existing ones, and delete any datasets as needed
  * Unredacted Inventory / Enterprise Data Inventory (EDI) and Redacted Inventory / Public Data Listing (PDL) functionality exports the successfully validated datasets in the form of a data.json file complying to the POD Schema 1.1 version. Error records are provided in a log file for review and resolution by agency users.

<h2 id="using-inventory-data-gov" style="padding-top: 50px">
  Using inventory.data.gov
</h2>

Once an agency has consulted with the Data.gov PMO and has decided to use inventory.data.gov for dataset management, the next steps are:

  1. Setting up an “organization” on inventory.data.gov

First, the agency should decide how they want to present their structure within inventory.data.gov. An agency could make the “organization” the entire agency (for example, make the entire Department of Veterans Affairs one “organization). In that case, everyone with a user account associated to VA on inventory.data.gov would be able to view, add, edit or delete datasets for all of VA within inventory.data.gov. An agency could create an “organization” for sub-agencies, for instance creating an organization for the Farm Service Agency and all the other units of the Department of Agriculture. In that scenario, a user account for Farm Service Agency could view, add, edit or delete datasets for the Farm Service Agency only.

The Data.gov PMO will set up organizations in the manner requested by the agency.

<ol start="2">
  <li>
    Migrating existing datasets to inventory.data.gov
  </li>
</ol>

Most agencies have already created data inventories pursuant to the Open Data Policy. To begin using inventory.data.gov to manage the datasets, the Data.gov team will migrate the existing data listings to inventory.data.gov so that agencies can start editing from the current versions. For agencies that do not have data inventories under the Open Data Policy, but do have datasets listed in the current Data.gov catalog from the old Dataset Management System, the Data.gov PMO can migrate these old listings into inventory.data.gov for the agencies to update.

<ol start="3">
  <li>
    Creating user accounts for the agency representatives who will be using inventory.data.gov to manage the agency datasets.
  </li>
</ol>

Inventory.data.gov, for dataset management purposes, is not publicly accessible. Users must have accounts on the system. There are three levels of accounts for any “organization” on inventory.data.gov: Administrator, Editor, and Member. For dataset management, agency users will either have an Administrator or Editor account. Agencies should appoint at least one Administrator. Administrators can add additional members from that agency (organization), including additional Administrators.

Agencies should nominate the Administrator(s). The Data.gov PMO will create these accounts and ensure that the Administrators are familiar with the process of adding additional Administrators and Members for their agency (organization).

<h3 id="creating-user-account" style="padding-top: 50px">
  Creating a User Account
</h3>

The following section explains how to create user accounts in inventory.data.gov for the agency representatives who will be working on managing datasets.

You&#8217;ll first go through this action as if you&#8217;re the new user creating a new account for yourself. To do this, you&#8217;ll need to be logged out of inventory.data.gov. Once you&#8217;ve logged out, you can [register to create the new account](https://inventory.data.gov/user/register/).

<img class="aligncenter size-full wp-image-239762" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-420-Inventory-register.jpg" alt="Screen capture of Register for an Account page" width="600" height="420" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-420-Inventory-register.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-420-Inventory-register-301x212.jpg 301w, http://localhost/wp/wp-content/uploads/2015/01/600-x-420-Inventory-register-250x175.jpg 250w, http://localhost/wp/wp-content/uploads/2015/01/600-x-420-Inventory-register-571x400.jpg 571w" sizes="(max-width: 600px) 100vw, 600px" />

We try to stick to a common naming pattern of firstname_lastname for usernames. Also, take note of the password you choose, since you&#8217;ll need to provide this to the new user. Once you submit the registration form you&#8217;ll be logged in as that user, so you&#8217;ll want to log out and then log in again with your own (admin) account.

Then go to the organization where you&#8217;d like to add this new user (https://inventory.data.gov/organization/<AGENCY-NAME>)

Click Admin
  
Click Members
  
Click Add Member

Under &#8220;Existing User&#8221; type in the username you chose for them on the registration page. It should start to autocomplete as you type it in and then you can click it to make sure you got it right. Then select the role. Usually the role will be &#8220;Editor&#8221; but you can also choose &#8220;Admin&#8221; if you&#8217;d like them to be able to manage users.

Click Add Member
  
You&#8217;re Done!

We usually email out something like this for new user accounts (replacing the <text> with the values for this user and organization). You can start with this as a template to send to new users:

<p style="padding-left: 30px">
  To login, go to https://inventory.data.gov/user/login
</p>

<p style="padding-left: 30px">
  username: <firstname_lastname><br /> password: <their-temporary-password>
</p>

<p style="padding-left: 30px">
  Please be sure to reset your password at https://inventory.data.gov/user/edit/<username>
</p>

<p style="padding-left: 30px">
  You&#8217;ll then add and manage your datasets at https://inventory.data.gov/organization/<AGENCY-NAME>
</p>

<p style="padding-left: 30px">
  If you see anything that&#8217;s not working correctly or have suggestions for enhancements, please let Data.gov know through <a href="https://github.com/GSA/enterprise-data-inventory/issues">the issue tracker at github</a>.
</p>

<h3 id="manage-datasets" style="padding-top: 50px">
  Using inventory.data.gov to manage datasets
</h3>

Once you have an account as an Editor or Administrator for your agency (Organization), you can use inventory.data.gov to add or edit datasets for your Organization.

At the login screen, enter your username and password:

<img class="aligncenter size-full wp-image-239771" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-276-Inventory-log-in.jpg" alt="Screen capture of log in screen" width="600" height="276" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-276-Inventory-log-in.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-276-Inventory-log-in-250x115.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

Once you log in, you’ll see an activity page showing your recent activity on inventory.data.gov.

<img class="aligncenter size-full wp-image-239781" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-376-recent-activity.jpg" alt="Screen capture of recent activity list" width="600" height="376" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-376-recent-activity.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-376-recent-activity-250x156.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

The main tabs you will be using are “Datasets” and “Organizations.”

Datasets:

<img class="aligncenter size-full wp-image-239782" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-336-datasets.jpg" alt="Screen capture of Datasets tab" width="600" height="336" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-336-datasets.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-336-datasets-250x140.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

Organizations:

<img class="aligncenter size-full wp-image-239791" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-347-organizations.jpg" alt="Screen capture of Organizations tab" width="600" height="347" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-347-organizations.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-347-organizations-250x144.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

When you click on the “Organizations” tab, you’ll go to the main Organizations page that lists all the Organizations in inventory.data.gov. To find your Organization, you can search for it in the search bar on the page.

When you click on your Organization, all the datasets for the Organization will be displayed.

There’s an Admin button on the upper right for Administrators. By clicking on it, you get the main information about the Organization, including a tab for “Members.”

Clicking on “Members” brings up all the Members of the Organization who can add and edit datasets. Clicking on the Add Members button gives you the option of adding an existing user of inventory.data.gov to your Organization.

<img class="aligncenter size-full wp-image-239801" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-376-three-levels-of-access.jpg" alt="Screen capture showing access levels" width="600" height="376" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-376-three-levels-of-access.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-376-three-levels-of-access-250x156.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

There are three levels of access. Member is read only access. Editor allows you to add and edit datasets. Admin can perform the same actions as an Editor and also add members to the Organization.

<h3 id="add-dataset" style="padding-top: 50px">
  Adding a Dataset
</h3>

Click on the Dataset tab.

Then click on Add a Dataset. That takes you to the Create Dataset page.

The Create Dataset page features the metadata following the [Project Open Data](https://project-open-data.cio.gov/v1.1/schema/) metadata schema version 1.1.

<img class="aligncenter size-full wp-image-239811" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-376-Adding-a-Dataset.jpg" alt="Screen capture for Adding a Dataset" width="600" height="376" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-376-Adding-a-Dataset.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-376-Adding-a-Dataset-250x156.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

There are examples displayed in each field, and there is also pop-up help information for each field. Full details are on the [Project Open Data](https://project-open-data.cio.gov/v1.1/schema/) page. Fields marked by the red asterisk are required.

There is validation for each field, so if you try to skip a required field or enter improper formats for a particular field, you’ll get an error message when you try to add the dataset.

**Entering Metadata**

Enter the **Title** for the dataset, as you would like the Title to be displayed.

The URL for the dataset will be generated automatically based on the Title.

Enter the **Description** for the dataset as a summary about the dataset.

Enter the **Keywords** for the dataset. Your dataset will be included when a Data.gov user searches for those keywords.

**Modified/Last Update** &#8211; most recent date on which the dataset was changed, updated or modified

For **Publisher**, enter the name of your agency. Use the Add sub-agency button to enter a sub-agency to more specifically identify the source of the dataset. These additional sub-agency fields are optional.

**Access Level**: Choose public, restricted public, or non-public. � All type of “Access Level” datasets are now included in both Redacted Inventory (PDL) and Unredacted Inventory (EDI), Public datasets don’t support the redactions feature. Restricted public and non-public datasets support the redaction feature, and the applicable individual fields can be fully or partially redacted.

See the� [Redaction and Partial Redaction feature](https://github.com/GSA/data.gov/wiki/Intentory.data.gov-User-Guide-for-Redaction-and-Partial-Redaction-Feature)� for more information.

**Bureau Code/Program Code**. These are required fields following specific formats. Your agency POC should have this information. See the [Project Open Data](https://project-open-data.cio.gov/v1.1/schema/) page for more information about these fields.

**Contact Name/Email**. Enter the name and email information for the contact for this dataset. Questions about this dataset will be referred to the contact listed.

There are several Required If Applicable fields that are optional. Example text is provided in each field.

<img class="aligncenter size-full wp-image-320752" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/579-x-276-common-core-metadata.jpg" alt="Screen capture of Required-if-applicable common core metadata" width="579" height="276" srcset="http://localhost/wp/wp-content/uploads/2015/10/579-x-276-common-core-metadata.jpg 579w, http://localhost/wp/wp-content/uploads/2015/10/579-x-276-common-core-metadata-250x119.jpg 250w" sizes="(max-width: 579px) 100vw, 579px" />

**Rights**. You have the option to enter a short explanation for why the value in the **Access Level** field was selected here.

**Meets Agency Data Quality**. This field shows if the dataset meets your agency’s data quality standards if any apply.

Please note that in the **License** field, if applicable, the URL for the license should be provided.

**Spatial**. If the dataset is about a specific location, enter that information in this field.

**Temporal**. If the dataset covers a specific date range, enter that information following the format provided.

**Theme**. Enter words for themes or categories. This supports search and faceted viewing of datasets.

**Data Dictionary**. If there is a data dictionary or schema for the dataset, provide the URL here.

**Described by Type**. Choose the data dictionary type from the formats listed.

**Accrual Periodicity (Frequency)**. Choose the frequency from the options listed.

**Conforms to (Data Standard)**. If there is an applicable data standard, enter the URL here.

**Landing Page (Homepage URL)**. If there is a landing page/home page associated with the dataset, enter the URL here.

**Language**. The default language for datasets is English. If the dataset is presented in another language, select it here.

**Primary IT Investment UII.** If there is IT Unique Investment Identifier associated with the dataset, enter it here.

**References (Related Documents)**. URLs for additional related resources can be entered here. Multiple URLs can be entered separated by commas.

**Issued (Release Date)**. Enter the release date in the date format provided.

**System of Records.** If there is a Privacy Act System of Records Notice (SORN) associated with the dataset, enter the URL for the published SORN here.

The last two fields are to indicate if this dataset is part of a collection or if you want to designate this dataset as the “parent” of a collection.

**Is parent**. Yes or No. If you want to make this dataset the “parent” of a collection, choose yes. Otherwise choose no.

<img class="aligncenter size-full wp-image-239832" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-130-parent-options.jpg" alt="Screen capture of parent fields" width="600" height="130" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-130-parent-options.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-130-parent-options-250x54.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

Note that once you make a dataset a “parent” dataset, it cannot be a “child” dataset, or part of another collection of datasets. � � After a dataset is selected as parent, this dataset will be available for the subsequent datasets in this organization to choose a parent dataset (for isPartOf)

If you chose No and made the dataset a non-parent dataset, you would then be able to choose in the next field (**Parent dataset**) &#8211; the datasets that you want to make this dataset as part of a collection, note that this field is optional and can be left empty if you would like the dataset to be � an independent dataset.

Once you are finished entering the metadata, hit **Next: Add Data** on the bottom right.

<img class="aligncenter size-full wp-image-239842" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/251-x-83-Next-Add-Data-button.jpg" alt="Screen capture of Next: Add Data button" width="251" height="83" srcset="http://localhost/wp/wp-content/uploads/2015/01/251-x-83-Next-Add-Data-button.jpg 251w, http://localhost/wp/wp-content/uploads/2015/01/251-x-83-Next-Add-Data-button-250x82.jpg 250w" sizes="(max-width: 251px) 100vw, 251px" />

You are then taken to another screen with more fields about accessing the dataset.

For most inventory.data.gov users, the dataset is actually hosted on the agency.gov site, so you will hit the “Link to a file” radio button and provide the URL. If you would like to provide a link to API, choose the “Link to an API” radio button, provide the URL, and enter the value “API” in the format field, to provide a web page URL where dataset information is available user the radio button option “Access URL”.

<img class="aligncenter size-full wp-image-320762" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-512-add-a-new-resource-dataset.jpg" alt="Screen cap of Add a New Resource screen." width="600" height="512" srcset="http://localhost/wp/wp-content/uploads/2015/10/600-x-512-add-a-new-resource-dataset.jpg 600w, http://localhost/wp/wp-content/uploads/2015/10/600-x-512-add-a-new-resource-dataset-250x213.jpg 250w, http://localhost/wp/wp-content/uploads/2015/10/600-x-512-add-a-new-resource-dataset-469x400.jpg 469w" sizes="(max-width: 600px) 100vw, 600px" />

Provide a **description** of the dataset.

**Media type**. Choose the relevant format.

**Format**. Type in the format in this field. (API value for “Link to API” option)

<h3 style="padding-top: 50px">
  Draft Feature
</h3>

<span style="font-weight: 400">While creating datasets in� </span>[<span style="font-weight: 400">inventory.data.gov</span>](http://inventory.data.gov/)<span style="font-weight: 400">, users can set the “Publishing Status” value as “Draft,” which indicates that the dataset is still being worked on or reviewed. Any dataset saved with “Draft” status will not be included in the generated Redacted/Unredacted data.json files. The draft feature allows users to enter preliminary data and finalize the dataset at a later point by changing the “Publishing Status” value to “Published.”</span>

<img class="aligncenter wp-image-351511 size-full" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/unnamed-1.jpg" alt="unnamed-1" width="721" height="238" srcset="http://localhost/wp/wp-content/uploads/2015/01/unnamed-1.jpg 721w, http://localhost/wp/wp-content/uploads/2015/01/unnamed-1-250x83.jpg 250w" sizes="(max-width: 721px) 100vw, 721px" />

<h3 style="padding-top: 50px">
  Clone Feature
</h3>

<span style="font-weight: 400">Users can create a clone of a particular dataset by clicking on the “Clone” button displayed on the top right of the dataset page.� The Clone feature is � useful if you are entering lots of datasets manually, and most of the metadata � like Bureau Code, Program Code, Publisher Name, Contact Name etc. is the same � for all of them.</span>

<span style="font-weight: 400">After you click on the Clone button, make sure to correct the Dataset title and Unique Identifier at a minimum on the cloned dataset, and review all the other field values to make sure they are correct before updating the dataset.</span>

<span style="font-weight: 400">Please note that resources like the CSV file uploaded or linked to the original dataset will not be cloned as it is expected that resources will be different for the cloned datasets. � Resources need to be entered manually for the cloned datasets.</span>

<img class="aligncenter size-full wp-image-351521" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/unnamed-2.jpg" alt="unnamed-2" width="1019" height="147" srcset="http://localhost/wp/wp-content/uploads/2015/01/unnamed-2.jpg 1019w, http://localhost/wp/wp-content/uploads/2015/01/unnamed-2-250x36.jpg 250w, http://localhost/wp/wp-content/uploads/2015/01/unnamed-2-768x111.jpg 768w" sizes="(max-width: 1019px) 100vw, 1019px" />

<h3 id="export-data-json" style="padding-top: 50px">
  Exporting Data.json
</h3>

Once you have finished entering and editing the metadata for your organization, you are ready to export the datasets to generate the data.json files which comply with � Project Open Data Schema 1.1 version. This is done from the main Organization page, by clicking on � your agency Organization icon on the left or by clicking on your agency Organization name on the top of the page.

There are three choices at the top.

<img class="aligncenter wp-image-321172 size-full" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-162-exporting-data-json.jpg" alt="Screen capture of button choices" width="600" height="162" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-162-exporting-data-json.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-162-exporting-data-json-250x68.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

The Redacted Inventory button (formerly labeled Public Data Listing) will give you the redacted inventory of all of the datasets from your organization. This is the listing that you will post on your agency.gov/data.json and will be harvested by the Data.gov catalog to populate your organization’s listing in Data.gov catalog.

The Unredacted Inventory (formerly labeled Enterprise Data Inventory) button will give you a file of all of your organization’s datasets without any redactions. This is the file that is submitted to OMB and is not publicly shared unless an agency has made the decision to share it.

The Export Drafts button will export all datasets that are currently in “draft” status to a file.

The process for each is the same. Depending on your browser, clicking the button will either give you a prompt to open or save the file or it will be downloaded automatically.

<img class="aligncenter size-full wp-image-320772" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/10/600-x-453-GSA-153-datasets-found.jpg" alt="Screen capture of 153 datasets found for GSA" width="600" height="453" srcset="http://localhost/wp/wp-content/uploads/2015/10/600-x-453-GSA-153-datasets-found.jpg 600w, http://localhost/wp/wp-content/uploads/2015/10/600-x-453-GSA-153-datasets-found-250x189.jpg 250w, http://localhost/wp/wp-content/uploads/2015/10/600-x-453-GSA-153-datasets-found-530x400.jpg 530w" sizes="(max-width: 600px) 100vw, 600px" />

The file that is delivered is a zip file. It contains both the data.json and (if errors were found) an errorlog.txt and errors.json file.

<table>
  <tr>
    <td>
      It is very important to make sure that all datasets were successfully exported when downloading the Unredacted (EDI) or Redacted (PDL) data.json file. This can be done by checking to make sure that an errorlog.txt file was not included in the zip file. If there are errors in the errorlog.txt file, those need to be reviewed and resolved before posting the Redacted (PDL) data.json file in the agency.gov/data.json location. This is critical. Ignoring this step can potentially remove datasets from data.gov since they will no longer be present in the data.json file.<br /> Metadata that is directly entered into inventory.data.gov will be validated when the information is first entered, however some invalid metadata may have been imported directly into inventory.data.gov and will not be checked until this final export. The data.gov team is aware that this is not very user friendly or streamlined way of indicating which datasets need to be fixed and is in the process of improving inventory.data.gov so that these errors can be viewed directly on the inventory.data.gov website rather than as a separate log file. However, for now it is very important to review this file as explained earlier.
    </td>
  </tr>
</table>

The errorlog.txt will describe the datasets that did not validate against the Project Open Data Schema as needed to be included in the data.json file. If there were no errors encountered in creating the data.json, then errorlog.txt file will not appear in the zip file.

<img class="aligncenter size-full wp-image-239872" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-326-error-log-location.jpg" alt="Screen capture of error log location" width="600" height="326" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-326-error-log-location.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-326-error-log-location-250x135.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

<img class="aligncenter size-full wp-image-239881" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-391-error-log.jpg" alt="Screen capture of error log" width="600" height="391" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-391-error-log.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-391-error-log-250x162.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

The error log indicates the type of problem, the dataset ID, and the dataset title, so that you can find the problematic dataset in inventory.data.gov and fix the problem. Search for the dataset, choose Edit, and make the required changes.

Once you fix the errors, go back to the Organization page and re-download the Redacted Inventory (PDL) or Unredacted Inventory (EDI) datasets, and you should get a zip file with just the data.json and no error log.

For the Unredacted Inventory (EDI), the data.json file can be submitted to OMB Max. For the Redacted Inventory (PDL), the data.json will need to be posted on the agency’s website at agency.gov/data.json in order to be harvested by the Data.gov catalog. � If the data.json is being posted on the agency.gov website for the first time, please contact the Data.gov team via [email](mailto:datagov@gsa.gov)� to set the harvest source on catalog.data.gov.

<h3 id="automating-data-json-downloads" style="padding-top: 50px">
  Automating data.json downloads by agencies
</h3>

Rather than log in to inventory.data.gov and manually click the buttons to download the Redacted Inventory (PDL) and Unredacted Inventory (EDI) files, it is possible to use the API and your API key in order to automate the process of adding the data.json file to the agency website.

Here&#8217;s what the request would look like using the curl-like tool [httpie](http://www.httpie.org/)

Redacted Inventory (PDL)

<p style="padding-left: 30px">
  http -v POST https://inventory.data.gov/organization/[organization-id]/redacted.json Authorization:xxx-your-api-key-xxx Content-Type:application/x-www-form-urlencoded Cookie:auth_tkt=foo
</p>

Unredacted Inventory (EDI)

<p style="padding-left: 30px">
  http -v POST https://inventory.data.gov/organization/[organization-id]/unredacted.json Authorization:xxx-your-api-key-xxx Content-Type:application/x-www-form-urlencoded Cookie:auth_tkt=foo
</p>

You&#8217;d need to replace xxx-your-api-key-xxx with your actual API key which you can get in the bottom of the left sidebar of your user account, e.g. https://inventory.data.gov/user/[username]

The above process downloads the Redacted.zip file containing the data.json and errorlog.txt. If there are any errors, you should review and correct them. When you reach a point where there is no errorlog.txt file, you can upload the data.json file to the agency.gov/data.json public data listing for data.gov catalog harvesting purposes. It is recommended that you manually review and upload the data.json file a few times, before completely automating the entire process to ensure there are no errors that might be excluding datasets from the data.json file (potentially removing existing datasets from data.gov).

<img class="aligncenter size-full wp-image-239901" src="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2015/01/600-x-376-Dataset-Hosting.jpg" alt="Screen capture of dataset hosting" width="600" height="376" srcset="http://localhost/wp/wp-content/uploads/2015/01/600-x-376-Dataset-Hosting.jpg 600w, http://localhost/wp/wp-content/uploads/2015/01/600-x-376-Dataset-Hosting-250x156.jpg 250w" sizes="(max-width: 600px) 100vw, 600px" />

<h3 id="dataset-hosting" style="padding-top: 50px">
  Dataset Hosting
</h3>

The primary use of [inventory.data.gov](http://inventory.data.gov/) is to provide a dataset management system for agencies that need a tool to meet the requirements of the Open Data Policy. It is a separate instance of CKAN and requires a user account and password.

Data.gov uses [inventory.data.gov](http://inventory.data.gov/) for a second purpose. From 2011-2014, Data.gov featured data hosting using the Socrata platform at [explore.data.gov](http://explore.data.gov/). About a dozen agencies used [explore.data.gov](http://explore.data.gov/) to host their datasets directly on Data.gov. At the conclusion of the Socrata task order in 2014, several agencies indicated a continuing need for hosting capability for these datasets (approximately 100). To accommodate these agencies, the Data.gov PMO migrated the datasets previously hosted at [explore.data.gov](http://explore.data.gov/) to a hosting capability using the CKAN [DataStore](http://docs.ckan.org/en/ckan-2.2/datastore.html) extension, on the CKAN instance at [inventory.data.gov](http://inventory.data.gov/). As a result, the access URLs for this small number of datasets begin with [inventory.data.gov](http://inventory.data.gov/) and are publicly accessible without needing a user account.

For the time being, the Data.gov PMO will continue to provide this hosting capability on [inventory.data.gov](http://inventory.data.gov/) while it remains small scale and does not require significant additional Data.gov resources.

<h2 id="webinar" style="padding-top: 50px">
  Webinar on inventory.data.gov
</h2>

Data.gov, working with DigitalGov University, presented a webinar for agencies interested in using inventory on December 16, 2014. For more information, consult the recording of the [webinar](http://youtu.be/ciLYjDsF4lo).

Here are some questions and answers raised during the webinar:

  1. If your agency already has an admin listed, do you need their approval to be appointed as an admin?

If someone at your agency already has an admin account on inventory.data.gov, that person can grant you an admin account. There are no limits on how many admin accounts an agency can have.

<ol start="2">
  <li>
    Who do we email to request our organization be created?
  </li>
</ol>

Contact the DataGov team via [email](mailto:datagov@gsa.gov).

<ol start="3">
  <li>
    Who should I contact to get my organization approved/created?
  </li>
</ol>

When you contact the Data.gov team (see contact info above) about using inventory.data.gov, we can create the organization for you.

<ol start="4">
  <li>
    For the record to be identified as geospatial, does &#8220;geospatial&#8221; go in Theme (Category)
  </li>
</ol>

Yes. That designation also ensures that record is included in geoplatform.gov.

<ol start="5">
  <li>
    Is there a way to import an existing data.json into inventory.data.gov?
  </li>
</ol>

For importing existing data.json, please contact the Data.gov team and we will work with you to migrate into inventory.data.gov.

<ol start="6">
  <li>
    How do we know our agency POC?
  </li>
</ol>

For Data.gov/Open Data Policy purposes, if you don’t know your agency’s POC, contact the Data.gov team and we will connect you. We are so working on publishing the POC list that we currently use, which is a combination of our own compilation and the official Open Data contact lists submitted to OMB by the agencies.

<ol start="7">
  <li>
    How does this work with Data.gov?
  </li>
</ol>

Inventory.data.gov is a separate system from the Data.gov catalog, using the same technology as the catalog (CKAN) to provide a service that agencies can use to create and maintain data inventories that are ultimately harvested by the Data.gov catalog from agency.gov/data.json

<ol start="8">
  <li>
    Can we add custom core metadata fields?
  </li>
</ol>

Yes, but not through the user interface on inventory.data.gov currently. Please contact the Data.gov team if you have this situation.

<ol start="9">
  <li>
    Does search works only on dataset name and description or the actual content as well?
  </li>
</ol>

Search does not cover the actual content.

<ol start="10">
  <li>
    What is the difference between public and restricted-public?
  </li>
</ol>

See the “access level” field in [Project Open Data](https://project-open-data.cio.gov/v1.1/schema/): The degree to which this dataset could be made publicly-available, regardless of whether it has been made available. Choices: public (Data asset is or could be made publicly available to all without restrictions), restricted public (Data asset is available under certain use restrictions), or non-public (Data asset is not available to members of the public).

<ol start="11">
  <li>
    Can you clarify the difference between central and inventory CKAN? It seems like many datasets are using the datastore feature on inventory.data.gov &#8211; is this no longer the policy and inventory is mainly for creating data.json files?
  </li>
</ol>

“Central CKAN” was a term used earlier in 2014 to refer to what we call inventory.data.gov &#8211; it is one and the same. This webinar focused on the primary purpose of inventory.data.gov &#8211; to provide a dataset management system to help agencies create and maintain their data inventories and arrive at a data.json. We do use inventory.data.gov for a second purpose &#8211; to host a small number of datasets for agencies that needed a hosting capability at the conclusion of the Socrata platform contract that Data.gov had until July 2014.

<ol start="12">
  <li>
    If inventory.data.gov is not intended for geospatial metadata, what system is? Geoplatform.gov? If we have standards-compliant (ISO, FGDC, etc.) metadata already published, can we import these metadata fields? Or must we enter them manually?
  </li>
</ol>

Inventory.data.gov in its current form is not designed to handle geospatial metadata. As discussed in our harvesting [documentation](https://www.digitalgov.gov/resources/how-to-get-your-open-data-on-data-gov/), Data.gov continues to harvest geospatial datasets directly from geospatial harvest sources. Agencies should have the remainder of their agencies in a “non-geospatial” data.json that the Data.gov catalog can harvest.

<ol start="13">
  <li>
    So the system does not push errors to you; you have to search for them?
  </li>
</ol>

When you are ready to export your agency’s datasets to data.json and hit the button on inventory.data.gov, you will be prompted to download a zip file containing the data.json. If there are errors, the zip file will also contain an error log containing information about the datasets with errors. We are working on improving validation within inventory.data.gov so that more errors are identified as you are adding and editing datasets, before you reach the export stage.