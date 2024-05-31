import { FC } from "react"

type Props = {
  label: string
  title: string
  date: string
}

const CarouselContent: FC<Props> = ({ label, date, title }) => {
  return (
    <div className="w-full h-full lg:h-[250px] flex flex-col gap-8 font-medium mt-[80px] px-2">
      <div className="w-full flex items-center text-sm uppercase justify-between text-zinc-400 ">
        <h2>{label}</h2>
        <h2>{date}</h2>
      </div>
      <div className="text-azul-dark text-xl lg:line-clamp-none line-clamp-3 md:text-2xl capitalize">
        {title}
      </div>
    </div>
  )
}

export default CarouselContent
