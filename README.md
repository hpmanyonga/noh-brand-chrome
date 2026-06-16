# noh-brand-chrome

Shared brand chrome for the Network One Health web estate.

## What this is

A small Astro component package that every NOH site imports to get a consistent header, footer, brand pill, CSS variables, NOMA badges, and the verbatim regulatory footer line. The single source of truth for brand RULES is `~/code/noh-design-os/`; this package is the CODE implementation.

## Install (in any consumer site)

```bash
npm install github:hpmanyonga/noh-brand-chrome
```

No npm registry account needed — installs straight from the private GitHub repo.

## Use

```astro
---
import BaseLayout from "@noh/brand-chrome/BaseLayout.astro";
---

<BaseLayout
  title="Cost Estimator"
  description="Estimate your maternity care costs."
  domain="coza"
  contentType="maternity"
>
  <h1>Hello</h1>
</BaseLayout>
```

## Bumping

After editing chrome:

```bash
cd ~/code/noh-brand-chrome
git add -A && git commit -m "feat: update header" && git push
```

In each consumer site:

```bash
npm update @noh/brand-chrome
git push  # triggers Cloudflare Pages rebuild
```

A `/bump-chrome` Claude skill (to be built in Month 2) automates this across all repos.

## Canonical values

| Token | Value | Source |
|---|---|---|
| `--noh-green` | `#40887D` | `noh-design-os/02_visual_system/colors.yaml` |
| `--noh-pink` | `#E8A0A8` | same |
| `--noh-paper` | `#f3ebdf` | same |
| `--noh-ink` | `#211f1b` | same |
| `--noh-font` | `Arial, "Helvetica Neue", Helvetica, sans-serif` | `fonts.yaml` |

The regulatory footer line is verbatim per `brand_architecture.yaml` HARD GATE — do not edit.
