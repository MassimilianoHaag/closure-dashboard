<script setup>
defineProps({
  label: { type: Object, default: null } // { weekday, dayMonth } | null
})
</script>

<template>
  <div class="flex flex-col items-end justify-start gap-px">
    <template v-if="label">
      <span class="font-mono text-[13px] font-medium text-[#7d8590] whitespace-nowrap">{{ label.dayMonth }}</span>
      <span class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] opacity-60">{{ label.weekday }}</span>
    </template>
  </div>
</template>
