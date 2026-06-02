# Empathize Stage — Synthesis
**Owner:** Max
**Status:** Final (stage complete)
**Date:** 2026-05-25
**Feeds:** Define stage — persona work, problem statement, HMW questions
**Sources:** Secondary research (11 sources), Survey Round 1 (n=5, internal designers)

---

## Section 1 — What we know about the user

- **Writing is the primary bottleneck — not gathering assets, not starting, not layout.** When creative professionals don't document finished work, the hardest part is articulating process and decisions in words. *(Primary: 4/5 named writing-related pain. Secondary: van Schneider, Tyler/Kubie, multiple sources independently.)*

- **Documentation gets deferred because the immediate cost outweighs the felt benefit in the moment.** The window of highest signal (just-shipped, fully-remembered, still emotional) is also the window of lowest motivation. Users move on; the moment passes. *(Secondary: Gamboa, concept framing. Primary: R4 — "I wanted to move on to the next thing.")*

- **The problem is widely felt and emotionally consistent.** Across unrelated sources, designers use words like "hate," "dreaded," "painful," "notoriously." It's not a niche pain. *(Secondary: multiple independent sources. Primary: 0/5 selected "I don't find it painful.")*

- **No existing tool captures work at the moment of completion.** Portfolio platforms (Behance, Semplice, Carbonmade) solve presentation. Cohort programs solve accountability. Nothing catches the moment. *(Secondary: competitive landscape section.)*

- **First-impression desirability for Closure's mechanic is a positive signal.** 4/5 survey respondents said they'd use the product as described. AI output quality is the predictable objection — two respondents raised it independently without prompting. *(Primary: Q8, Q9.)*

---

## Section 2 — The four pain drivers, ranked by evidence strength

### Strong — confirmed in both primary and secondary

**1. Writing / articulation as the bottleneck**
The single most consistent finding across both sources. Designers don't document because producing the words is hard, identity-threatening, and feels like a foreign skill. Closure's voice-capture mechanic targets this directly: the user speaks, the AI writes.

**2. Case study aversion specifically**
A more precise version of the writing problem. It's not writing in general — it's the specific genre of "explain your process and decisions to a stranger." Van Schneider called it "the most dreaded part." 4/5 primary respondents confirmed it behaviorally.

### Partial — confirmed in one source, present but unnamed in the other

**3. Work-of-the-work (the second production cycle)**
Secondary: clearly articulated by Gamboa — portfolio updates require re-gathering, re-cutting, re-narrating finished work; it's a new production run on old material. Primary: present but unnamed — R5 said "takes much time documenting each detail," R4 said "didn't know where to start." Respondents experienced it; they didn't label it. Treat as real but don't over-rely on this framing in personas.

**4. Emotional avoidance / exhaustion**
Primary: R1 said "it's a type of task I just don't like to do"; R2 said "exhaustion" in one word. Secondary: framed as emotion-regulation — procrastination as avoidance of an aversive task, not laziness. The two sources describe the same thing in different registers. Neither fully explains it on its own.

### Untested — hypothesized, no primary validation

**5. Perfectionism / identity stakes**
Secondary: strong, multi-source, CBT-backed. Clinical literature links perfectionistic concerns directly to procrastination and avoidance. Primary: completely absent — zero respondents used perfectionism or identity language in open-text answers. *Do not make this a load-bearing claim in personas without further validation. Most likely explanations for the gap: internal/employed sample has lower portfolio-identity stakes than freelancers; Q6's operational framing primed logistical answers; sample too small to surface a minority pattern.*

**6. "Not enough yet" trap**
Secondary only: van Schneider's "why update my portfolio if I don't even like my work?" Primary: not probed, not mentioned. Untested.

---

## Section 3 — The contested assumption

**The assumption:** Closure's core mechanic depends on a discrete "done moment" — the instant a project ships — as the capture trigger. The concept was designed around that window.

**What challenged it:** 2 of 5 primary respondents said their work has no clear done moment — it ships gradually or in phases. 0 respondents said "yes, that's the point" when asked whether timing would matter. 2 said "maybe, decompress first." 1 said they'd procrastinate regardless of when asked.

**Current position:** The capture trigger should be user-initiated, not event-triggered. The user decides when "done" is — they open the app when they feel finished with something, not when an external event fires. This is less elegant than the original vision but more honest about how creative work actually ships.

**What this doesn't resolve:** The right unit of capture is still undefined. Is the user capturing a whole project, a phase within a project, a key decision, or a milestone? The answer determines what the capture prompt says, how the gallery is structured, and how the portfolio assembles itself over time. This is the single most important open question Define must answer before wireframing can start.

---

## Section 4 — What Define stage starts with

**Audience:**
- Primary: designers (UX, product, brand/visual) — validated in primary research
- Deferred: architects — secondary research suggests a distinct audience with heavier, more formal portfolio requirements; no primary data collected yet; build a secondary persona only if time allows

**Pain points safe to build personas around:**
- "I have the work but I can't write about it" — writing / articulation as bottleneck (fully triangulated)
- "Documenting feels like starting a second project on something I already finished" — work-of-the-work (partial, handle with care)
- "I close the laptop and tell myself I'll do it later" — deferred documentation / motivation gap (primary + secondary)

**Pain points that need more primary validation before personas lean on them:**
- Perfectionism / "it wasn't good enough to show" — secondary strong, primary silent; don't build a persona around this unless a follow-up interview surfaces it

**Assumption Define must test or commit to:**
Does the primary user do bounded, project-based work with a recognizable done moment — or do they work in continuous delivery? The answer determines the trigger mechanic and scope of the prototype. A hackathon prototype cannot serve both. Commit to one.

**Open questions, one per major decision:**
- *Trigger:* What is the right unit of capture — project, phase, decision, milestone?
- *Output quality:* What does the user need to see (or be able to do) in order to trust the AI-generated draft?
- *Architect persona:* Is there time to validate this with even one interview before Define closes?
- *Repeat use:* What makes the ritual stick after capture #1? (No data on this yet.)
