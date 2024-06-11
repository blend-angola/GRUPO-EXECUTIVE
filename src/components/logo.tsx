import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { enterEffect } from "./global-components/header"

const LinkMotion = motion(Link)

const Logo = () => {
  return (
    <LinkMotion
      variants={enterEffect}
      initial="initial"
      animate="animate"
      to={"/"}
      className="relative w-full h-full md:w-[370px] md:h-[45px]"
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
