---
name: Kurz was zeigen
description: One episode of a private reality dating show, told in flat broadcast graphics on a villa-at-night ground.
colors:
  night: "#0e0612"
  night-2: "#1a0c20"
  ink: "#f7f1ea"
  ink-dim: "#bfb2bd"
  pink: "#ff5c9d"
  pink-fill: "#d4105f"
  broadcast-white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 13.5vw, 4.75rem)"
    fontWeight: 850
    lineHeight: 0.96
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 112"
  display-punch:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 16vw, 5.5rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 8vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "\"wdth\" 106"
  lt-name:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 850
    lineHeight: 1.1
    letterSpacing: "0.01em"
    fontVariation: "\"wdth\" 125"
  lt-sub:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.45
    letterSpacing: "0.06em"
    fontVariation: "\"wdth\" 125"
rounded:
  square: "0px"
spacing:
  stair: "7px"
  lt-inset: "14px"
  bar-x: "16px"
  list-gap: "18px"
  gutter: "24px"
  scene: "72px"
  scene-wide: "112px"
  beat: "120px"
  stage: "560px"
components:
  lower-third-name:
    backgroundColor: "{colors.pink-fill}"
    textColor: "{colors.broadcast-white}"
    typography: "{typography.lt-name}"
    rounded: "{rounded.square}"
    padding: "9px 16px 8px"
  lower-third-sub:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.night}"
    typography: "{typography.lt-sub}"
    rounded: "{rounded.square}"
    padding: "9px 16px 8px"
  lower-third-link:
    height: "44px"
  lower-third-link-hover:
    backgroundColor: "#b80b50"
  show-bug:
    backgroundColor: "{colors.night}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "6px 10px 6px 9px"
  location-super:
    backgroundColor: "rgb(14 6 18 / .78)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "5px 10px 4px 8px"
  flashback-tag:
    textColor: "{colors.pink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "2px 8px 1px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0 14px"
    height: "44px"
  photo-shot:
    backgroundColor: "{colors.night-2}"
    rounded: "{rounded.square}"
    width: "100%"
---

# Design System: Kurz was zeigen

## Overview

**Creative North Star: "The Villa at Night, On Air"**

The page is one episode of a dating show that only two people watch. Everything visual is broadcast graphics laid over a dark villa ground: lower-thirds introduce people and options, location supers set scenes inside the photos, a small show bug sits in the corner, and the photos carry the feeling. The graphics are flat, square and loud in exactly one hue; the prose between them is short, warm white and plain.

Density is low and the rhythm is televisual: one beat per viewport, large dead air between beats (120px beat padding, a 42svh gap between "Das war's." and "Fast"), and a single centred story column capped at 560px that never widens, even on desktop. Motion is the director: graphics wipe in from the left like a vision mixer, photos open from a crop, and the stadium shot is a scroll-scrubbed zoom. With reduced motion or without JS the same graphics simply stand there, complete.

The world refuses hearts, glitter and script logos (contract), and it refuses the default dark scrollytelling page of centred white lines over full-bleed photos: text here is left-set and graphics are hard-edged bars, not floating captions.

**Key Characteristics:**
- Near-black violet ground, warm white type, one pink hue in two tones.
- Lower-thirds (pink name bar over a white sub bar, inset 14px) are the only graphic language.
- Archivo variable: expanded heavy caps for on-air graphics, normal width for prose.
- Square, flat, shadowless; depth comes only from overlap and the photo.
- One 560px story column, left-aligned from a 24px gutter.

## Colors

A night palette with a single neon accent hue that changes tone by job, never by mood.

