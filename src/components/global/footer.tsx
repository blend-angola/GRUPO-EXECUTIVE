import { Link } from "react-router-dom"
import Container from "./container"
import { SiLinkedin } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="w-full mt-[100px]">
      <Container className="border-t border-t-zinc-400 flex flex-col lg:flex-row lg:items-center justify-between py-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-azul-dark text-sm">
          <span className="uppercase">&copy; 2024 - grupo executivo</span>
          <Link to={"#"} className="capitalize">
            política de cookies
          </Link>
          <Link to={"#"} className="capitalize">
            política de privacidade
          </Link>
          <Link to={"#"} className="capitalize">
            contactos
          </Link>
        </div>

        <div className="text-azul-dark text-sm flex items-center mt-4 lg:mt-0 gap-2">
          <SiLinkedin />
          <a href="https://linkedin.com">Linkedin</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
