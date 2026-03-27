import type { Content } from '../content'

type FooterProps = {
  t: Content
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-2 py-8 text-center text-sm text-[var(--fenkit-muted)]">
      <p className="m-0">{t.footer.tagline}</p>
      <p className="m-0">{t.footer.copy}</p>
    </footer>
  )
}
