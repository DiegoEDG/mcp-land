import type { Content } from '../content'

type ComparisonTableProps = {
  t: Content
}

export function ComparisonTable({ t }: ComparisonTableProps) {
  return (
    <section id="compare" className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-5 py-14">
      <div>
        <h2 className="m-0 text-3xl font-bold text-white">{t.compare.title}</h2>
        <p className="mt-2 max-w-3xl text-[var(--fenkit-muted)]">{t.compare.subtitle}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[var(--fenkit-border-soft)] bg-[var(--fenkit-surface)] backdrop-blur-xl">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#0a0c0f] text-[var(--fenkit-primary)]">
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">Manual Prompting</th>
              <th className="px-4 py-3">With Fenkit MCP</th>
            </tr>
          </thead>
          <tbody>
            {t.compare.rows.map(([feature, manual, withMcp]) => (
              <tr key={feature} className="border-t border-[var(--fenkit-border-soft)]">
                <td className="px-4 py-3 font-semibold text-white">{feature}</td>
                <td className="px-4 py-3 text-[var(--fenkit-muted)]">{manual}</td>
                <td className="px-4 py-3 text-[var(--fenkit-primary-strong)]">{withMcp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
