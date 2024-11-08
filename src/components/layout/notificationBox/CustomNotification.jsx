'use client'
// بارگذاری dynamic از next/dynamic
import dynamic from 'next/dynamic'
// Import کردن استایل‌ها از CSS Module
import styles from './CustomNotification.module.css'
import Typed from 'typed.js'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

// داینامیک سازی کامپوننت و جلوگیری از رندر سمت سرور
const CustomNotificationComponent = dynamic(() => import('./CustomNotification'), {
  ssr: false,
})

// بارگذاری داینامیک ReactPlayer
const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false })

// کامپوننت اصلی با استفاده از استایل‌های ماژولی
const CustomNotification = ({ title, message }) => {
  const titleRef = useRef(null)
  const messageRef = useRef(null)

  useEffect(() => {
    const typedTitle = new Typed(titleRef.current, {
      strings: [title],
      startDelay: 600,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    })

    const typedMessage = new Typed(messageRef.current, {
      strings: [message],
      startDelay: 600,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    })

    return () => {
      typedTitle.destroy()
      typedMessage.destroy()
    }
  }, [title, message])
  return (
    <div className={styles.container}>
      <DynamicReactPlayer
        url={'/medias/videos/hand.mp4'}
        playing
        loop
        muted
        // width={150}
        // height={150}
        className={styles.backgroundVideo}
      />
      <div className={styles.content}>
        <div className={styles.profile}>
          <Image src={'/medias/images/mehrdad.jpg'} width={100} height={100} alt="null" />
          <div className={styles.fromWho}>
            <div className={styles.name}>مهرداد چراغی</div>
            <div className={styles.subName}>مدیر عامل</div>
          </div>
        </div>
        <h4 className={styles.title} ref={titleRef}></h4>
        <p className={styles.message} ref={messageRef}></p>
      </div>
    </div>
  )
}

export default CustomNotification
