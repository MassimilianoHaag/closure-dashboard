# Discarded Ideas — Four Behavioral Mechanisms

**Owner:** Both
**Status:** Rejected (kept as documented alternatives)

After rejecting the payment lock mechanism, we deliberately brainstormed four other behavioral mechanisms that would fit the brief and the user pain we cared about (creative professionals stuck between intent and action). We considered each seriously and ultimately chose Closure over all of them.

Each one was a legitimate hackathon product. We document them here so that if Empathize challenges Closure, we have known alternatives we've already evaluated.

---

## Mechanism 1 — Lower the bar so far it's embarrassing not to start

**The thesis:** Procrastination dies when the first action is so trivial that *not* doing it would feel ridiculous. Direct from BJ Fogg's *Tiny Habits*. "Open the document — don't write anything, just open it." The user almost can't refuse.

**Differentiating angle:** Most habit apps let the user set the bar. Perfectionists are terrible at this — they negotiate themselves into bars that are still too high, then fail. The AI's job would be to push the bar *lower than the user would set for themselves.* When the user says "I'll write 500 words," the AI says "No. One sentence. Start there."

**Why we didn't pick it:** Tiny Habits is a well-known concept, and "Tiny Habits but with AI" sounds derivative. To survive the brief's anti-generic test, we'd need a very sharp execution. Closure's *closing ritual* framing is more original.

**When to reconsider:** If we discover during Empathize that creative professionals describe the problem primarily as "I can't make myself start" rather than "I never get around to it," this mechanism is the natural pivot.

---

## Mechanism 2 — Body-doubling / AI parallel presence

**The thesis:** It's easier to do a thing when someone else is doing a thing nearby. ADHD community has known this for decades; Focusmate built a real business on it. The presence of another mind, even silent, lowers the cost of starting.

**Differentiating angle:** The AI as *witness*, not coach. Not "are you doing it right?" but "I'm watching you do this thing you said you'd do, and that matters." The witnessing itself is the product. This fits emotion-regulation directly — loneliness is the emotion the user is regulating by avoiding the task.

**Why we didn't pick it:** Highest execution risk of the four. The entire product is *the feeling of someone being there*, which is the hardest thing to demo in a 10-minute pitch. Also genuine risk of feeling parasocial or pathetic if not designed with extreme care.

**When to reconsider:** If the prototype's capture moment doesn't feel emotionally weighty enough, adding a "witness" element from this mechanism could deepen it without changing the core concept.

---

## Mechanism 3 — Remove the choice

**The thesis:** Decision fatigue kills intent. The user knows they "should work on their portfolio" but sitting down means 47 micro-decisions: which project, which photo, which tone. Each decision is an opportunity to defer. The product pre-decides everything and the user just executes.

**Differentiating angle:** Most design culture worships user autonomy. Designing *against* it — for users who explicitly don't want agency in this moment — is a thesis a jury would remember. *"Right now, you're going to write the opening paragraph of Project X. Eight minutes. Here's the prompt. Go."*

**Why we didn't pick it:** Polarizing. Some users will love it, others will bounce. Also: how does the AI *know* what to pre-decide? It needs context the user hasn't given it yet, which is itself a friction. The mechanism's theoretical foundation is the weakest of the four.

**When to reconsider:** If Pass 2 testing shows users freezing at the gallery stage (which projects to publish, in what order), this mechanism could power the publish flow specifically.

---

## Mechanism 4 — Reframe the action as a different identity

**The thesis:** The hardest part of doing a thing isn't the thing — it's *being the kind of person who does the thing.* "I need to write a case study" forces the user to be writer, analyst, self-promoter, designer simultaneously. Any of those identities might be the one they're afraid of.

**Differentiating angle:** The product never lets the user "write a case study." Instead: *"Forget the portfolio. Tell me about a project you're proud of, like you're telling a friend at dinner."* The user talks. Later, the AI shows them: *"Here's what you said. That's a case study. You just wrote one."* The reframe is the product.

**Why we didn't pick it:** Too close to Closure. Both involve "talk about your work, AI structures it into a case study." The difference (Closure captures at the moment of completion; this mechanism reframes the act of writing about old work) is real but would be hard for a jury to perceive in a 10-minute demo.

**When to reconsider:** Honestly, this mechanism is already *partially inside* Closure. The 60-second voice capture *is* an identity reframe — it's "tell me what happened" instead of "write a case study." We absorbed the best part of Mechanism 4 into Closure without naming it.

---

## Summary of the comparison

| Mechanism | Fit with brief | Originality | Demo strength | Final verdict |
|---|---|---|---|---|
| Closure (chosen) | Strong | High | High (60-second moment is visible) | **Selected** |
| Lower the bar | Strong | Medium (Tiny Habits is known) | Medium | Reserve |
| Body-doubling | Strong | Medium (Focusmate exists) | Hard to demo | Reserve |
| Remove the choice | Medium | High (counter-intuitive) | Demo-friendly | Backup |
| Reframe identity | Strong | Medium | Hard to distinguish from Closure | Absorbed |

---

## What we kept from the exercise

Generating four alternatives wasn't theater — each forced us to articulate something Closure had to be better at. Specifically:

- Mechanism 1 made us insist that Closure's first action be *small enough that perfectionists can do it*. (Hence 60 seconds, voice, three questions.)
- Mechanism 2 made us think about Closure's *emotional* register — that capture should feel like being heard, not interrogated.
- Mechanism 3 made us defensive about Closure's *decision load* — we'll watch for places where the user has too many choices and trim them.
- Mechanism 4 made us realize Closure's *reframe* is the move "tell me what happened" instead of "write a case study" — and we should keep that language explicit in the UI.

Each mechanism left a fingerprint on Closure. That's what good divergent thinking does — it improves the chosen idea even when the alternatives are set aside.
