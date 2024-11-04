'use client'
import React, { useState } from 'react'
import styles from './AppOnDesktop.module.css'
import { DndContext, useDraggable } from '@dnd-kit/core'
import { NodeDesktopContainer, AppDesktopIcon } from '@/assets/svgs/appDesktop/appDesktop'
import { useRouter } from 'next/navigation'

const DraggableItem = () => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable-item',
  })
  const [isDragging, setIsDragging] = useState(false)
  const [clickTimeout, setClickTimeout] = useState(null)
  const router = useRouter()

  const handleMouseDown = () => {
    const timeout = setTimeout(() => {
      setIsDragging(true)
    }, 150) // زمانی برای تشخیص نگه‌داشتن موس

    setClickTimeout(timeout)
  }

  const handleMouseUp = () => {
    clearTimeout(clickTimeout)

    if (isDragging) {
      setIsDragging(false) // اطمینان از ریست شدن حالت درگ بلافاصله پس از درگ
    } else {
      // اگر درگ نبوده، لینک به صورت دستی فعال می‌شود
      router.push('/application/12/12')
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false) // بازگرداندن حالت به حالت اولیه بعد از اتمام درگ
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      }}
      {...listeners}
      {...attributes}
      className={styles.dragBox}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.appContainer}>
        <NodeDesktopContainer className={styles.nodeContainerIcon} />
        <AppDesktopIcon className={styles.appContainerIcon} />
      </div>
    </div>
  )
}

const AppOnDesktop = () => (
  <DndContext>
    <DraggableItem />
  </DndContext>
)

export default AppOnDesktop
