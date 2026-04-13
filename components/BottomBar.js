export default function BottomBar({ t }) {
  const bottom = t?.bottom

  return (
    <footer className="relative z-10 bottom-bar">

      {/* ── Bottom links row ── */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 px-6 sm:px-12 py-[18px] text-center sm:text-left">
        <span className="bottom-brand">{bottom?.brand || 'moxsend.ai'}</span>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 items-center">
          <a href="/terms" className="bottom-link">{bottom?.terms || 'Terms'}</a>
          <a href="/privacy" className="bottom-link">{bottom?.privacy || 'Privacy'}</a>
          <a href="/contact" className="bottom-link">{bottom?.contact || 'Contact'}</a>
          <a href="mailto:hello@moxsend.ai" className="bottom-email">hello@moxsend.ai</a>
          <span className="bottom-tagline hidden sm:inline">
            <span className="bottom-tagline-muted">Stop spraying.</span>
            <span className="bottom-tagline-accent"> Start converting.</span>
          </span>
        </div>
      </div>

      {/* ── Footer legal bar ── */}
      <div className="meshdex-bar">
        <div className="meshdex-foot">
          <span>© 2026 Moxsend. All rights reserved.</span>
          <span>Powered by MeshDex & EaseHawk </span>
        </div>
      </div>

    </footer>
  )
}
