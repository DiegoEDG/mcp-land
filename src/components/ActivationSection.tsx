import { Copy, Terminal } from 'lucide-react'
import { useState } from 'react'
import { GENERAL_SETUP, SETUP_COMMANDS, type Content } from '../content'

type ActivationSectionProps = {
  t: Content
}

export function ActivationSection({ t }: ActivationSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey((current) => (current === key ? null : current)), 1200)
  }

  return (
    <section id="activation" className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-5 py-14">
      <div>
        <h2 className="m-0 text-3xl font-bold text-white">{t.activation.title}</h2>
        <p className="mt-2 max-w-3xl text-[var(--fenkit-muted)]">{t.activation.subtitle}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-2xl border border-[var(--fenkit-border-soft)] bg-[var(--fenkit-surface)] p-5 backdrop-blur-xl">
          <p className="mb-3 mt-0 text-xs font-semibold uppercase tracking-wide text-[var(--fenkit-primary)]">Unified setup</p>
          <div className="flex items-center justify-between gap-3 rounded-xl border border-[var(--fenkit-border)] bg-[#0a0c0f] px-3 py-2">
            <code className="text-sm text-[var(--fenkit-primary-strong)]">{GENERAL_SETUP}</code>
            <button
              type="button"
              onClick={() => void handleCopy(GENERAL_SETUP, 'base')}
              className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-[var(--fenkit-border)] bg-[rgb(217_255_0_/0.08)] px-2.5 py-1 text-xs font-semibold text-[var(--fenkit-primary)]"
            >
              <Copy className="h-3.5 w-3.5" />
              {copiedKey === 'base' ? t.activation.copied : t.activation.copy}
            </button>
          </div>

          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {Object.entries(SETUP_COMMANDS).map(([client, command]) => {
              const copyKey = `client-${client}`

              return (
                <div key={client} className="rounded-xl border border-[var(--fenkit-border-soft)] bg-[#0a0c0f] p-3">
                  <p className="m-0 text-xs font-semibold uppercase tracking-wide text-[var(--fenkit-muted)]">{client}</p>
                  <code className="mt-1 block text-xs leading-5 text-[var(--fenkit-primary-strong)]">{command}</code>
                  <button
                    type="button"
                    onClick={() => void handleCopy(command, copyKey)}
                    className="mt-2 inline-flex cursor-pointer items-center gap-1 rounded-md border border-[var(--fenkit-border)] bg-[rgb(217_255_0_/0.08)] px-2 py-1 text-[11px] font-semibold text-[var(--fenkit-primary)]"
                  >
                    <Copy className="h-3 w-3" />
                    {copiedKey === copyKey ? t.activation.copied : t.activation.copy}
                  </button>
                </div>
              )
            })}
          </div>
        </article>

        <article className="rounded-2xl border border-[var(--fenkit-border-soft)] bg-[var(--fenkit-surface)] p-5 backdrop-blur-xl">
          <h3 className="m-0 inline-flex items-center gap-2 text-lg font-semibold text-white">
            <Terminal className="h-5 w-5 text-[var(--fenkit-primary)]" />
            {t.activation.quickTitle}
          </h3>
          <ol className="mb-0 mt-4 grid gap-2 pl-5 text-sm leading-6 text-[var(--fenkit-muted)]">
            {t.activation.quickSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  )
}
