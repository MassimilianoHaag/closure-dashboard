# Screen Inventory — Pass 1 Lo-Fi
**Owner:** Both
**Status:** Updated post-sync — decisions locked 2026-05-27
**Date:** 2026-05-27
**Feeds:** Pass 1 wireframing, Figma file structure

**Decisions locked (no longer provisional):**
- Unit of capture: per project
- Trigger: pull + reminders (user-initiated, same-week; system nudges, never forces)
- Project Frame screen: post-capture for voice-first path (AI-suggested + editable); pre-capture for manual-create path
- Multi-modal input: voice is primary; screenshots, images, documents as visual support
- Register split: dark for capture / reflection, parchment for gallery / output — locked

---

## Section 1 — Screen List

**1. Gallery — Entry Point (Empty State)**
- **Register:** Parchment
- **Purpose:** Entry point on Mara's first use; communicates what the product is through the shape of the space, not explanatory copy. Presents two paths without making her choose an identity.
- **Mara's mental state:** Friday morning, threshold just crossed. Curious, slightly guilty, not committed yet. She needs to feel the first step is small.
- **Pass 1 status:** Required
- **Design note:** Two CTAs at the same visual level — "Record now" (voice-first) and "Create project" (manual-create). No hierarchy between them; Mara picks based on what feels right that morning. Empty state header follows the Creative/Editorial archetype: poetic, single line ("Your first capture lives here"), nothing else.

---

**2. Project Frame**
- **Register:** Dark
- **Purpose:** Names and anchors the capture to a specific project. Appears at different moments depending on path, but the same screen design serves both.
- **Mara's mental state (voice-first, post-capture):** She's just spoken. Slightly breathless from the ritual. The AI shows her what it heard in a project name — she confirms or adjusts. No friction.
- **Mara's mental state (manual-create, pre-capture):** She chose to name first. She knows exactly what this is for. She types, continues.
- **Pass 1 status:** Required — one screen, two states:
  - **State A — Manual-create (pre-capture):** Simple text input. "What's this project?" No AI involvement yet.
  - **State B — Voice-first (post-capture):** AI-proposed project name displayed. Accept / modify / rename later. No required action to continue if she accepts.
- **Design note:** State A is the only pre-capture screen in the manual-create path; the register flips to dark here. State B is the first post-capture screen in the voice-first path; the user is already in dark register. Same underlying component, different data source. **Manual-create path skips State B entirely — the project was named upfront; no AI-naming step appears post-capture.**

---

**3. Capture: Recording**
- **Register:** Dark
- **Purpose:** The 60-second voice capture. The ritual itself.
- **Mara's mental state:** She's in it. The project is still close. The screen should feel like being heard, not monitored.
- **Pass 1 status:** Required — hardest screen to get right in lo-fi; the recording state is what the entire product hinges on.
- **Design note:** Primary element: mic / recording state indicator. Waveform or pulse signals listening without clinical aggression. No timer unless approaching the limit. No instructional text during recording — only before she starts. Stop action: reachable but not prominent. In the voice-first path this screen comes immediately after Screen 1 (no naming step first).

---

**Post-Capture Visual Prompt** *(interstitial state — not a numbered screen; no discrete wireframe required in lo-fi)*
- **Register:** Dark
- **Purpose:** Soft prompt immediately after recording stops. Honors the designer impulse to grab screenshots right after talking about a project, without making it mandatory or interrupting the speaking ritual.
- **Mara's mental state:** Recording just ended. The project context is fully loaded. If she has a Figma export or a deliverable screenshot at hand, the impulse is there right now. This is the window to offer — once.
- **Pass 1 status:** Required as an annotated flow state; does not need a discrete wireframe. Design the prompt language and dismiss behavior.
- **Design note:** Bottom sheet or overlay (not a full-screen replacement). Two choices: "Add visuals" and "Continue." Skipping sends Mara directly to AI Reflection. Uploading here and uploading later in Screen 5 are not mutually exclusive — both feed the same project. The prompt copy must be inviting, not interrogative: "Want to add visuals while it's fresh?" not "Upload files before continuing."

