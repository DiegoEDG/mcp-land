import type { Content } from '../content'

type FinalCtaProps = {
  t: Content
}

export function FinalCta({ t }: FinalCtaProps) {
  return (
    <section className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-4 border-t border-[var(--fenkit-border-soft)] py-14 text-center">
      <h2 className="m-0 text-3xl font-bold text-white">{t.final.title}</h2>
      <p className="m-0 text-[var(--fenkit-muted)]">{t.final.subtitle}</p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <a
          href={t.links.app}
          className="rounded-xl border border-[var(--fenkit-border)] bg-[rgb(217_255_0_/0.04)] px-4 py-2.5 text-sm font-semibold text-[var(--fenkit-text)] no-underline"
        >
          {t.final.appCta}
        </a>
        <a
          href={t.links.npm}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[var(--fenkit-primary)] px-4 py-2.5 text-sm font-bold text-[#0a0c0f] no-underline shadow-[0_0_20px_var(--fenkit-glow)]"
        >
          {t.final.mcpCta}
        </a>
      </div>
    </section>
  )
}
