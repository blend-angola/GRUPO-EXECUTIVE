import Logo from "../logo"
import { useEffect, useState } from "react"
import Container from "./container"
import SearchButton from "./search-button"
import { NavLink } from "react-router-dom"
import { HEADER_LINKS } from "@/constants"
import DropDownLinks from "./drop-down-links"
import MobileMenu from "../mobile/mobile-menu"
import { AnimatePresence, motion } from "framer-motion"
import MobileMenuButton from "../mobile/mobile-menu-button"

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
  const [resizeLogo, setResizeLogo] = useState(false)

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    function handleResizeLogo() {
      if (window.scrollY > 200) {
        setResizeLogo(true)
      } else {
        setResizeLogo(false)
      }
    }

    window.addEventListener("scroll", handleResizeLogo)
    return () => window.removeEventListener("scroll", handleResizeLogo)
  }, [window.scrollY])

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b">
      <Container className="flex items-center h-[80px] gap-12 justify-between">
        <Logo resize={resizeLogo} />

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
                      ? "text-azul-light text-base h-full capitalize font-medium"
                      : "text-azul-dark text-base h-full hover:text-azul-light transition-all duration-200 capitalize font-medium"
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
          <SearchButton />

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
