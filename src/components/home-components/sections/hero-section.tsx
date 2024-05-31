import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const HERO_IMAGES = ["hero/hero-1.jpg", "hero/hero-2.jpg", "hero/hero-3.jpg"]

const HeroSection = () => {
  return (
    <section className="md:h-[70vh] w-full">
      <Swiper
        className="w-full h-full relative"
        modules={[Pagination, Autoplay, EffectFade]}
        pagination
        autoplay
        effect="fade"
      >
        {HERO_IMAGES.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt="hero-imagem-1"
              className="absolute inset-0 w-full h-full z-30 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
