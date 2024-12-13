'use client'

import { useState } from 'react'
import styles from './People.module.css'

export default function People() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // داده‌های آواتار به داخل کامپوننت منتقل شده‌اند
  const avatars = [
    { url: '/sample.jpg', alt: 'User 1' },
    { url: '/sample.jpg', alt: 'User 2' },
    { url: '/sample.jpg', alt: 'User 3' },
    { url: '/sample.jpg', alt: 'User 4' },
    { url: '/sample.jpg', alt: 'User 5' },
    { url: '/sample.jpg', alt: 'User 6' },
    { url: '/sample.jpg', alt: 'User 7' },
    { url: '/sample.jpg', alt: 'User 8' },
    { url: '/sample.jpg', alt: 'User 9' },
    { url: '/sample.jpg', alt: 'User 10' },
    { url: '/sample.jpg', alt: 'User 11' },
    { url: '/sample.jpg', alt: 'User 12' },
  ]
  
  const visibleAvatars = isExpanded ? avatars : avatars.slice(0, 3)
  const hiddenCount = avatars.length - visibleAvatars.length
  
  return (
    <div className={styles.container}>
      {visibleAvatars.map((avatar, index) => (
        <div key={index} className={styles.avatarWrapper}>
          <img 
            src={avatar.url} 
            alt={avatar.alt || 'User avatar'} 
            className={styles.avatar}
          />
        </div>
      ))}
      
      {!isExpanded && hiddenCount > 0 && (
        <div className={styles.counter}>
          +{hiddenCount}
        </div>
      )}
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.addButton}
        aria-label={isExpanded ? 'Show less' : 'Show more'}
      >
        +
      </button>
    </div>
  )
}

