import { Link } from "react-router-dom"
import Container from "./container"
import { ArrowLeft } from "lucide-react"

const PageNotFound = () => {
  return (
    <section className="w-full h-[50vh] flex items-center justify-center">
      <Container className="flex flex-col  items-center justify-center gap-4">
        <h1 className="text-4xl text-azul-dark font-medium">
          {" "}
          404 Página não encontrada
        </h1>
        <Link
          to="/"
          className="px-3 py-2 rounded-lg text-azul-light bg-white border flex items-center gap-2 hover:bg-azul-light/5 transition-all duration-200"
        >
          <ArrowLeft />
          Voltar à página inicial
        </Link>
      </Container>
    </section>
  )
}

export default PageNotFound
