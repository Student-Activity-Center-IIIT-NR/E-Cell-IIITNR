import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

export interface CarouselItem {
  src: string
  alt?: string
  name?: string
  position?: string
}

interface CarouselProps {
  images: CarouselItem[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2000,
  showPagination = false,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 40px;
    padding-top: 10px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 280px;
  }

  @media (min-width: 640px) {
    .swiper-slide {
      width: 320px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    width: 44px;
    height: 44px;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
    font-weight: bold;
  }
  
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right {
    background-image: none !important;
  }
  `

  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-5xl px-2">
        <Swiper
          spaceBetween={40}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.2,
            slideShadows: false,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : undefined
          }
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 select-none">
                {/* Photo */}
                <img
                  src={item.src}
                  className="w-full h-full object-cover"
                  alt={item.position || item.name || item.alt || "Core Team"}
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay at the bottom */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"></div>

                {/* Position/Team overlay text using karantina font */}
                {item.position && (
                  <div className="absolute inset-x-0 bottom-0 pb-5 pt-3 px-3 flex justify-center items-center pointer-events-none">
                    <h3
                      className="font-karantina text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wider text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] leading-tight uppercase"
                      style={{
                        fontFamily: "karantina, sans-serif",
                      }}
                    >
                      {item.position}
                    </h3>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default CardCarousel
