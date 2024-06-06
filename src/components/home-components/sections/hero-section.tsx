import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const HERO_IMAGES = ["hero/hero-1.jpg", "hero/hero-1.jpg", "hero/hero-1.jpg"]

const HeroSection = () => {
  return (
    <section className="md:h-[75vh] w-full">
      <Swiper
        className="w-full h-full"
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={40}
        pagination
        speed={2000}
        autoplay
        effect="fade"
      >
        {HERO_IMAGES.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt="hero-imagem-1"
              className="w-full h-full z-30 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
