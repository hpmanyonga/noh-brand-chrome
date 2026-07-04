# noh-brand-chrome

Shared brand chrome for the Network One Health web estate.

## Canonical source

LOCKED · DO NOT EDIT — `OneDrive-NetworkOneHealth/Branding/01-brand-guide/2026-05-15_brand-system_noh_v1.0.pdf`

This package is the CODE implementation. The PDF is the RULE source. Every token traces to the PDF.
The full design system (tokens, UI kits, content-ops) is the canonical `network-one-design` skill at
`~/.claude/skills/network-one-design/`; this npm package is the web-component slice of it.

## Install

```bash
npm install github:hpmanyonga/noh-brand-chrome
```

## Use

```astro
---
import BaseLayout from "@noh/brand-chrome/BaseLayout.astro";
---

<BaseLayout
  title="Cost Estimator"
  description="Estimate your maternity care costs."
  domain="coza"
  contentType="systems"
  compliance={true}
  hpcsaPR="0123456"
>
  <h1>Hello</h1>
</BaseLayout>
```

## Props

- `domain`: `"com" | "coza"` — drives `hreflang` and cross-domain pill direction
- `contentType`: `"systems" | "clinical" | "subbrand"` — content positioning hint (does not change chrome brand — NOH always leads per PDF B1)
- `compliance`: `boolean` — when true, footer appends the verbatim compliance line for regulated clinical content
- `hpcsaPR`: `string` — HPCSA practice number injected into compliance line

## Canonical tokens (CSS variables)

| Token | Value | PDF reference |
|---|---|---|
| `--noh-teal` | `#40887D` | B2 — primary |
| `--noh-green` | `#599692` | B2 — secondary, footer strip |
| `--noh-pink` | `#F5B3B9` | B2 — dusty pink accent |
| `--noh-ink` | `#1A1A1A` | B2 — near-black body |
| `--noh-white` | `#FFFFFF` | B2 — warm off-white |
| `--noh-font` | `"Inter", Arial, ...` | B5 — digital uses Inter |

## Bumping

```bash
cd ~/code/noh-brand-chrome
# edit, then:
git add -A && git commit -m "feat: <change>" && git push
# bump package.json version, then in each consumer site:
npm update @noh/brand-chrome
git commit -am "chore: bump brand-chrome" && git push
```

A `/bump-chrome` Claude skill is planned to automate this across all repos.
