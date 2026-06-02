# Research Triangulation
**Owner:** Max
**Status:** Draft
**Date:** 2026-05-25
**Purpose:** Contrast secondary research findings against primary survey data. Informs what's safe to assert on stage, what needs hedging, and what's still unvalidated before Define.

**Sources:**
- Secondary: `02_Empathize/Secondary_Research_Portfolio_Procrastination.md` (desk research, 11 sources)
- Primary: `02_Empathize/Interview_Notes/Survey_Round1_Synthesis.md` (Typeform survey, n=5, internal Slack)

---

## Section 1 — Triangulation Table

| Claim | What secondary said | What primary said | Verdict |
|---|---|---|---|
| **Writing is the bottleneck** | Van Schneider: case study writing is "the most dreaded part." Tyler/Scott Kubie: writing is hard even for writers. Designers treat it as a foreign skill. | 4 of 5 selected writing-related pain: "writing the actual words" (2) or "articulating the process and decisions" (2). Asset gathering was only 1. | **Confirmed** |
| **Perfectionism / identity stakes** | Strong across multiple sources. Creative Bloq: designers "approach it like a masterpiece." Van Schneider: "why update if I don't like my work?" Stella Guan: procrastination compounds. CBT literature backs it as a clinical pattern linked to avoidance. | Not named once in open-text Q6. No respondent used language like "wasn't good enough" or "wanted it to be perfect." | **Untested — silent in primary** |
| **Work-of-the-work problem** | Tirso Gamboa: portfolio updates require a second production cycle — re-gather, re-cut, re-narrate. Described as an operational burden distinct from the creative work itself. | Partially present. R5: "takes much time documenting each detail." R4: "didn't know where to start or how to document in an effective way." Neither named it as explicitly as Gamboa's framing. | **Partial** |
| **Case study aversion** | Van Schneider: case study writing is specifically "the most dreaded part" — not the visual design or assembly. | "Articulating the process and decisions, not just the final output" was selected by 2 respondents. "Writing the actual words" by 2 more. Combined: the case study writing problem confirmed behaviorally, even if respondents didn't use that term. | **Confirmed** |
| **"Not enough yet" trap** | Van Schneider: designers wait until they have work they're proud of, and never feel they do. The bar keeps moving. | Not mentioned by any respondent in Q6. Perfectionism and identity language entirely absent. | **Untested — silent in primary** |
| **Timing / moment-of-completion assumption** | Implied by concept framing (document before memory decays) but not directly validated by secondary sources — it's our hypothesis, not a cited finding. | 0 respondents said "Yes — that's the point." 2 said "maybe, decompress first." 1 said they'd procrastinate regardless of timing. 2 said their work has no clear done moment. | **Reframed — not contradicted outright, but significantly complicated** |
| **Architecture angle** | Less confessional than designers; more operational and formal. Portfolios are heavier (20–40 pages) and often required for licensure. Emotional language largely absent in architecture writing. | No architects responded. The entire primary sample is UX/product designers and one design manager. | **Untested — no primary data** |
| **Concept desirability** | Not tested in secondary (no pre-test). Competitive landscape shows the space is uncontested — but uncontested doesn't mean wanted. | 4 of 5 would use the product. 1 has doubts. Nobody said "not for me." | **New primary finding — no secondary comparison** |
| **AI output quality as an objection** | Not predicted or surfaced in secondary research. | Two respondents independently flagged it in Q9: "how can I be sure the result is good?" and "will it look good, will I be able to make changes?" | **New primary finding — a surprise** |

---

## Section 2 — What This Means

### Slide-grade findings
Claims solid enough to defend on stage without hedging:

1. **Writing is the bottleneck, not assembly.** Both sources agree. 4 of 5 primary respondents named writing-related pain as the worst part. Secondary sources confirm it from multiple independent directions. Closure's voice-capture-plus-AI mechanic directly addresses this — and we can say so without qualification.

2. **The problem is real and widely acknowledged.** Secondary sources provide multiple credible witnesses using striking emotional language. The primary sample, while small, shows no one selecting "I don't find it painful" (0 of 5). Between secondary evidence and primary signal, the existence of the problem is the safest claim we have.

3. **Concept desirability is a reasonable pre-test signal.** 4 of 5 respondents said they'd use it in its described form. This isn't a validated market signal, but for a hackathon pre-test it's usable. Caveat it appropriately: *"Early pre-test with 5 designers — directional, not conclusive."*

4. **The output quality objection is predictable and answerable.** Two respondents named it independently, which means the jury may raise it too. We have a prepared answer: the output is a *starting draft that beats the blank page*, not a finished case study. This is honest and positions the product accurately.

