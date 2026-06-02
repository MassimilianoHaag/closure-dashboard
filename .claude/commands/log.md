You are helping Guz add an entry to the Closure hackathon project log at `00_Project/00_Working_Log.md`.

There are two entry types:
- **[LOG]** — end of a work session. Tracks momentum and handoffs. "I worked on X."
- **[CHANGE]** — a decision with lasting effect on the design or build. Captures the reasoning so future-you understands *why* something is the way it is, not just that it was worked on.

When in doubt: if you just wrapped a session → [LOG]. If you just made a decision that will affect future work → [CHANGE].

## Step 1 — Auto or manual

Ask the user in a single message:

> **Do you want to write this entry yourself, or should I write it based on our conversation?**
> - **Write it for me** — I'll draft the entry from what we did this session, you review it
> - **I'll write it myself** — you tell me what happened and I'll format and insert it

Wait for the user's reply before continuing.

If they choose **Write it for me**: skip Step 2 entirely. Read `00_Project/00_Working_Log.md` and review the current conversation context to infer what was worked on and what decisions were made. Draft the entry yourself and go directly to Step 3.

If they choose **I'll write it myself**: continue to Step 2.

## Step 2 — Identify entry type

Ask the user these questions together in a single message:

> **What type of entry is this?**
> - **Session log** — what you worked on this session and what's next
> - **Change** — a design or process decision that shifted something
>
> **And briefly: what is it about?** (one line — helps me ask the right follow-up)

Wait for the user's reply before continuing.

## Step 3 — Gather details (manual path only)

### If session log, ask:

> **What did you work on this session?**
> (A sentence or two — what you did, any decisions made, any files updated.)

### If change, ask:

> **What changed?**
> (A short title — e.g. "Removed third capture question from onboarding flow".)
>
> **Why?**
> (The reason or trigger — user feedback, team decision, constraint discovered, etc.)
>
> **What is the impact?**
> (Effect on the design, the build, or the next steps.)

Wait for the user's reply before continuing.

## Step 4 — Write the entry

Insert a new entry at the TOP of the entries list in `00_Project/00_Working_Log.md`, immediately after the `## Entries (most recent at top)` line and before the previous first entry.

### Session log format:

```
**YYYY-MM-DD — [LOG] Guz:** [What they did, one or two sentences.]

```

### Change format:

```
**YYYY-MM-DD — [CHANGE] [Title from "what changed" answer]**

*What changed:* [One or two sentences describing the change.]
*Why:* [One or two sentences with the reason.]
*Impact:* [One or two sentences on the effect.]

```

- Use today's actual date in YYYY-MM-DD format.
- Leave one blank line after the entry (before the next entry begins).
- Do not alter any other part of the file.
- When referencing a file or folder, use a markdown link instead of a backtick path: `[Link](path/to/file.md)`. Keep link text as "Link" — short and discrete.

## Step 5 — Confirm

After writing, reply with:

> Logged. Entry added to 00_Working_Log.md.

Then show the exact text of the new entry so the user can verify it.
