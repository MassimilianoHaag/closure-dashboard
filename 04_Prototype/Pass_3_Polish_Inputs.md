# Pass 3 Polish Inputs

Running list of polish items accumulated during Pass 2 build. Each item is a known concern that wasn't worth tuning during Pass 2 (the goal there was working screens), but should be evaluated with fresh eyes during Pass 3.

---

## Recording screen

- **Word reveal interval:** 180ms. May feel slightly fast vs natural speech cadence — consider 200–250ms in Pass 3.
- **Fade-in duration:** 150ms per word. Likely fine, verify with fresh eyes.
- **Microphone icon size:** 40–48px range. May tune down to 36–42px if it reads as imposing.
- **AppBar height in idle-state centering** uses `calc(100vh - 80px)` — an approximation. Should be precise in Pass 3.

---

## Editable draft functionality (Pass 3 work)

The hover affordances on `/draft` (pencil icons on text content, × icons on images) are currently visual only — no actual edit functionality wired up. Pass 3 should implement either:

- **Path B:** edit mode toggle — one "Edit" button puts the whole draft into form mode
- **Path A:** inline editing — click any element to edit in place

Path B is simpler; Path A is more polished. Decide based on Pass 3 time budget.

---

## Editable draft — Pass 3 follow-ups

- Edits don't persist across navigation (live in component state only). Pass 3 should add localStorage or backend persistence.
- No "add image" functionality — only remove. Pass 3 needs an upload flow.
- The category label and role attribution are single-line TextFields with no validation; Pass 3 might add character limits or auto-formatting (e.g., enforce "Name · Role" format).
- The bullet list parsing uses plain line-break splitting; Pass 3 might add structured bullet management (drag-to-reorder, add bullet button, etc.).

---

## Synthesis loader (Pass 3 review)

The loader between `/reflect` and `/draft` is currently 2.5 seconds with 2 phrases. Pass 3 should evaluate:

- Whether the duration feels right (too short = unconvincing; too long = drags the demo)
- Whether the phrases work emotionally ("Listening…" then "Drafting your case study…")
- Whether to add more phrases for a longer, more contemplative loader (e.g., "Finding the through-line…")
- Whether a skip-on-tap would help on subsequent demo runs

---

## Home page / dashboard (deferred to Pass 3+)

The CLOSURE wordmark currently routes to `/recording`. In a future iteration, `/` should become a home/dashboard view for returning users — showing "Resume your last project" or "Latest drafts (last 3)" cards before defaulting to Recording. New users still see the empty Gallery; returning users get quick re-entry.
