'use client'
import Image from 'next/image'
import styles from './page.module.css'
import WindowControlButtons from '@/components/layout/windowControl/WindowControlButton'
import { Navigation } from '@/components/layout/navigationBar/NavigationBar'
import HeightControl from '@/components/layout/heightControl/HeightControl'
import { cursorEventEmitter } from '@/components/cursors/MainCursor'
import Stats from '@/components/layout/stats/Stats'
import People from '@/components/layout/people/People'
import TaskBar from '@/components/layout/taskBar/TaskBar'

export default function Desktop() {


  return (
    <div className={styles.page}>
      <div className={styles.figma} />
      <Navigation />
      <WindowControlButtons />
      <HeightControl />
      <Stats />
      <People />
      <TaskBar />
      {/* <div onClick={handlePlay} className={styles.music} /> */}
    </div>
  )
}
