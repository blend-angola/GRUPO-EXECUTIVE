import Container from "@/components/global/container"
import Logo from "@/components/logo"
import { motion } from "framer-motion"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

const CardGridSection = () => {
  return (
    <section className="relative lg:h-screen w-full py-10">
      <Container className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center lg:h-[82vh] lg:px-4">
          <CardBlock className="flex flex-col justify-center items-center text-azul-dark font-medium">
            <Logo props={{ height: 60 }} />
            <span className="relative right-20">AKZ</span>
            <span className="text-7xl ">0,955</span>
            <span className="text-verde text-3xl">+0,105%</span>
            <span className="text-xs mt-4">31-05-2024 12:35 GMT</span>
          </CardBlock>

          <CardBlock className="bg-[url('grid-cards/women.jpg')] bg-cover bg-center">
            <p className="absolute bottom-6 text-3xl font-medium p-4 capitalize line-clamp-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </CardBlock>

          <CardBlock className="bg-[url('grid-cards/sunset.jpg')]  bg-cover lg:row-span-4 bg-center">
            <p className="absolute bottom-6 text-3xl font-medium capitalize line-clamp-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </CardBlock>

          <CardBlock className="bg-[url('grid-cards/green-landscape.jpg')] lg:row-span-3 lg:col-span-2 bg-cover bg-center">
            <p className="absolute bottom-6 text-3xl font-medium capitalize line-clamp-3 text-white">
              Lorem ipsum dolor sit
            </p>
          </CardBlock>
        </div>
      </Container>
    </section>
  )
}

export default CardGridSection

type PropsCardBlock = {
  className?: string
  children: React.ReactNode
}
const CardBlock: FC<PropsCardBlock> = ({ className, children }) => {
  return (
    <motion.div
      initial={{ boxShadow: "0px 0px 0px 0px #fff" }}
      whileHover={{ boxShadow: "1px 1px 6px 1px #999" }}
      className={twMerge(
        "rounded-lg w-full h-[280px] md:h-[400px] lg:h-full p-4 relative",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
