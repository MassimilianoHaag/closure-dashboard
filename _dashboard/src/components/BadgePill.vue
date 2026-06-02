<script setup>
defineProps({
  variant: { type: String, default: 'default' }, // 'max' | 'guz' | 'session' | 'change'
  text:    { type: String, required: true }
})

const variantClasses = {
  max:     'bg-[#bc8cff]/12 text-[#bc8cff]',
  guz:     'bg-[#3fb950]/12 text-[#3fb950]',
  session: 'bg-[#58a6ff]/10 text-[#58a6ff]',
  change:  'bg-[#ffa657]/12 text-[#ffa657]',
}
</script>

<template>
  <span :class="[
    'text-[10px] font-semibold tracking-[0.4px] uppercase px-2 py-0.5 rounded-full',
    variantClasses[variant] ?? 'bg-white/[0.07] text-[#7d8590]'
  ]">{{ text }}</span>
</template>
