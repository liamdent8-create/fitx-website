# EBT challenge page teardown

Page: https://www.ebtonline.au/challenge ("Spin Kick Into Spring Challenge"). Rendered live on mobile (390px) and desktop, 20 Oct 2026. Built on Lovable (React). Fonts: Oswald (condensed italic display) + DM Sans. Palette: sage greens, cream, one dark green CTA colour. Tracking: Meta Pixel, Klaviyo, Google tag.

| # | Section | What's on it | Funnel job |
|---|---|---|---|
| 1 | Announcement bar | "WIN · $15,000 for the best transforms · Learn more ›" | Hook before the page |
| 2 | Hero | Challenge logo art, three coaches in matching activewear, "Become a Hot Cunnie", "Transform your body. Eat what you love.", "🔥 3 × $5,000 prizes" badge, "Secure your spot →" | Prize + dream outcome + faces |
| 3 | Ticker | 🔥 Fortnightly check-ins · In-app coaching · Home & gym workouts · $15,000 cash prize · Personalised nutrition | Skim value |
| 4 | VSL | Vimeo, coach (Adam) to camera, burned-in captions ("FEEL BETTER"), autoplay muted. "Secure your spot" button underneath | Trust / story |
| 5 | Transformations carousel | Before/after photos, swipeable | Proof (perceived likelihood) |
| 6 | Urgency | Pill "All New · Spots filling fast ›", "Challenge starts October 12th", 4 white countdown boxes, CTA, "**Challenge starts October 12th**" | Deadline |
| 7 | About | "What's the Spin Kick Into Spring Challenge?": an 8-week transformation, the food you love, coaching, $15k prizes | Clarity |
| 8 | What's included | Swipeable green cards: Customised workouts, Macro targets, Tailored meal plans, Support & accountability, Food diary, EBT app | Value stack |
| 9 | Prize | "Your chance to win $5,000 / $15,000 total up for grabs", carousel: best male / female / long-term client transformation | Re-hook |
| 10 | App | "Get direct access to meal plans, recipes & workouts", phone mock-up with macro calculator | Lower effort |
| 11 | Checklist | "One challenge. Everything you need." with emoji bullets, Join now | Recap |
| 12 | Meal plan cards | Bao buns, waffles, burger & fries… "No boring salads" | Kill the food objection |
| 13 | Client results | "Over 1,000 transformations and counting", grid, See more | Proof at volume |
| 14 | Pricing | Nutrition only $72/wk; Training & Nutrition $95/wk; "*8 weeks minimum*"; "Signing up as a couple? Save 15%" ribbon card | Offer + order bump |
| 15 | Get in touch | Glass form over a photo (name, email, phone, message), "response within 48 business hours", SMS consent text | Fence-sitters |
| 16 | Brand + footer | "#EAT WHAT YOU LOVE" marquee, nav, "Join the VIP list" | Catch-all / nurture |

Patterns worth copying (structure only):
- Same CTA label everywhere ("Secure your spot").
- Proof immediately after the video, then again before pricing.
- The prize is repeated mid-page for people who scrolled past the hero.
- Swipeable cards keep a long page feeling short on mobile.
- Condensed italic display type on every promo moment; calm body type.

Not copied for FIT X: before/after imagery, cash prizes, crude naming, body-focused language.

## How FIT X Studio mapped it (Oct 2026)
Banner "Opening Mon 26 Oct · 2 weeks unlimited $89" → hero "2 WEEKS UNLIMITED" + $89 badge → ticker → VSL → member results (strength results, no before/after) → countdown to opening → "What do I get for $89?" → Apple tiles with + sheets → $89 offer panel → app mock-up → checklist → studio photo carousel → reviews → pricing (Premium featured) + "Bring a partner to Saturday HIIT" card → FAQ → get-in-touch glass panel → brand marquee → final CTA. See the repo's `FUNNEL.md` and `src/pages/studio.astro`.
