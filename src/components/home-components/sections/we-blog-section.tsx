import WeBlogVerticalCard from "../weblog-vertical-card"
import WeBlogHorizontalCard from "../weblog-horizontal-card"

const WeBlogSection = () => {
  return (
    <section className="w-full pb-12 h-full  mt-[100px] px-1">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-1 text-center w-full mb-16">
          <h1 className="text-azul-dark text-[80px] capitalize">we blog</h1>
          <p className="text-azul-light_xl text-xl">Em discurso direto</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
          <WeBlogVerticalCard />
          <WeBlogHorizontalCard />
          <WeBlogVerticalCard />
          <WeBlogHorizontalCard reverse />
        </div>
      </div>
    </section>
  )
}

export default WeBlogSection
