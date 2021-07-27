---
date: 2021-06-14 17:00:00 -0500
kicker: Data
title: Developing a Data-Driven Roadmap
deck: 
summary: A Presidential Innovation Fellow working with the U.S. Department of Veterans Affairs shares how complex organizations can create data-driven roadmaps.
# See all topics at https://digital.gov/topics
topics:
  - data
  - pif
  - presidential-innovation-fellows
  - strategy
# See all authors at https://digital.gov/authors
authors:
  - babatunde-oguntade
slug: developing-a-data-driven-roadmap
primary_image: pif-card-alt
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

Healthcare is complex — just like humans. The care needed to ensure the health and wellbeing of people is as unique as the individual receiving care. Today, smart, compassionate healthcare has never been more important. Across the federal government, we are combatting the COVID-19 pandemic and addressing health inequities.

Great healthcare happens through everyday innovation. That’s why <a href = "https://presidentialinnovationfellows.gov/fellows/babatunde-oguntade">I became a Presidential Innovation Fellow</a>: to help relieve the burden of care through smart tools and compassionate people. My expertise is in process engineering and machine learning, and my passion is using mathematical models to improve performance, efficiency, and safety. This blog shares a deep dive into the small wins that help advance great healthcare. In this case, I explore how to develop a data-driven roadmap for health benefits claims processing.

***

##  Introduction

I am working with VA Office of the Chief Technology Officer (CTO) to deliver Veterans’ benefits faster and use deep learning and health insights to optimize benefits dollars and care for Veterans more holistically. Like many federal agencies, VA is a data-rich organization. With massive data comes massive responsibility. Tech for tech’s sake won’t achieve our mission; we need to ensure we’re building the right products and services for the right reasons. To do so, we knew we needed to develop data-driven roadmaps. In this blog, I walk through a data-driven roadmap case study: claims processing with the CTO Benefits Team. I hope it serves as both a strategic and technical example that any data-rich organization can use.

VA offers tax-free monthly payments to Veterans who get injured during service or whose existing condition deteriorated as a result of service. Veterans must submit an application to receive these benefits, but the wait period to get a decision from VA is on average greater than 100 days. There are conflicting reasons for the long wait time, making it difficult to determine what areas of the process constitute the greatest bottlenecks and require immediate attention.

This blog presents the results of a big data analysis on the trajectory of a claim from “inception to the completion”, using disability claims data from January 2020 through January 2021. The data from this period contained about 100 million unique records and over 30 unique fields. Our analysis includes: 

- Developing a simple linear phenomenological model that explained over 92% of variance in the observed processing time,<img src="https://latex.codecogs.com/svg.image?t_{processing}" title="t_{processing}" /> , thus enabling us to determine the contributions of the different process elements; 

- Ranking the different process elements by importance to determine what would lead to the greatest decrease in processing time; 
and
- Proposing solutions to address the problems.

## The Disability Claims Process and Performance Measures

When VA receives a disability claim, an end product is created directly in the <b><em>Veteran Benefits Management System (VBMS)</em></b> for manual establishment, or through the <b><em>Corporate Database</em></b> and read by VBMS otherwise. <b><em>The end product (EP) system</em></b> is the primary workload monitoring attribute for Veterans Service Centers. The end product creation involves three major steps, which we describe as the <b><em>Contention, Flash, and Special Issues</em></b> processes:

- **Contention**: The contention process involves translating the conditions or issues raised by the Veteran into VA parlance. Example: A Veteran may have “ringing in the ear” as a contention, which must be translated to “tinnitus” during the contention process.
- **Flash**: The flash process is initially a tagging step that allows claimant-specific details to be added to a claim to ensure proper routing.  Subsequently, evidence-based details are added as flash as more information is gathered on the claim. Example: A common initial flash used in the routing of claims is “Homelessness.” Veterans who indicate they are homeless on their application are prioritized in claims processing.
- **Special Issues**: The special issues process is similar to the flash process but the tag involved here is claim-specific. Example: Agent Orange-Vietnam is associated with claims where Veterans contend they were exposed to Agent Orange during their service in Vietnam. 
 
