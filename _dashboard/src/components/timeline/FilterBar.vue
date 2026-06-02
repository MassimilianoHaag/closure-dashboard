<script setup>
defineProps({
  counts: { type: Object, required: true }, // { all, log, change }
  active: { type: String, required: true }
})

const emit = defineEmits(['change'])

const filters = [
  { key: 'all',    label: 'All' },
  { key: 'log',    label: 'Session' },
  { key: 'change', label: 'Changes' },
]
</script>

<template>
  <nav class="flex gap-4 mb-8 justify-end">
    <button
      v-for="f in filters"
      :key="f.key"
      @click="emit('change', f.key)"
      :class="[
        'font-mono text-[10px] uppercase tracking-[0.4px] cursor-pointer transition-colors',
        f.key === active ? 'text-[#e6edf3]' : 'text-[#484f58] hover:text-[#7d8590]'
      ]"
    >
      {{ f.label }}
    </button>
  </nav>
</template>
