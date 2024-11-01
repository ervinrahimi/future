'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './MainCursor.module.css'

const MainCursor = () => {
  const canvasRef = useRef(null)

  // State variables for customization
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [innerColor, setInnerColor] = useState('rgba(0, 0, 0, 1)')
  const [outerColor, setOuterColor] = useState('rgba(0, 0, 0, 1)')
  const [innerSize, setInnerSize] = useState(1.5)
  const [outerSize, setOuterSize] = useState(5)
  const [outerRingWidth, setOuterRingWidth] = useState(1.3)

  // Handle mouse position update on body
  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Resize canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Draw custom cursor with inner circle and outer ring
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw inner circle
      ctx.beginPath()
      ctx.arc(mousePos.x, mousePos.y, innerSize, 0, Math.PI * 2)
      ctx.fillStyle = innerColor
      ctx.fill()

      // Draw outer ring
      ctx.beginPath()
      ctx.arc(mousePos.x, mousePos.y, outerSize, 0, Math.PI * 2)
      ctx.strokeStyle = outerColor
      ctx.lineWidth = outerRingWidth // Thickness of the outer ring
      ctx.stroke()

      // Request next frame for smooth animation
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [mousePos, innerColor, outerColor, innerSize, outerSize, outerRingWidth])

  useEffect(() => {
    // Add mouse move event listener on body
    document.body.addEventListener('mousemove', handleMouseMove)

    // Cleanup on unmount
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.cursor} />
}

export default MainCursor
