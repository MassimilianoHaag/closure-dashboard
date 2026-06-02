<script setup>
import CardPanel from '../components/CardPanel.vue'
import EmpathizeHeader from '../components/empathize/EmpathizeHeader.vue'
import PainDriversList from '../components/empathize/PainDriversList.vue'
import { parseSections, parseMeta, mdBlock } from '../utils/markdown.js'

import synthesisRaw from '../../../01_Empathize/Empathize_Synthesis.md?raw'

const ACCENT = '#79c0ff'

const sections = parseSections(synthesisRaw)
const meta     = parseMeta(synthesisRaw)

// Slice a subsection by bold marker boundaries within a section
function sliceAt(text, startMarker, endMarker) {
  const s = text.indexOf(startMarker)
  if (s === -1) return ''
  const from = s + startMarker.length
  const e = endMarker ? text.indexOf(endMarker, from) : text.length
  return (e === -1 ? text.slice(from) : text.slice(from, e)).trim()
}

const s4 = sections['Section 4 — What Define stage starts with'] ?? ''
const audienceRaw      = sliceAt(s4, '**Audience:**', '**Pain points safe')
const defineForwardRaw = sliceAt(s4, '**Pain points safe to build personas around:**', null)
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">
    <EmpathizeHeader :meta="meta" :accent="ACCENT" />

    <!-- Intro: question + methodology -->
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div class="col-span-2 bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4">
        <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-3">research question</p>
        <p class="text-[14px] text-[#e6edf3] leading-relaxed mb-2.5 font-medium">
          What stops a designer from documenting a project they just finished?
        </p>
        <p class="text-[13px] text-[#7d8590] leading-relaxed">
          Creative professionals ship project-based work and are expected to explain it. Most don't. We researched the actual mechanics behind that failure — not "they're busy" but the specific friction points where documentation breaks down, and when it does.
        </p>
      </div>
      <div class="bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4">
        <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-4">methodology</p>
        <div class="flex flex-col gap-3">
          <div class="flex items-start gap-2.5">
            <span class="shrink-0 font-bold mt-0.5" style="color:#79c0ff">·</span>
            <div>
              <p class="text-[13px] text-[#e6edf3]">Secondary research</p>
              <p class="text-[12px] text-[#7d8590]">11 independent sources</p>
            </div>
          </div>
          <div class="flex items-start gap-2.5">
            <span class="shrink-0 font-bold mt-0.5" style="color:#79c0ff">·</span>
            <div>
              <p class="text-[13px] text-[#e6edf3]">Survey Round 1</p>
              <p class="text-[12px] text-[#7d8590]">n=5, internal designers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Who we studied -->
    <div class="mb-4">
      <CardPanel label="Who we studied">
        <div v-html="mdBlock(audienceRaw, ACCENT)" />
      </CardPanel>
    </div>

    <!-- Key findings -->
    <div class="mb-4">
      <CardPanel label="Key findings">
        <div v-html="mdBlock(sections['Section 1 — What we know about the user'] ?? '', ACCENT)" />
      </CardPanel>
    </div>

    <!-- Pain drivers -->
    <div class="mb-4">
      <CardPanel label="Pain drivers — ranked by evidence strength">
        <PainDriversList :raw="sections['Section 2 — The four pain drivers, ranked by evidence strength'] ?? ''" />
      </CardPanel>
    </div>

    <!-- Contested assumption + what Define takes forward -->
    <div class="grid grid-cols-2 gap-4">
      <CardPanel label="The contested assumption">
        <div v-html="mdBlock(sections['Section 3 — The contested assumption'] ?? '', ACCENT)" />
      </CardPanel>
      <CardPanel label="What Define takes forward">
        <div v-html="mdBlock(defineForwardRaw, ACCENT)" />
      </CardPanel>
    </div>
  </div>
</template>
