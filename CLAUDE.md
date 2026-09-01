# CLAUDE.md — noh-brand-chrome

Astro/CSS implementation of the NOH brand.

## Canonical source

**NOH Brand Bible v3.0** (network-one-design, CR-006, 2026-08-01), migrated into `brand.css` on `main` (package `0.10.0`+). The `brand-v2` branch's palette experiment (green retired, pink `#E8A0A8`, ink `#21302d`) was **reverted 2026-07-24 on HP's explicit call** ("green was more powerful... this looks sickly") — it never shipped and must not be reintroduced. CR-006 (2026-08-01) formally reconciled the doctrine to match: v1's five-token palette is canonical, pink is promoted from decorative-only to a minor/junior interactive accent, and ink is locked to text-only with no exception. `brand.css`'s own header comment is the live source of truth if this doc and the code ever disagree; the code wins.

Canon (do not silently revert): **Arial** everywhere (Inter dropped except for live product UI, CR-004); **green `#599692` is kept** as the secondary colour, and is the *dominant* secondary (footer strip, power bands, canvas, labels); pink is `#F5B3B9` (junior accent — CTA variant, chips, reserved section washes are fine; never body text, never outweighing green's footprint); ink is `#1A1A1A`, text only, never a background/fill. Teal `#40887D` unchanged, always primary/CTA.

## HARD RULES (PDF B1, B9)

1. **Brand lead follows the ENTITY that owns the surface.** Network One Health is a **house of brands**: a management company that provides services to practices — Dr H P Manyonga & Associates, H P Manyonga Solo, and in future midwife and primary-care practices (HP 2026-09-01).

   | Surface | `lead` | Header brand | Why |
   |---|---|---|---|
   | `hpmanyonga.co.za` | `practice` | **Dr H P Manyonga & Associates** / *Powered by Network One Health* | The regulated gynaecology practice. Gynaecology and maternity live here, and only those. NOMA, SWIFT Care and ColpoCare are gynaecology lines, so they sit here too. |
   | `join.hpmanyonga.co.za` | `practice` | same | The practice's own provider recruitment. |
   | `networkonehealth.co.za` | n/a | Network One Health | The management company. A future service line such as childcare or primary care lives there, because it cannot sit on a gynaecology practice's site. |
   | patient tools, e.g. `tools.hpmanyonga.co.za` | `noh` | Network One Health | Cross-practice surfaces stay NOH-led. |

   The practice name now appears in header chrome on its own surfaces. That reverses the older "NOH leads everywhere, practice name only in the compliance footer" rule, and reverses a 2026-08-31 scoping of this exception, which was decided before the house-of-brands framing was stated.

   **`lead` does not choose the CTA.** Use `primary` for that. `hpmanyonga.co.za` is `lead="practice"` with `primary="patient"`: the practice is the brand a patient is choosing, and the call-back is the one action. `join.` is `lead="practice"` with the provider EOI. Conflating the two is what made the apex header sell provider recruitment.

2. **The compliance footer line (canonical, HP 2026-08-30):** "Network One Health contracts and governs the clinical practices that deliver care at each site. Clinical oversight and accountability sit with Dr H P Manyonga & Associates Inc. (BHF practice number 0977357). All guidelines and tools remain the practice's property." This replaces the 2026-07-10 wording, which said care is "delivered by your local Network One care team, under Network One clinical governance" — Network One Health is a **management company** and does not deliver care, so that named the wrong party. The entity chain, in the order it must be stated: NOH is the envelope, it contracts the underlying service providers and governs them; Dr H P Manyonga & Associates Inc. is the regulated entity holding clinical oversight and accountability, and it contracts local providers under SLA (those providers may be multidisciplinary in their own right). Inject the practice number via the `hpcsaPR` prop (name kept for backwards compatibility); don't edit other wording. NOTES: (a) identified by **BHF practice number**, never an "HPCSA PR"/MP number. (b) Never "clinical services provided by" — NOH is the **integrator**: sites may use different clinical providers; the practice holds sign-off, governance, and the IP/know-how. This wording complies with HPCSA and indemnity requirements and supersedes the 2026-05-26 / 2026-06-29 variants and the LOCKED brand PDF's footer line. It is canonical on ALL artifacts (web, print, tools).
3. **Colours (law, CR-006 2026-08-01):** teal `#40887D` (primary/anchor, always the main CTA colour), deep teal `#346e66` (hover/depth only), green `#599692` (secondary, **main** — footer strip, power bands, canvas, labels; the dominant secondary colour), dusty pink `#F5B3B9` (accent, **junior** — a minor CTA variant, chips, and reserved section washes are fine, but never body text and never outweighing green's footprint), pink-soft `#FAD9DC` (pale wash for reserved backgrounds/soft chip fills). Neutrals: white `#FFFFFF` or warm paper `#F7F4EF`; text `#1A1A1A` (not pure black) — ink is **text only**, never a background/fill, no exception. No additional palette colours without HP sign-off. **APPROVED (CR-007, 2026-08-30, Bible v3.1):** three *text-safe* variants — `--noh-teal-text` `#346e66` (= the existing deep teal), `--noh-green-text` `#4b7f7c`, `--noh-muted-strong` `#5e6470`. These are not new brand colours: the five brand values above are unchanged and still carry every fill, border, icon, hover and large heading. They exist because measured on white, teal is 4.17:1 and green 3.39:1, so neither clears 4.5:1 for text below 18.66px bold. Each is the same hue darkened only until it clears. Teal needed no new value at all.
4. **Typography (v2, CR-002):** **Arial** for all surfaces (web and documents). Inter is dropped — no external font requests.
5. **Footer chrome:** green strip with white text, 2-item layout (email / WhatsApp) plus the cross-domain sister link, and an optional full-sitemap list and compliance line below (see `footerLinks` prop). The strip uses `--noh-green-text` (`#4b7f7c`), not `#599692`: white 14px text on `#599692` measures 3.39:1 and does not clear 4.5:1. The bare website URL was removed 2026-08-30 once the sister link began pointing at `networkonehealth.co.za`, so the footer no longer prints the same URL twice.

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
| `src/CtaButton.astro` | Shared CTA button (primary/inverse/ghost/accent) — every Book/Register/Enrol/EOI button uses this. `accent` (pink, CR-006) is a minor/secondary CTA only, never the primary action |
| `src/urls.js` | Canonical form endpoints: universal intake (JotForm `230362510790550` — CLINICAL ENROLMENT ONLY, HP rule 2026-07-11: never the primary CTA on public patient pages) + patient call-back EOI (`243391667086062`, the patient front door, `callbackUrl(source)`) + provider EOI (`250542120069548`), with `intakeUrl(source)` helper |
| `src/brand.css` | CSS variables (single source, v3.0 canon — Brand Bible v3.0, CR-006) |
| `src/reset.css` | Minimal modern reset |
| `assets/noh-logo.png` | Canonical NOH transparent logo (1254×1254) |
| `assets/noh-monogram.png` | NOH monogram variant |
| `assets/hpma-logo.png` | Dr HP Manyonga & Associates square logo (for use in compliance contexts only) |
