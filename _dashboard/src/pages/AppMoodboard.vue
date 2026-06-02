<script setup>
import CardPanel from '../components/CardPanel.vue'
import { parseSections, mdBlock } from '../utils/markdown.js'

import visualRegisterRaw from '../../../02_Define/Inspiration/00_Visual_Register_Notes.md?raw'
import notes01 from '../../../02_Define/Inspiration/01_Reflective_Apps/_notes.md?raw'
import notes02 from '../../../02_Define/Inspiration/02_Voice_First_Products/_notes.md?raw'
import notes03 from '../../../02_Define/Inspiration/03_Calm_Professional_Tools/_notes.md?raw'
import notes04 from '../../../02_Define/Inspiration/04_Portfolio_Platforms/_notes.md?raw'
import notes05 from '../../../02_Define/Inspiration/05_Editorial_References/_notes.md?raw'
import notes06 from '../../../02_Define/Inspiration/06_Color_Palettes/_notes.md?raw'
import notes07 from '../../../02_Define/Inspiration/07_Typography_Pairings/_notes.md?raw'
import notes08 from '../../../02_Define/Inspiration/08_Empty_States/_notes.md?raw'

const ACCENT = '#e3b341'

// --- Visual moodboard images ---
const rawImages = import.meta.glob(
  '../../../02_Define/Inspiration/**/*.png',
  { eager: true }
)

const folderLabels = {
  '01_Reflective_Apps':        'Reflective Apps',
  '02_Voice_First_Products':   'Voice-First Products',
  '03_Calm_Professional_Tools':'Calm Professional Tools',
  '04_Portfolio_Platforms':    'Portfolio Platforms',
  '05_Editorial_References':   'Editorial References',
  '06_Color_Palettes':         'Color Palettes',
  '08_Empty_States':           'Empty States',
}

const imageCategories = (() => {
  const grouped = {}
  for (const [path, mod] of Object.entries(rawImages)) {
    const parts = path.split('/')
    const folder = parts[parts.length - 2]
    if (!folderLabels[folder]) continue // skip subfolders with no label mapping
    const filename = parts[parts.length - 1].replace(/\.png$/i, '').replace(/_/g, ' ')
    if (!grouped[folder]) grouped[folder] = []
    grouped[folder].push({ src: mod.default, name: filename })
  }
  return Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([folder, images]) => ({
      num: folder.slice(0, 2),
      label: folderLabels[folder],
      images,
    }))
})()

const sections = parseSections(visualRegisterRaw)
const synthRaw = sections['Section 3 — Synthesis'] ?? ''

const notItems = (sections['Section 2 — What we are NOT'] ?? '')
  .split('\n')
  .filter(l => l.trimStart().startsWith('- '))
  .map(l => {
    const item = l.slice(l.indexOf('-') + 2)
    const m = item.match(/^\*\*(.+?)\*\*\s*—\s*(.+)/)
    return m ? { label: m[1], desc: m[2] } : { label: '', desc: item }
  })

const colorTokens = [
  { hex: '#EFEBE4', name: 'Parchment cream',  role: 'Light register background' },
  { hex: '#3A3D40', name: 'Deep charcoal',    role: 'Light register text / dark register BG' },
  { hex: '#3E322A', name: 'Espresso brown',   role: 'Accent — highest-priority signal only' },
]

const anchorRefs = [...synthRaw.matchAll(/^(\d+)\. \*\*(.+?)\*\* — (.+)$/gm)]
  .map(m => ({ num: m[1], title: m[2], desc: m[3] }))

const splitRegisterDesc = synthRaw.split('\n\n')[0]
  ?.replace(/^\*\*Split-register approach \(locked\)\.\*\* /, '') ?? ''

const principlesRaw = synthRaw
  .match(/\*\*Design principles:\*\*([\s\S]+?)(?=\n\*\*Anchor references|$)/)?.[1]?.trim() ?? ''

