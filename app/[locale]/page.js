import Hero from '@/components/Hero'
import PageShell from '@/components/PageShell'
import { getDictionary, isValidLocale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

export default async function LocalizedHome({ params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const t = getDictionary(locale)

  return (
    <PageShell locale={locale} t={t}>
      <Hero t={t} />
    </PageShell>
  )
}
