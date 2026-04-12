'use client'

import LanguageSwitcher from './LanguageSwitcher'

export default function BottomBar({ t }) {
  const bottom = t?.bottom
  const meshdex = t?.meshdex

  return (
    <footer className="relative z-10 bottom-bar">

      {/* ── Bottom links row ── */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 px-6 sm:px-12 py-[18px] text-center sm:text-left">
        <span className="bottom-brand">{bottom?.brand || 'moxsend.ai'}</span>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 items-center">
          <a href="#" className="bottom-link">{bottom?.privacy || 'Privacy'}</a>
          <a href="mailto:hello@moxsend.ai" className="bottom-link">{bottom?.contact || 'Contact'}</a>
          <span className="bottom-link hidden sm:inline">{bottom?.tagline || 'Stop spraying. Start converting.'}</span>
          <LanguageSwitcher compact />
        </div>
      </div>

      {/* ── MeshDex parent brand bar ── */}
      <div className="meshdex-bar">
        <div className="meshdex-inner">
          <div className="meshdex-left">
            <span className="meshdex-label">{meshdex?.label || 'A product by'}</span>
            <a
              href="https://www.meshdex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="meshdex-name"
            >
              {meshdex?.name || 'MeshDex'}
            </a>
            <span className="meshdex-dot" />
            <span className="meshdex-tagline">{meshdex?.tagline || 'Enterprise · Ventures · Infrastructure'}</span>
          </div>
          <div className="meshdex-right">
            <span className="meshdex-badge">
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
                <circle cx="3.5" cy="3.5" r="3.5" fill="#38BDF8" opacity="0.7" />
              </svg>
              {meshdex?.badge || 'Backed by MeshDex Group'}
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
