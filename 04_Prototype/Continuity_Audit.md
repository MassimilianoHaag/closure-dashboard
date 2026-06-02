# Pass 1 Continuity Audit
**Date:** 2026-05-28
**Audited by:** Claude (Pass 1 design partner)
**Screens audited:** Gallery (empty + populated), Recording, Project Frame, AI Reflection, Case Study Draft, Immediate Upload
**PNGs reviewed directly** — findings based on visual inspection of locked variants

---

## Summary

The set hangs together at the structure level — type system, register logic, rule weights, and content hierarchy are coherent across screens, and the AI Reflection → Case Study Draft transition (same viewport, register flip) is the strongest pair in the set. Two issues pull the screens apart: the Gallery nav wordmark uses "Closure" (mixed case) while every other screen uses "CLOSURE" (all-caps), which makes the product's identity mark appear to change depending on which screen you're on; and the Recording screen uses a different sample project narrative than all other screens, which breaks the demo flow when the screens are presented in sequence. Both are fixable with Figma edits. There are three additional medium-priority findings that are worth addressing before Pass 2 handoff, and several items that should be tracked but not fixed now.

---

## Findings by Category

### 1. Nav Treatment

**Finding 1.1 — CRITICAL: Gallery wordmark capitalization drift**
- **Screens:** Gallery empty, Gallery populated
- **Drift:** Both Gallery screens render the wordmark as "Closure" — mixed case, capital C only, no apparent letter-spacing. Every other screen (Project Frame, AI Reflection, Case Study Draft, Recording, Immediate Upload) uses "CLOSURE" — all-caps, with visible letter-spacing. The same wordmark looks like two different products depending on the screen.
- **Fix:** Manual Figma edit on both Gallery PNGs. Change "Closure" to "CLOSURE" with consistent letter-spacing matching the dark screens. 5-minute fix.

**Finding 1.2 — Known: "Mara Santos" in Gallery nav**
- **Screens:** Gallery empty, Gallery populated
- **Drift:** Both Gallery screens show "Mara Santos" at top-right of the nav. Flagged in the locked decision file ("requires manual nav edit in Figma before Pass 2").
- **Fix:** Manual removal from both PNGs. Already documented.

**Finding 1.3 — Expected: Recording nav is center-aligned; desktop screens are left-aligned**
- Not flagged as drift. Mobile center-alignment vs desktop left-alignment is standard and expected. The wordmark itself is structurally identical once the capitalization issue (1.1) is fixed.

**Finding 1.4 — Expected: Recording nav has "• recording" status label; other screens don't**
- Not drift. The recording status label is specific to the Recording screen's single-state communication requirement. No other screen has a live status indicator.

---

### 2. Type Hierarchy

**Finding 2.1 — Piazzolla is consistently italic across all screens**
No instances of Piazzolla Regular found. Gallery project titles, Recording transcription, AI Reflection sharpened text, Case Study Draft headline and meta name, Immediate Upload headline — all italic. ✓

**Finding 2.2 — Piazzolla scale is coherent within each viewport group**
- Desktop parchment (Gallery titles, Case Study Draft title): moderate scale, consistent weight
- Desktop dark (AI Reflection reflection block): comparable scale
- Mobile dark (Recording transcription, Immediate Upload headline): proportionally larger to viewport — expected
No scale outliers found.

**Finding 2.3 — Muted text opacity appears consistent**
Gallery dates, Case Study Draft "Drafted May 12 · Draft", Recording "• recording" status, AI Reflection "or type your answer" and "skip", Immediate Upload subtext — all appear in the 40–55% opacity range. No outlier found. ✓

**Finding 2.4 — Inter weight choices are consistent**
No instances found where Inter Light was used where Inter Regular appears elsewhere, or vice versa. Subordinate labels consistently appear at reduced opacity rather than a different weight. ✓

---

### 3. Spacing Rhythm

**Finding 3.1 — Centered content column width is consistent across desktop screens**
AI Reflection (~680px), Case Study Draft (~680px), and Gallery list all use comparable column widths. ✓

**Finding 3.2 — Vertical spacing above first content block varies by screen type**
- Project Frame: large empty space between nav rule and first form label — roughly 30–35% of viewport height before content starts. This is intentional ("top-anchored" is the documented design decision), but it's visually distinct from other screens.
- AI Reflection: generous but not extreme — reflection text starts roughly 20% below the nav rule.
- Case Study Draft: meta header starts close to the nav rule — roughly 5–8% of viewport below.
This variation isn't drift — it reflects different screen purposes (form vs reading vs editorial). Worth noting for Pass 2 when consistent vertical grid decisions may be relevant, but acceptable in Pass 1.

