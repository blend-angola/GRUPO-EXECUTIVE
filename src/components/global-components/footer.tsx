import { motion } from "framer-motion"
import FooterContent from "../footer-components/footer-content"
import Container from "./container"
import { useState } from "react"

const Footer = () => {
  const [open, setOpen] = useState(false)

  function handleMouseEnter() {
    setOpen(true)
  }

  function handleMouseLeave() {
    setOpen(false)
  }

  return (
    <footer className="relative w-full mt-[100px] flex py-8 flex-col bg-neutral-900 text-white">
      <Container>
        <div className="w-full flex-col gap-6 lg:gap-0 lg:flex-row flex items-start capitalize pb-8 justify-between flex-wrap">
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
        </div>
        <hr className="w-full h-[2px] my-4 bg-zinc-400" />
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
    </footer>
  )
}

export default Footer

const Hover = ({ enter, leave }: { enter: () => void; leave: () => void }) => {
  return (
    <div
      className="absolute -top-12 z-20 size-12 flex items-center justify-center p-2 bg-red-600 rounded-full left-1/2 translate-x-1/2"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      Show
    </div>
  )
}
