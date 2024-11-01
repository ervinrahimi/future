import React from 'react'
import styles from './HeightControl.module.css'
import {
  WindowControlCloseButton,
  WindowControlCopyLinkButton,
  WindowControlLightModeButton,
  WindowControlSettingButton,
} from '@/assets/icons/main/mainWindowControl'

export default function HeightControl() {
  return (
    <div className={styles.buttonsContainer}>
      <WindowControlCloseButton className={styles.button} roll={'hi'} />
      <WindowControlLightModeButton className={styles.button} roll={'hi'} />
      <WindowControlCopyLinkButton className={styles.button} roll={'hi'} />
      <WindowControlSettingButton className={styles.button} roll={'hi'} />
    </div>
  )
}
