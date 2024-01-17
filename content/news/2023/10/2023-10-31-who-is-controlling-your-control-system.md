---
date: 2023-10-31 09:39:00 -0500
title: Who is controlling your control system?
deck: A starting point for federal information managers
summary: Best practices for security administration of control systems and their components. Specific guidance and lessons learned from a federal information system manager.

# See all topics at https://digital.gov/topics
topics:
  - security
  - open-source

# See all authors at https://digital.gov/authors
authors:
  - michael-marin

slug: who-is-controlling-your-control-system
primary_image: "title-card-who-controls-your-control-systems-chor-muang-istock-getty-images-1423481986-comp"

# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
weight: 1

---

## Background

The convergence of Information Technology (IT) and Operational Technology (OT) in federal information assets provides a unique challenge for cybersecurity specialists, facility control engineers, and other stakeholders responsible for managing these systems. Because [control systems](https://digital.gov/resources/an-introduction-to-security-and-privacy-controls/) are becoming ubiquitous solutions in IT environments, federal technologists who otherwise may not have had a stake in these systems are becoming involved in their operations. As control systems become interconnected and more accessible, technology specialists must be prepared to handle an array of controls that may follow.

Traditionally, Industrial Control Systems’ (ICS) technology shared few similarities to conventional IT systems; many ICS were established as standalone, disconnected, proprietary solutions that operated in a closed circuit. Current ICS are not only interconnected and remotely accessible but are in some cases indistinguishable from regular IT systems. While these features are welcomed by users and administrators of the system, they are also welcomed by threat actors who may take interest in the careless security controls that encompass various ICS. This article aims to provide a first-hand experience for information security practitioners interested in implementing best security practices for ICS.

This article is also a good starting point for federal information managers who may be responsible for implementing solutions involved in control system dependency operations, such as providing remote web access, identity and access management, among others. A beginning resource would be at the National Institute of Standards and Technology, specifically with their [Guide to Industrial Control Systems (ICS) Security](https://csrc.nist.gov/Projects/risk-management/sp800-53-controls/overlay-repository/nist-developed-overlay-submissions/industrial-control-systems).

At my organization, the U.S. Environmental Protection Agency (EPA), our industrial control system is largely, but not exclusively, made up of building automation components. Although these components vary in scope compared to traditional industrial control system units, the attack surface is principally the same. There are numerous examples of similar devices being taken advantage of through real-world attacks. The components include field-level devices such as sensors, controllers, and actuators. Field-level devices communicate with building hardware, including fume hoods, air handlers, water pumps, etc. All of these OT devices are centrally administered by a management network of IT devices.

## Core implementations

There are four core factors that have contributed to the success of our ICS security program. Success has been measured in a number of ways, including a reduction and continued minimum in the number of security control audit findings, a sustained and expectable amount of vulnerability discoveries, and the persistent and predictable usability of the system. A summary of the four factors is provided below.

## Isolation

One of the cornerstones of this system is its isolation from the Internet and other information resources. Though many ICS are able to be managed and accessed remotely, this is still a procedure that is discouraged by best-practice guidance from [NIST](https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-82r2.pdf) and [CISA](https://www.cisa.gov/resources-tools/resources/ics-recommended-practices). Network segmentation through Virtual Routing and Forwarding can be used to restrict logical access to all components in the ICS enclave. Switches that provide multilayer functions ([layer 2 and layer 3](https://csrc.nist.gov/glossary/term/data_link_layer)) can be configured for device-enforced partitioning to achieve this isolation. Additional methods include encrypted VPNs, compact firewalls, or gateways that enforce unidirectional traffic communications. As a bare-minimum standard, isolating traffic at the layer 3 level also provides indirect physical access control and isolation, as network access to components of the system can be restricted via cable runs directly patched back to dedicated switches or dedicated ports for the ICS. Further, controlling access to telecommunications closets, facility control rooms, and operator rooms will help enforce a closed system. Not only does this type of isolation reduce the likelihood of direct external compromise, but it also limits the likelihood of experiencing pivoting or lateral movement attacks, insider threat scenarios, and the nosy system administrator. Pivoting attacks are the most common method for attackers to manipulate their way into ICS devices, often infiltrating the network through management layer systems, and then pivoting to Programmable Logic Controllers or other [OT hardware](https://www.cisa.gov/resources-tools/resources/ics-recommended-practices).

## Vulnerability management

Managing vulnerabilities is an enormous task and encompasses more than just scanning and patching. Digressing, for the purposes of this article, I’ll assume that your change control board and vulnerability scanner processes are already established, that you have an accurate inventory of all devices, and that you know what services and processes should be open and communicating across the network. Nevertheless, regardless of your vulnerability scanner vendor, it should be possible to scan the entirety of your management/corporate network, including your domain controller, other server-based hardware (think logging server, control server, data historian(s) etc.), and workstations and human-machine interfaces (HMIs). The federal government follows a 72-hour scanning frequency guideline, whereas scans are automatically deployed and occur in perpetuity for this interval. At least initially, it is wise to trigger these scans during non- business hours, as deep scanning can cause network saturation and/or asset outages.

Security engineers, or those performing scanning configurations, should work together with ICS operators to inform them of when scanning will take place, and provide them with reasonable expectations of system performance during scanning. Ideally, scanner output can be exported into a data integration platform, or at the very least ingested by an app that’s tailored to produce actionable results for remediation. It’s also wise that every stakeholder that is a part of the vulnerability and patch management process sign up for vendor-specific alerts and ICS alerts from CISA.

As a word of caution, scanning programmable logic controllers (PLCs) and other ICS-specific devices is a desperately fragile task and should not be performed on production environments without sandbox testing and then an extreme amount of caution. This section is not an endorsement for these activities.

## Multi-factor authentication

Farewell to the days of one-time passwords, token-base PINs, and SMS codes. As the threat landscape evolves to more clever forms of social engineering, exploits in SS7 infrastructure, and SIM-based attacks, the need for phishing resistant Multi-Factor Authentication (MFA) continues to grow. The most widely known and used MFA method in the federal government is Personal Verification Identification (PIV) or Common Access Card (CAC). [OMB M-19-17 (PDF, 1 MB, 13 pages)](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf) requires agencies to use PIV credentials as the primary means of authentication to federal systems, but it also acknowledges that it may not be a practical option for all situations. Some reasonable alternatives to physical smart card authentication are available, such as a [Trusted Platform Module](https://www.iso.org/standard/66510.html) (TPM)—sometimes known as Virtual Smart Card, or VSC. In this scheme, computers’ private keys for their certificates are constrained to the TPM and can't be exported. In other words, the computer or device itself serves as the alternative to a smart card because the certificate is exclusively tied to that device's TPM. Modern versions of Windows and Windows Server will have this functionality available, and users can be provided unique VSCs that are tied to the TPM on a singular device.

## Hardware and software asset management

Discovering what is on your network versus knowing what belongs on your network are often clashing concepts. Hardware Asset Management (HWAM) and Software Asset Management (SWAM) are low-hanging, high-value rewards in any information security program. Many tools make it effortless to itemize hardware inventories; it is impossible to establish a baseline of network activity if you don’t know what devices should be communicating.

Network discovery tools can assist in cataloging assets in your control system network. Open-source tools like Wireshark and Nmap can be run at the server or switch-level to discover devices within your control system Local Area Network(s). Wireshark is a specialized tool to aid in the baseline discovery of communicating devices and the protocols that are occurring. Running Wireshark on your dedicated ICS switches should result in similar numbers of communicating devices as what is included in your system inventory. If there are discrepancies between your Wireshark output and your inventory, you should aim to resolve this and then update your inventory with the current device count. Because of the predictability of ICS, network discovery and analysis results should be reasonably consistent, so long as the analyses occur during similar times of day and for similar periods of time. Likewise, if you are running a network analysis tool and the results show far fewer expected devices, try expanding the duration of the analyses, as some ICS components may be configured to only send an infrequent heartbeat back to their central command.

Similarly, software inventories are easily achieved through system-level processes enumeration, discovery scanning, and consultation with vendor documentation. The standard for our ICS software management is a whitelist-first approach. Through whitelisting, administrators can ensure that only applications and application components that are previously defined as authorized may be installed on ICS machines. Application whitelisting technologies will help achieve constant control and oversight into your software inventory, file integrity, and can even be used to establish a removable media policy. Software upgrades, significant configuration changes, and other impactful adjustments to your system should be made using a proven governance strategy. DevOps approaches —a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams — are useful because they ensure collaboration among teams that may not work side-by-side. This approach is especially important for ICS systems, because operational technology operators are often segmented from IT administrators. Additionally, DevOps approaches include smaller, less disruptive system changes, while incorporating security and operational testing into the deployment schedule.  

## Summary

Industrial control systems represent a unique structure in the cybersecurity landscape. Not only are these systems in control of sensitive physical processes, but they are inherently vulnerable to attack. Following best practice guidance for control systems and continuously iterating on your security practices is a necessity for keeping these systems secure. The above guidance is a step in the direction towards preventing troubling and unrecoverable security incidents.

## Disclaimer

*This publication has been approved by the EPA Office of Public Affairs (OPA). The United States government and the EPA do not endorse any commercial or open-source products or services. Any reference to specific products, processes, or services by service mark, trademark, manufacturer, or otherwise is provided for informational purposes and does not constitute or imply their endorsement, recommendation, or favoring by the United States government and the EPA.*
