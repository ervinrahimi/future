// استفاده از رندر فقط کلاینتی برای کامپوننت
'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { DepartmentsIcons } from '@/assets/svgs/departments/departmentsIcons'
import styles from './Departments.module.css'
import Link from 'next/link'

export default function DepartmentsComponent({ className }) {
  const [ali, setAli] = useState(0)

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.departmentHolder}>
        <DepartmentsIcons className={styles.bgIcon} />
        {ali != 0 ? <div className={styles.notification}>22</div> : null}
        <div className={styles.title}>مارکتینگ</div>
      </Link>
      <Link href="/" className={styles.departmentHolder}>
        <DepartmentsIcons className={styles.bgIcon} />
        <div className={styles.notification}>0</div>
        <div className={styles.title}>آی‌تی</div>
      </Link>
      <Link href="/" className={styles.departmentHolder}>
        <DepartmentsIcons className={styles.bgIcon} />
        <div className={styles.notification}>0</div>
        <div className={styles.title}>حقوقی</div>
      </Link>
      <Link href="/" className={styles.departmentHolder}>
        <DepartmentsIcons className={styles.bgIcon} />
        <div className={styles.notification}>0</div>
        <div className={styles.title}>منابع انسانی</div>
      </Link>
      <Link href="/" className={styles.departmentHolder}>
        <DepartmentsIcons className={styles.bgIcon} />
        <div className={styles.notification}>0</div>
        <div className={styles.title}>خدمات مشتریان</div>
      </Link>
      <Link href="/" className={styles.departmentHolder}>
        <DepartmentsIcons className={styles.bgIcon} />
        {ali != 0 ? <div className={styles.notification}>0</div> : null}
        <div className={styles.title}>کنترل کیفی</div>
      </Link>
      <Link href="/" className={styles.departmentHolder}>
        <DepartmentsIcons className={styles.bgIcon} />
        <div className={styles.notification}>0</div>
        <div className={styles.title}>پشتیبانی</div>
      </Link>
    </div>
  )
}

// کامپوننت اصلی که از طریق import دینامیک فراخوانی می‌شود
export const DepartmentsClientOnly = dynamic(() => Promise.resolve(DepartmentsComponent), {
  ssr: false,
})
