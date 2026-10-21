# Open items

Every `[[NEEDS LAUREN: …]]` on the site is listed here. Nothing goes live until this list is clear.

| # | Item | Where | Owner | Status |
|---|---|---|---|---|
| 1 | **$89 trial isn't in the contract or fee schedule.** Fee Schedule v2.0 and agreement section 3 only describe the $99 foundation offer. Add the "2 week unlimited trial, $89, counts towards your minimum term if you join Premium" line before ads run | Contract / fee schedule | Lauren | Open |
| 2 | Copy rewrite: edit the Google Doc "FIT X Studio page – copy for editing (v2)", then tell Claude it's ready | `content/studio.json` | Lauren | Open |
| 3 | Lauren's story (epiphany bridge): now told in the VSL (like EBT), and on the About page later | VSL / About | Lauren | Open |
| 4 | Studio VSL: YouTube (unlisted) link with captions on | `content/videos.json` → `studio.id` | Lauren | Open |
| 5 | Photos with people: see `SHOT-LIST.md`. Current photos are space and equipment only | Story, classes | Lauren / crew | Open |
| 6 | Studio testimonials with written consent | Proof wall | Lauren | Open |
| 8 | Mums and bubs cap: agreement says **10**, current website says **14**. Site follows the agreement | Classes, prices | Lauren | Open |
| 9 | Current website still lists a $55 "Pilates & Strength" tier (6-month) that isn't in the agreement. Remove it from Square or add it to the agreement | Old site | Lauren | Open |
| 12 | Privacy and Terms pages: the agreement says the privacy policy is on the website | Footer | Lauren | Open |
| 13 | Hosting: Netlify setup and domain. Step-by-step in `GO-LIVE.md` (keep the Google Workspace MX records) | Launch | Liam | Open |
| 14 | GitHub repo is **public**. Fine for website code, but no keys or member data ever go in it. Consider making it private | GitHub | Liam | Open |
| 15 | Online higher tier: $59 (brief) vs $69 (FIT X Ops "new pricing") | Online page | Lauren | Open |
| 16 | Square: assumed not on the site (Loz uses it after the DM) | Online page | Lauren | Open |
| 17 | Address: current website says "261-272", agreement says "261–273". Site uses 261–273 | Old site | Lauren | Open |
| 20 | **Hero photo with women in it** (EBT's hero is three coaches). Best: Lauren + 2 ambassadors in FIT X gear in front of the neon sign | Hero | Lauren / crew | Open |
| 21 | **Member results** for the carousel straight after the VSL: 4–8 with consent: first name, training photo (no before/after), result, timeframe, quote | Results | Lauren | Open |
| 22 | **Opening bonus?** EBT re-hooks with the prize mid-page. Is there a trial-sign-up bonus (e.g. grip socks / tote / free workshop seat)? If not, the panel stays as the $89 offer | Opening offer panel | Lauren | Open |
| 23 | App screenshots (2–3, no client names) | App section | Lauren | Open |
| 24 | Google Business Profile link / reviews | Reviews | Lauren | Open |
| 25 | **Tracking before ads:** Meta Pixel + Conversions API and GA4, with a cookie notice. EBT runs Pixel + Klaviyo. Needs Pixel ID and GA4 ID | Whole site | Lauren / Liam | Open |
| 26 | **Speed to lead:** who messages each $89 buyer the same day, and the day-7 / day-12 "stay on" DMs (scripts to draft) | After purchase | Lauren | Open |
| 27 | Jotform contact form (name, mobile, email, question) → Google Sheets: approve and I'll build it | Get in touch | Lauren | Open |
| 28 | Email/SMS list ("VIP list" like EBT) for people not ready yet: which tool? (Klaviyo, Mailchimp, ManyChat) | Footer | Lauren | Open |
| 29 | VSL: EBT autoplays muted with burned-in captions. OK to autoplay muted (no sound) on our page? | VSL | Lauren | Open |
| 30 | Logo as SVG (sharper at any size). PNG is in use now | Global | Lauren | Nice to have |
| 31 | **Rename the Mindbody widget heading** from "Book your express class" to "Book a class" (Mindbody → Branded Web Tools → widget a667931e82a) | Timetable | Lauren | Open |
| 33 | Tropic State's Instagram handle (couldn't verify) and current address (one listing says Unit 7, 261–273 McCormack St, so possibly neighbours) | Research | Lauren | Open |
| 34 | Confirm "Rhys Livingstone" = @rhyslivingstone (now a business mentor for PTs, Undeniable Mentoring) | Research | Lauren | Open |
| 37 | Mums and bubs: how soon after birth can mums start (and after a caesarean), what clearance you ask for | Mums FAQ | Lauren | Open |
| 38 | Mums and bubs: age range for bubs | Mums FAQ | Lauren | Open |
| 39 | Mums and bubs: do you take pregnant members, and what clearance? | Mums FAQ | Lauren | Open |
| 40 | Mums quotes (3–6) with consent, and mums and bubs photos (SHOT-LIST 13–17) | Mums page | Lauren / crew | Open |
| 43 | **Join buttons for memberships on /timetable:** the Mindbody sign-up link for Premium, Strength, Pilates and Open Gym. Until then they open the Mindbody shop. Paste them into `content/site.json` → `mindbodyProducts` (or see #47) | Timetable | Lauren | Open |
| 45 | **Prices in Mindbody don't match Fee Schedule v2.0.** The site's studio and mums pages use the fee schedule; the timetable's Mindbody widget shows Mindbody's. Which is right? (table below) | Mindbody / prices.json | Lauren | Open |
| 46 | 5-class packs (strength $125, Pilates $95, expire 2 months) are in Mindbody but not in the fee schedule. Add them to the fee schedule, or remove from Mindbody? | Fee schedule | Lauren | Open |
| 47 | **Memberships don't show in the Pricing widget** ("Memberships" tab says "No pricing options found"). In Mindbody, set the membership contracts to sell online, then they can be bought in the widget too | Mindbody | Lauren | Open |
| 48 | Mindbody's "2 week unlimited trial" says "Expires 14 days after first visit" and offers "Pay in person when sessions run out". Check that wording is what you want buyers to see | Mindbody | Lauren | Open |

### Price check for #45 (Mindbody pricing widget, read 21 Oct 2026)

| Pass | Fee Schedule v2.0 (on the studio page) | Mindbody (on /timetable) |
|---|---|---|
| Strength, single class | $20 | $28 (expires 14 days after purchase) |
| Mat Pilates, single class | $15 | $20 (expires 30 days) |
| Open gym, single visit | $25 | $15 (expires 7 days) |
| Strength 10-pack | $190 | $230 (expires 3 months) |
| Mat Pilates 10-pack | $140 | $175 (expires 3 months) |
| Strength 5-pack | not listed | $125 (expires 2 months) |
| Mat Pilates 5-pack | not listed | $95 (expires 2 months) |

## Closed
| Item | Resolution | Date |
|---|---|---|
| Membership tier inclusions | From Membership Agreement v2.0 section 1 | 2026-10-20 |
| Studio prices | Fee Schedule v2.0 standard rates. Foundation rates not used | 2026-10-20 |
| Front-door offer | Option A: 2-week unlimited trial $89, then Premium $75/week | 2026-10-20 |
| Trial link | Mindbody intro offer 100046 | 2026-10-20 |
| $89 counts towards minimum term | Yes (Lauren) | 2026-10-20 |
| Contact email | lauren@fitxstudio.com.au | 2026-10-20 |
| Member numbers | Don't quote numbers on the site | 2026-10-20 |
| Colours | First-draft navy and white approved | 2026-10-20 |
| Photo consent | All Drive photos cleared | 2026-10-20 |
| Network access | Unblocked | 2026-10-20 |
| Parking | Designated customer parking on site, plus on-street parking | 2026-10-20 |
| Timetable link | /timetable page with Mindbody widget a667931e82a | 2026-10-22 |
| Logo | Official FIT X STUDIO. PNG + tile in nav, footer, favicon, social card | 2026-10-22 |
| Mums and bubs page | Built at /mums-and-bubs | 2026-10-22 |
| DM keyword | LIFT (ManyChat asks goal + experience) | 2026-10-22 |
| Copy doc | v2 created; v1 renamed "OLD – don't edit" | 2026-10-20 |
| DM account | LIFT ManyChat flow runs on @fitx.studio.au; all DM buttons point there | 2026-10-21 |
| Bubs at open gym | Welcome; bub is mum's responsibility the whole time (tile + new FAQ) | 2026-10-21 |
| Brand colours | Keep navy main, slate accent | 2026-10-21 |
| Mums hero photo | Squat rack (no class photos yet) | 2026-10-21 |
| Mindbody Pricing widget | a64678e82a, on /timetable, opens on "Passes & packs" | 2026-10-21 |
