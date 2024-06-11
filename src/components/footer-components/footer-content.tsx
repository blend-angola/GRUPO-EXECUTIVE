import { FC } from "react"
import { SiFacebook, SiTwitter, SiYoutube } from "react-icons/si"

type Props = {
  contents: string[]
  socialMedias?: boolean
}

const FooterContent: FC<Props> = ({ contents, socialMedias }) => {
  return (
    <div className="flex flex-col gap-8">
      {contents.map((content, index) => (
        <span key={index}>{content}</span>
      ))}

      {socialMedias && (
        <ul className="flex justify-between text-3xl mt-2 items-center ">
          <li>
            <a href="https://facebook.com" target="_blank">
              <SiFacebook />
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank">
              <SiTwitter />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank">
              <SiYoutube />
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default FooterContent
