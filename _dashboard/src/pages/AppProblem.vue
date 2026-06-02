<script setup>
import CardPanel from '../components/CardPanel.vue'
import { parseSections, normalize, inlineHtml, mdBlock, mdToHtml } from '../utils/markdown.js'

import problemRaw from '../../../02_Define/Problem_Statement.md?raw'

const ACCENT = '#ff7b72'

const sections = parseSections(problemRaw)

function parseSubsections(raw) {
  const text = normalize(raw ?? '')
  const result = {}
  const regex = /^### (.+)$/gm
  const matches = [...text.matchAll(regex)]
  matches.forEach((match, i) => {
    const title = match[1].trim()
    const start = match.index + match[0].length + 1
    const end   = i < matches.length - 1 ? matches[i + 1].index : text.length
    result[title] = text.slice(start, end).trim()
  })
  return result
}

function parseBlockers(raw) {
  const text = normalize(raw ?? '')
  return text.split(/\n(?=\d+\. )/)
    .filter(item => /^\d+\./.test(item.trim()))
    .map(item => {
      const m = item.match(/^(\d+)\. \*\*(.+?)\*\*\n?([\s\S]*)$/)
      return m ? { num: m[1], title: m[2].trim(), body: m[3].trim() } : null
    })
    .filter(Boolean)
}

function extractQuote(raw) {
  const m = (raw ?? '').match(/>\s*\*(.+?)\*/)
  return m ? m[1] : ''
}

const unpacked  = parseSubsections(sections['Unpacked'])
const blockers  = parseBlockers(unpacked["Why they can't do it now"])
const sharpQuote = extractQuote(sections['The single sharpest version'])
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">

    <!-- Hero: sharpest version -->
    <div class="mb-4 rounded-md px-6 py-5 border" style="background: rgba(255,123,114,0.06); border-color: rgba(255,123,114,0.22)">
      <p class="font-mono text-[10px] uppercase tracking-[0.4px] mb-3" style="color: #ff7b72">sharpest version</p>
      <p class="text-[15px] leading-relaxed text-[#e6edf3] italic">{{ sharpQuote }}</p>
    </div>

    <!-- POV + Open question -->
    <div class="grid grid-cols-3 gap-4 mb-4">
      <CardPanel label="Point of view" class="col-span-2">
        <div v-html="mdBlock(sections['Point of View Statement'] ?? '', ACCENT)" />
      </CardPanel>
      <CardPanel label="Open question for Define">
        <div v-html="mdToHtml(sections['Open question this statement leaves for Define'] ?? '')" />
      </CardPanel>
    </div>

    <!-- Who / What they need / What exists -->
    <div class="grid grid-cols-3 gap-4 mb-4">
      <CardPanel label="Who">
        <div v-html="mdBlock(unpacked['Who'] ?? '', ACCENT)" />
      </CardPanel>
      <CardPanel label="What they need">
        <div v-html="mdBlock(unpacked['What they need'] ?? '', ACCENT)" />
      </CardPanel>
      <CardPanel label="What exists today">
        <div v-html="mdBlock(unpacked['What exists today'] ?? '', ACCENT)" />
      </CardPanel>
    </div>

    <!-- 3 blockers -->
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div
        v-for="b in blockers"
        :key="b.num"
        class="bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4"
      >
        <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-3">
          blocker {{ b.num }}
        </p>
        <p class="text-[13px] font-medium text-[#e6edf3] mb-3 leading-snug">{{ b.title }}</p>
        <div v-html="mdBlock(b.body, ACCENT)" />
      </div>
    </div>

    <!-- What NOT claim -->
    <CardPanel label="What this does not claim">
      <div v-html="mdBlock(sections['What this problem statement does NOT claim'] ?? '', ACCENT)" />
    </CardPanel>
  </div>
</template>
