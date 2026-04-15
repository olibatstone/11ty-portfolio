---
layout: layouts/selected-work.html
tags: work
order: 2
title: Cutting wasted kits by 9.7% with a sample collection redesign
description: I redesigned the Health Insights sample collection experience, saving £2,000 per month.
image: /selected-work/cutting-wasted-kits/img/placeholder2.webp
timeline: November 2023 – January 2024
role: Senior Product Designer
sector: Health · Regulated
client:
  name: Genomics
  stage: Series B
  size: ~150 employees
  businessModel: B2B2C SaaS

card-stat-label: drop in lab rejection rate

gallery:
  - src: /selected-work/cutting-wasted-kits/img/testkit-final1.webp
    cols: 2
  - src: /selected-work/cutting-wasted-kits/img/testkit-final2.webp
    cols: 1
  - src: /selected-work/cutting-wasted-kits/img/instructions-final.webp
    cols: 2
  - src: /selected-work/cutting-wasted-kits/img/box-print1.webp
    cols: 1

metrics:
  - value: "9.7%"
    label: drop in lab rejection rate, from ~10% to 0.3%
  - value: "£2,000"
    label: saved per month on kit costs alone, excluding shipping and support
  - value: "0/5"
    label: participants in a dry-run test referred to the paper instructions

background: >
  10% of returned sample kits were being rejected by the lab: either invalid samples or identity
  mismatches. Each rejection cost roughly $40 in replacement kit and shipping, triggered a support
  contact, and made patients wait a week before resampling. With 1,367 returned kits from the first
  cohort, that was ~137 wasted samples. Root cause analysis pointed to two problems: patients were
  writing their date of birth incorrectly on the kit device, and the paper instructions were too
  complex to follow reliably. I led a full redesign of both the physical kit and the online
  instruction flow, working with product, engineering, and the lab team.

problems_solutions:
  - problem: 5% of patients wrote their date of birth incorrectly on the kit device, causing lab identity mismatches that invalidated the sample entirely.
    solution: Replaced manual DOB entry with a 5-digit activation code entered online. The system validates in real time, links the kit to the patient record, and blocks progress with a clear fix if the code is invalid, removing human error from the matching step.
  - problem: 5% of returned samples were unusable, likely due to dense, jargon-heavy paper instructions that patients couldn't follow reliably.
    solution: Built a mobile-first, step-by-step online instruction flow that progressively discloses 1–2 actions per page, uses plain language, and is fully keyboard-focusable, in line with WCAG and CLIA compliance requirements.
  - problem: 65% of enrolled users were on mobile, but the kit directed patients to a paper leaflet, the wrong channel for the majority of the audience.
    solution: Redesigned the physical kit to lead with a prominent QR code and a clear call to action directing patients online, turning the kit itself into a funnel into the digital flow.
  - problem: Patients were unsure about the DNAGenotek collection device included in the kit, creating doubt and hesitation mid-collection.
    solution: Added explanatory content in the online flow addressing the third-party partnership and why a specialist collection device was used, reducing uncertainty at a critical moment.
  - problem: Investing in improved kit printing (~$0.40/kit) was hard to justify without a proven return.
    solution: Modelled the cost against the rejection rate and showed that inside-panel printing paid for itself within a single cohort through reduced reship costs, making the business case straightforward.

takeaways:
  - The rejection rate fell from ~10% to 0.3% across 518 returned kits in the first cohort, a 9.7% drop.
  - Savings of approximately £2,000 per month on kit costs alone, before accounting for reduced shipping, lab rework, and support contacts.
  - A dry-run with US colleagues showed no participant needed the paper instructions, a complete shift from the baseline behaviour observed in testing.
  - The step-by-step instruction pattern proved robust enough that a colleague adopted it for the sign-up flow, extending its impact beyond the kit project.
---
