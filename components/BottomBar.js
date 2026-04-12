export default function BottomBar() {
  return (
    <footer className="relative z-10 bottom-bar">

      {/* ── Bottom links row ── */}
      <div className="flex items-center justify-between px-12 py-[18px]">
        <span className="bottom-brand">moxsend.ai</span>
        <div className="flex gap-6 items-center">
          <a href="#" className="bottom-link">Privacy</a>
          <a href="mailto:hello@moxsend.ai" className="bottom-link">Contact</a>
          <a href="mailto:hello@moxsend.ai" className="bottom-link">hello@moxsend.ai</a>
          <span className="bottom-link hidden sm:inline">Stop spraying. Start converting.</span>
        </div>
      </div>

      {/* ── MeshDex parent brand bar ── */}
      <div className="meshdex-bar">
        <div className="meshdex-inner">
          <div className="meshdex-left">
            <span className="meshdex-label">A product by</span>
            <a
              href="https://www.meshdex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="meshdex-name"
            >
              MeshDex
            </a>
            <span className="meshdex-dot" />
            <span className="meshdex-tagline">Enterprise · Ventures · Infrastructure</span>
          </div>
          <div className="meshdex-right">
            <span className="meshdex-badge">
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" aria-hidden="true">
                <circle cx="3.5" cy="3.5" r="3.5" fill="#38BDF8" opacity="0.7" />
              </svg>
              Backed by MeshDex Group
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}
