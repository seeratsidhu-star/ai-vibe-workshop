---
name: test-accessibility
description: Tests the workshop site for accessibility including color contrast, semantics, keyboard use, ARIA, and motion preferences. Use when the user asks to test accessibility, check color contrast, audit a11y, or verify WCAG compliance.
---

# Test Accessibility

Run this audit when asked to test for accessibility (for color contrast, etc).

## Scope

Applies to the workshop site: `src/components/`, `src/styles/`, `index.html`. Follow `.cursor/rules/visual-design-standards.mdc`.

---

## Audit workflow

```
- [ ] 1. Collect color pairs from CSS tokens and components
- [ ] 2. Check contrast ratios (WCAG AA minimum)
- [ ] 3. Review semantics and ARIA
- [ ] 4. Test keyboard and focus
- [ ] 5. Check reduced-motion coverage
- [ ] 6. Report findings with severity and fixes
```

---

## 1. Color contrast

Read token values in `src/styles/global.css` and spot-check component overrides in `components.css`.

**WCAG AA targets (dark theme):**

| Element | Minimum ratio |
|---------|---------------|
| Body text (`--text` on `--bg` / `--surface`) | 4.5:1 |
| Muted text (`--text-muted`) | 4.5:1 on surfaces it appears on |
| Large text (≥ 18px regular or ≥ 14px bold) | 3:1 |
| UI borders, focus rings, badge text | 3:1 against adjacent background |
| Accent text (clay, slate, sage on dark) | 4.5:1 (or 3:1 if large/bold only) |

**Key pairs to verify every audit:**

- `--text` on `--bg`, `--surface`, `--surface-muted`
- `--text-muted` on `--surface` and `--surface-muted`
- `--accent-clay`, `--accent-slate`, `--accent-sage` on `--bg` / `--surface`
- Button labels: primary (dark text on `--accent-slate`), secondary (text on `--surface`)
- Form inputs: text and placeholders on `--bg`
- Toast, badges, phase time badges, outcome labels

**How to check:**

1. Extract hex/rgba from `:root` in `global.css`.
2. Compute contrast (relative luminance formula or WebAIM Contrast Checker).
3. Flag failures with the exact selector and suggested token adjustment — prefer tuning existing tokens over one-off fixes.

```text
❌ FAIL  .phase-outcome  sage #9aab8f on surface #1e1e22 → ~3.2:1
✅ FIX   Use a lighter sage or bump font-weight/size if qualifying as large text
```

---

## 2. Semantics and ARIA

- [ ] One `main`, logical `header` / `footer`, `section` with headings
- [ ] `nav` has accessible name; section headings linked via `aria-labelledby` where helpful
- [ ] Form fields wrapped in `label` with visible text
- [ ] Toggle buttons: `aria-expanded`, `aria-controls` (e.g. Learn more)
- [ ] Dynamic messages: `role="status"` + `aria-live="polite"` (register toast)
- [ ] Decorative SVGs: `aria-hidden="true"`
- [ ] Interactive SVG groups: not relied on alone — paired with visible text or `aria-label`
- [ ] Lists: ordered/unordered used correctly (`phase-list`, `schedule-list`)

---

## 3. Keyboard and focus

Manual pass at `http://localhost:5173`:

- [ ] Tab order follows visual order (header → hero → about → phases → register)
- [ ] All buttons and links reachable by keyboard
- [ ] Visible focus indicator on every interactive element (not `outline: none` without replacement)
- [ ] Learn more toggles with Enter/Space; `aria-expanded` updates
- [ ] Register form submittable via keyboard; validation messages announced
- [ ] Hero illustration pills: focusable and show focus ring
- [ ] No keyboard traps

---

## 4. Touch and responsive

- [ ] Touch targets ≥ 44×44px where feasible (buttons, nav links, pills)
- [ ] No horizontal scroll at 320px, 768px, 1024px widths
- [ ] Text reflows; nothing essential hidden without alternative at mobile breakpoints

---

## 5. Motion

- [ ] `@media (prefers-reduced-motion: reduce)` disables non-essential animations
- [ ] Check `global.css` and hero/phase animation blocks in `components.css`
- [ ] Essential feedback (toast appear) still usable without motion

---

## 6. Report format

Deliver findings in this structure:

```markdown
## Accessibility audit

### Summary
[Pass / N issues found — list critical count]

### Color contrast
| Location | Foreground | Background | Ratio | WCAG | Status |
|----------|------------|------------|-------|------|--------|

### Semantics & ARIA
- [issue or pass]

### Keyboard & focus
- [issue or pass]

### Recommended fixes
1. [Highest severity first — file path + specific change]
```

Severity labels:
- **Critical** — blocks use (no focus, contrast below 3:1 on body text, missing form labels)
- **Major** — WCAG AA fail on important text, broken ARIA state
- **Minor** — best-practice improvements

Fix issues in CSS tokens or components; re-run contrast checks after changes. Do not break existing functionality unless fixing an a11y defect requires it.

---

## Optional tooling

If available, supplement manual checks with:
- Browser DevTools → Accessibility tree inspect
- axe DevTools extension
- `npx playwright test` with `@axe-core/playwright` only if already in project (do not add deps without user approval)

Default: manual audit + contrast math from CSS tokens is sufficient.
