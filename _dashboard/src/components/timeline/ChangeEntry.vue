<script setup>
import DayColumn from '../DayColumn.vue'
import BadgePill from '../BadgePill.vue'
import { inlineHtml } from '../../utils/markdown.js'

defineProps({
  entry:    { type: Object,  required: true },
  dayLabel: { type: Object,  default: null },
  isLast:   { type: Boolean, default: false }
})
</script>

<template>
  <div class="grid grid-cols-[60px_20px_1fr] gap-x-3 items-stretch">
    <DayColumn :label="dayLabel" />
    <div class="flex flex-col items-center self-stretch">
      <div class="w-3 h-3 rounded-full border-2 border-[#0d1117] shrink-0 z-10 bg-[#ffa657]" />
      <div v-if="!isLast" class="flex-1 w-0.5 min-h-5 bg-[#30363d]" />
    </div>
    <div class="pt-2 pb-6">
      <div class="bg-[#161b22] border border-[#21262d] rounded-md px-4 py-3.5 min-w-0">
        <div class="flex items-center flex-wrap gap-2 mb-2.5">
          <BadgePill variant="change" text="design change" />
        </div>
        <p class="text-sm font-medium text-[#e6edf3] mb-2.5 wrap-break-word">{{ entry.title }}</p>
        <dl class="flex flex-col gap-1.5 border-t border-[#21262d] pt-2.5">
          <div v-if="entry.whatChanged" class="flex gap-4 items-baseline">
            <dt class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#ffa657] min-w-22.5 shrink-0">what changed</dt>
            <dd class="text-[13px] text-[#7d8590] leading-relaxed wrap-break-word" v-html="inlineHtml(entry.whatChanged)" />
          </div>
          <div v-if="entry.why" class="flex gap-4 items-baseline">
            <dt class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#ffa657] min-w-22.5 shrink-0">why</dt>
            <dd class="text-[13px] text-[#7d8590] leading-relaxed wrap-break-word" v-html="inlineHtml(entry.why)" />
          </div>
          <div v-if="entry.impact" class="flex gap-4 items-baseline">
            <dt class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#ffa657] min-w-22.5 shrink-0">impact</dt>
            <dd class="text-[13px] text-[#7d8590] leading-relaxed wrap-break-word" v-html="inlineHtml(entry.impact)" />
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
