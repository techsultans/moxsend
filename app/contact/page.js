import GridCanvas from '@/components/GridCanvas'
import Nav from '@/components/Nav'
import BottomBar from '@/components/BottomBar'

export default function ContactPage() {
  return (
    <div className="page-root">
      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Animated dot grid — theme-aware */}
      <GridCanvas />

      <Nav />

      <main className="relative z-5 flex-1 px-6 sm:px-12 pt-12 sm:pt-16 pb-16">
        <div className="about-wrap">
          <div className="chip mb-8">
            <div className="chip-dot">
              <svg viewBox="0 0 88 88" fill="none" width="10" height="10">
                <path
                  d="M14,58 Q44,8 74,58"
                  stroke="#38BDF8"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <polygon points="60,34 76,44 60,54 65,44" fill="#38BDF8" />
              </svg>
            </div>
            <span className="chip-text">Contact</span>
          </div>

          <h1 className="about-title">Let&apos;s talk.</h1>
          <p className="type-body about-copy">
            Reach us at{' '}
            <a href="mailto:hello@moxsend.ai" className="about-link">hello@moxsend.ai</a>
          </p>
        </div>
      </main>

      <BottomBar />
    </div>
  )
}
