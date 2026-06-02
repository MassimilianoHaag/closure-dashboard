<script setup>
import { ref, computed } from 'vue'
import FilterBar from './FilterBar.vue'
import LogGroup from './LogGroup.vue'
import ChangeEntry from './ChangeEntry.vue'
import { parseUnifiedLog } from '../../utils/markdown.js'

import workingLogRaw from '../../../../Project/00_Working_Log.md?raw'

const allEntries = parseUnifiedLog(workingLogRaw).sort((a, b) => b.date.localeCompare(a.date))

const counts = {
  all:    allEntries.length,
  log:    allEntries.filter(e => e.type === 'log').length,
  change: allEntries.filter(e => e.type === 'change').length,
}

const currentFilter = ref('all')

const filtered = computed(() =>
  currentFilter.value === 'all'
    ? allEntries
    : allEntries.filter(e => e.type === currentFilter.value)
)

function groupEntries(entries) {
  const groups = []
  const keyIndex = new Map()
  for (const entry of entries) {
    if (entry.type !== 'log') {
      groups.push({ type: 'change', date: entry.date, entries: [entry] })
      continue
    }
    const key = `${entry.date}|${entry.author}`
    if (keyIndex.has(key)) {
      groups[keyIndex.get(key)].entries.push(entry)
    } else {
      keyIndex.set(key, groups.length)
      groups.push({ type: 'log', date: entry.date, author: entry.author, entries: [entry] })
    }
  }
  return groups
}

function formatDayLabel(dateStr) {
  const d = new Date(dateStr + 'T12:00:00')
  return {
    weekday:  d.toLocaleDateString('en-US', { weekday: 'short' }),
    dayMonth: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
  }
}

const groups = computed(() => {
  let lastDate = null
  return groupEntries(filtered.value).map((group, i, arr) => {
    const dayLabel = group.date !== lastDate ? formatDayLabel(group.date) : null
    lastDate = group.date
    return { ...group, dayLabel, isLast: i === arr.length - 1 }
  })
})
</script>

<template>
  <div>
    <FilterBar :counts="counts" :active="currentFilter" @change="currentFilter = $event" />
    <div class="flex flex-col">
      <p v-if="groups.length === 0" class="text-[#7d8590] text-center py-16 text-[13px]">No entries yet.</p>
      <template v-else v-for="(group, i) in groups" :key="i">
        <LogGroup
          v-if="group.type === 'log'"
          :group="group"
          :day-label="group.dayLabel"
          :is-last="group.isLast"
        />
        <ChangeEntry
          v-else
          :entry="group.entries[0]"
          :day-label="group.dayLabel"
          :is-last="group.isLast"
        />
      </template>
    </div>
  </div>
</template>
