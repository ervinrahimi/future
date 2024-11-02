'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './MainLoader.module.css'
import Image from 'next/image'

// بارگذاری داینامیک ReactPlayer
const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function LoadingPage() {
  const [isVisible, setIsVisible] = useState(true)

  // آدرس ثابت ویدیو در سرور لوکال الکترون
  const videoPath = 'http://localhost:3001/assets/galaxy.mp4'

  // تابعی برای پنهان کردن صفحه
  const handleHide = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null // اگر isVisible false باشد، چیزی نمایش داده نمی‌شود

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={'/medias/images/future-logo-2.png'}
          width={1000}
          height={1000}
          alt="future-logo"
        />
        <h3>سیستم عامل در حالت غیر فعال قرار دارد</h3>
        <button
          onClick={() => {
            if (window.electronAPI && window.electronAPI.closeApp) {
              window.electronAPI.closeApp()
            } else {
              console.error('electronAPI.closeApp is not available.')
            }
          }}
          className={styles.closeButton}
        >
          بستن صفحه
        </button>
      </div>
      <div className={styles.videoContainer}>
        {videoPath ? (
          <DynamicReactPlayer
            url={videoPath}
            playing
            loop
            muted
            className={styles.backgroundVideo}
          />
        ) : (
          <p>ویدیو در دسترس نیست</p> // پیام خطا یا محتوای جایگزین
        )}
      </div>
    </div>
  )
}
