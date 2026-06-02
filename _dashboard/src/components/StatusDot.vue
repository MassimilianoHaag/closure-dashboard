<script setup>
defineProps({
  color: { type: String, default: 'empty' }, // 'green' | 'orange' | 'red' | 'empty'
  size:  { type: String, default: 'md' }     // 'sm' | 'md'
})
</script>

<template>
  <div :class="[
    size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2',
    'rounded-full shrink-0',
    color === 'green'  ? 'bg-[#3fb950]' :
    color === 'orange' ? 'bg-[#ffa657]' :
    color === 'red'    ? 'bg-[#ff7b72]' :
    'border border-[#7d8590]'
  ]" />
</template>
