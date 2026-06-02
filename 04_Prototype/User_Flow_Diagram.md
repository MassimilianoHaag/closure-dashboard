# User Flow Diagram — Closure
**Owner:** Both
**Status:** Draft
**Date:** 2026-05-30
**Scope:** Pass 1 Lo-Fi — core ritual flow only (auth, onboarding, settings out of scope)
**Persona:** Mara Santos — first-time user, just shipped a project
**References:** Screen_Inventory.md (screen definitions), Decisions/ (per-screen locked decisions)

---

## Entry condition

Mara opens the app. She has not used it before. A project shipped recently — within the same week. She initiates the flow herself; no push notification triggered it.

---

## Flow

1. **Gallery** — The starting point. Header: "New project" button (dropdown: "From scratch" / "From voice capture") and a filter. Each project card shows a "+ New capture" button. → "New project → From voice capture" or "+ New capture": goes to Recording.
2. **Recording** — Mara taps the mic icon to begin and speaks ~60 seconds. The transcript appears word by word as she speaks. → If she taps the pill: can pause or resume. → When she taps Done: goes to the post-capture visual prompt.
3. **Immediate Upload** *(post-capture bottom sheet)* — Recording screen dims; bottom sheet asks "Want to add visuals while it's fresh?" → If "Add visuals": goes directly to Case Study Draft (skipping AI Reflection). → If "Skip for now": goes to AI Reflection.
4. **AI Reflection** — The sharpened version of Mara's transcript appears. One follow-up question is surfaced. Three response controls: mic icon (primary), "or type your answer" (secondary), "Skip" (tertiary). → All three paths go to Synthesizing.
5. **Synthesizing** *(loading interstitial)* — "Listening…" transitions to "Drafting your case study…" over ~2.4 seconds. → Navigates automatically to Case Study Draft.
6. **Case Study Draft** — AI-assembled draft appears. Mara can edit and optionally add visuals. → "Save to gallery": goes back to Gallery with the entry added to the project.

---

## Decision points

| # | Decision | Options | Where in flow |
|---|---|---|---|
| D1 | Entry path | New project (voice capture) / + New capture on existing | Gallery (Screen 1) |
| D2 | Post-capture visual upload | Add visuals (→ Draft, skips Reflection) / Skip for now (→ AI Reflection) | After Recording (Screen 2) |
| D3 | Follow-up question response | Mic · type · skip (all go to Synthesizing) | AI Reflection (Screen 4) |

---

## 2 paths through the system

| Path | Entry | Post-capture | AI Reflection |
|---|---|---|---|
| **A** | New project or + New capture | Add visuals | Skipped |
| **B** | New project or + New capture | Skip for now | Yes → Synthesizing |

All paths converge at Screen 6 (Case Study Draft).

---

## Register arc

The product has two visual registers — dark (capture / processing) and parchment (output / gallery). The flip at Screen 6 is the narrative hinge: private capture becomes artifact.

| Screen | Register |
|---|---|
| 1. Gallery | parchment |
| 2. Recording | dark |
| 3. Immediate Upload | dark |
| 4. AI Reflection | dark |
| 5. Synthesizing | dark |
| **6. Case Study Draft** | **parchment ←flip** |
| Gallery (return) | parchment |

---

## Screen states within Recording (Screen 2)

```
[idle]
  "Tap to begin."  →  user taps mic icon
        ↓
[recording]
  transcript appears word by word  →  user taps pill to pause
        ↓                              OR recording reaches natural end
[paused]
  transcript frozen  →  user taps to resume → [recording]
                     →  user taps "Done" → [stopped]
        ↓
[stopped]
  post-capture bottom sheet appears
```

---

## Screens vs. prototype routes

| Screen | Design label | Prototype route |
|---|---|---|
| 1 | Gallery | `/gallery` |
| 2 | Recording | `/recording` |
| 3 | AI Reflection | `/reflect` |
| 4 | Synthesizing | `/synthesizing` |
| 5 | Case Study Draft | `/draft` |

Project Frame is defined in the design but not implemented in the prototype. Gallery uses the same route for empty and populated states; the demo always starts populated.

---

## Open questions

All four questions below were resolved during Pass 1 close-out. Kept here for context.

**Q1 — Follow-up question response modality (Screen 4)** ✓ RESOLVED
Voice-primary: cream microphone icon is the primary response control. "or type your answer" is a quiet text-link fallback. "Skip" is a footnote-level option. Locked in `ai_reflection_locked.md`.

**Q2 — Can Mara skip the follow-up question?** ✓ RESOLVED
Yes. Skipping produces a shorter Case Study Draft with a brief signal that some follow-up input was not provided. The draft remains functional and publishable, but its depth is visibly reduced. Locked in `ai_reflection_locked.md` and `case_study_draft_locked.md`.

**Q3 — Register flip location** ✓ RESOLVED
The register flip happens once, at Case Study Draft (Screen 6), where the published artifact begins to exist. Locked in `project_frame_locked.md`.

**Q4 — Post-capture prompt UI form** ✓ RESOLVED
Confirmed as a bottom sheet. The Recording screen remains visible (dimmed) behind the sheet. Locking this as bottom sheet rather than full-screen ensures it reads as optional rather than mandatory. Locked in `immediate_upload_locked.md`.

---

## Out of scope (Pass 1)

Authentication, onboarding, settings, publish/share, public portfolio view, reminder system, edit history, multiple capture management, export integrations. See Screen_Inventory.md §3 for full deferral rationale.
