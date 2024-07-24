import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import homePt from "../i18next/locale/pt/home.json"
import homeEn from "@/utils/i18next/locale/en/home.json"

import commonPt from "../i18next/locale/pt/common.json"
import commonEn from "@/utils/i18next/locale/en/common.json"

const resources = {
  pt: {
    home: homePt,
    common: commonPt,
  },
  en: {
    home: homeEn,
    common: commonEn,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "pt",
    returnObjects: true,
    ns: ["common", "home"],
  })

export default i18n
