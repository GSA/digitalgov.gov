---
url: /resources/how-to-get-your-open-data-on-data-gov/
date: 2014-12-10 2:53:55 -0400
title: How to Get Your Open Data on Data.gov
summary: Data.gov is the central clearinghouse for open data from the United States federal government. It also provides access to many local government and non-federal open data resources. Find out below how federal, federal geospatial, and non-federal data is funneled to Data.gov and how you can get your data federated on Data.gov for greater discoverability and
authors:
  - pashlock
---

Data.gov is the central clearinghouse for open data from the United States federal government. It also provides access to many local government and non-federal open data resources. Find out below how federal, federal geospatial, and non-federal data is funneled to Data.gov and how you can get your data federated on Data.gov for greater discoverability and impact.

This guide is primarily for the [Open Data Points of Contact](https://project-open-data.cio.gov/points-of-contact/) (POC) at each agency. If you would like to add data to Data.gov and you are not the POC for your agency, please contact your POC. If your agency has no POC listed, please continue reading and [contact Data.gov](https://www.data.gov/contact) for assistance.

  * [**Overview**](#overview "Overview")
  * [**Step 1: Organize your open data for the Data.gov Pipeline**](#step-1 "Step 1: Organize your open data for the Data.gov Pipeline") 
      * [**Federal Data with Project Open Data**](#federal-data-with-project-open-data "Federal Data with Project Open Data")
      * [**Federal Geospatial Data**](#federal-geospatial-data "Federal Geospatial Data")
      * [**Non-Federal Data**](#non-federal-data "Non-Federal Data")
  * [**Step 2: Coordinate with Data.gov**](#step-2 "Step 2: Coordinate with Data.gov")
  * [**Resources & Tools**](#resources-tools "Resources & Tools")
  * [**Frequently Asked Questions**](#faq "Frequently Asked Questions")

<h2 id="overview" style="padding-top: 50px">
  Overview
</h2>

Data.gov is primarily a federal open government data site. However, state, local, and tribal governments can also publish  metadata describing their open data resources on Data.gov for greater discoverability. Data.gov does not host data directly (with a few exceptions), but rather aggregates metadata about open data resources in one centralized location. Once an open data source meets the necessary format and metadata requirements, the Data.gov team can harvest the metadata directly, synchronizing that source’s metadata on Data.gov as often as every 24 hours.

**Background**

From 2009-2013, agency updates to the Data.gov catalog were not automated. Federal agencies submitted metadata for individual datasets to Data.gov through a central Dataset Management System (DMS). At present, pursuant to the Federal </span>[<span style="font-weight: 400">Open Data Policy</span>](https://project-open-data.cio.gov/policy-memo/) <span style="font-weight: 400">discussed in more detail below, all metadata is added to Data.gov through the federated “harvest” model.</p> 

<p>
  <b>Dataset Updates</b>
</p>

<p>
  Additions, updates, and deletions occur through a </span><i><span style="font-weight: 400">Harvest Source</span></i><span style="font-weight: 400"> rather than within Data.gov directly. Data.gov synchronizes those changes through a daily </span><i><span style="font-weight: 400">Harvest Job</span></i><span style="font-weight: 400">.</p> 
  
  <p>
    <strong>Federated Metadata Harvest Architecture</strong>
  </p>
  
  <p>
    <a href="CDN/files/2014/12/harvest-diagram-departmentwide-gis-separate.png">{{< legacy-img src="/2014/12/harvest-diagram-departmentwide-gis-separate.png" alt="federated harvest architecture diagram" >}}</a>
  </p>
  
  <h2 id="step-1" style="padding-top: 50px">
    Step 1. Organize your open data for the Data.gov Pipeline
  </h2>
  
  <p>
    Getting your data source ready for harvesting by the Data.gov catalog depends on your data source type:
  </p>
  
  <ol>
    <li style="font-weight: 400">
      <b>Federal Data with Project Open Data (non-geospatial):</b> The most common source is the Public Data Listing as required by the Federal Open Data Policy.
    </li>
    <li style="font-weight: 400">
      <b>Federal Geospatial Data:</b> Federal maps, images, GIS products, and other location-based data resources.
    </li>
    <li style="font-weight: 400">
      <b>Non-federal Data:</b> Non-federal </span><span style="font-weight: 400">government</span><span style="font-weight: 400"> sources are not covered by the Federal Open Data Policy, but can be included in the Data.gov catalog voluntarily.</li> </ol> 
      
      <p>
        The steps for all three types of data sources are described in detail below.
      </p>
      
      <h3 id="federal-data-with-project-open-data" style="padding-top: 50px">
        Federal Data with Project Open Data
      </h3>
      
      <p>
        <a href="https://project-open-data.cio.gov/">Project Open Data</span></a><span style="font-weight: 400"> is the name of the implementation guidance and associated resources for the </span><a href="https://project-open-data.cio.gov/policy-memo/"><span style="font-weight: 400">Federal Open Data Policy, OMB M-13-13</span></a><span style="font-weight: 400">. This policy requires all </span><a href="http://www.gpo.gov/fdsys/pkg/USCODE-2011-title31/html/USCODE-2011-title31-subtitleI-chap9-sec901.htm"><span style="font-weight: 400">Federal CFO-Act agencies</span></a><span style="font-weight: 400"> to publish a </span><a href="https://project-open-data.cio.gov/catalog/"><span style="font-weight: 400">Public Data Listing</span></a><span style="font-weight: 400">, provided as a </span><a href="https://project-open-data.cio.gov/catalog/#machine-readable-format"><span style="font-weight: 400">data.json file</span></a><span style="font-weight: 400">, using the standard </span><a href="https://project-open-data.cio.gov/v1.1/schema/"><span style="font-weight: 400">Project Open Data metadata schema</span></a><span style="font-weight: 400">. Non-CFO-Act agencies are not covered by this policy, but the process for including their data on Data.gov is the same. </p> 
        
        <p>
          Project Open Data requires agencies to list and describe all agency data in the Public Data Listing. If a dataset is not public or restricted access, the metadata for that dataset is still included in the Public Data Listing, but any portion of the metadata that cannot be made public is redacted. The full, unredacted version of the metadata is provided in the Enterprise Data Inventory which is submitted to OMB and not made public.
        </p>
        
        <p>
          Agencies must provide a human readable Public Data Listing at </span><i><span style="font-weight: 400">agency.gov/</span></i><span style="font-weight: 400">data and a machine readable listing, as a standalone JSON file on the agency’s website at </span><i><span style="font-weight: 400">agency.gov</span></i><span style="font-weight: 400">/data.json. This data.json file is what gets harvested to the Data.gov catalog.</p> 
          
          <p>
            Federal agencies that do not have a platform to inventory their metadata can make use of a free service hosted by Data.gov called inventory.data.gov (see the </span><a href="{{< relref "inventory-data-gov-guide.md" >}}"><span style="font-weight: 400">separate guide)</span></a><span style="font-weight: 400">. Contact the Data.gov team via </span><span style="font-weight: 400">email</span><span style="font-weight: 400"> if you’re interested in using this service.</p> 
            
            <p>
              You can find more information about what is required by the policy in the </span><a href="https://project-open-data.cio.gov/catalog/"><span style="font-weight: 400">Data Catalog Requirements</span></a><span style="font-weight: 400"> for Project Open Data, but the requirements relevant to Data.gov are outlined here:</p> 
              
              <ol>
                <li>
                  <b>Open Data Policy Requirements</b>
                </li>
                <li>
                  All CFO-Act agencies must provide an Enterprise Data Inventory and Public Data Listing in accordance with the </span><a href="https://project-open-data.cio.gov/v1.1/schema/"><span style="font-weight: 400">Project Open Data metadata schema</span></a><span style="font-weight: 400"> for the purposes of measuring compliance with OMB’s M-13-13</li> 
                  
                  <li>
                    <b>Required: </b>Enterprise Data Inventory provided to OMB MAX
                  </li>
                  <li>
                    <b>Required:</b> Public Data Listing at: <i>https://________.gov/data.json</i>
                  </li></ol> 
                  
                  <p>
                    <b><i>An update to the Project Open Data Metadata Schema,</i></b> <a href="https://project-open-data.cio.gov/v1.1/schema/"><b><i>Version 1.1</i></b></a> <b><i>was released on November 6, 2014.</i></b>
                  </p>
                  
                  <p>
                    The Data.gov catalog supports version 1.1 as of December 2, 2014.
                  </p>
                  
                  <p>
                    When an agency is ready for Data.gov to harvest their data.json for the first time, they should notify Data.gov via <a href="mailto:datagovhelp@gsa.gov">email</a> and</span><span style="font-weight: 400"> the Data.gov team will create a new Data.gov harvest source for their data.json. The Data.gov team is available to assist agencies in generating the Public Data Listing data.json file and provide tools that may help agencies prepare their data listings.</p> 
                    
                    <p>
                      <b>Federal data only</b><br /> There should be one single harvest source per agency. If a federal agency aggregates data from non-federal sources, they must ensure the agency’s data.json includes data produced by the agency only. Data.gov harvests all metadata directly from publishers including many non-federal sources and </span><span style="font-weight: 400">works to</span><span style="font-weight: 400"> prevent dataset duplication through intermediaries. It is also important to remember that OMB assesses an agency’s data.json file under the assumption it is comprised of data exclusively from that agency.</p> 
                      
                      <p>
                        <b>Transitioning to data.json</b><br /> When an agency transitions to data.json harvesting for the first time, any existing data on the Data.gov catalog is archived. Data.gov will also provide an export of the existing metadata on Data.gov and note whether any of these datasets were associated with a Data.gov Topic.
                      </p>
                      
                      <p>
                        <b>Replacing datasets</b><br /> When replacing any dataset in your data.json file it is important to maintain same title and identifier associated with the dataset to ensure consistent discoverability of that dataset going forward. When replacing datasets in your data.json harvest source, using the same identifier will ensure that the URL for the dataset on Data.gov stays the same keeping cited links working and reinforcing the open data principle of </span><a href="https://opengovdata.io/2014/permanence-trust-provenance/"><span style="font-weight: 400">permanence</span></a><span style="font-weight: 400">. It should be noted, however, that when replacing datasets on Data.gov with a brand new harvest source (see </span><i><span style="font-weight: 400">Transitioning to data.json</span></i><span style="font-weight: 400"> above) that using the same identifier or title may not retain the same URL.</p> 
                        
                        <p>
                          <b>Recovering deleted datasets</b><br /> After a dataset has been deleted from Data.gov (i.e., the agency posted an updated data.json file that does not include a particular dataset), there is a grace period of up to 24 hours where it can be easily restored by working with the Data.gov team.
                        </p>
                        
                        <p>
                          <b>Error log reports</b><br /> Every time the data.json is harvested, an error log is generated that identifies any issues that occurred during the harvest process. If requested, an agency point of contact can receive a daily harvest report with this error log via email.
                        </p>
                        
                        <h3 id="federal-geospatial-data" style="padding-top: 50px">
                          Federal Geospatial Data
                        </h3>
                        
                        <p>
                          <b>Background</b>
                        </p>
                        
                        <p>
                          Several federal agencies maintain and manage geospatial data and geographic information systems (GIS). The documentation of  geospatial data is subject to authorities pre-dating the Open Data Policy. are required to develop metadata as outlined in </span><a href="http://www.archives.gov/federal-register/executive-orders/pdf/12906.pdf"><span style="font-weight: 400">Executive Order 12906</span></a><span style="font-weight: 400"> and </span><a href="https://obamawhitehouse.archives.gov/omb/circulars_a016_rev/"><span style="font-weight: 400">OMB Circular A-16, revised (2002)</span></a><span style="font-weight: 400"> to support the National Spatial Data Infrastructure (NSDI). The Federal Geographic Data Committee (FGDC) is the interagency group responsible for facilitating these federal activities and collaboration with non-federal organizations on geospatial data efforts. The FGDC has endorsed several geospatial metadata standards, as directed by </span><a href="https://obamawhitehouse.archives.gov/omb/circulars_a119/"><span style="font-weight: 400">OMB Circular A-119</span></a><span style="font-weight: 400">,including the Content Standard for Digital Geospatial Metadata (</span><a href="http://www.fgdc.gov/metadata/csdgm"><span style="font-weight: 400">CSDGM</span></a><span style="font-weight: 400">), </span><a href="http://www.fgdc.gov/metadata/geospatial-metadata-standards"><span style="font-weight: 400">ISO 19115:2003 Geographic Information – Metadata</span></a><span style="font-weight: 400"> and several related ISO geospatial standards. Since ISO 19115 and the associated standards are voluntary consensus standards (vs. federally-authored) and endorsed by the FGDC, federal agencies are encouraged to transition to ISO metadata as their agencies are able to do so. While the selection of appropriate standards is dependent on the nature of your metadata collection and publication process, ISO metadata should be considered an option now. For more information, <a href="https://www.fgdc.gov/metadata">see the FGDC website</a>. </p> 
                          
                          <p>
                            In the past, geospatial metadata records were maintained and discoverable via separate catalogs and tools, including Geospatial One Stop. In 2013, these sources were merged so that Data.gov (specifically catalog.data.gov) indexes both geospatial and non-geospatial metadata in one place.
                          </p>
                          
                          <p>
                            Metadata for geospatial datasets in </span><a href="http://catalog.data.gov/dataset"><span style="font-weight: 400">catalog.data.gov</span></a><span style="font-weight: 400"> is also made available in </span><a href="http://www.geoplatform.gov/"><span style="font-weight: 400">GeoPlatform.gov</span></a><span style="font-weight: 400">. GeoPlatform.gov provides access and management of geospatial resources through common geospatial data, services, and applications contributed and administered by trusted sources and hosted on shared infrastructure for use by federal agencies, agency partners, and the public. Geospatial metadata is made available to GeoPlatform.gov from the metadata harvested by catalog.data.gov and is displayed on GeoPlatform.gov via an application programming interface (API) on catalog.data.gov. In other words, the datasets discoverable on GeoPlatform.gov are from the geospatial metadata collected by the catalog using the following API call: </p> 
                            
                            <p>
                              http://catalog.data.gov/api/3/action/package_search?q=metadata_type:geospatial
                            </p>
                            
                            <p>
                              The majority of open government datasets have some relationship to spatial data (e.g. jurisdiction, address). For the purposes of this document and learning how data gets published in  Data.gov, “geospatial data” here specifically refers to spatial data that has historically been included as part of the Federal Geographic Data Committee and GeoPlatform.gov and utilizes robust geospatial metadata standards such as the the suite of ISO standards or the FGDC’s Content Standard for Digital Geospatial Metadata (</span><a href="http://www.fgdc.gov/metadata/csdgm"><span style="font-weight: 400">CSDGM</span></a><span style="font-weight: 400">).These geospatial metadata standards are needed to properly display data and utilize the spatial functionality on GeoPlatform.gov.</p> 
                              
                              <p>
                                <b>Getting geospatial metadata into Data.gov</b>
                              </p>
                              
                              <p>
                                Federal agencies that manage geospatial data should make their geospatial metadata holdings available to Data.gov using a consolidated geospatial harvest source, preferably one single CSW endpoint for the entire agency. For example, all offices and bureaus within the Department of Interior would make their metadata available through one consolidated CSW covering all of the Department of the Interior. (Non-geospatial metadata should be provided separately. See section 3 below.)
                              </p>
                              
                              <p>
                                While a CSW endpoint and traditional geospatial metadata standards are needed for GeoPlatform.gov and Data.gov to consume the data, the Project Open Data (M-13-13) policy still requires  metadata for the agency’s geospatial datasets to be provided within the Enterprise Data Inventory data.json file submitted to OMB with the Project Open Data metadata.
                              </p>
                              
                              <p>
                                In order to facilitate these requirements, the FGDC and Data.gov have developed a <a href="https://project-open-data.cio.gov/v1.1/metadata-resources/#crosswalks-for-geospatial-metadata">mapping of elements</a> between the Project Open Data metadata schema v1.1 and the geospatial metadata standards including FGDC CSDGM, ISO 19115:2003, and ISO 19115-1:2014. This crosswalk enables federal agencies with geospatial data to more efficiently meet both metadata requirements.
                              </p>
                              
                              <p>
                                For agencies that provide geospatial data to GeoPlatform.gov and Data.gov, the following harvest sources must be provided:
                              </p>
                              
                              <ol>
                                <li>
                                  <b><b> Open Data Policy Requirements<br /> </b></b><br /> All CFO-Act agencies must provide an Enterprise Data Inventory in accordance with the Project Open Data metadata schema (see </span><i><span style="font-weight: 400">Federal Data with Project Open Data above</span></i><span style="font-weight: 400">). This includes geospatial </span><b><i>and </i></b><span style="font-weight: 400">non-spatial data.<br /> <b><br /> Required: Enterprise Data Inventory provided to OMB MAX</b></li> </ol> 
                                  
                                  <ol start="2">
                                    <li>
                                      <b> Geospatial Harvest Source — Public Data Listing Requirements <i>(for GeoPlatform.gov and Data.gov)</span></i><span style="font-weight: 400">To be successfully harvested by GeoPlatform.gov and Data.gov, all geospatial data should be provided via one </span><a href="https://www.geoplatform.gov/csw-resources"><span style="font-weight: 400">Catalog Service for the Web (CSW)</a><span style="font-weight: 400"> endpoint.<br /> </span>Required: A CSW endpoint, e.g.: </span><a href="https://data.doi.gov/csw?service=CSW&version=2.0.2&request=GetCapabilities"><i><span style="font-weight: 400">https://data.doi.gov/csw?service=CSW&version=2.0.2&request=GetCapabilities</i></a></b></li> </ol> 
                                      
                                      <ol start="3">
                                        <li>
                                          <b> Data without a Geospatial Harvest Source — Public Data Listing Requirements</b> <i>(for GeoPlatform.gov and Data.gov) </span></i><span style="font-weight: 400">Lastly, to prevent duplication on Data.gov, all agencies that provide a CSW geospatial harvest source to GeoPlatform.gov and Data.gov should create an additional JSON file (called /</span><i><span style="font-weight: 400">data-nonspatial-harvest.json) </span></i><span style="font-weight: 400">to include all datasets that are <b>not</b><span style="font-weight: 400"> available via the consolidated Geospatial Harvest Source.<br /> </span><b>Required:</b> Datasets without a Geospatial Harvest Source for the Public Data Listing at: </span><i><span style="font-weight: 400">https://________.gov/data-nonspatial-harvest.json</i></li> </ol> 
                                          
                                          <p>
                                            <b>Datasets Displayed on GeoPlatform.gov</b>
                                          </p>
                                          
                                          <p>
                                            All datasets included in the CSW will be displayed on GeoPlatform.gov. Datasets included in data-nonspatial-harvest.json will only be displayed on Data.gov, but not GeoPlatform.gov unless the datasets are specially tagged for inclusion there.
                                          </p>
                                          
                                          <p>
                                            If an agency has a geospatial dataset in the data-nonspatial-harvest.json that should be part of GeoPlatform.gov, but is not included in the CSW harvest source, or if an agency has geospatial holdings and is only able to provide a data.json file and not the CSW, it should denote the geospatial dataset using “geospatial” as a value within the “theme” field. For example:</span><i><span style="font-weight: 400"> “theme”: [“geospatial”]</i></p> 
                                            
                                            <h3 id="non-federal-data" style="padding-top: 50px">
                                              Non-Federal Data
                                            </h3>
                                            
                                            <p>
                                              Data.gov incorporates data sources from state, local, and tribal governments. Non-federal sources are not covered by the Federal Open Data Policy, but can be included in the Data.gov catalog voluntarily. Depending on your local government open data platform, you may already have a harvest source that is Data.gov-ready, or it could take a little more work. Either way, the Data.gov team is available to answer questions about these requirements. For non-federal data to be connected to Data.gov, the following items are required:
                                            </p>
                                            
                                            <ol>
                                              <li>
                                                <b> A Data Harvest Source</b><br /> Some open data catalog platforms already have a Data.gov harvest source built in (see these examples from </span><a href="https://nycopendata.socrata.com/data.json"><span style="font-weight: 400">Socrata</span></a><span style="font-weight: 400"> and </span><a href="http://opendata.dc.gov/data.json"><span style="font-weight: 400">ArcGIS Open Data</span></a><span style="font-weight: 400">), but it is possible to set up a harvest source with any data management system (see </span><a href="https://www.opendataphilly.org/data.json"><span style="font-weight: 400">this CKAN example</span></a><span style="font-weight: 400">). The metadata required from non-federal sources does not include the </span><a href="https://project-open-data.cio.gov/v1.1/schema/#USG-note"><span style="font-weight: 400">USG noted fields</span></a><span style="font-weight: 400"> and additional fields can be left out on a case-by-case basis. To learn more about metadata best practices and validators, check out the </span><a href={{< relref "how-to-get-your-open-data-on-data-gov.md#resources-tools" >}}><span style="font-weight: 400">Resources and Tools</a><span style="font-weight: 400"> below.<br /> </span><b>Required:</b> A Harvest Source at: </span><i><span style="font-weight: 400">https://________.gov/data.json, e.g. </span></i><i><span style="font-weight: 400">https://data.brla.gov/data.json</i></li> </ol> 
                                                
                                                <ol start="2">
                                                  <li>
                                                    <b>A Terms of Use URL</b><br /> <span style="font-weight: 400">A publicly accessible Terms of Use (or Data Policy) URL or similar information in order to make it clear to Data.gov users when they are viewing datasets that are not covered by federal statutory and regulatory requirements.<br /> </span><b>Required:</b> A Terms of Use URL, e.g.</span><i><span style="font-weight: 400"> https://data.brla.gov/terms-of-service</i></li> </ol> 
                                                    
                                                    <p>
                                                      Once you have coordinated with Data.gov on these two items, automated nightly updates to Data.gov can be set up very quickly. Non-federal organizations can provide the necessary information through <a href="http://www.data.gov/local/add">the form</a>.
                                                    </p>
                                                    
                                                    <h2 id="step-2" style="padding-top: 50px">
                                                      Step 2. Coordinate with Data.gov
                                                    </h2>
                                                    
                                                    <p>
                                                      <b>Contact the Data.gov team</b>
                                                    </p>
                                                    
                                                    <p>
                                                      Contact the Data.gov team via </span><span style="font-weight: 400">email</span><span style="font-weight: 400"> to let them know you’d like to get started. Please include a link to your metadata in the data.json format (see </span><i><span style="font-weight: 400">Step 1: Organize your open data for the Data.gov Pipeline</span></i><span style="font-weight: 400">) or let us know if you have questions about how to create a data.json file from your current database along with any relevant links.</p> 
                                                      
                                                      <p>
                                                        <b>Connecting the pipes</b>
                                                      </p>
                                                      
                                                      <p>
                                                        The Data.gov team will create a new </span><a href="https://www.data.gov/developers/harvesting"><span style="font-weight: 400">Harvest Source</span></a><span style="font-weight: 400"> that will automatically collect information about your datasets and update Data.gov whenever changes are made on your data catalog. Depending on your platform, creating this harvester might just be the push of a button or it could take a little more work, but the team will walk you through it either way.</p> 
                                                        
                                                        <p>
                                                          <b>Creating Harvest Sources</b>
                                                        </p>
                                                        
                                                        <p>
                                                          For federal agencies with only a data.json and for non-federal entities without geospatial harvest sources, contacting the Data.gov team to create the new harvest source is recommended.
                                                        </p>
                                                        
                                                        <p>
                                                          If you are geospatial data publisher and there is a need for you to directly create a harvest source instead of a consolidated CSW endpoint  as indicated above, please follow the steps outlined in the section below:
                                                        </p>
                                                        
                                                        <p>
                                                          <b>Creating a Metadata Publishing Account and Harvesting your Metadata to catalog.data.gov</b>
                                                        </p>
                                                        
                                                        <p>
                                                          In order to create a harvest source, you will need to have a login account through the OMB MAX authentication service.
                                                        </p>
                                                        
                                                        <p>
                                                          Go to catalog.data.gov and click on “Login” at the bottom of the page. You will be sent to OMB MAX. </span><a href="https://catalog.data.gov/user/login"><span style="font-weight: 400">Log in to OMB MAX</span></a><span style="font-weight: 400"> using your OMB MAX credentials. Two-factor authentication (2FA) is now required for Data.gov access, so enable 2FA through the instructions on the OMB MAX log in page. You can add a device by clicking on “Manage SMS 2-Factor Devices” under your profile settings. This is not necessary if you use your PIV/CAC card to log in to MAX; it is already considered 2FA. </p> 
                                                          
                                                          <p>
                                                            After you have logged in to OMB MAX, <a href="mailto:datagov@gsa.gov">email us</a></span><span style="font-weight: 400"> to let us know that you have completed the initial login. In the email provide the organization name and access permission (Admin or Editor) that is required. We will then associate requested permissions to your account. </p> 
                                                            
                                                            <p>
                                                              <em><strong>(If you manage a non-federal geospatial harvest source, follow the <a href="https://cms.geoplatform.gov/sites/default/files/document_library/Non-Federal_Geospatial_OMB_MAX_Registration_and_Catalog_Data_gov_Account.pdf">instructions</a> (2.5 MB PDF) from GeoPlatform.gov to obtain access to OMB MAX.)</strong></em>
                                                            </p>
                                                            
                                                            <p>
                                                              Once your Data.gov account is created, and your permissions are in place, you can log in and follow the steps below to create your harvest source:
                                                            </p>
                                                            
                                                            <ol>
                                                              <li style="font-weight: 400">
                                                                Navigate to </span><a href="http://catalog.data.gov/"><span style="font-weight: 400">http://catalog.data.gov</a></li> 
                                                                
                                                                <li style="font-weight: 400">
                                                                  Scroll to the bottom of the page and click the “Login” link
                                                                </li>
                                                                <li style="font-weight: 400">
                                                                  <a href="https://catalog.data.gov/user/login">Log in using OMB MAX</a>.
                                                                </li>
                                                                <li style="font-weight: 400">
                                                                  Navigate to </span><a href="http://catalog.data.gov/harvest"><span style="font-weight: 400">http://catalog.data.gov/harvest</a></li> 
                                                                  
                                                                  <li style="font-weight: 400">
                                                                    Click the “Add Harvest Source” button
                                                                  </li>
                                                                  <li style="font-weight: 400">
                                                                    Enter information into the fields provided on the page. They include the following fields: <ul>
                                                                      <li style="font-weight: 400">
                                                                        CKAN
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Data.json
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        CSW Server
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Web Accessible Folder (WAF)
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Single spatial metadata document
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Geoportal Server
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Web Accessible Folder (WAF) Homogeneous Collection
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Z39.50
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        ArcGIS Rest API
                                                                      </li>
                                                                    </ul>
                                                                    
                                                                    <ul>
                                                                      <li style="font-weight: 400">
                                                                        Autodetect
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        ISO 19115 Metadata (ISO 19139 XSD)
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        FGDC Minimal Validation
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        FGDC CSDGM Version 2.0, 1998 (FGDC-STD-001-1998)
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        FGDC CSDGM Biological Data Profile (FGDC-STD-001.1-1999)
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        FGDC CSDGM Metadata Profile for Shoreline Data (FGDC-STD-001.2-2001)
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        FGDC Extensions for Remote Sensing (FGDC-STD-012-2002)
                                                                      </li>
                                                                    </ul>
                                                                    
                                                                    <ol>
                                                                      <li style="font-weight: 400">
                                                                        URL – The harvest source URL that contains your data
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Title – The title for your harvest source. This title is the name that will be displayed as the access link for the harvest source on Catalog.data.gov
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Description – A summary of the data provided by your harvest source
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Source Type – The format of the data provided by your harvest source (Note: Some data formats will undergo validation. You will be able to select the validation schema for your data after selecting the Source Type.) Data formats that are supported include:
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Update Frequency – How often you want your data to be harvested
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Validation: For Geospatial data below validation formats are available, please choose the validation that is applicable for the metadata you are harvesting.
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Dataset Visibility – You can display the dataset to the public or have it remain only visible to your organization members
                                                                      </li>
                                                                      <li style="font-weight: 400">
                                                                        Organization – Select your organization in this field to associate your harvest source to it.
                                                                      </li>
                                                                    </ol>
                                                                  </li>
                                                                  
                                                                  <li style="font-weight: 400">
                                                                    Once you have entered all of your information, click the “Save” button to create your harvest source.
                                                                  </li></ol> 
                                                                  
                                                                  <p>
                                                                    Once your harvest source is created, the Harvest Source page will display. To test your new harvest source, click on the “Admin” button, then click on the “Reharvest” button when it displays. The harvesting process should take few minutes to hours based on the number of datasets on the source. Once the harvesting is complete, a job report will be provided that will display any errors that have occurred, if any, during the harvesting process.
                                                                  </p>
                                                                  
                                                                  <p>
                                                                    <b>Testing</b>
                                                                  </p>
                                                                  
                                                                  <p>
                                                                    The Data.gov team will test to ensure the harvester works properly. If anything seems wrong, the team will help you configure your data catalog so that Data.gov can collect your datasets without any errors.
                                                                  </p>
                                                                  
                                                                  <p>
                                                                    For harvest sources that are directly setup by data publishers, the job report will display any errors that have occurred for review and resolution at the source, if you have any questions on the errors, please <a href="mailto:datagovhelp@gsa.gov">email the Data.gov team</a>.
                                                                  </p>
                                                                  
                                                                  <p>
                                                                    <b>Live within 24 hours!</b>
                                                                  </p>
                                                                  
                                                                  <p>
                                                                    Once the harvester has been tested successfully, Data.gov will start automatically consuming information about your datasets and all the basic details of your datasets will be available on Data.gov with links to the source and your open data policy.
                                                                  </p>
                                                                  
                                                                  <h2 id="resources-tools" style="padding-top: 50px">
                                                                    Resources & Tools
                                                                  </h2>
                                                                  
                                                                  <h3>
                                                                    Resources
                                                                  </h3>
                                                                  
                                                                  <ul>
                                                                    <li style="font-weight: 400">
                                                                      Continually updated Federal Open Data Policy guidance and technical standards, commonly referred to as </span><a href="http://project-open-data.github.io/"><span style="font-weight: 400">Project Open Data</a></li> 
                                                                      
                                                                      <li style="font-weight: 400">
                                                                        Federal Open Data Policy Memo, </span><a href="https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2013/m-13-13.pdf"><span style="font-weight: 400">OMB M-13-13</a></li> 
                                                                        
                                                                        <li style="font-weight: 400">
                                                                          <a href="http://www.fgdc.gov/metadata">FGDC geospatial metadata information</a>
                                                                        </li>
                                                                        <li style="font-weight: 400">
                                                                          <a href="http://www.fgdc.gov/initiatives/geospatial-platform">GeoPlatform.gov initiative</a>
                                                                        </li>
                                                                        <li style="font-weight: 400">
                                                                          <a href="http://www.geoplatform.gov/sites/default/files/document_library/catalog_data_gov_publishing_tutorial.pdf">Catalog.Data.gov CKAN Publisher Tutorial to facilitate GeoPlatform Geospatial Data Discovery</a>
                                                                        </li>
                                                                        <li style="font-weight: 400">
                                                                          Metadata Recommendations Supporting Data Discovery and Use in Data.gov and GeoPlatform.gov  (<i>add link when documented is updated at https://cms.geoplatform.gov/sites/default/files/document_library</span></i><span style="font-weight: 400">)</li> </ul> 
                                                                          
                                                                          <h3>
                                                                            Testing Tools
                                                                          </h3>
                                                                          
                                                                          <ul>
                                                                            <li style="font-weight: 400">
                                                                              <a href="https://www.data.gov/labs/">Project Op</span></a><a href="http://labs.data.gov/dashboard/offices"><span style="font-weight: 400">en Data Dashboard</span></a><span style="font-weight: 400">: A dashboard to track the progress of agencies implementing Project Open Data on a quarterly basis</li> 
                                                                              
                                                                              <li style="font-weight: 400">
                                                                                <a href="http://labs.data.gov/dashboard/validate">Project Open Data data.json Validator</span></a><span style="font-weight: 400">: A validator for v1.0 and v1.1 of the Project Open Data Metadata Schema</li> 
                                                                                
                                                                                <li style="font-weight: 400">
                                                                                  Project Open Data Converters: A </span><a href="http://labs.data.gov/dashboard/datagov/csv_to_json"><span style="font-weight: 400">converter</span></a><span style="font-weight: 400"> to transform CSV files into JSON as defined by the Project Open Data Metadata Schema and an </span><a href="http://labs.data.gov/dashboard/export"><span style="font-weight: 400">export API</span></a><span style="font-weight: 400"> to export from the CKAN API and transform the metadata into JSON as defined by the Project Open Data Metadata Schema</li> 
                                                                                  
                                                                                  <li style="font-weight: 400">
                                                                                    <a href="http://labs.data.gov/dashboard/changeset">Project Open Data Changeset Preview</span></a><span style="font-weight: 400"> — Agencies can use the Project Open Data Dashboard </span><a href="http://labs.data.gov/dashboard/changeset"><span style="font-weight: 400">changeset tool</span></a><span style="font-weight: 400"> to compare their data.json file to data that currently exists on Data.gov to see what will be replaced, added, or removed.</li> 
                                                                                    
                                                                                    <li style="font-weight: 400">
                                                                                      Agencies can test the process of harvesting their data.json by <a href="https://github.com/GSA/data.gov/wiki/Guide-to-creating-an-account-for-and-using-the-test-harvester">requesting access to Data.gov’s test harvester</a>.
                                                                                    </li></ul> 
                                                                                    
                                                                                    <h2 id="faq" style="padding-top: 50px">
                                                                                      Frequently Asked Questions
                                                                                    </h2>
                                                                                    
                                                                                    <ul>
                                                                                      <li>
                                                                                        <b><a href="#faq-general">General</a></b>
                                                                                      </li>
                                                                                      <li>
                                                                                        <b><a href="#faq-data">Federal Data with Project Open Data</a></b>
                                                                                      </li>
                                                                                      <li>
                                                                                        <b><a href="#faq-geospatial">Federal Geospatial</a></b>
                                                                                      </li>
                                                                                      <li>
                                                                                        <b><a href="#faq-non-federal">Non-federal</a></b>
                                                                                      </li>
                                                                                    </ul>
                                                                                    
                                                                                    <h3 id="faq-general" style="padding-top: 50px">
                                                                                      General
                                                                                    </h3>
                                                                                    
                                                                                    <p>
                                                                                      <b>What is “open data” for purposes of Data.gov federation?</b>
                                                                                    </p>
                                                                                    
                                                                                    <p>
                                                                                      Open data for the purposes of Data.gov federation is US government data that is</span><i><span style="font-weight: 400"> public, accessible, described, reusable, complete, timely</span></i><span style="font-weight: 400">, and</span><i><span style="font-weight: 400"> managed post-release</span></i><span style="font-weight: 400">. Read more about these principles on </span><a href="http://project-open-data.github.io/principles/"><span style="font-weight: 400">Project Open Data</a>.</p> 
                                                                                      
                                                                                      <p>
                                                                                        <b>What entities are eligible for federation on Data.gov?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Non-federal governments (state, local, tribal) can federate to the Data.gov catalog by meeting the requirements discussed in the Non-federal format section. The Data.gov catalog does contain metadata for some datasets produced by non-government sources (some international organizations, academic institutions) under the authorities of the FGDC or when a federal agency has included the non-government data as its own dataset for Information Quality Act purposes.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>What steps are required to have my government entity federated onto Data.gov?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        To have your government’s open data federated onto Data.gov, you  must: 1. Organize your open data for the Data.gov Pipeline by complying with format and standardized metadata requirements, and 2. Coordinate with Data.gov to establish a harvest point for automatic daily updates.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>Does my government entity need to have an existing open data catalog to be added to Data.gov?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Data.gov is agnostic about whether you have to have an open data catalog of any type to be included on to Data.gov. You simply need to have the metadata of your open data sets organized in a centralized /data.json file in accordance with the required specifications.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>If our site is a CKAN instance, do we still need data.json and/or data-nonspatial-harvest.json?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Yes — you need both.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>What if you have a .Net Web service already? Does that work?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        For the open data policy and harvesting on to Data.gov, it needs to be a JSON formatted file.
                                                                                      </p>
                                                                                      
                                                                                      <h3 id="faq-data" style="padding-top: 50px">
                                                                                        Federal Data with Project Open Data
                                                                                      </h3>
                                                                                      
                                                                                      <p>
                                                                                        <b>Are there checks in place/planned to verify that the referenced data sources/services are indeed available over time?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        The Project Open Data dashboard at labs.data.gov/dashboard provides more detailed information on the agency datasets on Data.gov. For instance, if a dataset is no longer maintained and becomes a broken link, that will be noted on the dashboard. As a result, required updates will be more easily identified and addressed.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>I saw two admirable example data.json files: http://www.gsa.gov/data.json and http://www.nist.gov/data.json. Are there more to survey?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Check out the <a href="http://labs.data.gov/dashboard/offices">Project Open Data Dashboard</a> or your favorite agency’s website /data.json
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>What is Open Data listserv?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        The Open Data listserv is a listserv with over 800 .gov email addresses of people working on open data issues in the federal government. It is a simple way to reach the broad audience of people in federal government working on open data. Anyone with a .gov email can <a href="mailto:listserv@listserv.gsa.gov">email the listserv</a> with “subscribe open-data” in the body of the message.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>How do you find your Data.gov federal agency point of contact?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Find your agency on the <a href="https://project-open-data.cio.gov/points-of-contact/">Open Data Points of Contact list</a>. If your agency isn&#8217;t listed, <a href="http://data.gov/contact">contact Data.gov</a> and ask.
                                                                                      </p>
                                                                                      
                                                                                      <h3 id="faq-geospatial" style="padding-top: 50px">
                                                                                        Federal Geospatial Data
                                                                                      </h3>
                                                                                      
                                                                                      <p>
                                                                                        <b>What does CSW stand for? (re: CSW endpoint)</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        CSW stands for Catalog Service for the Web — You can read more at <a href="http://geoplatform.gov/csw-resources">http://geoplatform.gov/csw-resources</a>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>Is a CSW endpoint required if you have geospatial data, or is the data.json sufficient? And should data-nonspatial-harvest.json just contain a subset of data.json?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Good question! 1. You need both. 2. Yes, correct.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>So geospatial data developers will have to produce two separate metadata records for the life of the program?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Geospatial data developers should manage their metadata as ISO. Using an XSLT and other tools the ISO metadata can be served in multiple formats including HTML and the Project Open Data JSON. There is no need to manage multiple copies of the metadata simply to publish in multiple formats.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>Can geospatial data also be harvested through a WAF?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Yes, but using the new harvesting model, the preferred harvest source is a consolidated agency-wide CSW.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>For geospatial data, can you delete a harvest source?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Yes, but agencies are expected to provide a consolidated harvest source for their entire agency. Individual upstream harvest sources should be managed within each agency.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>What is the native metadata format in data.gov? Is it ISO? for Geo and non-geo?</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        Geospatial metadata on Data.gov is converted to ISO if it’s not already provided as ISO. If the metadata is provided to Data.gov in CSDGM format, the source CSDGM metadata record will be available to users, along with the converted ISO metadata record. The common metadata format across Data.gov is a data model specific to CKAN, but all metadata is also available as DCAT RDF and Schema.org microdata. Data.gov is looking into providing other common metadata schemas across the site including the current Project Open Data schema which is a profile of DCAT using JSON-LD.
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        <b>Seems an easy approach for the system to check for the geographic extent metadata element to identify geospatial data. Can this be expedited? Better for one solution that works for all then the temp theme keyword solution that requires work from all.</b>
                                                                                      </p>
                                                                                      
                                                                                      <p>
                                                                                        This has been suggested in the past, but it was decided that simply providing geospatial extent would not serve as an accurate indicator for whether something should be included as part of geoplatform.gov. You can see the discussion at </span><a href="https://github.com/project-open-data/project-open-data.github.io/issues/303"><span style="font-weight: 400">https://github.com/project-open-data/project-open-data.github.io/issues/303</a></p> 
                                                                                        
                                                                                        <p>
                                                                                          <b>Do I understand correctly that you are going to automate CSDGM/ISO to JSON transform and add the auto-detect for geographic information? If so, why not wait for these solutions versus having all metadata producers to dedicate such effort to a temporary fixes (create two records and add ‘geospatial’ theme keyword)?</b>
                                                                                        </p>
                                                                                        
                                                                                        <p>
                                                                                          Data.gov does not and will not be providing any transformations from CSDGM/ISO to Project Open Data JSON nor will it be relying on those transformations for data.gov’s purposes. However, as part of the OMB policy, all metadata will need to be provided as JSON including metadata that is currently provided as CSDGM/ISO. Data.gov does help maintain the CKAN extension for generating Project Open Data JSON (ckanext-datajson) and this can be used to provide automated conversion from CSDGM/ISO metadata. We are working to coordinate with geospatial agencies interested in using this extension.
                                                                                        </p>
                                                                                        
                                                                                        <p>
                                                                                          <b>Can you tell us the source of the CSDGM validation schema that is currently being used to validate records being harvested by data.gov? We are having some problems understanding why certain records are ‘failing’ validation, and the data.gov harvest report error messages are very difficult to decipher in many cases, even by experienced metadata creators.</b>
                                                                                        </p>
                                                                                        
                                                                                        <p>
                                                                                          The metadata is not validated as CSDGM. It is converted to ISO 19115 then validated against the ISO 19115 schema. CSDGM metadata is transformed to ISO using the following XSLT: </span><a href="https://github.com/GSA/ckanext-geodatagov/blob/master/conversiontool/fgdc2iso/fgdcrse2iso19115-2.xslt"><span style="font-weight: 400">https://github.com/GSA/ckanext-geodatagov/blob/master/conversiontool/fgdc2iso/fgdcrse2iso19115-2.xslt</a></p> 
                                                                                          
                                                                                          <p>
                                                                                            <b>What if I need help getting my geospatial metadata into Data.gov and GeoPlatform.gov?</b>
                                                                                          </p>
                                                                                          
                                                                                          <p>
                                                                                            The FGDC has assistance available if you <a href="mailto:geodata@usgs.gov">email USGS.gov</a>. They will also coordinate with the Data.gov team to help address your issue if needed. If you have specific metadata questions, <a href="mailto:fgdc@fgdc.gov">contact FGDC via email</a>.
                                                                                          </p>
                                                                                          
                                                                                          <h3 id="faq-non-federal" style="padding-top: 50px">
                                                                                            Non-federal Data
                                                                                          </h3>
                                                                                          
                                                                                          <p>
                                                                                            <b>What are the advantages of federating my local government’s open data to Data.gov?</b>
                                                                                          </p>
                                                                                          
                                                                                          <p>
                                                                                            Federating your local open government data on Data.gov makes it more discoverable by Data.gov visitors as well as folks using search engines powered by schema.org. It also makes it easier for people to discover similar datasets across different levels of government, e.g., a citizen can find data about her location from city, state, and federal sources in one place.
                                                                                          </p>
                                                                                          
                                                                                          <p>
                                                                                            <b>If non-federal data is being shared through Data.gov, is there someone that can help validate that the posted data policy/terms of use are in compliance?</b>
                                                                                          </p>
                                                                                          
                                                                                          <p>
                                                                                            We make sure that non-federal sources have terms of use/data policies so that we can make it clear to end users that those datasets are governed by the terms of use/data policies of the non-federal entity (state, city, county, etc.) and not the federal </span><span style="font-weight: 400">policies.</p> 
                                                                                            
                                                                                            <p>
                                                                                              <b>Can you address data repositories that are federally funded but not hosted at the agency itself? Can they be harvested directly by data.gov?</b>
                                                                                            </p>
                                                                                            
                                                                                            <p>
                                                                                              Yes.
                                                                                            </p>
                                                                                            
                                                                                            <p>
                                                                                              <b>If non-federal metadata is shared with the NSGIC GIS Inventory, is it then harvested by data.gov?</b>
                                                                                            </p>
                                                                                            
                                                                                            <p>
                                                                                              Yes, the NSGIC GIS Inventory (GISI)is a Data.gov registered harvest sources.
                                                                                            </p>