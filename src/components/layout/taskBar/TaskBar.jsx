'use client'
import React from 'react'
import styles from './TaskBar.module.css'
import { SampleIcon } from '@/assets/icons/main/statsBar'
import { TaskBarLine } from '@/assets/svgs/taskBar/taskBar'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import MainClock from '@/components/shared/clock/MainClock'
import Image from 'next/image'
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
      <Image src={'/figma/taskbar.png'} className={styles.rideman} alt={''} width={1000} height={1000} />
      <TaskBarLine className={styles.barLine} />
    </div>
  )
}
