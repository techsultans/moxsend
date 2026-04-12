import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-12 py-6 nav-border">

      {/* Logo — icon mark swaps based on theme via CSS, wordmark uses CSS var */}
      <div className="flex items-center gap-3">
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
      </div>

      {/* Right side: status + theme toggle */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 nav-status">
          <span className="status-dot" />
          In development
        </div>
        <ThemeToggle />
      </div>

    </nav>
  )
}
