<script setup>
import CardPanel from '../components/CardPanel.vue'
import { parseSections, normalize, mdBlock } from '../utils/markdown.js'

import journeyRaw from '../../../01_Empathize/User_Journey_Map_CurrentState.md?raw'

const ACCENT = '#56d364'
const sections = parseSections(journeyRaw)

function parseStages(raw) {
  const text = normalize(raw ?? '')
  const rx   = /^### (.+)$/gm
  const hits = [...text.matchAll(rx)]

  return hits.map((match, i) => {
    const fullTitle = match[1].trim()
    const start     = match.index + match[0].length + 1
    const end       = i < hits.length - 1 ? hits[i + 1].index : text.length
    const chunk     = text.slice(start, end)

    function sub(label) {
      const m = chunk.match(new RegExp(`\\*\\*${label}\\*\\*\\s*\\n([\\s\\S]*?)(?=\\n\\*\\*|\\n---|$)`))
      return m ? m[1].trim() : ''
    }

    const thoughts  = [...chunk.matchAll(/^> \*"(.+?)"\*/gm)].map(m => m[1])
    const painRaw   = sub('Pain points')
    const painItems = painRaw.split('\n')
      .filter(l => l.trim().startsWith('- '))
      .map(l => l.trim().slice(2))
    const num       = parseInt(fullTitle.match(/Stage (\d+)/)?.[1] ?? '0')

    return {
      num,
      name:           fullTitle.replace(/^Stage \d+\s*—\s*/, '').replace(/\s*\(.+\)/, '').trim(),
      timeNote:       (fullTitle.match(/\((.+?)\)/) ?? [])[1] ?? null,
      feelings:       sub('Feelings'),
      actions:        sub("Mara's actions"),
      thoughts,
      painItems,
      isIntervention: num === 2,
    }
  })
}

const stages          = parseStages(sections['Journey'])
const interventionRaw = sections['Highest-leverage intervention window'] ?? ''
const keyQuotes       = [...(sections['Key quotes grounding this map'] ?? '')
  .matchAll(/^> \*"(.+?)"\*\s*— (.+)$/gm)]
  .map(m => ({ text: m[1], attr: m[2].trim() }))

// Emotion arc — Y as percentage of row height (0=top/best, 100=bottom/worst)
// Each dot lives in its own flex column so it's always centered in the table column.
// The SVG uses preserveAspectRatio="none" with viewBox "0 0 600 100" so its path
// points (at x=50,150,250,350,450,550 and y=arcYPcts[i]) perfectly align with the dots.
const arcYPcts      = [10, 32, 74, 42, 67, 82]   // % of row height
const emotionLabels = ['Relief', 'Dread', 'Friction', 'Resignation', 'Avoidance', 'Regret']
const svgLinePts    = arcYPcts.map((y, i) => `${50 + i * 100},${y}`).join(' ')
const svgAreaPath   = `M 0,100 L ${svgLinePts} L 600,100 Z`

// Cell bg for intervention column
const interventionBg = 'background: rgba(86,211,100,0.04)'
const normalBg       = ''

function cellBg(stage) {
  return stage.isIntervention ? interventionBg : normalBg
}
</script>