**Finding 3.3 — Gallery CTA position differs between empty and populated states**
- **Screens:** Gallery empty vs Gallery populated
- **Drift:** In the empty state, "Record now · Create project" is centered vertically and horizontally in the viewport — it's the primary content of an otherwise empty screen. In the populated state, the same two CTAs appear as secondary navigation just below the main nav rule, using "/" as the separator instead of "·". The position, visual hierarchy, and separator character all differ.
- **Fix or decide:** This may be intentional (CTAs are center-stage when nothing else competes; they recede to nav when there's content). If intentional, add a note to the Gallery decision file. If not intentional, standardize the separator to "·" in both states. Low-effort to decide; moderate-effort to fix if needed.

---

### 4. Rule Treatment

**Finding 4.1 — Rule weights appear visually consistent within each register**
Nav rules, section separators in Case Study Draft, and the Immediate Upload sheet boundary rule all appear as single thin lines at low opacity. Within the dark register, warm off-white at ~20–25% opacity. Within the parchment register, charcoal at comparable low opacity. No rule appears visually heavier or lighter than the others in its register group. ✓

**Finding 4.2 — Inset left-border rule (AI Reflection) is a unique element**
The vertical left-border rule on the AI Reflection inset question block is the only vertical rule in the set — all other rules are horizontal. This is design-intentional (signals a different voice) and creates no inconsistency, but it is worth noting as an element that has no equivalent elsewhere. ✓

---

### 5. Register Transitions

**AI Reflection (dark desktop) → Case Study Draft (parchment desktop) — strongest transition in the set**
Both screens share: "CLOSURE" all-caps nav, ~680px centered content column, Piazzolla for primary content, Inter for body and controls, thin horizontal rules as separators, and generous whitespace. The only thing that changes is the background (charcoal → parchment) and text color (cream → charcoal). The eye has consistent structural anchors on both sides of the transition. ✓

**Gallery (parchment desktop) → Recording (dark mobile) — also a viewport change**
The structural elements that should carry: type system (both use Piazzolla + Inter ✓), register logic (parchment → dark as expected ✓), nav anchor. Currently broken by Finding 1.1 — the Gallery shows "Closure" and Recording shows "CLOSURE". When this is fixed, the transition gains a consistent anchor.

**Case Study Draft (parchment desktop) → Gallery (parchment desktop) — same register, same viewport**
Weakened by Finding 1.1. Case Study Draft has "CLOSURE" in the nav; Gallery has "Closure". A viewer watching the demo would see the product's name change capitalization on the same parchment register.

**Recommendation for transition softening:** Finding 1.1 is the single highest-impact fix. Once the Gallery nav is corrected to "CLOSURE", the nav becomes a consistent structural anchor across all register and viewport transitions. No other structural changes are needed to soften the transitions — the type system, column widths, and rule weights are already doing their job.

---

### 6. Microcopy and Tone

**Finding 6.1 — "VISUAL SUPPORT" section label is SaaS-label tone against a conversational product voice**
- **Screen:** Case Study Draft
- **Drift:** "VISUAL SUPPORT" in all-caps is a functional category label. Every other piece of copy in the set is conversational or poetic: "Your first capture lives here." / "We heard you working on —" / "Want to add visuals while it's fresh?" The all-caps label reads as a form section, not an editorial section.
- **Fix:** Change to "Visual support" in small Inter (mixed case, matching "Drafted May 12 · Draft" treatment). Same visual weight, different tone. Quick Figma edit.

**Finding 6.2 — "skip" vs "Skip for now" — capitalization inconsistency, justified content difference**
- **Screens:** AI Reflection ("skip"), Immediate Upload ("Skip for now")
- **Drift:** Different capitalization conventions. "for now" on Immediate Upload communicates deferrability, which is appropriate for that screen; "skip" on AI Reflection is a more permanent bypass. The content difference is justified. The capitalization inconsistency is minor — both read correctly in context.
- **Recommendation:** Standardize to lowercase on AI Reflection ("skip for now" could be considered, though "skip" is tighter given the context). Live with in Pass 1, address in Pass 2 copy review.

**Finding 6.3 — Product voice is consistent across five of six screens**
Recording, Project Frame, AI Reflection, Immediate Upload, and Gallery all use a warm, first-person-adjacent, conversational register. Case Study Draft is the one screen with functional/SaaS-label copy (addressed in 6.1). ✓ with one caveat.

---

### 7. Control Patterns

**Finding 7.1 — Primary action pattern is coherent within each register**
- Dark register: cream text link (Immediate Upload) / cream mic icon (AI Reflection) / cream outlined button (Project Frame) — all use cream for primary action on dark. ✓
- Parchment register: espresso outlined button (Case Study Draft Publish) — espresso on light background, high contrast. ✓
- The cream-on-dark / espresso-on-parchment rule is applied consistently wherever primary actions appear. ✓

**Finding 7.2 — Subordinate link treatment is consistent**
"or type your answer" (AI Reflection), "Save draft" / "Discard" (Case Study Draft), "Skip for now" (Immediate Upload) — all rendered as muted Inter text links at reduced opacity or smaller scale relative to primary actions. No outlier. ✓

---

## Critical Finding Outside the Seven Categories

**Finding C.1 — Recording screen sample content is a different project narrative than all other screens**
- **Screens:** Recording (variant_b.png) vs all other screens
- **Drift:** Recording variant_b.png shows: *"The client had two weeks to review and came back with almost nothing to change — which almost never happens. I think it's because we showed our process early and often instead of"* — a client-review story. Every other screen (Project Frame State B, AI Reflection, Case Study Draft, Immediate Upload) uses the Meridian Brand Identity narrative.
- **Why it happened:** Recording was the first screen designed, before the Meridian scenario was established as the consistent demo content.
- **Impact:** In a demo walkthrough, Mara would speak about a client review project on the Recording screen, then the AI Reflection would reflect back Meridian Brand Identity content. The narrative is broken. A viewer watching the flow would notice the project changed.
- **Fix options:** (A) Regenerate Recording with Meridian content — this is the cleanest fix, but requires a Figma Make re-run. (B) Accept for Pass 1 and flag as a Pass 2 content update. Given that this is a static prototype, option B is probably acceptable for the current stage if the screens aren't shown sequentially in the demo — but it would need to be fixed before any walkthrough presentation.

---

## Register Transition Recommendations

In priority order:

1. **Fix Finding 1.1 first.** The Gallery nav wordmark is the only structural element that changes across the register boundary. Correcting "Closure" to "CLOSURE" makes the nav a stable anchor across all six screens. This is a 5-minute Figma edit with the highest visual coherence payoff in the set.

2. **The AI Reflection → Case Study Draft transition needs no changes.** Both screens already share nav treatment, column width, type system, and rule language. The register flip (charcoal → parchment) is the only change, and it reads as intentional narrative shift. This transition is already working.

3. **For the Gallery → dark-register transitions:** once 1.1 is fixed, the transition is structurally sound. The register flip between Gallery parchment and the dark capture screens is appropriate — it signals entry into a different mode. No additional structural changes needed.

---

## Manual Fix List (Prioritized)

| Priority | Screen(s) | Fix | Effort |
|---|---|---|---|
| 1 | Gallery empty + populated | Change "Closure" → "CLOSURE" in nav, with letter-spacing matching other screens | ~5 min |
| 2 | Gallery empty + populated | Remove "Mara Santos" from nav top-right (known, from decision file) | ~2 min |
| 3 | Case Study Draft | Change "VISUAL SUPPORT" → "Visual support" (small Inter, mixed case) | ~2 min |
| 4 | Recording | Regenerate with Meridian Brand Identity content, OR flag as content-update for next pass before demo | ~30 min if regenerating; 5 min if flagging |
| 5 | Gallery empty + populated | Decide and standardize the "Record now · Create project" separator and position between empty and populated states | ~10 min |

---

## Items to Live With (Pass 2)

- **"skip" vs "Skip for now" capitalization** — content difference justifies the phrasing variation; capitalization can be unified in a Pass 2 copy review
- **Project Frame vertical empty space** — top-anchored layout reads as designed; vertical grid standardization is a Pass 2 concern
- **Vertical padding above first content block varies by screen** — acceptable design variation given different screen purposes; formalize vertical grid tokens in Pass 2
- **AI Reflection inset left-border rule is the only vertical rule** — design-intentional; no corrective action needed
- **Gallery CTAs position shift between empty and populated states** — if intentional, document it; if not, address the separator character and position in Pass 2 visual refinement

---

## Resolution

**2026-05-28 — All findings deferred to Pass 2.** Pass 1 is low-fi and its job is structural — locking the architecture, register split, type system, and screen-to-screen logic. The audit findings (Gallery wordmark capitalization, Recording sample content mismatch with downstream demo flow, and any other items above) are not structural defects; they are content and visual polish items that belong in Pass 2's mid-fi generation. Documenting them here so Pass 2 prompts incorporate the fixes from the start, rather than applying patches twice. The findings remain visible above as Pass 2 inputs — see also `Pass_2_Inputs.md` for the consolidated hand-off.
