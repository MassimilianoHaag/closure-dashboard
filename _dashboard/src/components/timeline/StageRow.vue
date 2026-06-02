<script setup>
import { computed } from 'vue'
import StatusDot from '../StatusDot.vue'

const props = defineProps({
  name:  { type: String, required: true },
  count: { type: Number, required: true },
  links: { type: Array, default: () => [] },
  color: { type: String, default: null }   // optional override for dot colour
})

const status = computed(() => {
  if (props.count >= 3) return 'done'
  if (props.count > 0)  return 'started'
  return 'empty'
})

const dotColor = computed(() => props.color ?? { done: 'green', started: 'orange', empty: 'empty' }[status.value])
const nameClass = computed(() => status.value === 'empty' ? 'text-sm text-[#7d8590]' : 'text-sm text-[#e6edf3]')
const countClass = computed(() => ({
  done:    'ml-auto font-mono text-[10px] text-[#3fb950]',
  started: 'ml-auto font-mono text-[10px] text-[#ffa657]',
  empty:   'ml-auto font-mono text-[10px] text-[#7d8590]',
}[status.value]))
const countText = computed(() =>
  props.count > 0 ? `${props.count} doc${props.count !== 1 ? 's' : ''}` : '—'
)
</script>

<template>
  <div class="flex flex-col py-3.5 border-b border-[#21262d] last:border-0">
    <div class="flex items-center gap-2.5">
      <StatusDot :color="dotColor" />
      <span :class="nameClass">{{ name }}</span>
      <span :class="countClass">{{ countText }}</span>
    </div>
    <ul v-if="links.length" class="ml-4.5 mt-1.5 flex flex-col gap-1">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener noreferrer' : undefined" class="font-mono text-[10px] text-[#58a6ff] hover:underline underline-offset-2">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>
