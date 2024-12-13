'use client'
import React from 'react'
import useHoverCursor from '@/components/cursors/useHoverCursor'
import styles from './AppBackground.module.css'
import Link from 'next/link'
export default function AppBackground() {
  const { handleMouseEnter, handleMouseLeave, handleMouseClick } = useHoverCursor('back', 200)
  return (
    <Link
      href="/"
      className={styles.layoutContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></Link>
  )
}
