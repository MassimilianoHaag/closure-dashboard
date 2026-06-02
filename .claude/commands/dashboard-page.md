You are building a new visualization page in the `_dashboard/` sub-project for the Closure hackathon.

The dashboard is a Vite + Tailwind CSS v4 multi-page app. Each page:
- Has its own `.html` file in `_dashboard/`
- Has its own `.js` module in `_dashboard/src/`
- Imports one or more project markdown files as `?raw` and renders them into the page
- Shares the same visual design system (dark GitHub-style theme)
- Is registered as an entry point in `vite.config.js`
- Appears in the nav of every other page

---

## Step 1 — Gather what's needed

If the markdown source file and page name are already clear from context, skip asking and proceed directly to Step 2.

Otherwise, ask in a single message:

> **Which markdown file should this page visualize?**
> (Path relative to the project root — e.g. `03_Define/Persona_Primary_Mara.md`)
>
> **What should the page be called in the nav?**
> (One word or short label — e.g. "Persona", "Research", "Define")

Wait for the reply before continuing.

---

## Step 2 — Read and understand the source

Before writing any code:

1. Read the target markdown file in full.
2. Read `_dashboard/vite.config.js` to understand current entry points.
3. Read all existing `_dashboard/*.html` files to get the current nav state.
4. Read `_dashboard/src/main.js` (or any existing page JS) to understand the rendering patterns already in use.

Understand the markdown's structure: what sections exist, what the content type is, how it should be presented visually.

---

## Step 3 — Design the layout

Choose a layout that fits the content. Common patterns:

- **Hero + grid**: a full-width header card with key identity info, then section cards in a 2- or 3-column grid. Use for persona, profile, or single-subject documents.
- **Two-column prose**: two equal columns of section cards. Use for analysis or research documents with roughly equal-weight sections.
- **Single column with callouts**: stacked full-width cards, with highlighted callout blocks for quotes or key findings. Use for linear documents like synthesis or recommendations.
- **Stats row + detail**: a row of metric/count chips at the top, then detail sections below. Use for survey results or quantitative findings.

Pick an **accent color** for the page that isn't already in use. Current assignments:
- `#bc8cff` — Max (author)
- `#3fb950` — Guz (author)
- `#ffa657` — design changes
- `#f0883e` — Mara persona

Good candidates for new pages: `#79c0ff` (cool blue), `#56d364` (bright green), `#e3b341` (amber), `#ff7b72` (coral), `#d2a8ff` (lavender).

---

## Step 4 — Create the files

### 4a. `_dashboard/<pagename>.html`

Use this exact shell — keep the header and nav consistent:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Closure · [Page Name]</title>
  <link rel="stylesheet" href="./src/style.css" />
</head>
<body class="bg-[#0d1117] text-[#e6edf3] min-h-screen text-sm leading-relaxed">
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">

    <header class="flex items-center mb-10 pb-5 border-b border-[#21262d]">
      <span class="text-[17px] font-semibold tracking-tight">closure</span>
      <span class="font-mono text-xs text-[#7d8590] ml-2.5">dashboard</span>
      <nav class="flex gap-1 ml-auto">
        <!-- nav links — see Step 5 -->
      </nav>
    </header>

    <div id="[container-id]"></div>

  </div>
  <script type="module" src="./src/[pagename].js"></script>
</body>
</html>
```

### 4b. `_dashboard/src/<pagename>.js`

Follow this established pattern:

```js
import sourceRaw from '../../[path/to/source.md]?raw'

function normalize(text) {
  return text.replace(/\r\n/g, '\n')
}

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function parseSections(raw) {
  const text = normalize(raw)
  const sections = {}
  const regex = /^## (.+)$/gm
  const matches = [...text.matchAll(regex)]
  matches.forEach((match, i) => {
    const title = match[1].trim()
    const start  = match.index + match[0].length + 1
    const end    = i < matches.length - 1 ? matches[i + 1].index : text.length
    sections[title] = text.slice(start, end).replace(/^---\s*$/gm, '').trim()
  })
  return sections
}

function mdToHtml(raw, muted = true) {
  if (!raw) return ''
  const textColor = muted ? 'text-[#7d8590]' : 'text-[#e6edf3]'
  return raw
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(para => {
      para = para.trim()
      if (!para || para.startsWith('#')) return ''
      let html = esc(para)
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#e6edf3] font-medium">$1</strong>')
      html = html.replace(/\*(.+?)\*/g, '<span class="text-[#e6edf3]">$1</span>')
      return `<p class="text-[13px] ${textColor} leading-relaxed mb-3 last:mb-0">${html}</p>`
    })
    .filter(Boolean)
    .join('')
}

function card(label, content) {
  return `
    <div class="bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4 flex flex-col">
      <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-4">${label}</p>
      <div class="flex-1">${content}</div>
    </div>`
}

function render(sections) {
  // Build layout here using the card() helper and mdToHtml()
  document.getElementById('[container-id]').innerHTML = /* layout */
}

render(parseSections(sourceRaw))
```

Adapt `render()` to the layout chosen in Step 3. Use inline `style=""` attributes for the accent color (e.g. `style="color:#79c0ff"`) rather than arbitrary Tailwind values, since dynamic color values won't be scanned by the Tailwind compiler. Use Tailwind only for spacing, sizing, and layout. For background tints at low opacity use `rgba()` in inline style.

---

## Step 5 — Update the nav everywhere

**In the new page's HTML**: add a nav link for every existing page, and mark the current page as active:
- Active: `class="px-3.5 py-1 rounded-full text-xs bg-[#161b22] border border-[#7d8590] text-[#e6edf3]"`
- Inactive: `class="px-3.5 py-1 rounded-full text-xs text-[#7d8590] hover:text-[#e6edf3] transition-colors"`

**In every existing `.html` file**: add a nav link to the new page (inactive style).

---

## Step 6 — Wire into the Stage Status panel

Open `_dashboard/src/components/timeline/StageStatus.vue`. If the new page corresponds to a design stage (Empathize, Define, Ideate, Prototype, Test, Presentation), find the matching `<StageRow>` element and add the new page to its `:links` prop array. This makes the stage name a clickable link in the status panel.

Each `<StageRow>` accepts a `links` array — multiple pages per stage are supported. Add your new page as an entry in the matching stage's `links` array, or add the `:links` prop if it isn't there yet.

Example: if you created `research.html` for the Empathize stage:
```vue
<StageRow name="Empathize" :count="nk(empathizeFiles)" :links="[
  { label: 'Research synthesis', href: './research.html' }
]" />
```

If the stage already has a `:links` array, append to it rather than replacing it.

---

## Step 7 — Register in vite.config.js

Add the new HTML as an entry in `build.rollupOptions.input`:

```js
build: {
  rollupOptions: {
    input: {
      main:       resolve(__dirname, 'index.html'),
      // ... existing entries ...
      [pagename]: resolve(__dirname, '[pagename].html'),
    }
  }
}
```

---

## Step 7 — Verify

Run `npm run build` inside `_dashboard/` and confirm:
- No errors
- Both the new `.html` and its `.js` asset appear in the build output

Report what was created: the two new files, which existing files were updated, and the accent color chosen.
