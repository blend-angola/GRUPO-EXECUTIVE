import { HEADER_LINKS } from "@/constants"
import Container from "./container"
import { Link, NavLink } from "react-router-dom"
import { Search } from "lucide-react"
import MobileMenuButton from "../mobile/mobile-menu-button"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import MobileMenu from "../mobile/mobile-menu"
import Logo from "../logo"
import DropDownLinks from "./drop-down-links"

const LinkMotion = motion(Link)

export const enterEffect = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-md">
      <Container className="flex items-center h-[80px] gap-12 justify-between">
        <LinkMotion
          variants={enterEffect}
          initial="initial"
          animate="animate"
          to={"/"}
        >
          <Logo props={{ height: 60, width: 140 }} />
        </LinkMotion>

        <motion.nav
          variants={enterEffect}
          initial="initial"
          animate="animate"
          className="w-full hidden lg:block"
        >
          <ul className="flex items-center gap-5 w-full">
            {HEADER_LINKS.map((link, index) => (
              <li key={index} className="relative group py-8">
                <NavLink
                  to={link.link ?? "#"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-azul-light text-lg h-full capitalize font-medium"
                      : "text-azul-dark text-lg h-full hover:text-azul-light transition-all duration-200 capitalize font-medium"
                  }
                >
                  {link.label}
                </NavLink>

                {link.children && (
                  <DropDownLinks childrenLinks={link.children} />
                )}
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div
          variants={enterEffect}
          initial="initial"
          animate="animate"
          className="flex items-center gap-6 text-azul-dark text-base"
        >
          <Search />
          <button>EN</button>
          <MobileMenuButton handleToggle={handleToggle} />
        </motion.div>
      </Container>

      <AnimatePresence mode="wait">
        {isOpen && <MobileMenu handleToggle={handleToggle} />}
      </AnimatePresence>
    </header>
  )
}

export default Header