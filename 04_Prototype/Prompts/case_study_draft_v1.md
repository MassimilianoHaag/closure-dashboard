# Figma Make Prompt — Case Study Draft Screen v1
*Paste everything below this line into Figma Make.*

---

**Global constraints — apply to every frame without exception:**
- **No decorative container shapes.** The espresso accent (`#3E322A`) must never appear as a circle, ring, oval, or frame enclosing another element. Accents are text-weight or single-element signals — a dot, a label, a thin underline. Not structural containers. Not backgrounds.
- **Accent rule (one per screen).** `#3E322A` espresso brown appears exactly once per frame, on the single highest-signal element. On this screen, the Publish action earns it. Do not use espresso anywhere else.
- **No pure black or pure white.** Background is `#EFEBE4` (parchment). Text floors at `#3A3D40` (deep charcoal). `#000000` and `#FFFFFF` do not appear anywhere.
- **No AI/SaaS gradient aesthetics.** No neon, no purple, no glowing orbs, no gradient text, no "powered by AI" visual language of any kind.
- **Register integrity.** This screen is fully in the parchment register (`#EFEBE4` background). No dark charcoal surfaces within any frame. No mixing registers within a single frame.
- **Typography discipline.** Piazzolla (Google Fonts, variable serif) for the case study title/headline and project name. Inter (Google Fonts, variable sans) for all body paragraphs, meta text, captions, labels, and controls. Do not use Piazzolla for utility text.
- **Generous whitespace.** Whitespace holds content; it is not decorative. Err on the side of more vertical breathing room between sections and controls. Editorial pacing, not productivity density.
- **No metrics or engagement counts near case study content.** No view counts, no word counts, no "X captures," no progress percentages.
- **Static designs must communicate state.** The draft state must be legible without animation — "Draft" status label in the meta header is the static signal.
- **Default to lists over grids when content density is naturally low.** If the visual support section has only 2-3 images, treat them as a compact horizontal row or small 2-column grid — never leave the lower visual support area half-blank by accident.
- **No user name or account indicator in the nav.** Do not show a user's name, avatar, or account label in any nav chrome.
- **Outlined button label text must be solid, not muted.** The Publish button's label text must be fully legible — same espresso color as the border, no opacity reduction.
- **AI-suggested editable content uses ~40% opacity.** This constraint does NOT apply to the case study text body. The case study text is the generated draft Mara is reviewing and editing — render it at full opacity. It is not a placeholder. Only apply ~40% opacity to genuinely placeholder or AI-suggested pre-edit content.
- **The espresso accent (`#3E322A`) requires mass or a light background to read.** On this parchment-register screen, espresso has full contrast against `#EFEBE4` and can carry the Publish button signal. This is the correct application of the espresso accent rule.

---

**What Closure is:** Closure is a 60-second voice capture tool for designers. The designer speaks; the AI mirrors their words back sharpened and asks one follow-up question. The Case Study Draft is the product's payoff moment — this is where Mara's 60 seconds becomes something she could actually publish. She reads the AI-drafted case study and decides whether it sounds like her or sounds like a press release. Her bar is not "perfect" — it is "something I can edit and ship." She needs to feel she can get to published in two small rounds of editing, not a rewrite.

This screen is also the first parchment screen after the dark capture sequence. The register flip is narrative: she entered a quiet private space to speak, and now emerges into a warm curated surface where the work lives.

**The user:** Mara Santos, product designer, 29. Tagline: *"I do good work. I just can't write about it."* She has just spoken sixty seconds, read a sharpened reflection, answered a follow-up question. Now she sees what the AI made of all that. If it sounds like a press release, she closes the app. If it sounds like a colleague articulated her work back to her — slightly better than she said it — she edits it twice and ships it.

**Parchment visual register — apply exactly:**
- Background: `#EFEBE4` (parchment cream — not pure white)
- Primary text: `#3A3D40` (deep charcoal — not pure black)
- Subordinate text (date, status, captions, muted labels): `#3A3D40` at approximately 45–55% opacity
- Publish button: espresso (`#3E322A`) for both border and label text — this is the only espresso element on the screen
- Thin horizontal rules: `#3A3D40` at low opacity (~20–25%), used as section separators only — not decorative borders around content blocks
- Nav: "Closure" in small spaced Inter caps, top left. Thin horizontal rule below. Nothing else. No user name, no account indicator.

---

**Three screen regions — top to bottom in all variants:**

**Region 1 — Meta header (small):**
Project name in Piazzolla, at a smaller scale than the case study title below. Below it: date and status in muted Inter at ~50% opacity. A thin horizontal rule below this header separates the meta region from the body content. The meta header is informational, not emotional — keep it compact and subordinate to the case study text below.

