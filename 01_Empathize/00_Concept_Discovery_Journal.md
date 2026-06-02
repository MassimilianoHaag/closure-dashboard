# Concept Discovery Journal

**Owner:** Both
**Status:** Final (pre-kickoff phase)
**Authored:** Max, with AI assistance, before kickoff. Documented here so Guz can understand the full reasoning behind every concept decision.

---

This is the long-form narrative of how we arrived at Closure. It is intentionally exploratory — written the way real design thinking actually moves, with detours, pressure-tests, and reversals. For a tighter, presentation-ready synthesis of the same journey, see `03_Ideate/00_Concept_Definition.md`.

The two ideas we explicitly considered and rejected are documented in `04_Ideate/Discarded_Ideas/`.

---

## Starting point

The hackathon brief asks us to design a digital product that bridges the gap between **intent and a concrete action in the moment**. Not reminding, not motivating — actually helping users *start and continue*. The brief frames this as a UX problem, not a discipline or industry problem.

Max's pre-kickoff context was unusual: he had just given a 70-slide talk on procrastination and building UX/UI portfolios. The talk's core thesis (drawing on Pychyl and Sirois) was that **procrastination is an emotion-regulation problem, not a time-management problem.** Four drivers: irrational beliefs, perfectionism / fear of failure, anxiety / catastrophizing, and feeling overwhelmed.

The talk targeted designers paralyzed by their own perfectionism — people who knew they should build a portfolio but couldn't start. The hackathon's "intent → action" framing landed on top of this existing thinking like a glove.

---

## First instinct: creative professionals and the portfolio problem

