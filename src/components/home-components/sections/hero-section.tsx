import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const HERO_IMAGES = ["hero/hero-1.jpg", "hero/hero-2.jpg"]

const HeroSection = () => {
  return (
    <section className="md:h-[75vh] h-[50vh] w-full">
      <Swiper
        autoplay
        pagination
        effect="fade"
        spaceBetween={20}
        slidesPerView={1}
        className="w-full bg h-full"
        modules={[Pagination, Autoplay, EffectFade]}
      >
        {HERO_IMAGES.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt="hero-image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
