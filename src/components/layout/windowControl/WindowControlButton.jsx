"use client"
import {
  WindowControlButtonFrame,
  WindowControlCloseButton,
  WindowControlCopyLinkButton,
  WindowControlLightModeButton,
  WindowControlSettingButton,
} from '@/assets/icons/main/mainWindowControl'
import React from 'react'
import styles from './WindowControlButton.module.css'

export default function WindowControlButtons() {
  return (
    <div className={styles.buttonsContainer}>
      <WindowControlCloseButton className={styles.button} roll={'hi'} />
      <WindowControlLightModeButton className={styles.button} roll={'hi'} />
      <WindowControlCopyLinkButton className={styles.button} roll={'hi'} />
      <WindowControlSettingButton className={styles.button} roll={'hi'} />
    </div>
  )
}
