# FIT X website

Astro site for FIT X / FIT X Studio.

## Editing text, prices and links (no code needed)

All words on the site live in `content/*.json`, not in the code. Three ways to change them:

1. **Pages CMS (day-to-day edits).** Go to pagescms.org → **Sign in with GitHub** → pick `fitx-website`. Each page is a form ("Studio page text", "Timetable page text", "Mums and bubs page text", FAQs, videos, contact details and links). Change a box, click **Save**. Once the site is on Netlify, it rebuilds itself and the change is live in about a minute.
2. **Google Doc (big rewrites).** Edit the copy doc, then tell Claude "the doc is ready" and it will be moved into the site.
3. **Ask Claude.** Describe the change in chat.

Yellow `[[NEEDS LAUREN: …]]` boxes on the site are things only Lauren can answer. Type over them in Pages CMS, or answer in chat.

| What | File |
|---|---|
| Studio page words | `content/studio.json` |
| Timetable page words (including "Buy a pass") | `content/timetable.json` |
| Mums and bubs page words | `content/mums.json` |
| Prices, tiers, what's included | `content/prices.json` |
| Studio FAQs | `content/studio-faq.json` |
| Video links | `content/videos.json` (paste the YouTube ID into `id`) |
| Testimonials (only `consent.given: true` show) | `content/testimonials.json` |
| Address, phone, email, Instagram DM account, Mindbody links, product checkout links | `content/site.json` |

After adding or renaming a field in a content file, run `python3 scripts/gen-pages-cms.py` so Pages CMS shows it.

Going live on the domain: see `GO-LIVE.md`.

## Running locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Pages

- `/studio`: studio sales landing page (ads point here)
- `/timetable`: live Mindbody timetable, plus "Buy a pass" (memberships, class packs, casual) checking out in Mindbody
- `/mums-and-bubs`: mums and bubs page (SEO + offer)
- `/`: redirects to `/studio` for now (location router comes later)

See `OPEN-ITEMS.md` for what's still needed and `DECISIONS.md` for why things are the way they are.
