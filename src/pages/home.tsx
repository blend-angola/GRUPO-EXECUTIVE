import HeroSection from "@/components/home-components/sections/hero-section"
import DiscoverSection from "@/components/home-components/sections/discover-section"
import CardGridSection from "@/components/home-components/sections/card-grid-section"
import PotencialSection from "@/components/home-components/sections/potencial-section"

const Home = () => {
  return (
    <main className="w-full flex flex-col ">
      <HeroSection />
      <DiscoverSection />
      <CardGridSection />
      <PotencialSection />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  )
}

export default Home
