import GridCanvas from '@/components/GridCanvas'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BottomBar from '@/components/BottomBar'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-midnight">
      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Animated dot grid */}
      <GridCanvas />

      <Nav />
      <Hero />
      <BottomBar />
    </div>
  )
}
