# CLAUDE.md — noh-brand-chrome

Astro/CSS implementation of the NOH brand.

## Canonical source (LOCKED · DO NOT EDIT)

**`OneDrive-NetworkOneHealth/Academy and Professional Dev_NEW/30-templates/brand/2026-05-15_brand-system_universal_v1.0.pdf`**

This is the global Brand System v1.0, status "Approved · Global guide · LOCKED". Every token, rule, and verbatim line in this package traces back to that PDF. Where the older `~/code/noh-design-os/02_visual_system/colors.yaml` disagrees with the PDF, **the PDF wins**.

## HARD RULES (PDF B1, B9)

1. **Network One Health leads by default.** In headers, hero copy, page titles, and anywhere visible to users, NOH is the front brand. The practice name "Dr HP Manyonga and Associates Inc." appears ONLY in the compliance footer — never in chrome or hero. **EXCEPTION (HP override 2026-07-04): the clinician-owned provider estate** (`hpmanyonga.co.za` + `join.hpmanyonga.co.za`) leads with **"Dr H P Manyonga & Associates"** and presents NOH as "the Network One Health provider network" — set via `lead="practice"` on `BaseLayout`/`Header` (default `lead="noh"`). This de-conflicts with the NOH client site `networkonehealth.co.za` and reinforces clinician ownership to the specialist/hospital audience. Patient-facing surfaces (e.g. `tools.hpmanyonga.co.za`) stay NOH-led.
2. **The compliance footer line:** "A service of Network One Health. Clinical protocols and technical expertise provided by Dr H P Manyonga & Associates Inc. Practice No. 0977357." Inject the practice number via the `hpcsaPR` prop (name kept for backwards compatibility); don't edit other wording. NOTES: (a) the practice is identified by its **Practice Number**, never an "HPCSA PR"/MP number — HP rule 2026-05-26. (b) The practice supplies **clinical protocols and technical expertise**, NOT "services provided by" — NOH may not provide the service, but its protocols are non-negotiable for any team in the network — HP rule 2026-06-29. Both override the older "Clinical services provided by … HPCSA PR[xxx]" wording in the LOCKED brand PDF.
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
| `src/brand.css` | CSS variables (single source from PDF v1.0) |
| `src/reset.css` | Minimal modern reset |
| `assets/noh-logo.png` | Canonical NOH transparent logo (1254×1254) |
| `assets/noh-monogram.png` | NOH monogram variant |
| `assets/hpma-logo.png` | Dr HP Manyonga & Associates square logo (for use in compliance contexts only) |
