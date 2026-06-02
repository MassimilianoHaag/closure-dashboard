<script setup>
import { computed } from 'vue'
import { normalize, esc } from '../../utils/markdown.js'

const props = defineProps({
  raw: { type: String, required: true }
})

const TIER = {
  Strong:   { bg: 'rgba(63,185,80,0.1)',    color: '#3fb950' },
  Partial:  { bg: 'rgba(255,166,87,0.1)',   color: '#ffa657' },
  Untested: { bg: 'rgba(125,133,144,0.12)', color: '#7d8590' },
}

const drivers = computed(() => {
  const text     = normalize(props.raw)
  const tierRx   = /^### (.+)$/gm
  const tierHits = [...text.matchAll(tierRx)]
  const rows     = []

  tierHits.forEach((match, i) => {
    const tierLabel = match[1].split('—')[0].split('-')[0].trim()
    const start     = match.index + match[0].length + 1
    const end       = i < tierHits.length - 1 ? tierHits[i + 1].index : text.length
    const chunk     = text.slice(start, end).trim()
    const colors    = TIER[tierLabel] ?? TIER['Untested']

    chunk.split(/\n(?=\*\*\d)/).filter(d => d.trim()).forEach(driver => {
      const nm = driver.match(/^\*\*(.+?)\*\*/)
      if (!nm) return
      const name = nm[1].replace(/^\d+\.\s*/, '')
      const body = driver.slice(nm[0].length).trim()
      let bodyHtml = esc(body)
      bodyHtml = bodyHtml.replace(/\*(.+?)\*/g, '<span class="italic text-xs">$1</span>')
      rows.push({ tierLabel, name, bodyHtml, colors })
    })
  })

  return rows
})
</script>

<template>
  <div>
    <div
      v-for="(driver, i) in drivers"
      :key="i"
      class="flex gap-3 py-3 border-b border-[#21262d] last:border-0 items-start"
    >
      <span
        class="font-mono text-[9px] uppercase tracking-[0.4px] px-2 py-0.5 rounded-full shrink-0 mt-0.5 whitespace-nowrap"
        :style="{ background: driver.colors.bg, color: driver.colors.color }"
      >{{ driver.tierLabel }}</span>
      <div class="min-w-0">
        <p class="text-[13px] text-[#e6edf3] font-medium mb-1">{{ driver.name }}</p>
        <p class="text-[12px] text-[#7d8590] leading-relaxed" v-html="driver.bodyHtml" />
      </div>
    </div>
  </div>
</template>
