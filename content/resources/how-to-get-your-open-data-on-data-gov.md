---
slug: how-to-get-your-open-data-on-data-gov
date: 2014-12-10 2:53:55 -0400
title: "How to Get Your Open Data on Data.gov"
summary: "Find out below how federal, federal geospatial, and non-federal data is funneled to Data.gov and how you can get your data federated on Data.gov for greater discoverability and and impact."
topics:
  - data
  - open-data
  - data-gov
authors:
  - pashlock
redirectto: https://resources.data.gov/resources/data-gov-open-data-howto/
---

Data.gov is the central clearinghouse for open data from the United States federal government. It also provides access to many local government and non-federal open data resources. Find out below how federal, federal geospatial, and non-federal data is funneled to Data.gov and how you can get your data federated on Data.gov for greater discoverability and impact.

This guide is primarily for the [Open Data Points of Contact](https://project-open-data.cio.gov/points-of-contact/) (POC) at each agency. If you would like to add data to Data.gov and you are not the POC for your agency, please contact your POC. If your agency has no POC listed, please continue reading and [contact Data.gov](https://www.data.gov/contact) for assistance.

- [**Overview**](#overview "Overview")
- [**Step 1: Organize your open data for the Data.gov Pipeline**](#step-1-organize-your-open-data-for-the-datagov-pipeline "Step 1: Organize your open data for the Data.gov Pipeline")
    - [**Federal Data with Project Open Data**](#federal-data-with-project-open-data "Federal Data with Project Open Data")
    - [**Federal Geospatial Data**](#federal-geospatial-data "Federal Geospatial Data")
    - [**Non-Federal Data**](#non-federal-data "Non-Federal Data")
- [**Step 2: Coordinate with Data.gov**](#step-2-coordinate-with-datagov "Step 2: Coordinate with Data.gov")
- [**Resources & Tools**](#resources--tools "Resources & Tools")
- [**Frequently Asked Questions**](#frequently-asked-questions "Frequently Asked Questions")

## Overview

Data.gov is primarily a federal open government data site. However, state, local, and tribal governments can also publish metadata describing their open data resources on Data.gov for greater discoverability. Data.gov does not host data directly (with a few exceptions), but rather aggregates metadata about open data resources in one centralized location. Once an open data source meets the necessary format and metadata requirements, the Data.gov team can harvest the metadata directly, synchronizing that source’s metadata on Data.gov as often as every 24 hours.

**Background**

From 2009-2013, agency updates to the Data.gov catalog were not automated. Federal agencies submitted metadata for individual datasets to Data.gov through a central Dataset Management System (DMS). At present, pursuant to the Federal [Open Data Policy](https://project-open-data.cio.gov/policy-memo/) discussed in more detail below, all metadata is added to Data.gov through the federated “harvest” model.

**Dataset Updates**
Additions, updates, and deletions occur through a _Harvest Source_ rather than within Data.gov directly. Data.gov synchronizes those changes through a daily _Harvest Job_.

**Federated Metadata Harvest Architecture**

{{< legacy-img src="/2014/12/harvest-diagram-departmentwide-gis-separate.png" alt="federated harvest architecture diagram" >}}

## Step 1. Organize your open data for the Data.gov Pipeline

Getting your data source ready for harvesting by the Data.gov catalog depends on your data source type:

1. **Federal Data with Project Open Data (non-geospatial):** The most common source is the Public Data Listing as required by the Federal Open Data Policy.
2. **Federal Geospatial Data:** Federal maps, images, GIS products, and other location-based data resources.
3. **Non-federal Data:** Non-federal government sources are not covered by the Federal Open Data Policy, but can be included in the Data.gov catalog voluntarily.

The steps for all three types of data sources are described in detail below.

### Federal Data with Project Open Data

[Project Open Data](https://project-open-data.cio.gov/) is the name of the implementation guidance and associated resources for the [Federal Open Data Policy, OMB M-13-13](https://project-open-data.cio.gov/policy-memo/). This policy requires all [Federal CFO-Act agencies](http://www.gpo.gov/fdsys/pkg/USCODE-2011-title31/html/USCODE-2011-title31-subtitleI-chap9-sec901.htm) to publish a [Public Data Listing](https://project-open-data.cio.gov/catalog/), provided as a [data.json file](https://project-open-data.cio.gov/catalog/#machine-readable-format), using the standard [Project Open Data metadata schema](https://project-open-data.cio.gov/v1.1/schema/). Non-CFO-Act agencies are not covered by this policy, but the process for including their data on Data.gov is the same.

Project Open Data requires agencies to list and describe all agency data in the Public Data Listing. If a dataset is not public or restricted access, the metadata for that dataset is still included in the Public Data Listing, but any portion of the metadata that cannot be made public is redacted. The full, unredacted version of the metadata is provided in the Enterprise Data Inventory which is submitted to OMB and not made public.

Agencies must provide a human readable Public Data Listing at `agency.gov/data` and a machine readable listing, as a standalone JSON file on the agency’s website at `agency.gov/data.json`. This `data.json` file is what gets harvested to the Data.gov catalog.

Federal agencies that do not have a platform to inventory their metadata can make use of a free service hosted by Data.gov called inventory.data.gov (see the separate guide). Contact the Data.gov team via email if you’re interested in using this service.

You can find more information about what is required by the policy in the [Data Catalog Requirements](https://project-open-data.cio.gov/catalog/) for Project Open Data, but the requirements relevant to Data.gov are outlined here:

1. **Open Data Policy Requirements**
2. All CFO-Act agencies must provide an Enterprise Data Inventory and Public Data Listing in accordance with the [Project Open Data metadata schema](https://project-open-data.cio.gov/v1.1/schema/) for the purposes of measuring compliance with OMB’s M-13-13
3. **Required:** Enterprise Data Inventory provided to OMB MAX
4. **Required:** Public Data Listing at: `https://________.gov/data.json`

**An update to the Project Open Data Metadata Schema,** [**_Version 1.1_**](https://project-open-data.cio.gov/v1.1/schema/) **was released on November 6, 2014.**

The Data.gov catalog supports version 1.1 as of December 2, 2014.

When an agency is ready for Data.gov to harvest their data.json for the first time, they should notify Data.gov via [email](mailto:datagovhelp@gsa.gov) and the Data.gov team will create a new Data.gov harvest source for their data.json. The Data.gov team is available to assist agencies in generating the Public Data Listing data.json file and provide tools that may help agencies prepare their data listings.

**Federal data only**
There should be one single harvest source per agency. If a federal agency aggregates data from non-federal sources, they must ensure the agency’s data.json includes data produced by the agency only. Data.gov harvests all metadata directly from publishers including many non-federal sources and works to prevent dataset duplication through intermediaries. It is also important to remember that OMB assesses an agency’s data.json file under the assumption it is comprised of data exclusively from that agency.

**Transitioning to data.json**
When an agency transitions to data.json harvesting for the first time, any existing data on the Data.gov catalog is archived. Data.gov will also provide an export of the existing metadata on Data.gov and note whether any of these datasets were associated with a Data.gov Topic.

**Replacing datasets**
When replacing any dataset in your data.json file it is important to maintain same title and identifier associated with the dataset to ensure consistent discoverability of that dataset going forward. When replacing datasets in your data.json harvest source, using the same identifier will ensure that the URL for the dataset on Data.gov stays the same keeping cited links working and reinforcing the open data principle of [permanence](https://opengovdata.io/2014/permanence-trust-provenance/). It should be noted, however, that when replacing datasets on Data.gov with a brand new harvest source (see _Transitioning to data.json_ above) that using the same identifier or title may not retain the same URL.

**Recovering deleted datasets**
After a dataset has been deleted from Data.gov (i.e., the agency posted an updated data.json file that does not include a particular dataset), there is a grace period of up to 24 hours where it can be easily restored by working with the Data.gov team.

**Error log reports**
Every time the data.json is harvested, an error log is generated that identifies any issues that occurred during the harvest process. If requested, an agency point of contact can receive a daily harvest report with this error log via email.

### Federal Geospatial Data

**Background**

Several federal agencies maintain and manage geospatial data and geographic information systems (GIS). The documentation of geospatial data is subject to authorities pre-dating the Open Data Policy. are required to develop metadata as outlined in [Executive Order 12906](http://www.archives.gov/federal-register/executive-orders/pdf/12906.pdf) and [OMB Circular A-16, revised (2002)](https://obamawhitehouse.archives.gov/omb/circulars_a016_rev/) to support the National Spatial Data Infrastructure (NSDI). The Federal Geographic Data Committee (FGDC) is the interagency group responsible for facilitating these federal activities and collaboration with non-federal organizations on geospatial data efforts. The FGDC has endorsed several geospatial metadata standards, as directed by [OMB Circular A-119](https://obamawhitehouse.archives.gov/omb/circulars_a119/),including the Content Standard for Digital Geospatial Metadata ([CSDGM](http://www.fgdc.gov/metadata/csdgm)), [ISO 19115:2003 Geographic Information – Metadata](http://www.fgdc.gov/metadata/geospatial-metadata-standards) and several related ISO geospatial standards. Since ISO 19115 and the associated standards are voluntary consensus standards (vs. federally-authored) and endorsed by the FGDC, federal agencies are encouraged to transition to ISO metadata as their agencies are able to do so. While the selection of appropriate standards is dependent on the nature of your metadata collection and publication process, ISO metadata should be considered an option now. For more information, [see the FGDC website](https://www.fgdc.gov/metadata).

In the past, geospatial metadata records were maintained and discoverable via separate catalogs and tools, including Geospatial One Stop. In 2013, these sources were merged so that Data.gov (specifically catalog.data.gov) indexes both geospatial and non-geospatial metadata in one place.

Metadata for geospatial datasets in [catalog.data.gov](http://catalog.data.gov/dataset) is also made available in [GeoPlatform.gov](http://www.geoplatform.gov/). GeoPlatform.gov provides access and management of geospatial resources through common geospatial data, services, and applications contributed and administered by trusted sources and hosted on shared infrastructure for use by federal agencies, agency partners, and the public. Geospatial metadata is made available to GeoPlatform.gov from the metadata harvested by catalog.data.gov and is displayed on GeoPlatform.gov via an application programming interface (API) on catalog.data.gov. In other words, the datasets discoverable on GeoPlatform.gov are from the geospatial metadata collected by the catalog using the following API call:

<http://catalog.data.gov/api/3/action/package_search?q=metadata_type:geospatial>

The majority of open government datasets have some relationship to spatial data (e.g. jurisdiction, address). For the purposes of this document and learning how data gets published in Data.gov, “geospatial data” here specifically refers to spatial data that has historically been included as part of the Federal Geographic Data Committee and GeoPlatform.gov and utilizes robust geospatial metadata standards such as the the suite of ISO standards or the FGDC’s Content Standard for Digital Geospatial Metadata ([CSDGM](http://www.fgdc.gov/metadata/csdgm)).These geospatial metadata standards are needed to properly display data and utilize the spatial functionality on GeoPlatform.gov.

**Getting geospatial metadata into Data.gov**

Federal agencies that manage geospatial data should make their geospatial metadata holdings available to Data.gov using a consolidated geospatial harvest source, preferably one single CSW endpoint for the entire agency. For example, all offices and bureaus within the Department of Interior would make their metadata available through one consolidated CSW covering all of the Department of the Interior. (Non-geospatial metadata should be provided separately. See section 3 below.)

While a CSW endpoint and traditional geospatial metadata standards are needed for GeoPlatform.gov and Data.gov to consume the data, the Project Open Data (M-13-13) policy still requires metadata for the agency’s geospatial datasets to be provided within the Enterprise Data Inventory data.json file submitted to OMB with the Project Open Data metadata.

In order to facilitate these requirements, the FGDC and Data.gov have developed a [mapping of elements](https://project-open-data.cio.gov/v1.1/metadata-resources/#crosswalks-for-geospatial-metadata) between the Project Open Data metadata schema v1.1 and the geospatial metadata standards including FGDC CSDGM, ISO 19115:2003, and ISO 19115-1:2014. This crosswalk enables federal agencies with geospatial data to more efficiently meet both metadata requirements.

For agencies that provide geospatial data to GeoPlatform.gov and Data.gov, the following harvest sources must be provided:

1. **Open Data Policy Requirements**
   All CFO-Act agencies must provide an Enterprise Data Inventory in accordance with the Project Open Data metadata schema (see _Federal Data with Project Open Data above_). This includes geospatial **_and_** non-spatial data.
   **Required: Enterprise Data Inventory provided to OMB MAX**

1. **Geospatial Harvest Source — Public Data Listing Requirements** _(for GeoPlatform.gov and Data.gov)_ To be successfully harvested by GeoPlatform.gov and Data.gov, all geospatial data should be provided via one [Catalog Service for the Web (CSW)](https://www.geoplatform.gov/csw-resources) endpoint.Required: A CSW endpoint, e.g.: [_https://data.doi.gov/csw?service=CSW&version=2.0.2&request=GetCapabilities_](https://data.doi.gov/csw?service=CSW&version=2.0.2&request=GetCapabilities)

1. **Data without a Geospatial Harvest Source — Public Data Listing Requirements** _(for GeoPlatform.gov and Data.gov)_ Lastly, to prevent duplication on Data.gov, all agencies that provide a CSW geospatial harvest source to GeoPlatform.gov and Data.gov should create an additional JSON file (called `/sdata-nonspatial-harvest.json`) to include all datasets that are **not** available via the consolidated Geospatial Harvest Source.**Required:** Datasets without a Geospatial Harvest Source for the Public Data Listing at: `https://________.gov/data-nonspatial-harvest.json`

**Datasets Displayed on GeoPlatform.gov**

All datasets included in the CSW will be displayed on GeoPlatform.gov. Datasets included in data-nonspatial-harvest.json will only be displayed on Data.gov, but not GeoPlatform.gov unless the datasets are specially tagged for inclusion there.

If an agency has a geospatial dataset in the data-nonspatial-harvest.json that should be part of GeoPlatform.gov, but is not included in the CSW harvest source, or if an agency has geospatial holdings and is only able to provide a data.json file and not the CSW, it should denote the geospatial dataset using “geospatial” as a value within the “theme” field. For example: _“theme”: [“geospatial”]_

### Non-Federal Data

Data.gov incorporates data sources from state, local, and tribal governments. Non-federal sources are not covered by the Federal Open Data Policy, but can be included in the Data.gov catalog voluntarily. Depending on your local government open data platform, you may already have a harvest source that is Data.gov-ready, or it could take a little more work. Either way, the Data.gov team is available to answer questions about these requirements. For non-federal data to be connected to Data.gov, the following items are required:

1. **A Data Harvest Source**
   Some open data catalog platforms already have a Data.gov harvest source built in (see these examples from [Socrata](https://nycopendata.socrata.com/data.json) and [ArcGIS Open Data](http://opendata.dc.gov/data.json)), but it is possible to set up a harvest source with any data management system (see [this CKAN example](https://www.opendataphilly.org/data.json)). The metadata required from non-federal sources does not include the [USG noted fields](https://project-open-data.cio.gov/v1.1/schema/#USG-note) and additional fields can be left out on a case-by-case basis. To learn more about metadata best practices and validators, check out the Resources and Tools below. **Required:** A Harvest Source at: `https://_______.gov/data.json`, e.g. `https://data.brla.gov/data.json`
2. **A Terms of Use URL**
   A publicly accessible Terms of Use (or Data Policy) URL or similar information in order to make it clear to Data.gov users when they are viewing datasets that are not covered by federal statutory and regulatory requirements.
   **Required:** A Terms of Use URL, _e.g. <https://data.brla.gov/terms-of-service>_

Once you have coordinated with Data.gov on these two items, automated nightly updates to Data.gov can be set up very quickly. Non-federal organizations can provide the necessary information through [the form](http://www.data.gov/local/add).

## Step 2. Coordinate with Data.gov

**Contact the Data.gov team**

Contact the Data.gov team via email to let them know you’d like to get started. Please include a link to your metadata in the data.json format (see _Step 1: Organize your open data for the Data.gov Pipeline_) or let us know if you have questions about how to create a data.json file from your current database along with any relevant links.

**Connecting the pipes**

The Data.gov team will create a new [Harvest Source](https://www.data.gov/developers/harvesting) that will automatically collect information about your datasets and update Data.gov whenever changes are made on your data catalog. Depending on your platform, creating this harvester might just be the push of a button or it could take a little more work, but the team will walk you through it either way.

**Creating Harvest Sources**

For federal agencies with only a data.json and for non-federal entities without geospatial harvest sources, contacting the Data.gov team to create the new harvest source is recommended.

If you are geospatial data publisher and there is a need for you to directly create a harvest source instead of a consolidated CSW endpoint as indicated above, please follow the steps outlined in the section below:

**Creating a Metadata Publishing Account and Harvesting your Metadata to catalog.data.gov**

In order to create a harvest source, you will need to have a login account through the OMB MAX authentication service.

Go to catalog.data.gov and click on “Login” at the bottom of the page. You will be sent to OMB MAX. [Log in to OMB MAX](https://catalog.data.gov/user/login) using your OMB MAX credentials. Two-factor authentication (2FA) is now required for Data.gov access, so enable 2FA through the instructions on the OMB MAX log in page. You can add a device by clicking on “Manage SMS 2-Factor Devices” under your profile settings. This is not necessary if you use your PIV/CAC card to log in to MAX; it is already considered 2FA.

After you have logged in to OMB MAX, [email us](mailto:datagov@gsa.gov) to let us know that you have completed the initial login. In the email provide the organization name and access permission (Admin or Editor) that is required. We will then associate requested permissions to your account.

**(If you manage a non-federal geospatial harvest source, follow the [instructions](https://cms.geoplatform.gov/sites/default/files/document_library/Non-Federal_Geospatial_OMB_MAX_Registration_and_Catalog_Data_gov_Account.pdf) (2.5 MB PDF) from GeoPlatform.gov to obtain access to OMB MAX.)**

Once your Data.gov account is created, and your permissions are in place, you can log in and follow the steps below to create your harvest source:

1. Navigate to [http://catalog.data.gov](http://catalog.data.gov/)
2. Scroll to the bottom of the page and click the “Login” link
3. [Log in using OMB MAX](https://catalog.data.gov/user/login).
4. Navigate to [http://catalog.data.gov/harvest](http://catalog.data.gov/harvest)
5. Click the “Add Harvest Source” button
6. Enter information into the fields provided on the page. They include the following fields:
   - CKAN
   - Data.json
   - CSW Server
   - Web Accessible Folder (WAF)
   - Single spatial metadata document
   - Geoportal Server
   - Web Accessible Folder (WAF) Homogeneous Collection
   - Z39.50
   - ArcGIS Rest API
   - Autodetect
   - ISO 19115 Metadata (ISO 19139 XSD)
   - FGDC Minimal Validation
   - FGDC CSDGM Version 2.0, 1998 (FGDC-STD-001-1998)
   - FGDC CSDGM Biological Data Profile (FGDC-STD-001.1-1999)
   - FGDC CSDGM Metadata Profile for Shoreline Data (FGDC-STD-001.2-2001)
   - FGDC Extensions for Remote Sensing (FGDC-STD-012-2002)
   1. URL – The harvest source URL that contains your data
   2. Title – The title for your harvest source. This title is the name that will be displayed as the access link for the harvest source on Catalog.data.gov
   3. Description – A summary of the data provided by your harvest source
   4. Source Type – The format of the data provided by your harvest source (Note: Some data formats will undergo validation. You will be able to select the validation schema for your data after selecting the Source Type.) Data formats that are supported include:
   5. Update Frequency – How often you want your data to be harvested
   6. Validation: For Geospatial data below validation formats are available, please choose the validation that is applicable for the metadata you are harvesting.
   7. Dataset Visibility – You can display the dataset to the public or have it remain only visible to your organization members
   8. Organization – Select your organization in this field to associate your harvest source to it.
7. Once you have entered all of your information, click the “Save” button to create your harvest source.

Once your harvest source is created, the Harvest Source page will display. To test your new harvest source, click on the “Admin” button, then click on the “Reharvest” button when it displays. The harvesting process should take few minutes to hours based on the number of datasets on the source. Once the harvesting is complete, a job report will be provided that will display any errors that have occurred, if any, during the harvesting process.

**Testing**

The Data.gov team will test to ensure the harvester works properly. If anything seems wrong, the team will help you configure your data catalog so that Data.gov can collect your datasets without any errors.

For harvest sources that are directly setup by data publishers, the job report will display any errors that have occurred for review and resolution at the source, if you have any questions on the errors, please [email the Data.gov team](mailto:datagovhelp@gsa.gov).

**Live within 24 hours!**

Once the harvester has been tested successfully, Data.gov will start automatically consuming information about your datasets and all the basic details of your datasets will be available on Data.gov with links to the source and your open data policy.

## Resources & Tools

### Resources

- Continually updated Federal Open Data Policy guidance and technical standards, commonly referred to as [Project Open Data](http://project-open-data.github.io/)
- Federal Open Data Policy Memo, [OMB M-13-13](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2013/m-13-13.pdf)
- [FGDC geospatial metadata information](http://www.fgdc.gov/metadata)
- [GeoPlatform.gov initiative](http://www.fgdc.gov/initiatives/geospatial-platform)
- [Catalog.Data.gov CKAN Publisher Tutorial to facilitate GeoPlatform Geospatial Data Discovery](http://www.geoplatform.gov/sites/default/files/document_library/catalog_data_gov_publishing_tutorial.pdf)
- Metadata Recommendations Supporting Data Discovery and Use in Data.gov and GeoPlatform.gov _(add link when documented is updated at `https://cms.geoplatform.gov/sites/default/files/document_library`)_

### Testing Tools

- [Project Op](https://www.data.gov/labs/)[en Data Dashboard](http://labs.data.gov/dashboard/offices): A dashboard to track the progress of agencies implementing Project Open Data on a quarterly basis
- [Project Open Data data.json Validator](http://labs.data.gov/dashboard/validate): A validator for v1.0 and v1.1 of the Project Open Data Metadata Schema
- Project Open Data Converters: A [converter](http://labs.data.gov/dashboard/datagov/csv_to_json) to transform CSV files into JSON as defined by the Project Open Data Metadata Schema and an [export API](http://labs.data.gov/dashboard/export) to export from the CKAN API and transform the metadata into JSON as defined by the Project Open Data Metadata Schema
- [Project Open Data Changeset Preview](http://labs.data.gov/dashboard/changeset) — Agencies can use the Project Open Data Dashboard [changeset tool](http://labs.data.gov/dashboard/changeset) to compare their data.json file to data that currently exists on Data.gov to see what will be replaced, added, or removed.
- Agencies can test the process of harvesting their data.json by [requesting access to Data.gov’s test harvester](https://github.com/GSA/data.gov/wiki/Guide-to-creating-an-account-for-and-using-the-test-harvester).

## Frequently Asked Questions

- **[General](#general)**
- **[Federal Data with Project Open Data](#federal-data-with-project-open-data)**
- **[Federal Geospatial](#federal-geospatial-data)**
- **[Non-federal](#non-federal-data)**

### General

**What is “open data” for purposes of Data.gov federation?**

Open data for the purposes of Data.gov federation is US government data that is _public, accessible, described, reusable, complete, timely_, and _managed post-release_. Read more about these principles on [Project Open Data](http://project-open-data.github.io/principles/).

**What entities are eligible for federation on Data.gov?**

Non-federal governments (state, local, tribal) can federate to the Data.gov catalog by meeting the requirements discussed in the Non-federal format section. The Data.gov catalog does contain metadata for some datasets produced by non-government sources (some international organizations, academic institutions) under the authorities of the FGDC or when a federal agency has included the non-government data as its own dataset for Information Quality Act purposes.

**What steps are required to have my government entity federated onto Data.gov?**

To have your government’s open data federated onto Data.gov, you must: 1. Organize your open data for the Data.gov Pipeline by complying with format and standardized metadata requirements, and 2. Coordinate with Data.gov to establish a harvest point for automatic daily updates.

**Does my government entity need to have an existing open data catalog to be added to Data.gov?**

Data.gov is agnostic about whether you have to have an open data catalog of any type to be included on to Data.gov. You simply need to have the metadata of your open data sets organized in a centralized /data.json file in accordance with the required specifications.

**If our site is a CKAN instance, do we still need data.json and/or data-nonspatial-harvest.json?**

Yes — you need both.

**What if you have a .Net Web service already? Does that work?**

For the open data policy and harvesting on to Data.gov, it needs to be a JSON formatted file.

### Federal Data with Project Open Data

**Are there checks in place/planned to verify that the referenced data sources/services are indeed available over time?**

The Project Open Data dashboard at labs.data.gov/dashboard provides more detailed information on the agency datasets on Data.gov. For instance, if a dataset is no longer maintained and becomes a broken link, that will be noted on the dashboard. As a result, required updates will be more easily identified and addressed.

**I saw two admirable example data.json files: <http://www.gsa.gov/data.json> and <http://www.nist.gov/data.json>. Are there more to survey?**

Check out the [Project Open Data Dashboard](http://labs.data.gov/dashboard/offices) or your favorite agency’s website /data.json

**What is Open Data listserv?**

The Open Data listserv is a listserv with over 800 .gov email addresses of people working on open data issues in the federal government. It is a simple way to reach the broad audience of people in federal government working on open data. Anyone with a .gov email can [email the listserv](mailto:listserv@listserv.gsa.gov) with “subscribe open-data” in the body of the message.

**How do you find your Data.gov federal agency point of contact?**

Find your agency on the [Open Data Points of Contact list](https://project-open-data.cio.gov/points-of-contact/). If your agency isn’t listed, [contact Data.gov](http://data.gov/contact) and ask.

### Federal Geospatial Data

**What does CSW stand for? (re: CSW endpoint)**

CSW stands for Catalog Service for the Web — You can read more at [http://geoplatform.gov/csw-resources](http://geoplatform.gov/csw-resources)

**Is a CSW endpoint required if you have geospatial data, or is the data.json sufficient? And should data-nonspatial-harvest.json just contain a subset of data.json?**

Good question! 1. You need both. 2. Yes, correct.

**So geospatial data developers will have to produce two separate metadata records for the life of the program?**

Geospatial data developers should manage their metadata as ISO. Using an XSLT and other tools the ISO metadata can be served in multiple formats including HTML and the Project Open Data JSON. There is no need to manage multiple copies of the metadata simply to publish in multiple formats.

**Can geospatial data also be harvested through a WAF?**

Yes, but using the new harvesting model, the preferred harvest source is a consolidated agency-wide CSW.

**For geospatial data, can you delete a harvest source?**

Yes, but agencies are expected to provide a consolidated harvest source for their entire agency. Individual upstream harvest sources should be managed within each agency.

**What is the native metadata format in data.gov? Is it ISO? for Geo and non-geo?**

Geospatial metadata on Data.gov is converted to ISO if it’s not already provided as ISO. If the metadata is provided to Data.gov in CSDGM format, the source CSDGM metadata record will be available to users, along with the converted ISO metadata record. The common metadata format across Data.gov is a data model specific to CKAN, but all metadata is also available as DCAT RDF and Schema.org microdata. Data.gov is looking into providing other common metadata schemas across the site including the current Project Open Data schema which is a profile of DCAT using JSON-LD.

**Seems an easy approach for the system to check for the geographic extent metadata element to identify geospatial data. Can this be expedited? Better for one solution that works for all then the temp theme keyword solution that requires work from all.**

This has been suggested in the past, but it was decided that simply providing geospatial extent would not serve as an accurate indicator for whether something should be included as part of geoplatform.gov. You can see the discussion at [https://github.com/project-open-data/project-open-data.github.io/issues/303](https://github.com/project-open-data/project-open-data.github.io/issues/303)

**Do I understand correctly that you are going to automate CSDGM/ISO to JSON transform and add the auto-detect for geographic information? If so, why not wait for these solutions versus having all metadata producers to dedicate such effort to a temporary fixes (create two records and add ‘geospatial’ theme keyword)?**

Data.gov does not and will not be providing any transformations from CSDGM/ISO to Project Open Data JSON nor will it be relying on those transformations for data.gov’s purposes. However, as part of the OMB policy, all metadata will need to be provided as JSON including metadata that is currently provided as CSDGM/ISO. Data.gov does help maintain the CKAN extension for generating Project Open Data JSON (ckanext-datajson) and this can be used to provide automated conversion from CSDGM/ISO metadata. We are working to coordinate with geospatial agencies interested in using this extension.

**Can you tell us the source of the CSDGM validation schema that is currently being used to validate records being harvested by data.gov? We are having some problems understanding why certain records are ‘failing’ validation, and the data.gov harvest report error messages are very difficult to decipher in many cases, even by experienced metadata creators.**

The metadata is not validated as CSDGM. It is converted to ISO 19115 then validated against the ISO 19115 schema. CSDGM metadata is transformed to ISO using the following XSLT: [https://github.com/GSA/ckanext-geodatagov/blob/master/conversiontool/fgdc2iso/fgdcrse2iso19115-2.xslt](https://github.com/GSA/ckanext-geodatagov/blob/master/conversiontool/fgdc2iso/fgdcrse2iso19115-2.xslt)

**What if I need help getting my geospatial metadata into Data.gov and GeoPlatform.gov?**

The FGDC has assistance available if you [email USGS.gov](mailto:geodata@usgs.gov). They will also coordinate with the Data.gov team to help address your issue if needed. If you have specific metadata questions, [contact FGDC via email](mailto:fgdc@fgdc.gov).

### Non-federal Data

**What are the advantages of federating my local government’s open data to Data.gov?**

Federating your local open government data on Data.gov makes it more discoverable by Data.gov visitors as well as folks using search engines powered by schema.org. It also makes it easier for people to discover similar datasets across different levels of government, e.g., a citizen can find data about her location from city, state, and federal sources in one place.

**If non-federal data is being shared through Data.gov, is there someone that can help validate that the posted data policy/terms of use are in compliance?**

We make sure that non-federal sources have terms of use/data policies so that we can make it clear to end users that those datasets are governed by the terms of use/data policies of the non-federal entity (state, city, county, etc.) and not the federal policies.

**Can you address data repositories that are federally funded but not hosted at the agency itself? Can they be harvested directly by data.gov?**

Yes.

**If non-federal metadata is shared with the NSGIC GIS Inventory, is it then harvested by data.gov?**

Yes, the NSGIC GIS Inventory (GISI)is a Data.gov registered harvest sources.
