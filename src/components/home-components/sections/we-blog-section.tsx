import { Link } from "react-router-dom"

const WeBlogSection = () => {
  return (
    <section className="w-full h-screen mt-[100px] px-1">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-1 text-center w-full mb-16">
          <h1 className="text-azul-dark text-[80px] capitalize">we blog</h1>
          <p className="text-azul-light_xl text-xl">Em discurso direto</p>
        </div>

        <div className="w-full grid grid-cols-4 gap-4">
          <WeBlogVerticalCard />
          <WeBlogHorizontalCard />
          <WeBlogVerticalCard />
          <WeBlogHorizontalCard reverse />
        </div>

        <div className="mt-20 w-full">
          <WeBlogVCardTest />
        </div>
      </div>
    </section>
  )
}

export default WeBlogSection

const WeBlogVerticalCard = () => {
  return (
    <div className="relative w-full row-span-2 flex flex-col bg-gray-100 rounded-lg">
      <img
        src="trees.jpg"
        alt="tree"
        className="w-full h-[300px] rounded-t-lg object-cover"
      />
      <div className="relative w-full h-full flex flex-col text-azul-dark gap-4 p-4">
        <img
          src="profile.jpg"
          className="absolute -top-8 left-4 object-cover bg-center size-16 border-2 border-azul-light rounded-full"
          alt=""
        />
        <div className="w-full flex flex-col gap-2 mt-7">
          <h4 className="text-base">Lorem ipsum dolor</h4>
          <h2 className="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <span className="text-xs">28 maio 2024</span>
        </div>

        <p className="line-clamp-3 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          dolorem eum, accusamus esse provident laboriosam voluptate ab quas
          corporis voluptatem!
        </p>

        <Link className="capitalize text-xs mt-12 font-semibold" to="#">
          Ler mais
        </Link>
      </div>
    </div>
  )
}

const WeBlogHorizontalCard = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={`relative ${
        reverse ? "flex-row-reverse" : ""
      } flex w-full col-span-2 rounded-xl bg-gray-100`}
    >
      <div className="relative h-full w-[720px] ">
        <img
          src="trees.jpg"
          className={`absolute inset-0 h-full w-full object-cover ${
            reverse ? "rounded-r-lg" : "rounded-l-lg"
          }`}
          alt="tree"
        />
      </div>

      <div className="w-full relative p-4">
        <img
          src="profile.jpg"
          alt="profile"
          className={`absolute ${
            reverse ? "-right-9" : "-left-9"
          } top-4 object-cover size-16 border-2 border-azul-light rounded-full`}
        />
        <div className="absolute top-6 left-10 h-fit flex flex-col text-azul-dark">
          <h4 className="text-sm mb-4">Lorem, ipsum dolor</h4>
          <h2 className="text-lg font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <span className="text-xs text-azul-light">28 Abril 2024</span>
        </div>
        <Link
          className="absolute capitalize bottom-4 left-12 font-semibold text-xs mt-12"
          to="#"
        >
          Ler mais
        </Link>
      </div>
    </div>
  )
}

const WeBlogVCardTest = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={`relative ${
        reverse ? "flex-row-reverse" : ""
      } flex w-full  rounded-xl bg-gray-100`}
    >
      <div className="relative h-full w-[720px] ">
        <img
          src="trees.jpg"
          className={`absolute inset-0 h-full w-full object-cover ${
            reverse ? "rounded-r-lg" : "rounded-l-lg"
          }`}
          alt="tree"
        />
      </div>

      <div className="w-full relative p-4">
        <img
          src="profile.jpg"
          alt="profile"
          className={`absolute ${
            reverse ? "-right-9" : "-left-9"
          } top-4 object-cover size-16 border-2 border-azul-light rounded-full`}
        />
        <div className="absolute top-6 left-10 h-fit flex flex-col text-azul-dark">
          <h4 className="text-sm mb-4">Lorem, ipsum dolor</h4>
          <h2 className="text-lg font-medium mb-2">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <span className="text-xs text-azul-light">28 Abril 2024</span>
        </div>
        <Link
          className="absolute capitalize bottom-4 left-12 font-semibold text-xs mt-12"
          to="#"
        >
          Ler mais
        </Link>
      </div>
    </div>
  )
}
