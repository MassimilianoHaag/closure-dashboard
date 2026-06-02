<script setup>
defineProps({
  name:     { type: String, required: true },
  initials: { type: String, required: true },
  tagline:  { type: String, required: true },
  meta:     { type: Array, default: () => [] },
  accent:   { type: String, default: '#f0883e' }
})
</script>

<template>
  <div class="bg-[#161b22] border border-[#21262d] rounded-md px-6 py-5 mb-5 flex items-start gap-6">
    <div
      class="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
      :style="{ background: 'rgba(240,136,62,0.12)', border: '1px solid rgba(240,136,62,0.3)' }"
    >
      <span :style="{ color: accent }" class="text-lg font-semibold">{{ initials }}</span>
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between gap-4 mb-1.5">
        <h1 class="text-[17px] font-semibold tracking-tight"><a href="/">{{ name }}</a></h1>
        <span
          class="font-mono text-[10px] uppercase tracking-[0.4px] px-2.5 py-0.5 rounded-full shrink-0"
          :style="{ background: 'rgba(240,136,62,0.1)', color: accent }"
        >primary persona</span>
      </div>
      <p class="text-[14px] text-[#e6edf3] italic mb-3 opacity-80">"{{ tagline }}"</p>
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="m in meta"
          :key="m"
          class="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[#21262d] text-[#7d8590]"
        >{{ m }}</span>
      </div>
    </div>
  </div>
</template>
