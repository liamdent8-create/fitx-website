---
name: funnel-landing-page
description: How to plan, build, review and improve a sales funnel and high-converting landing page for a fitness studio, gym, challenge or coaching offer, built from research into the EBT (Evidence Based Training) challenge page, Alex Hormozi's landing-page and lead advice, Russell Brunson's Hook-Story-Offer and value ladder, and Apple's page finish. Use when designing or critiquing a sales page, offer page, trial or challenge landing page, VSL page, ad landing page, the order of sections on a page, conversion rate (CRO), A/B tests, or the follow-up after someone buys; and whenever someone says "make it like EBT", "funnel structure", "does this convert" or "what should this page say first".
---

# Funnel landing page

A landing page has one job: get one action (buy the trial, apply, opt in). Everything on it either moves the visitor towards that action or gets cut. Hormozi: "If it doesn't increase opt-in percentage of qualified leads, cut it."

Read `references/ebt-teardown.md` when you need the full section-by-section breakdown of the reference page, and `references/sources.md` for where each claim came from.

## 1. The whole funnel, not just the page

```
ATTENTION  →  CLICK  →  LANDING PAGE  →  BUY  →  SPEED TO LEAD  →  THE REAL SALE
content,      link in    hook → trust →   front-   same-day DM/call;   core membership /
ads, warm     bio, ad,   proof → urgency  end       check-ins on day   coaching (top of
outreach      keyword    → value → offer  offer     ~7 and ~12         the value ladder)
              DM
```

