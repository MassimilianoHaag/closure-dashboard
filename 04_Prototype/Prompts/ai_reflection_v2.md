# Figma Make Prompt — AI Reflection Screen v2
*Paste everything below this line into Figma Make.*

---

**Global constraints — apply to every frame without exception:**
- No espresso accent on this screen. See microphone treatment note below.
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
- Microphone icon: `#EFEBE4` (cream) — no espresso on this screen (see note below)
- Nav: "Closure" in small spaced Inter caps, top left. Thin horizontal rule below. Nothing else.

**Microphone treatment note:** No espresso accent on this screen. The espresso accent (`#3E322A`) requires mass or a light background to carry its signal — it fails on small stroked icons against the dark charcoal, where luminance contrast is too low to read. The microphone icon is rendered in cream (`#EFEBE4`) at approximately 32–40px, plain icon, no enclosing circle, ring, or container. It is visually primary by elimination: it is the only colored interactive element in the response area.

---

**Two content blocks — both visible on load. No sequential reveal, no animation.**

**Block 1 — Sharpened reflection (Piazzolla, ~3–4 sentences):**
The Meridian brand identity work was harder than I expected because the brief changed twice midway through. I kept refining the typography system thinking that was the deliverable, but the actual problem was helping the founders agree on what their company stood for. By the time I delivered, the design felt like the easy part — the alignment conversations were where the real work happened.

**Block 2 — Follow-up question (Inter, single line or two-line max, lighter weight):**
You mentioned the brief changed twice. Was that the hardest part, or was something else?

---

**Response controls — strict three-level hierarchy, below the question:**

1. **Microphone icon** — primary response control. Cream (`#EFEBE4`), approximately 32–40px, filled or solid-stroke style. Plain icon, no enclosing circle, ring, or container. Centered below the question. This is the prominent action.
2. **"or type your answer"** — quiet Inter text link directly below the microphone. Visibly subordinate — approximately 50% of the visual weight of the question text. Not a button. Not a field. A text link only.
3. **"Skip"** — very small muted Inter, below the text link. Almost a footnote. It must exist but should not compete for attention.

Hierarchy reads top to bottom: reflection → question → mic icon → text link → skip.

---

**Variant strategy — one frame only:**

All three variants were evaluated in a prior pass. Variant C was selected as the strongest direction. Generate only Variant C with the corrected mic treatment.

**Variant C — Stacked with inset question.** Reflection occupies the upper portion of the screen, centered, max-width ~680px. Below it, the follow-up question appears as a visually inset block — marked by a thin vertical left-border rule in `#EFEBE4` at low opacity, and slightly narrower than the reflection paragraph, signaling it comes from a different voice. Below the inset block, response controls centered: microphone (cream `#EFEBE4`, ~32–40px, filled or solid-stroke), "or type your answer" text link (subordinate), Skip (footnote-quiet).

---

**Viewport:** Desktop-first, 1440px wide. At 375px mobile, content collapses to a single vertical column with the same hierarchy; the inset left-border rule remains and reinforces the voice distinction at narrow widths; controls centered below.

**Output:** One frame — "AI Reflection — Variant C".
