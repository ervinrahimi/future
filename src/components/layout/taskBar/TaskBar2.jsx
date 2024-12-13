"use client"
import React from 'react'
import styles from './TaskBar.module.css'
import { SampleIcon } from '@/assets/icons/main/statsBar'
import { TaskBarLine } from '@/assets/svgs/taskBar/taskBar'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import MainClock from '@/components/shared/clock/MainClock'
export default function TaskBar() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slides: {
      origin: 'auto',
      perView: 5,
      spacing: 0,
    },
  })

  /* D:\Sex Nahaee\future\public\figma */
  return (
    <div className={styles.container}>
      <div className={styles.staticNodes}>
        <MainClock />
      </div>
      <div className={styles.nodesBox}>
        <div
          ref={sliderRef}
          className={`${'keen-slider'} ${styles.slider}`}
          style={{ height: 'max-content' }}
        >
          <div className={`${'keen-slider__slide'} ${'number-slide1'} ${styles.x}`}>
            <div className={styles.content}>1</div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide1'} ${styles.x}`}>
            <div className={styles.content}>2</div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide3'} ${styles.x}`}>
            <div className={styles.content}>3</div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide4'} ${styles.x}`}>
            <div className={styles.content}>4</div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide5'} ${styles.x}`}>
            <div className={styles.content}>5</div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide6'} ${styles.x}`}>
            <div className={styles.content}>6</div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide7'} ${styles.x}`}>
            <div className={styles.content}>7</div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide9'} ${styles.x}`}>
            <div className={styles.content}>8</div>
          </div>
        </div>
      </div>
      <TaskBarLine className={styles.barLine} />
    </div>
  )
}