End product creation in VBMS is referred to as the “establishment” of a claim. The difference between when a claim is received and established in VBMS is depicted as <img src="https://latex.codecogs.com/svg.image?t_{establishment}" title="t_{establishment}" /> and is a measure of the effectiveness of the claim’s intake method.
 
Historically, it took weeks before claims were established, prompting a flurry of innovative solutions around the intake process. Specifically, VA Benefits Team, including Presidential Innovation Fellow Nelson A. Colon Vargas, PhD, created  <a href = "https://www.oit.va.gov/news/article/?read=va-launches-smart-tool-to-reduce-veteran-wait-times-for-disability-claims">the first artificial intelligence (AI) solution at VA</a> to ensure that claims are promptly established. The AI solution known as the <b><em>Claims Attributes Application Programming Interface version 1.0 (CAAPIv1.0)</em></b> and the <b><em>Benefits Claims Application Programming Interface (BCAPI)</em></b> established preprocessed claims on receipt in VBMS by automatically translating contentions to classification codes. We make a distinction between claims established via the CAAPIv1.0 and BCAPI and those established through ‘manual’ techniques not discussed here in order to measure the performance of the AI solution in a production environment.
 
Once claims are established, either through the manual or AI approach, they are routed to the appropriate Veteran Service Representative (VSR) to begin the evidence building or adjudication process. In the course of our discovery efforts, it became clear that the entry of data into VBMS is not a one-time event because the VSRs update and delete contentions, flashes and special issues multiple times before a claim is fully developed.

Even though we do not currently measure the revolving activities around VBMS, we believe it is central to claims’ long processing time. To measure these activities, we introduced two new measures for contentions, flashes and special issues. These measures capture the accuracy and agility of data flow into VBMS.
 
The first measure known as the efficiency of a process is defined as:

<p align="right"> 
<img src="https://latex.codecogs.com/svg.image?\begin{align*}\eta_i=\frac{number\&space;of\&space;i\&space;entered&space;-&space;number\&space;of\&space;i\&space;removed}{number\&space;of\&space;i\&space;entered},&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(1)}\end{align*}" title="\begin{align*}\eta_i=\frac{number\ of i\ entered - number of\ i\ removed}{number\ of\ i\ entered}, \qquad\qquad\qquad\qquad {(1)}\end{align*}" />
 </p>

where <img src="https://latex.codecogs.com/svg.image?\inline&space;i&space;" title="\inline i " /> is contentions, flashes or special issues and measures the accuracy of each process. The second measure <img src="https://latex.codecogs.com/svg.image?\inline&space;t_{i}" title="\inline t_{i}" /> captures the agility of the data entry process. Again, <img src="https://latex.codecogs.com/svg.image?\inline&space;i&space;" title="\inline i " /> assumes value of contentions, flashes and special issues depending on the process being described. <img src="https://latex.codecogs.com/svg.image?t_{i}" title="t_{i}" /> measures the time from initial establishment until the last element of a process is entered or removed from VBMS.

The situation described above also leads to multiple VSRs in different locations working on a claim before it is concluded. To capture this, we introduced two other measures, the total number of unique VSRs or adjudicators that work on a claim  <img src="https://latex.codecogs.com/svg.image?\inline&space;n_{adjudicators}" title="\inline n_{adjudicators}" /> and the total number of unique locations where a claim was processed - <img src="https://latex.codecogs.com/svg.image?\inline&space;n_{locations}" title="\inline n_{locations}" />. Finally, we introduce the <img src="https://latex.codecogs.com/svg.image?\inline&space;n_{contentions}" title="\inline n_{contentions}" /> which measures the number of unique claimant contentions at submission.  Submissions with a lot of contentions would likely be more complicated than the ones with fewer contentions. Utilizing the huge dataset available to us, we proceeded to determine these metrics for claims established using manual methods and the AI based CAAPIv1.0/BCAPI.

## Disability Benefits Data
 
The data used in our analysis was provided by the Office of Performance Analysis and Integrity. Specifically, they provided journal data detailing all activities on a claim. This allowed us to track the dynamics of all the claims we considered. We worked with 103 million unique rows and 38 fields, spanning January 2020 to January 2021. We focused only on claim submissions received, processed, and closed within the time period specified to ensure the comparison between claims that are AI established and those manually established is unbiased. We present some of our high-level findings in the next section.

