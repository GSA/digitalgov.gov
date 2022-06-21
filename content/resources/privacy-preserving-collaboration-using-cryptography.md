---
date: 2020-09-29 13:53:00 -0500
source: ""
title: Privacy-Preserving Collaboration Using Cryptography
summary: In conjunction with her May 2020 presentation, Dr. Emily Shen outlines
  her work on Secure multi-party computation (MPC), a type of cryptography that
  allows parties to jointly analyze their data without disclosing it.
# See all topics at https://digital.gov/topics
topics:
  - privacy
  - security
  - emerging-tech
  - design
# See all authors at https://digital.gov/authors
authors:
  - dr-emily-shen
slug: privacy-preserving-collaboration-using-cryptography
# Controls how this page appears across the site
# 0 -- hidden
# 1 -- visible
# 2 -- highlighted
weight: 1
---

For many applications, organizations want to collaborate to gain insights from their collective data but can’t share their data due to security and privacy concerns. These needs arise within government (e.g., intelligence sharing), between government and industry (e.g., cyber threat sharing), and between governments (e.g., coordination with coalition partners).

Today, to analyze their collective data, organizations must share their data – either with each other or with a third party – and trust those other parties with their sensitive data. Traditionally, collaboration on sensitive data incurs significant security and privacy risks, or does not take place at all. Ideally, organizations could obtain the results and benefits of data sharing without actually sharing their private data.

The need for technology to address these problems has been recognized at the national level. For example, in [2017 the Report of the U.S. Commission on Evidence-Based Policymaking](https://digital.library.unt.edu/ark:/67531/metadc1282027/) recommended improving how the government uses and protects data by adopting privacy-preserving technologies, such as secure multi-party computation.

## Secure Multi-Party Computation (MPC)

[Secure multi-party computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC) is a type of cryptography that allows parties to jointly analyze their data without giving their data to each other and without using a trusted third party. MPC guarantees that no party learns anything other than the result of the computation. By eliminating the need for a trusted party, MPC avoids the security and privacy risks of traditional approaches to collaborating on sensitive data. In this way, MPC enables new types of collaboration that are currently restricted because the data is too sensitive to share.

MPC protocols have existed since the 1980s that can in theory be used to securely perform any computation. In recent years, MPC protocols have been implemented, improved, and shown to be practical for many applications. However, it remains challenging to develop and optimize MPC for complex functions.

## Rapid Assembly of MPC Protocols (RAMP)

To address these challenges, [MIT Lincoln Laboratory](https://www.ll.mit.edu/) has developed a software framework called Rapid Assembly of MPC Protocols (RAMP) that enables researchers to quickly prototype and evaluate MPC solutions. RAMP allows MPC applications to be developed by composing layers of gadgets – secure protocols for common computational building blocks, like comparing two numbers or sorting a list of numbers. MPC gadgets are in turn built on top of primitives – secure protocols for low-level operations, like addition and multiplication. RAMP also includes tools for evaluating the performance of MPC applications and building blocks.

MIT Lincoln Laboratory has used the RAMP framework to develop MPC for privacy-preserving collaboration in cyber security and other application areas. For the [DHS S&T Federated Security](https://www.dhs.gov/science-and-technology/federated-security) program, MIT Lincoln Laboratory built MPC to securely compute statistics and set operations on items such as IP addresses and vulnerabilities. They also integrated several of these applications into a federated command and control infrastructure.

For the [DARPA Brandeis program](https://www.darpa.mil/program/brandeis), MIT Lincoln Laboratory also prototyped MPC for network defense analytics to allow organizations to perform distributed threat detection. In ongoing and future work, MIT Lincoln Laboratory is leveraging the RAMP framework to develop MPC solutions for new use cases and mission areas and plans to open-source the framework.

For more information, please [watch Dr. Emily Shen's May 2020 presentation here on Digital.gov](https://digital.gov/event/2020/05/05/dr-emily-shen-on-secure/).
