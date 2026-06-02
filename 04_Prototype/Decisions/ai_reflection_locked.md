# AI Reflection Screen — Locked Decision
**Date:** 2026-05-28
**Variant chosen:** C v2 — Stacked with inset question, cream microphone
**Source PNG:** `05_Prototype/Pass_1_LowFi/Variants/ai_reflection/variant_c_v2.png`

---

## Decision

Variant C v2 is the Pass 1 direction. Stacked layout: Piazzolla reflection centered at ~680px max-width in the upper portion of the screen, followed by the follow-up question as a visually inset block marked by a thin left vertical rule at low opacity, then response controls centered below.

The inset left-border rule is the key design move — it signals two voices in one frame without a container, without breaking register, and without adding chrome. The rule says "this came from somewhere else" at a glance.

**Response controls — strict three-level hierarchy:**
1. Cream microphone (~32–40px, plain, no container) — primary action, prominent by elimination
2. "or type your answer" Inter text link — subordinate (~50% question weight)
3. "Skip" — footnote-quiet muted Inter

Both content blocks (reflection + follow-up question) are visible on load. No sequential reveal, no animation.

**No espresso accent on this screen.** Applied the "omit rather than force" interpretation of the accent rule. `#3E322A` on `#3A3D40` lacks sufficient luminance contrast to signal a small stroked icon as primary — the colors are too close in lightness. The cream mic reads as primary by elimination (only colored interactive element in the response area). Espresso lesson captured in `_global_constraints.md`.

---

## Skip consequence

When Mara skips the follow-up question, the AI generates a shorter Case Study Draft that includes a brief signal that some follow-up input was not provided (e.g., a lighter section or a short bridging note). The draft remains functional and publishable — it is not broken or empty — but its depth and length are visibly reduced compared to a draft built from a full voice capture plus answered follow-up. See also `case_study_draft_locked.md`.

## Inset left-border rule — locked for Pass 2

The thin vertical left-border rule on the follow-up question block is confirmed as the locked treatment going into Pass 2. The two-voice signal it carries is structurally important and held cleanly at low fidelity. Pass 2 should preserve it; revisit only if mid-fi rendering at higher type precision breaks the visual distinction.

---

## Variants rejected

**Variant A — Rejected.** Centered column with no voice distinction. The reflection and question sat at the same compositional level; nothing in the layout communicated that two different voices were present on screen.

**Variant B — Rejected.** Two-column split (reflection left 2/3, controls right 1/3). Compositional logic was sound but execution left the upper-left column as wasted space. Controls in the right third were cramped, making the mic icon even smaller.

**Variant C v1 — Superseded.** Correct layout, wrong mic treatment. Espresso brown mic icon on charcoal background failed contrast — nearly invisible at typical icon size. Superseded by v2 with cream mic.
