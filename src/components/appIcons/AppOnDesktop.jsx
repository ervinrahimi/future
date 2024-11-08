'use client'
import dynamic from 'next/dynamic'
import { DndContext, useDraggable } from '@dnd-kit/core'
import Link from 'next/link'
import { useState } from 'react'
import styles from './AppOnDesktop.module.css'
import { NodeDesktopContainer, AppDesktopIcon } from '@/assets/svgs/appDesktop/appDesktop'

// کامپوننت اصلی به عنوان کامپوننت داینامیک با ssr غیرفعال
const AppOnDesktop = dynamic(() => Promise.resolve(MainComponent), { ssr: false })

const DraggableItem = ({ id, className, className2, isDragging, onMouseDown, onMouseUp, zIndex, isDragActive }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  })

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        zIndex: zIndex,
      }}
      {...listeners}
      {...attributes}
      className={`${styles.dragBox} ${className ? className : className2} ${isDragActive ? styles.dragActive : ''}`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {!isDragging ? (
        <Link href="/application/12/12">
          <div className={`${styles.appContainer} ${isDragActive ? styles.dragActiveContainer : ''}`}>
            <NodeDesktopContainer className={styles.nodeContainerIcon} />
            <AppDesktopIcon className={styles.appContainerIcon} />
          </div>
        </Link>
      ) : (
        <div className={`${styles.appContainer} ${isDragActive ? styles.dragActiveContainer : ''}`}>
          <NodeDesktopContainer className={styles.nodeContainerIcon} />
          <AppDesktopIcon className={styles.appContainerIcon} />
        </div>
      )}
    </div>
  )
}

const MainComponent = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 })
  const [draggingItem, setDraggingItem] = useState(null)

  const handleMouseDown = (event, id) => {
    setInitialMousePos({ x: event.clientX, y: event.clientY })
    setIsDragging(false)
    setDraggingItem(id)
    window.addEventListener('mousemove', handleMouseMove)
  }

  const handleMouseMove = (event) => {
    const distance = Math.sqrt(
      Math.pow(event.clientX - initialMousePos.x, 2) +
      Math.pow(event.clientY - initialMousePos.y, 2)
    )

    if (distance > 5) {
      setIsDragging(true)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove)
    setDraggingItem(null)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggingItem(null)
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <DraggableItem
        id="item1"
        className={styles.dd}
        isDragging={isDragging}
        onMouseDown={(event) => handleMouseDown(event, "item1")}
        onMouseUp={handleMouseUp}
        zIndex={draggingItem === "item1" ? 100 : 1}
        isDragActive={draggingItem === "item1"}
      />
      <DraggableItem
        id="item2"
        className2={styles.dd2}
        isDragging={isDragging}
        onMouseDown={(event) => handleMouseDown(event, "item2")}
        onMouseUp={handleMouseUp}
        zIndex={draggingItem === "item2" ? 100 : 1}
        isDragActive={draggingItem === "item2"}
      />
      <DraggableItem
        id="item3"
        className={styles.dd}
        isDragging={isDragging}
        onMouseDown={(event) => handleMouseDown(event, "item3")}
        onMouseUp={handleMouseUp}
        zIndex={draggingItem === "item3" ? 100 : 1}
        isDragActive={draggingItem === "item3"}
      />
    </DndContext>
  )
}

export default AppOnDesktop
