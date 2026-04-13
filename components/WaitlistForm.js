'use client'

import { useEffect, useState } from 'react'

export default function WaitlistForm({ strings }) {
  const DEFAULT_NOTE =
    strings?.noteDefault || 'Join the waitlist · First access when we launch'

  const [email, setEmail] = useState('')
  const [note, setNote] = useState({
    text: DEFAULT_NOTE,
    color: 'rgba(238,242,255,0.20)',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setNote({ text: DEFAULT_NOTE, color: 'rgba(238,242,255,0.20)' })
  }, [DEFAULT_NOTE])

  async function join() {
    const v = email.trim()

    if (!v || !v.includes('@')) {
      setNote({
        text: strings?.noteInvalid || 'Please enter a valid email address.',
        color: 'rgba(226,75,74,0.85)',
      })
      return
    }

    try {
      setLoading(true)

      const res = await fetch(
        'https://formdex.meshdex.com/api/forms/cmnx29j080001p3wsd0t0ds5b',
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'fdx_0e3b0055eec829d0dade25af08fd4609e7242629967e202e', // 🔴 replace this
          },
          body: JSON.stringify({
            email: v,
            message: 'Waitlist signup',
          }),
        }
      )

      if (!res.ok) throw new Error('Failed')

      setEmail('')
      setNote({
        text:
          strings?.noteSuccess ||
          "You're in. We'll reach out before anyone else.",
        color: 'rgba(56,189,248,0.80)',
      })
    } catch (err) {
      setNote({
        text: 'Something went wrong. Please try again.',
        color: 'rgba(226,75,74,0.85)',
      })
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') join()
  }

  return (
    <div className="w-full max-w-[520px] mx-auto mb-3">
      <div className="form-inner">
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder={strings?.placeholder || 'your@company.com'}
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <button
          className="form-btn"
          onClick={join}
          disabled={loading}
        >
          {loading
            ? strings?.loading || 'Joining...'
            : strings?.button || 'Join waitlist'}
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