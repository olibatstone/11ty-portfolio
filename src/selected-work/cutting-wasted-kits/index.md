---
layout: layouts/selected-work.html
tags: work
order: 2

title: Cutting wasted kits by 9.7% with experience overhaul
description: I redesigned the Health Insights sample collection experience, saving $3880 per 1000 kits.
meta-description: cutting wasted kits to 0.3%.
image: /selected-work/cutting-wasted-kits/img/placeholder2.webp

timeline: "November 2023 - January 2024"
client:
  name: "Genomics"
  stage: "Series B"
  size: "~150 employees"
  businessModel: "B2B2C SaaS (Genomics to Insurers to Patients)"
sector: "Health"
role: "Senior Product Designer"
platform:
  - "Responsive Web"
team:
  - "Product Director"
  - "Senior Product Owner"
  - "Software Engineer (2)"
responsibilities:
  - "Product Strategy"
  - "User Research"
  - "UX Design"
  - "UI Design"
  - "Content Design"
  - "Packaging Design"
  - "Illustration"
tools:
  - "Figma"
  - "Miro"
  - "Useberry"
  - "Dovetail"
  - "Amplitude"
  - "Google Analytics"
  - "Adobe Illustrator"
  - "Qualio"
---

## Summary

I redesigned Health Insights’ genetic test kit and created new online instructions to cut sample rejections as part of a scale-up. The reject rate dropped 9.7 percentage points to 0.3%, saving about $3,880 per 1,000 kits and protecting patient trust. This reduced repeat collections for patients and shortened time to result.

## Problem

- In late 2022, Genomics invited 3,000 MassMutual policyholders to a free-benefit genetic test service. 1,620 enrolled over a few months with 1,367 returning a kit. The lab rejected 10% (about 137) for invalid samples.
- Those patients received no result, waited roughly a week for a replacement kit, collected another sample, and posted it back. Support handled reships and explanations.
- Each rejection consumed about $40 in kit cost plus shipping and support time. At scale, repeat kits and delays would erode patient and customer trust and make growth unviable.

## What I did

### Found root causes with the lab to target fixes

- 5% didn’t have patient date of birth written on the sample device necessary to match the kit with the patient.
- 5% had unusable or missing samples.
- A patient survey showed many felt the instructions were complex.

{% render "partials/figure.html",
  src: "./img/instructions-original.webp",
  alt: "Original paper instructions.",
  caption: "Original paper instructions."
%}

> Consider rewriting the instructions, they were tricky
>
> Patient, September 2022

### Linked kits to patients with activation codes to stop ID errors

I ran a cross-functional ideation workshop with product, engineering, supply and regulatory teams, settling on a high-effort high-value solution for maximum return at scale.

- Patient enters a 5-digit activation code online instead of writing date of birth on the device. This speeds setup, removes handwriting errors, and enables real-time validation.
- The system validates the code against our database and links the kit to the patient, so the lab identifies the sample on receipt.
- With a valid code, patients follow step-by-step online instructions to collect and return the sample.
- With an invalid code, the system blocks progress and offers fixes (recheck, find code, contact support). The system requires activation for every kit, addressing the unidentifiable 5% by forcing identification.

{% render "partials/figure.html",
  src: "./img/workshop-crossfunctional.webp",
  alt: "Cross-functional ideation workshop",
  caption: "Cross-functional ideation workshop."
%}

### Redirected patients online via kit design to reduce paper-first mistakes

- I overhauled the kit to align with Genomics’ new Health Insights brand identity, meeting patient expectations and fostering trust in the kit.
- DNAGenotek supplied the sample device inside the kit which included the paper instructions. Regulations prevented removal.
- To mitigate the risk of paper-instruction use and skipping activation altogether, I added a prominent QR code and additional prompts that directed patients online instead.
- Analytics showed that 65% of the policyholders who enrolled were mobile users, so I prioritised a mobile experience while supporting desktop-use likely preferred by older patients.

{% render "partials/figure.html",
  src: "./img/first-print1.webp",
  alt: "First printed kit design with QR code",
  caption: "Design exploration for the front of the kit printed to test QR and see the print finish quality."
%}

{% render "partials/figure.html",
  src: "./img/first-print2.webp",
  alt: "First printed kit design with QR code",
  caption: ""
%}

### Built step-by-step instructions to lower collection errors

