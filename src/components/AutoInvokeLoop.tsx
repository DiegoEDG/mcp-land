import { Circle } from 'lucide-react'
import type { Content } from '../content'

type AutoInvokeLoopProps = {
  t: Content
}

export function AutoInvokeLoop({ t }: AutoInvokeLoopProps) {
  return (
    <section id="loop" className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-5 py-14">
      <div>
        <h2 className="m-0 text-3xl font-bold text-white">{t.loop.title}</h2>
        <p className="mt-2 max-w-3xl text-[var(--fenkit-muted)]">{t.loop.subtitle}</p>
      </div>

      <div className="grid gap-3 rounded-2xl border border-[var(--fenkit-border-soft)] bg-[var(--fenkit-surface)] p-5 backdrop-blur-xl md:grid-cols-4">
        {t.loop.steps.map((step, index) => (
          <article
            key={step}
            className="rounded-xl border border-[var(--fenkit-border-soft)] bg-[#0a0c0f] p-4"
            style={{ animation: 'pulseStep 6s ease-in-out infinite', animationDelay: `${index * 0.5}s` }}
          >
            <p className="m-0 mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--fenkit-primary)]">
              <Circle className="h-3.5 w-3.5 fill-[var(--fenkit-primary)]" />
              Step {index + 1}
            </p>
            <p className="m-0 text-sm leading-6 text-[var(--fenkit-text)]">{step}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
