# Global Constraints — All Closure Screens
*Paste this section at the top of every Figma Make prompt before screen-specific instructions.*

---

**Apply these constraints to every frame without exception:**

- **No decorative container shapes.** The espresso accent (`#3E322A`) must never appear as a circle, ring, oval, or frame enclosing another element. Accents are text-weight or single-element signals — a dot, a label, a thin underline. Not structural containers. Not backgrounds.

- **Accent rule (one per screen).** `#3E322A` espresso brown appears exactly once per frame, on the single highest-signal element. If nothing earns it, omit it entirely. Do not use it for decoration.

- **No pure black or pure white.** Background floors at `#3A3D40` (charcoal) or `#EFEBE4` (parchment). Text ceilings at `#EFEBE4` (on dark) or `#3A3D40` (on parchment). `#000000` and `#FFFFFF` do not appear anywhere.

- **No AI/SaaS gradient aesthetics.** No neon, no purple, no glowing orbs, no gradient text, no "listening…" spinners, no "powered by AI" visual language of any kind.

- **Register integrity.** Each frame is either fully in the dark register (`#3A3D40` background) or fully in the parchment register (`#EFEBE4` background). Do not mix registers within a single frame. The register flip is a screen-to-screen transition, not a within-screen gradient.

- **Typography discipline.** Piazzolla (Google Fonts, variable serif) for project headlines and emotionally weighted moments only. Inter (Google Fonts, variable sans) for all UI chrome, body text, captions, labels, and CTAs. Do not use Piazzolla for utility text.

- **Generous whitespace.** Whitespace holds content; it is not decorative. Err on the side of more vertical breathing room between elements. Dense layouts are wrong for this product.

- **No metrics or engagement counts near case study content.** No view counts, no word counts, no "X captures," no progress percentages. The gallery is a collection, not a dashboard.

- **Empty states: poetic, not functional.** Empty state copy should invite, not instruct. "Your first capture lives here" — not "Add your first project."

- **Static designs must communicate state.** If a screen's primary state depends on animation to be understood (e.g., "recording active"), include a secondary static signal (a status label, a text indicator) so the wireframe is readable without motion.

- **Default to lists over grids when content density is naturally low.** Card grids with sparse content leave unintentional blank space in the lower viewport. Use a list or feed layout when there are fewer than ~8–12 items. If a grid is required, design an intentional treatment for the unfilled area — a soft prompt, a CTA, or a clear visual boundary. Never leave the lower half of the viewport blank by accident.

- **No user name or account indicator in the nav.** Identity and authentication are deferred for Pass 1. Do not show a user's name, avatar, or account label in any nav chrome. The demo communicates who the user is contextually — the interface should not announce it.
  > **Pass 2 override (2026-05-29):** the user-name constraint is overridden for the runnable build. Pass 2 includes a small initials-only avatar (no visible name) in the top-right of the AppLayout. This honors the spirit of the original constraint (no chatty SaaS chrome) while providing the quiet identity signal the demo needs. The Pass 1 constraint still applies to any wireframes referenced in the iteration journey.

- **Outlined button label text must be solid, not muted.** In the dark register, the button outline is the structural signal; the text inside is the action label and requires full readability (`#EFEBE4`, no opacity reduction). Muting both the outline and the label text collapses the affordance entirely.

- **AI-suggested editable content uses ~40% opacity for the muted state.** At 50–60% opacity the suggested text reads as "same family as the surrounding labels." At ~40% it reads unambiguously as "placeholder content the user can replace." Use 40%, not 50–60%, for all AI-suggested field content.

- **The espresso accent (`#3E322A`) requires mass or a light background to read.** It works on: filled shapes (the recording-screen stop dot), button outlines or backgrounds, and parchment-register elements. It fails on: small stroked icons against the dark charcoal background — the luminance contrast between `#3E322A` and `#3A3D40` is too low. When designing dark-register screens, evaluate whether the espresso accent has the mass or contrast to actually signal. If it doesn't, use cream (`#EFEBE4`) for the primary interactive element and omit espresso from that screen entirely. This is the "omit rather than force" application of the accent rule.

- **Visual content sections need proportional mass to the text above them.** A few small thumbnails in a sparse layout read as accidental whitespace; a populated image grid that fills the available column width reads as a deliberate section. When designing screens where visuals support text content, default to fewer-but-larger images filling the column width, not many-but-smaller images that leave space unfilled.

- **Form-adjacent empty states are the highest drift risk against editorial register.** Figma Make and similar tools default to bordered rectangular drop zones because that pattern dominates SaaS UI training data. When writing prompts for editorial empty states (upload zones, drop areas, attachment sections), explicitly call out: "the empty zone should read as an invitation, not a form field — use whitespace and a quiet text label, not a bordered drop zone."

- **Espresso outlined buttons fail on dark register.** The thin border + label text in `#3E322A` on `#3A3D40` has near-zero luminance contrast — the same physical problem as a stroked espresso icon on charcoal. On dark-register screens, outlined buttons must use cream (`#EFEBE4`) for both border and label (as the Project Frame screen does). Espresso outlined buttons only work on parchment register, where contrast is sufficient (as the Case Study Draft Publish button does). The general rule: espresso requires either (a) a parchment background, or (b) filled mass with no thin outline (as the Recording stop dot has). Outlined dark, stroked icon dark — both fail.

- **Wireframes that only show populated states are incomplete.** Any screen with content sections (image attachments, galleries, lists, etc.) needs both the empty state and the populated state documented. Without the empty state, the interaction model — how content arrives, how it is added or removed — is invisible. Always document both states explicitly in the decision file, even if only one state was generated in Figma Make.
