import { useState } from "react"
import { Search as SearchIcon } from "lucide-react"
import SearchInput from "./search-input"

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSearch() {
    setIsOpen((prev) => !prev)
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
