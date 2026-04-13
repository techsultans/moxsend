import PageShell from '@/components/PageShell'
import { defaultLocale, getDictionary } from '@/lib/i18n'

export default function PrivacyPage() {
  const t = getDictionary(defaultLocale)
  const privacy = t.privacy

  return (
    <PageShell locale={defaultLocale} t={t}>
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
            <span className="chip-text">{privacy.chip}</span>
          </div>

          <h1 className="about-title">{privacy.title}</h1>
          <p className="type-body about-copy">{privacy.body}</p>
        </div>
      </main>
    </PageShell>
  )
}
