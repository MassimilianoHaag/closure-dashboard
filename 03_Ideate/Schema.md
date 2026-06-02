# Project Schema — Closure
**Owner:** Both
**Status:** Draft
**Date:** 2026-05-30

A Closure project is a logbook of process. It has a cover (the project identity) and a chronological set of entries (the captures). Each entry is one moment of documentation — a capture (voice or text), its AI output, and any attached media.

---

## Project

| Field                | Type            | Description                                                                                                                            |
|----------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `id`                 | string          | Unique identifier                                                                                                                      |
| `name`               | string          | Project name — typed by user or AI-suggested after first capture                                                                       |
| `created_at`         | date            | Date the project was created                                                                                                           |
| `updated_at`         | date            | Date of the last entry added                                                                                                           |
| `cover_image`        | file (optional) | Representative image for the gallery card                                                                                              |
| `maturity`           | enum (computed) | `seed` · `in-progress` · `ready` — derived from entry volume, AI draft coverage, follow-up depth, attachment breadth, and saved status |
| `reminder_frequency` | enum            | `daily` · `weekly` · `biweekly` · `monthly` · `off` — how often the system nudges the user to add an entry                             |
| `entries`            | Entry[]         | Ordered list of entries, newest first                                                                                                  |

---

## Entry

Each entry is one capture session — one moment in the process of the project.

| Field         | Type         | Description                                    |
|---------------|--------------|------------------------------------------------|
| `id`          | string       | Unique identifier                              |
| `created_at`  | date         | Date and time of the capture                   |
| `capture`     | Capture (optional) | The raw capture — voice recording or written note |
| `reflection`  | Reflection   | The AI-processed output                        |
| `attachments` | Attachment[] | Files, images, and links added to this entry   |
| `status`      | enum         | `draft` · `saved` · `published`                |

### Capture

| Field              | Type   | Description                                      |
|--------------------|--------|--------------------------------------------------|
| `type`             | enum   | `voice` · `text`                                 |
| `duration_seconds` | number | Length of the recording — voice captures only    |
| `text`             | string | Written content — text captures only             |

### Reflection

| Field                | Type              | Description                                                   |
|----------------------|-------------------|---------------------------------------------------------------|
| `sharpened_text`     | string            | AI-rewritten version of the transcript                        |
| `follow_up_question` | string            | The one question the AI asked                                 |
| `follow_up_response` | string (optional) | The user's answer — voice transcript or typed text            |
| `case_study_draft`   | string            | AI-assembled draft built from transcript + follow-up response |

### Attachment

| Field      | Type              | Description               |
|------------|-------------------|---------------------------|
| `id`       | string            | Unique identifier         |
| `type`     | enum              | `figma` · `link` · `file` · `audio` |
| `url`      | string            | File URL or external link |
| `caption`  | string (optional) | User-written description  |
| `added_at` | date              | When it was attached      |

---

## Example

**Project: Meridian Brand Identity**
- Created: 2026-04-10
- Last updated: 2026-05-08
- Excerpt: "The real work was getting the founders to agree on what their company stood for."

**Entry 1** — 2026-04-10
- Title: "First delivery — why it took longer than the brief"
- Capture: 58 seconds
- Transcript: "The Meridian brand identity work was harder than I expected because the brief changed twice midway through..."
- Sharpened text: "The Meridian brand identity work was harder than I expected because the brief changed twice midway through. I kept refining the typography system thinking that was the deliverable, but the actual problem was helping the founders agree on what their company stood for..."
- Follow-up question: "You mentioned the brief changed twice. Was that the hardest part, or was something else?"
- Follow-up response: "Honestly the hardest part was the second brief change, because by then we had already presented to the board."
- Attachments:
  - `image` — final logo lockup export
  - `image` — typography system overview
  - `link` — Figma file (view only)

**Entry 2** — 2026-05-08
- Title: "Retrospective — one month after delivery"
- Capture: 42 seconds
- Transcript: "Looking back, I think the client relationship was the actual deliverable..."
- Attachments:
  - `image` — before/after brand comparison
