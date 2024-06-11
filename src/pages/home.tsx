import { motion } from "framer-motion"
import HeroSection from "@/components/home-components/sections/hero-section"
import CardsSection from "@/components/home-components/sections/cards-section"
import IntroSection from "@/components/home-components/sections/intro-section"
import RecentConferencePostWrapper from "@/components/global-components/recent-conference-post-wrapper"

const enterEffectVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

const Home = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={enterEffectVariant}
      className="w-full flex flex-col "
    >
      <HeroSection />
      <IntroSection />
      <CardsSection />
      <RecentConferencePostWrapper />
    </motion.main>
  )
}

export default Home
