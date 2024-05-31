import Container from "@/components/global/container"
import { Link } from "react-router-dom"

const PotencialSection = () => {
  return (
    <section className="w-full mt-[100px] h-screen">
      <Container className="flex flex-col text-azul-dark gap-8 h-[700px]">
        <h1 className="text-5xl md:text-[80px] font-normal text-center lg:px-12">
          O potencial é o que fazemos dele.
        </h1>
        <p className="text-xl text-center">
          Alimentamos o teu potencial para consumirmos juntos um dia a dia
          melhor.
        </p>

        <div className="relative bg-[url('laugh.jpg')] bg-cover bg-center w-full h-full rounded-xl">
          <div className="absolute w-full font-medium text-white text-center bottom-6 flex flex-col gap-4 lg:px-0 px-4">
            <p className="text-lg md:text-xl">
              Vemos sempre oportunidades para explorar, experimentar e
              progredir, sem barreiras.
            </p>
            <Link to="#" className="text-base md:text-lg underline">
              Descobre mais e junta-se a nós
            </Link>
          </div>

          <div className="bg-gradient-to-t h-full from-black/90 via-black/40 rounded-b-xl to-transparent shadow-2xl" />
        </div>
      </Container>
    </section>
  )
}

export default PotencialSection
