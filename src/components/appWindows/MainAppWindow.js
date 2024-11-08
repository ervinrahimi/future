'use client'
import Window from '@/components/appWindows/Window'
import React, { useEffect, useRef } from 'react'
import styles from './MainAppWindow.module.css'
import { gsap } from 'gsap'

export default function MainAppWindow() {
  const windowRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      windowRef.current,
      {
        opacity: 0,
        scale: 0.8, // شروع از اندازه کوچک‌تر
        y: 60, // شروع از مقداری بالاتر (برای حس باز شدن از بالا)
      },
      {
        opacity: 1,
        scale: 1,
        y: 0, // بازگشت به مکان اصلی
        delay: 0.35,
        duration: 0.58,
        ease: 'back.out', // اضافه کردن easing برای حس نرم‌تر
      }
    )
  }, []) // فقط یک بار در زمان بارگذاری صفحه اجرا می‌شود

  return (
    <div className={styles.container} ref={windowRef}>
      <Window className={styles.container} />
    </div>
  )
}
