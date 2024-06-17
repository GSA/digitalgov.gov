---
date: 2024-06-14 09:00:00 -0500
title: "Privacy and security"
deck: ""
summary: "Introduces government web and digital practitioners to public policy, which influence technology projects as a force both for and against change."
guide: public-policy
primary_image: guide-public-policy

---

In the [previous section](https://digital.gov/guides/public-policy/accessibility/#content-start), we touched on Section 508 of the Rehabilitation Act of 1973 and the importance of building accessible digital products and federal resources. Now, we will cover how the Privacy Act of 1974 and the Federal Information Security Modernization Act (FISMA) work and share resources to learn more.

{{< note >}}
This information is best practices based on our own experience. We encourage you to get in touch with [your agency’s privacy official](https://www.fpc.gov/council-members/) and Chief Information Security Officer (CISO) to answer any specific privacy- and security-related questions.
{{< /note >}}

## What is the Privacy Act?

The Privacy Act respects the public’s [privacy](https://digital.gov/topics/privacy/) by limiting government use, reuse, and disclosure of personally identifiable information (PII). Specifically it outlines the following:

- Requires agencies to give public notice about record-keeping systems
- Establishes fair information practices for managing data
- Limits agencies’ ability to share data
- Grants the public access to their own records

The following items illustrate some things you can do to respect the public’s privacy:

- Tell users what information you are collecting from them, and why
- Minimize collecting information where possible; consider public burden
- Conduct Privacy Impact Assessments (PIAs) for systems with PII
- For agency information exchanges – consider pursuing a Computer Matching Agreement
- Agencies must publish notice of its systems of records in the Federal Register (also known as System of Records Notice or SORN)
- Abide by agency and federal disclosure rules
- Consider the Health Insurance Portability and Accountability Act (HIPAA) implications if applicable

Visit Justice.gov to learn more about the [Privacy Act of 1974](https://www.justice.gov/opcl/overview-privacy-act-1974-2020-edition). You may also visit your agency website. For example, the Department of Health and Human Services (HHS) publishes [agency-specific Privacy Act information on HHS.gov](https://www.hhs.gov/foia/privacy/index.html).

## What is FISMA?

The Federal Information Security Modernization Act requires agencies to protect federal information by:

- Creating a cybersecurity plans
- Conducting regular risk assessments
- Implementing cybersecurity controls
- Continuously monitoring their systems for vulnerabilities and attacks

For more information, see the [Centers for Medicare and Medicaid Services’ helpful one-pager on FISMA](https://security.cms.gov/learn/federal-information-security-management-act-fisma).

To use, buy, or build software for the government, you need an authorization to operate (ATO). This process mostly comes from FISMA. For an overview of ATOs, read [An introduction to ATOs](https://digital.gov/resources/an-introduction-to-ato/).

Federal security compliance is based on evaluating security criteria. Those criteria are a wide-ranging set of considerations called controls. The National Institute for Standards and Technology (NIST) defines these controls in a special publication (SP) called NIST SP 800-53 (Revision 5), Security and Privacy Controls for Information Systems and Organizations. Read [An introduction to security and privacy controls](https://digital.gov/resources/an-introduction-to-security-and-privacy-controls/) for a brief explainer of NIST’s 800-53 control families for information systems and organizations.

FedRAMP is a governmentwide program that provides a standardized, reusable approach to security assessment and authorization for cloud computing products and services. Visit FedRAMP.gov to learn more about the [FedRAMP program basics](https://www.fedramp.gov/program-basics/).

{{< ring title="Case study">}}
**Considering privacy and security for FindSupport.gov**

For context, we cover these two policies to highlight their importance. Although [FindSupport.gov](https://www.samhsa.gov/find-support) did not go through all the steps listed above, the team maintained awareness for how such policies could impact product development.

The FindSupport.gov team used SAMHSA’s existing content management system, removing the requirement for the team to seek a new ATO. Additionally, all user research sessions required asking for verbal and written consent from participants, and using approved tools to store research and de-identified participant information.
{{< /ring >}}
