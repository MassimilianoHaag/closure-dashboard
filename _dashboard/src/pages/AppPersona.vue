<script setup>
import CardPanel from '../components/CardPanel.vue'
import PersonaHero from '../components/persona/PersonaHero.vue'
import QuoteBlock from '../components/persona/QuoteBlock.vue'
import { parseSections, mdToHtml } from '../utils/markdown.js'

import personaRaw from '../../../02_Define/Persona_Primary_Mara.md?raw'

const sections = parseSections(personaRaw)

const rawTagline = sections['Tagline'] ?? ''
const tagline = rawTagline.replace(/^\*"/, '').replace(/"\*$/, '').trim()

const personaMeta = ['29 years old', 'Product designer', '4 yrs exp', 'Agency', 'Portfolio: 18 mo stale']

const rawQuote  = sections['Representative quote'] ?? ''
const quoteBody = (rawQuote.match(/\*"(.+?)"\*/) ?? [])[1] ?? ''
const attrLine  = rawQuote.split('\n').find(l => l.trimStart().startsWith('—')) ?? ''
const attr      = attrLine.replace(/^— ?/, '').trim()
</script>

<template>
  <div class="max-w-6xl mx-auto px-6 py-10 pb-20">
    <PersonaHero name="Mara Santos" initials="MS" :tagline="tagline" :meta="personaMeta" />

    <div class="grid grid-cols-2 gap-4 mb-4">
      <CardPanel label="Who she is">
        <div v-html="mdToHtml(sections['Who she is'])" />
      </CardPanel>
      <CardPanel label="When she uses Closure">
        <div v-html="mdToHtml(sections['When she uses Closure'])" />
      </CardPanel>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-4">
      <CardPanel label="Her goals">
        <div v-html="mdToHtml(sections['Her goals'])" />
      </CardPanel>
      <CardPanel label="What gets in the way">
        <div v-html="mdToHtml(sections['What gets in the way'])" />
      </CardPanel>
      <CardPanel label="Her concerns about Closure">
        <div v-html="mdToHtml(sections['Her concerns about Closure'])" />
      </CardPanel>
    </div>

    <QuoteBlock :quote="quoteBody" :attribution="attr" />

    <div class="grid grid-cols-2 gap-4">
      <CardPanel label="What success looks like">
        <div v-html="mdToHtml(sections['What success looks like for Mara'])" />
      </CardPanel>
      <CardPanel label="Research basis">
        <div v-html="mdToHtml(sections['What this persona is based on'])" />
      </CardPanel>
    </div>
  </div>
</template>
