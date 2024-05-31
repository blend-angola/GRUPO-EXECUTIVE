import { HEADER_LINKS } from "@/constants"
import Container from "./container"
import { Link, NavLink } from "react-router-dom"
import { Search } from "lucide-react"
import MobileMenuButton from "../mobile/mobile-menu-button"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import MobileMenu from "../mobile/mobile-menu"
import Logo from "../logo"
import DropDownLinks from "./drop-down-links"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-md">
      <Container className="flex items-center h-[80px] gap-12 justify-between">
        <Link to={"/"}>
          <Logo props={{ height: 60, width: 100 }} />
        </Link>

        <nav className="w-full hidden lg:block">
          <ul className="flex items-center gap-5 w-full">
            {HEADER_LINKS.map((link, index) => (
              <li key={index} className="relative group py-8">
                <NavLink
                  to={link.link ?? "#"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-azul-light text-lg h-full  capitalize font-semibold"
                      : "text-azul-dark text-lg  h-full capitalize font-semibold"
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
        </nav>

        <div className="flex items-center gap-6 text-azul-dark text-base">
          <Search />
          <button>EN</button>
          <MobileMenuButton handleToggle={handleToggle} />
        </div>
      </Container>

      <AnimatePresence mode="wait">
        {isOpen && <MobileMenu handleToggle={handleToggle} />}
      </AnimatePresence>
    </header>
  )
}

export default Header