<template>
  <div class="px-6 py-10 pb-20">

    <!-- Scenario -->
    <div class="mb-5 bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4">
      <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-2">
        current state — Mara Santos, product designer, 4 yrs exp, portfolio untouched 18 months
      </p>
      <p class="text-[13px] text-[#e6edf3] leading-relaxed">{{ sections['Scenario'] }}</p>
    </div>

    <!-- Journey map table -->
    <div class="border border-[#21262d] rounded-md overflow-hidden mb-5">
      <table class="w-full border-collapse text-[12px] table-fixed">

        <!-- Header row -->
        <thead>
          <tr>
            <th class="w-28 px-4 py-3 text-left bg-[#161b22] border-b border-r border-[#21262d] align-bottom">
              <span class="font-mono text-[9px] uppercase tracking-[0.4px] text-[#484f58]">Stage</span>
            </th>
            <th
              v-for="stage in stages" :key="stage.num"
              class="px-4 py-3 text-left border-b border-r border-[#21262d] last:border-r-0 align-top"
              :style="stage.isIntervention ? 'background:rgba(86,211,100,0.06)' : 'background:#161b22'"
            >
              <div class="flex items-center gap-1.5 mb-1">
                <span
                  class="font-mono text-[10px] font-bold"
                  :style="{ color: stage.isIntervention ? ACCENT : '#484f58' }"
                >{{ stage.num }}</span>
                <span
                  v-if="stage.isIntervention"
                  class="font-mono text-[8px] px-1.5 py-0.5 rounded-full"
                  style="background:rgba(86,211,100,0.12); color:#56d364"
                >intervention window</span>
              </div>
              <p class="font-semibold text-[13px] text-[#e6edf3] leading-snug">{{ stage.name }}</p>
              <p v-if="stage.timeNote" class="text-[10px] text-[#7d8590] mt-0.5 font-normal">{{ stage.timeNote }}</p>
            </th>
          </tr>
        </thead>

        <tbody>
          <!-- Feelings -->
          <tr class="border-b border-[#21262d]">
            <td class="px-4 py-3 bg-[#161b22] border-r border-[#21262d] font-mono text-[9px] uppercase tracking-[0.4px] text-[#7d8590] align-top">
              Feelings
            </td>
            <td
              v-for="stage in stages" :key="stage.num"
              class="px-4 py-3 border-r border-[#21262d] last:border-r-0 align-top"
              :style="cellBg(stage)"
            >
              <p class="text-[12px] text-[#7d8590] italic leading-relaxed">{{ stage.feelings }}</p>
            </td>
          </tr>

          <!-- Thoughts -->
          <tr class="border-b border-[#21262d]">
            <td class="px-4 py-3 bg-[#161b22] border-r border-[#21262d] font-mono text-[9px] uppercase tracking-[0.4px] text-[#7d8590] align-top">
              Thoughts
            </td>
            <td
              v-for="stage in stages" :key="stage.num"
              class="px-4 py-3 border-r border-[#21262d] last:border-r-0 align-top"
              :style="cellBg(stage)"
            >
              <div
                v-for="(t, j) in stage.thoughts" :key="j"
                class="border-l-2 pl-2.5 mb-2 last:mb-0"
                :style="{ borderColor: stage.isIntervention ? ACCENT : '#30363d' }"
              >
                <p class="text-[11px] text-[#c9d1d9] italic leading-relaxed">"{{ t }}"</p>
              </div>
            </td>
          </tr>

          <!-- Actions -->
          <tr class="border-b border-[#21262d]">
            <td class="px-4 py-3 bg-[#161b22] border-r border-[#21262d] font-mono text-[9px] uppercase tracking-[0.4px] text-[#7d8590] align-top">
              Actions
            </td>
            <td
              v-for="stage in stages" :key="stage.num"
              class="px-4 py-3 border-r border-[#21262d] last:border-r-0 text-[12px] text-[#7d8590] leading-relaxed align-top"
              :style="cellBg(stage)"
            >
              {{ stage.actions }}
            </td>
          </tr>

          <!-- Pain points -->
          <tr class="border-b border-[#21262d]">
            <td class="px-4 py-3 bg-[#161b22] border-r border-[#21262d] font-mono text-[9px] uppercase tracking-[0.4px] text-[#7d8590] align-top">
              Pain points
            </td>
            <td
              v-for="stage in stages" :key="stage.num"
              class="px-4 py-3 border-r border-[#21262d] last:border-r-0 align-top"
              :style="cellBg(stage)"
            >
              <template v-if="stage.painItems.length">
                <div v-for="(pt, j) in stage.painItems" :key="j" class="flex gap-2 mb-2 last:mb-0">
                  <span class="shrink-0 text-[#484f58] text-[10px] mt-px">·</span>
                  <span class="text-[11px] text-[#7d8590] leading-relaxed">{{ pt }}</span>
                </div>
              </template>
              <p v-else class="text-[11px] text-[#484f58] italic">Window is open — no friction yet.</p>
            </td>
          </tr>

          <!-- Emotion arc -->
          <tr>
            <td class="px-4 bg-[#161b22] border-r border-[#21262d] align-middle" style="height:200px">
              <span class="font-mono text-[9px] uppercase tracking-[0.4px] text-[#7d8590]">Emotion arc</span>
            </td>
            <td colspan="6" style="position:relative; padding:0; height:200px">
              <svg
                class="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 100"
                preserveAspectRatio="none"
                style="z-index:0"
              >
                <defs>
                  <linearGradient id="arcFillGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ff7b72" stop-opacity="0.13" />
                    <stop offset="100%" stop-color="#ff7b72" stop-opacity="0.01" />
                  </linearGradient>
                </defs>
                <rect x="100" y="0" width="100" height="100" fill="rgba(86,211,100,0.04)" />
                <path :d="svgAreaPath" fill="url(#arcFillGrad)" />
                <polyline :points="svgLinePts" fill="none" stroke="#484f58" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <div class="absolute inset-0 flex" style="z-index:1">
                <div
                  v-for="(stage, i) in stages" :key="i"
                  class="flex-1 relative border-r border-[#21262d] last:border-r-0"
                  :style="stage.isIntervention ? 'background:rgba(86,211,100,0.04)' : ''"
                >
                  <div
                    class="absolute rounded-full"
                    :style="{
                      left: '50%',
                      top: arcYPcts[i] + '%',
                      transform: 'translate(-50%, -50%)',
                      width:  i === 1 ? '12px' : '8px',
                      height: i === 1 ? '12px' : '8px',
                      background: i === 1 ? ACCENT : '#0d1117',
                      border: `2px solid ${i === 1 ? ACCENT : '#484f58'}`,
                    }"
                  />
                  <span
                    class="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[8px] whitespace-nowrap"
                    :style="{ color: i === 1 ? ACCENT : '#484f58' }"
                  >{{ emotionLabels[i] }}</span>
                </div>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    <!-- Intervention callout + Key quotes -->
    <div class="grid grid-cols-2 gap-4">
      <CardPanel label="Highest-leverage intervention window">
        <div v-html="mdBlock(interventionRaw, ACCENT)" />
      </CardPanel>

      <div class="bg-[#161b22] border border-[#21262d] rounded-md px-5 py-4">
        <p class="font-mono text-[10px] uppercase tracking-[0.4px] text-[#7d8590] mb-4">Key quotes</p>
        <div class="flex flex-col gap-3">
          <div
            v-for="(q, i) in keyQuotes" :key="i"
            class="border-l-2 pl-3"
            style="border-color:#30363d"
          >
            <p class="text-[12px] text-[#c9d1d9] italic leading-relaxed mb-1">"{{ q.text }}"</p>
            <p class="text-[11px] text-[#7d8590]">— {{ q.attr }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
