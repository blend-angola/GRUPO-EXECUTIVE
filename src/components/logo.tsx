import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { enterEffect } from "./global-components/header"
import { FC } from "react"

const LinkMotion = motion(Link)

type Props = {
  resize: boolean
}

const Logo: FC<Props> = ({ resize }) => {
  return (
    <LinkMotion
      variants={enterEffect}
      initial="initial"
      animate="animate"
      to={"/"}
      className={`relative w-48 h-full ${
        resize ? "md:w-[300px] md:h-[30px]" : "md:w-[370px] md:h-[45px]"
      }  transition-all duration-200 ease-in-out`}
    >
      <img
        src="/logotipo.png"
        alt="logotipo"
        className="object-contain md:object-cover z-20 absolute w-full inset-0 h-full"
      />
    </LinkMotion>
  )
}

export default Logo
