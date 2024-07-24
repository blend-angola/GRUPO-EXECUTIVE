import Logo from "../logo"
import { useEffect, useState } from "react"
import Container from "./container"
import SearchButton from "./search-button"
import { NavLink } from "react-router-dom"
// import { HEADER_LINKS } from "@/constants"
import DropDownLinks from "./drop-down-links"
import MobileMenu from "../mobile/mobile-menu"
import { AnimatePresence, motion } from "framer-motion"
import MobileMenuButton from "../mobile/mobile-menu-button"
import LanguageSelector from "./language-selector"
import { useTranslation } from "react-i18next"

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

export type HeaderProps = {
  label: string
  link: string
  children?: { label: string; link: string }[]
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [resizeLogo, setResizeLogo] = useState(false)
  const { t } = useTranslation("common")

  const headerArr: HeaderProps[] = t("header") as any

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  if (isOpen) {
    window.document.body.style.overflow = "hidden"
  } else {
    window.document.body.style.overflow = "auto"
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
          <ul className="flex items-center gap-4 w-full">
            {headerArr.map((link, index) => (
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

          <LanguageSelector />
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
