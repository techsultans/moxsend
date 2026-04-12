import PageShell from '@/components/PageShell'
import { getDictionary, isValidLocale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

export default async function LocalizedContact({ params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  const t = getDictionary(locale)
  const contact = t.contact

  return (
    <PageShell locale={locale} t={t}>
      <main className="relative z-5 flex-1 px-6 sm:px-12 pt-12 sm:pt-16 pb-16">
        <div className="about-wrap">
          <div className="chip mb-8">
            <div className="chip-dot">
              <svg viewBox="0 0 88 88" fill="none" width="10" height="10">
                <path
                  d="M14,58 Q44,8 74,58"
                  stroke="#38BDF8"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <polygon points="60,34 76,44 60,54 65,44" fill="#38BDF8" />
              </svg>
            </div>
            <span className="chip-text">{contact.chip}</span>
          </div>

          <h1 className="about-title">{contact.title}</h1>
          <p className="type-body about-copy">
            {contact.body.includes('hello@moxsend.ai') ? (
              <>
                {contact.body.replace('hello@moxsend.ai', '')}
                <a href="mailto:hello@moxsend.ai" className="about-link">hello@moxsend.ai</a>
              </>
            ) : (
              contact.body
            )}
          </p>
        </div>
      </main>
    </PageShell>
  )
}