### Tensions worth being honest about

**Tension 1 — The perfectionism gap**

Secondary research cited perfectionism as a dominant, clinically-backed driver. Our primary survey found zero evidence of it — no respondent named it, hinted at it, or used identity language in their open-text answers.

Possible explanations:
1. **Sample size and selection.** Five people is not enough to see a pattern that may show up in 20–30% of the population. The absence of a finding isn't evidence of absence.
2. **Social context muted it.** Even with explicit permission language in Q6, respondents in an internal company Slack channel may be less likely to admit "my work isn't good enough" to colleagues. Anonymous and public (blog posts) is very different from anonymous and internal.
3. **Population mismatch.** Secondary sources skew toward freelancers and early-career designers for whom the portfolio is more identity-laden. Our internal respondents are employed — they may feel less existential pressure about their portfolio.
4. **The Q6 framing primed operational answers.** "What got in the way?" invites logistical explanations. A question like "Has a project ever felt too unimpressive to document?" would probe perfectionism more directly.

**Don't paper over this.** If perfectionism is real but our primary research didn't surface it, either our question design missed it or our sample doesn't represent the target user. Both are worth knowing before we build personas that lean on it.

**Tension 2 — The timing assumption**

The core mechanic of Closure is that capturing in the moment of completion is distinctively better than capturing later. Secondary research doesn't directly validate this — it's our own hypothesis. Primary research tested it directly and produced a weak signal: nobody confirmed the timing strongly, two respondents said their work lacks a discrete done moment, and one said timing is irrelevant because they'd procrastinate regardless.

Possible explanations:
1. **Sample is the wrong user type for this.** Product designers in agile/continuous-delivery environments genuinely don't have a single ship moment. Our concept targets project-based creative work (finished campaigns, delivered buildings, shipped products with a clear v1). The survey may have hit the wrong respondent profile.
2. **"Decompress first" is compatible with the mechanic.** Two respondents said same-day could work if they had a moment to decompress. A 2–4 hour post-ship window may be better UX than "the instant you click send" — and still captures memory at high fidelity.
3. **The framing of Q10 may have been too absolute.** "In that specific window" is a strong claim. A softer framing ("within a few hours of finishing") might have gotten more positive responses.

This tension doesn't invalidate the concept, but it means the trigger mechanic needs design work before wireframing. **Don't assume the capture happens the second someone ships.**

### Gaps

1. **No architect data at all.** The entire primary sample is UX/product designers. Secondary research specifically identified architects as a distinct audience with a different emotional profile. If the Define stage produces an architect persona, it will be built on secondary research only — no primary validation.

2. **Perfectionism and the "not enough yet" trap are unvalidated in primary research.** These were two of the four drivers in our diagnosis. One survey with 5 respondents that didn't specifically probe them is not enough to confirm or rule them out.

3. **No data on how the output quality concern resolves.** Respondents raised it; we don't know what would satisfy it. Would seeing a sample output settle it? Would the ability to edit freely? This needs to be probed — in a follow-up interview or in prototype testing.

4. **No data on repeat use / habit formation.** Concept pre-test measured first-impression desirability, not whether someone would do this every time they ship. The gallery becoming a portfolio over months depends on repeated captures — and we have no evidence yet that the ritual would stick.

---

## Section 3 — Implications for Define Stage

**Safe to build on:** Writing is the bottleneck, and Closure's voice-capture mechanic directly addresses it. This claim is triangulated from two independent sources and is the strongest foundation the persona pain points should rest on. Leads with "I'm not a writer" as an identity line are grounded.

**Needs more validation before building on:** The perfectionism and "not enough yet" drivers should not be load-bearing in the persona without either a follow-up interview that surfaces them directly, or a deliberate decision to accept that they may not apply to the employed-designer sample we can actually reach. If the jury asks "why wouldn't they just document their work?" and our answer is perfectionism, we need primary evidence, not just secondary.

**Needs a design decision, not more research:** The timing mechanic. The "no clear done moment" pattern (2 of 5 respondents) is not going away with more interviews — it's a structural feature of how some creative professionals work. Define needs to decide whether Closure targets only project-based creative work (architects, brand designers, freelancers with clear deliverables) or whether it also needs a different capture trigger for continuous-delivery contexts. Trying to serve both in a hackathon prototype is likely scope creep.

**One specific question Define must answer:** *Who exactly is the primary user — and does their work have a discrete "done" moment?* The answer determines the capture trigger mechanic, which determines the entire first-use experience. Everything downstream of Define depends on getting this sharp.
