import HeroSection from "@/components/home-components/sections/hero-section"
import DiscoverSection from "@/components/home-components/sections/discover-section"
import WeBlogSection from "@/components/home-components/sections/we-blog-section"
import CarrouselPosts from "@/components/global-components/carrousel-posts"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.main className="w-full flex flex-col ">
      <HeroSection />
      <DiscoverSection />
      <WeBlogSection />
      <CarrouselPosts />
    </motion.main>
  )
}

export default Home
