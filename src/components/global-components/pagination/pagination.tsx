import { PAGES } from "@/data"
import { useState } from "react"
import PaginationButton from "./pagination-button"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

const Pagination = () => {
  const MAX_VISIBLE_BUTTONS = 5
  const [page, setPage] = useState(1)

  const controls = {
    calculateVisibleButtons: () => {
      let maxLeft = page - Math.floor(MAX_VISIBLE_BUTTONS / 2)
      let maxRight = page + Math.floor(MAX_VISIBLE_BUTTONS / 2)

      if (maxLeft < 1) {
        maxLeft = 1
        maxRight = MAX_VISIBLE_BUTTONS
      }
      if (maxRight > PAGES.length) {
        maxLeft = PAGES.length - (MAX_VISIBLE_BUTTONS - 1)
        maxRight = PAGES.length
      }
      return { maxLeft, maxRight }
    },

    goTo: (page: number) => {
      setPage((current) => {
        if (page === current) {
          return current
        }
        window.scrollTo(0, 0)
        return page
      })
    },

    nextPage: () => {
      setPage((current) => {
        if (current < PAGES.length) {
          window.scrollTo(0, 0)
          return current + 1
        }
        return PAGES.length
      })
    },

    previousPage: () => {
      setPage((current) => {
        if (current > 1) {
          window.scrollTo(0, 0)
          return current - 1
        }
        return 1
      })
    },

    goToStart: () => {
      setPage((current) => {
        if (current === 1) {
          return current
        }
        window.scrollTo(0, 0)
        return 1
      })
    },

    goToEnd: () => {
      setPage((current) => {
        if (current === PAGES.length) {
          return PAGES.length
        }
        window.scrollTo(0, 0)
        return PAGES.length
      })
    },
  }

  const { maxLeft, maxRight } = controls.calculateVisibleButtons()
  const buttons = PAGES.slice(maxLeft - 1, maxRight)

  return (
    <div className="flex items-center justify-center w-full gap-2 mt-16">
      <PaginationButton onclick={controls.goToStart} icon={ChevronsLeft} />
      <PaginationButton onclick={controls.previousPage} icon={ChevronLeft} />
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => controls.goTo(button)}
          className={`size-8 md:size-12 rounded-[8px] ${
            page === button
              ? "bg-azul-light text-white"
              : "bg-white text-azul-light"
          } text-sm md:text-base flex items-center justify-center border border-azul-light`}
        >
          {button}
        </button>
      ))}
      <PaginationButton onclick={controls.nextPage} icon={ChevronRight} />
      <PaginationButton onclick={controls.goToEnd} icon={ChevronsRight} />
    </div>
  )
}

export default Pagination
