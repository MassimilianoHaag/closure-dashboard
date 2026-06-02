# Figma Make Prompt — Recording Screen v1
*Paste everything below this line into Figma Make.*

---

Generate three wireframe frame variants for the Recording screen of a mobile app called Closure.

**What Closure is:** Closure is a 60-second voice capture tool for designers. When a project ships, the designer opens the app, speaks for sixty seconds about what was made and why it mattered, and the AI mirrors their words back sharpened — then asks one follow-up question. The portfolio builds as a byproduct over months. The Recording screen is the ritual itself. The entire product depends on this screen feeling right.

**The person using this screen:** Mara Santos, product designer, 29. Portfolio untouched for eighteen months. Her tagline: *"I do good work. I just can't write about it."* She opened the app on a Friday morning because the threshold was low enough — not because she planned to. She's not fully committed yet. She can describe her work fluently in a meeting; a blank document freezes her. This screen is her alternative to the blank document. It either keeps her or loses her.

**Dark visual register — apply exactly:**
- Background: `#3A3D40` (deep charcoal — not pure black)
- Primary text: `#EFEBE4` (warm off-white — not pure white)
- Accent: `#3E322A` (espresso brown) — one instance only, on the single highest-signal element per frame. Not for decoration.
- Typefaces: **Inter** (Google Fonts, variable sans) for all UI text. **Piazzolla** (Google Fonts, variable serif) in Variant B only, as described below.
- No neon, no purple, no AI gradients, no glow effects.

**Strictly avoid:**
- Clinical red record buttons or pulsing red indicators
- EQ-style mechanical waveforms (vertical bars, spikes)
- Elapsed-time counters or countdown timers during recording
- "Listening…" spinners or processing language
- Pure black (#000000) or pure white (#FFFFFF)

**This screen must communicate four things:**
- Recording is active right now
- 60 seconds is the unit — not open-ended
- There is a way to stop, but it is not the first thing the eye lands on
- The app is present with the user, not watching them

**Three variants — one frame each:**

**Variant A — Quiet waveform.** A single smooth, continuous waveform, low amplitude, centered on the charcoal background. No bars, no spikes — organic, like a slow breath. The waveform responds to voice volume but never becomes jagged or aggressive. Stop action: small Inter text, bottom center.

**Variant B — Spoken words as text.** No waveform. Live transcription appears word by word in Piazzolla italic, large and centered — as if the app is writing down exactly what she says. Use this sample text for the placeholder: *"The client had two weeks to review and came back with almost nothing to change — which almost never happens. I think it's because we showed our process early and often instead of presenting a finished thing."* Words layer or fade as new ones arrive. Stop action: small circle icon, bottom center.

**Variant C — Single breathing dot.** No waveform, no transcription. One soft circle in `#EFEBE4`, centered, expanding and contracting slowly and evenly. Grows slightly with voice volume. Nothing else except a small "done" label below the dot in Inter. Extremely quiet.

**Viewport:** Design each frame at 375px wide (mobile-first). Add a brief annotation on each frame describing the single layout change for 600px desktop (centered column, more vertical breathing room). Do not generate desktop frames.

**Output:** Three frames side by side, labeled: "Recording — Variant A", "Recording — Variant B", "Recording — Variant C".
