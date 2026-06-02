<script setup>
import { computed } from 'vue'
import StatusDot from '../StatusDot.vue'

const props = defineProps({
  name:   { type: String, required: true },
  passes: { type: Array, required: true },
  links:  { type: Array, default: () => [] } // [{ label: string, href: string }]
})

const anyDone = computed(() => props.passes.some(p => p.done))
</script>

<template>
  <div class="flex flex-col gap-2 py-3.5 border-b border-[#21262d] last:border-0">
    <div class="flex items-center gap-2.5">
      <StatusDot :color="anyDone ? 'orange' : 'empty'" />
      <span :class="anyDone ? 'text-sm text-[#e6edf3]' : 'text-sm text-[#7d8590]'">{{ name }}</span>
    </div>
    <div class="flex gap-4 ml-4.5">
      <div v-for="pass in passes" :key="pass.label" class="flex items-center gap-1.5">
        <StatusDot :color="pass.done ? 'green' : 'empty'" size="sm" />
        <span :class="['font-mono text-[10px]', pass.done ? 'text-[#3fb950]' : 'text-[#7d8590]']">{{ pass.label }}</span>
      </div>
    </div>
    <div v-if="links.length" class="flex flex-col gap-1 ml-4.5">
      <a v-for="link in links" :key="link.href"
        :href="link.href"
        class="font-mono text-[10px] text-[#7d8590] hover:text-[#e6edf3] transition-colors"
      >↗ {{ link.label }}</a>
    </div>
  </div>
</template>
