import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
  reverse: boolean
}

export const VerticalCard: FC<Props> = ({ reverse }) => {
  return (
    <>
      {reverse ? (
        <div className="relative w-full lg:row-span-2 flex flex-col bg-gray-100 rounded-lg">
          <div className="relative w-full h-full flex flex-col text-azul-dark gap-4 p-4">
            <img
              src="profile.jpg"
              className="absolute -bottom-8 left-4 object-cover bg-center size-16 border-2 border-azul-light rounded-full"
              alt=""
            />
            <div className="w-full flex flex-col gap-2 mt-7">
              <h4 className="text-base">Lorem ipsum dolor</h4>
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <span className="text-xs text-azul-light">28 maio 2024</span>
            </div>

            <p className="line-clamp-3 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              dolorem eum, accusamus esse provident laboriosam voluptate ab quas
              corporis voluptatem!
            </p>

            <p className="capitalize text-right text-xs mt-12 font-semibold">
              Ler mais
            </p>
          </div>
          <img
            src="trees.jpg"
            alt="tree"
            className="w-full h-[300px] lg:h-[320px] rounded-t-lg object-cover"
          />
        </div>
      ) : (
        <div className="relative w-full lg:row-span-2 flex flex-col bg-gray-100 rounded-lg">
          <img
            src="trees.jpg"
            alt="tree"
            className="w-full h-[300px] lg:h-[320px] rounded-t-lg object-cover"
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
              <span className="text-xs text-azul-light">28 maio 2024</span>
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
      )}
    </>
  )
}

export default VerticalCard
