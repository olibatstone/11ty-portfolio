---
layout: layouts/selected-work.html
tags: work
order: 2

title: Cutting wasted kits by 9.7% with experience overhaul
description: I redesigned the Health Insights sample collection experience, saving $2880 per 1000 kits.
meta-description: cutting wasted kits to 0.3%.
image: /images/cutting-sample-failures/2.webp

timeline: "November 2023 - January 2024"
client:
  name: "Genomics"
  stage: "Series B"
  size: "~150 employees"
  businessModel: "B2B2C SaaS (Genomics to Insurers/Employers to Patients)"
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

I redesigned Health Insights’ genetic test kit and online instructions to cut sample rejections during scale-up. I created a clearer activation process, overhauled kit design, and added step-by-step online guidance to reduce errors. The reject rate dropped 9.7 percentage points to 0.3%, saving about $3,880 per 1,000 kits and protecting patient trust.

## Problem

- In late 2022, Genomics invited 3,000 MassMutual policyholders to a free-benefit genetic test service. 1,620 enrolled over a few months with 1,367 returning a kit. The lab rejected 10% (about 137) for invalid samples.
- Those patients received no result, waited roughly a week for a replacement kit, collected another sample, and posted it back. Support handled reships and explanations.
- Each rejection consumed about $40 in kit cost plus shipping and support time. At scale, repeat kits and delays would erode patient and customer trust and make growth unviable.

## What I did

### Found root causes with the lab to target fixes

- 5% didn’t have patient date of birth written on the sample device necessary to match the kit with the patient.
- 5% had unusable or missing samples.
- A patient survey showed many felt the instructions were complex.

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
  src: "/images/cutting-sample-failures/cross-functional-workshop.jpeg",
  alt: "Cross-functional ideation workshop",
  caption: "Cross-functional ideation workshop."
%}

### Redirected patients online via kit design to reduce paper-first mistakes

- I overhauled the kit to align with Genomics’ new Health Insights brand identity, meeting patient expectations and fostering trust in the kit.
- DNAGenotek supplied the sample device inside the kit which included the paper instructions. Regulations prevented removal. To mitigate the risk of use and skipping activation, I added a prominent QR code and additional prompts that directed patients online instead.

{% render "partials/figure.html",
  src: "/images/cutting-sample-failures/first-printed-design-1.jpeg",
  alt: "First printed kit design with QR code",
  caption: "The front of an early print test to validate QR scan distance and matte finish readability."
%}

{% render "partials/figure.html",
  src: "/images/cutting-sample-failures/first-printed-design-2.jpeg",
  alt: "First printed kit design with QR code",
  caption: "The inside of an early print test to validate QR scan distance and matte finish readability."
%}

### Built step-by-step instructions to lower collection errors

To address unusable or missing samples, I designed progressively disclosed online instructions with one or two actions per page with simplified language. I included DNAGenotek’s illustrations as a quick way to enhance comprehension. The design would respond to browser preferences such as larger text.

{% render "partials/figure.html",
  src: "/images/cutting-sample-failures/instructions-previous-1.png",
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

- To address paper-first behaviour and set patient expectations, I pushed the supply chain team to invest in printing on the large inside panel of the kit (about $0.40 or $400 per 1000 kits). I then designed an eye-catching set of steps with the QR alongside. I used the freed up space below the sample device for supporting signposts.
- To address the partnership with DNAGenotek and relevant privacy concerns, I added content that explained the partnership and stated they do not receive patient personal data or samples.
- To resolve the box confusion, I tightened wording and added targeted illustrations to help distinguish the kit box from the sample device box.


### Navigated regulatory limits while keeping guidance clear

- To further reduce the risk of paper-first behaviour, in the online instructions I added a first-page callout advising patients to ignore the paper version. Regulatory rules required softer wording to prevent CLIA non-compliance; as a compromise, I asked patients to refer to them only if they need to.
- DNAGenotek’s illustrations were off-limits, so I created custom ones which made the experience more cohesive.

### Confirmed improvements in a US dry run before rollout

A virtual usability test with 5 US colleagues showed no major threats - none referred to the paper instructions and all found the online ones clear.

{% render "partials/figure.html",
  src: "/images/cutting-sample-failures/final-test-kit.jpg",
  alt: "Final kit and print files",
  caption: "Final kit after regulatory and usability changes."
%}

## Results

{% render "partials/figure.html",
  src: "/images/cutting-sample-failures/kit-activation-final-mobile.png",
  alt: "Released kit, print assets, and online instructions",
  caption: "Final online journey."
%}

- Patients returned 518 kits in January 2024. Reject rate fell to 0.3% from 10% (down 9.7 percentage points), saving about $2,000 in kit costs that month. This is a normalised saving of about $3,880 per 1,000 kits on kit costs alone; excludes shipping and support time costs.
- Freed lab capacity for process improvement, reduced reships and support contacts, and strengthened customer confidence.
- Maintained customer trust and increased appeal to new ones by lowering cost per completed test and shortening time to result, improving patient experience and de-risking scale-up.
- Step-by-step online instructions approach performed so well my colleague adopted it for the sign-up flow.

## Let’s talk

If you need to reduce errors in sample collection or improve the patient experience, I can help you design for clarity at first use.