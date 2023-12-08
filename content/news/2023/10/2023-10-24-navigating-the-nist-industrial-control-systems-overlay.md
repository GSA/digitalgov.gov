---
date: 2023-10-25 19:35:00 -0500
title: Navigating the NIST industrial control systems overlay
deck: How to determine whether overlays apply to your IT system
summary: A quick-start user guide for information technology professionals to begin using overlays as a part of their regular security assessments.

# See all topics at https://digital.gov/topics
topics:
  - security
  - policy
# See all authors at https://digital.gov/authors
authors:
  - michael-marin

slug: navigating-the-nist-industrial-control-systems-overlay
primary_image: ics-industrial-control-system-genestro-istock-getty-images-1414920594

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

## Overview

Federal technologists who manage, own, or administer information technology systems should become familiar with NIST’s special publications (SP), especially if they manage specialized systems that incorporate overlays into their system boundary. People managing IT systems in physical locations, such as laboratories or factories, probably need to apply overlays. After familiarizing themselves with the publications, they should take note of the overlay repository to determine applicability (or non-applicability) to their systems.

The National Institute of Standards and Technology (NIST) announced the inclusion of overlays in their most recently withdrawn revision to the [Security and Privacy Controls for Federal Information Systems and Organizations](https://digital.gov/resources/an-introduction-to-security-and-privacy-controls/); SP 800-53 Revision 4. Although the essence of overlays are not new, they are not as well-known as the core set of controls included in each iteration of 800-53. In fact, in NIST’s newest revision, [SP 800-53 Revision 5 (PDF, 5.8 MB, 492 pages)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf), the word “overlay” is only referenced nine times in the entire 492-page document. Conversely, Revision 4 includes 130 references to "overlay."

Formally, [OMB Circular A-130 (PDF, 550 KB, 85 pages, July 2016)](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/circulars/A130/a130revised.pdf) calls the overlay “… a specification of security or privacy controls, control enhancements, supplemental guidance, and other supporting information employed during the tailoring process, that is intended to complement (and further refine) security control baselines.” While the idea of overlays has been around for almost a decade, there are only three official [NIST-developed overlay submissions](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/overlay-repository/nist-developed-overlay-submissions). Of the three documents, the ICS overlay has been incorporated into a framework called [Guide to Industrial Control Systems (ICS) Security (PDF, 4 MB, 247 pages)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r2.pdf). Presumably, the shift to incorporating overlays into other discrete guidance is responsible for the lack of reference to overlays in SP 800-53 Revision 5.

Control systems are unique junctions of information technology (IT) and operational technology (OT) that work together to perform physical operations. Because of the expanding threat space and (often) critical operations that ICS supports, a tailored baseline of added controls is needed to secure those systems from malicious activity. It is important for system owners and security assessors to be aware of the ICS overlay requirements for industrial control systems. According to an analysis of [NIST SP 800-82 (PDF, 3.8 MB, 247 pages)](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-82r2.pdf), there are 20 additional controls (and/or their enhancements) that must be implemented for ICS depending on the risk control baseline.

## Implementation

Navigating the overlay is similar in scope to how normal IT systems are referenced; find your system’s impact level and in that you will know what control number to include (or exclude) from your security assessment. In Table 1 below, we see a normal matrix of controls for the Access Control (AC) security control family, specifically representing wireless access. A low characterized system would only need to employ the basic AC-18 control to comply with AC-18, Wireless Access. A moderate characterized system would need to employ the basic AC-18 control, plus the enhancement (AC-18 (1)) to comply with the control. To conclude, there are no additional ICS controls that must be implemented for the AC-13 wireless access control area, however other controls and control families may be required.

**Table 1**:

{{< img src="nist-sp-800-82-rev-2-ac-18-wireless-access" alt="" >}}

Now, let’s look at a control with ICS supplemental guidance and see how it compares to what is shown above. In Table 2 below, we see a control with supplemented control baselines, represented by the term “Added.” In this example, an industrial control system that has an impact level of “low” would need to implement the base IA-3 control for device identification and authentication, circled below in red. A normal, non-IT, low impact system would have no requirements to implement the IA-3 control. Further, an ICS that is characterized as moderate or high would implement all controls (and their enhancements) associated with IA-3, circled below in blue. A normal, non-IT, moderate or high impact system would only need to implement the base IA-3 control.

**Table 2**:

{{< img src="nist-sp-800-82-rev-2-ia-3-device-identification-authentication-2" alt="" >}}

## Summary

NIST guidance can often be daunting to digest; the ICS guidebook is nearly 250 pages and is heavily worded and technically challenging. Stakeholders of control systems who are already familiar with NIST SPs will have an easier time directing themselves through the 800-82 guidance. In most cases, it is as simple as the process shown above; find the “Added” supplemental guidance and tailor it to the impact level of your ICS. ICS operators or engineers who are responsible for implementing these controls should take a crash course in a Governance, Risk, and Compliance tool (GRC) before attempting to get their hands dirty. They should also work closely with their system administrators, security engineers, and system owners to best determine how to implement the controls. Hopefully, this guide can serve to reinforce the importance of ICS security controls and act as a quick reference for ICS owners to incorporate the controls into their environment.

## Disclaimer

*The EPA is not being represented by the author of this publication. The United States government and the EPA do not endorse any commercial or open-source products or services. Any reference to specific products, processes, or services by service mark, trademark, manufacturer, or otherwise is provided for informational purposes and does not constitute or imply their endorsement, recommendation, or favoring by the United States government and the EPA.*

<!-- {{< disclaimer >}} -->

{{< note-2 "activity" >}}
Activity text goes here...
{{< /note-2 >}}

{{< note-2 "action" >}}
Action text goes here...
{{< /note-2 >}}

{{< note-2 "comment" >}}
comment text goes here...
{{< /note-2 >}}

{{< note-2 "video" >}}
Video text goes here...
{{< /note-2 >}}

{{< note-2 "group" >}}
Group text goes here...
{{< /note-2 >}}

{{< note-2 "plain" >}}
Note text goes here...
{{< /note-2 >}}

{{< note-2 "disclaimer" >}}{{< /note-2 >}}








