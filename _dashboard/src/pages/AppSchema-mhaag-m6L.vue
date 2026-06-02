<script setup>
import CardPanel from '../components/CardPanel.vue'
import { normalize, esc } from '../utils/markdown.js'

import schemaRaw from '../../../03_Ideate/Schema.md?raw'

const ACCENT = '#79c0ff'

function parseSections(raw) {
  const text = normalize(raw)
  const sections = {}
  const regex = /^## (.+)$/gm
  const matches = [...text.matchAll(regex)]
  matches.forEach((match, i) => {
    const title = match[1].trim()
    const start = match.index + match[0].length + 1
    const end = i < matches.length - 1 ? matches[i + 1].index : text.length
    sections[title] = text.slice(start, end).replace(/^---\s*$/gm, '').trim()
  })
  return sections
}

function parseSubsections(raw) {
  if (!raw) return {}
  const text = normalize(raw)
  const subs = {}
  const regex = /^### (.+)$/gm
  const matches = [...text.matchAll(regex)]
  matches.forEach((match, i) => {
    const title = match[1].trim()
    const start = match.index + match[0].length + 1
    const end = i < matches.length - 1 ? matches[i + 1].index : text.length
    subs[title] = text.slice(start, end).replace(/^---\s*$/gm, '').trim()
  })
  return subs
}

function parseTable(raw) {
  if (!raw) return { header: [], rows: [] }
  const lines = normalize(raw).split('\n').filter(l => l.trim().startsWith('|'))
  const allRows = lines.map(l =>
    l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim())
  )
  const nonSep = allRows.filter(r => !r.every(c => /^[\s\-:|]+$/.test(c)))
  const [header = [], ...rows] = nonSep
  return { header, rows }
}

function inlineCode(str) {
  return esc(str).replace(/`(.+?)`/g, '<code class="text-[#c9d1d9] bg-[#21262d] px-1 py-0.5 rounded text-[11px] font-mono">$1</code>')
}

