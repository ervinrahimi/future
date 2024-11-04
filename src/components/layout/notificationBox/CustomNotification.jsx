// بارگذاری dynamic از next/dynamic
import dynamic from 'next/dynamic'
// Import کردن استایل‌ها از CSS Module
import styles from './CustomNotification.module.css'

// داینامیک سازی کامپوننت و جلوگیری از رندر سمت سرور
const CustomNotificationComponent = dynamic(() => import('./CustomNotification'), {
  ssr: false,
})

// کامپوننت اصلی با استفاده از استایل‌های ماژولی
const CustomNotification = ({ title, message, onClose }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.message}>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>
        ×
      </button>
    </div>
  )
}

export default CustomNotification
