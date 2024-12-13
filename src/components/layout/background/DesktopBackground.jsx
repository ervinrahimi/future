import React from 'react'
import styles from './DesktopBackground.module.css'
import Image from 'next/image'

export default function DesktopBackground() {
  return <div className={styles.container} >
    <Image src="/desktop/backgrounds/main-optimized.jpg" width={2000} height={2000} alt="background" />
  </div>
}
