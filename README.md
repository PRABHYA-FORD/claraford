# ClaraFord — Omnichannel Platform Website

Marketing site for ClaraFord, built with **Next.js 15 (App Router) + TypeScript + Material UI 7**.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
npm run typecheck
```

## Page structure

Fixed navbar (scroll-spy, blur-on-scroll, mobile drawer, light/dark toggle) → 5 sections → footer.

| # | Section  | Contents |
|---|----------|----------|
| 1 | Home     | Hero, illustrative unified-inbox preview, highlights strip |
| 2 | Channels | 8 channel cards (WhatsApp, SMS, Email, Voice, Instagram, Messenger, Live Chat, Telegram) |
| 3 | Platform | Planned features, "how it works" steps, integrations |
| 4 | Pricing  | Early access (free), Growth (pricing at launch), Enterprise |
| 5 | Contact  | FAQ accordion, validated early-access form |

## Layout

```
src/
  app/            layout (fonts, SEO metadata, theme), page, /api/contact, robots, sitemap, 404, icon
  components/
    layout/       Navbar, Footer, ColorModeToggle
    sections/     Hero, Channels, Platform, Pricing, Contact
    common/       Section, SectionHeader, icon maps
    brand/        Logo (SVG mark + wordmark)
  content/site.ts all copy & data — edit text here, not in components
  lib/contact.ts  validation shared by the form and the API route
  theme/          MUI theme (CSS variables, light + dark color schemes)
```

## Contact form

`POST /api/contact` validates the payload (same rules as the client) and returns
`201`, or `422` with per-field errors. Leads are emailed via Resend; see `.env.example`.
Without `RESEND_API_KEY` / `LEAD_NOTIFY_EMAIL` it returns `503` in production and
only logs the lead in development.
