---
layout: layouts/selected-work.html
sitemap: false
title: Unlocking £32k revenue with new gifting feature
description: I designed a garden membership gifting service, driving 13 new customer acquisition discussions.
image: /selected-work/unlocking-gifting-revenue/img/placeholder4.webp
timeline: August 2021 – November 2021
role: Product Designer
sector: Travel and Leisure
client:
  name: Candide
  stage: Series A
  size: ~40 employees
  businessModel: B2B2C SaaS

section_problems: Problem
section_constraints: Constraints
section_what_i_did: What I did
section_takeaways: Results

metrics:
  - value: "£32k"
    label: revenue generated in three months from a feature that didn't exist before
  - value: "505"
    label: gift membership orders placed in the first three months
  - value: "80%"
    label: of over-65s rated the receiving experience as very easy

problem:
  - text: Candide's primary customer, The Newt in Somerset, wanted visitors to be able to gift a 12-month membership to others. This would increase their visitor base and drive revenue over the Christmas period where there is a natural slow-down.
  - text: Visitors could buy a The Newt in Somerset membership from the Candide website, but could not give it directly or transfer it to another individual.
  - text: Candide had 100 support messages since December 2020 from The Newt in Somerset visitors asking if they could gift a membership.
  - text: If Candide didn't deliver a gifting service by Christmas 2021, they risked losing out on seasonal revenue opportunities, dealing with larger support overhead, undermining their relationship with a key customer and weakening their value proposition to other customers.

constraints:
  - text: Small team with an immovable Christmas deadline.
  - text: Candide can't sell memberships for next year if the current year is active; gifting a membership for a year that is ending is obviously bad value.
  - text: The Newt in Somerset and other gardens supported joint and multiple-holder memberships, with some gardens requiring the details of all holders linked to the membership.

