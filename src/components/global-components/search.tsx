import { AnimatePresence, motion } from "framer-motion"
import { Search as SearchIcon, XCircleIcon } from "lucide-react"
import { ChangeEvent, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Search = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useSearchParams({ search: "" })

  function toggleSearch() {
    setIsOpen((prev) => !prev)
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch((prev) => {
      prev.set("search", e.target.value)
      return prev
    })
  }

  function handleSearch() {
    const searchResult = search.get("search")
    navigate(`/resultado?pesquisa=${searchResult}`)
    toggleSearch()
  }

  return (
    <>
      <button onClick={toggleSearch}>
        <SearchIcon />
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="w-full h-[100vh] top-20 flex items-start justify-center absolute left-0 bg-black"
          >
            <button
              className="absolute top-6 right-52 text-white"
              onClick={toggleSearch}
            >
              <XCircleIcon size={40} />
            </button>
            <div className="w-full px-8 lg:px-0 lg:w-[600px] gap-4 mt-[30vh] flex flex-col">
              <h1 className="ml-4 text-2xl text-white">Pesquisar</h1>

              <div className="flex items-center gap-4">
                <div className="w-full px-5 py-3  border rounded-full">
                  <input
                    type="text"
                    onChange={handleOnChange}
                    className="w-full h-full text-white text-xl border-none outline-none bg-inherit"
                  />
                </div>

                <button onClick={handleSearch} className="text-white">
                  <SearchIcon size={35} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Search
