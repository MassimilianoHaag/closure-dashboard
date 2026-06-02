<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ACCENT = '#bc8cff'

// ── Slide images ─────────────────────────────────────────────────────────────
const rawImages = import.meta.glob(
  '../../../Presentation/Slide_Drafts/images/*.png',
  { eager: true }
)

// Build a filename → resolved URL map (e.g. 'slide1-quote.png' → '/assets/...')
const slideImages = Object.fromEntries(
  Object.entries(rawImages).map(([path, mod]) => {
    const filename = path.split('/').at(-1)
    return [filename, mod.default]
  })
)

const SLIDES = [
  {
    num: 1,
    title: 'Problem',
    image: 'slide1-quote.png',
    claim: 'Documentation is deferred to "later" — a later that never arrives.',
    blocks: [
      {
        label: 'The Pattern',
        body: 'Designers want to document. The moment passes. They close the laptop and promise themselves "this weekend."',
      },
      {
        label: 'The Decay',
        body: 'When they sit down to write, the memory is gone. The work feels like archaeology.',
      },
      {
        label: 'The Trap',
        body: 'They wait for a future moment with more time and clarity. That moment never arrives.',
      },
    ],
  },
  {
    num: 2,
    title: 'UX Hypothesis',
    image: 'slide2-stay-60-seconds.png',
    claim: 'The window of intent closes faster than the window for action.',
    blocks: [
      {
        label: 'The Window',
        body: 'Just-shipped, still-emotional, fully-remembered work is the moment of highest signal. It passes in minutes.',
      },
      {
        label: 'The Gap',
        body: 'Every tool asks the user to come back later. The moment is gone by then.',
      },
      {
        label: 'The Move',
        body: 'Closure catches the work as it closes. Short voice captures, in the moment, that build into a case study over time.',
      },
    ],
  },
  {
    num: 3,
    title: 'How We Got Here',
    image: 'slide3-arc-diagram.png',
    claim: 'We tested the idea in conversation. Three concepts were discarded. Closure is what held up.',
    blocks: [
      {
        label: 'The Starting Point',
        body: 'A talk on creative procrastination surfaced a pattern: the window of intent closes before action.',
      },
      {
        label: 'The Method',
        body: 'We worked through hypotheses with AI. Three concepts were discarded along the way — a portfolio template generator, a daily journal app, an AI portfolio writer.',
      },
      {
        label: 'The Resolution',
        body: 'What survived was sharper: catch the moment before it closes. Closure narrows to a single emotional beat — the closing ritual.',
      },
    ],
  },
  {
    num: 4,
    title: 'User Flow',
    image: 'slide4-flow-diagram.png',
    claim: 'One project, many closings. The product matures with the work.',
    blocks: [
      {
        label: 'The Capture',
        body: 'Mara records 60 seconds when a project closes. The AI mirrors what she said and asks one follow-up.',
      },
      {
        label: 'The Accumulation',
        body: 'Each capture becomes an entry in a project log. Audio, reflection, and visuals — preserved together.',
      },
      {
        label: 'The Maturity',
        body: 'Projects move through seed → in-progress → ready. When ready, they publish as case studies.',
      },
    ],
  },
  {
    num: 5,
    title: 'Prototype & Tech',
    image: 'slide5-gallery.png',
    claim: 'The product runs live. Built with Claude Code as a thinking partner.',
    blocks: [
      {
        label: 'The Prototype',
        body: 'Designers see their projects at a glance. Tap the mic, speak for 60 seconds — the AI mirrors what was said and asks one follow-up. Parchment, charcoal, Piazzolla. It reads as a publication.',
      },
      {
        label: 'The Stack',
        body: 'React, MUI, Vercel for the prototype. Vite, Tailwind, Vue for the dashboard. Piazzolla and Inter from Google Fonts. Every decision logged with reasoning — the dashboard reads the log live.',
      },
      {
        label: 'The Method',
        body: 'Every prompt referenced a constraints file. Claude Code surfaced tradeoffs we missed, pushed back when prompts were imprecise, and talked through every meaningful decision.',
      },
    ],
  },
  {
    num: 6,
    title: 'Iteration Journey',
    image: 'slide7-before-after.png',
    claim: 'Pass 2 surfaced a missing concept. We rebuilt to embrace it.',
    blocks: [
      {
        label: 'The Hypothesis',
        body: 'Pass 1 locked a single-capture model: voice in, case study out. Six wireframes. 19 design constraints.',
      },
      {
        label: 'The Surprise',
        body: "Designers don't ship just one capture. They return. They add. They revise. The product needed to model projects, not captures.",
      },
      {
        label: 'The Resolution',
        body: 'We rebuilt around projects with captures inside them. The single-capture ritual stayed — embedded in a longer practice.',
      },
    ],
  },
]

const current = ref(0)

const prev = () => { if (current.value > 0) current.value-- }
const next = () => { if (current.value < SLIDES.length - 1) current.value++ }

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.()
  } else {
    document.exitFullscreen?.()
  }
}

