import { Link } from "react-router-dom"
import Container from "@/components/global-components/container"
import { useTranslation } from "react-i18next"

const IntroSection = () => {
  const { t } = useTranslation("home")
  const intro_text = t("intro-text")
  const title = t("title")
  const discover_link = t("button-discover")

  return (
    <section className="w-full mt-[80px]">
      <Container className="flex flex-col text-azul-dark space-y-16">
        <p className="text-xl lg:text-2xl">{intro_text}</p>
        <br />
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl lg:text-6xl font-normal">{title}</h1>

          <Link
            to="#"
            className="capitalize font-bold text-xl text-azul-light underline"
          >
            {discover_link}
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default IntroSection