## Disability Process Metrics

The results of our analysis are presented here using a combination of the mean and standard deviation for each measure for both claim types under consideration: claims established through CAAPIv1.0/BCAPI protocol and those established using manual techniques.

### Claim Establishment Time

As mentioned earlier, the claims establishment time <img src="https://latex.codecogs.com/svg.image?\inline&space;t_{establishment}&space;" title="\inline t_{establishment} " />
 measures the time between when a claim is received and entered into VBMS. It is a proxy for the effectiveness of the claim’s intake process. The establishment times measured are:

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}&space;\overline{t}_{establishment,ai}\&space;=&space;3.59&space;\pm&space;13.40\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(2)}&space;\end{align*}" title="\begin{align*} \overline{t}_{establishment,ai}\quad\ = 3.59 \pm 13.40\ days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(2)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}&space;\overline{t}_{establishment,manual}&space;=&space;3.77&space;\pm&space;12.22\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(3)}&space;\end{align*}" title="\begin{align*} \overline{t}_{establishment,manual} = 3.77 \pm 12.22\ days\qquad\qquad\qquad{(3)} \end{align*}" />
</p>

<p align="justify">
Equations 2 and 3 are the establishment times for the CAAPIv1.0/BCAPI establishment protocol and manual establishment methods, respectively. The two numbers are statistically but not operationally different with our AI protocol establishing claims five hours sooner than the manual establishment technique in use at VA.
</p>

### Claim Establishment Accuracy

Next, we present the results of the contentions, flashes and special issues efficiencies as defined by Equation 1. The measures penalize the removal of previously entered data and have a range of 0 to 1. The results of the efficiency process are presented below:

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}\quad\overline{\eta}_{contentions,ai}&space;=&space;0.83&space;\pm&space;0.31&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(4)}&space;\end{align*}" title="\begin{align*}\quad\overline{\eta}_{contentions,ai}\quad\ = \quad\0.84 \pm 0.31\quad\quad {(4)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}\overline{\eta}_{contentions,manual}&space;=&space;0.81&space;\pm&space;0.41&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(5)}&space;\end{align*}" title="\begin{align*}\overline{\eta}_{contentions,manual} = 0.84 \pm 0.41 \quad {(5)} \end{align*}" />
</p>

The contentions efficiencies of both the AI process (Equation 4) and manual method (Equation 5) are similar, with the manual method efficiency slightly being more variable. The efficiencies of the flash process are also similar for the AI and manual establishment methods as shown below:

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}&space;\overline{\eta}_{flashes,ai}&space;=&space;0.81&space;\pm&space;0.20&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(6)}&space;\end{align*}" title="\begin{align*} \overline{\eta}_{flashes,ai}\quad\ = 0.84 \pm 0.20\qquad{(6)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}&space;\overline{\eta}_{flashes,manual}&space;=&space;0.80&space;\pm&space;0.20&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(7)}&space;\end{align*}" title="\begin{align*} \overline{\eta}_{flashes,manual} = 0.84 \pm 0.20\qquad{(7)} \end{align*}" />
</p>

The special issues efficiency of the AI established claims is noticeably higher than that of manually established claims as shown below:

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}&space;\overline{\eta}_{special&space;\&space;issues,ai}&space;=&space;0.42&space;\pm&space;0.20&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(8)}&space;\end{align*}" title="\begin{align*} \overline{\eta}_{special \ issues,ai}\quad\ = 0.42 \pm 0.20\qquad\ {(8)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\begin{align*}&space;\overline{\eta}_{special&space;\&space;issues,manual}&space;=&space;0.33&space;\pm&space;0.23&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(9)}&space;\end{align*}&space;" title="\begin{align*} \overline{\eta}_{special \ issues,manual} = 0.33 \pm 0.23 \qquad {(9)} \end{align*} " />
</p>

### Claim Establishment Agility 

