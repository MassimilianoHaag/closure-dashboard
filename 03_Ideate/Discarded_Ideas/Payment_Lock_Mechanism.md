# Discarded Idea — Payment Lock Mechanism

**Owner:** Both
**Status:** Rejected (kept as documented alternative)

This document records a concept we considered seriously and chose not to pursue. We keep it because (a) Guz should understand why this isn't our product, and (b) explicit documentation of considered-and-rejected alternatives is one of the strongest signals of process honesty for the hackathon jury.

---

## The concept

A product where users pay for a year up front to commit to a goal (originally framed as health/wellness — workouts, eating habits, "green life"). If they complete the year, they get 50% back. If they don't, they lose the full payment.

The behavioral logic is well-established (Beeminder, StickK family of products): loss aversion is approximately 2x stronger than gain-seeking, so the threat of losing money you've already paid is a more powerful motivator than the promise of earning a reward you don't yet have.

We then tried to redirect the same mechanic to a sharper target — "the difficult conversation you've been putting off" — where the first action is binary, brief, and chronically deferred by emotion rather than time.

---

## Why we rejected it

### Reason 1 — It addresses a different problem than the brief

The brief asks about the gap between intent and **first action**. The payment lock mechanic is structurally about *sustained behavior over time*. It works by raising the stakes of future inaction; it does not particularly help you take the first step today.

We tried to fix this by reframing the *paying itself* as the first action. That works conceptually, but it pushes most of the actual product complexity outside the moment the brief is asking us to design.

### Reason 2 — The business model depends on user failure

Honest math: if everyone who completes gets 50% back, the company keeps 50% from completers and 100% from quitters. With realistic completion rates (~20–30% for behavior-change apps), the business needs ~70% of users to fail to be profitable.

A sharp juror could fairly point out: *"Your product needs people to fail to be profitable. That's the opposite of what you claim to be doing."* This is a real ethical problem with money-as-commitment apps generally, and we'd have to defend it on a hackathon stage.

### Reason 3 — The mechanism makes the AI decorative

In the final shape of this concept, the financial lock does the behavioral heavy lifting. The AI's role shrinks to a debrief or rehearsal layer — useful, but not load-bearing. For a hackathon that explicitly rewards AI-powered UX, this is a real weakness. The jury could reasonably say: *"This is a commitment-device clone with a journaling feature bolted on. Where's the AI doing the actual design work?"*

### Reason 4 — It targets the wrong psychological profile

The payment mechanic selects for users who (a) already have financial slack to stake real money and (b) respond well to external pressure. Both characteristics describe a person who *doesn't really have a deep procrastination problem in the first place.* People with genuine emotional procrastination (perfectionism, fear of failure, overwhelm) tend to find financial threats *paralyzing*, not motivating. The mechanism is most effective on the people who need it least.

---

## What we kept from the exercise

Even though we rejected the concept, considering it sharpened our final product in three ways:

1. **It forced us to articulate Closure's incentive structure.** The pressure-test "why would I take the first action?" came directly out of comparing Closure to the payment lock. Closure's three-layer incentive (now/seconds/months) is a direct response to this.

2. **It clarified the AI's role.** By seeing what it looks like when AI is decorative (the payment lock version), we understood why putting the AI at the center of the intent-to-action moment (Closure) is structurally different.

3. **It tested our willingness to abandon Closure.** The fact that we genuinely considered an alternative and returned to Closure with reasons gives the final concept conviction it wouldn't otherwise have. Most teams commit to their first idea and call it done.

---

## What we would do if forced to take the mechanic seriously

For documentation completeness: if we *had* committed to a financial-commitment product, the sharpest version we found was applying it to **the difficult conversation you've been avoiding** (asking for a raise, ending a friendship, an overdue apology). The user names the conversation, picks a stake, picks a deadline; if they confirm the conversation happened, they get most of the money back.

This version had some genuine virtues — the first action (making the commitment) is concrete, the AI's role in articulating "the conversation you can't quite name" is non-trivial, and the demo would have emotional weight. We didn't choose it because of Reasons 1 and 3 above, not because the application was wrong.

If during Empathize we discover that the documentation problem is much weaker than we think, this is a sensible backup direction to revisit.