---

**4. AI Reflection**
- **Register:** Dark
- **Purpose:** Two content blocks: (1) sharpened version of what Mara said, (2) one follow-up question. The trust moment — this screen wins or loses her.
- **Mara's mental state:** Reading herself back. If it sounds like her, she's in. If it sounds like a press release, she's done.
- **Pass 1 status:** Required
- **Design note:** Sharpened reflection shown as a distinct text block — not labeled "AI output," just present. Follow-up question below, visually subordinate. Mara responds inline (see Open Questions §4 item 1 on voice vs. text). The response to the follow-up feeds the case study draft. In the voice-first path, Project Frame (Screen 2, State B) appears after this screen — not before.

---

**5. Case Study Draft + Visual Upload**
- **Register:** Parchment — register flips here
- **Purpose:** Assembled draft from voice capture + AI processing. First warm screen. Also the surface where Mara attaches visual artifacts to support the narrative.
- **Mara's mental state:** Relief or disappointment depending on quality. The draft is the proof point. The visual upload affordance is secondary — she notices it, decides whether she has something to add.
- **Pass 1 status:** Required
- **Visual upload — primary path (confirmed):** The main upload moment is here, in the draft view. Mara reads the text, sees what's missing visually, and adds it. This is the curation moment — she's deciding what the case study contains, not just capturing it. The post-capture visual prompt (between Screens 3 and 4) is the optional immediate path; this screen is where most uploads will actually happen. Both paths deposit files into the same project.
- **Design note:** Editorial hierarchy: Piazzolla headline (project name from Screen 2), Inter body for draft text. Parchment background. Minimal edit affordance — signal editability, don't build a full editor in Pass 1. Visual upload as a distinct section below the text: "Add visuals — screenshots, images, documents." Accepts file attach or drag. CTA: "Save to gallery." No publish button in Pass 1.

---

**6. Gallery — Populated**
- **Register:** Parchment
- **Purpose:** Success state made visible. One card: the capture just completed. The bookend to Screen 1 — the jury needs to see the product's promise fulfilled.
- **Mara's mental state:** She did it. The work is documented and visible. Four months from now there will be six of these.
- **Pass 1 status:** Required for the demo — without this, the portfolio-over-time argument is invisible.
- **Design note:** Card shows: project name, capture date, one-sentence excerpt. If a visual was uploaded, a thumbnail appears on the card (corner or background treatment — Pass 2 decision). No metrics, no engagement counts. CTA: "Record now" / "Create project" (persistent from Screen 1). Democratic card grid per Are.na reference, not Behance hero-image layout.

---

## Section 2 — User Flow

Two entry paths, one optional branch point, four distinct routes through the system — all converge at Screen 5.

```
[1. Gallery: Entry Point]  — parchment
         ↓                              ↓
    "Record now"                  "Create project"
    (voice-first)                 (manual-create)
         ↓                              ↓
         ↓                    [2A. Project Frame: Manual]  — dark  ← register flips
         ↓                              ↓  types project name
         ↓←——————————————————————————————↓  reconverge

[3. Capture: Recording]  — dark
         ↓  speaks ~60 seconds, taps stop
         ↓
    ┌────┴──────────────────────────────────────────┐
    │  Post-capture visual prompt (interstitial)    │  — dark
    │  "Want to add visuals while it's fresh?"      │
    ├────────────────────┬──────────────────────────┤
    ↓  "Add visuals"     ↓  "Continue" (skip)
    [attach files]       ↓
         ↓←——————————————↓  reconverge

[4. AI Reflection]  — dark
         ↓  reads sharpened reflection
         ↓  reads + responds to follow-up question
         ↓
         ↓ voice-first path:              ↓ manual-create path:
  [2B. Project Frame: AI-suggested]       │  SKIP — name already set
         ↓  accepts / modifies            │
         ↓←———————————————————————————————↓  reconverge

[5. Case Study Draft + Visual Upload]  — parchment  ← register flips here
         ↓  reads draft
         ↓  optionally adds / manages visuals (primary upload moment)
         ↓  taps "Save to gallery"

[6. Gallery: Populated]  — parchment
         ↓  sees capture as card
         END of demo flow
```

