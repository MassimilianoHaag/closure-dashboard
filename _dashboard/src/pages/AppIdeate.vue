<script setup>
import CardPanel from '../components/CardPanel.vue'
import { parseSections, mdBlock, normalize, inlineHtml } from '../utils/markdown.js'

import conceptRaw from '../../../03_Ideate/00_Concept_Definition.md?raw'

const ACCENT = '#d2a8ff'

const sections = parseSections(conceptRaw)

function parseTurns(raw) {
  if (!raw) return []
  const text = normalize(raw)
  const regex = /^### (.+)$/gm
  const matches = [...text.matchAll(regex)]
  return matches.map((match, i) => {
    const fullTitle = match[1].trim()
    const dashIdx = fullTitle.indexOf(' — ')
    const numLabel = dashIdx !== -1 ? fullTitle.slice(0, dashIdx) : fullTitle
    const subtitle = dashIdx !== -1 ? fullTitle.slice(dashIdx + 3) : ''
    const start = match.index + match[0].length + 1
    const end = i < matches.length - 1 ? matches[i + 1].index : text.length
    const content = text.slice(start, end).replace(/^---\s*$/gm, '').trim()
    return { numLabel, subtitle, content }
  })
}

function renderSlide(raw) {
  if (!raw) return ''
  const lines = normalize(raw).split('\n')
  const parts = []
  let quoteLines = []

  const flushQuote = () => {
    if (!quoteLines.length) return
    const paras = quoteLines.join('\n').trim().split(/\n\n+/)
    const inner = paras
      .filter(p => p.trim())
      .map(p => `<p class="text-[13px] text-[#c9d1d9] leading-relaxed italic mb-2 last:mb-0">${inlineHtml(p.trim())}</p>`)
      .join('')
    parts.push(`<div style="border-left:2px solid ${ACCENT};padding-left:14px;margin-bottom:12px">${inner}</div>`)
    quoteLines = []
  }

  for (const line of lines) {
    const t = line.trim()
    if (t === '---' || t.startsWith('#')) continue
    if (t.startsWith('> ') || t === '>') {
      quoteLines.push(t.startsWith('> ') ? t.slice(2) : '')
    } else {
      flushQuote()
      if (t) parts.push(`<p class="text-[13px] text-[#7d8590] leading-relaxed mb-2">${inlineHtml(t)}</p>`)
    }
  }
  flushQuote()
  return parts.join('')
}

const turns = parseTurns(sections['The journey, in five turns'])
const slide1Raw = sections['Slide 1 — Problem Statement (locked draft)'] ?? ''
const slide2Raw = sections['Slide 2 — UX Hypothesis (locked draft, audience-first)'] ?? ''
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">

    <!-- Page header -->
    <div class="mb-8">
      <div class="flex items-baseline gap-3 mb-1">
        <h1 class="text-2xl font-semibold tracking-tight" style="color:#d2a8ff">Concept Definition</h1>
        <span class="font-mono text-[11px] text-[#7d8590]">03_Ideate / 00_Concept_Definition.md</span>
      </div>
      <p class="text-[13px] text-[#7d8590]">How we arrived at Closure — five turns from the initial concept to the locked framing</p>
    </div>

    <!-- Journey timeline -->
    <div class="mb-4">
      <CardPanel label="The journey, in five turns">
        <div class="flex flex-col">
          <div
            v-for="(turn, idx) in turns"
            :key="idx"
            class="flex gap-4"
            :class="idx < turns.length - 1 ? 'mb-6' : ''"
          >
            <!-- Number circle + vertical connector -->
            <div class="flex flex-col items-center">
              <div
                class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-mono"
                style="background:rgba(210,168,255,0.12); color:#d2a8ff; border:1px solid rgba(210,168,255,0.3)"
              >{{ idx + 1 }}</div>
              <div
                v-if="idx < turns.length - 1"
                class="w-px mt-1.5 flex-1"
                style="background:#21262d; min-height:20px"
              />
            </div>
            <!-- Turn content -->
            <div class="flex-1 pb-1">
              <p class="text-[13px] font-medium text-[#e6edf3] mb-2.5">
                <span class="font-mono text-[10px] mr-2" style="color:#d2a8ff">{{ turn.numLabel }}</span>{{ turn.subtitle }}
              </p>
              <div v-html="mdBlock(turn.content, ACCENT)" />
            </div>
          </div>
        </div>
      </CardPanel>
    </div>

    <!-- Final concept + synthesis purpose -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <CardPanel label="What the final concept claims">
        <div v-html="mdBlock(sections['What the final concept claims'], ACCENT)" />
      </CardPanel>
      <CardPanel label="What this synthesis is for">
        <div v-html="mdBlock(sections['What this synthesis is for'], ACCENT)" />
      </CardPanel>
    </div>

    <!-- Locked slide drafts -->
    <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-3">Locked slide drafts</p>
    <div class="grid grid-cols-2 gap-4">
      <CardPanel label="Slide 1 — Problem Statement">
        <div v-html="renderSlide(slide1Raw)" />
      </CardPanel>
      <CardPanel label="Slide 2 — UX Hypothesis">
        <div v-html="renderSlide(slide2Raw)" />
      </CardPanel>
    </div>
  </div>
</template>
