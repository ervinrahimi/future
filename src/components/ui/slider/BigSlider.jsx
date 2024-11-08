"use client"
import React from 'react'
import styles from "./BigSlider.module.css"

// Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  FreeMode,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function BigSlider() {
  return (
    <div className={styles.container}>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          waitForTransition: true,
          pauseOnMouseEnter: true,
          stopOnLastSlide: true,
        }}
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, FreeMode, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={styles.hi}
        mousewheel={true}
        speed={600}
      >
        {/* Swiper slides */}
        <SwiperSlide className={styles.hi2}>
          <div className={styles.hi3}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide className={styles.hi2}>
          <div className={styles.hi3}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide className={styles.hi2}>
          <div className={styles.hi3}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide className={styles.hi2}>
          <div className={styles.hi3}>Slide 4</div>
        </SwiperSlide>
        <SwiperSlide className={styles.hi2}>
          <div className={styles.hi3}>Slide 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
