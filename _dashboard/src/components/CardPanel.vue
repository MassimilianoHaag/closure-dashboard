<script setup>
defineProps({
  label: { type: String, required: true }
})
</script>

<template>
  <div class="bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4 flex flex-col">
    <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-4">{{ label }}</p>
    <div class="flex-1"><slot /></div>
  </div>
</template>
