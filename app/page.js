import Hero from '@/components/Hero'
import PageShell from '@/components/PageShell'
import { defaultLocale, getDictionary } from '@/lib/i18n'

export default function Home() {
  const t = getDictionary(defaultLocale)
  return (
    <PageShell locale={defaultLocale} t={t}>
      <Hero t={t} />
    </PageShell>
  )
}
