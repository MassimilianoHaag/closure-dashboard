# Project Frame Screen — Locked Decision
**Date:** 2026-05-27
**Variant chosen:** 2 — Top-anchored, outlined button CTAs
**Source PNG:** `05_Prototype/Pass_1_LowFi/Variants/project_frame/variant_2.png`

---

## Decision

Variant 2 is the Pass 1 direction. Top-anchored layout with outlined button CTAs signals action-readiness more clearly than Variant 1's centered, text-link composition. On a functional screen where the user has one step to take before something happens, "ready to act" matters more than elegance. Both states (A: manual-create, B: voice-first post-capture) are present in the same frame and share layout, hierarchy, and CTA treatment — they read as one screen in two conditions, not two different screens.

The AI-suggestion signal in State B uses opacity (~40%), not typeface — this prevents the typeface-switch problem when Mara edits the field and is consistent with the standard placeholder convention.

---

## Manual fixes applied in Figma

Two issues from the Figma Make output were corrected directly before locking:
1. **AI suggestion opacity sharpened to ~40%.** At 50–60% the suggested name read as "same family as the label text." At 40% it reads unambiguously as "placeholder content the user can replace."
2. **Confirm button text solidified.** The outlined button in State B had a ghosted label — fixed to solid `#EFEBE4`, matching State A's CTA treatment.

---

## Register choice — explicit reasoning

Both states sit in the dark register. State B (AI-suggested name, post-capture) stays dark because naming the project is a micro-moment within the capture ritual, not a transition out of it. The register split was structured around a specific narrative: capture and reflection happen in the dark; the published artifact lives in the warm. The published artifact is the case study, not the project name. Naming is the last gesture before the AI Reflection beat — still part of closing, still intimate, still private. The register flip happens once, at Case Study Draft, because that is where the published artifact begins to exist. Making State B parchment would either force AI Reflection to also flip (killing its trust-moment intimacy) or create two register transitions in three screens.

---

## Variant 1 — Rejected

Text-link CTAs disappeared into the charcoal background; no clear affordance for the primary action. Centered vertical composition read as floating rather than ready. Lesson: on functional screens, outlined button > text link in dark register.
