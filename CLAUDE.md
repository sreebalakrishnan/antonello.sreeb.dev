# antonello.sreeb.dev

Staging home for Antonello Giglio's personal site (the "maker" site). Plain static HTML/CSS, no build step.
Sister site: gastronomica.sreeb.dev → Gastronómica Nutri, the commercial/product site. Each links to the other.

- Repo root = Hostinger document root (addon site antonello.sreeb.dev). Push to `main` deploys.
- Public but NOT indexed: `robots.txt`, `X-Robots-Tag` in `.htaccess`, `<meta name="robots">` on every page.
- When moving to the real domain: drop the noindex and point the domain at this repo.

## Content rules (from Anto & Helena, non-negotiable)
- Never mention Auroville. Say Pondicherry, India, Delhi, or a city.
- No health claims (low GI, protein, digestion) until there is lab data.
- Anto's own words beat ours. Quotes come from his WhatsApp answers (7 Oct 2026) and Lauren's interviews.
- "Chef" vs "food maker": open question for Anto. Yellow `.tbc` tags mark anything unconfirmed.

## Sources
- `_source/transcripts/` — Anto's five answers (7 Oct), Helena's potluck story (7 Oct), summary of Lauren's three interviews.
- Lauren's Drive folder: Design Brief + recordings (link in the gastronomica repo's sources.html).
- WhatsApp group **gastronomica.in** (`120363428458153629@g.us`), pulled via WHAPI when asked. Raw audio/images are gitignored.
- Photos in `assets/anto/` were shared by Anto in the group on 30 Sep 2026.

## Split with the Nutri site
This site: story, kitchens & clients, menus/training/events, videos, press, enquiry.
Nutri site: the pasta range, process, values, ordering, wholesale.
