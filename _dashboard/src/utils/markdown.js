export function normalize(text) {
  return text.replace(/\r\n/g, '\n')
}

export function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function inlineHtml(text) {
  let h = esc(text)
  h = h.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#e6edf3] font-medium">$1</strong>')
  h = h.replace(/\*(.+?)\*/g, '<span class="italic">$1</span>')
  // [Link](path) → discrete styled anchor; title shows the path on hover
  h = h.replace(/\[Link\]\(([^)]+)\)/g, (_, path) =>
    `<a class="text-[#58a6ff] text-[11px] font-medium underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity" title="${path}" href="#">Link</a>`
  )
  return h
}

export function mdBlock(raw, accent = '#79c0ff') {
  return normalize(raw)
    .split('\n')
    .map(line => {
      const t = line.trim()
      if (!t || t === '---' || t.startsWith('#')) return ''
      if (t.startsWith('- ')) {
        return `<div class="flex gap-2.5 mb-2 last:mb-0">
          <span class="shrink-0 mt-[3px] font-bold" style="color:${accent}">·</span>
          <span class="text-[13px] text-[#7d8590] leading-relaxed">${inlineHtml(t.slice(2))}</span>
        </div>`
      }
      return `<p class="text-[13px] text-[#7d8590] leading-relaxed mb-2 last:mb-0">${inlineHtml(t)}</p>`
    })
    .filter(Boolean)
    .join('')
}

export function mdToHtml(raw, muted = true) {
  if (!raw) return ''
  const textColor = muted ? 'text-[#7d8590]' : 'text-[#e6edf3]'
  return raw
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(para => {
      para = para.trim()
      if (!para || para.startsWith('#')) return ''
      let html = esc(para)
      html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#e6edf3] font-medium">$1</strong>')
      html = html.replace(/\*(.+?)\*/g, '<span class="text-[#e6edf3]">$1</span>')
      return `<p class="text-[13px] ${textColor} leading-relaxed mb-3 last:mb-0">${html}</p>`
    })
    .filter(Boolean)
    .join('')
}

export function parseSections(raw) {
  const text = normalize(raw)
  const sections = {}
  const regex = /^## (.+)$/gm
  const matches = [...text.matchAll(regex)]
  matches.forEach((match, i) => {
    const title = match[1].trim()
    const start = match.index + match[0].length + 1
    const end = i < matches.length - 1 ? matches[i + 1].index : text.length
    sections[title] = text.slice(start, end).replace(/^---\s*$/gm, '').trim()
  })
  return sections
}

export function parseMeta(raw) {
  const text = normalize(raw)
  const get = key => (text.match(new RegExp(`\\*\\*${key}:\\*\\*\\s*(.+)`)) ?? [])[1]?.trim() ?? ''
  return { status: get('Status'), date: get('Date'), sources: get('Sources') }
}

export function parseUnifiedLog(raw) {
  const text = normalize(raw)
  const match = text.match(/## Entries[^\n]*\n([\s\S]+?)(?=\n---)/)
  if (!match) return []
  return match[1].split(/\n(?=\*\*\d{4}-\d{2}-\d{2})/).flatMap(block => {
    const logM = block.match(/^\*\*(\d{4}-\d{2}-\d{2}) — \[LOG\] (\w+):\*\* (.+)/)
    if (logM) {
      const [, date, author, body] = logM
      return [{ type: 'log', date, author: author.toLowerCase(), body: body.trim() }]
    }
    const chgM = block.match(/^\*\*(\d{4}-\d{2}-\d{2}) — \[CHANGE\] (.+?)\*\*/)
    if (chgM) {
      const [, date, title] = chgM
      return [{
        type: 'change', date, title: title.trim(),
        whatChanged: block.match(/\*What changed:\* (.+)/)?.[1]?.trim() ?? '',
        why:         block.match(/\*Why:\* (.+)/)?.[1]?.trim() ?? '',
        impact:      block.match(/\*Impact:\* (.+)/)?.[1]?.trim() ?? '',
      }]
    }
    return []
  })
}

export function daysUntil(dateStr) {
  const now = new Date(); now.setHours(0, 0, 0, 0)
  const [y, m, d] = dateStr.split('-').map(Number)
  const t = new Date(y, m - 1, d)
  return Math.round((t - now) / 86400000)
}
