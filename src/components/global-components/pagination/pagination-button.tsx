import { ElementType } from "react"

type Props = {
  icon?: ElementType
  onclick: () => void
}

const PaginationButton = ({ onclick, icon: Icon }: Props) => {
  return (
    <button
      onClick={onclick}
      className="size-8 md:size-12  rounded-[8px] border border-azul-light text-azul-light flex items-center justify-center"
    >
      {Icon && <Icon />}
    </button>
  )
}

export default PaginationButton
