import { FC } from "react"
import { motion } from "framer-motion"

import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {
  data: {
    title: string
    date: string
  }
}
const ConferenceBlock: FC<Props> = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-xl bg-gray-100 w-full h-full lg:h-[300px] flex flex-col items-start justify-between p-8"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-azul-dark capitalize font-semibold">
          {data.title}
        </h1>
        <span className="text-azul-light_xl capitalize text-base">
          {data.date}
        </span>
      </div>

      <Link to="#" className="w-full text-azul-light flex justify-end">
        <ArrowUpRight />
      </Link>
    </motion.div>
  )
}

export default ConferenceBlock
