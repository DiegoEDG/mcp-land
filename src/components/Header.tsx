import { FolderGit2 } from 'lucide-react'
import type { Content, Lang } from '../content'

type HeaderProps = {
  t: Content
  lang: Lang
  onLangChange: (lang: Lang) => void
}

export function Header({ t, lang, onLangChange }: HeaderProps) {
  return (
    <header className="sticky top-3 z-20 mx-auto mt-3 grid w-[min(1120px,calc(100%-1.5rem))] grid-cols-[1fr_auto_auto] items-center gap-4 rounded-2xl border border-[var(--fenkit-border-soft)] bg-[#090b0d]/75 px-4 py-3 backdrop-blur-xl max-[980px]:grid-cols-[1fr_auto]">
      <a href="#hero" className="inline-flex w-fit items-center gap-2 font-semibold no-underline text-white">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--fenkit-border)] bg-[rgb(217_255_0_/0.1)]">
          <FolderGit2 className="h-4 w-4 text-[var(--fenkit-primary)]" />
        </span>
        FENKIT MCP
      </a>

      <nav className="inline-flex gap-4 text-sm max-[980px]:order-3 max-[980px]:col-span-full max-[980px]:overflow-x-auto">
        <a className="text-[var(--fenkit-muted)] no-underline transition hover:text-[var(--fenkit-primary)]" href="#loop">
          {t.nav.loop}
        </a>
        <a className="text-[var(--fenkit-muted)] no-underline transition hover:text-[var(--fenkit-primary)]" href="#activation">
          {t.nav.activation}
        </a>
        <a className="text-[var(--fenkit-muted)] no-underline transition hover:text-[var(--fenkit-primary)]" href="#compare">
          {t.nav.compare}
        </a>
        <a className="text-[var(--fenkit-muted)] no-underline transition hover:text-[var(--fenkit-primary)]" href="#toolkit">
          {t.nav.toolkit}
        </a>
      </nav>

      <div className="inline-flex rounded-lg border border-[var(--fenkit-border-soft)] bg-[rgb(217_255_0_/0.08)] p-1">
        {(['en', 'es'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onLangChange(option)}
            className={`cursor-pointer rounded-md border-0 px-2.5 py-1 text-xs font-bold tracking-wide ${
              lang === option ? 'bg-[var(--fenkit-primary)] text-[#0a0c0f]' : 'bg-transparent text-[var(--fenkit-muted)]'
            }`}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  )
}
