# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS + GSAP (ScrollTrigger), buildless, GSAP vendored locally. Hosted on GitHub Pages via a GitHub Actions workflow that publishes only `site/`. Repo `golightning/story` is private (confirmed by user).

## Users

One person: Tolga's girlfriend. She opens a link Tolga sends her, almost certainly on her phone (≈99 %), probably in a messenger in-app browser or Safari, in a moment where she is a bit low on energy. Her job: be surprised and amused for 1–3 minutes, then optionally reach Tolga.

## Product Purpose

A short personal scroll story: cool generated couple photos (beach, thermal spa, shisha bar, FC Barcelona stadium), dry humor, a false ending, and an absurdly escalating list of ways to contact Tolga. Success: she scrolls to the end, smiles, maybe writes back. No pressure to respond.

## Positioning

Not a love letter, not a landing page. A deadpan visual prank-gift built from shared insider jokes only these two people understand.

## Capabilities and Constraints

- Full requirements live in `openspec/changes/create-mobile-first-personal-onepager/` (proposal, design, 4 capability specs, tasks).
- Native scrolling only; no scroll-hijacking, no mandatory snap; ≤1.5 extra viewport heights per staged beat.
- Works without JS and with `prefers-reduced-motion` (complete static photo story).
- Budgets: first photo ≤350 KiB, four photos ≤2.5 MiB, initial JS ≤120 KiB gzip; LCP ≤2.5 s, CLS ≤0.1.
- No backend, forms, tracking, accounts or runtime AI.
- Language: German.

## Brand Commitments

- Voice: cool, dry, slightly absurd, personal. No kitsch, no feelings speech, no jokes about her mood.
- Insider lines are fixed copy (see `insiders.md` in the change, private): „Sen yapamasin“ (user's spelling, do not correct), ADAC first date, „Türkin. Blonde Edition“, „Auch für Bilder von dir“, good-morning/good-night closer.
- Rejected concepts stay rejected: floating heads, mini-games, relationship tests, evidence collections, press conference, mugshot, overwhelmed kebab-shop owner.

## Evidence on Hand

- Reference photos (private, never published): `bilder/er/` (Tolga, HEIC), `bilder/sie/` (girlfriend).
- Real contacts (confirmed by user 2026-10-20): phone/WhatsApp/SMS +49 151 18101773, Instagram `tolga.hsr`, Snapchat `tx1ga_`, email `toolgalm10@gmail.com`.
- **Absent:** the four final couple photos. Not to be faked; placeholders until delivered.
- Undecided: final page name.

## Product Principles

1. Her phone is the product. Decide everything at 390 px first.
2. The photos carry the feeling; text stays short and dry.
3. Never ask anything of her: no tasks, no gates, no expected reply.
4. Private stays private: briefings, references and background never ship.

## Accessibility & Inclusion

Touch targets ≥44 px, body ≥16 px, captions ≥14 px, contrast ≥4.5:1, usable at 200 % text zoom, keyboard focus visible, reduced-motion parity.
