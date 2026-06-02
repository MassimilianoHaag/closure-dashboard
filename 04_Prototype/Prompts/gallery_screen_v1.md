# Figma Make Prompt — Gallery Screen v1
*Paste everything below this line into Figma Make.*

---

**Global constraints — apply to every frame without exception:**
- Accent `#3E322A` (espresso brown): one instance per frame, single highest-signal element only. Never as a ring, frame, circle enclosing another element, or background. Text-weight or single-element only.
- No pure black (#000000) or pure white (#FFFFFF) anywhere.
- No neon, no AI gradients, no purple, no glow effects.
- Register integrity: this screen is fully parchment register. Do not introduce dark surfaces within any frame.
- Piazzolla (Google Fonts, variable serif): project name headlines only. Inter (Google Fonts, variable sans): all UI chrome, body text, captions, CTAs.
- No metrics or counts near case study content. No view counts, word counts, or progress bars.
- Empty state copy: inviting, not instructional. "Your first capture lives here" — not "Add your first project."
- Generous whitespace. Err toward more breathing room between elements.

---

**What Closure is:** Closure is a 60-second voice capture tool for designers. A designer who just shipped a project speaks for sixty seconds; the AI mirrors their words back sharpened and asks one follow-up question. Over months, the gallery becomes a portfolio they never had to "work on." The Gallery is where that portfolio lives — a private collection of documented work, not a dashboard.

**The user:** Mara Santos, product designer, 29. Portfolio untouched for eighteen months. Her tagline: *"I do good work. I just can't write about it."* Her success state: four months in, six updated case studies in this gallery — each one built from a 60-second voice capture, none of them "worked on."

**Parchment visual register — apply exactly:**
- Background: `#EFEBE4` (parchment cream)
- Primary text: `#3A3D40` (deep charcoal)
- Accent: `#3E322A` (espresso brown) — one instance only, per global constraints above
- Typefaces: Piazzolla for project name headlines; Inter for all other text

**Three frames — one each:**

**Frame 1 — Gallery Populated, Variant A — Editorial list.** Single centered column, approximately 680px wide on a 1440px canvas. Each case study is a stacked text block: project name in Piazzolla (medium-large, not display-scale), capture date as a small Inter caption, one-sentence excerpt in Inter body. Generous vertical gap between entries. The list reads like a magazine index — you can scan and feel the weight of the collection. Entry CTAs ("Record now" / "Create project") as two small equal-weight Inter text links at the top of the column. Use these six entries as placeholder content:
1. *Meridian Brand Identity* — "We ran three rounds of territory work before anyone drew a logo — which is the part I'm most proud of." — March 2026
2. *Checkout Flow Redesign* — "The original flow had eleven steps; we got it to four without losing a single compliance field." — February 2026
3. *Design System v2* — "The biggest win was getting engineers to stop writing one-off components." — January 2026
4. *Wayfinding System — Transit Client* — "The constraint was illiteracy rates; the solution was almost entirely color and shape." — December 2025
5. *Mobile Onboarding Overhaul* — "We killed the tutorial and activation went up." — November 2025
6. *Annual Report Layout* — "Two weeks, eighty pages, one revision round — the brief was the design." — October 2025

**Frame 2 — Gallery Populated, Variant B — Card grid.** Three-column card grid on a 1440px canvas. Each card: project name in Piazzolla, capture date in Inter caption. No excerpt visible at card level. Cards are compact — the density is intentional; you can see the whole collection at a glance. Use the same six project names as Frame 1 (dates only, no excerpts on cards). Entry CTAs at top right as two small Inter text links. The gallery reads as a collection of artifacts, not a list of documents.

**Frame 3 — Gallery Empty State.** Centered layout, vertically centered on the canvas. One Piazzolla headline: "Your first capture lives here." Two equal-weight Inter CTAs directly below, side by side: "Record now" and "Create project." Nothing else — no illustration, no subheading, no explanation. The space itself communicates the promise. The espresso accent (`#3E322A`) applies to whichever CTA is considered the primary action (your call — or apply to neither and leave both in charcoal).

**Viewport:** Desktop-first, 1440px wide. Add a brief annotation on each frame: for 375px mobile, the list collapses to full-width single column; card grid collapses to two columns; CTAs stack vertically below the headline.

**Output:** Three frames side by side — "Gallery — Populated A (List)", "Gallery — Populated B (Grid)", "Gallery — Empty State".
