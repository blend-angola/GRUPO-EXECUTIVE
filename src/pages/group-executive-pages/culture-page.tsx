import { motion } from "framer-motion"

const culturePageEffect = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
}

const CulturePage = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={culturePageEffect}
      className="w-full text-azul-dark flex items-center h-full justify-center my-[80px] flex-col gap-8 capitalize text-xl text-center font-normal"
    >
      <h1 className="text-5xl mb-6">cultura executive</h1>
      {Array.from({ length: 4 }).map((_, index) => (
        <p key={index}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          deserunt aliquam ut culpa sint quasi necessitatibus nam iure est
          labore inventore commodi molestias, tempore qui provident eveniet.
          Natus, itaque necessitatibus reiciendis maxime, recusandae deserunt
          dolor et dolorem nemo omnis quisquam.
        </p>
      ))}

      <div className="bg-[url('/top-pov.jpg')] bg-center bg-cover lg:w-[90vh] h-[35vh] md:h-[45vh] w-full" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum
        error atque officiis consectetur tempore nihil minima eaque, accusamus
        optio iure temporibus quaerat expedita, quibusdam officia explicabo,
        fugiat sunt reiciendis!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        provident, inventore repellat soluta in accusantium.
      </p>
    </motion.section>
  )
}

export default CulturePage
