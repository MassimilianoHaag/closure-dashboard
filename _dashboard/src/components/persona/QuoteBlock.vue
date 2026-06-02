<script setup>
defineProps({
  quote:       { type: String, required: true },
  attribution: { type: String, default: '' },
  accent:      { type: String, default: '#f0883e' }
})
</script>

<template>
  <div class="bg-[#161b22] border border-[#21262d] rounded-md px-6 py-5 mb-4">
    <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-4">Representative quote</p>
    <blockquote class="pl-4" :style="{ borderLeft: `2px solid ${accent}` }">
      <p class="text-[15px] text-[#e6edf3] leading-relaxed italic mb-2">"{{ quote }}"</p>
      <p class="text-xs text-[#7d8590]">— {{ attribution }}</p>
    </blockquote>
  </div>
</template>