While the process efficiencies of the AI established claims are slightly better than those established through manual techniques, their processing times are noticeably slower as shown below:

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}&space;\overline{t}_{contentions,ai}&space;=&space;62&space;\pm&space;68\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(10)}&space;\end{align*}" title="\inline \begin{align*} \overline{t}_{contentions,ai}\quad\ = 62 \pm 68\ days \qquad{(10)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{t}_{contentions,manual}&space;=&space;55&space;\pm&space;68\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(11)}\end{align*}" title="\inline \begin{align*}\overline{t}_{contentions,manual} = 55 \pm 68\ days\qquad{(11)}\end{align*}" />
</p>

***
<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{t}_{flashes,ai}&space;=&space;82&space;\pm&space;70\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(12)}&space;\end{align*}" title="\inline \begin{align*}\overline{t}_{flashes,ai}\quad\ = 82 \pm 70\ days\qquad\qquad {(12)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{t}_{flashes,manual}&space;=&space;77&space;\pm&space;69\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(13)}\end{align*}" title="\inline \begin{align*}\overline{t}_{flashes,manual} = 77 \pm 69\ days\qquad\qquad {(13)}\end{align*}" />
</p>

***
<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{t}_{special&space;\&space;issues,ai}&space;=&space;59&space;\pm&space;67\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(14)}&space;\end{align*}" title="\inline \begin{align*}\overline{t}_{special \ issues,ai}\quad\ = 59 \pm 67\ days\qquad\qquad{(14)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{t}_{special&space;\&space;issues,manual}&space;=&space;53&space;\pm&space;66\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(15)}&space;\end{align*}" title="\inline \begin{align*}\overline{t}_{special \ issues,manual} = 53 \pm 66\ days\qquad\qquad {(15)} \end{align*}" />
</p>

It took 5 – 7 days longer for AI established claims to be completed in comparison to claims established through the manual method.

### Claim Establishment – Other Measures

Our analysis revealed that an average of 3 VSRs work on every claim regardless of the establishment method as shown below:
 
<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{n}_{adjudicators,ai}&space;=&space;3&space;\pm&space;1&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(16)}&space;\end{align*}" title="\inline \begin{align*}\overline{n}_{adjudicators,ai}\quad\ = 3 \pm 1\ \qquad\qquad{(16)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{n}_{adjudicators,manual}&space;=&space;3&space;\pm&space;2&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(17)}&space;\end{align*}" title="\inline \begin{align*}\overline{n}_{adjudicators,manual} = 3 \pm 2\ \qquad\qquad {(17)} \end{align*}" />
</p>

AI established claims were also processed at an average of 3 locations as opposed to 2 locations for claims established through the manual method:

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{n}_{locations,ai}&space;=&space;3&space;\pm&space;1&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(18)}&space;\end{align*}" title="\inline \begin{align*}\overline{n}_{locations,ai}\quad\ = 3 \pm 1\ \qquad\qquad{(18)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{n}_{locations,manual}&space;=&space;2&space;\pm&space;1&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(19)}&space;\end{align*}" title="\inline \begin{align*}\overline{n}_{locations,manual} = 2 \pm 1\ \qquad\qquad {(19)} \end{align*}" />
</p>

<p align="justify">
Finally, AI established claims contain fewer claimant contentions at submission:
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{n}_{contentions,ai}\&space;=&space;9&space;\pm&space;8&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(20)}&space;\end{align*}" title="\inline \begin{align*}\overline{n}_{contentions,ai}\ = 9 \pm 8\ \qquad\qquad {(20)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{n}_{contentions,manual}&space;=&space;11&space;\pm&space;13&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(21)}&space;\end{align*}" title="\inline \begin{align*}\overline{n}_{contentions,manual} = 11 \pm 13\ \qquad\qquad {(21)} \end{align*}" />
</p>

We also estimated the time it took to close a claim once a ratings decision has been reached, <img src="https://latex.codecogs.com/svg.image?t_{ratings}" title="t_{ratings}" />. No noticeable difference was observed between AI established claims and claims established through the manual route as shown below:
 
