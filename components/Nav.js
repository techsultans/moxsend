export default function Nav() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-12 py-6 nav-border">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <svg width="30" height="30" viewBox="0 0 88 88" fill="none" aria-hidden="true">
          <circle cx="44" cy="44" r="38" stroke="#38BDF8" strokeWidth="3" fill="none" />
          <path
            d="M14,58 Q44,8 74,58"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <polygon points="60,34 76,44 60,54 65,44" fill="#FFFFFF" />
          <circle cx="44" cy="60" r="5" fill="#38BDF8" />
        </svg>
        <span className="logo-text">
          Mox<em>send</em>
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 nav-status">
          <span className="status-dot" />
          In development
        </div>
      </div>
    </nav>
  )
}
