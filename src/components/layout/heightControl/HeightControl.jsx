"use client"
import React from 'react'
import styles from './HeightControl.module.css'
import {
  WindowControlCloseButton,
  WindowControlCopyLinkButton,
  WindowControlLightModeButton,
  WindowControlSettingButton,
} from '@/assets/icons/main/mainWindowControl'
import { HeightControlEarthButton, HeightControlGalaxyButton, HeightControlHomeButton, HeightControlLandButton } from '@/assets/icons/main/mainheightControl'

export default function HeightControl() {
  return (
    <div className={styles.buttonsContainer}>
      <HeightControlHomeButton className={styles.button} roll={'hi'} />
      <HeightControlLandButton className={styles.button} roll={'hi'} />
      <HeightControlEarthButton className={styles.button} roll={'hi'} />
      <HeightControlGalaxyButton className={styles.button} roll={'hi'} />
    </div>
  )
}
