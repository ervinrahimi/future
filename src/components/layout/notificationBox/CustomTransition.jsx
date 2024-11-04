'use client'
// components/CustomTransition.js

import { cssTransition } from 'react-toastify'
import styles from './CustomNotification.module.css' // ایمپورت استایل‌های ترنزیشن

/**
 * کاستوم ترنزیشن برای React Toastify
 * از انیمیشن‌های سفارشی برای ورود و خروج استفاده می‌کند
 */
const CustomTransition = cssTransition({
  enter: styles['custom-toast-enter'],
  exit: styles['custom-toast-exit'],
  duration: 500, // تنظیم زمان انیمیشن به 500 میلی‌ثانیه
})

export default CustomTransition
