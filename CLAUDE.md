# CLAUDE.md — noh-brand-chrome

Astro/CSS implementation of the NOH brand.

## Canonical source (LOCKED · DO NOT EDIT)

**`OneDrive-NetworkOneHealth/Academy and Professional Dev_NEW/30-templates/brand/2026-05-15_brand-system_universal_v1.0.pdf`**

This is the global Brand System v1.0, status "Approved · Global guide · LOCKED". Every token, rule, and verbatim line in this package traces back to that PDF. Where the older `~/code/noh-design-os/02_visual_system/colors.yaml` disagrees with the PDF, **the PDF wins**.

## HARD RULES (PDF B1, B9)

1. **Network One Health leads by default.** In headers, hero copy, page titles, and anywhere visible to users, NOH is the front brand. The practice name "Dr HP Manyonga and Associates Inc." appears ONLY in the compliance footer — never in chrome or hero. **EXCEPTION (HP override 2026-07-04): the clinician-owned provider estate** (`hpmanyonga.co.za` + `join.hpmanyonga.co.za`) leads with **"Dr H P Manyonga & Associates"** and presents NOH as "the Network One Health provider network" — set via `lead="practice"` on `BaseLayout`/`Header` (default `lead="noh"`). This de-conflicts with the NOH client site `networkonehealth.co.za` and reinforces clinician ownership to the specialist/hospital audience. Patient-facing surfaces (e.g. `tools.hpmanyonga.co.za`) stay NOH-led.
2. **The compliance footer line (canonical, HP 2026-07-10):** "A service of Network One Health. Clinical content is signed off by Dr H P Manyonga & Associates Inc. (BHF practice number 0977357); all guidelines and tools remain its property. Care at each site is delivered by your local Network One care team, under Network One clinical governance." Inject the practice number via the `hpcsaPR` prop (name kept for backwards compatibility); don't edit other wording. NOTES: (a) identified by **BHF practice number**, never an "HPCSA PR"/MP number. (b) Never "clinical services provided by" — NOH is the **integrator**: sites may use different clinical providers; the practice holds sign-off, governance, and the IP/know-how. This wording complies with HPCSA and indemnity requirements and supersedes the 2026-05-26 / 2026-06-29 variants and the LOCKED brand PDF's footer line. It is canonical on ALL artifacts (web, print, tools).
3. **Colours are locked:** teal `#40887D` (primary), green `#599692` (secondary, used for the footer strip), dusty pink `#F5B3B9` (accent). No additional palette colours without HP sign-off.
4. **Typography:** Inter for digital surfaces (web), Arial for documents.
5. **Footer chrome:** green (`#599692`) strip with white text, 3-item layout (email / phone / website).

## When to bump version

Any token/component change → bump `package.json` `version`, push. Consumer sites run `npm update @noh/brand-chrome && git push` to pick up.

## Components

| File | Purpose |
|---|---|
| `src/BaseLayout.astro` | Default page shell — head meta, Inter font, header + footer wired |
| `src/Header.astro` | NOH-led header (logo + name + subline + cross-domain pill) |
| `src/Footer.astro` | Green-strip footer; optional verbatim compliance line for regulated content |
| `src/BrandPill.astro` | Small cross-domain link to the sister surface |
| `src/NomaBadge.astro` | Declares NOMA deployment model (Direct/Partner/Affiliate/Embedded) |
| `src/CtaButton.astro` | Shared CTA button (primary/ghost) — every Book/Register/Enrol/EOI button uses this |
| `src/urls.js` | Canonical form endpoints: universal intake (JotForm `230362510790550` — CLINICAL ENROLMENT ONLY, HP rule 2026-07-11: never the primary CTA on public patient pages) + patient call-back EOI (`243391667086062`, the patient front door, `callbackUrl(source)`) + provider EOI (`250542120069548`), with `intakeUrl(source)` helper |
| `src/brand.css` | CSS variables (single source from PDF v1.0) |
| `src/reset.css` | Minimal modern reset |
| `assets/noh-logo.png` | Canonical NOH transparent logo (1254×1254) |
| `assets/noh-monogram.png` | NOH monogram variant |
| `assets/hpma-logo.png` | Dr HP Manyonga & Associates square logo (for use in compliance contexts only) |
