import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    fs: { allow: ['..'] }
  },
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        persona:   resolve(__dirname, 'persona.html'),
        empathize: resolve(__dirname, 'empathize.html'),
        moodboard: resolve(__dirname, 'moodboard.html'),
        ideate:    resolve(__dirname, 'ideate.html'),
        prototype: resolve(__dirname, 'prototype.html'),
        problem:   resolve(__dirname, 'problem.html'),
        journey:   resolve(__dirname, 'journey.html'),
        flow:      resolve(__dirname, 'flow.html'),
        schema:       resolve(__dirname, 'schema.html'),
        presentation: resolve(__dirname, 'presentation.html'),
      }
    }
  }
})
