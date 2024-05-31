import Container from "@/components/global/container"
import { Link } from "react-router-dom"

const TheFutureSection = () => {
  return (
    <section className="mt-[100px] w-full h-screen">
      <Container className="flex flex-col items-center space-y-12">
        <div className="w-fit flex flex-col text-center">
          <h1 className="text-[60px] lg:text-[80px] text-azul-dark font-normal ">
            O futuro é sustentável
          </h1>
          <h6 className="text-xl text-azul-dark font-normal">
            Moldando o amanhã com respeito e responsabilidade pelo planeta.
          </h6>
        </div>

        <div className="bg-[url('top-pov.jpg')] bg-center bg-cover w-full h-[60vh] md:h-[80vh] lg:h-screen rounded-t-full rounded-b-xl" />

        <div className="text-center flex flex-col gap-6">
          <h1 className="text-azul-dark font-normal text-2xl">
            Promovemos um crescimento responsável que impacte positivamente a
            vida das pessoas e o planeta.
          </h1>
          <Link
            to="#"
            className="text-azul-light underline text-xl font-semibold"
          >
            Saiba como nos importamos
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default TheFutureSection