The initial idea came from Max's own observation: creative professionals (designers, architects) chronically fail to document their work. Two reasons: the work dynamic itself (so focused on doing the work that they never document what's already done) and the work to come (always more urgent than reflection on what's past).

A portfolio is the canonical "intent never becomes action" artifact for creatives. Everyone says they should update theirs. Almost nobody does until they need a new job — and by then it's too late.

We sat with this and asked: *what exactly is the intent-to-action gap for creatives building portfolios?*

It's not one gap. It's six:
1. Recover the artifacts (find files, screenshots, links)
2. Remember the context (problem, role, constraints, outcome)
3. Decide what to show (which 4–6 projects)
4. Write the narrative (the dreaded case study)
5. Design the presentation
6. Publish it

The brief warns specifically against "trying to solve too many scenarios" and "solutions that don't focus on the first action." So the question became: **which one of those six is where intent actually dies?**

Steps 5 and 6 are not the answer — designers love those parts. They procrastinate *into* them. The death happens earlier: steps 1 and 2. By the time the user sits down to build the portfolio, the memory of why the work mattered has decayed. The case study feels like archaeology, not storytelling.

---

## First concept draft: capture-in-the-moment

This led to a first concept: a "capture-in-the-moment" companion that turns the act of *finishing a project* into the first portfolio action.

The first action would be: answer three voice questions the day you ship something. Not "build your portfolio." Not "write a case study." Just: *"You just shipped. Tell me in 60 seconds — what was the problem? What did you try? What worked?"*

The AI would assemble these micro-captures into draft case studies. The portfolio would build itself in the background. When the user eventually needed it, the artifacts already existed — they just had to curate.

This mapped cleanly to the talk's diagnoses:
- Emotion regulation, not time management → capture at peak emotional investment, not weeks later when dread has set in
- Una victoria por día → each capture is a tiny complete win
- Perfectionism → voice note, not polished page; AI handles polish later
- Going to bed with the task done → the project closes the same day it ships

We then made three structural decisions:
1. **The intent-to-action gap to solve:** capturing work right after finishing it, so case studies write themselves
2. **The target user:** both designers AND architects, framed as "creative professionals"
3. **Prototype scope:** end-to-end mini-product (capture → assemble → publish), not a single screen

---

## The critical pressure-test: what's the differentiating incentive?

We then asked the most important question of the whole process: *what can this app tell me that I don't already know? Why would I take the first step using this app?*

The answer was uncomfortable. The version of the product as drafted didn't fully answer the brief's guiding question — *"why hasn't the user acted yet, and how does your solution change that?"* It promised a *deferred* benefit ("you'll have a portfolio later"). But the talk's whole thesis is that deferred benefits don't beat present discomfort. A product whose payoff is "in six months you'll have a portfolio" loses to "I'll just close the laptop."

This was a real flaw. Three angles emerged for fixing it.

**Angle 1: emotional, not utilitarian.** Compete on feeling, not efficiency. The product's promise becomes *"you don't have to carry this project around in your head anymore. Tell me what happened, and I'll hold it for you."* The capture isn't a documentation chore — it's a *closing ritual*. The talk's image of "going to bed with the task done" maps directly. The portfolio becomes a byproduct; the actual product is **cognitive closure.**

**Angle 2: something the user can't get alone.** An AI that's heard you talk about your work can tell you things you genuinely don't know:
- Patterns across your captures ("you've described 'stakeholder pushback' in 4 of 7 projects")
- Tonal shifts ("you sound more confident than six months ago")
- Self-positioning ("based on six captures, here are three sentences that describe you as a designer")

This is pattern recognition across the user's own work. A mirror they didn't know they needed.

**Angle 3: same-session payoff.** The first action has to feel rewarding *before the user closes the app*. Not in six months. Possible mechanisms: an instant draft of polished prose; a reflective insight ("it sounds like the real win here was alignment, not visual design — is that right?"); a visible gallery growing.

The reframe that landed: **a reflective closing ritual for creative work, which happens to leave behind a portfolio.** The differentiating incentive is three-layered:
1. *Right now:* the relief of putting the project down with structure, not exhaustion
2. *Within seconds:* a small AI reflection that tells you something about your own work
3. *Over time:* a growing body of evidence of who you are as a professional — without ever "working on your portfolio"

---

## The cold-start problem

The "AI as mirror" angle is the most differentiating part of the product, but it only works after the user has several captures. A single capture can't show patterns. The mirror needs ~5+ captures to feel real.

This is a problem for the first-time user *and* for the hackathon demo. The jury will see capture #1. If the mirror doesn't work in the demo, the whole differentiator collapses on stage.

We resolved this by deciding the AI does *two* things after every capture, both of which work from capture #1:

1. **Sharpened reflection.** Take what the user just said and give it back slightly better-articulated. Not a transcript, not a summary — a one-paragraph mirror that makes the user think *"yes, that's what I meant, but said cleaner."* This is mirror-as-attention. It needs only the current capture as input.

2. **One good follow-up question.** Not three. Not a form. One. Targeted at the thing the user *almost* said but didn't quite. The user feels heard (reflection) and seen (follow-up), and gets to add the thing they were going to leave out.

Cross-project pattern recognition becomes a *bonus* layer that emerges later, not the load-bearing promise. The first capture stands on its own.

---

## The detour: payment lock as commitment mechanism

We then deliberately considered a completely different product, to test our conviction.

The alternative: a wellness app where users pay for a year up front, and get 50% back if they complete the year. Money as the commitment device — a Beeminder/StickK family mechanism. The behavioral logic is sound (loss aversion is roughly 2x stronger than gain-seeking).

We surfaced three honest concerns:
1. It solves *sustained behavior over a year*, not the *first action* the brief asks about
2. The business model depends on most users failing (~70% quit rate makes the math work)
3. Wellness is the most crowded app space possible

We tried to redirect the payment mechanic to a sharper target. "The difficult conversation you've been avoiding" emerged as a strong candidate: binary, brief, chronically deferred, with the *first action* being the conversation itself.

Max then stepped back and questioned the mechanic entirely. Several tensions surfaced:
- The mechanic works by *raising the cost of inaction* through punishment — which is a willpower amplifier, not an emotion-regulation tool
- It selects for users who already have financial slack and respond well to external pressure — the opposite of the perfectionist designer the talk was about
- It makes the AI almost decorative; the financial lock does the work, and AI shows up as a debrief at most

We acknowledged that the talk wasn't a constraint on the hackathon (the jury hasn't seen it), but the more substantive point held independently: **the payment mechanic puts money at the center of the intent-to-action moment, and asks the AI to assist around it. Closure puts the AI at the center.** For a hackathon judged on AI-powered UX, this difference matters.

