import Container from "@/components/global-components/container"
import { motion } from "framer-motion"

const enterEffect = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
}

const PresidentMessagePage = () => {
  return (
    <motion.section
      variants={enterEffect}
      initial="initial"
      animate="animate"
      className="w-full my-[80px]"
    >
      <Container className="flex text-center flex-col gap-6 text-azul-dark">
        <h1 className="text-4xl text-azul-light font-semibold md:text-5xl mb-6 capitalize">
          Mensagem do presidente
        </h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          accusamus exercitationem dolorum rerum, quibusdam aliquam dignissimos
          error excepturi omnis perferendis.
        </p>
        <div className="relative w-full h-[40vh] md:h-[80vh] mt-8">
          <iframe
            loading="lazy"
            src="https://www.youtube.com/embed/9tlm6O3BARk"
            className="absolute inset-0 w-full h-full rounded-xl"
          ></iframe>
        </div>
      </Container>
    </motion.section>
  )
}

export default PresidentMessagePage
