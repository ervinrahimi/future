'use client'
// useHoverCursor.js
import { useCursor } from './CursorContext'
import { useRef, useState } from 'react'

const useHoverCursor = (cursorType = 'cross', delay = 300) => {
  const { setCursor, resetCursor } = useCursor()
  const hoverTimeout = useRef(null)
  const [hoverTriggered, setHoverTriggered] = useState(false) // بررسی اینکه آیا هاور یک بار اجرا شده است یا نه

  const handleMouseEnter = () => {
    if (!hoverTriggered) {
      // تنها زمانی اجرا شود که هنوز هاور یک بار هم اجرا نشده باشد
      hoverTimeout.current = setTimeout(() => {
        setCursor(cursorType) // تغییر به نوع ماوس دلخواه پس از تأخیر
        setHoverTriggered(true) // تنظیم پرچم برای جلوگیری از اجرای مجدد
      }, delay)
    }
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current) // لغو تایمر در صورت خروج سریع
    resetCursor() // بازگشت به ماوس پیش‌فرض
    setHoverTriggered(false) // بازنشانی پرچم برای استفاده دوباره در آینده
  }

  const handleMouseClick = () => {
    clearTimeout(hoverTimeout.current) // لغو تایمر در صورت خروج سریع
    resetCursor() // بازگشت به ماوس پیش‌فرض
    setHoverTriggered(false) // بازنشانی پرچم برای استفاده دوباره در آینده
  }

  return { handleMouseEnter, handleMouseLeave, handleMouseClick }
}

export default useHoverCursor
