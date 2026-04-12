const features = [
  {
    name: 'AI personalisation',
    desc: 'Every email tailored. At scale. Automatically.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" width="13" height="13">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: 'Pipeline analytics',
    desc: "Know exactly what's converting and why.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" width="13" height="13">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: 'Smart sequencing',
    desc: 'Right message. Right moment. Always.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" width="13" height="13">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: 'Instant deploy',
    desc: 'Live in minutes. Not days.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" width="13" height="13">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

export default function FeatureCards() {
  return (
    <div className="feat-row">
      {features.map((f) => (
        <div key={f.name} className="feat">
          <div className="feat-icon">{f.icon}</div>
          <div className="feat-name">{f.name}</div>
          <div className="feat-desc">{f.desc}</div>
        </div>
      ))}
    </div>
  )
}
