import { useEffect, useState } from "react"
import SearchInput from "./search-input"
import { Search as SearchIcon } from "lucide-react"

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSearch() {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <button onClick={toggleSearch}>
        <SearchIcon />
      </button>

      <SearchInput isOpen={isOpen} toggleSearch={toggleSearch} />
    </>
  )
}

export default SearchButton
