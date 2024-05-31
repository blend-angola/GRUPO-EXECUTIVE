import { FC } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

type Props = {
  openIndex: number | null
  index: number
  links:
    | {
        label: string
        link: string
      }[]
    | undefined
}

const MobileCombobox: FC<Props> = ({ index, openIndex, links }) => {
  return (
    <div>
      {openIndex === index && (
        <motion.div
          initial={{ height: "0px" }}
          whileInView={{ height: "auto" }}
          className="w-full overflow-y-hidden flex flex-col gap-2 ml-7 mt-4"
        >
          {links?.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              reloadDocument
              className="text-azul-light_xl capitalize text-base"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default MobileCombobox
