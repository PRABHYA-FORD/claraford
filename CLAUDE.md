# ClaraFord — project context

Marketing + early-access website for **ClaraFord**, a planned omnichannel inbox
(WhatsApp, email, SMS, social, live chat) with AI-assisted replies. The product
itself is **not built yet**; this site collects early-access signups.

Stack: Next.js 15 (App Router) · TypeScript · Material UI 7 (CSS variables, light + dark) · Emotion.

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

**Never run `npm run build` while `npm run dev` is running** — both write `.next/`, and the
build wipes the dev server's output (500 errors until dev is restarted). Verify with
`npm run typecheck` and the dev server instead, or build in a separate copy.

## Structure

- `src/content/site.ts` — all copy and data. Edit text here, not in components.
- `src/components/sections/` — Hero, Channels, Platform, Pricing, Contact (5 sections, ids: home, channels, platform, pricing, contact)
- `src/components/layout/` — Navbar (fixed, scroll-spy, mobile drawer), Footer, ColorModeToggle, LegalPage
- `src/app/privacy`, `src/app/terms` — legal pages (plain-language drafts; need lawyer review before launch)
- `src/app/api/contact/route.ts` — early-access form endpoint
- `src/lib/contact.ts` — validation shared by form and API
- `src/theme/` — MUI theme; `tint()` helper for scheme-aware translucent brand colors

## Content rule: no false claims

ClaraFord is pre-launch. Do **not** add usage numbers, customer names/logos, testimonials,
certifications (SOC 2, ISO, HIPAA…), uptime SLAs, prices, or contact details that are not real.
These were deliberately removed. Channels are tagged `early-access` (WhatsApp, Email) or `roadmap`.

## Contact form / env

See `.env.example`. `POST /api/contact` validates, drops honeypot (`website` field) submissions,
and emails leads via Resend REST API. If `RESEND_API_KEY` / `LEAD_NOTIFY_EMAIL` are missing it
returns **503 in production** (so leads are never silently lost) and logs the lead in dev.

## Roadmap (agreed plan)

**Part 1 — go live (in progress):** git repo → domain (check "ClaraFord" trademark first) →
deploy on Vercel with env vars → Resend for leads → optional: analytics, Cloudflare Turnstile.

**Part 2 — build the product MVP:** rent channels, don't build telecom
(WhatsApp Cloud API / Twilio, Resend or SES for email, Claude API for AI replies).
MVP scope: WhatsApp + email shared inbox, contacts + history, assignment, AI-suggested replies,
auth, multi-tenant. Suggested additions: Clerk/Auth.js, Postgres (Supabase/Neon) + Prisma/Drizzle,
webhook ingestion via queue (Inngest/BullMQ), realtime (Pusher/Ably/Supabase), Stripe/Razorpay.

**Part 3 — business:** register a company (required for Meta WhatsApp Business verification);
in India, TRAI DLT registration for SMS and GST invoicing; real privacy policy + DPA.

## History

Started inside `learnSomething/`, whose root still holds an unrelated old Vite/Express
"student-management" app. It is not part of this project.
