// import { Link } from "react-router-dom"
import Container from "./container"
import { SiFacebook,SiTwitter, SiYoutube } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="w-full mt-[100px] bg-neutral-900 text-white">
      <Container className=" flex flex-col gap-4 py-8">

        <div className="w-full flex-col gap-6 lg:gap-0 lg:flex-row flex items-start capitalize pb-20 justify-between flex-wrap">
          <div className="flex flex-col gap-2">
            <span>shop</span>
            <span>shop offers</span>
          </div>
          <span>products</span>
          <div className="flex flex-col gap-2">
            <span>support</span>
            <span>answer center</span>
          </div>

          <div className="flex flex-col gap-2">
            <span>account</span>
            <span>log in</span>
          </div>

          <div className="flex flex-col gap-2">
            <span>about</span>
            <span>why grupo executive</span>
          </div>

          <div className="flex flex-col gap-2">
            <span>more grupo executive</span>
            <span>grupo executive today</span>
            <span>adver on grupo executive</span>
            <ul className="flex justify-between text-2xl mt-2 items-center ">
              <li><SiFacebook/></li>
              <li><SiTwitter/></li>
              <li><SiYoutube/></li>
            </ul>
          </div>
        </div>

        <hr className="w-full h-[2px] bg-zinc-400" />

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
