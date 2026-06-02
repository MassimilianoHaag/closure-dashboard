# Gallery Screen — Locked Decision
**Date:** 2026-05-27
**Screen:** Gallery — populated state and empty state

---

## Populated state: Variant A (list with excerpts) — locked

The excerpt text is the gallery's actual value. Mara's case studies aren't six project titles — they're six things she said, sharpened, about work she did. The list shows that; the grid only confirms that something exists. Editorial hierarchy (Piazzolla italic title / Inter excerpt / muted date / thin rule) maps directly to the visual register anchors and communicates the product promise on first glance.

**Source PNG:** `05_Prototype/Pass_1_LowFi/Variants/gallery/variant_a.png`

---

## Empty state — locked with one modification

Locked design: parchment background, top nav with "Closure" wordmark left, thin horizontal rule, centered Piazzolla italic statement "Your first capture lives here." with "Record now" and "Create project" as small equal-weight Inter text links below.

**Modification required:** Remove "Mara Santos" from the top-right nav before Pass 2. Authentication and account model are deferred for Pass 1 — the product knows who the user is for demo purposes; the chrome should not announce it.

**Source PNG:** `05_Prototype/Pass_1_LowFi/Variants/gallery/empty.png` *(requires manual nav edit in Figma before Pass 2)*

---

## Card thumbnail treatment — resolved

Gallery cards in the populated state include a thumbnail image pulled from the visual support attached to each case study. The Pass 1 locked list (Piazzolla italic title / Inter excerpt / muted date / thin rule) is the structural foundation. In Pass 2, each list item gains a thumbnail alongside the excerpt and meta — making the card richer without changing the list-over-grid decision. Cards without visual support attached show no thumbnail. Pass 2 generation should incorporate the thumbnail as a standard card element; its exact position (left edge, right edge, or behind the text as a background crop) is a Pass 2 design decision.

---

## Variant B (grid) — rejected

Showed existence rather than content. Cards with title and date only confirm a capture happened; they don't demonstrate what Closure produces. The grid also left ~60% of the viewport blank at six items, which made it read as unfinished. Lesson on grid sparsity captured in `_global_constraints.md`.