const sections = parseSections(schemaRaw)
const entrySection = sections['Entry'] || ''
const entryTableRaw = entrySection.split(/^### /m)[0].trim()
const entryDesc = entrySection.match(/^(.+?)\n/)?.[1]?.trim() ?? ''
const subsections = parseSubsections(entrySection)

const projectTable    = parseTable(sections['Project'] || '')
const entryTable      = parseTable(entryTableRaw)
const captureTable    = parseTable(subsections['Capture'] || '')
const reflectionTable = parseTable(subsections['Reflection'] || '')
const attachmentTable = parseTable(subsections['Attachment'] || '')

const TYPE_COLORS = {
  string:  { bg: 'rgba(121,192,255,0.1)', color: '#79c0ff' },
  number:  { bg: 'rgba(255,166,87,0.1)',  color: '#ffa657' },
  date:    { bg: 'rgba(63,185,80,0.1)',   color: '#3fb950' },
  enum:    { bg: 'rgba(210,168,255,0.1)', color: '#d2a8ff' },
  file:    { bg: 'rgba(255,123,114,0.1)', color: '#ff7b72' },
  'Entry[]': { bg: 'rgba(121,192,255,0.1)', color: '#79c0ff' },
  'Attachment[]': { bg: 'rgba(121,192,255,0.1)', color: '#79c0ff' },
  'Capture (optional)': { bg: 'rgba(121,192,255,0.08)', color: '#79c0ff' },
  'Reflection': { bg: 'rgba(210,168,255,0.1)', color: '#d2a8ff' },
}

function typeStyle(raw) {
  const base = raw.replace(/\s*\(.*\)/, '').trim()
  return TYPE_COLORS[raw] ?? TYPE_COLORS[base] ?? { bg: 'rgba(125,133,144,0.12)', color: '#7d8590' }
}

// Example section — parse into structured blocks
const exampleRaw = sections['Example'] || ''
const exampleLines = normalize(exampleRaw).split('\n')

function parseExample(lines) {
  const blocks = []
  let current = null
  for (const line of lines) {
    const t = line.trim()
    if (!t || t === '---') continue
    if (t.startsWith('**Project:')) {
      if (current) blocks.push(current)
      current = { type: 'project', title: t.replace(/\*\*/g, '').replace('Project: ', ''), items: [] }
    } else if (t.startsWith('**Entry')) {
      if (current) blocks.push(current)
      const dateMatch = t.match(/(\d{4}-\d{2}-\d{2})/)
      current = { type: 'entry', date: dateMatch?.[1] ?? '', items: [] }
    } else if (t.startsWith('- ')) {
      current?.items.push(t.slice(2))
    }
  }
  if (current) blocks.push(current)
  return blocks
}

const exampleBlocks = parseExample(exampleLines)
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">

    <!-- Page header -->
    <div class="mb-8">
      <div class="flex items-baseline gap-3 mb-1">
        <h1 class="text-2xl font-semibold tracking-tight" :style="`color:${ACCENT}`">Data Schema</h1>
        <span class="font-mono text-[11px] text-[#7d8590]">03_Ideate / Schema.md</span>
      </div>
      <p class="text-[13px] text-[#7d8590]">The core data model of Closure — a logbook of creative process built around Projects and their captured Entries</p>
    </div>

    <!-- Project + Entry -->
    <div class="grid grid-cols-2 gap-4 mb-4">

      <!-- Project -->
      <CardPanel label="Project">
        <p class="text-[12px] text-[#7d8590] mb-4 leading-relaxed">
          The top-level container. Holds identity, settings, and all entries for a piece of creative work.
        </p>
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="text-left font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] pb-2 pr-3 border-b border-[#21262d] w-[30%]">Field</th>
              <th class="text-left font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] pb-2 pr-3 border-b border-[#21262d] w-[28%]">Type</th>
              <th class="text-left font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] pb-2 border-b border-[#21262d]">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in projectTable.rows" :key="i" class="border-b border-[#21262d] last:border-0">
              <td class="py-2 pr-3 align-top">
                <code class="font-mono text-[11px]" :style="`color:${ACCENT}`">{{ row[0] }}</code>
              </td>
              <td class="py-2 pr-3 align-top">
                <span
                  class="inline-block font-mono text-[10px] px-1.5 py-0.5 rounded"
                  :style="`background:${typeStyle(row[1]).bg}; color:${typeStyle(row[1]).color}`"
                >{{ row[1] }}</span>
              </td>
              <td class="py-2 align-top">
                <span class="text-[12px] text-[#7d8590] leading-relaxed" v-html="inlineCode(row[2])" />
              </td>
            </tr>
          </tbody>
        </table>
      </CardPanel>

      <!-- Entry -->
      <CardPanel label="Entry">
        <p class="text-[12px] text-[#7d8590] mb-4 leading-relaxed">
          One capture session — one moment in the process of a project. Contains the raw capture, the AI reflection, and any attached files.
        </p>
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="text-left font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] pb-2 pr-3 border-b border-[#21262d] w-[28%]">Field</th>
              <th class="text-left font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] pb-2 pr-3 border-b border-[#21262d] w-[30%]">Type</th>
              <th class="text-left font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] pb-2 border-b border-[#21262d]">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in entryTable.rows" :key="i" class="border-b border-[#21262d] last:border-0">
              <td class="py-2 pr-3 align-top">
                <code class="font-mono text-[11px]" :style="`color:${ACCENT}`">{{ row[0] }}</code>
              </td>
              <td class="py-2 pr-3 align-top">
                <span
                  class="inline-block font-mono text-[10px] px-1.5 py-0.5 rounded"
                  :style="`background:${typeStyle(row[1]).bg}; color:${typeStyle(row[1]).color}`"
                >{{ row[1] }}</span>
              </td>
              <td class="py-2 align-top">
                <span class="text-[12px] text-[#7d8590] leading-relaxed" v-html="inlineCode(row[2])" />
              </td>
            </tr>
          </tbody>
        </table>
      </CardPanel>

    </div>

    <!-- Capture · Reflection · Attachment -->
    <div class="grid grid-cols-3 gap-4 mb-4">

      <CardPanel v-for="entity in [
        { label: 'Capture',    table: captureTable,    desc: 'The raw input — a voice recording or a written note.' },
        { label: 'Reflection', table: reflectionTable, desc: 'The AI-processed output: sharpened text, follow-up question, and case study draft.' },
        { label: 'Attachment', table: attachmentTable, desc: 'Files, links, and media added to an entry.' },
      ]" :key="entity.label" :label="entity.label">
        <p class="text-[12px] text-[#7d8590] mb-4 leading-relaxed">{{ entity.desc }}</p>
        <table class="w-full border-collapse">
          <tbody>
            <tr v-for="(row, i) in entity.table.rows" :key="i" class="border-b border-[#21262d] last:border-0">
              <td class="py-2 pr-2 align-top w-[38%]">
                <code class="font-mono text-[11px]" :style="`color:${ACCENT}`">{{ row[0] }}</code>
              </td>
              <td class="py-2 align-top">
                <span
                  class="inline-block font-mono text-[10px] px-1.5 py-0.5 rounded mb-1"
                  :style="`background:${typeStyle(row[1]).bg}; color:${typeStyle(row[1]).color}`"
                >{{ row[1] }}</span>
                <p class="text-[11px] text-[#7d8590] leading-relaxed" v-html="inlineCode(row[2])" />
              </td>
            </tr>
          </tbody>
        </table>
      </CardPanel>

    </div>

    <!-- Example -->
    <CardPanel label="Example — Meridian Brand Identity">
      <div class="flex gap-8">
        <div
          v-for="(block, i) in exampleBlocks"
          :key="i"
          class="flex-1"
        >
          <!-- Project block -->
          <template v-if="block.type === 'project'">
            <div class="flex items-center gap-2 mb-3">
              <span
                class="font-mono text-[10px] px-2 py-0.5 rounded"
                :style="`background:rgba(121,192,255,0.1); color:${ACCENT}`"
              >project</span>
              <span class="text-[13px] font-medium text-[#e6edf3]">{{ block.title }}</span>
            </div>
            <div class="flex flex-col gap-1.5">
              <div v-for="(item, j) in block.items" :key="j" class="flex gap-2">
                <span class="shrink-0 font-bold mt-[3px]" :style="`color:${ACCENT}`">·</span>
                <span class="text-[12px] text-[#7d8590] leading-relaxed" v-html="inlineCode(item)" />
              </div>
            </div>
          </template>

          <!-- Entry block -->
          <template v-else>
            <div class="flex items-center gap-2 mb-3">
              <span
                class="font-mono text-[10px] px-2 py-0.5 rounded"
                style="background:rgba(210,168,255,0.1); color:#d2a8ff"
              >entry</span>
              <span class="font-mono text-[11px] text-[#7d8590]">{{ block.date }}</span>
            </div>
            <div class="flex flex-col gap-1.5">
              <div v-for="(item, j) in block.items" :key="j" class="flex gap-2">
                <span class="shrink-0 font-bold mt-[3px]" style="color:#d2a8ff">·</span>
                <span class="text-[12px] text-[#7d8590] leading-relaxed" v-html="inlineCode(item)" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </CardPanel>

  </div>
</template>
