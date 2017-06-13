---


date: 2016-07-21 10:00:48 -0400
title: 'Confirming the Cancellation\: A VHA A/B Testing Quick Study'
summary: 'Summary\: Clinicians using electronic health record (EHR) systems to make requests for patients need an intuitive, but safe, method of confirming that they want to cancel a started function or form. Recently, Veterans Health Administration (VHA) developers asked Human Factors Engineering (HFE) to assess a concern that a confirmation dialog in the EHR contained unclear'
authors: [abigail-noonan]
categories:
  - 'User Testing &amp; Research'
  - UX
tags:
  - A/B testing
  - quick study
  - research
  - U.S. Department of Veterans Affairs
  - usability case study
  - usability testing
  - user centered design
  - user experience
  - User Experience Community of Practice
  - UX
  - Veterans Health Administration
  - VHA
---

> **Summary**: Clinicians using electronic health record (EHR) systems to make requests for patients need an intuitive, but safe, method of confirming that they want to cancel a started function or form. Recently, [Veterans Health Administration](http://www.va.gov/health/) (VHA) developers asked Human Factors Engineering (HFE) to assess a concern that a confirmation dialog in the EHR contained unclear button labeling that might easily confuse or slow down clinicians who encountered it, and created inconsistent messaging across the application. HFE performed a Quick Study, drawing from the suggestions of clinicians and the [User Experience Community of Practice](https://www.WHATEVER/communities/federal-user-experience-community-of-practice/) (UX-COP, an email listserv) to develop six mockups for an A/B comparison. The assessment concluded that clinicians preferred and performed best with button labels that clearly referred to the requested function and used verbs with opposing values to illustrate their options.

## Introduction

Clinicians work in stressful, often chaotic environments with shifting needs and varying demands. A large part of their responsibilities require them to work within an EHR system for both viewing and adding information (such as notes) or requests (such as orders) for their patients. EHR developers refer to this action-oriented portion of their work as write-back. Write-back is crucial for patient care but also introduces multiple opportunities for inefficiencies as well as cognitive load and patient-safety issues. A specific area of concern has been effectively supporting the cancellation of a started action. 
{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/600-x-425-AB-testing-A\_B-split-comparison-web-conversion-test-bakhtiar\_zein-iStock-Thinkstock-469994020.jpg" alt="AB testing A/B split comparison web conversion test" %} 

## The Issue

Clinicians often start “write” functions such as ordering a laboratory test, requesting a consult, or filling in a problem and then find that they don’t need to complete that function for various reasons. In these scenarios, the clinicians select “cancel” at the bottom of the started form. To help ensure that data (and time) is not inadvertently lost, the EHR platform checks that the clinician intended to select the cancellation button with a confirmation dialog (Figure 1).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/388-x-201-AB-Quick-Study-Figure1.jpg" alt="Figure 1: Original Wireframe mockup- Cancel/Cancel Function." %}

<p style="text-align: center">
  <i>Figure 1: Original Wireframe mockup: Cancel/Cancel Function</i>
</p>

The developers reviewed this confirmation dialog with a consulting clinical informaticist. The informaticist expressed concern about the use of “Cancel” and “Cancel Order” as button labels. This led the developers to approach HFE with the question of whether the repetition of the word “Cancel” would cause confusion, hesitation, or unintentional cancellation. HFE offers “Quick Studies” to our VHA customers, and we decided to run one on this question. Quick Studies consist of a brief formative usability assessment, in sync with the developer Agile sprint cycle, to answer focused questions that can feed directly back into development.

To answer the question about button labels, HFE created a mockup of the original confirmation dialog (Figure 1) to compare against other possible options for the confirmation language and format.

## Crowd-Sourcing Usability Expertise

The two-week Quick Study allows for three-four days of planning, two days of testing and three-four days of analysis and reporting. This optimal timing for sprint cycles leaves little preparation and research time for the human factors engineer leading the study. In preparing materials for this study, we reached out to two groups of specialists for feedback. HFE asked clinicians for their experience on how other platforms handled the issue. While this effort did not yield responses, a call for feedback from the GSA User Experience Community of Practice brought in a wealth of responses. The suggestions included:

  * “Start Over”
  * “’Return to Transaction’ (cancel the cancel) and ’Cancel Transaction’”
  * “’Prompt: ‘Are you sure?’” with options ‘Yes’ and ‘No’”
  * “I always appreciate the chance to ‘undo.’ ‘Restore’ and ‘Revert’ options can be helpful”
  * “May depend on context [&#8230;] 2 buttons… CANCEL and DISCARD”
  * “an icon/button with the word ’Cancel‘ surrounded by a red circle with a line through”
  * “[…] provide a way for the user to undo the action”

Listserv respondents reiterated both the “Yes/No” option and the “undo action” options while others sent links to discussion boards and the Nielsen/Norman group **** (Laubheimer, 2015). The Nielsen/Norman references, among others, supported providing an “undo” action as well, and underlined HFE’s initial concern about the “cancel/cancel order” language **** (JohnGB, André, & Lothar_K, 2013)**.** 

Multiple people and articles called for cancelling the function immediately, and then allowing the clinician to “undo” that cancellation, instead of the proposed concept of confirming the cancellation. The “undo” option is clearly strong as it empowers users while allowing them a way out if they’ve acted in error. However, this trust in the user’s wishes could backfire in the cases where a user, such as a clinician or a pilot, is doing something in which mistakes could be fatal. These types of users are also frequently dealing with tremendous cognitive load that can lead to feeling overwhelmed. “Overwhelmed users are likely to overlook the ’undo’ message,” (Rumi P., 2015). The accidental deletion of information could reinforce that overwhelmed feeling. In these cases, the deletion confirmation ensures the message is not overlooked and reinforces trust in the system. One discussion board poster illustrated this concept, and its potential downside, nicely:


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/450-x-225-AB-Quick-Study-Figure2.jpg" alt="Figure 2 a: Undo" %}


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/450-x-255-AB-Quick-Study-Figure2b.jpg" alt="Figure 2 b: Confirmation." %}

<p style="text-align: center">
  <i>Figure 2: Undo [top] vs. Confirmation [bottom]  (Monkey, 2015).<br /> An extreme case and just what we don’t want to do at the VA!</i>
</p>

As a final outreach activity before the study sessions, HFE showed a potential mockup of an undo dialog to two clinical informaticists consulting on the Quick Study. They quickly pointed out that there are potential patient-safety risks to using this format in an EHR, where the question of what data must be written to the patient record may confuse clinicians. They also requested the addition of mockups using the word “Back” for the button returning the clinician to their partly-completed function.

## Mockups and Sessions

Based on the references, research, and input from the UX-COP, HFE created four additional mockup confirmation dialogs to compare to the proposed dialog in a quick usability assessment. Mid-assessment, the developers communicated that they had changed their proposed button language to “Close” and “Cancel Function.” As a result, three of the five sessions presented five options and two sessions had six options. Having a new option didn’t change the results significantly. While the button-order language will be universal for all function-cancellation confirmations, HFE created placeholder functions such as “order” and “consult request” in the mockups to provide verisimilitude to the presented scenarios.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/388-x-201-AB-Quick-Study-Figure3.jpg" alt="Figure 3: Mockup #2 - Return to Function/Cancel Function" %}

<p style="text-align: center">
  <i>Figure 3: Mockup #2 &#8211; Return to Function/Cancel Function.</i>
</p>


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/388-x-201-AB-Quick-Study-Figure4.jpg" alt="Figure 4: Mockup #3 - Back/Delete New Function." %}

<p style="text-align: center">
  <i>Figure 4: Mockup #3 &#8211; Back/Delete New Function.</i>
</p>


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/388-x-201-AB-Quick-Study-Figure5.jpg" alt="Figure 5: Mockup #4 - Cancel/Discontinue Function." %}

<p style="text-align: center">
  <i>Figure 5: Mockup #4 &#8211; Cancel/Discontinue Function.</i>
</p>


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/388-x-201-AB-Quick-Study-Figure6.jpg" alt="Figure 6: Mockup #5 - Back/Proceed with Cancellation." %}

<p style="text-align: center">
  <i>Figure 6: Mockup #5 &#8211; Back/Proceed with Cancellation.</i>
</p>


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/388-x-201-AB-Quick-Study-FIgure7.jpg" alt="Figure 7: Mockup #6 - Close/Cancel Order (late developer addition)." %}

<p style="text-align: center">
  <i>Figure 7: Mockup #6 &#8211; Close/Cancel Order (late developer addition).</i>
</p>

HFE used Optimal Sort’s Chalkmark™ software to display the screenshots in randomized order to each of the five participants and asked them to perform very short tasks. The tasks described various scenarios in which clinicians started a function such as a lab order, consult request, or entry of a new allergy, but realized midway through the form that they needed to cancel it using the “cancel&#8221; button at the bottom of the form. We then asked participants to select the button on the dialog mockup that would ensure that the partially entered data was NOT added to the patient’s record. The HFE facilitator asked the participants to simply click, without too much thought or thinking aloud. Chalkmark recorded which buttons the participants selected and how long it took them to make each click.

Following the six tasks, participants viewed all of the screenshots again and ranked them in ascending order from easiest to most difficult for the purpose of choosing not to enter data into the patient record. In total, the metrics and information HFE captured in these 45-minute sessions included:

  * questionnaire data: 
      * prior experiences with accidental cancellation,
      * desires for confirmation of cancellation, and
      * expectations for that confirmation dialog
  * time-to-click (in seconds) for each mockup,
  * ranking of mockups from easiest to use to most difficult, and
  * questionnaire data on reasons for rankings and preferences.

## The Results

First, the numbers. In all the charts below the placeholder words like “Order,” “Request,” and “Allergy” have been replaced with “Function,” to show the universal design pattern that they are intended to represent. The time on task, while remaining within the short range expected for a one-click scenario, pointed to less participant hesitation with Mockup #2, “Return to Function/Cancel Function” and Mockup #5 “Back/Proceed with Cancellation.” The other findings in the study supported this time-on-task differentiation.


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/600-x-432-AB-Quick-Study-FIgure8.jpg" alt="Figure 8: Average Seconds to Select Correct Button. Notes: \*Task 4 data excludes one incorrect selection, \** Task 6 was only performed by two participants." %}

<p style="text-align: center">
  <i>Figure 8: Average Seconds to Select Correct Button.<br /> </i><i>*Task 4 data excludes one incorrect selection, </i><i>** Task 6 was only performed by two participants</i>
</p>

After the tasks, the participants re-examined all six of the mockups and ordered them from easiest (1) to hardest (6).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/600-x-444-AB-Quick-Study-FIgure9.jpg" alt="Figure 9: Average Ranking out of 6 (one being the easiest, and 6 being the most difficult)." %}

<p style="text-align: center">
  <i>Figure 9: Average Ranking out of 6<br /> </i><i>(one being the easiest, and six being the most difficult)</i>
</p>

On average, Mockup #3: Back/Delete New Function and Mockup #2: Return to Function/Cancel Function were ranked easiest, with scores of 2.00 and 2.25 respectively. Mockups #1 and #6, Cancel/Cancel Function and Close/Cancel Function were rated the most difficult, with score of 4.00 and 4.50 respectively.

Finally we observed the participants as they attempted to click the correct button to complete the scenario tasks. Observational findings, ranked using [HFE&#8217;s severity scale](http://hcs.sagepub.com/content/4/1/23.full.pdf+html) of Minor, Moderate, or Serious, included participant(s) who:

  * Selected the wrong button in Mockup #4 – “Cancel/Discontinue Order” (Serious);
  * Stated they were confused by repetitive use of the word “Cancel” in button labels (Moderate);
  * Felt unsure what the “Back” button meant (Moderate); and
  * Disliked the use of negative verbs in both button options (Moderate).


{% include image/full-width.html img="https://s3.amazonaws.com/sitesusa/wp-content/uploads/sites/212/2016/07/388-x-201-AB-Quick-Study-Figure10.jpg" %}

## Conclusion

Mockup # 2, Return to Request/Cancel Request, performed the best in the comparison testing. As one participant put it, “I think that ‘Cancel Request‘ is very clear—you can’t confuse the two options there.” This option avoids both the duplication of words that instigated the study and the use of negative words in both buttons (cancel/discontinue) that participants stated caused confusion. In addition, it aligns with the results of the web-based research and crowd-sourced input. While the words in the button labels “Return to Request (or any Function)” and “Cancel Request (or any Function)” are longer than other options, the clarity they provide is worth the space they take.

_Abigail Noonan, Sr. Human Factors Engineer, is a contractor from ArcSource Group Inc., working closely with Jennifer Herout, Ph.D., Human Factors Engineer (who collected information for the study via the UX-COP), in the Office of Health Informatics, Office of Informatics and Analytics (10P2) at the Veterans Health Administration._