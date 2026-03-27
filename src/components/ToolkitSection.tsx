import { Copy } from 'lucide-react'
import { useState } from 'react'
import type { Content } from '../content'

type ToolkitSectionProps = {
  t: Content
}

export function ToolkitSection({ t }: ToolkitSectionProps) {
  const [copiedTool, setCopiedTool] = useState<string | null>(null)

  const copyTool = async (toolName: string) => {
    await navigator.clipboard.writeText(`${toolName}()`)
    setCopiedTool(toolName)
    setTimeout(() => setCopiedTool((current) => (current === toolName ? null : current)), 1200)
  }

  return (
    <section id="toolkit" className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-5 py-14">
      <div>
        <h2 className="m-0 text-3xl font-bold text-white">{t.toolkit.title}</h2>
        <p className="mt-2 max-w-3xl text-[var(--fenkit-muted)]">{t.toolkit.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {t.toolkit.tools.map((group) => (
          <article key={group.group} className="rounded-2xl border border-[var(--fenkit-border-soft)] bg-[var(--fenkit-surface)] p-5 backdrop-blur-xl">
            <h3 className="m-0 mb-3 text-lg font-semibold text-white">{group.group}</h3>
            <div className="grid gap-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-2 rounded-lg border border-[var(--fenkit-border-soft)] bg-[#0a0c0f] px-3 py-2"
                >
                  <code className="text-sm text-[var(--fenkit-primary-strong)]">{item}()</code>
                  <button
                    type="button"
                    onClick={() => void copyTool(item)}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-[var(--fenkit-border)] bg-[rgb(217_255_0_/0.08)] px-2 py-1 text-[11px] font-semibold text-[var(--fenkit-primary)]"
                  >
                    <Copy className="h-3 w-3" />
                    {copiedTool === item ? 'Copied' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
