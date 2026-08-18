---
name: improve-workshop-agenda
description: Inspects and improves the workshop phased agenda for visual scannability, clearer phase structure, and visual indicators. Use when the user asks to improve the workshop agenda, phased approach, schedule, or workshop timeline.
---

# Improve Workshop Agenda

Follow this workflow when improving the phased agenda section of the workshop site.

## Workflow

1. Inspect existing structure
2. Check whether the agenda is easy to scan visually.
3. Improve the phased approach
4. Add visual indicators

---

## Step 1 — Inspect existing structure

Read these files before making changes:

| File | What to inspect |
|------|-----------------|
| `src/data/workshopData.js` | `phases.title`, `phases.intro`, `phases.items[]` (number, tag, title, description, bullets) |
| `src/components/Phases.jsx` | Section layout, timeline, phase card rendering |
| `src/components/visuals/WorkshopVisuals.jsx` | `PhaseTimeline`, `PhaseVisual` SVG components |
| `src/styles/components.css` | `.phase-*`, `.phase-timeline`, `.phase-tags` styles |

Current structure: 4 phases across 2 days, day/time tags, bullet pills, horizontal timeline dots, per-phase SVG icons.

**Scope guard:** Do not change Hero, Learn more, or Register unless explicitly requested.

---

## Step 2 — Check whether the agenda is easy to scan visually.

Run this checklist and note gaps before editing:

- [ ] Can a user identify **day**, **time**, and **phase goal** in under 3 seconds?
- [ ] Is hierarchy clear? (phase number → title → tag → details)
- [ ] Is text density balanced against visuals?
- [ ] Do breakpoints at **900px** and **768px** keep the agenda readable?
- [ ] Is color contrast sufficient and focus order logical?

If any item fails, prioritize fixes in Steps 3–4.

---

## Step 3 — Improve the phased approach

**Data first:** Edit `src/data/workshopData.js` before refactoring UI.

- Keep the 4-phase arc unless the user asks otherwise.
- Tighten descriptions; align phase tags with the Day 1 / Day 2 schedule in the Learn more panel.
- Consider enriching each phase item with optional fields:

```javascript
{
  number: "01",
  tag: "Phase 1 · Day 1 morning",
  title: "Vibe & setup",
  duration: "9:00 AM – 12:30 PM",   // optional
  outcome: "First component built",  // optional one-liner
  indicator: "setup",                // optional key for icons/badges
  description: "...",
  bullets: ["...", "..."]
}
```

Preserve existing functionality: scroll nav to `#phases`, responsive layout, no broken timeline or cards.

---

## Step 4 — Add visual indicators

Use the existing palette and typography — do not introduce new font families or off-palette colors.

**Tokens:** `--accent-clay`, `--accent-slate`, `--accent-sage` from `src/styles/global.css`

**Recommended indicators:**
- Time badges (morning / afternoon) on each phase card
- Day divider between Phase 2 and Phase 3 (Day 1 → Day 2)
- Outcome chips or icon labels per phase
- Stronger timeline connector linking dots to cards

**Implementation preference:**
- Extend `PhaseTimeline` / `PhaseVisual` in `WorkshopVisuals.jsx`
- Add styles in `components.css` under `.phase-*`
- Avoid new npm dependencies

Respect `prefers-reduced-motion: reduce` for any new animations.

---

## Design standards

Follow `.cursor/rules/visual-design-standards.mdc`:
- Clean, modern layout with generous whitespace
- Consistent tokens, palette, and typography
- Responsive on desktop, tablet, mobile
- Accessible contrast, semantics, ARIA, keyboard support

---

## Verification

Before finishing, confirm:

- [ ] Agenda is scannable on desktop, tablet, and mobile
- [ ] Visual indicators match site palette and typography
- [ ] No regressions to nav, Learn more, register, or hero interactions
- [ ] Phase content remains sourced from `workshopData.js` where possible