### Primary
- **Neon Pink** (`pink`): the accent as text or line on night. Used for the show bug's live dot, the super tick, the flashback tag outline and text, the "zwanzig" correction and its strike-through, "Fast", reply and status lines, the focus ring, and selection.
- **Studio Magenta** (`pink-fill`): the same hue as a fill under white text. Used only as the lower-third name bar, the pressed/hovered mood-vote tile (and selection/scrollbar fill). Its press-and-hover shade on linked lower-thirds (#b80b50) is a state of this tone, not a third colour.

### Neutral
- **Villa Night** (`night`): the page ground, theme colour, the show bug plate, and the backing of pinned stages. Supers use it at 78% over photos.
- **Night Plum** (`night-2`): the photo frame's empty fill while an image loads. The only second surface.
- **Warm White** (`ink`): all body and headline type, and the lower-third sub bar (with Villa Night text on it).
- **Dusk Mauve** (`ink-dim`): quiet copy: subtitle, the phone number, the sign-off, the outline button's stroke, the struck "fünf" in static mode.
- **Broadcast White** (`broadcast-white`): pure white, reserved for text on Studio Magenta.

### Named Rules
**The One Hue, Two Tones Rule.** Pink is the only chromatic colour. Use the light tone (`pink`) when pink is the text or line on night; use the deep tone (`pink-fill`) when pink is a surface under white text. Never swap them: the light tone cannot carry white text and the deep tone does not read as text on night.

**The Plate Rule.** Anything on air sits on a plate: a solid bar, the night plate of the bug, or the 78% night plate of a super over a photo. Graphic text never floats directly on an image.

## Typography

**Display Font:** Archivo variable (with system-ui, sans-serif), self-hosted, wght 100–900, wdth 62–125
**Body Font:** Archivo variable, normal width
**Label Font:** Archivo variable, fully expanded caps

**Character:** One family doing two voices through its width axis: expanded black caps for anything that is "on screen" (names, bug, supers), normal-width roman for what is said. The width shift is the hierarchy, more than size.

### Hierarchy
- **Display** (`display`): the opening line only. Left-aligned, balanced wrap, slightly expanded (wdth 112).
- **Display Punch** (`display-punch`): the false ending pair "Das war's." / "Fast", the largest type on the page; "Fast" is pink and right-aligned.
- **Headline** (`headline`): mid-story statements (the time gag, the finale title). Balanced wrap.
- **Lower-third Name** (`lt-name`): uppercase, wdth 125, inside the name bar only.
- **Lower-third Sub** (`lt-sub`): sentence case, inside the sub bar only.
- **Body** (`body`): flashback lines (max 34ch) and running prose. Quiet variants drop to 1rem in Dusk Mauve (subtitle at 30ch, sign-off).
- **Label** (`label`): uppercase, wdth 125, 0.06em tracking (0.05em in the flashback tag). Show bug and location supers; never below 14px.

### Named Rules
**The Width Is the Voice Rule.** On-air graphics are set at full expansion (wdth 125) in caps; spoken lines stay at wdth 100 to 112 in sentence case. Don't set prose expanded or graphics condensed.

**The Short Line Rule.** Text measures stay short (30–34ch for prose, balanced wrap for display and headline). The photos carry the feeling; type never runs a paragraph across the column.

## Layout

A single story column: full width up to 560px, centred, with a 24px gutter (or the safe-area inset if larger). Everything is left-aligned to the gutter; the only right-aligned element is the "Fast" punch. Photos run edge to edge of the column at a fixed 4:5 ratio, with the focal point set per shot.

Rhythm is beat-based: scenes start 72px apart (112px from 700px up), text beats get 120px of lead, the intro fills one small-viewport height with its title in the upper-middle and the lower-third at the bottom third. The contact finale is a staircase: each lower-third steps 7px further right than the one above (up to 49px), with 18px between rows.

Responsive behaviour is derived, not redesigned: from 700px the column stays 560px and only scene spacing grows. In short landscape views (max-height 520px) photos are capped by height (86svh, the closing shot 70svh) while keeping 4:5, and pinned beats are switched off (pinning requires min-height 521px). The show bug pins to the top-right corner of the story column, not the window, and respects the safe area.

## Elevation & Depth

Fully flat. There are no shadows anywhere. Depth comes from overlap and plates: the lower-third over a photo is pulled up 28px into the image's bottom edge (z-index above the frame), supers sit on a translucent night plate inside the photo, and pinned stages are backed by solid night so the previous scene disappears behind them.

### Named Rules
**The Broadcast Is Flat Rule.** No box-shadows, glows or blur on any graphic. If something needs to separate from the image, give it a plate or overlap it, never a shadow.

## Shapes

Square corners everywhere (`square`). Lower-thirds are two stacked rectangular bars whose sub bar is inset 14px from the left, giving the stepped silhouette that is the system's signature. Lines are thin and hard: a 1.5px stroke for the flashback tag and the outline button, a 3×14px tick before each super, a pink strike-through at 0.12em. The one round form is the show bug's 8px live dot, which reads as an on-air light; it is the only circle in the system.

## Components

### Lower-third (signature)
Two flat bars stacked, left-aligned, square.
- **Name bar:** Studio Magenta with Broadcast White uppercase name (`lower-third-name`).
- **Sub bar:** Warm White with Villa Night text, inset 14px (`lower-third-sub`).
- **Motion:** each bar wipes in from the left by clip-path (0.55s, expo out, sub bar 0.12s after the name); on scroll-back it wipes out again. The intro one plays once after 1.1s.
- **Over a photo:** pulled up 28px into the image's lower edge, at the gutter.

### Lower-third Link (contact finale)
The lower-third as a control: an anchor or button with at least 44px height.
- **Hover (hover-capable devices):** name bar deepens to #b80b50.
- **Active:** slides 4px right (0.25s, the out-expo ease).
- **Focus:** the global 3px pink ring at 3px offset.
- **Fake options (Fax, Brieftaube):** plain text without JS; with JS they become buttons whose pink reply line appears below, inset 14px.

### Mood Vote (Televoting)
Tolga's daily "Wie geht’s dir heute?" as a lower-third directly under the finale title, then a 5×2 grid of number tiles (1–10), inset 14px like the sub bar. Tiles: 1.5px Dusk Mauve outline, 52px tall, Archivo 850 at 125% width, tabular numerals; hover/press fills Studio Magenta under white numerals. Each tile is a WhatsApp link with "Heute: n/10" prefilled; a quiet Dusk Mauve note below says so. Nothing is stored or sent automatically.

### Show Bug
A small night plate fixed in the top-right of the story column: pink live dot plus an expanded caps label ("Folge 1", switching to "Finale" at the finale). Decorative (aria-hidden, no pointer events). It fades out (0.2s) once the mood vote and contact list scroll under it so it never covers a control, and returns on scroll-back.

### Location Super
Inside a photo, top-left at the gutter, 18px from the top: label type on a 78% Villa Night plate, led by a 3×14px pink tick. On the stadium zoom it fades in only once the full stadium is revealed.

### Flashback Tag
An inline pink outline tag (1.5px stroke, label caps) that opens a flashback sentence, like a "Rückblick" insert. It lives inside the line it marks, never above a heading.

### Buttons (outline)
- **Shape:** square, 44px tall, 14px side padding.
- **Style:** transparent with a 1.5px Dusk Mauve stroke and Warm White 15px/700 text.
- **Active:** nudges 1px down. Focus uses the global pink ring.
- **Status:** a pink status line appears below on copy.

### Photo Shot
A 4:5 frame on Night Plum, image cover-fitted to a per-shot focal point. Motion variants: the first shot opens from a centred inset crop while scaling from 1.18 to 1; the second drifts from 1.12 to 1; the third wipes open from the right like a TV blend; the stadium shot is pinned and scroll-scrubbed from 3.2× on one face to 1.7× on the pair to the full frame.

## Do's and Don'ts

### Do:
- **Do** introduce every person, option and punchline that is "on screen" as a lower-third: pink name bar over a white sub bar, inset 14px, square.
- **Do** use `pink` for pink text and lines on night, and `pink-fill` only as a surface under white text.
- **Do** keep everything in the single 560px column, left-aligned to the 24px gutter.
- **Do** set graphic labels in Archivo at wdth 125, uppercase, at least 14px; prose at wdth 100.
- **Do** put any text over a photo on a night plate.
- **Do** make every motion optional: wipes, crops and zooms must leave a complete static state under reduced motion or without JS.
- **Do** keep controls at least 44px tall with the 3px pink focus ring.

### Don't:
- **Don't** add hearts, glitter or a script logo.
- **Don't** introduce a second accent hue or a third pink tone outside state shades.
- **Don't** round corners or add shadows; the bug's live dot is the only circle.
- **Don't** centre white lines over full-bleed photos; text sits left in the column or on a plate.
- **Don't** widen the story column on large screens; derive, don't redesign.
- **Don't** let a fixed graphic cover a control; the show bug steps aside when the contact list arrives.
