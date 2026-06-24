<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ACCENT = '#C9A0FF'

const SLIDES = [
  {
    kicker: 'INTENT → ACTION · A UX PROBLEM',
    hero: 'Procrastination is not a time-management problem. It is a problem of regulating negative emotions.',
    attribution: 'Timothy Pychyl · Carleton University',
    rightTemplate: 'quote1',
  },
  {
    kicker: 'SLIDE 2 · A SPECIFIC INSTANCE',
    hero: 'Designers procrastinate on portfolio work. We chose the moment the window closes.',
    rightTemplate: 'phraseList',
  },
  {
    kicker: 'SLIDE 3 · METHOD',
    hero: 'We tested the idea in conversation. Three concepts didn\'t survive.',
    rightTemplate: 'ideationArc',
  },
  {
    kicker: 'SLIDE 4 · WHAT WE BUILT',
    hero: 'Closure — a closing ritual for finished work.',
    subtitle: 'Short voice captures in the moment, building into a case study over time.',
    rightTemplate: 'productAnatomy',
  },
  {
    kicker: 'SLIDE 5 · ITERATION',
    hero: 'Pass 1 was a single capture. Pass 2 became a logbook.',
    rightTemplate: 'passComparison',
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
          class="w-full aspect-video bg-[#0d1117] border border-[#21262d] rounded-lg overflow-hidden flex"
          style="box-shadow: 0 0 0 1px #21262d, 0 8px 32px rgba(0,0,0,0.4)"
        >

          <!-- Left column: kicker + hero + optional attribution/subtitle -->
          <div class="w-1/2 flex flex-col px-12 py-10 border-r border-[#21262d]">

            <!-- Kicker -->
            <p class="slide-kicker shrink-0" :style="`color: ${ACCENT}`">
              {{ SLIDES[current].kicker }}
            </p>

            <!-- Slide 1: three-zone — hero optical middle, attribution lower third -->
            <template v-if="SLIDES[current].attribution">
              <div style="flex: 2 2 0%; display: flex; align-items: center;">
                <p class="slide-hero text-[#f0ead6]">{{ SLIDES[current].hero }}</p>
              </div>
              <div style="flex: 1 1 0%; display: flex; align-items: flex-start; padding-top: 6px;">
                <p class="slide-attribution">{{ SLIDES[current].attribution }}</p>
              </div>
            </template>

            <!-- Slides 2–5: hero vertically centered -->
            <div v-else class="flex-1 flex flex-col justify-center">
              <p class="slide-hero text-[#f0ead6]">{{ SLIDES[current].hero }}</p>
              <p v-if="SLIDES[current].subtitle" class="slide-subtitle mt-4 text-[#c9d1d9]">
                {{ SLIDES[current].subtitle }}
              </p>
            </div>

          </div>

          <!-- Right column: custom HTML/CSS template -->
          <div class="w-1/2 flex flex-col overflow-hidden">

            <!-- quote1: Slide 1 — compact cluster, top-anchored to hero baseline -->
            <div v-if="SLIDES[current].rightTemplate === 'quote1'" class="tmpl-quote1">
              <div class="q1-unit">
                <p class="q1-label">WRITING, NOT ASSEMBLY</p>
                <p class="q1-body text-[#f0ead6]">The words are the bottleneck, not the files.</p>
              </div>
              <div class="q1-unit">
                <p class="q1-label">THE WINDOW DECAYS</p>
                <p class="q1-body text-[#f0ead6]">Highest memory, lowest motivation.</p>
              </div>
              <div class="q1-unit">
                <p class="q1-label">AVOIDANCE, NOT LAZINESS</p>
                <p class="q1-body" :style="`color: ${ACCENT}`">Emotion regulation, not time management.</p>
              </div>
            </div>

            <!-- phraseList: Slide 2 — struck-through list → highlighted winner -->
            <div v-else-if="SLIDES[current].rightTemplate === 'phraseList'" class="tmpl-phraseList">
              <div class="pl-stack">
                <p class="pl-struck">when it's finished</p>
                <p class="pl-struck">the wrap-up</p>
                <p class="pl-struck">post-project debrief</p>
                <p class="pl-struck">"I'll write it up later"</p>
                <p class="pl-struck">the moment it ships</p>
              </div>
              <p class="pl-winner" :style="`color: ${ACCENT}`">
                the window of intent
              </p>
            </div>

            <!-- ideationArc: Slide 3 — method flow with discarded items -->
            <div v-else-if="SLIDES[current].rightTemplate === 'ideationArc'" class="tmpl-ideationArc">
              <p class="ia-step">PROCRASTINATION TALK</p>
              <p class="ia-arrow">↓</p>
              <p class="ia-step">SECONDARY RESEARCH</p>
              <p class="ia-arrow">↓</p>
              <p class="ia-step">CONVERSATIONS WITH AI</p>
              <p class="ia-arrow">↓</p>
              <div class="ia-discarded">
                <p class="ia-struck">portfolio template generator</p>
                <p class="ia-struck">daily journal app</p>
                <p class="ia-struck">AI portfolio writer</p>
              </div>
              <p class="ia-arrow">↓</p>
              <p class="ia-winner" :style="`color: ${ACCENT}`">Closure</p>
            </div>

            <!-- productAnatomy: Slide 4 — three labeled definition sections -->
            <div v-else-if="SLIDES[current].rightTemplate === 'productAnatomy'" class="tmpl-productAnatomy">
              <div class="pa-section">
                <p class="pa-label" :style="`color: ${ACCENT}`">THE SURFACE</p>
                <p class="pa-body text-[#f0ead6]">A project logbook. Maturity dot. Timeline. Attachments.</p>
              </div>
              <div class="pa-section">
                <p class="pa-label" :style="`color: ${ACCENT}`">THE RITUAL</p>
                <p class="pa-body text-[#f0ead6]">Tap mic. Speak 60 seconds. AI mirrors. One follow-up.</p>
              </div>
              <div class="pa-section">
                <p class="pa-label" :style="`color: ${ACCENT}`">THE REGISTER</p>
                <p class="pa-body text-[#f0ead6]">Parchment. Charcoal. Piazzolla. Reads as a publication, not a tool.</p>
              </div>
            </div>

            <!-- passComparison: Slide 5 — two passes separated by divider -->
            <div v-else-if="SLIDES[current].rightTemplate === 'passComparison'" class="tmpl-passComparison">
              <div class="pc-section">
                <p class="pc-label" style="color: rgba(240,234,214,0.65)">PASS 1</p>
                <p class="pc-title text-[#f0ead6]">Single capture model</p>
                <p class="pc-sub" style="color: rgba(240,234,214,0.65)">60 seconds → one case study</p>
              </div>
              <div class="pc-divider"></div>
              <div class="pc-section">
                <p class="pc-label" :style="`color: ${ACCENT}`">PASS 2</p>
                <p class="pc-title" :style="`color: ${ACCENT}`">Project logbook</p>
                <p class="pc-sub text-[#f0ead6]">Many captures → maturity → portfolio</p>
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

          <!-- Dot indicators -->
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

          <!-- Counter: X / 5 -->
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@1,8..30,300;1,8..30,400;1,8..30,500&family=Inter:wght@300;400;500&display=swap');

/* ── Left column typography ──────────────────────────────── */

.slide-kicker {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.slide-hero {
  font-family: 'Piazzolla', Georgia, serif;
  font-style: italic;
  font-size: clamp(18px, 2.5vw, 34px);
  line-height: 1.28;
  font-weight: 400;
}

.slide-attribution {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(201, 209, 217, 0.65);
  letter-spacing: 0.01em;
}

.slide-subtitle {
  font-family: 'Piazzolla', Georgia, serif;
  font-style: italic;
  font-size: clamp(13px, 1.35vw, 17px);
  line-height: 1.45;
  font-weight: 300;
}

/* ── Template: quote1 ────────────────────────────────────── */

.tmpl-quote1 {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 28%;
  padding-left: 44px;
  padding-right: 48px;
}

.q1-unit {
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex-shrink: 0;
}

.q1-label {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(240, 234, 214, 0.5);
}

.q1-body {
  font-family: 'Piazzolla', Georgia, serif;
  font-style: italic;
  font-size: clamp(15px, 1.7vw, 22px);
  line-height: 1.3;
  font-weight: 400;
}

/* ── Template: phraseList ────────────────────────────────── */

.tmpl-phraseList {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 44px;
}

.pl-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 36px;
}

.pl-struck {
  font-family: 'Inter', sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: rgba(240, 234, 214, 0.6);
  text-decoration: line-through;
  text-decoration-color: rgba(240, 234, 214, 0.65);
  text-decoration-thickness: 1.5px;
}

.pl-winner {
  font-family: 'Piazzolla', Georgia, serif;
  font-style: italic;
  font-size: clamp(22px, 2.7vw, 34px);
  font-weight: 400;
  text-align: center;
}

/* ── Template: ideationArc ───────────────────────────────── */

.tmpl-ideationArc {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 40px;
  gap: 5px;
}

.ia-step {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(240, 234, 214, 0.82);
}

.ia-arrow {
  font-size: 13px;
  color: rgba(240, 234, 214, 0.45);
  line-height: 1;
  font-family: 'Inter', sans-serif;
}

.ia-discarded {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 2px 0;
}

.ia-struck {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: rgba(240, 234, 214, 0.65);
  text-decoration: line-through;
  text-decoration-color: rgba(240, 234, 214, 0.65);
  text-decoration-thickness: 1.5px;
}

.ia-winner {
  font-family: 'Piazzolla', Georgia, serif;
  font-style: italic;
  font-size: clamp(20px, 2.3vw, 30px);
  font-weight: 400;
  margin-top: 2px;
}

/* ── Template: productAnatomy ────────────────────────────── */

.tmpl-productAnatomy {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 44px 40px;
  gap: 36px;
}

.pa-section {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.pa-label {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pa-body {
  font-family: 'Piazzolla', Georgia, serif;
  font-style: italic;
  font-size: clamp(14px, 1.55vw, 20px);
  line-height: 1.38;
  font-weight: 400;
}

/* ── Template: passComparison ────────────────────────────── */

.tmpl-passComparison {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 52px;
}

.pc-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 9px;
}

.pc-divider {
  width: 80%;
  height: 1px;
  background: rgba(240, 234, 214, 0.28);
  flex-shrink: 0;
  margin: 0 auto;
}

.pc-label {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pc-title {
  font-family: 'Piazzolla', Georgia, serif;
  font-style: italic;
  font-size: clamp(20px, 2.3vw, 30px);
  line-height: 1.2;
  font-weight: 400;
}

.pc-sub {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
}
</style>
