'use client'

import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'
import { usePathname } from 'next/navigation'
const CustomCursor = ({ canUse }) => {
  const pathname = usePathname() // گرفتن مسیر فعلی

  let isHomePage = pathname === '/' // بررسی اینکه آیا در صفحه اصلی هستیم یا خیر
  if (canUse == true) {
    isHomePage = true
  }
  const cursorImmediateRef = useRef(null)
  const cursorSmoothRef = useRef(null)

  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const immediateX = useRef(0)
  const immediateY = useRef(0)

  const smoothX = useRef(0)
  const smoothY = useRef(0)

  const cursorSize = 15

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX - cursorSize / 2
      mouseY.current = event.clientY - cursorSize / 2
    }

    window.addEventListener('mousemove', handleMouseMove)

    const updateImmediateCursor = () => {
      immediateX.current = mouseX.current
      immediateY.current = mouseY.current

      if (cursorImmediateRef.current) {
        cursorImmediateRef.current.style.transform = `translate3d(${immediateX.current}px, ${immediateY.current}px, 0)`
      }
      requestAnimationFrame(updateImmediateCursor)
    }

    const updateSmoothCursor = () => {
      const speed = 0.4

      smoothX.current += (mouseX.current - smoothX.current) * speed
      smoothY.current += (mouseY.current - smoothY.current) * speed

      if (cursorSmoothRef.current) {
        cursorSmoothRef.current.style.transform = `translate3d(${smoothX.current}px, ${smoothY.current}px, 0)`
      }
      requestAnimationFrame(updateSmoothCursor)
    }

    updateImmediateCursor()
    updateSmoothCursor()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const cursorStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    // pointerEvents: 'none',
    willChange: 'transform',
    zIndex: '0',
  }

  return (
    <>
      {/* دایره با حرکت سفت */}
      {/* <svg
        ref={cursorImmediateRef}
        width={cursorSize}
        height={cursorSize}
        style={{
          ...cursorStyle,
        }}
      >
        <circle
          cx={cursorSize / 2}
          cy={cursorSize / 2}
          r={(cursorSize - 2) / 2}
          stroke="red" // رنگ قرمز برای تمایز
          strokeWidth="2"
          fill="none"
        />
      </svg> */}
      {/* دایره با حرکت نرم */}
      {isHomePage && (
        <div className={styles.positionC}>
          <svg
            ref={cursorSmoothRef}
            width={cursorSize}
            height={cursorSize}
            style={{
              ...cursorStyle,
            }}
          >
            <circle
              cx={cursorSize / 2}
              cy={cursorSize / 2}
              r={(cursorSize - 2) / 2}
              stroke="black" // رنگ آبی برای تمایز
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
        </div>
      )}{' '}
      {/* نمایش کاستوم کرسر فقط در صفحه اصلی */}
    </>
  )
}

export default CustomCursor