To address unusable or missing samples, I designed progressively disclosed online instructions with one or two actions per page with simplified language.

- These responded to browser preferences such as larger text for individual accessibility and were fully keyboard-focusable.
- I included DNAGenotek’s illustrations as a quick way to enhance comprehension.

{% render "partials/figure.html",
  src: "./img/instructions-previous1.webp",
  alt: "Prototype of online instructions, one to two actions per page",
  caption: "First online instruction prototype. One to two actions per page with simplified copy."
%}

### Tested under constraints to surface risks quickly

DNAGenotek couldn’t supply extra sample devices in time for US patient testing, so I tested in-person with 5 new UK colleagues unfamiliar with the kit to identify any major issues and maintain momentum.

Key kit findings:

- 3/5 read the paper instructions before noticing the QR.
- Several questioned who DNAGenotek was and raised privacy concerns.
- Some wanted a simple overview of the sampling process upfront.

Key instructions findings:

- Some confused whether a page referred to the kit box or the sample device box.
- All reported the online instructions were easy to use.

### Iterated kit and copy to address privacy and box confusion

To address paper-first behaviour and set patient expectations, I pushed the supply chain team to invest in printing on the large inside panel of the kit (about $0.40 or $400 per 1000 kits). I then designed an eye-catching set of steps with the QR alongside.

{% render "partials/figure.html",
  src: "./img/box-print-inside2.webp",
  alt: "Exploring design options for the inside panel.",
  caption: "Exploring design options for the inside panel."
%}

{% render "partials/figure.html",
  src: "./img/box-print-inside1.webp",
  alt: "Exploring design options for the inside panel.",
  caption: ""
%}

With the QR moved to the inside panel, I used the freed up space below the sample device for supporting signposts. To address the partnership with DNAGenotek and relevant privacy concerns, I added content that explained the partnership and stated they do not receive patient personal data or samples both on the kit and in the online journey.

{% render "partials/figure.html",
  src: "./img/box-print1.webp",
  alt: "Exploring new signposts on the kit print.",
  caption: "Exploring new instructions signpost on the kit print."
%}

{% render "partials/figure.html",
  src: "./img/box-print2.webp",
  alt: "Exploring recognising the test device on the kit print.",
  caption: ""
%}


### Navigated regulatory limits while keeping guidance clear

- To further reduce the risk of paper-first behaviour, in the online instructions I added a first-page callout advising patients to ignore the paper version. Regulatory rules required softer wording to prevent CLIA non-compliance; as a compromise, I asked patients to refer to them only if they need to.
- DNAGenotek’s illustrations were off-limits, so I designed custom ones which made the experience more cohesive.

{% render "partials/figure.html",
  src: "./img/illustrations-overview.webp",
  alt: "Exploring recognising the test device on the kit print.",
  caption: "Illustrations for each step in the sample process."
%}

### Confirmed improvements in a US dry run before rollout

A virtual usability test with 5 US colleagues showed no major threats - none referred to the paper instructions and all found the online ones clear.


## Results

- Patients returned 518 kits in January 2024. Reject rate fell to 0.3% from 10% (down 9.7 percentage points), saving about $2,000 in kit costs that month. This is a normalised saving of about $3,880 per 1,000 kits on kit costs alone; excludes shipping and support time costs.
- Freed lab capacity for process improvement, reduced reships and support contacts, and strengthened customer confidence.
- Maintained customer trust and increased appeal to new ones by lowering cost per completed test and shortening time to result, improving patient experience and de-risking scale-up.
- Step-by-step online instructions approach performed so well my colleague adopted it for the sign-up flow.

Final designs:

{% render "partials/figure.html",
  src: "./img/testkit-final1.webp",
  alt: "Final kit and print files",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/testkit-final2.webp",
  alt: "Final kit and print files",
  caption: ""
%}

<div class="image-grid full-bleed">

{% render "partials/figure.html",
  src: "./img/kitflow-step1.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step2.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step3.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step4.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step5.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step6.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step7.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step8.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step9.webp",
  alt: "Flow 1.",
  caption: ""
%}

{% render "partials/figure.html",
  src: "./img/kitflow-step10.webp",
  alt: "Flow 1.",
  caption: ""
%}

</div>

{% render "partials/figure.html",
  src: "./img/kitflow-desktop-overview.webp",
  alt: "Released kit, print assets, and online instructions",
  caption: "Desktop sample."
%}
