<script setup>
defineProps({
  meta:   { type: Object, required: true }, // { status, date, sources }
  accent: { type: String, default: '#79c0ff' }
})
</script>

<template>
  <div class="bg-[#161b22] border border-[#21262d] rounded-md px-6 py-4 mb-5 flex items-center gap-4 flex-wrap">
    <div class="flex items-center gap-3 flex-1 min-w-0">
      <div class="w-2 h-2 rounded-full shrink-0" :style="{ background: accent }" />
      <h1 class="text-[15px] font-semibold tracking-tight">Empathize Stage</h1>
      <span
        class="font-mono text-[10px] px-2 py-0.5 rounded-full"
        :style="{ background: 'rgba(121,192,255,0.1)', color: accent }"
      >stage complete</span>
    </div>
    <div class="flex items-center gap-3 text-[#7d8590] flex-wrap">
      <span class="font-mono text-[10px]">{{ meta.sources }}</span>
      <span class="opacity-30">·</span>
      <span class="font-mono text-[10px]">{{ meta.date }}</span>
    </div>
  </div>
</template>
