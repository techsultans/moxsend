'use client'

import { useState, useEffect } from 'react'

// Launch date: 4th May 2026
const TARGET = new Date('2026-05-04T00:00:00Z')

function pad(n) {
  return String(Math.floor(n)).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' })

  useEffect(() => {
    function tick() {
      const t = Math.max(0, TARGET - Date.now())
      setTime({
        d: pad(t / 86400000),
        h: pad((t % 86400000) / 3600000),
        m: pad((t % 3600000) / 60000),
        s: pad((t % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: time.d, label: 'Days' },
    { value: time.h, label: 'Hours' },
    { value: time.m, label: 'Mins' },
    { value: time.s, label: 'Secs' },
  ]

  return (
    <div className="flex items-center gap-1.5 mb-12">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-1.5">
          <div className="flex flex-col items-center gap-1.5">
            <div className="cd-box">{unit.value}</div>
            <span className="cd-lbl">{unit.label}</span>
          </div>
          {i < units.length - 1 && <span className="cd-colon">:</span>}
        </div>
      ))}
    </div>
  )
}
