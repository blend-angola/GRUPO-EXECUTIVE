import Container from "@/components/global-components/container"
import { Link } from "react-router-dom"

const IntroSection = () => {
  return (
    <section className="w-full mt-[80px]">
      <Container className="flex flex-col text-azul-dark space-y-16">
        <p className="text-xl lg:text-2xl">
          O Grupo Executivo é uma multinacional que gere um portefólio de
          empresas, criando valor em várias geografias, com uma cultura sólida e
          uma elevada capacidade para inovar e executar, levando os benefícios
          do progresso a um número crescente de pessoas.
        </p>
        <br />
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl lg:text-6xl font-normal">
            No Grupo Executivo, cada dia é um novo começo para novas
            oportunidades, novos desafios e novos triunfos.
          </h1>

          <Link
            to="#"
            className="capitalize font-bold text-xl text-azul-light underline"
          >
            descubra o grupo executivo
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default IntroSection
