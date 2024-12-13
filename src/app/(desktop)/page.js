'use client'

import styles from './page.module.css'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    // اسکرول به بالا در بارگذاری اولیه یا رفرش صفحه
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []) // وابستگی خالی برای بارگذاری اولیه


  return <div className={styles.page} />
}
