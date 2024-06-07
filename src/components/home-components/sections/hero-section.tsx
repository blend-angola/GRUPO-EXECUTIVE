import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const HERO_IMAGES = ["hero/hero-1.jpg", "hero/hero-3.jpg", "hero/hero-5.jpg"]

const HeroSection = () => {
  return (
    <section className="md:h-[75vh] w-full">
      <Swiper
        autoplay
        pagination
        effect="fade"
        spaceBetween={40}
        slidesPerView={1}
        className="w-full h-full"
        modules={[Pagination, Autoplay, EffectFade]}
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
