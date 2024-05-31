import { FC } from "react"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

type Props = {
  childrenLinks:
    | {
        label: string
        link: string
      }[]
    | undefined
}

const DropDownLinks: FC<Props> = ({ childrenLinks }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="absolute p-4 group-hover:flex hidden left-0 top-[80px] w-[250px] bg-white shadow-md rounded-b-lg"
    >
      <div className="absolute top-0 h-[4px] bg-azul-light w-[25%] left-0" />
      <ul className="space-y-4">
        {childrenLinks?.map((secondary_link, i) => (
          <li key={i}>
            <Link className="text-azul-dark capitalize text-lg" to={`${secondary_link.link}`}>{secondary_link.label}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default DropDownLinks
