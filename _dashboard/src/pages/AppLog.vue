<script setup>
import StageStatus from '../components/timeline/StageStatus.vue'
import TimelineView from '../components/timeline/TimelineView.vue'
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">
    <div class="grid grid-cols-[1fr_1fr] gap-60 items-start">
      <StageStatus />
      <div>
<TimelineView />
      </div>
    </div>
  </div>
</template>
