// import { MotionAdvancedProps, motion } from "framer-motion"
import { FC, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
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