**4 distinct paths through the system:**
| Path | Entry | Immediate upload | Screen 2B |
|---|---|---|---|
| A | Voice-first | Yes | Yes |
| B | Voice-first | Skip | Yes |
| C | Manual-create | Yes | Skipped |
| D | Manual-create | Skip | Skipped |

**Register arc (voice-first):** parchment → dark → dark → dark → dark → parchment → parchment

**Register arc (manual-create):** parchment → dark → dark → dark → parchment → parchment

The flip point (post-Screen 4 → Screen 5) is the narrative hinge: private capture becomes public artifact.

---

## Section 3 — Out of Scope for Pass 1

| Item                                                      | Reason deferred                                                                                                                                                            |
|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authentication / sign-in                                  | Adds nothing to the demo of the core ritual                                                                                                                                |
| Onboarding / explainer flow                               | Empty state (Screen 1) communicates product intent; a separate onboarding is the "empty consumer cheerfulness" we explicitly rejected                                      |
| Full-text editor for case study draft                     | Pass 1 signals editability; full editor belongs in Pass 2 once draft quality is validated                                                                                  |
| Publish / share flow                                      | Success state is "saved to gallery"; publish is the next decision after trust is established — a Pass 2 question                                                           |
| Public portfolio view                                     | Different product surface from the private ritual; deferred until private gallery is validated                                                                             |
| Reminder system                                           | Pull + reminders is locked as a trigger model, but the reminder mechanic (in-app, email, system notification) is a platform decision that doesn't affect Pass 1 wireframes |
| Settings (notifications, profile, account)                | No Pass 1 design decisions live here                                                                                                                                       |
| Edit history / version control                            | Premature — no data on edit frequency                                                                                                                                      |
| Multiple capture management (reorder, delete, archive)    | Gallery in Pass 1 shows one card; multi-item management is a Pass 2 problem                                                                                                |
| Visual upload management (reorder, delete attached files) | Deferred; the upload affordance in Screen 5 is sufficient for Pass 1                                                                                                       |
| Export (Notion, PDF, Readymag)                            | Integration layer — not the ritual                                                                                                                                         |
| Processing / loading state (wireframe screen)             | Annotate on flow diagram; no discrete wireframe needed in lo-fi                                                                                                            |
| Gallery card thumbnail treatment                          | Whether and how a visual thumbnail appears on gallery cards is a Pass 2 visual decision                                                                                    |

---

## Section 4 — Open Questions

**1. How does Mara respond to the follow-up question — voice or text?**
If she speaks again, Screen 4 has a second mic state. If she types, Screen 4 has a text input. These are significantly different screen designs and affect what the AI receives. A third option: the follow-up is purely reflective (no capture, just a prompt). Needs a call before wireframing Screen 4.

**2. Can Mara skip the follow-up question?**
If yes, the flow branches and needs a skip path designed. If no, the product makes a strong statement about the ritual's requirements. Not resolved in the sync — needs a call before wireframing Screen 4.

**3. Where does the register flip in the voice-first path — before or after Project Frame (State B)?**
Current assumption: Screen 2B (Project Frame, AI-suggested) stays dark, and the flip to parchment happens at Screen 5 (Case Study Draft). An alternative: the AI-suggested name appears on the first parchment screen as the opening of the draft view. Affects how Screen 2B is wireframed and whether it reads as part of the capture ritual or the output stage.

**4. What is the visual prompt's UI form — bottom sheet or full-screen overlay?**
Documented as a bottom sheet / overlay in the design note, but not confirmed. If it's a full-screen replacement, it may feel more like a required step than an invitation. Bottom sheet preserves the sense that the main screen (the recording is done) is still underneath. Needs confirmation before wireframing this state.
