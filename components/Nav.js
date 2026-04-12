"use client"

'use client'

import { useState } from 'react'
import { getPath } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export default function Nav({ locale = 'en', t }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = t?.nav

  return (
    <nav className="relative z-10 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4 px-6 sm:px-12 py-3 sm:py-6 nav-border">

      {/* Top row: logo (left) + menu icon (right on mobile) */}
      <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start">
        {/* Logo — icon mark swaps based on theme via CSS, wordmark uses CSS var */}
        <a href={getPath(locale, '/')} className="flex items-center gap-3">
          {/* Dark theme icon (Arctic Cyan on transparent) */}
          <img
            src="/logos/moxsend_icon_dark_transparent.svg"
            alt="Moxsend"
            width={32}
            height={32}
            className="logo-for-dark"
            style={{ display: 'block' }}
          />
          {/* Light theme icon (Mox Blue on transparent) */}
          <img
            src="/logos/moxsend_icon_light_transparent.svg"
            alt="Moxsend"
            width={32}
            height={32}
            className="logo-for-light"
            style={{ display: 'none' }}
          />
          <span className="logo-text">
            Mox<em>send</em>
          </span>
        </a>
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher compact />
          <ThemeToggle />
          <button
            className="menu-btn"
            aria-label={nav?.menuLabel || 'Toggle menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right side: nav items + status + theme toggle */}
      <div className="w-full sm:w-auto flex items-center flex-wrap justify-center sm:justify-end gap-4">
        <div className="hidden sm:flex">
          <ThemeToggle />
        </div>
        <div className="hidden sm:flex">
          <LanguageSwitcher />
        </div>
        <div className="nav-links hidden sm:flex items-center gap-6">
          <a href={getPath(locale, '/about')} className="nav-link">{nav?.about || 'About'}</a>
          <a href={getPath(locale, '/pricing')} className="nav-link">{nav?.pricing || 'Pricing'}</a>
          <a href={getPath(locale, '/contact')} className="nav-link">{nav?.contact || 'Contact'}</a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu sm:hidden ${menuOpen ? 'is-open' : ''}`}>
        <a href={getPath(locale, '/about')} className="nav-link">{nav?.about || 'About'}</a>
        <a href={getPath(locale, '/pricing')} className="nav-link">{nav?.pricing || 'Pricing'}</a>
        <a href={getPath(locale, '/contact')} className="nav-link">{nav?.contact || 'Contact'}</a>
      </div>

    </nav>
  )
}
