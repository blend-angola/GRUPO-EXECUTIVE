import { FC } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "lg:px-0 px-6 w-full lg:w-[1200px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