- **Content makes people warm. It doesn't "funnel" across formats.** Hormozi's data: Shorts viewers watch Shorts, long-form viewers watch long-form. People move from content to profile to link, on the platform they already use. The page therefore has to work for a **warm** visitor (who already knows the coach) and a **cold** one from an ad (who doesn't).
- **Brunson's secret formula:** who is the dream customer → where do they already congregate → what is the bait (hook + offer) → what result are you taking them to.
- **Value ladder:** low-price entry → front-end offer → core offer → premium. Each step gives value, so the next step feels natural. Don't ask a stranger to marry you on the first date.
- **The money is after the page.** Hormozi's example: a business closing 55% of leads because one person's only job is to contact every lead the moment it arrives. Plan who messages each buyer the same day, and what they say on about day 7 and day 12 to move them to the core offer.

## 2. The diagnostic: Hook, Story, Offer

Every ad, page, email and DM has a hook, a story and an offer. When something leaks, it's one of the three:
- **Hook:** does it stop the scroll and promise an outcome they want?
- **Story:** does it build trust and raise the perceived value (usually the coach on video)?
- **Offer:** is it clear, valuable, low-risk and easy to say yes to?

## 3. The value equation, mapped to page parts

| Lever (Hormozi) | Where it shows on the page |
|---|---|
| Dream outcome ↑ | Headline + subhead above the fold. Hero image shows the outcome or the people |
| Perceived likelihood ↑ | Results and testimonials straight after the video; reviews; the coach's credibility |
| Time delay ↓ | Say when they'll feel or see it, honestly ("your first block starts week one") |
| Effort and sacrifice ↓ | App or "everything in one place", beginner workshops, "we show you", objection FAQs |
| Risk ↓ | Low-cost trial, no joining fee, cooling-off, clear terms near every price |

## 4. Page order that converts (the EBT pattern)

Long sales pages work when you ask for money from cold traffic. Each section has one job:

1. **Banner:** the hook before the page starts ("prize / offer · Learn more ›").
2. **Hero = the prize:** big offer or prize art, the people, outcome headline, one CTA. This is where most of the gains are. Hormozi: about 90% of tests are headline or hero image.
3. **Ticker:** scrolling inclusions for skimmers.
4. **VSL + CTA directly under it:** the coach talking to camera (trust and story). Autoplay muted with captions if allowed.
5. **Results carousel immediately after the VSL:** proof turns warm into buyer.
6. **Urgency:** pill ("All new · spots filling fast") + real date + countdown + CTA. Only real deadlines.
7. **"What is it?" paragraph:** clarity before the stack.
8. **What's included:** swipeable cards (the value stack).
9. **The prize or offer again:** re-hook the scrollers.
10. **Effort reducer:** the app, phone mock-up, "everything in one place".
11. **Checklist recap:** "One X. Everything you need."
12. **Biggest objection killed visually** (EBT: "no boring salads" meal cards; a studio: "will I fit in?" with the space).
13. **Results grid / reviews at volume** + "See more".
14. **Pricing cards** with minimum terms, plus an order bump (EBT: couples save 15%).
15. **Get in touch:** form or DM for fence-sitters.
16. **Catch-all:** brand marquee, VIP / email list, footer.

Repeat the same primary CTA 7–9 times with the same wording. Add a sticky mobile CTA once the hero button scrolls away.

## 5. Above the fold (Hormozi's anatomy)

- Headline stops them and promises a clear outcome. Subhead clarifies it (like a thumbnail plus title).
- Hero image adds proof: show the thing they get or the outcome they want.
- The CTA says what they get and how, nothing else.
- Forms: as few fields as needed for a *qualified* lead. More than 5 fields → multi-step.
- If bullets are used: three, the biggest objections, most common first.
- Fast, mobile-first, compressed images, legal links present.

## 6. Testing and measuring

- One test a week, above the fold first: headline, then hero image, then CTA wording.
- Low traffic (under ~1,000 visitors a week) can't reach significance weekly. Make evidence-based changes (heatmaps, recordings) and compare periods instead.
- No measurement, no funnel. Install Meta Pixel + Conversions API and GA4 (with a cookie notice) before spending on ads. EBT runs Pixel + Klaviyo so every visitor can be retargeted and emailed.

## 7. The Apple finish (make it feel premium, not just loud)

EBT gives the order and energy. Apple gives the craft:
- Big rounded tiles (~28px corners) on soft grey (#f5f5f7) or black. The image fills the tile, with a small label and a short semibold title top-left, and a round **+** bottom-right that opens a detail sheet.
- The sheet grows from the tile and returns to it. On phones it's a bottom sheet that tracks the finger, rubber-bands at the top, and uses release velocity to dismiss.
- Section headers: big semibold heading left, "See all ›" link right. Carousels with round chevron buttons.
- Semibold (600–700) headings with negative tracking. Promo moments in the brand's display face.
- Frosted glass for anything floating (nav, sticky dock, sheets, contact panel).
- Critically damped spring motion by default (no bounce), interruptible, reduced-motion fallbacks. Pair with the `apple-design` skill for the motion maths.

## 8. Guardrails

- **Never invent** results, testimonials, stats, prices or guarantees. Placeholder `[[NEEDS OWNER: …]]` and list it.
- **Prices and terms must match the signed contract and fee schedule.** If the offer isn't in the contract, flag it before ads run.
- **Honest urgency only:** real opening dates, real class caps, real intake deadlines. Countdowns hide themselves after the date.
- **Before-and-after body photos:** EBT uses them; FIT X's brief bans them (and Meta ad policy makes them risky). Use strength results (PBs, first chin-up), training photos and quotes, with written consent.
- Borrow **structure**, never another brand's wording, art or branding.

## 9. Checklist before calling a page done

- [ ] Hero: offer-as-prize, people in shot, outcome headline, one CTA, visible on a phone without scrolling
- [ ] VSL directly after the hero, CTA under it, captions on
- [ ] Results straight after the VSL (consented, no before/after)
- [ ] Real urgency with a date
- [ ] Value stack, effort reducer, objection killer, results at volume
- [ ] Pricing with minimum terms that match the contract
- [ ] Same CTA wording 7+ times, plus a sticky mobile CTA
- [ ] Contact / DM option and a list sign-up for not-ready visitors
- [ ] Pixel + GA4 + cookie notice; speed-to-lead owner and DM scripts ready
- [ ] Mobile 390px: no sideways scroll; reduced-motion, keyboard and screen-reader checks pass
