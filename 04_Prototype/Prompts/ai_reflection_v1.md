# Figma Make Prompt — AI Reflection Screen v1
**SUPERSEDED by ai_reflection_v2.md.** Reason: mic icon at espresso brown (`#3E322A`) on charcoal background (`#3A3D40`) failed to read due to insufficient luminance contrast at typical icon sizes. v2 revises microphone treatment to cream (`#EFEBE4`) and removes espresso from this screen entirely. Kept for iteration trail.

---

*Paste everything below this line into Figma Make.*

---

**Global constraints — apply to every frame without exception:**
- Accent `#3E322A` (espresso brown): one instance per frame, on the microphone icon only. Never as a ring, frame, circle, or container enclosing the icon or any other element. The icon sits directly on the dark surface.
- No decorative container shapes. No boxes, cards, or rings around any content block, input, or control element.
- No pure black (#000000) or pure white (#FFFFFF) anywhere.
- No neon, no AI gradients, no purple, no glow effects, no "powered by AI" visual language.
- Register integrity: this screen is fully dark register. No parchment surfaces within any frame.
- Piazzolla (Google Fonts, variable serif): the sharpened reflection text only. Inter (Google Fonts, variable sans): follow-up question, all response controls, nav, and all UI text.
- Outlined buttons must have solid (not muted) label text. On this screen, avoid buttons entirely — use a microphone icon and text links only.
- No user name or account indicator in any nav element.
- Generous whitespace. Err toward more vertical breathing room between content blocks and controls.
- AI-suggested editable content uses ~40% opacity for muted states (not 50–60%). This screen has no editable fields — the constraint applies to the "or type your answer" and "Skip" controls, which should be visibly subordinate to the microphone icon.

---

**What Closure is:** Closure is a 60-second voice capture tool for designers. The designer speaks; the AI mirrors their words back sharpened and asks one follow-up question. The AI Reflection screen is the trust moment — Mara just spoke for sixty seconds, and now reads her own words back, articulated slightly better than she managed in the moment, alongside one question that proves the AI was listening hard, not flattering her.

**The user:** Mara Santos, product designer, 29. Tagline: *"I do good work. I just can't write about it."* Her specific concern: she does not want flattery. She wants the harder question. The follow-up question is the proof that Closure isn't a generic AI text tool. If it sounds like a press release or a compliment, she closes the app. If it sounds like a colleague who was paying attention, she answers.

**Dark visual register — apply exactly:**
- Background: `#3A3D40` (deep charcoal — not pure black)
- Reflection text: `#EFEBE4` (warm off-white) in Piazzolla
- Question text: `#EFEBE4` in Inter, lighter weight than the reflection — subordinate but readable
- Microphone icon: `#3E322A` (espresso brown) — this is the only espresso element on the screen
- Nav: "Closure" in small spaced Inter caps, top left. Thin horizontal rule below. Nothing else.

---

**Two content blocks — both visible on load. No sequential reveal, no animation.**

**Block 1 — Sharpened reflection (Piazzolla, ~3–4 sentences):**
The Meridian brand identity work was harder than I expected because the brief changed twice midway through. I kept refining the typography system thinking that was the deliverable, but the actual problem was helping the founders agree on what their company stood for. By the time I delivered, the design felt like the easy part — the alignment conversations were where the real work happened.

**Block 2 — Follow-up question (Inter, single line or two-line max, lighter weight):**
You mentioned the brief changed twice. Was that the hardest part, or was something else?

---

**Response controls — strict three-level hierarchy, below the question:**

1. **Microphone icon** — primary response control. Espresso brown (`#3E322A`). Plain icon, no enclosing circle or ring. Centered below the question. This is the prominent action.
2. **"or type your answer"** — quiet Inter text link directly below the microphone. Visibly subordinate — approximately 50% of the visual weight of the question text. Not a button. Not a field. A text link only.
3. **"Skip"** or **"Save without answering"** — very small muted Inter, below the text link. Almost a footnote. It must exist but should not compete for attention.

Hierarchy reads top to bottom: reflection → question → mic icon → text link → skip.

---

**Three variants — desktop layout only, one frame each:**

**Variant A — Centered column.** All content in a single centered column, max-width 680px, generous left/right margins. Top to bottom: reflection paragraph, vertical breathing space, follow-up question, response controls. The screen is pure vertical composition. Reads as editorial long-form.

**Variant B — Reflection + controls as aside.** Reflection occupies the left two-thirds of the screen, centered within that region at ~640px max-width. The follow-up question, microphone icon, text link, and skip control sit in the right third — quietly set apart as the AI's space, distinct from Mara's words on the left. The left half is her voice; the right half is the AI's response and the space for hers.

**Variant C — Stacked with inset question.** Reflection in the upper portion of the screen, centered, max-width 680px. Below it, the follow-up question appears as a visually inset block — marked by a thin vertical left-border rule in `#EFEBE4` at low opacity, and slightly narrower than the reflection paragraph, signaling it comes from a different voice. Microphone icon and other controls below the inset block, centered.

---

**Viewport:** Desktop-first, 1440px wide. Add one annotation per variant: at 375px mobile, content collapses to a single vertical column with the same hierarchy; the microphone icon becomes proportionally larger because the narrower screen amplifies its scale relative to the text.

**Output:** Three frames side by side — "AI Reflection — Variant A", "AI Reflection — Variant B", "AI Reflection — Variant C".
