import { Link } from "react-router-dom"

const WeBlogHorizontalCard = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={`relative ${
        reverse ? "lg:flex-row-reverse" : ""
      } flex w-full flex-col lg:flex-row lg:col-span-2 rounded-xl bg-gray-100`}
    >
      <div className="relative h-[300px] lg:h-full w-full lg:w-[720px] ">
        <img
          src="trees.jpg"
          className={`absolute rounded-t-lg inset-0 h-full w-full object-cover ${
            reverse
              ? "lg:rounded-r-lg lg:rounded-t lg:rounded-tl-none rounded-t-lg"
              : "lg:rounded-l-lg lg:rounded-r-none"
          }`}
          alt="tree"
        />
      </div>

      <div className="w-full lg:w-[690px] h-[250px] relative p-4">
        <img
          src="profile.jpg"
          alt="profile"
          className={`absolute ${
            reverse ? "lg:-right-9 " : "lg:-left-9 left-6"
          } -top-7 lg:top-4 object-cover size-16 border-2 border-azul-light rounded-full`}
        />
        <div className="absolute top-12 lg:top-6 left-10 h-fit flex flex-col text-azul-dark">
          <h4 className="text-sm mb-4">Lorem, ipsum dolor</h4>
          <h2 className="text-lg font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <span className="text-xs text-azul-light">28 Abril 2024</span>
        </div>
        <Link
          className="absolute capitalize bottom-4 lg:-bottom-8 left-12 font-semibold text-xs mt-12"
          to="#"
        >
          Ler mais
        </Link>
      </div>
    </div>
  )
}

export default WeBlogHorizontalCard