<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{t}_{ratings,ai}&space;=&space;0.57&space;\pm&space;3.02\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(22)}&space;\end{align*}" title="\inline \begin{align*}\overline{t}_{ratings,ai}\quad\ = 0.57 \pm 3.02\ \qquad\qquad {(22)} \end{align*}" />
</p>

<p align="right">
<img src="https://latex.codecogs.com/svg.image?\inline&space;\begin{align*}\overline{t}_{ratings,manual}&space;=&space;0.57&space;\pm&space;3.30\&space;days&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;\qquad&space;{(23)}&space;\end{align*}" title="\inline \begin{align*}\overline{t}_{ratings,manual} = 0.57 \pm 3.30\ \qquad\qquad{(23)} \end{align*}" />
</p>

## A Claims Phenomenological Model

Having described these performance measures, phenomenological models relating them to processing times, <img src="https://latex.codecogs.com/svg.image?t_{processing}" title="t_{processing}" />, for both AI and manually established claims were developed. The processing time, <img src="https://latex.codecogs.com/svg.image?t_{processing}" title="t_{processing}" />, is defined strictly as the difference between when a claim was received at VA and closed after a disability rating decision was reached. The average processing time of AI established claims, <img src="https://latex.codecogs.com/svg.image?\overline{t}_{processing,ai}" title="\overline{t}_{processing,ai}" /> was 88.2 days with a spread of 72.4 days while that of manually established claims, <img src="https://latex.codecogs.com/svg.image?\overline{t}_{processing,manual}" title="\overline{t}_{processing,manual}" /> was 83 days with a spread of 72.4 days. The model presented here for the processing time of manually established claims, <img src="https://latex.codecogs.com/svg.image?{t}_{processing,manual}" title="\overline{t}_{processing,manual}" />, did not take into account other details on the claims form including medical service records, demography information, and additional evidence relevant to determining validity or otherwise of a claim. Our model was able to describe over ninety two percent of variability in the processing time which is more than sufficient for its intended purpose of determining the contribution of each measure to the dependent variable.
 
<p align="center">
<img src="https://latex.codecogs.com/svg.image?t_{processing,manual}=&space;0.42*t_{flashes,manual}&plus;0.24*t_{contentions,manual}&plus;0.51*t_{special&space;\&space;issues,manual}&plus;0.70*t_{establisment,manual}&plus;0.09*t_{ratings,manual}&plus;5.85*n_{locations,manual}-1.22*n^{2}_{locations,manual}&plus;&space;2.10*n_{adjudicators,manual}&plus;0.24*n_{contentions,manual}-&space;24.0*\eta_{special\&space;issues,manual}&plus;44.0*\eta^{2}_{special&space;\&space;issues,manual}&plus;20.2*\eta^{2}_{flashes,manual}-5.62*\eta_{contentions,manual}" title="t_{processing \ manual}= 0.42*t_{flashes}+0.24*t_{contentions}+0.51*t_{special \ issues}+0.70*t_{establisment}+0.09*t_{ratings}+5.85*n_{locations}-1.22*n^{2}_{locations}+ 2.10*n_{adjudicators}+0.24*n_{contentions}- 24.0*\eta_{special\ issues}+44.0*\eta^{2}_{special \ issues}+20.2*\eta^{2}_{flashes}-5.62*\eta_{contentions}" />
</p>

### Actionable Insights from the Claims Phenomenological Model

Here we discuss the deductions made using the average measures for the manual process and the phenomenological model.
 
#### _Intake Process_

Decreasing the number of days until a claim is established  <img src="https://latex.codecogs.com/svg.image?t_{establishment,manual}" title="t_{establishment,manual}" />, by 1 day and keeping all the other variables constant decreases the overall processing time by 0.70 days. It currently takes about 3.8 days to establish a claim according to Equation 3 which implies the total amount of time savings we can get from instantaneously establishing claims is 2.6 days.
 
#### _Contentions_

Decreasing the number of days until the last contention is added, <img src="https://latex.codecogs.com/svg.image?t_{contentions,manual}" title="t_{contentions,manual}" />, by 1 day and keeping all else constant, decreases the overall processing time by 0.24 day. Equation 11 suggests we can save 13 days if all the contentions are added on receipt since it currently takes an average of 55 days until the last contention is added.

