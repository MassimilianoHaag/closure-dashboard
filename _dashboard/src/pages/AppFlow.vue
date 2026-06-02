<script setup>
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'
import CardPanel from '../components/CardPanel.vue'
import { parseSections, normalize } from '../utils/markdown.js'

import flowRaw from '../../../04_Prototype/User_Flow_Diagram.md?raw'

const ACCENT = '#ffa657'
const sections = parseSections(flowRaw)

// ── Parse numbered flow steps ─────────────────────────────────────────────────
function parseFlowSteps(raw) {
  const text = normalize(raw ?? '')
  return [...text.matchAll(/^(\d+)\. \*\*(.+?)\*\* — ([\s\S]*?)(?=\n\d+\. |\s*$)/gm)]
    .map(m => ({
      num:      m[1],
      title:    m[2].trim(),
      branches: m[3].trim().split(/\s*→\s*/).map(s => s.trim()).filter(Boolean),
    }))
}

// ── Parse tables ──────────────────────────────────────────────────────────────
function parseTable(raw) {
  const lines = normalize(raw ?? '').split('\n')
    .filter(l => l.trim().startsWith('|') && !/^\|[\s|:-]+\|$/.test(l.trim()))
  if (lines.length < 2) return { headers: [], rows: [] }
  const cells = line => line.split('|')
    .filter((_, i, a) => i > 0 && i < a.length - 1)
    .map(c => c.replace(/\*\*/g, '').trim())
  return { headers: cells(lines[0]), rows: lines.slice(1).map(cells) }
}

function parseOpenQuestions(raw) {
  const text = normalize(raw ?? '')
  return [...text.matchAll(/^\*\*(Q\d+[^*]+)\*\*\n([\s\S]*?)(?=\n\*\*Q\d|\s*$)/gm)]
    .map(m => ({ label: m[1].trim(), body: m[2].trim() }))
}

const flowSteps = parseFlowSteps(sections['Flow'])
const decisions = parseTable(sections['Decision points'])
const paths     = parseTable(sections['2 paths through the system'])
const questions = parseOpenQuestions(sections['Open questions'])

const diagramDef = `
flowchart TD
  classDef parchment fill:#1c1812,stroke:#5a4d3a,color:#e6edf3
  classDef dark      fill:#161b22,stroke:#30363d,color:#e6edf3
  classDef prompt    fill:#12161c,stroke:#30363d,color:#7d8590,stroke-dasharray:4 4
  classDef loading   fill:#0d1117,stroke:#21262d,color:#7d8590,stroke-dasharray:2 2
  classDef flip      fill:#1a1300,stroke:#ffa657,color:#ffa657,stroke-dasharray:4 4
  classDef terminus  fill:#0d1117,stroke:#30363d,color:#7d8590

  START(["START"]):::terminus

  G["1 · Gallery — Populated\nNew project dropdown\n+ New capture on card"]:::parchment

  REC["2 · Recording\nidle → tap mic → recording\npause / resume / done"]:::dark

  PROMPT{{"3 · Immediate Upload\nWant to add visuals\nwhile it's fresh?"}}:::prompt

  REFL["4 · AI Reflection\nSharpened text\nfollow-up question"]:::dark

  SYN["5 · Synthesizing\nListening…\nDrafting your case study…"]:::loading

  FLIP(["⟳  register flips to parchment"]):::flip

  DRAFT["6 · Case Study Draft\nAI draft · edit · save"]:::parchment

  GEND["Gallery — Populated\n(entry added)"]:::parchment

  END(["END of demo flow"]):::terminus

  START --> G
  G -->|"New project / + New capture"| REC
  REC -->|"Done"| PROMPT
  PROMPT -->|"Add visuals"| FLIP
  PROMPT -->|"Skip for now"| REFL
  REFL -->|"mic · type · skip"| SYN
  SYN -->|"auto 2.4 s"| FLIP
  FLIP --> DRAFT
  DRAFT -->|"Save to gallery"| GEND
  GEND --> END
`

// ── Mermaid render ─────────────────────────────────────────────────────────────
const svgOutput = ref('')

