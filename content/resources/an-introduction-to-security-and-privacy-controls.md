---
date: 2023-10-16 17:52:00 -0500
title: An introduction to security and privacy controls
deck: Explaining NIST’s 800-53 control families for information systems and organizations
summary: What do the control families of NIST 800-53 mean? Here's an overview of the control families that create the foundation of federal security compliance.

# See all topics at https://digital.gov/topics
topics:
  - security

# See all authors at https://digital.gov/authors
authors:
  - lindsay-young

slug: an-introduction-to-security-and-privacy-controls
primary_image: 10x-areas-of-focus

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 1

---

## What are the NIST controls?

Federal security compliance is based on evaluating security criteria. Those criteria are a wide-ranging set of considerations called controls. The National Institute for Standards and Technology (NIST) defines these controls in a special publication (SP) called [NIST SP 800-53 (Revision 5), Security and Privacy Controls for Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final).

To use, buy, or build software for the government, you need authorization to operate (ATO). A huge part of that process is documenting how you are addressing the controls in your system security and privacy plan (SSPP). During the ATO process, assessors determine what controls apply to a given system. The higher the risk of the system, the more controls. Then, that system needs to document those considerations and prove that they have taken those security measures into account. 

For an overview of ATOs, read An introduction to ATOs.

## Why worry about controls?

Understanding the controls is an important part of the ATO process. Specifically when writing a system security and privacy plan. With hundreds of controls, approaching ATOs can be quite daunting. That's why it's good to start off with an overview of the controls.

The controls are grouped by topic, and those topics are called families. Next, we'll explore each control family and what kind of considerations that control family focuses on.

## Meet the family

The three-column table below lists the 20 control families alphabetically by their two-character ID \[ID code]. Security and compliance folks often refer to the controls by this ID. For each, the ID is linked to the full list of controls for that family.

The second column provides the full name of the control family. The third column provides a plain language description of the control to give you a feel for what kind of security concern that control family covers.

<table class="usa-table usa-table--striped">
  <caption>The 20 control families listed alphabetically by their two-character ID codes.</caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Control family</th>
      <th scope="col">Plain language description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">[AC](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=AC)</th>
      <td>Access Control</td>
      <td>Have policies that define who can access information and systems.</td>
    </tr>
    <tr>
      <th scope="row">[AT](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=AT)</th>
      <td>Awareness and Training</td>
      <td>Train staff on IT safety practices, such as annual security training and phishing exercises.</td>
    </tr>
    <tr>
      <th scope="row">[AU](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=AU)</th>
      <td>Audit and Accountability</td>
      <td>Make sure you are creating and monitoring necessary logs and keeping records for the amount of time that they should be kept. You need policies to establish these practices and to produce evidence that you follow these actions.</td>
    </tr>
    <tr>
      <th scope="row">[CA](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=CA)</th>
      <td>Security Assessment and Authorization</td>
      <td>This describes most of the ATO process.</td>
    </tr>
    <tr>
      <th scope="row">[CM](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=CM)</th>
      <td>Configuration Management</td>
      <td>This includes policies and procedures of how software is approved and deployed. Defines who can make decisions and what policies or constraints prevent others from making unauthorized changes. Creating system inventory to document what you have and keeping that up to date.</td>
    </tr>
    <tr>
      <th scope="row">[CP](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=CP)</th>
      <td>Contingency Planning</td>
      <td>Being able to recover if your system goes down or isn't working. You accomplish this by having the policies, technologies, testing, and training on how to recover from your system.</td>
    </tr>
    <tr>
      <th scope="row">[IA](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=IA)</th>
      <td>Identification and Authentication</td>
      <td>How you verify the identity of the users of your system and how your users log into your system.</td>
    </tr>
    <tr>
      <th scope="row">[IR](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=IR)</th>
      <td>Incident Response</td>
      <td>Have policies and procedures to respond to a cyber attack. Have people and tools to respond to data breaches and attacks.</td>
    </tr>
    <tr>
      <th scope="row">[MA](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=MA)</th>
      <td>Maintenance</td>
      <td>Who is responsible for system maintenance. For example approving and monitoring security software, keeping packages up to date.</td>
    </tr>
    <tr>
      <th scope="row">[MP](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=MP)</th>
      <td>Media Protection</td>
      <td>Policies, procedures and tools to keep media secure. Media includes records of data, this could be a wide range of storage options, such as paper or electronic.</td>
    </tr>
    <tr>
      <th scope="row">[PS](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=PS)</th>
      <td>Personnel Security</td>
      <td>Policies and procedures about people's access to information and systems. Making sure people are cleared and trained to access information. People should lose system access when they leave.</td>
    </tr>
    <tr>
      <th scope="row">[PT](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=PT)</th>
      <td>PII Processing and Transparency</td>
      <td>When you can collect PII and how you need to protect PII. This includes giving people a privacy notice and consent to collection.</td>
    </tr>
    <tr>
      <th scope="row">[PE](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=PE)</th>
      <td>Physical and Environmental Protection</td>
      <td>This includes things like locking doors and keeping buildings and access to servers secure.</td>
    </tr>
    <tr>
      <th scope="row">[PL](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=PL)</th>
      <td>Planning</td>
      <td>Policies and procedures about System Security Plans, Rules of engagement and other planning for your system.</td>
    </tr>
    <tr>
      <th scope="row">[PM](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=PM)</th>
      <td>Program Management</td>
      <td>Policies and procedures about managing your broader cyber security environment. This includes things like security and privacy training, data governance and management structures.</td>
    </tr>
    <tr>
      <th scope="row">[RA](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=RA)</th>
      <td>Risk Assessment</td>
      <td>Determining how much risk your system presents. Evaluating what the implications are if your system went down, if data was exposed or if data was tampered with. Looking at the privacy risk of your system and looking for threats.</td>
    </tr>
    <tr>
      <th scope="row">[SA](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SA)</th>
      <td>Covers requirements for acquisition, software development and system management tools.</td>
      <td>1776</td>
    </tr>
    <tr>
      <th scope="row">[SC](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SC)</th>
      <td>System and Communications Protection</td>
      <td>Availability protections against things like DDOS. Security features like Network boundaries, encryption and DNS protections.</td>
    </tr>
    <tr>
      <th scope="row">[SI](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SI)</th>
      <td>System and Information Integrity</td>
      <td>Monitoring your system to look for data breaches.</td>
    </tr>
    <tr>
      <th scope="row">[SR](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home?element=SR)</th>
      <td>Supply Chain Risk Management</td>
      <td>Preventing and looking for tampering of upstream components of your system.</td>
    </tr>
  </tbody>
</table>

You may have noticed that many of the controls require the efforts of your whole team. To get them onboard, it helps to describe the larger objectives of your policies and procedures. Taking the time to explain controls can help everyone better contribute to your system's security and compliance. View NIST's [Cybersecurity and Privacy Reference Tool](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_0/home) for more on control families.

{{Resources card}}

{{Community card}}

.﻿..
