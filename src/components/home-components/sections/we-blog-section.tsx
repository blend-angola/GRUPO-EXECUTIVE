import WeBlogVerticalCard from "../weblog-vertical-card"
import WeBlogHorizontalCard from "../weblog-horizontal-card"
import { Link } from "react-router-dom"

const WeBlogSection = () => {
  return (
    <section className="w-full pb-12 h-full mt-[80px] px-1">
      <div className="w-full flex flex-col items-center justify-center">
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
