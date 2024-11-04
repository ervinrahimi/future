'use client'
import Image from 'next/image'
import styles from './Desktop.module.css'
import WindowControlButtons from '@/components/layout/windowControl/WindowControlButton'
import { Navigation } from '@/components/layout/navigationBar/NavigationBar'
import HeightControl from '@/components/layout/heightControl/HeightControl'
import Stats from '@/components/layout/stats/Stats'
import People from '@/components/layout/people/People'
import TaskBar from '@/components/layout/taskBar/TaskBar'
import AppOnDesktop from '@/components/appIcons/AppOnDesktop'
import { NodeDesktopContainer, AppDesktopIcon } from '@/assets/svgs/appDesktop/appDesktop'
import GridComponent from '@/components/appIcons/AppsGrid'
import { toast } from 'react-toastify'
import CustomNotification from '../notificationBox/CustomNotification'

export default function Desktop() {
  const showCustomToast = () => {
    toast(<CustomNotification title="نوتیفیکیشن" message="این یک پیام ساده است." />, {
      autoClose: 120000, // مدت زمان بسته شدن خودکار
      closeButton: false, // غیر فعال کردن دکمه بستن پیش‌فرض
      hideProgressBar: true, // غیر فعال کردن نوار پیشرفت پیش‌فرض
    })
  }

  // const showCustomToast = () => {
  //   toast('hi')
  // }

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
      <div onClick={showCustomToast}>sssssssssssssssssssssssss</div>
      {/* <GridComponent /> */}
      {/* <NodeDesktopContainer /> */}
      {/* <div onClick={handlePlay} className={styles.music} /> */}
    </div>
  )
}