what_i_did:
  - heading: Identified gifter and receiver needs that blocked purchase
    body: |
      - To understand how access works via QR in the Candide iOS and Android app, I spoke to 10 visitors at The Newt in Somerset gate about their entry experience. I noticed first-time anxiety of using QR passes in older individuals (20% of garden visitors are 65+) and connectivity issues due to patchy mobile data coverage.
      - To learn about the needs of likely gifters and receivers, I interviewed 5 who'd gifted and 5 who'd received a membership or subscription within 2 years via userinterviews.com. To recruit quickly, the gift could be in a range of attractions, not just public gardens. I asked about their experience of buying, receiving and using, prompting for details such as cost considerations, delivery method, date and more.
      - Key themes across gifters and receivers included value for money as the top driver, concern that older receivers would struggle to use a digital gift, a preference for something physical, and the risk of gifting to someone who already has a membership.

      > "I have a very old Blackberry so I couldn't access the app and certainly my parents couldn't access that — I struggle with the NHS app as it is."
      > — Moreen, 59

      - For technical inspiration, I reviewed the gifting flows of the largest public garden organisations, the National Trust, RHS and Blenheim Palace. All provided a physical membership, with the National Trust promoting cheaper pricing on condition of Direct Debit and the RHS offering a free pair of binoculars.
    images:
      - src: /selected-work/unlocking-gifting-revenue/img/membership-scan.webp
        alt: How The Newt in Somerset staff scanned QR codes.
        caption: How The Newt in Somerset staff scanned QR codes. Photo by Chris D'Agorne.
        cols: 3
      - src: /selected-work/unlocking-gifting-revenue/img/competitor-research.webp
        alt: Exploring the gifting flows of the National Trust, RHS and Blenheim Palace.
        caption: Exploring the gifting flows of the National Trust, RHS and Blenheim Palace.
        cols: 3

  - heading: Turned insights into a plan that shipped fast
    body: |
      To address the opportunities identified in my research, I wrote 20 'how might we' statements. I used a team workshop to generate and prioritise Now, Next and Later solutions based on complexity. The top statements guided the following design moves.
    images:
      - src: /selected-work/unlocking-gifting-revenue/img/ideas-voted-postits.webp
        alt: Voted opportunities and ideas post-its for version 1.
        caption: Voted opportunities and ideas post-its for version 1.
        cols: 3

  - heading: Designed a simple multi-step flow that reduced errors
    body: |
      - To make things simple for both gifters and receivers, I designed a progressively disclosed multi-step flow with easy navigation, plain language, and ability to recover from errors.
      - I designed larger primary buttons, increased spacing between elements to support usability for older recipients, ensuring WCAG AAA standards where possible.
      - To support the multiple-holder requirement, the flow would adapt based on whether the garden supports it, requires both names, and whether the gifter chooses multiple holders.
      - To reassure gifters that the recipient will be able to use the membership, I included a pre-start link at the beginning that showed what the experience would be like for receivers.
    images:
      - src: /selected-work/unlocking-gifting-revenue/img/gifting-flow-aug1.webp
        alt: Flow architecture exploration.
        caption: Flow architecture exploration.
        cols: 3
      - src: /selected-work/unlocking-gifting-revenue/img/gifting-storymap-twoadults.webp
        alt: Storymap exploration of the gifting and receiving experience.
        caption: Storymap exploration of the gifting and receiving experience.
        cols: 3

  - heading: Upgraded the calendar UI to enable advance gifting
    body: |
      Candide had a date picker that visitors used to select a day ticket. However, this didn't support selecting dates far in the future. This was a problem because gifters would likely need to choose months in advance, so I designed a new one that enabled this.
    images:
      - src: /selected-work/unlocking-gifting-revenue/img/datepicker-exploration1.webp
        alt: Date picker scroll UI concept scrapped due to large scroll length.
        caption: Date picker scroll UI concept scrapped due to large scroll length.
        cols: 1
      - src: /selected-work/unlocking-gifting-revenue/img/datepicker-exploration2.webp
        alt: Paginated date picker UI concept favoured for simplicity and ability to provide inline feedback.
        caption: Paginated date picker UI concept favoured for simplicity and ability to provide inline feedback.
        cols: 1
      - src: /selected-work/unlocking-gifting-revenue/img/datepicker-exploration3.webp
        alt: Enhanced paginated date picker UI for clearer touch targets.
        caption: Enhanced paginated date picker UI for clearer touch targets.
        cols: 1
      - src: /selected-work/unlocking-gifting-revenue/img/datepicker-exploration4.webp
        alt: Enhanced paginated UI states showing inline feedback.
        caption: Enhanced paginated UI states showing inline feedback.
        cols: 3

  - heading: Made the digital gift feel meaningful without print
    body: |
      - I couldn't offer an optional physical insert with a QR code for version 1 due to the timeline, but understood that we would learn a lot from version 1 that we could incorporate into the design of a physical insert.
      - To make a digital gift feel meaningful in the absence of a physical one, I added a personalised message at checkout and a polished receiver email.
      - To make value obvious for gifters, I'd planned to show how many visits it would take to break-even vs day tickets. However, due to the timeline, for version 1 I opted to front-load the garden imagery and include copy that describes how the garden changes throughout the year.

  - heading: Solved edge cases to cut support and ease redemption
    body: |
      - To help less technically-able visitors to access their membership, I designed a way to access the QR online instead of via the app, requiring less mobile data. And I incorporated the activation code inside the recipient email, meaning one-click access if already logged in. Visitors could change their details on activation if needed.
      - To help receivers without a mobile device or internet connection, I prompted gifters to provide accurate name and email details to enable gate staff look up.
      - To solve for gifting to existing members, allowing the choice to extend a membership was the most voted solution in the workshop. However, this is complex from a user perspective and would require more research to reduce risk, so I worked with the team and settled on treating activation as the point of purchase. This meant memberships were pre-paid with no expiry date.
      - This solved Candide's constraint regarding selling memberships for following years and made our solution more attractive to other gardens with fixed-term seasonal products. They wouldn't be forced into a rolling membership model.

  - heading: Usability tested and clarified confusing steps
    body: |
      - I planned to test the gifting and receiving prototype with 5 gifters and receivers in a moderated usability session, but the deadline meant this wasn't doable.
      - To identify any major issues with the prototypes in the least amount of time, I instead ran an unmoderated usability test via usertesting.com with 20 participants, being sure to have a proportion of older people.
      - All participants except a few due to technical issues completed the tasks. No major issues.
      - Some participants weren't clear about how they could attend the garden on a joint membership without the primary holder with them, so I adjusted the copy to make it clearer.

takeaways:
  - On launch in November 2021, The Newt in Somerset and other customers activated the gifting feature.
  - Visitors bought 505 gift membership orders to those destinations between December 2021 and February 2022, driving £32k revenue.
  - 92% of those gift membership purchases included a personal message suggesting gifters found value in the feature.
  - 80% of over-65 year olds who received a gift membership rated the receiving experience as very easy in a March 2022 survey.
  - 13 other potential garden customers who were interested in the gifting feature reached out to have partnership discussions with Candide.

results_images:
  - src: /selected-work/unlocking-gifting-revenue/img/gifting-screens-twoadults.webp
    alt: Key screens for gifting to two adults.
    caption: Key screens for gifting to two adults.
    cols: 3
  - src: /selected-work/unlocking-gifting-revenue/img/gifting-receiving-twoadults.webp
    alt: Key receiving screens for two adults.
    caption: Key receiving screens for two adults.
    cols: 3
---
