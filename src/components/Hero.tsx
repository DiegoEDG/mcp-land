import { ArrowRight } from 'lucide-react'
import type { Content } from '../content'

type HeroProps = {
  t: Content
}

export function Hero({ t }: HeroProps) {
  return (
    <section id="hero" className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-5 py-16">
      <span className="w-fit rounded-full border border-[var(--fenkit-border)] bg-[rgb(217_255_0_/0.1)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--fenkit-primary)]">
        {t.hero.kicker}
      </span>
      <h1 className="m-0 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl">
        {t.hero.title}
      </h1>
      <p className="m-0 max-w-3xl text-base leading-7 text-[var(--fenkit-muted)] md:text-lg">{t.hero.subtitle}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#activation"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--fenkit-primary)] px-4 py-2.5 text-sm font-bold text-[#0b0d10] no-underline shadow-[0_0_20px_var(--fenkit-glow)]"
        >
          {t.hero.primaryCta}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#loop"
          className="inline-flex items-center rounded-xl border border-[var(--fenkit-border)] bg-[rgb(217_255_0_/0.04)] px-4 py-2.5 text-sm font-semibold text-[var(--fenkit-text)] no-underline"
        >
          {t.hero.secondaryCta}
        </a>
      </div>
    </section>
  )
}
