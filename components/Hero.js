import Countdown from './Countdown'
import WaitlistForm from './WaitlistForm'
import FeatureCards from './FeatureCards'

export default function Hero() {
  return (
    <main className="relative z-5 flex-1 flex flex-col items-center justify-center px-12 pt-[60px] pb-10 text-center">

      {/* Badge chip */}
      <div className="chip mb-9">
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
        <span className="chip-text">Private beta · Coming soon</span>
      </div>

      {/* Headline */}
      <div className="mb-5">
        <span className="h1-line">Cold email</span>
        <span className="h1-line h1-line-outline">that actually</span>
        <span className="h1-line h1-line-filled">converts.</span>
      </div>

      {/* Descriptor */}
      <p
        className="type-body max-w-[460px] mx-auto mb-12"
        style={{ color: 'rgba(238,242,255,0.38)' }}
      >
        Stop spraying. Start converting. The AI outreach platform built for founders and closers who refuse to lose deals in the inbox.
      </p>

      {/* Countdown */}
      <Countdown />

      {/* Waitlist form */}
      <WaitlistForm />

      {/* Feature cards */}
      <FeatureCards />

    </main>
  )
}
