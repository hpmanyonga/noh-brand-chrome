# CLAUDE.md — noh-brand-chrome

This is the Astro/CSS implementation of the NOH brand. The RULES live in `~/code/noh-design-os/` — read those before changing tokens here.

## HARD GATE

- The footer regulatory line in `src/Footer.astro` is verbatim per `noh-design-os/brand_architecture.yaml`. Do not edit wording.
- Green is `#40887D` only. There is no second green tone.
- Font is Arial only.

## When to bump version

Any time you change a component or token, bump `package.json` `version` and push. Consumer sites pull via `npm update @noh/brand-chrome`.

## Components

| File | Purpose |
|---|---|
| `src/BaseLayout.astro` | Default page shell — head meta, header + footer wired |
| `src/Header.astro` | Sticky brand header with content-type-aware front brand |
| `src/Footer.astro` | Footer with verbatim regulatory line + cross-brand link |
| `src/BrandPill.astro` | Small cross-domain link, top of header |
| `src/NomaBadge.astro` | Declares NOMA deployment model on a page |
| `src/brand.css` | CSS variables (single source from colors.yaml + fonts.yaml) |
| `src/reset.css` | Minimal modern CSS reset |
