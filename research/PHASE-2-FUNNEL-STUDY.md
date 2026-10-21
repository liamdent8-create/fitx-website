# Phase 2: Funnel study

Checked 20–22 Oct 2026. Spreadsheet: `research/funnel-study.csv` (23 rows, one per business × funnel stage × source). Screenshots: `research/evidence/`. Forms were never submitted. Meta Ad Library was searched with country = Australia, all ads, keyword search, logged out.

## Who was studied (and what each is for)

| Business | Verified site | Verified Instagram | Used for |
|---|---|---|---|
| Tropic State Pilates | tropicstatepilates.com.au | **Not verified** (handle unknown) | Studio page, schedule, intro offer |
| BLVE Fitness | blvefitness.com.au | @blvefitness (3.8K) | Studio page, pricing, intro offer |
| Rhys Livingstone | rhyslivingstone.com | @rhyslivingstone (15.1K, verified) | DM-first / keyword funnel |
| The Geronimo Academy | thegeronimoacademy.com | @thegeronimoacademy (11.6K, verified) | Application-first structure only |
| EBT (reference) | ebtonline.au/challenge | — | Landing page structure (see the skill) |

Note on Rhys Livingstone: today he sells business mentoring to PTs and coaches ("Undeniable"), not consumer coaching. His old Lionstone Physique Coaching site has expired. We're studying his funnel mechanics, not his audience.

## Observations (what we saw, no opinions)

### Hooks and promises
| Business | Hook / promise |
|---|---|
| Tropic State | "The studio you've been waiting for." Emotional identity: "The moment you walk in, something shifts… Pilates isn't a performance. It's a return to yourself." |
| BLVE | "A place where you matter. Welcome to the BLVE community." / "To achieve you must believe" |
| Rhys Livingstone (ads) | "I made $20M as a PT… and hated it", "80% of clients are draining…", "Here it is for free 👇" |
| Geronimo | "Build a profitable studio that runs without you" + "2,000+ studio owners" + named client result |
| EBT | Cash prize + "Transform your body. Eat what you love." |

### Buying steps
| Business | Path to buy | Notes |
|---|---|---|
| Tropic State | Home "New here?" → 3 Momence links (intro / casual / visitor) | **Intro offer and casual links are broken** ("Membership not found"). Membership prices hidden ("download our app to see our pricing"). Visitor pass works: $116.95 / 5 classes / 30 days |
| BLVE | Home → Join page ($49/wk, $20 day) → Momence intro offer $110 / 14 days | Footer "Intro offer" link points to a retired offer ("no longer available") |
| Rhys Livingstone | Ad → "comment KEYWORD" → DM automation → lead magnet → 15-min triage call | "Leave your credit card at home, my team does not sell on first call" |
| Geronimo | Ad ("click the link & enquire") → site → Apply form (Wingman CRM) → Diagnose → Game plan | IG bio: "DM CHECKLIST" keyword |
| EBT | Ad → long challenge page → checkout | Pixel + Klaviyo on page |

### Schedules and booking
- Tropic State embeds its full Momence schedule on its site: day strip, filters, description, price and "Book now" on every class.
- BLVE lists fixed class times as text and links out to Momence.
- **FIT X's Mindbody widget works.** Opening week shows real classes (strength 5:15, 6:15, 7:15am and 4:30, 5:30pm; mums and bubs 8:45am; mat Pilates 4:30, 5:30pm; open gym 9am–3pm). Tapping "Book" opens a Mindbody sign-in pop-up, so a new visitor needs a pass first. The widget's heading still says "Book your express class". It loads about 550KB plus Mindbody's own Google Analytics, Tag Manager and New Relic.

### Paid ads (Meta Ad Library, AU)
| Advertiser | Results | Active, oldest sampled start | 90+ days? |
|---|---|---|---|
| Tropic State Pilates | No ads | — | — |
| BLVE Fitness | No ads | — | — |
| Rhys Livingstone | ~86 | 26 Aug 2026 | No (57 days) |
| The Geronimo Academy | ~240 | 15 Jul 2026 | Yes (99 days); a signal only, not proof of profit |

### Proof
- Tropic State: no testimonials or reviews on the home page.
- BLVE: none on the site.
- Geronimo: named client quote with a specific result + headline stats.
- EBT: transformation photos at volume.

### Missing stages (spotted in competitors)
- Tropic State: working intro offer, visible prices, proof, VSL.
- BLVE: proof, VSL, offer above the fold, working footer offer link, paid ads.
- Neither local studio is running Meta ads right now.

## Suggestions for FIT X (separate from the observations)

1. **Timetable page with the Mindbody widget: built** (`/timetable`). It has a "New here?" router above the schedule (copying Tropic State's best idea), so people without a pass go to the $89 trial or a casual pass before they hit Mindbody's sign-in. The widget only loads when you scroll to it, so the page stays fast. **Not** on the studio sales page: that page has one job, and the widget's Book button opens a sign-in pop-up that new visitors can't use yet. The sales page links to it instead ("See the opening week timetable").
2. **Rename the widget heading in Mindbody** from "Book your express class" to "Book a class".
3. **Show prices and keep offer links working.** Both local competitors have broken or retired offer links, and Tropic State hides prices. FIT X shows every price and links to a working Mindbody offer. Add a monthly link check (I can set it up).
4. **DM-keyword CTA (Rhys / Geronimo pattern).** Add "Comment STRONG" / "DM STRONG" to posts and ads, with ManyChat sending the $89 link plus a question ("Strength, Pilates or mums and bubs?"). It suits Lauren's DM selling and doesn't need a sales call. Needs Lauren to pick the keyword and set up the ManyChat flow.
5. **Emotional belonging copy (Tropic State).** Their "the moment you walk in" lines are the strongest local copy. FIT X's version should be about confidence in the weights room, in Lauren's voice, in the copy doc.
6. **Dedicated mums and bubs page** (like Tropic State's prenatal and postpartum page): an SEO page for "mums and bubs fitness Cairns" that feeds the trial.
7. **We're the only local studio with a real offer funnel and ads planned.** With no local competitor running Meta ads, a working $89 offer page plus Pixel tracking has the field to itself, for now.
8. **Online coaching application** (later phase): use Geronimo's Diagnose → Game plan framing on the form ("Tell us where you're at → Coach Loz DMs you a plan"), with Rhys's "no hard sell on the first chat" promise.

## Row count check
`research/funnel-study.csv`: 23 rows. Status: found 4, mapped 14, compared 2, built 3, closed 0.
