# Going live on fitxstudio.com.au

For Liam. About 30 minutes of clicking, plus up to a few hours for DNS to update. Nothing here costs money (Netlify's free plan is enough).

## Where things are today (checked 21 Oct 2026)

| Record | Current value | What it does |
|---|---|---|
| Nameservers | `dns240.a.register.com`, `dns135.b.register.com`, `dns214.c.register.com`, `dns176.d.register.com` | DNS is managed at **Register.com** |
| `fitxstudio.com.au` A | `199.34.228.165` | The current Square Online site |
| `www` CNAME | `fitxstudio.com.au` | www follows the main address |
| MX (5 records) | `aspmx.l.google.com` + `alt1`–`alt4` | **Lauren's Google Workspace email. Do not touch these.** |

## Before you switch

1. Lauren clears the "Nothing goes live until this list is clear" items in `OPEN-ITEMS.md` (yellow `NEEDS LAUREN` boxes show on the preview site).
2. The $89 trial is added to the contract and fee schedule (OPEN-ITEMS #1).
3. Lauren is happy with the preview link from step B.

## A. Put the site on Netlify (free)

1. Go to netlify.com → **Sign up** → **Sign up with GitHub** (use the account that owns `liamdent8-create/fitx-website`).
2. **Add new site → Import an existing project → GitHub** → pick `fitx-website`.
3. Leave the build settings as they are. `netlify.toml` in the repo already sets: build `npm run build`, publish `dist`, Node 22.
4. Click **Deploy**. After about a minute you get a preview address like `something.netlify.app`. Send it to Lauren.
5. **Site configuration → Change site name** → e.g. `fitx-studio` (so it's `fitx-studio.netlify.app`).

From now on, every change saved to GitHub (including Pages CMS edits) rebuilds the site automatically.

## B. Connect the domain

1. In Netlify: **Domain management → Add a domain** → `fitxstudio.com.au` → **Verify** → **Add domain**. Netlify adds `www.fitxstudio.com.au` as well.
2. Netlify will offer "Set up Netlify DNS". **Skip it** (choose to use external DNS). Keeping DNS at Register.com is the safest way to protect the email records.
3. Netlify then shows the records to add. Write them down. They are normally:
   - Main address: an **A record** pointing to Netlify's load balancer (Netlify shows the IP, usually `75.2.60.5`)
   - www: a **CNAME** pointing to `fitx-studio.netlify.app` (your site name)

## C. Change two records at Register.com

1. Sign in at register.com → your domain → **DNS / Advanced technical settings** (the name varies).
   - If you can't find the domain there, check whether it was bought through Square: Square Dashboard → **Online → Website → Domains**. If so, edit the records there instead.
2. Edit the **A record** for `fitxstudio.com.au` (shown as `@` or blank): change `199.34.228.165` to the IP Netlify gave you.
3. Edit the **www CNAME**: change `fitxstudio.com.au` to `fitx-studio.netlify.app`.
4. **Leave every MX record and any TXT records (Google verification, SPF) exactly as they are.**
5. Save. Changes usually show within an hour (can take up to 48).

## D. Finish

1. Back in Netlify → **Domain management**: wait for the green ticks, then click **Verify DNS** if asked. HTTPS (the padlock) is switched on automatically once DNS has updated.
2. Test: `https://fitxstudio.com.au` → studio page, `/timetable` loads classes, `/mums-and-bubs` loads, the $89 button opens Mindbody.
3. Send Lauren a test email to `lauren@fitxstudio.com.au` to confirm email still works.
4. In Square Online, unpublish the old site or disconnect the domain, so it's not live in two places. Cancel any Square Online plan only after the new site is working.
5. Tell Claude it's live: I'll add redirects from the old Square page addresses (e.g. old memberships page) so Google and old links still land in the right place.

## If something goes wrong

Put the A record back to `199.34.228.165` and the www CNAME back to `fitxstudio.com.au`. The old Square site comes straight back. Email is never affected as long as the MX records weren't changed.
