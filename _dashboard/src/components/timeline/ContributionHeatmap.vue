<script setup>
import { computed } from 'vue'
import { parseUnifiedLog } from '../../utils/markdown.js'
import workingLogRaw from '../../../../Project/00_Working_Log.md?raw'

const entries = parseUnifiedLog(workingLogRaw)

const byDate = computed(() => {
  const m = {}
  for (const e of entries) m[e.date] = (m[e.date] || 0) + 1
  return m
})

function toDate(s) { return new Date(s + 'T12:00:00') }
function toISO(d)  { return d.toISOString().slice(0, 10) }

// Grid: Mon of week before first entry → Sun of week after deadline
const GRID_START = toDate('2026-05-11') // Mon — one week before project kickoff
const GRID_END   = toDate('2026-06-07') // Sun — one week after deadline (Jun 2)

const weeks = computed(() => {
  const result = []
  const cur = new Date(GRID_START)
  while (cur <= GRID_END) {
    const week = []
    for (let i = 0; i < 7; i++) {
      week.push(toISO(cur))
      cur.setDate(cur.getDate() + 1)
    }
    result.push(week)
  }
  return result
})

const COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']

function level(dateStr) {
  const n = byDate.value[dateStr] || 0
  if (n === 0) return 0
  if (n <= 2) return 1
  if (n <= 4) return 2
  if (n <= 8) return 3
  return 4
}

const monthLabels = computed(() => {
  const seen = new Set()
  return weeks.value.map((week) => {
    const d = toDate(week[0])
    const key = `${d.getFullYear()}-${d.getMonth()}`
    if (!seen.has(key)) {
      seen.add(key)
      return d.toLocaleDateString('en-US', { month: 'short' })
    }
    return null
  })
})

const DAY_LABELS = ['Mon', '', 'Wed', '', 'Fri', '', '']
const today = new Date().toISOString().slice(0, 10)

function tip(dateStr) {
  const n = byDate.value[dateStr] || 0
  const d = toDate(dateStr)
  const fmt = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  return n === 0 ? `No entries · ${fmt}` : `${n} ${n === 1 ? 'entry' : 'entries'} · ${fmt}`
}

const totalEntries = entries.length
const activeDays = computed(() => Object.keys(byDate.value).length)
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-2">
      <span class="text-[11px] text-[#7d8590] font-medium tracking-wider uppercase select-none">
        {{ totalEntries }} entries · {{ activeDays }} active days
      </span>
      <div class="flex items-center gap-1">
        <span class="text-[10px] text-[#484f58] mr-1 select-none">Less</span>
        <div
          v-for="(c, i) in COLORS" :key="i"
          class="rounded-[2px]"
          style="width: 10px; height: 10px"
          :style="{ background: c }"
        />
        <span class="text-[10px] text-[#484f58] ml-1 select-none">More</span>
      </div>
    </div>

    <div class="flex gap-[5px] items-start">
      <!-- Day labels -->
      <div class="flex flex-col gap-[3px] select-none shrink-0" style="padding-top: 19px; width: 24px">
        <div
          v-for="(label, i) in DAY_LABELS" :key="i"
          class="text-[9px] text-[#484f58] leading-none"
          style="height: 12px; line-height: 12px"
        >{{ label }}</div>
      </div>

      <!-- Month labels + cell grid -->
      <div>
        <div class="flex gap-[3px] mb-[3px]" style="height: 16px">
          <div
            v-for="(label, i) in monthLabels" :key="i"
            style="width: 12px; flex-shrink: 0"
          >
            <span
              v-if="label"
              class="text-[10px] text-[#7d8590] whitespace-nowrap leading-none select-none"
            >{{ label }}</span>
          </div>
        </div>

        <div class="flex gap-[3px]">
          <div v-for="(week, wi) in weeks" :key="wi" class="flex flex-col gap-[3px]">
            <div
              v-for="(day, di) in week" :key="di"
              class="rounded-[2px] shrink-0"
              style="width: 12px; height: 12px; cursor: default"
              :style="{
                background: COLORS[level(day)],
                boxShadow: day === today ? '0 0 0 1px #58a6ff' : 'none'
              }"
              :title="tip(day)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