onMounted(async () => {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      background:          '#0d1117',
      mainBkg:             '#161b22',
      nodeBorder:          '#30363d',
      primaryColor:        '#161b22',
      primaryTextColor:    '#e6edf3',
      primaryBorderColor:  '#30363d',
      lineColor:           '#484f58',
      edgeLabelBackground: '#0d1117',
      tertiaryColor:       '#0d1117',
      secondaryColor:      '#0d1117',
      fontFamily:          'ui-monospace, SFMono-Regular, monospace',
      fontSize:            '13px',
    },
    flowchart: {
      curve:      'basis',
      htmlLabels: false,
      padding:    20,
    },
  })

  try {
    const uid = `mermaid-flow-${Date.now()}`
    const { svg } = await mermaid.render(uid, diagramDef.trim())
    svgOutput.value = svg
  } catch (e) {
    svgOutput.value = `<pre style="color:#ff7b72;font-size:11px;padding:12px">${e.message}</pre>`
  }
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">

    <!-- Meta strip -->
    <div class="mb-5 bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4 flex items-center gap-6">
      <div class="flex-1">
        <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-1">Pass 2 · core ritual · React + MUI</p>
        <p class="text-[13px] text-[#e6edf3]">User flow for Mara Santos — first-time user, just shipped a project.</p>
        <p class="text-[12px] text-[#7d8590] mt-0.5">Auth, onboarding, settings, publish/share, edit history: out of scope. Project Frame not yet implemented.</p>
      </div>
      <div class="flex gap-4 shrink-0 text-[11px]">
        <span class="flex items-center gap-1.5">
          <span class="inline-block w-3 h-3 rounded-sm" style="background:#1c1812;border:1px solid #5a4d3a"></span>
          <span class="text-[#7d8590] font-mono">parchment</span>
        </span>
        <span class="flex items-center gap-1.5">
          <span class="inline-block w-3 h-3 rounded-sm" style="background:#161b22;border:1px solid #30363d"></span>
          <span class="text-[#7d8590] font-mono">dark</span>
        </span>
        <span class="flex items-center gap-1.5">
          <span class="inline-block w-3 h-3 rounded-sm" style="background:#1a1300;border:1px dashed #ffa657"></span>
          <span class="text-[#7d8590] font-mono">register flip</span>
        </span>
      </div>
    </div>

    <!-- Mermaid flow diagram -->
    <div class="mb-5 bg-[#0d1117] border border-[#21262d] rounded-md overflow-hidden">
      <div
        v-if="svgOutput"
        v-html="svgOutput"
        class="flex justify-center py-8 px-6 [&>svg]:max-w-full [&>svg]:h-auto"
      />
      <div v-else class="flex items-center justify-center h-48 text-[#484f58] font-mono text-[11px]">
        rendering…
      </div>
    </div>

    <!-- Flow steps (parsed from ## Flow) -->
    <div class="mb-5 grid grid-cols-2 gap-3">
      <div
        v-for="step in flowSteps" :key="step.num"
        class="bg-[#161b22] border border-[#21262d] rounded-md px-4 py-3"
      >
        <div class="flex items-start gap-2.5 mb-2">
          <span class="font-mono text-[10px] font-bold shrink-0 mt-px" :style="{ color: ACCENT }">{{ step.num }}</span>
          <p class="text-[12px] font-medium text-[#e6edf3] leading-snug">{{ step.title }}</p>
        </div>
        <div class="flex flex-col gap-1 pl-5">
          <p class="text-[11px] text-[#7d8590] leading-relaxed">{{ step.branches[0] }}</p>
          <div v-for="(branch, j) in step.branches.slice(1)" :key="j" class="flex items-start gap-1.5">
            <span class="text-[#484f58] text-[10px] shrink-0 mt-px">→</span>
            <p class="text-[11px] text-[#7d8590] leading-relaxed">{{ branch }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Decision points · 4 paths · Open questions -->
    <div class="grid grid-cols-3 gap-4">

      <CardPanel label="Decision points">
        <div v-for="row in decisions.rows" :key="row[0]"
          class="flex gap-3 py-2.5 border-b border-[#21262d] last:border-0">
          <span class="font-mono text-[10px] font-bold shrink-0 mt-px" :style="{ color: ACCENT }">{{ row[0] }}</span>
          <div>
            <p class="text-[12px] text-[#e6edf3] font-medium mb-0.5">{{ row[1] }}</p>
            <p class="text-[11px] text-[#7d8590] leading-relaxed">{{ row[2] }}</p>
            <p class="font-mono text-[9px] text-[#484f58] mt-1">{{ row[3] }}</p>
          </div>
        </div>
      </CardPanel>

      <CardPanel label="2 paths through the system">
        <div v-for="row in paths.rows" :key="row[0]"
          class="flex gap-3 py-2.5 border-b border-[#21262d] last:border-0">
          <span class="font-mono text-[10px] font-bold shrink-0 mt-px" :style="{ color: ACCENT }">{{ row[0] }}</span>
          <div>
            <p class="text-[12px] text-[#e6edf3] font-medium mb-1">Entry: {{ row[1] }}</p>
            <p class="text-[11px] text-[#7d8590]">Post-capture: {{ row[2] }}</p>
            <p class="text-[11px] text-[#7d8590]">AI Reflection: {{ row[3] }}</p>
          </div>
        </div>
        <p class="text-[10px] text-[#484f58] mt-3 pt-3 border-t border-[#21262d]">
          All paths converge at Screen 6 — Case Study Draft.
        </p>
      </CardPanel>

      <CardPanel label="Open questions">
        <div v-for="(q, i) in questions" :key="i"
          class="py-2.5 border-b border-[#21262d] last:border-0">
          <p class="font-mono text-[9px] font-bold mb-1.5" :style="{ color: ACCENT }">{{ q.label }}</p>
          <p class="text-[11px] text-[#7d8590] leading-relaxed">{{ q.body }}</p>
        </div>
      </CardPanel>

    </div>
  </div>
</template>
