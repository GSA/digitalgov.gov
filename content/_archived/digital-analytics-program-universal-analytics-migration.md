---
url: /services/dap/digital-analytics-program-universal-analytics-migration/
date: 2014-10-14 3:00:34 -0400
title: 'Digital Analytics Program: Universal Analytics Migration'
summary: The DAP Universal Analytics (UA) code is scheduled to be released in February 2015. All agencies are required to have completed the migration to DAP UA by May 31, 2015. This migration, which entails implementing a new code and script block, is required to expand DAP reporting capabilities and remain current with the changing nature
draft: true
---

The DAP Universal Analytics (UA) code is scheduled to be released in February 2015. All agencies are required to have completed the migration to DAP UA by May 31, 2015.

This migration, which entails implementing a new code and script block, is required to expand DAP reporting capabilities and remain current with the changing nature of the field. By moving to Universal Analytics, DAP customers will continue to enjoy the most up-to-date features and resources with regard to their analytics data. <a href="https://support.google.com/analytics/answer/2790010?hl=en" target="_blank">Universal Analytics</a> is Google’s new standard platform for Web analytics, set to replace all of the the legacy Google Analytics (GA) solutions in the near future. Feature development and enhancements made by Google are now taking place on the UA platform only, while the legacy GA solutions are in maintenance-only mode. Benefits of UA include higher sampling thresholds and more flexible data collection methods, among others; <a href="https://support.google.com/analytics/answer/2790010?hl=en" target="_blank">read more about the benefits</a>.

Below are some key questions and answers that will help you with preparation for the migration.

## When do I have to migrate my website to DAP UA?

To ensure uniformity and consistency in reporting across agencies and government-wide, agencies will be required to migrate the existing DAP code to the DAP UA version by **May** **31, 2015**.

## What should I do to prepare for DAP UA migration?

### Scenario 1

**If your website is running only the DAP code (i.e., there are no other independent GA tags or local GA account/s running as part of the DAP tag/script block)**, you will simply have to replace the old DAP GA javascript file and the associated DAP tag/script block with the new DAP UA code. No other actions are needed.

### Scenario 2

**If your website is running the DAP code with your local GA account/s as part of the DAP script block (leveraging the DAP “pua” parallel tracking external parameter)**, you must transfer your local GA’s account/property user interface (UI) to Universal Analytics **BEFORE** replacing the existing DAP federated-analytics.js file with the DAP UA code. This action is necessary to ensure that your website data continues to be received by both the DAP and your local GA account after the migration to the DAP UA.

This transfer will NOT affect your local GA data as it’s just transferring everything behind the scenes at Google to the new “processing technology” to prepare your local GA account for migrating to DAP UA. The transfer only takes a few clicks from your Admin console in your local GA account (see the image below), and takes 24-48 hours to complete.

{{< legacy-img src="/2014/10/290-x-122-UA-upgrade.jpg" alt="Universal Analytics upgrade" >}}

You can view more information about [transferring your local GA account/property to UA](https://developers.google.com/analytics/devguides/collection/upgrade/guide#overview).

### Scenario 3

**If your website is running the DAP code and you also have your own, local, independent GA tag (i.e., not running as part of the DAP script block)**, you will simply have to replace the old DAP GA javascript file and the associated DAP tag/script block with the new DAP UA code. No other actions are needed. However, we encourage you to transfer your local GA account interface to UA and migrate your legacy codebase to UA sooner than later as the legacy platforms will be deprecated in the near future.

## What happens if I don’t migrate my website to DAP UA?

While your website data will continue to be collected and received by DAP, the DAP staff will no longer be providing support and troubleshooting for your legacy DAP code after May 31, 2015. Your customization and reporting options will become increasingly more limited over time and, eventually, reporting will stop as Google prepares to retire all of its legacy GA code bases.

## What happens to my legacy/historical data in local GA accounts when I migrate to DAP UA?

Your local GA legacy/historical data will not be affected by the migration to DAP UA.

## How will I be notified when the DAP UA code is ready for agencies to implement?

By the end of February 2015, we’ll send another email communication as well as create a post on Yammer’s DAP Online User Group with the link to the implementation instructions and the DAP UA code.
