import GridCanvas from '@/components/GridCanvas'
import Nav from '@/components/Nav'
import BottomBar from '@/components/BottomBar'

export default function AboutPage() {
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
            <span className="chip-text">About Moxsend</span>
          </div>

          <h1 className="about-title">Precision outreach, built to convert.</h1>

          <p className="type-body about-copy">
            Most cold email tools teach you to spray and pray. We built Moxsend for companies that refuse to do that.
          </p>
          <p className="type-body about-copy">
            Moxsend is an AI-powered cold email platform that turns outreach into pipeline. Not blasts. Not generic sequences. Precision-targeted, AI-personalised emails that get replies from the right people — at scale.
          </p>
          <p className="type-body about-copy">
            We believe cold email is one of the most powerful channels in B2B sales. It&apos;s just been done wrong for too long. The approach that works looks nothing like what most teams are doing. It&apos;s specific. It&apos;s confident. It respects the recipient&apos;s time. And it converts.
          </p>
          <p className="type-body about-copy">
            That&apos;s what Moxsend is built for — founders, sales teams, and agencies who have the moxie to do outreach properly.
          </p>
          <p className="type-body about-copy">
            We&apos;re in private beta. If you want early access, reach out at{' '}
            <a href="mailto:hello@moxsend.ai" className="about-link">hello@moxsend.ai</a>
          </p>
        </div>
      </main>

      <BottomBar />
    </div>
  )
}
