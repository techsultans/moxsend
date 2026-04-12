import GridCanvas from '@/components/GridCanvas'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BottomBar from '@/components/BottomBar'

export default function Home() {
  return (
    <div className="page-root">
      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Animated dot grid — theme-aware */}
      <GridCanvas />

      <Nav />
      <Hero />
      <BottomBar />
    </div>
  )
}
