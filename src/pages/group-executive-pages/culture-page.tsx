import Container from "@/components/global-components/container"
import { motion } from "framer-motion"

const culturePageEffect = {
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

const gridEffectVariant = {
  initial: {
    opacity: 0,
  },
  animate: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.09 * i,
      duration: 0.4,
      ease: "easeInOut",
    },
  }),
}

const CulturePage = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={culturePageEffect}
    >
      <Container className="w-full text-azul-dark flex items-center h-full justify-center my-[80px] flex-col gap-12 capitalize text-xl text-center font-normal">
        <h1 className="text-5xl text-azul-light font-semibold mb-6 capitalize">
          cultura executive
        </h1>

        <section className="bg-[url('/culture.jpg')] w-full h-[90vh] rounded-xl bg-center bg-cover flex items-center flex-col text-white justify-center gap-4 p-4">
          <h1 className="font-bold text-3xl mb-6">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          {Array.from({ length: 2 }).map((_, index) => (
            <p key={index} className="max-w-[700px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              deserunt aliquam ut culpa sint quasi necessitatibus nam iure est
              labore inventore commodi molestias, tempore qui provident eveniet.
              Natus, itaque necessitatibus reiciendis maxime, recusandae
              deserunt dolor et dolorem nemo omnis quisquam.
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-4">
          <h1 className="text-2xl text-azul-light font-semibold">
            A nossa missão
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum
            error atque officiis consectetur tempore nihil minima eaque,
            accusamus optio iure temporibus quaerat expedita, quibusdam officia
            explicabo, fugiat sunt reiciendis!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-16">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              variants={gridEffectVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
              key={i}
              className="flex flex-col text-start gap-2"
            >
              <h1 className="text-xl text-azul-light font-semibold">
                A nossa missão
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                rerum error atque officiis consectetur tempore nihil minima.
              </p>
            </motion.div>
          ))}
        </section>
      </Container>
    </motion.section>
  )
}

export default CulturePage
