'use client'
import Window from '@/components/appWindows/Window'
import styles from './page.module.css'
import React from 'react'
import { useState, useRef } from 'react'

export default function NodePage() {
  return (
    <div className={styles.container}>
      <Window className={styles.appWindow}></Window>
    </div>
  )
}
