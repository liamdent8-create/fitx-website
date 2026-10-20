# FIT X website

Astro site for FIT X / FIT X Studio.

## Editing text, prices and links (no code needed)

| What | File |
|---|---|
| Prices, tiers, what's included | `content/prices.json` |
| Studio FAQs | `content/studio-faq.json` |
| Video links | `content/videos.json` (paste the YouTube ID into `id`) |
| Testimonials (only `consent.given: true` show) | `content/testimonials.json` |
| Address, phone, email, Mindbody/Shopify links | `content/site.json` |

Edit on GitHub, commit, and the host rebuilds the site automatically once it's connected.

## Running locally

```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Pages

- `/studio`: studio sales landing page (ads point here)
- `/`: temporary home (location router comes next)

See `OPEN-ITEMS.md` for what's still needed and `DECISIONS.md` for why things are the way they are.
