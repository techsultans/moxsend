'use client'

import { useEffect, useState } from 'react'

export default function WaitlistForm({ strings }) {
  const DEFAULT_NOTE = strings?.noteDefault || 'Join the waitlist · First access when we launch'
  const [email, setEmail] = useState('')
  const [note, setNote] = useState({ text: DEFAULT_NOTE, color: 'rgba(238,242,255,0.20)' })

  useEffect(() => {
    setNote({ text: DEFAULT_NOTE, color: 'rgba(238,242,255,0.20)' })
  }, [DEFAULT_NOTE])

  function join() {
    const v = email.trim()
    if (!v || !v.includes('@')) {
      setNote({
        text: strings?.noteInvalid || 'Please enter a valid email address.',
        color: 'rgba(226,75,74,0.85)',
      })
      return
    }
    setEmail('')
    setNote({
      text: strings?.noteSuccess || "You're in. We'll reach out before anyone else.",
      color: 'rgba(56,189,248,0.80)',
    })
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') join()
  }

  return (
    <div className="w-full max-w-[520px] mx-auto mb-3">
      <div className="form-inner">
        <input
          type="email"
          className="form-input"
          placeholder={strings?.placeholder || 'your@company.com'}
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="form-btn" onClick={join}>
          {strings?.button || 'Join waitlist'}
        </button>
      </div>
      <p
        className="text-[11px] tracking-wide mt-3 mb-14 transition-colors duration-200"
        style={{ color: note.color }}
      >
        {note.text}
      </p>
    </div>
  )
}
