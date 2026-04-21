---
layout: layouts/selected-work.html
tags: work
order: 2
title: Cutting wasted kits by 9.7% with sample collection redesign
description: I redesigned the Health Insights sample collection experience, reducing the genetic test reject rate from 10% to 0.3%.
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

section_background: Context
section_problems: Problem
section_what_i_did: What I did
section_takeaways: Results


metrics:
  - value: "9.7%"
    label: reduction in rejection rate
  - value: "$2,000"
    label: saved in first month
  - value: "$3,880"
    label: saved per 1,000 kits


problem:
  - text: Genomics invited 3,000 MassMutual policyholders to a free-benefit genetic test service. 1,620 enrolled over a few months with 1,367 returning a kit. The lab rejected 10% (about 137) for invalid samples.
  - text: Those patients received no result, waited roughly a week for a replacement kit, collected another sample, and posted it back. Support handled reships and explanations.
  - text: Each rejection consumed about $40 in kit cost plus shipping and support time. At scale, repeat kits and delays would erode patient and customer trust and make growth unviable.

what_i_did:
  - heading: Found root causes with the lab to target fixes
    body: |
      - 5% of kits didn't have the patient's date of birth on the sample device, making them unidentifiable.
      - 5% had unusable or missing samples.
      - A patient survey showed many found the instructions complex.

      > "Consider rewriting the instructions, they were tricky"
      > — Patient, September 2022
    images:
      - src: /selected-work/cutting-wasted-kits/img/instructions-original.webp
        alt: Original paper instructions included in the kit.
        caption: Original paper instructions.
        cols: 3

  - heading: Linked kits to patients with activation codes to stop ID errors
    body: |
      I ran a cross-functional ideation workshop with product, engineering, supply and regulatory teams, settling on a high-effort, high-value solution for maximum return at scale.

      - Patients enter a five-digit activation code online instead of writing date of birth on the device. This speeds setup, removes handwriting errors, and enables real-time validation.
      - The system validates the code against the database and links the kit to the patient, so the lab identifies the sample on receipt.
      - With a valid code, patients follow step-by-step online instructions to collect and return the sample.
      - With an invalid code, the system blocks progress and offers fixes. The system requires activation for every kit, addressing the unidentifiable 5% by forcing identification.
    images:
      - src: /selected-work/cutting-wasted-kits/img/workshop-crossfunctional.webp
        alt: Cross-functional ideation workshop with product, engineering, supply and regulatory teams.
        caption: Cross-functional ideation workshop.
        cols: 3

  - heading: Redirected patients online via kit design to reduce paper-first mistakes
    body: |
      - I overhauled the kit to align with Genomics' new Health Insights brand identity, meeting patient expectations and fostering trust.
      - DNAGenotek supplied the sample device inside the kit which included the paper instructions. Regulations prevented removal.
      - To mitigate the risk of patients using paper instructions and skipping activation, I added a prominent QR code and additional prompts directing patients online instead.
      - Analytics showed 65% of enrolled policyholders were mobile users, so I prioritised a mobile experience while supporting desktop use likely preferred by older patients.
    images:
      - src: /selected-work/cutting-wasted-kits/img/first-print1.webp
        alt: First printed kit design with QR code on the front panel.
        caption: Design exploration for the front of the kit — printed to test the QR and see the print finish quality.
        cols: 2
      - src: /selected-work/cutting-wasted-kits/img/first-print2.webp
        alt: First printed kit design, reverse side.
        cols: 1

  - heading: Built step-by-step instructions to lower collection errors
    body: |
      - To address unusable or missing samples, I designed progressively disclosed online instructions with one or two actions per page, using simplified language.
      - Instructions responded to browser preferences such as larger text for individual accessibility and were fully keyboard-focusable.
      - I included DNAGenotek's illustrations as a quick way to enhance comprehension.
    images:
      - src: /selected-work/cutting-wasted-kits/img/instructions-previous1.webp
        alt: Prototype of online instructions showing one to two actions per page.
        caption: First online instruction prototype. One to two actions per page with simplified copy.
        cols: 3

  - heading: Tested under constraints to surface risks quickly
    body: |
      DNAGenotek couldn't supply extra sample devices in time for US patient testing, so I tested in-person with 5 new UK colleagues unfamiliar with the kit to identify any major issues and maintain momentum. Key kit and instructions findings:

      - 3 of 5 read the paper instructions before noticing the QR code.
      - Several questioned who DNAGenotek was and raised privacy concerns.
      - Some wanted a simple overview of the sampling process upfront.
      - Some confused whether a page referred to the kit box or the sample device box.
      - All reported the online instructions were easy to use.

  - heading: Iterated kit and copy to address privacy and box confusion
    body: |
      - To address paper-first behaviour and set patient expectations, I pushed the supply chain team to invest in printing on the large inside panel of the kit (about $0.40 or $400 per 1000 kits). I then designed an eye-catching set of steps with the QR alongside.
      - With the QR moved to the inside panel, I used the freed up space below the sample device for supporting signposts. To address the partnership with DNAGenotek and relevant privacy concerns, I added content that explained the partnership and stated they do not receive patient personal data or samples both on the kit and in the online journey.
    images:
      - src: /selected-work/cutting-wasted-kits/img/box-print-inside2.webp
        alt: Exploring design options for the inside panel of the kit.
        caption: Exploring design options for the inside panel.
        cols: 2
      - src: /selected-work/cutting-wasted-kits/img/box-print-inside1.webp
        alt: Alternative inside panel design option.
        cols: 1
      - src: /selected-work/cutting-wasted-kits/img/box-print1.webp
        alt: New instructions signpost design on the kit print.
        caption: Exploring new instructions signpost on the kit print.
        cols: 2
      - src: /selected-work/cutting-wasted-kits/img/box-print2.webp
        alt: Exploring how to surface the test device on the kit print.
        cols: 1

  - heading: Navigated regulatory limits while keeping guidance clear
    body: |
      - To further reduce the risk of paper-first behaviour, in the online instructions I added a first-page callout advising patients to ignore the paper version. Regulatory rules required softer wording to prevent CLIA non-compliance; as a compromise, I asked patients to refer to them only if they need to.
      - DNAGenotek's illustrations were off-limits, so I designed custom ones which made the experience more cohesive.
      - A later virtual usability test with 5 US colleagues showed no major threats - none referred to the paper instructions and all found the online ones clear.
    images:
      - src: /selected-work/cutting-wasted-kits/img/illustrations-overview.webp
        alt: Custom illustrations for each step in the sample collection process.
        caption: Illustrations for each step in the sample collection process.
        cols: 3

takeaways:
  - The reject rate reduced from 10% to 0.3%, saving roughly $3,880 per 1,000 kits in kit costs alone.
  - About $2,000 was saved in kit costs in the first month, while reducing delays for patients and protecting trust in the service.
  - The improvements reduced reships, shortened time to results, and strengthened confidence in the service.

key_learning: Small usability issues in physical-digital healthcare journeys can create large operational costs. Designing clear guidance and validating identity early prevented downstream failures.
---
