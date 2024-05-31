import HeroSection from "@/components/home-components/sections/hero-section"
import DiscoverSection from "@/components/home-components/sections/discover-section"
import WeBlogSection from "@/components/home-components/sections/we-blog-section"


const Home = () => {
  return (
    <main className="w-full flex flex-col ">
      <HeroSection />
      <DiscoverSection />
      <WeBlogSection />
    </main>
  )
}

export default Home
