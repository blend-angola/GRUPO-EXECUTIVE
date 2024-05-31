import { AlignJustify } from "lucide-react"
import { FC } from "react"

type Props = {
  handleToggle: () => void
}

const MobileMenuButton: FC<Props> = ({ handleToggle }) => {
  return (
    <button
      onClick={handleToggle}
      className="lg:hidden flex cursor-pointer text-azul-dark z-30"
    >
      <AlignJustify size={32} />
    </button>
  )
}

export default MobileMenuButton
