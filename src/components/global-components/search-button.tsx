import { useState } from "react"
import SearchInput from "./search-input"
import { Search as SearchIcon } from "lucide-react"

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSearch() {
    setIsOpen((prev) => !prev)
  }

  if (isOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

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
