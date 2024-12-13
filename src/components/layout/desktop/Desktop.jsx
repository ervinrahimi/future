'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import styles from './Desktop.module.css'
import WindowControlButtons from '@/components/layout/windowControl/WindowControlButton'
import { Navigation } from '@/components/layout/navigationBar/backup/NavigationBar2'
import HeightControl from '@/components/layout/heightControl/HeightControl'
import Stats from '@/components/layout/stats/Stats'
import People from '@/components/layout/people/People'
import TaskBar from '@/components/layout/taskBar/TaskBar'
import AppOnDesktop from '@/components/appIcons/AppOnDesktop'
import { NodeDesktopContainer, AppDesktopIcon } from '@/assets/svgs/appDesktop/appDesktop'
import GridComponent from '@/components/appIcons/AppsGrid'
import { toast } from 'react-toastify'
import CustomNotification from '../notificationBox/CustomNotification'
import useScrollToTopOnRouteChange from '@/utils/scrollToTop/ScrollToTop'
import Departments from '@/components/departments/Departments'
import DesktopBackground from '../background/DesktopBackground'
import NavigationBar from '../navigationBar/NavigationBar'
import { Rideman1, Rideman2 } from '@/assets/svgs/rideman/rideman'

gsap.registerPlugin(ScrollTrigger)

export default function Desktop() {
  // useScrollToTopOnRouteChange()
  const appOnDesktopRef = useRef(null)
  const desktopRef = useRef(null)
  const departmentRef = useRef(null)

  const showCustomToast = () => {
    toast(<CustomNotification title="نوتیفیکیشن" message="این یک پیام ساده است." />, {
      autoClose: 3000,
      closeButton: false,
      hideProgressBar: true,
    })
  }

  // start: 'top 0%',
  //         end: 'bottom 100%',

  useEffect(() => {
    if (appOnDesktopRef.current) {
      // انیمیشن اول با اسکرول
      gsap.to(appOnDesktopRef.current, {
        duration: 0.3,
        scale: 0.7,
        opacity: 1,
        ease: 'power3.in',
        scrollTrigger: {
          trigger: desktopRef.current,
          start: '0',
          end: '1000px',
          scrub: 0.1,
          markers: { startColor: 'blue', endColor: 'blue', fontSize: '12px' },
        },
      })

      // اضافه کردن یک مقدار تاخیری کوچک برای رفع پرش
      gsap.to(appOnDesktopRef.current, {
        duration: 0.1, // مدت زمان کوتاه برای انتقال نرم‌تر
        scale: 0.7, // شروع انیمیشن دوم از همان مقیاس نهایی انیمیشن اول
        opacity: 1,
        scrollTrigger: {
          trigger: desktopRef.current,
          start: '1000px',
          onEnter: () => {
            // انیمیشن دوم پس از رسیدن به نقطه تعریف شده
            gsap.to(appOnDesktopRef.current, {
              duration: 0.15,
              scale: 0.5,
              opacity: 0,
              ease: 'power3.out',
            })
          },
          markers: { startColor: 'green', endColor: 'green', fontSize: '12px' },
        },
      })

      gsap.fromTo(
        departmentRef.current,
        {
          scale: 1, // شروع انیمیشن دوم از همان مقیاس نهایی انیمیشن اول
          delay: 0,
        },
        {
          // مقادیر نهایی
          scale: 0.78,
          delay: 0,
          zIndex: 9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: desktopRef.current,
            start: '1000px',
            end: '2000px',
            scrub: 0.7,
            markers: { startColor: 'red', endColor: 'red', fontSize: '16px' },
            toggleActions: 'play none none reverse',
            onEnter: () => {
              departmentRef.current.style.display = 'block'
              gsap.fromTo(
                departmentRef.current,
                {
                  duration: 0.12,
                  opacity: 0,
                  ease: 'power3.in',
                  scale: 1.15,
                },
                {
                  duration: 0.12,
                  opacity: 1,
                  ease: 'power3.in',
                  scale: 1,
                }
              )
            },
            onLeaveBack: () => {
              setTimeout(() => {
                departmentRef.current.style.display = 'none'
              }, 470) // این مقدار را می‌توانید برای تاخیر بیشتر یا کمتر تنظیم کنید

              gsap.to(departmentRef.current, {
                duration: 0.2,
                opacity: 0,
                ease: 'power3.out',
                scale: 1.5,
              })
              // با یک تاخیر کوتاه display را به none تغییر می‌دهیم
            },
            onLeave: () => {
              departmentRef.current.style.display = 'block'
            },
          },
        }
      )
    }
  }, [])

  // const showCustomToast = () => {
  //   toast('hi')
  // }

  return (
    <div className={styles.page} ref={desktopRef}>
      <DesktopBackground />
      <div className={styles.appOnDesktop} ref={appOnDesktopRef}>
        <AppOnDesktop className={styles.appIcon}  />
      </div>

      <div className={styles.figma} />
      <div className={styles.desktopModulesContainer}>
        <Rideman1 className={styles.rideman1} />
        <Rideman2 className={styles.rideman2} />
        <Image className={styles.human1} src={"/h1.png"} width={1000} height={1000} alt={""} />
        <Image className={styles.human2} src={"/h2.png"} width={1000} height={1000} alt={""} />
        <NavigationBar />
        {/* <Navigation /> */}
        <WindowControlButtons />
        <HeightControl />
        <Stats />
        <People />
        <div className={styles.departmentContainer} ref={departmentRef}>
          <Departments className={styles.department} />
        </div>
        <TaskBar />
      </div>

      <div onClick={showCustomToast} className={styles.sss}>
        تست عملکرد پاپ اپ
      </div>

      {/* <Navigation /> */}

      {/* <GridComponent /> */}
      {/* <NodeDesktopContainer /> */}
      {/* <div onClick={handlePlay} className={styles.music} /> */}
    </div>
  )
}
