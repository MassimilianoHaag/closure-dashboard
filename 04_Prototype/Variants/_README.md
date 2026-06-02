# Variants — Folder Structure

One subfolder per screen. Figma Make output lands here after each generation run.

```
Variants/
├── recording/          Screen 3 — dark register, voice capture ritual
├── gallery/            Screens 1 + 6 — parchment, empty and populated states
├── project_frame/      Screen 2 — dark, AI-suggested or manual project naming
├── ai_reflection/      Screen 4 — dark, sharpened reflection + follow-up question
└── case_study_draft/   Screen 5 — parchment, assembled draft + visual upload
```

**Naming inside subfolders:** `variant_a.png`, `variant_b.png`, `variant_c.png` for generated variants. Use `empty.png` / `populated.png` where a screen has distinct states.

**Locked variants** are documented in `../Decisions/` — one file per screen, referencing the chosen PNG path.
