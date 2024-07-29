---
date: 2023-10-18 09:39:00 -0500
title: An introduction to ATOs
deck: Understand the authority to operate process
summary: What is an Authorization to Operate? Before you use software in government, you need to make sure it is allowed. You should know what an ATO is and when you need one.

# See all topics at https://digital.gov/topics
topics:
  - security
  - software-engineering
  - policy

# See all authors at https://digital.gov/authors
authors:
  - lindsay-young

slug: an-introduction-to-ato
primary_image: "title-card-intro-ato-karpenko-ilia-istock-getty-images-604030034-dg-logo"

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 1

---

Watch the video below, Beginner's guide: Getting started with ATOs, for an overview of the authorization to operate process with practical advice to help authorize your system for the first time.

{{< youtube id="vOPO2a33Bak" title="Beginner's guide: Getting started with ATOs" >}}

## What is an ATO?

ATO stands for authorization to operate, also known as "authority to operate." Because there is no perfect, risk-free software system, the ATO process is aimed at minimizing and managing risk responsibility. This process mostly comes from the Federal Information Security Management Act (FISMA). FISMA is an effort to standardize and consolidate security review and reporting across agencies. For more information, see the [Centers for Medicare and Medicaid Services’ helpful one-pager on FISMA.](https://security.cms.gov/learn/federal-information-security-management-act-fisma)

You can think of this process as having five steps. We will go over each step in depth below in _How to ATO your system_.

1. To determine the **system's security impact level**, you first need to understand the risks that you are taking on.
2. You need to have a clear understanding of your project. Document your software and policies with a **System Security and Privacy Plan** (SSPP).
3. Then, there is an **assessment** of your system and your security plan. This process reviews your SSPP and looks for ways to improve the security of your system.
4. Once outstanding risks are identified, the Authorizing Official, (AO) signs off on remaining risk in an **ATO memo**.
5. This process doesn't end. Create a **Plan of Action and Milestones** (POA&M) to help you create and maintain security improvements. Continue to monitor and update your system.

## Why do we need ATOs?

When it comes to ATOs, fun is mandatory! You need to complete the ATO process before you use, buy, or build software for the government.

ATOs can feel very bureaucratic—but they can also be a good opportunity to take stock of what you have and think about how to make it better. Of course, there are ways to improve the system, but, I can honestly say, this process can make your software more secure if you approach it intentionally. If you treat the experience only as a paperwork exercise, you will be missing out on ways to improve your product. Improving privacy and security are ways to protect your users and your agency.

## Roles and responsibilities

It takes many people to collaborate on an ATO, but here are three key roles to understand so you'll know who to talk to, and what their responsibilities are.

1. **System Owner**<br />
**Responsibilities:** Overall procurement, development, integration, modification, operation, maintenance, and retirement of a system. They will work with the team to create documentation, and they are responsible for making sure the team makes security fixes in a timely manner.
2. **Information System Security Officer** (ISSO)<br />
**Responsibilities:** Research, develop, implement, test, and review an organization's information security. They assess the impacts on new systems and system modifications, review the ATO package, and they may have contracts for penetration testing, etc. This person usually works as a liaison to the agency's security team. Your agency may also have **Information System Security Managers** (ISSM) supporting the ISSO.
3. **Authorizing Official** (AO)<br />
**Responsibilities:** Signs a memo that accepts the risks of a system. This person is personally liable for that risk. They will be your agency's Chief Information Officer (CIO) or someone designated by the CIO. A huge part of the ATO process is aiming to educate the AO on what the risks to the system are. You also want to make sure your paperwork is detailed enough so that it can be a good resource if there is an audit. The risks that they are taking are not trivial.

## How to ATO your system

How this process is interpreted and administered across agencies varies. The best advice is to talk early and often to the person or team that will be accessing your system and find out what works best for them.

Sharing a [product roadmap](https://product-guide.18f.gov/define/roadmap/) can help other teams that you work with understand what your future needs may be. Waiting too long to talk to security will make the process take longer. The ATO process is a communication exercise, so creating your documentation as your system grows can be helpful. And you need to talk to your security team to know what kind of documentation they need and how they like things documented. If you start those conversations too late, it may take more time to make changes to meet requirements.

Here is an overview of the five steps you need for a federal ATO. As you begin, check out the [lifecycle of a launch](https://handbook.tts.gsa.gov/launching-software/lifecycle/), which outlines how to prepare for ATOs at GSA. It has a lot of good advice that is transferable to other agencies.

### 1) System security impact level

First, you want to understand what kind of impact a disaster or attack on your data would have to the public and your agency. You can figure this out by completing the [Federal Information Processing Standards (FIPS) 199 worksheet (PDF, 80 KB, 13 pages)](https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.199.pdf).

Security impact level is a combination of the following three questions:

1. How **confidential** is the system's data?<br />
  a. Are there secrets or private information that you need to protect?<br />
  b. Is there personal identifiable information (PII), contract data, or other special kinds of data?

2. What is the importance of the system's **integrity**?<br />
  a. What would be the impacts of the system getting defaced?<br />
  b. What could happen if the data was altered

3. How important is the **availability** of the data?<br />
  a. What are the impacts of things like downtime?

For each question, you categorize the impact as low, medium, or high. The system's security impact level will be the highest answer to the three questions. This will result in your system being classified as either FISMA low, FISMA moderate, or FISMA high.

You will notice that the above questions are about the substance of the system and its data. This doesn't account for where something is hosted or which technologies are used; that will come up in the next step of the process. Also, keep in mind that this is a scale for every information technology (IT) system in government. Sometimes, people can confuse importance with FISMA levels. Just because something is designated as “FISMA low,” that doesn't mean that it's not important. Try to follow the prompts of the worksheet with reasonable answers to figure out your designation.

This is also a good time to research any [Paperwork Reduction Act](https://pra.digital.gov/) (PRA) or Privacy Act requirements, and find out if your project needs a System of Record Notice (SORN).

### 2) System Security and Privacy Plan

The System Security and Privacy Plan (SSPP), also known as the System Security Plan (SSP), is where you document how the project operates and its security measures.

In this document, you will:

* Diagram the system in detail
* Explain who uses your system and how they use it
* Provide technical and policy documentation for the project
* Give thoughtful answers to security questions

{{< img src="cloudgov-diagram-web-app-api" >}}

The security questions come from the National Institute of Standards and Technology (NIST). NIST creates security considerations called "controls." The higher the security level impact (FISMA Level), the more controls your project will be responsible for. Some controls will be already taken care of by your agency or hosting platform.

Many controls can be covered by implementing software correctly, like making sure your website has the logs it needs. Other controls touch on policy and the human element. For example, someone needs to be responsible for making sure accounts are being kept up-to-date, and that people don’t have access to systems after they leave. Take a look at the [security section of the TTS engineering practices guide](https://engineering.18f.gov/security/). It provides technical advice on implementing and documenting your ATO.

These controls are defined in [NIST Special Publication (SP) 800-53 Revision 5: Security and Privacy Controls for Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final):
*Part A: [SP 800-53A Rev. 5, Assessing Security and Privacy Controls in Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/a/r5/final)
*Part B: [NIST SP 800-53B, Control Baselines for Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final)

To look up controls, you can use the section that details [Control Baselines for Information Systems and Organizations](https://csrc.nist.gov/pubs/sp/800/53/b/upd1/final). Agency chief information security officer (CISO) shops usually have additional guidance for select controls on how to apply these standards to your project.

For an overview of NIST Controls, read [An introduction to security and privacy controls](https://digital.gov/resources/an-introduction-to-security-and-privacy-controls/).

### 3) Assessment

The purpose of the ATO assessment is to have experts verify the documentation your team puts together. This is where an Information System Security Officer (ISSO) and/or an Information System Security Officer (ISSM) will look for proof that your system is as you say it is, and that you are following the policies you outlined in your SSP. The proof is saved as an artifact. These artifacts may be things like documentation of policies, results from scan reports, or screen shots that prove the system is working as expected.

The assessors will also look for vulnerabilities in your product, and ways to make your project more secure. This process varies widely depending on who is doing the assessment, what your agency's policies are and how risky your project is. You will probably need software scans to check for any software that is out of date and check that the system settings are secure. You may also need things like penetration testing where a specialized security tester is authorized to exploit the system and try to find flaws in your system.

### 4) ATO

After the authorizing official (AO) reviews the SSPP and Assessment package, the ATO memo is signed by the AO, ISSO, and System Owner. The AO will usually rely on the opinions of the ISSO about when the project is ready to launch and what risks are acceptable.

This is also a human process. The project team needs to build trust with the assessment team and IT leadership. That is an important part of reaching an agreement on an ATO in a timely manner.

### 5) POA&M and monitoring

The ATO process doesn't end once the product is approved. The system owner is responsible for continuing to comply with rules and regulations. That means things like following the practices and policies you said you would do in your SSPP.

The agency's security team usually supports projects with things like regular security scans and alerts for when software the project is using something that is dangerously out of date. When those issues come up, it is the System Owner's responsibility to make sure software risks are addressed in a timely manner. The agency's security team will work with the system owner to document risks in a Plan of Action & Milestones (POA&M). This will record things like when software needs to be updated, and when those updates are complete. As an example, see the [FedRAMP Plan of Action and Milestones (POA&M) template (XLS, 70 KB, 3 worksheets)](https://www.fedramp.gov/assets/resources/templates/FedRAMP-POAM-Template.xlsm).

As the system changes, the system owner needs to work with the security team to update the SSPP documentation. This process is called a Significant Change Request (SCR). For example, if your website is adding a new service like emailing updates to users, this adds new technical tools and data to your system; you’ll need to go through the SCR process to gain permission.

Finally, you will also need to follow your agency's policies for renewing or updating your ATO. That may mean redoing this process every several years, or reviewing a subset of the process every year to make sure the SSPP is up to date.
{{< note >}} **Web Managers Community**

The Web Managers Community of Practice is a group of government employees and contractors who manage government websites and digital services. They work to create a trusted, seamless online experience for all. [Join the Web Managers Community](https://digital.gov/communities/web-content-managers/). {{< /note >}}
