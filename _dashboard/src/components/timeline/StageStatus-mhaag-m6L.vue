<script setup>
import { computed } from 'vue'
import StageRow from './StageRow.vue'
import StatusDot from '../StatusDot.vue'
import { daysUntil } from '../../utils/markdown.js'

const empathizeFiles = import.meta.glob('../../../../01_Empathize/**/*.md', { query: '?raw', import: 'default', eager: true })
const defineFiles    = import.meta.glob('../../../../02_Define/**/*.md',    { query: '?raw', import: 'default', eager: true })
const ideateFiles    = import.meta.glob('../../../../03_Ideate/**/*.md',    { query: '?raw', import: 'default', eager: true })
const nk = obj => Object.keys(obj).length

const days = daysUntil('2026-06-02')
const urgency = computed(() => {
  if (days <= 3) return { color: 'red',    textClass: 'text-[#ff7b72]' }
  if (days <= 7) return { color: 'orange', textClass: 'text-[#ffa657]' }
  return              { color: 'green',  textClass: 'text-[#3fb950]' }
})
</script>

<template>
  <div class="sticky top-10">
    <div class="flex items-center mb-10 pb-5 border-b border-[#21262d]">
      <a class="text-[17px] font-semibold tracking-tight" href="/">closure</a>
      <span class="font-mono text-xs text-[#7d8590] ml-2.5">dashboard</span>
    </div>

    <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-5">Stage Status</p>

    <div class="flex items-center gap-2.5 mb-5 pb-5 border-b border-[#21262d]">
      <StatusDot :color="urgency.color" />
      <span class="text-sm text-[#e6edf3]">{{ days }} day{{ days !== 1 ? 's' : '' }} to Jun 2</span>
      <span :class="['ml-auto font-mono text-[10px]', urgency.textClass]">presentation</span>
    </div>

    <div>
      <StageRow name="Empathize"    :count="nk(empathizeFiles)" :links="[{ label: 'Empathize Synthesis', href: './empathize.html' }, { label: 'Journey Map', href: './journey.html' }]" />
      <StageRow name="Define"       :count="nk(defineFiles)"    :links="[{ label: 'Problem Statement', href: './problem.html' }, { label: 'Persona — Mara Santos', href: './persona.html' }, { label: 'Moodboard', href: './moodboard.html' }]" />
      <StageRow name="Ideate" :count="nk(ideateFiles)" :links="[{ label: 'Concept Definition', href: './ideate.html' }, { label: 'Schema', href: './schema.html' }]" />
    </div>
  </div>
</template>
