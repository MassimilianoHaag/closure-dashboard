<script setup>
import { ref } from 'vue'
import DayColumn from '../DayColumn.vue'
import BadgePill from '../BadgePill.vue'
import { inlineHtml } from '../../utils/markdown.js'

defineProps({
  group:    { type: Object, required: true },
  dayLabel: { type: Object,  default: null },
  isLast:   { type: Boolean, default: false }
})

const expanded = ref({})

function toggle(i) {
  expanded.value = { ...expanded.value, [i]: !expanded.value[i] }
}

function isLong(body) {
  return body.length > 180
}
</script>

<template>
  <div class="grid grid-cols-[60px_20px_1fr] gap-x-3 items-stretch">
    <DayColumn :label="dayLabel" />
    <div class="flex flex-col items-center self-stretch">
      <div :class="[
        'w-3 h-3 rounded-full border-2 border-[#0d1117] shrink-0 z-10',
        group.author === 'max' ? 'bg-[#bc8cff]' : 'bg-[#3fb950]'
      ]" />
      <div v-if="!isLast" class="flex-1 w-0.5 min-h-5 bg-[#30363d]" />
    </div>
    <div class="pt-2 pb-6">
      <div class="bg-[#161b22] border border-[#21262d] rounded-md px-4 py-3.5 min-w-0">
        <div class="flex items-center flex-wrap gap-2 mb-2.5">
          <BadgePill :variant="group.author" :text="group.author" />
          <BadgePill
            variant="session"
            :text="group.entries.length > 1 ? `${group.entries.length} sessions` : 'session'"
          />
        </div>
        <div
          v-for="(entry, i) in group.entries"
          :key="i"
          :class="i < group.entries.length - 1 ? 'pb-3 mb-3 border-b border-[#21262d]' : ''"
        >
          <p
            :class="['text-[#e6edf3] text-xs wrap-break-word leading-relaxed', isLong(entry.body) && !expanded[i] ? 'line-clamp-3' : '']"
            v-html="inlineHtml(entry.body)"
          />
          <button
            v-if="isLong(entry.body)"
            @click="toggle(i)"
            class="mt-1.5 font-mono text-[10px] text-[#484f58] hover:text-[#7d8590] transition-colors cursor-pointer bg-transparent border-0 p-0"
          >{{ expanded[i] ? 'show less ↑' : 'show more ↓' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
