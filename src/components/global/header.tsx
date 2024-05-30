import { HEADER_LINKS } from "@/constants"
import Container from "./container"
import { Link, NavLink } from "react-router-dom"
import { Search } from "lucide-react"

const Header = () => {
  return (
    <header className="w-full bg-white fixed top-0 z-50">
      <Container className="flex items-center h-[90px] gap-12">
        <Link to={"/"} className="px-12">
          LOGO
        </Link>

        <nav className="w-full">
          <ul className="flex items-center gap-5 w-full">
            {HEADER_LINKS.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.link ?? "#"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-azul-light text-lg capitalize font-semibold"
                      : "text-azul-dark text-lg capitalize font-semibold"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-7 text-azul-dark text-base">
          <Search />
          <button>EN</button>
        </div>
      </Container>
    </header>
  )
}

export default Header
