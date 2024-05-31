import { ChevronLeft, ChevronRight } from "lucide-react"
import CarouselContent from "./carousel-content"

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
    <section className="w-full h-full flex items-center gap-4 flex-col px-4">
      <div className="flex items-center flex-wrap lg:flex-nowrap lg:gap-0 gap-2 w-full">
        {FAKE_CONTENT.map((content) => (
          <CarouselContent
            date={content.date}
            key={content.id}
            label={content.label}
            title={content.title}
          />
        ))}
      </div>

      <div className="w-full flex mt-2 items-center justify-between gap-8 pr-14">
        <div className="relative w-full h-[2px] bg-zinc-400">
          <div className="absolute h-[2px] w-[20%] bg-green-400" />
        </div>

        <div className="flex items-center gap-2">
          <button className="text-azul-dark">
            <ChevronLeft />
          </button>
          <button className="text-azul-dark">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CarrouselPosts
