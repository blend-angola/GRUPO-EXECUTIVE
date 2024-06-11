import Container from "./container"
import { FC, useState } from "react"
import { motion } from "framer-motion"
import { twMerge } from "tailwind-merge"
import FooterContent from "../footer-components/footer-content"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"

type HoverProps = {
  enter: () => void
  leave: () => void
  className?: string
}

const Hover: FC<HoverProps> = ({ enter, leave, className }) => {
  return (
    <motion.div
      className={twMerge(
        "mx-auto mb-2 p-2 text-white bg-neutral-700 -top-12 z-20 size-12 flex items-center justify-center rounded-full",
        className
      )}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <MdOutlineKeyboardDoubleArrowUp />
    </motion.div>
  )
}

const Footer = () => {
  const [open, setOpen] = useState(false)

  function handleMouseEnter() {
    setOpen(true)
  }

  function handleMouseLeave() {
    setOpen(false)
  }

  return (
    <footer className="relative h-20 w-full justify-center mt-[100px] flex flex-col text-white">
      <Hover enter={handleMouseEnter} leave={handleMouseLeave} />

      <section className="relative flex flex-col items-center z-50 bg-neutral-900 w-full">
        <motion.div
          initial={{ height: 0 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={{ height: open ? 300 : 0 }}
          className="bg-neutral-900 py-0 overflow-y-hidden"
        >
          <FooterContentWrapper />
        </motion.div>
      </section>

      <section className="bg-neutral-900 self-end z-20 w-full flex py-10 flex-col ">
        <Container>
          <div className="flex flex-col gap-4 capitalize text-sm">
            <h4 className="text-zinc-400">
              <span>&copy;</span>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo, blanditiis.
            </h4>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              voluptatem numquam similique maxime unde, ducimus sed corporis
              exercitationem magni molestiae iste, perferendis eligendi quam qui
              natus suscipit quas reprehenderit architecto?
            </h4>
          </div>
        </Container>
      </section>
    </footer>
  )
}

export default Footer

const FooterContentWrapper = () => {
  return (
    <Container className="w-full border-b flex-col gap-6 z-50 lg:gap-0 lg:flex-row flex items-start capitalize py-10 justify-between flex-wrap">
      <FooterContent contents={["shop", "shop offers"]} />
      <FooterContent contents={["products"]} />
      <FooterContent contents={["support", "answer center"]} />
      <FooterContent contents={["account", "log in"]} />
      <FooterContent contents={["about", "why group executive"]} />

      <FooterContent
        socialMedias
        contents={[
          "more grupo executive",
          "grupo executive today",
          "adver on grupo executive",
        ]}
      />
    </Container>
  )
}
