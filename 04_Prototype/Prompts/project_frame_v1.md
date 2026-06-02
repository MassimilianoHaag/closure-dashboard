# Figma Make Prompt — Project Frame Screen v1
**Superseded by project_frame_v2.md. Reason: Piazzolla italic for AI-suggested names would force a typeface switch on edit. Kept for iteration trail.**

*Paste everything below this line into Figma Make.*

---

**Global constraints — apply to every frame without exception:**
- Accent `#3E322A` (espresso brown): one instance per frame, single highest-signal element only. Never as a ring, frame, circle, or border enclosing another element. Text-weight or single-element only.
- No decorative container shapes around inputs. Text inputs use a single thin underline only — no boxed borders, no rounded rectangles, no drop shadows.
- No pure black (#000000) or pure white (#FFFFFF) anywhere.
- No neon, no AI gradients, no purple, no glow effects, no "powered by AI" visual language.
- Register integrity: this screen is fully dark register. No parchment surfaces within any frame.
- Piazzolla (Google Fonts, variable serif): emotionally weighted text only — the AI-suggested project name in State B. Inter (Google Fonts, variable sans): all labels, CTAs, nav, placeholder text, and everything else.
- No user name or account indicator in any nav element.
- Generous whitespace. Err toward more breathing room, not less.

---

**What Closure is:** Closure is a 60-second voice capture tool for designers. The designer speaks; the AI mirrors their words back sharpened and asks one follow-up question. The portfolio builds as a byproduct. The Project Frame screen gives each capture a name — either before recording starts (manual-create path) or after recording ends (voice-first path). It is functional, not emotional. It should feel like clearing a small piece of paper before beginning, or labeling an envelope after.

**The user:** Mara Santos, product designer, 29. Tagline: *"I do good work. I just can't write about it."* In State A she is one step from the recording ritual — name it and go. In State B she has just spoken for sixty seconds; the AI heard her well enough to propose a name. She is in control: she can accept, edit directly, or rename later.

**Dark visual register — apply exactly:**
- Background: `#3A3D40` (deep charcoal — not pure black)
- Primary text: `#EFEBE4` (warm off-white — not pure white)
- Accent: `#3E322A` (espresso brown) — primary CTA only, one instance per frame
- Nav: "Closure" in small spaced Inter caps, top left. Thin horizontal rule below. Nothing else.

---

**Two states — include both in every frame:**

**State A — Manual-create (pre-capture).** The user tapped "Create project" from the gallery. The text input is empty. Label above the field (small muted Inter): *"Name this project —"*. CTA below: *"Start recording."* This is the only friction before the ritual begins; it should feel like the last small step, not a form.

**State B — Voice-first (post-capture).** The user just finished recording sixty seconds. The AI proposes a project name drawn from what was said. Label above the field (small muted Inter): *"We heard you working on —"*. The field treatment varies by variant (see below). CTA: *"Confirm."* The user can edit the field directly — the AI's suggestion is a starting point, not a decision.

---

**Two variants — one frame each, State A and State B shown side by side within the frame:**

**Variant 1 — Centered minimal.** All content vertically centered on the dark background, maximum breathing room above and below. Single thin underline input field — no box. In State B, the AI-suggested name *Meridian Brand Identity* is pre-filled in the field in Piazzolla italic (warm off-white, same color as body text — the italic signals it came from listening, not from typing). CTA for both states as a small espresso-brown (`#3E322A`) Inter text link placed directly below the field.

**Variant 2 — Top-anchored.** Content positioned in the upper third of the screen, leaving generous empty space below. Same thin underline field. In State B, the AI-suggested name appears as faint placeholder-style text (*Meridian Brand Identity*) rather than pre-filled — the user types over it to confirm. CTA for both states as a more defined element: a low-profile outlined button (thin `#EFEBE4` border, transparent fill, Inter label) rather than a text link.

---

**Viewport:** Desktop-first, 1440px wide. Add one annotation per variant: at 375px mobile, content centers in a narrower column (~300px) with the same hierarchy, and the CTA spans full width below the input field.

**Output:** Two frames side by side — "Project Frame — Variant 1 (State A + State B)" and "Project Frame — Variant 2 (State A + State B)". Within each frame, State A and State B may be shown side by side or stacked — choose whichever reads more clearly at 1440px.
