import GridCanvas from '@/components/GridCanvas'
import Nav from '@/components/Nav'
import BottomBar from '@/components/BottomBar'

export default function PageShell({ children, locale, t }) {
  return (
    <div className="page-root">
      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Animated dot grid — theme-aware */}
      <GridCanvas />

      <Nav locale={locale} t={t} />

      {children}

      <BottomBar t={t} />
    </div>
  )
}
