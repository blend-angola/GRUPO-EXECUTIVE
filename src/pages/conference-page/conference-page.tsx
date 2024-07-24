import { CONFERENCE_PAGE_DATA } from "@/data"
import Container from "@/components/global-components/container"
import Pagination from "@/components/global-components/pagination/pagination"
import ConferenceBlock from "@/components/conference-components/conference-block"

const ConferencePage = () => {
  return (
    <section className="w-full mt-[80px]">
      <h1 className="text-4xl text-center mb-14 md:text-5xl text-azul-light font-semibold capitalize">
        Sala de imprensa
      </h1>

      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {CONFERENCE_PAGE_DATA.map((data, index) => (
          <ConferenceBlock index={index} key={index} data={data} />
        ))}
      </Container>

      <Pagination />
    </section>
  )
}

export default ConferencePage
