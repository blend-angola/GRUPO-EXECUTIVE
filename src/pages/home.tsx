import CardGridSection from "@/components/home-components/sections/card-grid-section"
import DiscoverSection from "@/components/home-components/sections/discover-section"
import HeroSection from "@/components/home-components/sections/hero-section"

const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <DiscoverSection />
      <CardGridSection />
      <PotencialSection/>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </main>
  )
}

export default Home
