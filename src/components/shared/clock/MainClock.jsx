'use client'
import { useEffect, useState } from 'react'
import styles from './MainClock.module.css'
import { ClockSpliteLine } from '@/assets/svgs/taskBar/taskBar'

const MainClock = () => {
  const TimeDisplay = ({ value, label, className }) => {
    // نمایش عدد به صورت دو رقمی (در صورت لزوم)
    const formattedValue = value.toString().padStart(2, '0')

    // بررسی اینکه آیا عدد با ۰ شروع می‌شود یا خیر
    const hasLeadingZero = formattedValue.startsWith('0')

    return (
      <div className={styles.timeContainer}>
        {hasLeadingZero ? (
          <>
            <span className={styles.leadingZero}>0</span>
            <span className={className}>{formattedValue.slice(1)}</span>
          </>
        ) : (
          <span className={className}>{formattedValue}</span>
        )}
      </div>
    )
  }

  const [dateTime, setDateTime] = useState({
    hour: '',
    minute: '',
    month: '',
    year: '',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()

      const options = { timeZone: 'Asia/Tehran', hour12: false }
      const formatter = new Intl.DateTimeFormat('fa-IR', {
        ...options,
        year: 'numeric',
        month: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })

      const parts = formatter.formatToParts(now)

      const dateParts = {}
      parts.forEach((part) => {
        dateParts[part.type] = part.value
      })

      setDateTime({
        hour: dateParts.hour,
        minute: dateParts.minute,
        month: dateParts.month,
        year: dateParts.year.slice(-2), // فقط دو رقم آخر سال
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        {/* ساعت و دقیقه */}
        <TimeDisplay className={styles.valueStyle} value={dateTime.hour} label="ساعت" />
        <TimeDisplay className={styles.valueStyle} value={dateTime.minute} label="دقیقه" />
      </div>
      <ClockSpliteLine className={styles.spliteLine} />
      <div className={styles.date}>
        {/* ماه و سال */}
        <TimeDisplay className={styles.valueStyle} value={dateTime.month} label="ماه" />
        <TimeDisplay className={styles.valueStyle} value={dateTime.year} label="سال" />
      </div>
    </div>
  )
}

export default MainClock
