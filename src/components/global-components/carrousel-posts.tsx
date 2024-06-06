import CarouselContent from "./carousel-content"
import { Link } from "react-router-dom"

const FAKE_CONTENT = [
  {
    id: 1,
    label: "press release",
    title: "four group m leader recognized on EMpower 100 lists",
    date: "may 2024",
  },
  {
    id: 2,
    label: "press release",
    title:
      "groupM commits to double media investment in annual women's sports advertising opportunities",
    date: "may 2024",
  },
  {
    id: 3,
    label: "news",
    title:
      "groupM agencies take four of top fiver media agency sports in WARC effective 100 list 2024",
    date: "may 2024",
  },
  {
    id: 4,
    label: "news",
    title: "groupM top the media 100 list four straight year",
    date: "may 2024",
  },
]

const CarrouselPosts = () => {
  return (
    <section className="w-full h-full flex flex-col px-4 gap-4">
      <div className="w-full flex items-center justify-end">
        <Link to="#" className="text-lg font-semibold underline text-azul-dark">
          Ver mais
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {FAKE_CONTENT.map((content) => (
          <CarouselContent
            id={content.id}
            key={content.id}
            date={content.date}
            label={content.label}
            title={`${content.title}: ${content.id}`}
          />
        ))}
      </div>
    </section>
  )
}

export default CarrouselPosts