Increasing the efficiency of the contentions process, <img src="https://latex.codecogs.com/svg.image?\eta_{contentions,manual}" title="\eta_{contentions,manual}" />, by 1% decreases the overall processing by 0.05 day. Equation 5 shows that we can get an uplift of 0.8 days by improving the efficiency of the contentions process to unity.
 
#### _Flash Process_

Decreasing the current number of days until the last flash is added <img src="https://latex.codecogs.com/svg.image?t_{flashes,manual}" title="t_{flashes,manual}" />, by 1 day and keeping other variables constant decreases the overall processing time by 0.42 day. It currently takes an average of 77 days until the last flash is added according to Equation 13 implying the most savings in days, we can get by adding flashes on day zero is 32 days.
 
Increasing the current efficiency of the flash process, <img src="https://latex.codecogs.com/svg.image?\eta_{flashes,manual}" title="\eta_{flashes,manual}" />, by 1% and keeping all else constant increases the overall processing time by 0.002 day. Equation 8 shows the most improvement we can get on the flash efficiency is 20% indicating we can potentially save 0 extra days by improving the accuracy of the flash entry process.
 
#### _Special Issues_

Decreasing the current number of days until the last special issue is added, <img src="https://latex.codecogs.com/svg.image?t_{special\&space;issues,manual}" title="t_{special\ issues,manual}" />, by 1 day and keeping other variables constant decreases the overall processing time by 0.51 day. It currently takes an average of 53 days until the last special issue is added according to Equation 9, leading to a potential savings of 27 days if all special issues can be added at establishment.
 
Increasing the efficiency of special issues, <img src="https://latex.codecogs.com/svg.image?\eta_{special\&space;issues,manual}" title="\eta_{special\ issues,manual}" />, by 1% reduces the overall processing time by 0.24 day. Using Equation 15 as our basis, there is a potential of saving 16.1 days if  <img src="https://latex.codecogs.com/svg.image?\eta_{special\&space;issues,manual}" title="\eta_{special\ issues,manual}" /> can be increased by 67.3%.
 
#### _Time to Close Claim after Ratings Decision_

Decreasing the number of days from ratings to closure <img src="https://latex.codecogs.com/svg.image?t_{ratings,manual}" title="t_{ratings,manual}" />, by 1 day reduces the overall processing time by 0.09 day while keeping all other variables constant. The total uplift possible according to Equation 23 is 0.05 days.

#### _Number of Locations_

Decreasing the number of processing locations, <img src="https://latex.codecogs.com/svg.image?n_{locations,manual}" title="n_{locations,manual}" />, by 1 reduces the overall processing time by 4.63 days.

#### _Number of Adjudicators_

Decreasing the number of adjusters, <img src="https://latex.codecogs.com/svg.image?n_{adjudicators,manual}" title="n_{adjudicators,manual}" />, by 1 reduces the overall processing time by 2.10 days.

### Insights - Summary

Table 1.0 below lists the insights gleaned from the analysis in order of decreasing potential savings in days. The numbers show that we can potentially save about 100 days if all claims are established on receipt, and the process swirl is eliminated.  Perfecting the intake process saves a maximum of 3 days which is not the most effective in decreasing total processing time. Shortening the time of data entry into VBMS and improving the accuracy of the special issues process are the most impactful in decreasing the processing time. These actions could potentially save 88 days in the overall lifecycle or processing time of a claim. Streamlining the processing locations could potentially save an additional 5 days per location removed.

The results show that improving the current efficiencies of the contentions and flash processes would yield marginal-to-no improvements because the two efficiencies are currently around eighty percent. The time required to gather evidence, implicitly captured here as, <img src="https://latex.codecogs.com/svg.image?t_{flashes}" title="t_{flashes}" />, is a measure of the time it takes for Veterans to meet the administrative burden of compliance placed on them by VA. The naïve way to meet this burden at the time of claim establishment is to not ask for any evidence. In reality, this would be irresponsible and potentially illegal. We explore possible solutions to the problem in the next section.

**_Table 1.0: Potential Savings in days._**

