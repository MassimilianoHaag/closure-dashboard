# Case Study Draft Screen — Locked Decision
**Date:** 2026-05-28
**Variant chosen:** C — Stacked with strong section breaks
**Populated state PNG:** `05_Prototype/Pass_1_LowFi/Variants/case_study_draft/variant_c.png`
**Empty state PNG:** `05_Prototype/Pass_1_LowFi/Variants/case_study_draft/variant_c_empty.png` *(to be rendered manually in Figma before Pass 2 handoff — apply Variant A's upload zone within Variant C's structural layout)*

---

## Decision

Variant C is the Pass 1 direction. Stacked layout with three regions separated by thin horizontal rules: meta header → editorial body → visual support → bottom controls.

**Region 1 — Meta header:** Project name in Piazzolla (smaller scale), date and status in muted Inter, thin rule below.

**Region 2 — Editorial body:** Case study title in Piazzolla (larger), Inter body paragraphs at full opacity. Prose sits directly on the parchment surface — no container.

**Region 3 — Visual support section:** "VISUAL SUPPORT" label in small Inter caps, thin rule above. Two states:
- **Empty state:** Quiet upload affordance — subtle bordered zone with small image icon and "Add visual support" label. Reads as an invitation, not a form field.
- **Populated state:** 2-column image grid at full column width (as rendered in `variant_c.png`). Below the grid: small "Add more" Inter text link for additional uploads. Each image has a small × remove control in the upper-right corner (hover-visible at desktop, persistent on mobile).

**Bottom controls (Publish > Save draft > Discard):** Publish is an espresso (`#3E322A`) outlined button — verified at correct hex. Save draft is a quiet Inter text link. Discard is muted footnote Inter.

---

## Interaction model

- **Add:** Tap upload affordance (empty state) or "Add more" link (populated state) to open file picker. Multiple uploads in a single action supported.
- **Remove:** Tap × to remove an image. No confirmation modal — undoable via brief toast (Pass 2).
- **Reorder:** Deferred to Pass 2 or later.

---

## Draft generation — variable depth by input

Draft quality and length vary based on whether the AI Reflection follow-up question was answered. A full capture (voice + answered follow-up) produces a longer, deeper draft. A skipped follow-up produces a shorter draft that includes a brief signal that some input was missing — the draft is still functional and publishable, but visibly thinner. Pass 2 should treat both states as valid draft outputs, not as success vs error states.

---

## Variants rejected

**Variant A — Rejected.** Only showed the empty state; upload zone read as form-adjacent (bordered drop zone). Clean composition but structurally incomplete.

**Variant B — Rejected.** Three thumbnails in a horizontal row left the lower 60% of the right column as accidental empty space. Two-column layout requires enough visual content to justify the split; the thumbnail row did not.
