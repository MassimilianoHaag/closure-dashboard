<script setup>
import CardPanel from '../components/CardPanel.vue'
import StatusDot from '../components/StatusDot.vue'

const ACCENT = '#ffa657'

const SCREENS = [
  { name: 'Gallery', register: 'parchment', viewport: 'desktop' },
  { name: 'Recording', register: 'dark', viewport: 'mobile' },
  { name: 'Project Frame', register: 'dark', viewport: 'desktop' },
  { name: 'AI Reflection', register: 'dark', viewport: 'desktop' },
  { name: 'Case Study Draft', register: 'parchment', viewport: 'desktop' },
  { name: 'Immediate Upload', register: 'dark', viewport: 'mobile' },
]

const PASS2_SCREENS = [
  { name: 'Recording', status: 'in progress' },
  { name: 'Immediate Upload', status: 'queued' },
  { name: 'AI Reflection', status: 'queued' },
  { name: 'Case Study Draft', status: 'queued' },
  { name: 'Gallery (populated)', status: 'queued' },
  { name: 'Project Frame', status: 'deferred' },
]
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">

    <!-- Page header -->
    <div class="mb-8">
      <div class="flex items-baseline gap-3 mb-1">
        <h1 class="text-2xl font-semibold tracking-tight" :style="`color:${ACCENT}`">Prototype</h1>
        <span class="font-mono text-[11px] text-[#7d8590]">04_Prototype/</span>
      </div>
      <p class="text-[13px] text-[#7d8590]">Three-pass build: Pass 1 lo-fi locked · Pass 2 React+MUI in progress · Pass 3 polish not started</p>
    </div>

    <!-- Live build — most prominent -->
    <div class="mb-4">
      <CardPanel label="Live build">
        <div class="flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <StatusDot color="green" />
              <a
                href="https://closure-prototype.vercel.app/"
                target="_blank"
                class="text-[15px] font-semibold hover:underline"
                :style="`color:${ACCENT}`"
              >closure-prototype.vercel.app</a>
            </div>
            <p class="text-[12px] text-[#7d8590]">Auto-deploys from <code class="text-[#c9d1d9] bg-[#21262d] px-1 py-0.5 rounded text-[11px]">main</code> branch. Parchment register live. Dark register switching on Recording + AI Reflection.</p>
          </div>
          <a
            href="https://github.com/MassimilianoHaag/closure-prototype"
            target="_blank"
            class="shrink-0 ml-6 px-3 py-1.5 rounded-md text-[11px] font-mono text-[#7d8590] border border-[#21262d] hover:border-[#7d8590] hover:text-[#e6edf3] transition-colors"
          >GitHub ↗</a>
        </div>
      </CardPanel>
    </div>

    <!-- Pass 1 + Pass 2 side by side -->
    <div class="grid grid-cols-2 gap-4 mb-4">

      <!-- Pass 1 -->
      <CardPanel label="Pass 1 — Lo-fi (complete)">
        <div class="flex items-center gap-2 mb-3">
          <StatusDot color="green" />
          <span class="text-[12px] font-medium text-[#e6edf3]">6 screens locked · 19 constraints · audit done</span>
        </div>
        <p class="text-[12px] text-[#7d8590] mb-4">
          Two registers (parchment/dark), two viewports (desktop/mobile). Continuity audit run; findings deferred to Pass 2 as inputs.
        </p>

        <!-- Screen list -->
        <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-2">Screens</p>
        <div class="flex flex-col gap-1.5 mb-4">
          <div
            v-for="s in SCREENS"
            :key="s.name"
            class="flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <StatusDot color="green" size="sm" />
              <span class="text-[12px] text-[#c9d1d9]">{{ s.name }}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="font-mono text-[10px] text-[#7d8590]">{{ s.viewport }}</span>
              <span class="font-mono text-[10px] px-1.5 py-0.5 rounded"
                :style="s.register === 'dark'
                  ? 'background:rgba(88,166,255,0.1); color:#58a6ff'
                  : 'background:rgba(255,166,87,0.1); color:#ffa657'">
                {{ s.register }}
              </span>
            </div>
          </div>
        </div>

        <a
          href="https://github.com/MassimilianoHaag/closure-prototype"
          class="font-mono text-[11px] text-[#7d8590] hover:text-[#e6edf3] transition-colors"
        >04_Prototype/Pass_1_LowFi/Decisions/ ↗</a>
      </CardPanel>

      <!-- Pass 2 -->
      <CardPanel label="Pass 2 — React + MUI build (in progress)">
        <div class="flex items-center gap-2 mb-3">
          <StatusDot color="orange" />
          <span class="text-[12px] font-medium text-[#e6edf3]">Theme deployed · screens building in demo order</span>
        </div>
        <p class="text-[12px] text-[#7d8590] mb-4">
          First working React + Material UI implementation of all Pass 1 locked screens.
          <code class="text-[#c9d1d9] bg-[#21262d] px-1 py-0.5 rounded text-[11px]">parchmentTheme</code> and
          <code class="text-[#c9d1d9] bg-[#21262d] px-1 py-0.5 rounded text-[11px]">darkTheme</code> committed to <code class="text-[#c9d1d9] bg-[#21262d] px-1 py-0.5 rounded text-[11px]">src/theme/</code>.
        </p>

        <!-- Build order -->
        <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-2">Build order</p>
        <div class="flex flex-col gap-1.5">
          <div
            v-for="(s, idx) in PASS2_SCREENS"
            :key="s.name"
            class="flex items-center justify-between"
          >
            <div class="flex items-center gap-2">
              <span class="font-mono text-[10px] text-[#7d8590] w-4">{{ idx + 1 }}</span>
              <StatusDot
                :color="s.status === 'in progress' ? 'orange' : 'empty'"
                size="sm"
              />
              <span class="text-[12px]" :class="s.status === 'deferred' ? 'text-[#7d8590]' : 'text-[#c9d1d9]'">{{ s.name }}</span>
            </div>
            <span
              class="font-mono text-[10px]"
              :style="s.status === 'in progress' ? 'color:#ffa657' : 'color:#7d8590'"
            >{{ s.status }}</span>
          </div>
        </div>
      </CardPanel>
    </div>

    <!-- Pass 3 -->
    <CardPanel label="Pass 3 — Polish + demo-readiness (not started)">
      <div class="flex items-center gap-2">
        <StatusDot color="empty" />
        <span class="text-[12px] text-[#7d8590]">Interaction refinement, real content, final Vercel build for presentation. Starts after Pass 2 screens are end-to-end.</span>
      </div>
    </CardPanel>

  </div>
</template>