const onKey = (e) => {
  if (e.key === 'ArrowLeft')  prev()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'Escape')     window.location.href = '/'
  if (e.key === 'f' || e.key === 'F') toggleFullscreen()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="min-h-screen bg-[#0d1117] flex flex-col">

    <!-- Top bar: back link + keyboard hint -->
    <div class="flex items-center justify-between px-6 pt-5 pb-3 shrink-0">
      <a href="/" class="font-mono text-[11px] text-[#484f58] hover:text-[#7d8590] transition-colors">
        ← dashboard
      </a>
      <span class="font-mono text-[10px] text-[#484f58]">
        ← → navigate &nbsp;·&nbsp; F fullscreen &nbsp;·&nbsp; ESC back
      </span>
    </div>

    <!-- Slide area — 16:9 aspect ratio, centered, fills remaining space -->
    <div class="flex-1 flex items-center justify-center px-6 pb-6">
      <div class="w-full max-w-[1280px]">

        <!-- Slide card -->
        <div
          class="w-full aspect-video bg-[#0d1117] border border-[#21262d] rounded-lg overflow-hidden flex flex-col"
          style="box-shadow: 0 0 0 1px #21262d, 0 8px 32px rgba(0,0,0,0.4)"
        >
          <!-- Kicker -->
          <div class="px-10 pt-8 pb-0 shrink-0">
            <p class="font-mono text-[10px] uppercase tracking-[0.5px]" :style="`color:${ACCENT}`">
              Slide {{ SLIDES[current].num }} &nbsp;·&nbsp; Closure Presentation &nbsp;·&nbsp; {{ SLIDES[current].title }}
            </p>
          </div>

          <!-- Content: left claim+blocks / right image -->
          <div class="flex-1 flex gap-0 px-10 py-6 min-h-0">

            <!-- Left column: claim + blocks -->
            <div class="w-1/2 pr-10 flex flex-col justify-between">

              <!-- Claim -->
              <p
                class="text-[clamp(18px,2.2vw,28px)] font-semibold leading-snug text-[#e6edf3] mb-6"
                style="font-family: Georgia, 'Times New Roman', serif"
              >
                {{ SLIDES[current].claim }}
              </p>

              <!-- Three blocks -->
              <div class="flex flex-col gap-4 flex-1 justify-end">
                <div
                  v-for="block in SLIDES[current].blocks"
                  :key="block.label"
                  class="flex gap-3"
                >
                  <div
                    class="shrink-0 w-1.5 rounded-full mt-1 self-stretch"
                    :style="`background:${ACCENT}22`"
                  />
                  <div>
                    <p
                      class="font-mono text-[9px] uppercase tracking-[0.5px] mb-1"
                      :style="`color:${ACCENT}`"
                    >{{ block.label }}</p>
                    <p class="text-[clamp(11px,1.1vw,14px)] text-[#c9d1d9] leading-relaxed">{{ block.body }}</p>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right column: image or placeholder -->
            <div class="w-1/2 flex">
              <!-- Loaded image -->
              <img
                v-if="slideImages[SLIDES[current].image]"
                :src="slideImages[SLIDES[current].image]"
                :alt="SLIDES[current].title"
                class="w-full h-full object-contain rounded-md"
              />
              <!-- Placeholder fallback -->
              <div
                v-else
                class="w-full h-full rounded-md flex flex-col items-center justify-center"
                style="background:#111518; border:1px dashed #2d3139"
              >
                <div
                  class="w-10 h-10 rounded-md mb-3 flex items-center justify-center"
                  :style="`background:${ACCENT}12; border:1px solid ${ACCENT}22`"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="16" height="16" rx="2" stroke="#484f58" stroke-width="1.2"/>
                    <circle cx="6" cy="6.5" r="1.5" stroke="#484f58" stroke-width="1.2"/>
                    <path d="M1 12.5l4-3 3 2.5 3-4 6 5" stroke="#484f58" stroke-width="1.2" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="font-mono text-[10px] text-[#484f58]">Image asset</p>
                <p class="font-mono text-[10px] text-[#30363d] mt-0.5">Slide {{ SLIDES[current].num }} · TBD</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Navigation bar -->
        <div class="flex items-center justify-center gap-6 mt-5">
          <button
            @click="prev"
            :disabled="current === 0"
            class="px-4 py-1.5 rounded font-mono text-[11px] border transition-colors"
            :class="current === 0
              ? 'border-[#21262d] text-[#484f58] cursor-not-allowed'
              : 'border-[#30363d] text-[#7d8590] hover:border-[#7d8590] hover:text-[#e6edf3]'"
          >← Prev</button>

          <!-- Dot indicator -->
          <div class="flex items-center gap-2">
            <button
              v-for="(_, i) in SLIDES"
              :key="i"
              @click="current = i"
              class="rounded-full transition-all"
              :style="i === current
                ? `width:20px; height:6px; background:${ACCENT}`
                : 'width:6px; height:6px; background:#30363d'"
            />
          </div>

          <!-- Counter -->
          <span class="font-mono text-[11px] text-[#7d8590] w-10 text-center">
            {{ current + 1 }} / {{ SLIDES.length }}
          </span>

          <button
            @click="next"
            :disabled="current === SLIDES.length - 1"
            class="px-4 py-1.5 rounded font-mono text-[11px] border transition-colors"
            :class="current === SLIDES.length - 1
              ? 'border-[#21262d] text-[#484f58] cursor-not-allowed'
              : 'border-[#30363d] text-[#7d8590] hover:border-[#30363d] hover:text-[#e6edf3]'"
          >Next →</button>
        </div>

      </div>
    </div>

  </div>
</template>
