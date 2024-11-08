'use client'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import styles from './Desktop.module.css'
import WindowControlButtons from '@/components/layout/windowControl/WindowControlButton'
import { Navigation } from '@/components/layout/navigationBar/NavigationBar'
import HeightControl from '@/components/layout/heightControl/HeightControl'
import Stats from '@/components/layout/stats/Stats'
import People from '@/components/layout/people/People'
import TaskBar from '@/components/layout/taskBar/TaskBar'
import AppOnDesktop from '@/components/appIcons/AppOnDesktop'
import { NodeDesktopContainer, AppDesktopIcon } from '@/assets/svgs/appDesktop/appDesktop'
import GridComponent from '@/components/appIcons/AppsGrid'
import { toast } from 'react-toastify'
import CustomNotification from '../notificationBox/CustomNotification'

gsap.registerPlugin(ScrollTrigger)

export default function Desktop() {
  const appOnDesktopRef = useRef(null)
  const desktopRef = useRef(null)

  const showCustomToast = () => {
    toast(<CustomNotification title="نوتیفیکیشن" message="این یک پیام ساده است." />, {
      autoClose: 3000,
      closeButton: false,
      hideProgressBar: true,
    })
  }

  // انواع ease ها:

  // قدرتی (Power) - تنظیم شدت حرکت در شروع و پایان انیمیشن
  // "power1.in"       // انیمیشن به آرامی شروع می‌شود و به تدریج سرعت می‌گیرد
  // "power1.out"      // انیمیشن سریع شروع می‌شود و به تدریج کاهش سرعت می‌دهد
  // "power1.inOut"    // ترکیبی از هر دو حالت بالا، نرم و روان

  // "power2.in"       // مشابه power1 اما کمی شدیدتر
  // "power2.out"      // پایان آرام با شروع تندتر
  // "power2.inOut"    // حرکتی ملایم‌تر نسبت به power1 برای شروع و پایان

  // "power3.in"       // انیمیشن با قدرت بیشتری در شروع حرکت می‌کند
  // "power3.out"      // با سرعت بالا شروع و به تدریج کاهش می‌یابد
  // "power3.inOut"    // پیشنهاد شده برای انیمیشن‌های متعادل و طبیعی

  // "power4.in"       // شروعی بسیار آرام و افزایش تدریجی سرعت
  // "power4.out"      // پایان خیلی نرم با سرعت کاهش یافته
  // "power4.inOut"    // قدرت بالا برای انیمیشن‌های قوی و واضح

  // بازگشت‌دار (Back) - مناسب برای حرکاتی که اندکی بازگشت دارند
  // "back.in"         // با اندکی بازگشت در ابتدا، سپس سرعت گرفتن
  // "back.out"        // با اندکی بازگشت در انتها
  // "back.inOut"      // بازگشت در شروع و پایان

  // ارتجاعی (Elastic) - حرکات ارتجاعی و جهشی
  // "elastic.in"      // انیمیشن با حالت ارتجاعی و جهش به جلو شروع می‌شود
  // "elastic.out"     // به آرامی به جایگاه نهایی باز می‌گردد
  // "elastic.inOut"   // با ارتعاش و بازگشت در ابتدا و انتها

  // پرشی (Bounce) - مناسب برای حرکات پرشی و طبیعی
  // "bounce.in"       // شروع پرشی و پرانرژی
  // "bounce.out"      // پایان با حالت پرشی و طبیعی
  // "bounce.inOut"    // پرش در ابتدا و انتها، شبیه حرکات واقعی

  // خطی (Linear) - بدون هیچ تغییری در سرعت
  // "linear"          // حرکت کاملاً خطی و یکنواخت، بدون شتاب یا کاهش سرعت

  useEffect(() => {
    if (appOnDesktopRef.current) {
      gsap.to(appOnDesktopRef.current, {
        duration: 1,
        x: 200,
        ease: 'power3.out', // نوع ease برای روان کردن انیمیشن
        scrollTrigger: {
          trigger: desktopRef.current,
          // start: 'top+=500 top',
          // end: '+=500',
          start: 'top 0%',
          end: 'bottom 100%',
          scrub: 0.5,
          markers: true, // نمایش نوارهای کمکی اسکرول
          // toggleActions: 'play none none reverse',
        },
      })
    }
  }, [])

  // const showCustomToast = () => {
  //   toast('hi')
  // }

  return (
    <div className={styles.page} ref={desktopRef}>
      <div ref={appOnDesktopRef} className={styles.appOnDesktop}>
        <AppOnDesktop className={styles.appIcon} />
      </div>
      <div className={styles.figma} />
      <div className={styles.desktopModulesContainer}>
        <WindowControlButtons />
        <HeightControl />
        <Stats />
        <People />
        <TaskBar />
      </div>

      <div onClick={showCustomToast} className={styles.sss}>
        sssssssssssssssssssssssss
      </div>

      {/* <Navigation /> */}

      {/* <GridComponent /> */}
      {/* <NodeDesktopContainer /> */}
      {/* <div onClick={handlePlay} className={styles.music} /> */}
    </div>
  )
}
