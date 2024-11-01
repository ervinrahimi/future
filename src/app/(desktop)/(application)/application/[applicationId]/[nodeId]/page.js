'use client'
import styles from './page.module.css'
import MainAppWindow from '@/components/appWindows/MainAppWindow'
import React from 'react'
import { useState, useRef } from 'react'

export default function NodePage() {
  return (
    <div className={styles.container}>
      <MainAppWindow />
    </div>
  )
}
