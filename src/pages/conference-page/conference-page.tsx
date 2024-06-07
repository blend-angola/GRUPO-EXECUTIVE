import ConferenceBlock from "@/components/conference-components/conference-block"
import Container from "@/components/global-components/container"
import { Link } from "react-router-dom"

const FAKE_DATA = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta",
    date: "28 de Maio de 2024",
  },
]

const ConferencePage = () => {
  return (
    <section className="w-full mt-[80px]">
      <h1 className="text-4xl text-center mb-14 md:text-5xl text-azul-light font-semibold capitalize">
        Sala de imprensa
      </h1>

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {FAKE_DATA.map((data, index) => (
          <ConferenceBlock index={index} key={index} data={data} />
        ))}
      </Container>
      <div className="w-full text-center mt-16">
        <Link
          to="#"
          className="underline font-semibold text-lg text-azul-dark uppercase"
        >
          ver mais
        </Link>
      </div>
    </section>
  )
}

export default ConferencePage
