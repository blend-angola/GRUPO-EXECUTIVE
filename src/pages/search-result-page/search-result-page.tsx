import Container from "@/components/global-components/container"
import Pagination from "@/components/global-components/pagination/pagination"
import { useLocation } from "react-router-dom"

const SearchResultPage = () => {
  const { search } = useLocation()

  const decodedSearchResult = decodeURIComponent(search.split("=")[1])
  return (
    <main className="w-full min-h-screen mt-[30px] mb-[40px]">
      <Container className="flex flex-col gap-12">
        <section className="flex gap-2 items-center ">
          <span className="text-azul-dark font-semibold text-2xl">
            Pesquisou por:
          </span>
          <span className="text-azul-light text-2xl">
            {decodedSearchResult}
          </span>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-xl h-48 w-full bg-zinc-100 space-y-2"
            >
              <h2 className="text-xl text-azul-dark font-medium">
                {decodedSearchResult}
              </h2>
              <p className="text-neutral-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </section>
        <Pagination />
      </Container>
    </main>
  )
}

export default SearchResultPage
