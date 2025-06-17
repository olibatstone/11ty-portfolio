---
layout: layout.html
tags: post
date: 2018-01-01
title: Unlocking Uber transit
image: /images/unlocking-uber-transit/5.webp
description: I designed a way to use our fare collection technology in partner apps, driving ticket sales for our client RTD by 39.2%.
---
## Summary

We built a way to use our fare collection technology in partner apps, driving ticket sales for our client RTD by 39.2% and Uber trips in Denver starting or ending at a transport station by 11.6%. Working with a product manager, four developers and a QA developer, I contributed all product, research, UX and UI design work in 2018.

## The need

We created a version of our fare collection app for every client, matching their brand and identity. To reach customers in new markets, we needed to integrate our tech with non-client apps starting with Uber. This meant creating a universal ticket interface that could fit inside non-client apps and propagate to our existing client ones - this way we'd maintain one codebase.

![Client app UI for Transport for Athens](/images/unlocking-uber-transit/woman-using-athens-mobile-travel-app.jpg)<figcaption>Client App UI for Transport for Athens</figcaption>

## Conductor problems

We talked to key clients to understand how we might design this ticket. MTA told us how train conductors had to ask customers to open their ticket barcode in the app for scanning. How they had to ask them to scroll to show their ticket image. And how it meant they couldn't scan every customers ticket moving through the train. Some customers would turn off the internet on their device to use a single ticket multiple times.

## Scrolling pains

For the scale we needed, the ticket had to be part of an SDK. But we realised the SDK won't know the size of the viewport it's displayed in. So I couldn't design a responsive ticket UI to modify the layout when content is hidden - we couldn't eliminate scrolling all the time. In any case, while every conductor needed to scan the barcode, not all needed to see a ticket image.

## The new ticket

We tightened elements, regrouped them and hid secondary ones to reduce the chance of scroll. To tell conductors they should examine a ticket, we used the space either side of the now always visible QR code to mark the ticket - this appeared at random. Conductors could use this symbol to explain to customers that this is a random check to avoid discrimination accusations. The final product had other improvements like preventing accidental activation and increased legibility.

![MTA Ticket UI comparison](/images/unlocking-uber-transit/mta-app-ticket-comparison.png)<figcaption>MTA Ticket UI comparison</figcaption>

![Wireflow of MTA's new activation and use experience](/images/unlocking-uber-transit/mta-new-wireflow-activation.png)<figcaption>Wireflow of MTA's new activation and use experience</figcaption>

## Impact

We launched the SDK in May 2019, first to RTD Denver, Uber and later MTA. Conductors gave positive feedback with scanning time improved - we didn't get data on the impact of the ticket marker, but concluded no news was good news! We then staggered the rollout to the rest of our clients across the world. Our client Thames Clippers partnered with Uber to incorporate their boat tickets into the Uber app.

![RTD Denver's ticket UI in Uber via our SDK](/images/unlocking-uber-transit/rta-via-uber-with-our-SDK.jpg)<figcaption>RTD Denver's ticket UI in Uber via our SDK</figcaption>

![New ticket UI in client apps from Italy, the Netherlands and the UK](/images/unlocking-uber-transit/new-ticket-ui-in-other-apps.png)<figcaption>New ticket UI in client apps from Italy, the Netherlands and the UK</figcaption>

## Learnings

Working with many large external groups meant the iterative feedback loop took a lot longer. When estimating timelines, I'll do more initial investigation for a better idea of what can be done.