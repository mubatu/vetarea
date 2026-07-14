## Codex Plan Recommendation

I would build VetArea with:

- **Astro + TypeScript**
- **Astro Content Collections** for Markdown-based content
- **Scoped CSS with design tokens**, or Tailwind if you already prefer it
- **Static generation**
- **Cloudflare Pages connected to GitHub**

Astro is particularly well suited to content-focused websites and produces static HTML with very little client-side JavaScript. Its content collections provide structured, validated Markdown content, while its built-in image components handle responsive images and optimization. [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) and [Astro image handling](https://docs.astro.build/en/guides/images/) cover these capabilities.

You do not need React, a database, authentication, SSR, or a headless CMS for the current requirements.

## Suggested content structure

I would separate global information, page content, and repeatable content:

```text
src/
├── assets/
│   └── images/
│       ├── hero/
│       ├── services/
│       ├── team/
│       └── clinic/
├── content/
│   ├── pages/
│   │   └── tr/
│   │       ├── ana-sayfa.md
│   │       ├── hakkimizda.md
│   │       ├── hizmetlerimiz.md
│   │       └── ekibimiz.md
│   │       └── iletisim.md
│   ├── services/
│   │   └── tr/
│   │       ├── muayene.md
│   │       ├── asilama.md
│   │       └── cerrahi.md
│   └── team/
│       └── tr/
│           ├── cihan-culha.md
│           └── emin-bayram.md
├── data/
│   └── site.tr.yaml
└── pages/
```

`site.tr.yaml` should contain information used in multiple places:

```yaml
clinicName: VetArea
phone: "+90 555 000 00 00"
whatsapp: "905550000000"
appointmentUrl: "https://..."
mapsUrl: "https://maps.google.com/..."
email: "info@vetarea.com"

openingHours:
  weekdays: "09:00–19:00"
  saturday: "09:00–17:00"
  sunday: "Acil durumlar için arayınız"

social:
  instagram: "https://instagram.com/..."
```

A homepage Markdown file could look like:

```md
---
title: "VetArea Veteriner Kliniği"
description: "Dostlarınızın sağlığı için modern ve güvenilir veteriner hizmetleri."
hero:
  heading: "Onların sağlığı, bizim önceliğimiz."
  text: "Deneyimli ekibimizle muayene, koruyucu bakım ve tedavi hizmetleri sunuyoruz."
  desktopImage: "../../../assets/images/hero/clinic-desktop.jpg"
  mobileImage: "../../../assets/images/hero/clinic-mobile.jpg"
  imageAlt: "VetArea kliniğinde bir veteriner ve köpek"
  primaryAction:
    label: "Randevu Al"
    url: "https://..."
  secondaryAction:
    label: "Hizmetlerimiz"
    url: "/hizmetlerimiz"
---

Ana sayfanın diğer metinleri buraya yazılabilir.
```

Content schemas can reject malformed phone numbers, missing images, invalid links, and forgotten alternative text during the build.

## Review of the reference design

The reference has some useful qualities:

- Clear clinic branding
- Prominent appointment and contact actions
- A reassuring blue-led palette
- Large, easily tappable mobile controls
- Immediate access to phone, WhatsApp, and directions

However, I would not reproduce it directly.

### What I would improve

- The desktop header has too many competing elements: two navigation areas, social links, search, large buttons, and floating controls.
- The pale overlay reduces the hero image’s strength while also creating weak text contrast.
- The desktop slider arrows and floating menu button add visual noise.
- The mobile layout separates the image from the hero message, so the image no longer functions as a strong hero.
- The four-button mobile bottom bar consumes too much vertical space.
- Surgery imagery can communicate expertise, but as the primary image it may feel clinical or intimidating to some pet owners.
- A carousel is unnecessary. One carefully selected hero image usually communicates more clearly and performs better.

## Recommended VetArea direction

Use a warmer, simpler visual language:

- #e91523 and #08396a as the primary brand colors because of logo
- Appropriate background colors
- Rounded elements, but not pill-shaped everywhere
- Warm photography with a veterinarian interacting naturally with a dog or cat
- A single hero message with one primary and one secondary action
- Generous whitespace and short Turkish copy

### Desktop hero

A two-column hero would work especially well:

- Left: heading, short supporting text, appointment button, phone/WhatsApp link
- Right: strong clinic photograph with a controlled crop
- Below: trust information such as opening hours, emergency contact, experience, or services

Alternatively, use a full-width photograph with a dark directional gradient behind the text. Avoid applying a pale overlay across the entire photograph.

### Mobile hero

For mobile, use a dedicated portrait crop rather than relying on the desktop image’s center crop. Keep the heading to roughly three lines and show the appointment action without scrolling.

A compact sticky bar can contain only the most important actions:

- `Ara`
- `WhatsApp`
- Optionally `Yol Tarifi`

Three icon-and-label actions are enough. Social media links belong in the footer.

## Homepage content order

I suggest:

1. Header
2. Hero with appointment CTA
3. Trust strip: hours, phone, location, emergency information
4. Featured services
5. Short “VetArea Hakkında” section
6. Team preview
7. Clinic photographs
8. Opening hours and map
9. FAQ
10. Footer

This keeps the homepage useful rather than merely decorative.

## Localization

Prepare the folder structure for localization immediately, even if English content comes later:

- Turkish default: `/`, `/hakkimizda`, `/hizmetlerimiz`
- English later: `/en`, `/en/about`, `/en/services`

Astro provides built-in internationalized routing, so Turkish can remain unprefixed while English receives `/en/`. [Astro i18n documentation](https://docs.astro.build/en/guides/internationalization/)

Avoid embedding Turkish labels directly inside components. Navigation labels, buttons, validation messages, and footer text should come from locale data files.

## Images

Keep editable content images inside `src/assets/images`. Astro recommends `src` for local images because it can transform, resize, optimize, and bundle them; files under `public` are copied without processing. [Astro image guide](https://docs.astro.build/en/guides/images/)

For the hero:

- Supply separate desktop and mobile crops
- Start with a high-quality original of at least roughly 2400px width
- Generate responsive AVIF/WebP variants during the build
- Store meaningful alt text alongside the image reference
- Allow an optional focal-point value, such as `center: "65% 45%"`

This prevents faces and pets from being cropped incorrectly on phones.

## Deployment and editing workflow

Cloudflare Pages can connect directly to GitHub and automatically build after a push. Pull requests and non-production branches receive separate preview URLs, so staff changes can be checked before merging. [Cloudflare Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/) and [preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/)

Recommended configuration:

```text
Production branch: main
Build command: npm run build
Output directory: dist
```

Keep Astro in static mode. You do not need the Cloudflare server adapter unless you later introduce server-side features.

For staff:

1. Create an `EDITING.md` with screenshots. (Use Turkish because they know Turkish)
2. Give each employee GitHub access with the minimum required permissions.
3. Have them edit content on a branch.
4. Review the Cloudflare preview.
5. Merge into `main` when approved.