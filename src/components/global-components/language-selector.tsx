import { ChangeEvent } from "react"

import { useTranslation } from "react-i18next"

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  function changeLanguage(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value) {
      const value = e.target.value
      console.log(value)
      i18n.changeLanguage(value)
    }
  }

  return (
    <select
      defaultValue="pt"
      onChange={changeLanguage}
      className="text-azul-dark uppercase text-xl lg:text-base"
    >
      <option value="pt">PT</option>
      <option value="en">EN</option>
    </select>
  )
}

export default LanguageSelector