**Region 2 — Case study text body (the prose):**
The AI-drafted case study. A larger Piazzolla headline (the case study title, distinct from the project name above), followed by Inter body paragraphs. Full opacity — this is the draft Mara is reviewing, not a placeholder. The text should feel like it could be tapped and edited in place — not like static published content, not like a form field. Editorial line length, max-width ~680px. No box, no card, no container around the text — it sits directly on the parchment surface.

**Region 3 — Visual support section (below the text):**
A dedicated section, clearly labeled, visually distinct from the text body but consistent in register. The section begins with a small Inter label ("Visual support") and a thin horizontal rule above it. The section holds either:
- **Empty state:** A quiet invitation — small attachment/upload icon + Inter text link "Add visual support" — within a lightly dashed or subtly bordered zone. The dashed border must be very light (low opacity charcoal), not a heavy form-input appearance. The zone reads as editorial negative space with a quiet invite, not as a file-upload form element.
- **Populated state:** 2–3 image placeholder rectangles — neutral gray fills with appropriate aspect ratios (roughly 4:3 or 16:9). Displayed as a horizontal row or compact 2-column grid. Do not leave the section half-empty: 2 thumbnails fill the row; 3 thumbnails fill a compact grid. No file names, no captions, no size labels.

---

**Response controls — below the visual support section, full-width bottom area:**

Three controls in strict hierarchy:
1. **Publish** — the commitment action. Outlined button: thin espresso (`#3E322A`) border, transparent fill, espresso label text ("Publish"), solid (not muted). This is the highest-signal action; espresso earns its one appearance here.
2. **Save draft** — quiet Inter text link, charcoal at moderate opacity. Sits beside or just below Publish. Visibly subordinate to Publish.
3. **Discard** — very small muted Inter, off to the side or below the other two. Almost a footnote. It must exist but must not compete for attention.

Hierarchy reads: Publish > Save draft > Discard.

---

**Sample content — use in all three variants:**

*Project name (Piazzolla, meta-sized):*
Meridian Brand Identity

*Date and status (Inter, muted):*
Drafted May 12 · Draft

*Case study title (Piazzolla, larger than the project name):*
When the brief changes, the design isn't the problem

*Body paragraphs (Inter, full opacity, ~150–200 words):*

The Meridian brand identity work was harder than I expected because the brief changed twice midway through the engagement. I kept refining the typography system thinking that was the deliverable, but the actual problem was helping the founders agree on what their company stood for.

The hardest part wasn't a redesign — it was sitting in a meeting room while two founders argued about whether their company was "approachable" or "authoritative." Both, it turned out. The typography had to do both jobs without splitting in half.

By the time I delivered, the design felt like the easy part. The alignment conversations were where the real work happened.

*Visual support section label (Inter, meta-sized):*
Visual support

*Empty state invite (Inter, muted, inside the zone):*
Add visual support

*Populated state:* 2–3 neutral gray placeholder image rectangles, no labels.

---

**Three variants — desktop layout only, one frame each:**

**Variant A — Editorial single column.** All content in a centered single column, max-width ~680px, generous left/right margins. Top to bottom: meta header → thin rule → case study headline → body paragraphs → thin rule → "Visual support" label → empty upload zone (dashed low-opacity border, "Add visual support" invite inside) → controls. The screen reads as long-form editorial draft. This is the empty visual support state.

**Variant B — Story + visual gallery side-by-side.** Two-column layout. Left column (approximately 60% width): meta header, case study title, and body paragraphs. Right column (approximately 40% width): "Visual support" label, then 2–3 image placeholder thumbnails stacked vertically or in a compact grid. The story and visuals coexist spatially without hierarchy — they're co-equal parts of the case study. Controls (Publish, Save draft, Discard) span full-width below both columns, in a single footer row. This is the populated visual support state.

**Variant C — Stacked with strong section breaks.** Centered column (~680px max-width). Meta header → thin rule → case study title + body paragraphs → thin rule → "Visual support" section header → compact 2-column image grid with 2–3 placeholders → thin rule → controls. The visual support is a clear, distinct section — same column width as the text, not indented — distinguished by the section label and thin rules above and below, not by a box or background change. This is the populated visual support state.

---

**Viewport:** Desktop-first, 1440px wide. For each variant, add a one-sentence mobile annotation: at 375px, all layouts collapse to a single vertical column with the same section order; Variant B's side-by-side collapses to story above visual support below.

**Output:** Three frames side by side — "Case Study Draft — Variant A", "Case Study Draft — Variant B", "Case Study Draft — Variant C".