_Process Action_                                                     |*Potential Decrease in Processing Time(days)*
:--------------------------------------------------------------------|:----------------------------------------------------------------------:
<img src="https://latex.codecogs.com/svg.image?Decrease&space;\&space;t_{flashes,manual}" title="Decrease \ t_{flashes,manual}" />                                    | *32*
<img src="https://latex.codecogs.com/svg.image?Decrease&space;\&space;t_{special\&space;issues,manual}" title="Decrease\ t_{special\ issues,manual}" />                           | *27*
<img src="https://latex.codecogs.com/svg.image?Increase\&space;\eta_{special\&space;issues,manual}" title="Increase\ \eta_{special\ issues,manual}" />                         | *16*
<img src="https://latex.codecogs.com/svg.image?Decrease&space;\&space;t_{contentions,manual}&space;" title="Decrease \ t_{contention,manual} " />                                | *13*
<img src="https://latex.codecogs.com/svg.image?Decrease&space;\&space;n_{locations,manual}&space;" title="Decrease \ n_{locations,manual} " />                                  | *5*
<img src="https://latex.codecogs.com/svg.image?Decrease&space;\&space;t_{establishment,manual}" title="t_{establishment,manual}" />                                | *3*
<img src="https://latex.codecogs.com/svg.image?Decrease&space;\&space;n_{adjudicators,manual}&space;" title="Decrease \ n_{adjudicators,manual} " />                            | *2*
<img src="https://latex.codecogs.com/svg.image?Increase&space;\&space;\eta_{contentions,manual}" title="Increase \ \eta_{contentions,manual}" />                             | *1*
<img src="https://latex.codecogs.com/svg.image?Increase\&space;\eta_{flashes,manual}" title="Increase\ \eta_{flashes,manual}" />                                 | *0*

## Conclusions and Recommendations

Over 50 percent of the disability claims processed at VA are <em>subsequent</em> claims – EP 020, based on 2020 data. This means that prior EP details already exist in VBMS, suggesting these claims could be processed on receipt without asking Veterans for information we already have.  VA has limited ability to make Veterans submit documents on time, thus making the option of extracting data from VBMS and/or other accessible databases attractive.

Special Issues efficiency, <img src="https://latex.codecogs.com/svg.image?\eta_{special\&space;issues,manual}" title="\eta_{special\ issues,manual}" />, is very low at the moment and tighter definitions are needed for it.

My analysis revealed that piecewise AI solutions could have <b><em>unintended</em></b> overall consequences. Although the CAAPIv1.0/BCAPI helps us to establish claims quicker than the manual establishment process, these claims end up having longer processing times, 5.2 days to be precise because of possible operational inefficiencies. The new iteration of the API, CAAPIv2.0/BCAPI will add initial flashes and special issues at the point of establishment and may speed up the processing times of claims established through it.

Another intriguing and compelling solution is to make final ratings decisions directly from claimant’s initial submission thereby bypassing the current framework that relies on classification codes, flashes and special issues through the use of an <b><em>End-To-End AI Solution</em></b>. This approach will be a compromise solution between the naïve approach mentioned earlier and the manual method currently in use at VA. The data required to develop this solution has been provided by the Office of Performance Analysis and Integrity and is being worked on now. Once the solution is completed, we would be able to probe the abstraction to determine the minimum amount of administrative burden that VA must place on Veterans to meet its compliance requirements and perhaps change policy.

I'm grateful to work with VA CTO colleagues to center Veterans in all we do. AI is merely a tool for better service to our nation’s Veterans. When we remove administrative burdens, we’re not making any colleague’s work obsolete; we’re enabling VA to focus on what matters: efficient, safe, and meaningful healthcare.

***

_Are you passionate about technology as a tool to improve lives? Interested in using your expertise for public good? That’s what Presidential Innovation Fellows (PIF) is all about. Learn more about PIF at [our website](https://www.presidentialinnovationfellows.gov/), and follow us on [Twitter](https://www.twitter.com/PIFgov) and [LinkedIn](https://www.linkedin.com/company/white-house-presidential-innovation-fellows/) to find the latest work from our Fellows_.
