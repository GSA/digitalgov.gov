---
date: 2020-12-14 10:56:00 -0500
title: "TTS Bug Bounty Program: 3 Year Review"
deck: We're reflecting on our Bug Bounty program for the last 3 years and
  highlighting some lessons learned.
summary: We're reflecting on our Bug Bounty program for the last 3 years and
  highlighting some lessons learned.
# See all topics at https://digital.gov/topics
topics:
  - security
  - crowdsourcing
# See all authors at https://digital.gov/authors
authors:
  - alyssa-feola
  - aidan-feldman
slug: tts-bug-bounty-program-3-year-review
primary_image: bug-bounty1
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1
---
The [Technology Transformation Services (TTS) Bug Bounty Program](https://hackerone.com/tts) is one of the first of its kind. While [Hack the Pentagon](https://www.hackerone.com/hack-the-pentagon) engagements are timebound, TTS was the first in government to operate an ongoing bug bounty program. Our program has been running for three years, and we wanted to use the milestone to share our experience!

As described in the [Binding Operational Directive 20-01: Vulnerability Disclosure Policy](https://cyber.dhs.gov/bod/20-01/):

*In bug bounty programs, organizations pay for valid and impactful findings of certain types of vulnerabilities in their systems or products. A financial reward can incentivize action, and may attract people who might not otherwise look for vulnerabilities.*

{{< img src="bug-bounty-timeline" >}}

## TTS Bug Bounty Program Overview

The TTS Bug Bounty runs on top of our [vulnerability disclosure program](https://18f.gsa.gov/vulnerability-disclosure-policy/), offering financial rewards for valid findings for a subset of our systems. Those bounties are an incentive for security researchers to spend time digging into our systems, finding problems and reporting them before a bad actor finds them and exploits them. Here’s how it works:  
  

1.  A security researcher finds a vulnerability in one of our systems
1.  They submit to [our program](https://hackerone.com/tts)
1.  The triage team confirms that:
  1.  The system is [in scope](https://hackerone.com/tts?type=team#scope)
      - If we believe the vulnerability may exist in other systems, we pass that information along to the system owners to proactively find and fix
  2.  The finding is valid
  3.  What the severity rating should be, based on the [Common Vulnerability Scoring System (CVSS)](https://nvd.nist.gov/vuln-metrics/cvss)
1.  The report is assigned to the system owners
1.  There may be back-and-forth for clarification, decision on whether it’s considered a security vulnerability or not, etc.
1.  Once validated, a bounty is awarded
1.  The system owners fix the issue

Successful programs receive dozens of reports per month, but on average, only about 10% of submissions turn out to be valid. All submissions need responses or else you risk alienating researchers. 

There is a Not To Exceed (NTE) bounty pool from which researchers are paid, ensuring that the cost of the program has an upper limit.

## All Time Review:

On average, we receive 21 submissions per month. 18% of submissions are valid and unique vulnerabilities, which have an average award of $462.

Severity breakdown:

-   20% High or Critical
-   47% Medium
-   29% Low

We value researchers’ contributions and are proud of our program’s responsiveness! On Average:

-   Reports receive a first response within nine hours and are triaged within four days.
-   Researchers receive bounty 15 days from the date of submission.
-   Valid vulnerabilities are fixed within two months.

{{< img src="bug-bounty3" >}}

## Year 1

As shown in the chart below, a majority of the submissions came at the onset of our public launch.

{{< img src="bug-bounty2" >}}

We attribute this to getting press around the launch, as well as having systems that had not yet been scrutinized by outside security researchers.

**Bounty Highlight**

Report: [#265528](https://hackerone.com/reports/265528), Reported: 9/2/2019, Asset: data.gov Weakness: Cross-site Scripting (XSS) - Reflected, Bounty: $300, Researcher: Dr. Jones (sp1d3rs)

Description: A security researcher discovered [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) issue on the data.gov site. The XSS worked only with few ‘&’ chars in certain places, identified by a trial-and-error method. The input appeared to be correctly sanitized without it. The discovered XSS issue was site-wide and affected 80+ endpoints.

## Year 2

In our second year, our rate of valid reports increased from 39% the prior year to almost 52%. We’ve attributed the spike in activity to updating the scope with a new asset that was widely distributed and drew more attention to our program.

{{< img src="bug-bounty5" >}}

**Bounty Highlight**

Report: [#387007](https://hackerone.com/reports/387007), Reported: 7/26/2018, Asset: cloud.gov Weakness: Open Redirect, Bounty: $150, Researcher: Sergey Bobrov (bobrov)

Description: It was found that https://idp.fr.cloud.gov is vulnerable to an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) due to improper validation of the value of URL path. A web application accepts a user-controlled input that specifies a link to an external site, and uses that link in a Redirect. This simplifies phishing attacks.

## Year 3

In our third year, 30% of our valid reports had a high or critical [CVSS rating](https://nvd.nist.gov/vuln-metrics/cvss), which contributed towards a justification for increasing internal staff to improve the system development life cycle.

{{< img src="bug-bounty4" >}}

**Bounty Highlight**

Reported: [#514224](https://hackerone.com/reports/514224), 3/23/2019, Asset: search.gov, Weakness: Server-Side Request Forgery (SSRF), Bounty: $150, Researcher: Noriaki Iwasaki (niwasaki)

Description: The search.gov endpoint was vulnerable to [SSRF](https://owasp.org/www-community/attacks/Server_Side_Request_Forgery) via a URL parameter. The parameter is protected but could be bypassed using a Line Feed character (`%0A`). This may have allowed an attacker to poke on the internal network.

### What we learned…

**Staffing** &mdash; We started out with a rotating cohort of internal folks overseeing the program. Once the team grew and got more defined we switched to dedicated staff. This allows us to have consistent focus on the state and potential improvements to the program.

**Engagement** &mdash; The more we reached out to the crowd and sent messages, the more traction we got on our program. Researchers want to know what is going on with our program and see value in submitting bugs to an actively managed program.

**Routing** &mdash; As the first public bug bounty program run by a civilian agency, we get around two reports per month intended for other agencies, because people don’t know where else to report. We worked with CISA on [their Binding Operational Directive (BOD) for vulnerability disclosure](https://cyber.dhs.gov/bod/20-01/) so that other federal agencies can start programs of their own.
  
**Effort** &mdash; It really does take a village. There tend to be false positives: about 68% of all the reports we receive are not valid. We use third-party triage as part of our program, which means that we don’t have to worry about the reports until they’ve been verified. This helps to offload distraction from our team.

### How we’ve iterated…

**Volume** &mdash; When a new system is added, there tend to be more reports up front, which then decreases to a more steady state. To mitigate that volume, we throttle the reports by starting systems out in a private bug bounty, which is only available to a small number of security researchers. (There are other ways to do this throttling—that’s just what works for us.) We also have a setting for signaling, a means of identifying hackers who have had consistently valid reports, so that we receive reports from more vetted researchers. After a time, we move systems to the public program to make it available to anyone to submit. We then increase the bounty rewards over time, to incentivize researchers to continue to investigate our systems.

### Where we plan on improving…

**Tracking** &mdash; The Bug Bounty system we use provides an inbox for managing all the vulnerability reports we get across programs, but this is disconnected from project management tools that individual teams use. We want to better track both individual vulnerabilities and more general vulnerability classes for each program. For example, a reported cross-site scripting vulnerability must also generate a separate issue to find and fix all other related cross-site scripting vulnerabilities. Each project team then needs to track that resolution separately, and TTS wants visibility across all those systems.

**Consolidation** &mdash; We currently have our Bug Bounty run through a platform, while we also have a Google Form and email address for [vulnerability disclosure](https://18f.gsa.gov/vulnerability-disclosure-policy/#reporting-a-vulnerability). This means the latter don’t go through the same triage process, and we have to track reported vulnerabilities in three places. Having a single funnel for reporting (for a bounty or not) will make things easier for the program and more consistent for teams that are part of it.

**Scope**  &mdash; The TTS Bug Bounty program started with five programs in scope. The main programs that had priority were cloud.gov and login.gov. The three other slots were considered on a rotating basis and had a [Selection Process](https://github.com/18F/bug-bounty/blob/master/selection-process.md) to help determine which programs should be added. Currently, there are eight TTS systems under the Bug Bounty program.  We have [made it a requirement](https://github.com/18F/tts-tech-portfolio/issues/new?assignees=&labels=ATO&template=ato.md&title=ATO+for+%5Bsystem%5D+-+due+%5Bdate%5D) for all new TTS systems going forward, and are working to [get all our existing systems in scope](https://github.com/18F/bug-bounty/issues/34).

TTS has been very happy with the effectiveness and value of our Bug Bounty program. It is representative of the forward-thinking, civic tech-minded folks that are invested in working with the security researcher community. We hope to see more created at other agencies.

---
**Are there other government agencies out there with bug bounty programs that we aren’t aware of? Let us know! [devops@gsa.gov](mailto:devops@gsa.gov)**
