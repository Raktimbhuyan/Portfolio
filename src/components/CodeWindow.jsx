import { useEffect, useState } from 'react'

const LINES = [
  { n: 1, parts: [{ t: 'const', c: 'text-violet-signal' }, { t: ' developer', c: 'text-fog' }, { t: ' = {', c: 'text-muted' }] },
  { n: 2, parts: [{ t: '  name:', c: 'text-amber-soft' }, { t: " 'Raktim Bhuyan',", c: 'text-amber-glow' }] },
  { n: 3, parts: [{ t: '  role:', c: 'text-amber-soft' }, { t: " 'Full-Stack Developer',", c: 'text-amber-glow' }] },
  { n: 4, parts: [{ t: '  stack:', c: 'text-amber-soft' }, { t: " ['React', 'Node', 'MongoDB'],", c: 'text-amber-glow' }] },
  { n: 5, parts: [{ t: '  status:', c: 'text-amber-soft' }, { t: " 'open to opportunities',", c: 'text-amber-glow' }] },
  { n: 6, parts: [{ t: '};', c: 'text-muted' }] },
]

const FULL_TEXT = LINES.map((l) => l.parts.map((p) => p.t).join('')).join('\n')

export default function CodeWindow() {
  const [typedLength, setTypedLength] = useState(0)
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedLength(FULL_TEXT.length)
      return
    }
    const interval = setInterval(() => {
      setTypedLength((prev) => {
        if (prev >= FULL_TEXT.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 22)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  // Figure out, character by character, how much of each line to reveal.
  let remaining = typedLength
  const visibleLines = LINES.map((line) => {
    const lineText = line.parts.map((p) => p.t).join('')
    const visibleCount = Math.max(0, Math.min(lineText.length, remaining))
    remaining = Math.max(0, remaining - lineText.length - 1)

    let charsLeft = visibleCount
    const visibleParts = []
    for (const part of line.parts) {
      if (charsLeft <= 0) break
      const take = Math.min(part.t.length, charsLeft)
      visibleParts.push({ ...part, t: part.t.slice(0, take) })
      charsLeft -= take
    }
    return { ...line, visibleParts, done: visibleCount === lineText.length }
  })

  return (
    <div className="glass rounded-xl shadow-glow overflow-hidden animate-floaty">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-border bg-ink-panel2/60">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
      </div>
      <div className="p-6 font-mono text-sm leading-7">
        {visibleLines.map((line, idx) => (
          <div key={line.n} className="flex">
            <span className="w-6 text-right pr-4 select-none text-white/20">{line.n}</span>
            <span>
              {line.visibleParts.map((part, i) => (
                <span key={i} className={part.c}>
                  {part.t}
                </span>
              ))}
              {idx === visibleLines.findIndex((l) => !l.done) && (
                <span className="inline-block w-2 h-4 align-middle bg-amber-glow ml-0.5 animate-blink" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
