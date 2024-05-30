import { FC } from "react"
import { motion } from "framer-motion"
import Container from "../global/container"
import { HEADER_LINKS } from "@/constants"
import { NavLink } from "react-router-dom"
import { Plus } from "lucide-react"
import { X } from "lucide-react"
import { SiLinkedin } from "react-icons/si"

type Props = {
  handleToggle: () => void
}

const MobileMenu: FC<Props> = ({ handleToggle }) => {
  return (
    <motion.div
      initial={{ height: "0px" }}
      whileInView={{ height: "100vh" }}
      exit={{ height: "0px" }}
      className="w-full fixed bg-[#F0F0EB] overflow-hidden"
    >
      <Container className="flex flex-col w-full pt-8">
        <section className="flex justify-between w-full">
          <ul className="space-y-4">
            {HEADER_LINKS.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className="text-azul-dark capitalize text-2xl font-semibold flex items-center gap-2"
                >
                  <Plus size={18} />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button onClick={handleToggle} className="text-azul-dark h-fit">
            <X size={32} />
          </button>
        </section>

        <footer className="mt-56 w-full flex flex-col gap-6 text-azul-dark">
          <span>&copy; - Grupo Executivo</span>
          <div className="space-x-4  text-xs">
            <span>Política de Cookies</span>
            <span>Política de privacidade</span>
            <span>Contactos</span>
          </div>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-azul-dark flex items-center text-xs gap-3"
          >
            <SiLinkedin size={18} />
            linkedin
          </a>
        </footer>
      </Container>
    </motion.div>
  )
}

export default MobileMenu
