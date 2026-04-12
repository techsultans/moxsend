'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { defaultLocale, locales, getPath, getDir } from '@/lib/i18n'

const LABELS = {
  en: { short: 'EN', name: 'English' },
  fr: { short: 'FR', name: 'Français' },
  ar: { short: 'AR', name: 'العربية' },
}

export default function LanguageSwitcher({ compact = false }) {
  const pathname = usePathname() || '/'
  const segments = pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]
  const isLocale = locales.includes(maybeLocale)
  const locale = isLocale ? maybeLocale : defaultLocale
  const restPath = isLocale ? `/${segments.slice(1).join('/')}` : pathname
  const normalizedPath = restPath === '' ? '/' : restPath
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target)) setOpen(false)
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  const current = LABELS[locale] || { short: locale.toUpperCase(), name: locale }

  return (
    <div
      ref={rootRef}
      className={`lang-switcher ${compact ? 'is-compact' : ''} ${open ? 'is-open' : ''}`}
      dir={getDir(locale)}
    >
      <button
        className="lang-trigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-flag">{current.short}</span>
        <span className="lang-name">{current.name}</span>
        <svg className="lang-caret" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="lang-menu" role="listbox" aria-label="Language">
        {locales.map((l) => {
          const href = getPath(l, normalizedPath)
          const label = LABELS[l] || { short: l.toUpperCase(), name: l }
          return (
            <a
              key={l}
              href={href}
              className={`lang-option ${l === locale ? 'is-active' : ''}`}
              role="option"
              aria-selected={l === locale}
            >
              <span className="lang-flag">{label.short}</span>
              <span className="lang-name">{label.name}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
