# Pass 2 Inputs — Hand-off from Pass 1
**Date:** 2026-05-28
**Status:** Pass 1 locked and audited. This document is the briefing package for Pass 2 prompt authoring.

---

## Summary

Pass 1 is complete. Six screens locked across two viewports and two registers. 19 accumulated constraints in `_global_constraints.md`. A continuity audit was run against all locked PNGs; findings were deferred as Pass 2 inputs rather than patched in Pass 1.

Pass 2 starts from a known-good structural foundation: the screen architectures are correct, the register split is working, the type system is coherent, and the constraint library has earned rules from real failures. The job in Pass 2 is mid-fi refinement — higher fidelity, fixed content, and resolved drift — not architectural reconsideration.

---

## What Pass 2 Should Preserve

- **Six locked screens and their structural compositions** — layouts, content hierarchy, and variant choices per the six `*_locked.md` files in `Decisions/`
- **The visual register split** — dark for Recording + Immediate Upload + Project Frame + AI Reflection; parchment for Gallery + Case Study Draft
- **Color tokens** — `#EFEBE4` parchment, `#3A3D40` charcoal, `#3E322A` espresso
- **Type system** — Piazzolla italic for emotionally weighted content; Inter for all UI chrome, body, and controls
- **All 19 constraints in `_global_constraints.md`** — each was earned from a specific Pass 1 failure; none should be dropped in Pass 2 generation
- **Viewport assignments** — Recording and Immediate Upload are mobile-primary (375px); all others are desktop-primary (1440px)

---

## What Pass 2 Should Fix from Pass 1

Concrete fixes to incorporate into Pass 2 prompts from the start — not patches:

1. **Gallery nav wordmark capitalization** — Both Gallery screens render "Closure" (mixed case). Pass 2 Gallery prompts must specify "CLOSURE" in all-caps with letter-spacing consistent with all other screens. This is the highest-impact continuity fix.

2. **Recording sample content** — Recording variant_b.png uses a client-review project story; all other screens use the Meridian Brand Identity scenario. Pass 2 Recording prompt must specify the Meridian content explicitly so the full demo flow reads as one coherent project capture.

3. **Case Study Draft section label tone** — "VISUAL SUPPORT" in all-caps reads as SaaS-functional, inconsistent with the conversational product voice elsewhere. Pass 2 prompt should specify "Visual support" in small mixed-case Inter.

4. **Case Study Draft empty state** — `variant_c_empty.png` was never rendered; it needs to be produced in Pass 2 (or manually composited in Figma before Pass 2 begins). The empty state applies Variant C's structural layout with Variant A's quiet upload zone treatment.

5. **Gallery CTAs separator and position** — "Record now · Create project" (centered, dot separator) in the empty state vs "Record now / Create project" (nav-adjacent, slash separator) in the populated state. Pass 2 should standardize the separator character and decide whether the CTAs shift position between states or stay consistent.

---

## Closed Questions — Resolved Before Pass 2

All open questions from Pass 1 are now answered. No open questions carry into Pass 2.

1. **Skip consequence on AI Reflection** — Resolved. Skipping the follow-up produces a shorter, thinner Case Study Draft with a brief signal that some input was missing. Draft remains functional and publishable. Documented in `ai_reflection_locked.md` and `case_study_draft_locked.md`.

2. **Gallery card thumbnail treatment** — Resolved. Cards in the populated Gallery include a thumbnail from the case study's visual support. Cards without visuals show no thumbnail. Thumbnail position on the card (left edge, right edge, background crop) is a Pass 2 design decision. Documented in `gallery_screen_locked.md`.

3. **Inset left-border rule on AI Reflection** — Resolved. The thin vertical left-border rule on the follow-up question block is locked for Pass 2. Two-voice signal held cleanly at low fidelity. Revisit only if mid-fi rendering breaks the visual distinction. Documented in `ai_reflection_locked.md`.