const typoRaw = synthRaw
  .match(/\*\*Typography:\*\*([\s\S]+?)(?=\n\*\*Design principles|$)/)?.[1]?.trim() ?? ''

function folderBringBack(raw) {
  return (raw.match(/\*\*What to bring back:\*\*\s*(.+)/) ?? [])[1]?.trim() ?? ''
}

const folders = [
  { num: '01', label: 'Reflective Apps',         raw: notes01 },
  { num: '02', label: 'Voice-First Products',    raw: notes02 },
  { num: '03', label: 'Calm Professional Tools', raw: notes03 },
  { num: '04', label: 'Portfolio Platforms',     raw: notes04 },
  { num: '05', label: 'Editorial References',    raw: notes05 },
  { num: '06', label: 'Color Palettes',          raw: notes06 },
  { num: '07', label: 'Typography Pairings',     raw: notes07 },
  { num: '08', label: 'Empty States',            raw: notes08 },
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">

    <div class="mb-8">
      <div class="flex items-baseline gap-3 mb-1">
        <h1 class="text-2xl font-semibold tracking-tight" style="color:#e3b341">Moodboard</h1>
        <span class="font-mono text-[11px] text-[#7d8590]">01_Brief_and_Reference / Inspiration</span>
      </div>
      <p class="text-[13px] text-[#7d8590]">Visual register, design vocabulary, and research reference folders</p>
    </div>

    <!-- Aesthetic target -->
    <div class="mb-4">
      <CardPanel label="Aesthetic target">
        <div v-html="mdBlock(sections['Section 1 — Aesthetic target'], ACCENT)" />
      </CardPanel>
    </div>

    <!-- What we are NOT + Split register -->
    <div class="grid grid-cols-2 gap-4 mb-4">
      <CardPanel label="What we are NOT">
        <div class="flex flex-col gap-3">
          <div v-for="item in notItems" :key="item.label" class="flex gap-2.5">
            <span class="shrink-0 font-mono text-[12px] mt-[1px]" style="color:#e3b341">✗</span>
            <div>
              <span class="text-[13px] font-medium text-[#e6edf3]">{{ item.label }}</span>
              <span class="text-[13px] text-[#7d8590]"> — {{ item.desc }}</span>
            </div>
          </div>
        </div>
      </CardPanel>

      <CardPanel label="Split-register approach">
        <div class="flex gap-3 mb-4">
          <div class="flex-1 rounded p-3" style="background:rgba(13,17,23,0.9); border:1px solid #30363d">
            <p class="font-mono text-[10px] uppercase tracking-wider mb-2" style="color:#e3b341">Capture</p>
            <p class="text-[13px] font-medium text-[#e6edf3] mb-1">Dark surface</p>
            <p class="text-[11px] text-[#7d8590]">private · intimate · recording</p>
          </div>
          <div class="flex items-center text-[#7d8590] text-base px-1">→</div>
          <div class="flex-1 rounded p-3" style="background:rgba(239,235,228,0.06); border:1px solid #30363d">
            <p class="font-mono text-[10px] uppercase tracking-wider mb-2" style="color:#e3b341">Output</p>
            <p class="text-[13px] font-medium text-[#e6edf3] mb-1">Parchment cream</p>
            <p class="text-[11px] text-[#7d8590]">warm · curated · published</p>
          </div>
        </div>
        <p class="text-[13px] text-[#7d8590] leading-relaxed">{{ splitRegisterDesc }}</p>
      </CardPanel>
    </div>

    <!-- Color tokens + Typography + Design principles -->
    <div class="grid grid-cols-3 gap-4 mb-4">
      <CardPanel label="Color tokens">
        <div class="flex flex-col gap-3 mb-3">
          <div v-for="token in colorTokens" :key="token.hex" class="flex items-start gap-3">
            <div class="shrink-0 w-9 h-9 rounded border border-[#30363d]" :style="{ background: token.hex }" />
            <div>
              <p class="font-mono text-[11px] text-[#e6edf3] mb-0.5">{{ token.hex }}</p>
              <p class="text-[12px] font-medium text-[#e6edf3]">{{ token.name }}</p>
              <p class="text-[11px] text-[#7d8590] leading-snug">{{ token.role }}</p>
            </div>
          </div>
        </div>
        <p class="text-[11px] text-[#7d8590] pt-3 border-t border-[#21262d] leading-relaxed">
          Secondary: soft stone grays and warm off-whites for supporting elements; light cream for text in the dark register
        </p>
      </CardPanel>

      <CardPanel label="Typography">
        <div v-html="mdBlock(typoRaw, ACCENT)" />
      </CardPanel>

      <CardPanel label="Design principles">
        <div v-html="mdBlock(principlesRaw, ACCENT)" />
      </CardPanel>
    </div>

    <!-- Anchor references -->
    <div class="mb-10">
      <CardPanel label="Anchor references">
        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
          <div v-for="ref in anchorRefs" :key="ref.num" class="flex gap-3">
            <span class="shrink-0 font-mono text-[13px] font-bold w-4 mt-[1px]" style="color:#e3b341">{{ ref.num }}.</span>
            <div>
              <p class="text-[13px] font-medium text-[#e6edf3] mb-1">{{ ref.title }}</p>
              <p class="text-[12px] text-[#7d8590] leading-relaxed">{{ ref.desc }}</p>
            </div>
          </div>
        </div>
      </CardPanel>
    </div>

    <!-- Reference folders -->
    <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-3">Research folders</p>
    <div class="grid grid-cols-4 gap-3 mb-16">
      <div
        v-for="folder in folders"
        :key="folder.num"
        class="bg-[#161b22] border border-[#21262d] rounded-md px-4 py-3 flex flex-col"
      >
        <div class="flex items-center gap-2 mb-2.5">
          <span class="font-mono text-[10px] shrink-0" style="color:#e3b341">{{ folder.num }}</span>
          <p class="font-mono text-[10px] uppercase tracking-[0.3px] text-[#e6edf3] leading-tight">{{ folder.label }}</p>
        </div>
        <p class="text-[12px] text-[#7d8590] leading-relaxed">{{ folderBringBack(folder.raw) }}</p>
      </div>
    </div>

    <!-- Visual moodboard -->
    <div class="border-t border-[#21262d] pt-12">
      <div class="flex items-baseline gap-3 mb-8">
        <p class="font-mono text-[10px] uppercase tracking-[0.4px]" style="color:#e3b341">Visual reference</p>
        <p class="font-mono text-[10px] text-[#7d8590]">{{ imageCategories.reduce((n, c) => n + c.images.length, 0) }} screenshots across {{ imageCategories.length }} folders</p>
      </div>

      <div v-for="cat in imageCategories" :key="cat.num" class="mb-12">
        <!-- Category header -->
        <div class="flex items-center gap-3 mb-4">
          <span class="font-mono text-[10px] font-bold" style="color:#e3b341">{{ cat.num }}</span>
          <span class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#e6edf3]">{{ cat.label }}</span>
          <div class="flex-1 h-px bg-[#21262d]" />
          <span class="font-mono text-[10px] text-[#7d8590]">{{ cat.images.length }} images</span>
        </div>

        <!-- Masonry-style image grid using CSS columns -->
        <div class="columns-3 gap-3">
          <div
            v-for="img in cat.images"
            :key="img.src"
            class="break-inside-avoid mb-3 group relative rounded overflow-hidden"
            style="border:1px solid #21262d"
          >
            <img
              :src="img.src"
              :alt="img.name"
              class="w-full block"
              loading="lazy"
            />
            <div
              class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity"
              style="background:linear-gradient(to top, rgba(13,17,23,0.85) 0%, transparent 50%)"
            >
              <p class="px-3 py-2.5 text-[11px] text-[#e6edf3] leading-tight">{{ img.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
