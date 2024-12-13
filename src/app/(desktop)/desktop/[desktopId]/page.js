'use client'
import Image from 'next/image'
import styles from './page.module.css'
import WindowControlButtons from '@/components/layout/windowControl/WindowControlButton'
import HeightControl from '@/components/layout/heightControl/HeightControl'
import Stats from '@/components/layout/stats/Stats'
import People from '@/components/layout/people/People'
import TaskBar from '@/components/layout/taskBar/TaskBar'
import AppOnDesktop from '@/components/appIcons/AppOnDesktop'
import { NodeDesktopContainer, AppDesktopIcon } from '@/assets/svgs/appDesktop/appDesktop'
import GridComponent from '@/components/appIcons/AppsGrid'

import { useNotification } from '@/components/layout/notificationBox/NotificationContext'
import NavigationBar from '@/components/layout/navigationBar/NavigationBar'

export default function Desktop() {
  const handleClick = () => {
    toast.success('این یک پیغام موفقیت است!')
  }
  return (
    <div className={styles.page}>
      <div className={styles.figma} />
      {/* <Navigation /> */}
      <WindowControlButtons />
      <HeightControl />
      <Stats />
      <People />
      <TaskBar />
      <AppOnDesktop />
      <div onClick={handleClick}>sssssssssssssssssssssssss</div>
      {/* <GridComponent /> */}
      {/* <NodeDesktopContainer /> */}
      {/* <div onClick={handlePlay} className={styles.music} /> */}
    </div>
  )
}
