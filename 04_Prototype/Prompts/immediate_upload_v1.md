# Figma Make Prompt — Immediate Upload Prompt (Bottom Sheet) v1
*Paste everything below this line into Figma Make.*

---

**Relevant global constraints — apply to both frames:**
- **No decorative container shapes.** The bottom sheet is a surface, not a container around content. The espresso accent must never appear as a ring, oval, or decorative frame. If used on the primary action, it appears as a button border or text — not as a shape enclosing the action.
- **Accent rule (one per frame).** `#3E322A` espresso brown on the single highest-signal element only. On Variant B, the primary "Add visuals" outlined button earns it. On Variant A, the primary action is a text link + small icon — neither has sufficient mass against the dark register charcoal, so use cream (`#EFEBE4`) for both and omit espresso from Variant A entirely.
- **No pure black or pure white.** All surfaces floor at `#3A3D40` (charcoal). Text ceilings at `#EFEBE4` (warm off-white). `#000000` and `#FFFFFF` do not appear anywhere. The dimming overlay over the Recording screen must be a semi-transparent charcoal, not pure black.
- **No AI/SaaS gradient aesthetics.** No neon, no purple, no glowing orbs, no gradient text. No "powered by AI" visual language.
- **This frame is entirely in the dark register.** The semi-transparent overlay dimming the Recording screen is a UI layering convention, not a register flip. Both the underlying screen and the bottom sheet surface are dark register.
- **Typography discipline.** Piazzolla (Google Fonts, variable serif) for the bottom sheet headline — this is the only emotionally weighted moment on the sheet. Inter (Google Fonts, variable sans) for the subtext, the primary action label, and the skip link.
- **Generous whitespace inside the sheet.** The sheet content must breathe. Generous top and bottom padding, and spacing between the headline, subtext, primary action, and skip link. The sheet is a gentle offer, not a task list.
- **Static designs must communicate state.** The underlying Recording screen must be clearly readable as "just finished recording" — the Piazzolla transcription text and the espresso stop dot must be visible behind the overlay, confirming the recording is complete.
- **Outlined button label text must be solid, not muted.** Variant B's "Add visuals" outlined button label text must be fully legible — same espresso color as the border. No opacity reduction on the label.
- **The espresso accent requires mass or a light background to read.** On this dark-register screen: an outlined button (Variant B) has border mass and can use espresso. A small icon or text link (Variant A) does not — use cream.
- **The primary action is not a form field.** The "Add visuals" action must not look like a bordered file-upload drop zone. It is a button or a text link + icon, not a drag-and-drop rectangle. The file picker opens when tapped; there is no visible drop zone.

---

**What Closure is:** Closure is a 60-second voice capture tool for designers. The designer speaks; the AI mirrors their words back sharpened and asks one follow-up question. The immediate-upload prompt is a single, gentle offer that appears the moment recording stops: *while the project context is fully loaded, do you want to grab any visuals?* It is not a required step. It does not interrupt the ritual. It honors the impulse a designer actually feels in this moment — the project is still close, the deliverable screenshot is still on the screen, and adding it now takes five seconds.

**The user:** Mara Santos, product designer, 29. She just finished speaking for sixty seconds about the Meridian Brand Identity project. The recording is done. She's slightly breathless from the ritual. The screen is transitioning. In this moment she might have a Figma export or a deliverable image at hand — the offer is here now, once. If she has it, she taps. If she doesn't, she skips. The skip is easy to find and carries no friction or guilt.

---

**What to render — a composited mobile frame:**

This is a single composited mobile frame, not two separate screens. It shows the Recording screen as the base, partially dimmed by an overlay, with the bottom sheet rising from the bottom of the viewport.

**The Recording screen (base layer):**
Render the full Recording screen in dark register — `#3A3D40` charcoal background, "CLOSURE" in small spaced Inter caps at top left with a thin horizontal rule below. In the content area, show Piazzolla italic transcription text, partially cut off mid-sentence, to signal the recording is complete:

*"The Meridian brand identity work was harder than I expected because the brief changed —"*

The espresso stop dot (small filled circle, `#3E322A`) is visible at the bottom of the recording area, below the transcription text. This is the Recording screen's locked espresso element.

**The dimming overlay (above the base layer):**
A semi-transparent rectangle covering the full Recording screen at approximately 30% opacity, in charcoal (`#3A3D40`). This dims the Recording screen content without completely obscuring it — the transcription text and espresso dot remain legible through the overlay. Do not use pure black for the overlay.

**The bottom sheet (top layer):**
A solid charcoal (`#3A3D40`) surface rising from the bottom of the viewport, occupying approximately the lower 40–50% of the 375px-wide frame. The sheet's top edge is marked by a single thin horizontal rule in warm off-white (`#EFEBE4`) at low opacity (~25%) — a quiet boundary, not a hard modal edge. Generous internal padding on all sides.

---

**Bottom sheet content — same in both variants:**

1. **Headline:** *"Want to add visuals while it's fresh?"* — Piazzolla italic, medium scale. This is the only Piazzolla element on the sheet. Not large — slightly larger than body text, smaller than the Recording screen's transcription text. It asks, it doesn't announce.

2. **Subtext:** *"Screenshots, mockups, or anything that supports the story. You can always add them later."* — Inter, single line or short two-line wrap, warm off-white at approximately 55% opacity. Quiet, not explanatory. Does not oversell.

3. **Primary action:** Differs by variant — see below.

4. **Skip link:** *"Skip for now"* — Inter, warm off-white at approximately 45% opacity. Small. Below the primary action. Clearly readable but visually subordinate. Easy to find; does not compete.

---

**Two variants — one frame each:**

**Variant A — Quiet sheet.** The primary action is a text link with a small inline icon to its left: a small image/photo icon (cream `#EFEBE4`, stroke-style) followed by the label *"Add visuals"* as an Inter text link in cream. No button, no border. The icon and label are cream — no espresso on this variant (small stroked icon on charcoal cannot carry the signal). The skip link *"Skip for now"* sits below with less visual weight. The sheet feels like a gentle suggestion, not a choice interface. The hierarchy is: headline → subtext → quiet text link → quieter skip link.

**Variant B — Defined sheet.** The primary action is an outlined button: thin espresso border (`#3E322A`), transparent fill, label *"Add visuals"* in espresso (solid, not muted), with a small image icon to the left of the label inside the button. The button has border mass — espresso earns its one use here. The skip link *"Skip for now"* sits below the button in muted Inter. The sheet has a clearer choice structure: button for yes, text link for no. The hierarchy is: headline → subtext → espresso outlined button → muted skip link.

---

**Viewport:** Mobile-primary, 375px wide. The composited frame shows the full viewport height — Recording screen behind, dimmed, with the bottom sheet occupying the lower ~40–50%.

**Desktop adaptation note (one sentence per variant):** On desktop, the bottom sheet becomes a centered modal of similar proportions — approximately 480px wide — floating over a dimmed full-screen Recording view; the layout and hierarchy of the sheet content remain identical.

**Output:** Two frames side by side — "Immediate Upload Prompt — Variant A" and "Immediate Upload Prompt — Variant B". Both show the full composited mobile viewport.
