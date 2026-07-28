# CLAUDE.md — noh-brand-chrome

Astro/CSS implementation of the NOH brand.

## Canonical source

**NOH Brand System** (network-one-design skill) + HP art direction 2026-07-24, migrated into `brand.css` on `main` (package `0.9.5`+). The `brand-v2` branch's palette experiment (green retired, pink `#E8A0A8`, ink `#21302d`) was **reverted 2026-07-24 on HP's explicit call** ("green was more powerful... this looks sickly") — it never shipped and must not be reintroduced. `brand.css`'s own header comment is the live source of truth if this doc and the code ever disagree; the code wins.

Canon (do not silently revert): **Arial** everywhere (Inter dropped except for live product UI, CR-004); **green `#599692` is kept** as the secondary colour (footer strip, power bands); pink is `#F5B3B9` (dusty accent, supporting-only, never a CTA); ink is `#1A1A1A`. Teal `#40887D` unchanged, always primary/CTA.

## HARD RULES (PDF B1, B9)

1. **Network One Health leads by default.** In headers, hero copy, page titles, and anywhere visible to users, NOH is the front brand. The practice name "Dr HP Manyonga and Associates Inc." appears ONLY in the compliance footer — never in chrome or hero. **EXCEPTION (HP override 2026-07-04): the clinician-owned provider estate** (`hpmanyonga.co.za` + `join.hpmanyonga.co.za`) leads with **"Dr H P Manyonga & Associates"** and presents NOH as "the Network One Health provider network" — set via `lead="practice"` on `BaseLayout`/`Header` (default `lead="noh"`). This de-conflicts with the NOH client site `networkonehealth.co.za` and reinforces clinician ownership to the specialist/hospital audience. Patient-facing surfaces (e.g. `tools.hpmanyonga.co.za`) stay NOH-led.
2. **The compliance footer line (canonical, HP 2026-07-10):** "A service of Network One Health. Clinical content is signed off by Dr H P Manyonga & Associates Inc. (BHF practice number 0977357); all guidelines and tools remain its property. Care at each site is delivered by your local Network One care team, under Network One clinical governance." Inject the practice number via the `hpcsaPR` prop (name kept for backwards compatibility); don't edit other wording. NOTES: (a) identified by **BHF practice number**, never an "HPCSA PR"/MP number. (b) Never "clinical services provided by" — NOH is the **integrator**: sites may use different clinical providers; the practice holds sign-off, governance, and the IP/know-how. This wording complies with HPCSA and indemnity requirements and supersedes the 2026-05-26 / 2026-06-29 variants and the LOCKED brand PDF's footer line. It is canonical on ALL artifacts (web, print, tools).
3. **Colours (law):** teal `#40887D` (primary/anchor, always the CTA colour), deep teal `#346e66` (hover/depth only), green `#599692` (secondary — footer strip, power bands), dusty pink `#F5B3B9` (accent, supporting only — never a CTA, never body text). Neutrals: white `#FFFFFF` or warm paper `#F7F4EF`; text `#1A1A1A` (not pure black). No additional palette colours without HP sign-off.
4. **Typography (v2, CR-002):** **Arial** for all surfaces (web and documents). Inter is dropped — no external font requests.
5. **Footer chrome:** green (`#599692`) strip with white text, 3-item layout (email / WhatsApp / website), plus an optional full-sitemap link list and compliance line below (see `footerLinks` prop, added 2026-07-28 for the estate IA redesign).

## When to bump version

Any token/component change → bump `package.json` `version`, push. Consumer sites run `npm update @noh/brand-chrome && git push` to pick up.

## Components

| File | Purpose |
|---|---|
| `src/BaseLayout.astro` | Default page shell — head meta, Arial (no external fonts), header + footer wired |
| `src/Header.astro` | NOH-led header (logo + name + subline + cross-domain pill) + prominent funnel CTA (HP 2026-07-11: lead=noh -> "Ask us to call you" patient EOI; lead=practice -> "Express interest" provider EOI; `cta` prop overrides/suppresses) |
| `src/Footer.astro` | Green-strip footer; optional full sitemap (`links` prop) and verbatim compliance line for regulated content |
| `src/BrandPill.astro` | Small cross-domain link to the sister surface |
| `src/NomaBadge.astro` | Declares NOMA deployment model (Direct/Partner/Affiliate/Embedded) |
| `src/CtaButton.astro` | Shared CTA button (primary/ghost) — every Book/Register/Enrol/EOI button uses this |
| `src/urls.js` | Canonical form endpoints: universal intake (JotForm `230362510790550` — CLINICAL ENROLMENT ONLY, HP rule 2026-07-11: never the primary CTA on public patient pages) + patient call-back EOI (`243391667086062`, the patient front door, `callbackUrl(source)`) + provider EOI (`250542120069548`), with `intakeUrl(source)` helper |
| `src/brand.css` | CSS variables (single source, v2 canon — Brand Bible v2.0) |
| `src/reset.css` | Minimal modern reset |
| `assets/noh-logo.png` | Canonical NOH transparent logo (1254×1254) |
| `assets/noh-monogram.png` | NOH monogram variant |
| `assets/hpma-logo.png` | Dr HP Manyonga & Associates square logo (for use in compliance contexts only) |
