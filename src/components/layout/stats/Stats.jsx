import React from 'react'
import styles from './Stats.module.css'
// import useEmblaCarousel from 'embla-carousel-react'
import {
  SampleIcon
} from '@/assets/icons/main/statsBar'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

export default function Stats() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: 'auto',
        perView: 5,
        spacing: -20,
      },

      vertical: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <div className={styles.container}>
      <div className={styles.borderBox} />
      <div className={styles.statsContainer}>
        <div ref={sliderRef} className="keen-slider" style={{ height: '100%' }}>
          <div className={`${'keen-slider__slide'} ${'number-slide1'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide1'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide3'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide4'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide5'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide6'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide7'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide9'} ${styles.x}`}>
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide10'} ${styles.x}`}>
            {' '}
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
          <div className={`${'keen-slider__slide'} ${'number-slide11'} ${styles.x}`}>
            {' '}
            <div className={styles.content}>
              <SampleIcon className={styles.icon} />
              <div>
                <span className={styles.statsTitle}>هوش</span>
                <span className={styles.statsData}>بدون اطلاعات</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <StatsBarPowerIconFigma /> */}
    </div>
  )
}

{
  /* <div>
  <StatsBarPowerIcon />
</div> */
}
