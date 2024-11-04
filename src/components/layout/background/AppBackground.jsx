'use client'
import React from 'react'
import useHoverCursor from '@/components/cursors/useHoverCursor'
import styles from './AppBackground.module.css'
import { useRouter } from 'next/navigation'
export default function AppBackground() {
  const router = useRouter()
  // تابع هندل کلیک برای هدایت به صفحه اصلی
  const handleClick = () => {
    router.push('/')
  }
  const { handleMouseEnter, handleMouseLeave, handleMouseClick } = useHoverCursor('back', 200)
  return (
    <section
      onClick={() => {handleClick(), handleMouseClick()}}
      className={styles.layoutContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}