The payment lock idea was rejected. Full reasoning in `04_Ideate/Discarded_Ideas/Payment_Lock_Mechanism.md`.

---

## The second detour: four alternative behavioral mechanisms

Before committing to Closure, we brainstormed four other mechanisms that would also fit the brief and the user pain:

1. **Lower the bar so far it's embarrassing not to start.** AI negotiates the user's commitment *down* below what they'd set for themselves.
2. **Body-doubling / AI parallel presence.** The product is the feeling of someone being there while you work.
3. **Remove the choice.** Benevolent authoritarianism — the AI pre-decides everything so the user just executes.
4. **Reframe the action as a different identity.** The hardest part of doing a thing is being the kind of person who does it. Change the identity, change the action.

Each had merits. Each fit the talk's thesis. Each could have been a hackathon product. But Closure had two advantages none of them matched:

- It was the **most original** of the set. "Capture-as-closing-ritual" is genuinely fresh; the others have stronger precedents (Tiny Habits, Focusmate, etc.).
- It built on Max's **unique authorial angle** without depending on it. The connection to the procrastination talk gave the concept depth without forcing the jury to know about the talk.

Full notes in `04_Ideate/Discarded_Ideas/Four_Behavioral_Mechanisms.md`.

---

## Locking the framing

Two questions remained: *what is the intent we claim to address*, and *how do we narrate the audience-vs-mechanism relationship in the presentation?*

**On intent:** Both "I want to document my own work" *and* "I want to show what I do" are true at once. Documentation is the private side, showing is the public side. They're two faces of the same coin. Naming both is more honest than picking one, and it broadens urgency (showing carries job-seeking energy that pure documentation doesn't).

**On audience-vs-mechanism:** We initially leaned toward leading with the mechanism (intellectually cleaner) but reversed to **audience-first** (dramatically stronger). The jury experiences pain before evaluating a solution; that's how stories work. The "too narrow" critique gets handled by *ending* the hypothesis with a generality clause ("the mechanism applies anywhere work has a clear 'done' moment") rather than opening with one.

**Mechanism name:** *"A closing ritual for finished work."* The word "ritual" is load-bearing — it signals a small repeated practice with emotional weight, not a tool. "Finished work" is concrete and prevents confusion about whether we mean to-dos or in-progress projects.

These three decisions locked the framing. The drafts of Slide 1 (Problem Statement) and Slide 2 (UX Hypothesis) follow directly from them and are in `03_Ideate/00_Concept_Definition.md`.

---

## Verifying against the brief's "what to avoid"

We checked Closure against the brief's four anti-patterns:

1. **Generic to-do list with AI** → Closure is the structural inverse. A to-do list captures things not yet done. Closure captures things just finished.
2. **Doesn't focus on the first action** → The first action is explicit: speak for 60 seconds, right now, before closing the laptop.
3. **Overly complex interface** → Three core flows, voice-first capture, simple reflection screen, grid gallery.
4. **Too many scenarios** → This is the soft spot. Closure focuses on creative professionals, not universal scenarios like the brief's examples ("I want to start running"). Defended by the audience-first framing: the mechanism is general, the audience is just the proving ground.

Closure passes three cleanly. The fourth is defensible with framing. Net: the concept fits the brief's anti-patterns.

---

## What we decided to do next

We agreed to use Design Thinking as the explicit process structure, with two streams running in parallel:
- **Stream A — Product process** (Empathize → Define → Ideate → Prototype → Test)
- **Stream B — Presentation** (assembled from Stream A artifacts in the final 2–3 days)

We agreed not to perform the process — to keep being honest if Empathize turns up something inconvenient (e.g., real users tell us they don't actually care about documenting their work), even if it threatens Closure.

We agreed to build a structured working folder *before* starting the work, with foundational documents and pre-kickoff process documentation, so Guz can pick up the project at full speed.

That folder is this folder. This document is part of the proof that we worked the process.
