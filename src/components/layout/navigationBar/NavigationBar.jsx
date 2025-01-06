'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from './NavigationBar.module.css'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { NavigationDots, NavigationSelectedItem } from '@/assets/icons/main/navigationBar'

const items = [
  { id: 1, image: '/sample.jpg', label: 'Sales', notifications: 9 },
  { id: 2, image: '/sample.jpg', label: 'Security', notifications: 12 },
  { id: 3, image: '/sample.jpg', label: 'Legal', notifications: 5 },
  {
    id: 4,
    image: '/sample.jpg',
    label: 'Human Resources',
    notifications: 3,
  },
  { id: 5, image: '/sample.jpg', label: 'Information', notifications: 2 },
  { id: 6, image: '/sample.jpg', label: 'Sports', notifications: 15 },
  { id: 7, image: '/sample.jpg', label: 'Music', notifications: 7 },
  { id: 8, image: '/sample.jpg', label: 'Art', notifications: 4 },
  { id: 9, image: '/sample.jpg', label: 'Tech', notifications: 20 },
  { id: 10, image: '/sample.jpg', label: 'Food', notifications: 8 },
]

export default function NavigationBar() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const prevRef2 = useRef(null)
  const nextRef2 = useRef(null)

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.sliderContainer}>
          <button ref={prevRef} className={`${styles.navigationButton} ${styles.prevButton}`}>
            {'‹'}
          </button>
          <button ref={nextRef} className={`${styles.navigationButton} ${styles.nextButton}`}>
            {'›'}
          </button>

          <div className={styles.swiperContainer}>
            <NavigationDots className={styles.dots} />
            <Swiper
              modules={[Navigation]}
              // spaceBetween={10}
              slidesPerView={5}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.slideItem}>
                    <div className={styles.imageContainer}>
                      <img src={item.image} alt={""} className={styles.image} />
                      <div className={styles.badge}>
                        {item.notifications > 9 ? '+9' : item.notifications}
                      </div>
                    </div>
                    <div className={styles.label}>{item.label}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles.centerSide}>
        <div className={styles.selectedItem}>
          <div className={styles.selectedItemContent}>
            <Image src={'/buildings/soltani-zade/logo.jpg'} width={250} height={250} alt="null" />
          </div>
          <div className={styles.centerButtonContainer}>
            
          </div>
          {/* <NavigationSelectedItem className={styles.selectedFrame} /> */}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.sliderContainer}>
          <button ref={prevRef2} className={`${styles.navigationButton} ${styles.prevButton}`}>
            {'‹'}
          </button>
          <button ref={nextRef2} className={`${styles.navigationButton} ${styles.nextButton}`}>
            {'›'}
          </button>

          <div className={styles.swiperContainer}>
          <NavigationDots className={styles.dots} />
            <Swiper
              modules={[Navigation]}
              // spaceBetween={10}
              slidesPerView={5}
              loop={true}
              navigation={{
                prevEl: prevRef2.current,
                nextEl: nextRef2.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef2.current
                swiper.params.navigation.nextEl = nextRef2.current
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.slideItem}>
                    <div className={`${styles.imageContainer} ${styles.imageContainer2}`}>
                      <img src={item.image} alt={""} className={styles.image} />
                      <div className={styles.badge}>
                        {item.notifications > 9 ? '+9' : item.notifications}
                      </div>
                    </div>
                    <div className={styles.label}>{item.label}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
