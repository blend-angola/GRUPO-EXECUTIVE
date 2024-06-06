import WeBlogVerticalCard from "../weblog-vertical-card"
import WeBlogHorizontalCard from "../weblog-horizontal-card"
import { motion } from "framer-motion"

const whileInViewAnimation = {
  initial: { opacity: 0, y: 40 },
  animation: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
}

const WeBlogSection = () => {
  return (
    <motion.section
      variants={whileInViewAnimation}
      initial="initial"
      whileInView="animation"
      viewport={{ margin: "-100px", once: true }}
      className="w-full pb-12 h-full mt-[80px] px-1"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
          <WeBlogVerticalCard />
          <WeBlogHorizontalCard reverse />
          <WeBlogVerticalCard />
          <WeBlogHorizontalCard reverse />
        </div>
      </div>
    </motion.section>
  )
}

export default WeBlogSection
