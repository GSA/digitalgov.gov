---
date: 2023-07-24 09:00:00 -0500
title: "Systems"
guide: hcd-design-concepts
primary_image: hcd-design-concepts
---

Economists divide economies into two categories of activity: manufacturing products, and executing services. This parsing is not quite precise enough for the challenges of design, however. In the design process, we have a third possible category of designed thing: systems.

The public sector is primarily a service provider, and those services are upheld, augmented, and accessed through products. But, especially internally, the public sector also launches and maintains systems that, while not exactly services themselves, are also not exactly products. Systems differ from services in that they, too, uphold services, or even launch products, but they are neither. One example of this is the hiring system through which the public can enter the government workforce. The website [USAJobs.gov](https://www.usajobs.gov/) is a product that creates access to the hiring system. The action of hiring itself is a service, while the process of getting hired is a system supporting that service. In this way, the hiring managers (the people who write position descriptions, review resumes, conduct background checks, etc.), are a part of the hiring system, which, as a whole, is the service to the American public of hiring.

{{< ring title="Case in point">}}
### USAJobs mission critical hiring paths diagram

Teams rebuilding the outdated USAJobs site closely studied the interactions of the USAJobs.gov product, and the system of hiring. Instead of simply overhauling the site from technical, administrative, public-, or organizational-facing perspectives, the design team brought all these groups to the table during the design process. Each group has a unique value and set of requirements for the functioning of the site, and, in organizing that functionality, those values and needs must be balanced. For example, if the designers prioritize technology needs, they might ignore the needs of the people who process the information coming in. If they prioritize administrators’ needs, they might not reflect the needs of the public. Even though each of these groups is working towards the same goal (the successful functioning of the USAJobs site), the definition of success is slightly different for each group.

For this reason, throughout their project’s development, the designers mapped how the system of hiring worked, where it bogged down, and how it might be reconstructed. They recognized that the hiring system drives every aspect of the sites’ functionality, no matter which group a participant or stakeholder might come from. In this way, the effort to improve the USAJobs site became an effort to improve the process of hiring, demonstrating the utility of finding and working from the root cause of an issue, instead of solving for discreet, surface issues.

{{< /ring >}}

{{< img src=hcd-design-concepts-14 >}}
{{< asset-static file="hcd-design-concepts-hiring.pdf" label="Click to enlarge the above image">}}

A simple glance at the diagram above shows that the system of hiring is complex and involves multiple groups and stakeholders. The USAJobs team created an illustration of the hiring path components: people, stages, and touchpoints. Through this diagram, the team was able to explore the system of hiring, and that exploration resulted in greater understanding. The diagram clarifies nuances in the system to viewers, and communicates ideas for the systems’ many possible throughlines and values in a concise yet thorough manner. This understanding then informed the development of the USAJobs site product in terms of the various stakeholders’ positions and needs in the system.

Diagrams are a common application of drawing and visual communication in organizations. Because systems typically don't have physical, tangible forms, they can be hard to understand holistically. Diagrams also help teams get feedback on proposed changes to the system in a concise yet multi-layered way. Diagrams can show loops, forks, simultaneous actions, divergences, convergences, and dependencies to help stakeholders understand their position in the system. They also help design teams identify how and where to best intervene with new or improved products and / or supporting systems.
