import { motion } from "framer-motion"
import { FC } from "react"
import { Link } from "react-router-dom"

const LinkMotion = motion(Link)

type Props = {
  id: number
  label: string
  title: string
  date: string
}

const carouselEffect = {
  initial: {
    opacity: 0,
  },
  animate: (id: number) => ({
    opacity: 1,
    transition: {
      delay: id * 0.13,
      duration: 0.6,
    },
  }),
}

const CarouselContent: FC<Props> = ({ label, date, title, id }) => {
  return (
    <LinkMotion
      to="#"
      custom={id}
      initial="initial"
      whileInView="animate"
      variants={carouselEffect}
      viewport={{ amount: "all", once: true }}
      whileHover={{ backgroundColor: "#f5f5f5", scale: 1.02 }}
      className="w-full h-[250px] py-8 flex flex-col gap-8 font-medium px-4 bg-white"
    >
      <div className="w-full flex items-center text-sm uppercase justify-between text-zinc-400 ">
        <h2>{label}</h2>
        <h2>{date}</h2>
      </div>
      <p className="text-azul-dark text-xl lg:line-clamp-4 w-full line-clamp-3 text-wrap md:text-2xl capitalize">
        {title}
      </p>
    </LinkMotion>
  )
}

export default CarouselContent
