import { useState } from 'react'
import { AutoInvokeLoop } from './components/AutoInvokeLoop'
import { ActivationSection } from './components/ActivationSection'
import { ComparisonTable } from './components/ComparisonTable'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ToolkitSection } from './components/ToolkitSection'
import { CONTENT, type Lang } from './content'

function App() {
  const [lang, setLang] = useState<Lang>('en')
  const t = CONTENT[lang]

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-20 -top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgb(217_255_0_/0.22)_0%,rgb(217_255_0_/0)_70%)] blur-[90px]"
        style={{ animation: 'blobFloat 26s ease-in-out infinite' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-32 top-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgb(217_255_0_/0.2)_0%,rgb(217_255_0_/0)_70%)] blur-[92px]"
        style={{ animation: 'blobFloat 29s ease-in-out infinite' }}
      />

      <Header t={t} lang={lang} onLangChange={setLang} />
      <main>
        <Hero t={t} />
        <AutoInvokeLoop t={t} />
        <ActivationSection t={t} />
        <ComparisonTable t={t} />
        <ToolkitSection t={t} />
        <FinalCta t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
